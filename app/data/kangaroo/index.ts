import type { QuestionSet } from "./types";
import { edition2009Ecolier } from "./editions/grades-3-4/ecolier/2009";
import { edition2010 } from "./editions/grades-3-4/ecolier/2010";
import { edition2011Ecolier } from "./editions/grades-3-4/ecolier/2011";
import { edition2012Ecolier } from "./editions/grades-3-4/ecolier/2012";
import { edition2013Ecolier } from "./editions/grades-3-4/ecolier/2013";
import { edition2014Ecolier } from "./editions/grades-3-4/ecolier/2014";
import { edition2015Ecolier } from "./editions/grades-3-4/ecolier/2015";
import { edition2016Ecolier } from "./editions/grades-3-4/ecolier/2016";
import { edition2017Ecolier } from "./editions/grades-3-4/ecolier/2017";
import { edition2018Ecolier } from "./editions/grades-3-4/ecolier/2018";
import { edition2019Ecolier } from "./editions/grades-3-4/ecolier/2019";
import { edition2020Ecolier } from "./editions/grades-3-4/ecolier/2020";
import { edition2021Ecolier } from "./editions/grades-3-4/ecolier/2021";
import { edition2022Ecolier } from "./editions/grades-3-4/ecolier/2022";
import { edition2023Ecolier } from "./editions/grades-3-4/ecolier/2023";
import { edition2024Ecolier } from "./editions/grades-3-4/ecolier/2024";
import { edition2025Ecolier } from "./editions/grades-3-4/ecolier/2025";
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
  "ecolier-2009": edition2009Ecolier,
  "2010": edition2010,
  "ecolier-2011": edition2011Ecolier,
  "ecolier-2012": edition2012Ecolier,
  "ecolier-2013": edition2013Ecolier,
  "ecolier-2014": edition2014Ecolier,
  "ecolier-2015": edition2015Ecolier,
  "ecolier-2016": edition2016Ecolier,
  "ecolier-2017": edition2017Ecolier,
  "ecolier-2018": edition2018Ecolier,
  "ecolier-2019": edition2019Ecolier,
  "ecolier-2020": edition2020Ecolier,
  "ecolier-2021": edition2021Ecolier,
  "ecolier-2022": edition2022Ecolier,
  "ecolier-2023": edition2023Ecolier,
  "ecolier-2024": edition2024Ecolier,
  "ecolier-2025": edition2025Ecolier,
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
