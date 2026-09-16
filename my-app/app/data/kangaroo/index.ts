import type { QuestionSet } from "./types";
import { edition2010 } from "./editions/grades-3-4/ecolier/2010";
import { edition2014 } from "./editions/grades-1-2/felix/2014";
import { edition2015 } from "./editions/grades-1-2/felix/2015";
import { edition2016 } from "./editions/grades-1-2/felix/2016";
import { edition2017 } from "./editions/grades-1-2/felix/2017";
import { edition2018 } from "./editions/grades-1-2/felix/2018";
import { edition2019 } from "./editions/grades-1-2/felix/2019";
import { edition2020 } from "./editions/grades-1-2/felix/2020";
import { edition2021 } from "./editions/grades-1-2/felix/2021";
import { edition2022 } from "./editions/grades-1-2/felix/2022";
import { edition2023 } from "./editions/grades-1-2/felix/2023";
import { edition2024 } from "./editions/grades-1-2/felix/2024";
import { edition2025 } from "./editions/grades-1-2/felix/2025";

const rawQuestionSets: Record<string, QuestionSet> = {
  "2010": edition2010,
  "2014": edition2014,
  "2015": edition2015,
  "2016": edition2016,
  "2017": edition2017,
  "2018": edition2018,
  "2019": edition2019,
  "2020": edition2020,
  "2021": edition2021,
  "2022": edition2022,
  "2023": edition2023,
  "2024": edition2024,
  "2025": edition2025,
};

export const questionSets: Record<string, QuestionSet> = rawQuestionSets;
