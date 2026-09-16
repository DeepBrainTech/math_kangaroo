export type Difficulty = 3 | 4 | 5;

export type GradeBand =
  | "Grades 1-2"
  | "Grades 3-4"
  | "Grades 5-6"
  | "Grades 7-8"
  | "Grades 9-10"
  | "Grades 11-12";

export type KangarooGroup = "Felix" | "Ecolier" | "Benjamin" | "Kadett" | "Junior" | "Student";

export type QuestionOption = {
  id: string;
  type: "text" | "image" | "mixed";
  text?: string;
  image?: string;
  imageAlt?: string;
};

export type Question = {
  number: number;
  points: Difficulty;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  hint: string;
  optionContent?: QuestionOption[];
  image?: string;
  imageExtra?: string;
  imageChoices?: boolean;
  optionImages?: string[];
  optionSymbols?: string[][];
  imageAlt?: string;
  imageClass?: string;
  sourcePage?: number;
};

export type QuestionVisualAssets = {
  diagram?: boolean;
  options?: number;
};

export type Section = {
  points: Difficulty;
  label: string;
  range: string;
  accent: "coral" | "blue" | "purple";
};

export type QuestionSet = {
  id: string;
  year: number;
  group: KangarooGroup;
  grades: GradeBand;
  location: string;
  date: string;
  timeLimitMinutes: number;
  sourceUrl?: string;
  questions: Question[];
  sections: Section[];
};
