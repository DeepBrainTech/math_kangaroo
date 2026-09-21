import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { questionSets } from "../../../data/kangaroo";
import { mergeQuestionSet, type EditableQuestion, type QuestionSetDraft } from "../../../data/kangaroo/editor";
import type { Question, QuestionOption } from "../../../data/kangaroo/types";

export const runtime = "nodejs";

type SaveBody = {
  setId?: string;
  questions?: EditableQuestion[];
  removedImages?: string[];
};

function sourceFileForSet(setId: string) {
  if (setId === "2010") return path.join("app", "data", "kangaroo", "editions", "grades-3-4", "ecolier", "2010.ts");
  if (/^ecolier-(2009|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020|2021|2022|2023|2024|2025)$/.test(setId)) {
    return path.join("app", "data", "kangaroo", "editions", "grades-3-4", "ecolier", `${setId.slice("ecolier-".length)}.ts`);
  }
  if (/^(2014|2015|2016|2017|2018|2019|2020|2021|2022|2023|2024|2025)$/.test(setId)) {
    return path.join("app", "data", "kangaroo", "editions", "grades-1-2", "felix", `${setId}.ts`);
  }
  return null;
}

function assetFolderForSet(setId: string) {
  if (setId === "2010") return path.join("public", "assets", "kangaroo", "grades-3-4", "ecolier", "2010", "questions");
  if (/^ecolier-\d{4}$/.test(setId)) return path.join("public", "assets", "kangaroo", "grades-3-4", "ecolier", setId.slice("ecolier-".length), "questions");
  return path.join("public", "assets", "kangaroo", "grades-1-2", "felix", setId, "questions");
}

function assetUrlForSet(setId: string) {
  if (setId === "2010") return `/assets/kangaroo/grades-3-4/ecolier/2010`;
  if (/^ecolier-\d{4}$/.test(setId)) return `/assets/kangaroo/grades-3-4/ecolier/${setId.slice("ecolier-".length)}`;
  return `/assets/kangaroo/grades-1-2/felix/${setId}`;
}

function localEditorAssetForUrl(value: string, setId: string) {
  const prefix = assetUrlForSet(setId) + "/questions/";
  if (!value.startsWith(prefix)) return null;

  const filename = value.slice(prefix.length);
  if (!/^editor-q-[a-zA-Z0-9_-]+\.(png|jpg|webp|gif)$/i.test(filename)) return null;

  const absoluteFolder = path.resolve(process.cwd(), assetFolderForSet(setId));
  const absoluteFile = path.resolve(absoluteFolder, filename);
  return path.dirname(absoluteFile) === absoluteFolder ? absoluteFile : null;
}

function extensionForMime(mime: string) {
  if (mime === "image/jpeg") return "jpg";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";
  return "png";
}

async function materializeImage(value: string | undefined, setId: string, filename: string) {
  if (!value?.startsWith("data:image/")) return value;

  const match = value.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) throw new Error("Invalid image data");
  const [, mime, encoded] = match;
  const extension = extensionForMime(mime);
  const safeFilename = filename.replace(/[^a-zA-Z0-9_-]/g, "_");
  const relativeFolder = assetFolderForSet(setId);
  const absoluteFolder = path.join(process.cwd(), relativeFolder);
  await mkdir(absoluteFolder, { recursive: true });
  await writeFile(path.join(absoluteFolder, `${safeFilename}.${extension}`), Buffer.from(encoded, "base64"));
  return `${assetUrlForSet(setId)}/questions/${safeFilename}.${extension}`;
}

function referencedImageUrls(questions: Question[]) {
  const referenced = new Set<string>();
  for (const question of questions) {
    for (const image of [question.image, question.imageExtra, ...(question.optionImages ?? [])]) {
      if (image) referenced.add(image);
    }
    for (const option of question.optionContent ?? []) {
      if (option.image) referenced.add(option.image);
    }
  }
  return referenced;
}

async function removeMaterializedImages(values: string[], setId: string, referenced: Set<string>) {
  const deleted: string[] = [];
  const seen = new Set<string>();

  for (const value of values) {
    if (seen.has(value) || referenced.has(value)) continue;
    seen.add(value);

    const localFile = localEditorAssetForUrl(value, setId);
    if (!localFile) continue;

    try {
      await unlink(localFile);
      deleted.push(value);
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") continue;
      throw error;
    }
  }

  return deleted;
}

