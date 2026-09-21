import type { Difficulty, Question, QuestionSet, Section } from "./types";
import { supplementalOptionAssets, visualAssets } from "./visual-assets";

export const letters = ["A", "B", "C", "D", "E"] as const;
export type Letter = (typeof letters)[number];

export const fifteenSections: Section[] = [
  { points: 3, label: "Foundations", range: "Questions 1-5", accent: "coral" },
  { points: 4, label: "Reasoning", range: "Questions 6-10", accent: "blue" },
  { points: 5, label: "Challenge", range: "Questions 11-15", accent: "purple" },
];

export const twentyFourSections: Section[] = [
  { points: 3, label: "Foundations", range: "Questions 1-8", accent: "coral" },
  { points: 4, label: "Reasoning", range: "Questions 9-16", accent: "blue" },
  { points: 5, label: "Challenge", range: "Questions 17-24", accent: "purple" },
];

export function question(
  year: number,
  number: number,
  points: Difficulty,
  prompt: string,
  answer: Letter,
  explanation: string,
  hint: string,
  options: readonly string[] = letters,
  sourcePage?: number,
): Question {
  return {
    number,
    points,
    prompt,
    options: [...options],
    answer: letters.indexOf(answer),
    explanation,
    hint,
    ...(sourcePage ? { sourcePage } : {}),
  };
}

function sourceUrl(year: number) {
  return `https://www.matematica.pt/en/docs/kangaroo/enunciados/${year}/${year}_Felix.pdf`;
}

function addQuestionAssets(year: number, questions: Question[], assetBase: string) {
  return questions.map((item) => {
    if (!item.sourcePage || item.image) return item;

    const assetInfo = visualAssets[year]?.[item.number];
    const supplementalOptions = supplementalOptionAssets[year]?.[item.number];
    if (!assetInfo && !supplementalOptions) return item;
    const questionPath = `${assetBase}/questions/q-${String(item.number).padStart(2, "0")}`;
    const optionImages = supplementalOptions ?? (assetInfo?.options === 5
      ? letters.map((_, index) => `${questionPath}-option-${String.fromCharCode(97 + index)}.png`)
      : undefined);

    return {
      ...item,
      image: assetInfo?.diagram ? `${questionPath}-diagram.png` : undefined,
      optionImages,
      imageAlt: item.imageAlt ?? `Original ${year} Felix question ${item.number}`,
      imageClass: item.imageClass ?? "question-diagram",
    };
  });
}

export function makeSet(
  year: number,
  questions: Question[],
  date: string,
  assetBase: string,
  sections = fifteenSections,
): QuestionSet {
  return {
    id: String(year),
    year,
    group: "Felix",
    grades: "Grades 1-2",
    location: year === 2020 || year === 2021 ? "Brazil / KSF" : "Austria",
    date,
    timeLimitMinutes: 60,
    sourceUrl: sourceUrl(year),
    questions: addQuestionAssets(year, questions, assetBase),
    sections,
  };
}
