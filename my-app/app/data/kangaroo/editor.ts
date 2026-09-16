import type { Question, QuestionOption, QuestionSet } from "./types";

export type EditableQuestion = {
  number: number;
  points: Question["points"];
  prompt: string;
  image?: string;
  imageAlt?: string;
  imageExtra?: string;
  options: QuestionOption[];
  answer: number;
  hint: string;
  explanation: string;
};

export type QuestionSetDraft = {
  version: 1;
  updatedAt: string;
  questions: EditableQuestion[];
};

function optionType(text: string, image?: string): QuestionOption["type"] {
  if (text && image) return "mixed";
  if (image) return "image";
  return "text";
}

export function toEditableQuestion(question: Question): EditableQuestion {
  return {
    number: question.number,
    points: question.points,
    prompt: question.prompt,
    image: question.image,
    imageAlt: question.imageAlt,
    imageExtra: question.imageExtra,
    options: question.optionContent ?? question.options.map((text, index) => {
      const image = question.optionImages?.[index];
      const visibleText = image ? "" : text;
      return {
        id: `${question.number}-${index}`,
        type: optionType(visibleText, image),
        text: visibleText,
        image,
        imageAlt: `${String.fromCharCode(65 + index)} option`,
      };
    }),
    answer: question.answer,
    hint: question.hint,
    explanation: question.explanation,
  };
}

export function toEditableQuestions(questions: Question[]) {
  return questions.map(toEditableQuestion);
}

export function mergeQuestionSet(base: QuestionSet, draft?: QuestionSetDraft | null): QuestionSet {
  if (!draft?.questions?.length) return base;

  const draftByNumber = new Map(draft.questions.map((question) => [question.number, question]));
  return {
    ...base,
    questions: base.questions.map((question) => {
      const edited = draftByNumber.get(question.number);
      if (!edited) return question;

      const optionImages = edited.options.some((option) => option.image)
        ? edited.options.map((option) => option.image ?? "")
        : undefined;

      return {
        ...question,
        points: edited.points,
        prompt: edited.prompt,
        image: edited.image,
        imageAlt: edited.imageAlt,
        imageExtra: edited.imageExtra,
        options: edited.options.map((option, index) => option.text?.trim() || question.options[index] || String.fromCharCode(65 + index)),
        optionImages,
        optionContent: edited.options,
        answer: Math.min(Math.max(edited.answer, 0), Math.max(edited.options.length - 1, 0)),
        hint: edited.hint,
        explanation: edited.explanation,
      };
    }),
  };
}