function serialize(value: unknown, level = 0): string {
  const indent = "  ".repeat(level);
  const childIndent = "  ".repeat(level + 1);

  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((item) => `${childIndent}${serialize(item, level + 1)}`).join(",\n")}\n${indent}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).filter(([, item]) => item !== undefined);
    if (entries.length === 0) return "{}";
    return `{\n${entries.map(([key, item]) => `${childIndent}${key}: ${serialize(item, level + 1)}`).join(",\n")}\n${indent}}`;
  }
  return "undefined";
}

function editableQuestionIsValid(question: EditableQuestion) {
  return Number.isInteger(question.number)
    && question.options.length >= 2
    && question.options.every((option) => (Boolean(option.text?.trim()) || Boolean(option.image)) && (option.type !== "image" || Boolean(option.image)))
    && Number.isInteger(question.answer)
    && question.answer >= 0
    && question.answer < question.options.length;
}

function sourceForQuestionSet(setId: string, questions: Question[]) {
  const quiz = questionSets[setId];
  const ecolierYear = setId.match(/^ecolier-(\d{4})$/)?.[1];
  const questionName = ecolierYear ? `questions${ecolierYear}Ecolier` : `questions${setId}`;
  const sectionsName = ecolierYear ? "sections" : `sections${setId}`;
  const editionName = ecolierYear ? `edition${ecolierYear}Ecolier` : `edition${setId}`;
  const source = [
    'import type { Question, QuestionSet, Section } from "../../../types";',
    "",
    `const ${questionName}: Question[] = ${serialize(questions)};`,
    "",
    `const ${sectionsName}: Section[] = ${serialize(quiz.sections)};`,
    "",
    `export const ${editionName}: QuestionSet = {`,
    `  id: ${serialize(quiz.id)},`,
    `  year: ${serialize(quiz.year)},`,
    `  group: ${serialize(quiz.group)},`,
    `  grades: ${serialize(quiz.grades)},`,
    `  location: ${serialize(quiz.location)},`,
    `  date: ${serialize(quiz.date)},`,
    `  timeLimitMinutes: ${serialize(quiz.timeLimitMinutes)},`,
    ...(quiz.sourceUrl ? [`  sourceUrl: ${serialize(quiz.sourceUrl)},`] : []),
    `  questions: ${questionName},`,
    `  sections: ${sectionsName},`,
    "};",
    "",
  ].join("\n");

  return source;
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return Response.json({ error: "The question bank editor is available only in local development." }, { status: 403 });
  }

  try {
    const body = await request.json() as SaveBody;
    const setId = body.setId;
    const questions = body.questions;
    const relativeSourceFile = setId ? sourceFileForSet(setId) : null;
    const base = setId ? questionSets[setId] : undefined;

    if (!setId || !relativeSourceFile || !base || !questions || questions.length !== base.questions.length) {
      return Response.json({ error: "Invalid question set or question data." }, { status: 400 });
    }
    if (!questions.every(editableQuestionIsValid)) {
      return Response.json({ error: "Each question must have at least two valid options and one correct answer." }, { status: 400 });
    }

    const removedImages = Array.isArray(body.removedImages)
      ? body.removedImages.filter((value): value is string => typeof value === "string")
      : [];

    const materializedQuestions: EditableQuestion[] = [];
    for (const question of questions) {
      const materializedOptions: QuestionOption[] = [];
      for (let index = 0; index < question.options.length; index += 1) {
        const option = question.options[index];
        materializedOptions.push({
          ...option,
          image: await materializeImage(option.image, setId, `editor-q-${String(question.number).padStart(2, "0")}-option-${String.fromCharCode(97 + index)}`),
        });
      }
      materializedQuestions.push({
        ...question,
        image: await materializeImage(question.image, setId, `editor-q-${String(question.number).padStart(2, "0")}`),
        imageExtra: await materializeImage(question.imageExtra, setId, `editor-q-${String(question.number).padStart(2, "0")}-extra`),
        options: materializedOptions,
      });
    }

    const draft: QuestionSetDraft = { version: 1, updatedAt: new Date().toISOString(), questions: materializedQuestions };
    const merged = mergeQuestionSet(base, draft);
    const source = sourceForQuestionSet(setId, merged.questions);
    await writeFile(path.join(process.cwd(), relativeSourceFile), source, "utf8");
    const deletedImages = await removeMaterializedImages(removedImages, setId, referencedImageUrls(merged.questions));

    return Response.json({
      file: relativeSourceFile.replaceAll(path.sep, "/"),
      questions: merged.questions,
      deletedImages,
      message: `${relativeSourceFile} was written successfully.`,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not write the question bank file.";
    return Response.json({ error: message }, { status: 500 });
  }
}
