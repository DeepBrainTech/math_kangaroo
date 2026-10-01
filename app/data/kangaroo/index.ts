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
import { edition2009Benjamin } from "./editions/grades-5-6/benjamin/2009";
import { edition2010Benjamin } from "./editions/grades-5-6/benjamin/2010";
import { edition2011Benjamin } from "./editions/grades-5-6/benjamin/2011";
import { edition2012Benjamin } from "./editions/grades-5-6/benjamin/2012";
import { edition2013Benjamin } from "./editions/grades-5-6/benjamin/2013";
import { edition2014Benjamin } from "./editions/grades-5-6/benjamin/2014";
import { edition2015Benjamin } from "./editions/grades-5-6/benjamin/2015";
import { edition2016Benjamin } from "./editions/grades-5-6/benjamin/2016";
import { edition2017Benjamin } from "./editions/grades-5-6/benjamin/2017";
import { edition2018Benjamin } from "./editions/grades-5-6/benjamin/2018";
import { edition2019Benjamin } from "./editions/grades-5-6/benjamin/2019";
import { edition2020Benjamin } from "./editions/grades-5-6/benjamin/2020";
import { edition2021Benjamin } from "./editions/grades-5-6/benjamin/2021";
import { edition2022Benjamin } from "./editions/grades-5-6/benjamin/2022";
import { edition2023Benjamin } from "./editions/grades-5-6/benjamin/2023";
import { edition2024Benjamin } from "./editions/grades-5-6/benjamin/2024";
import { edition2025Benjamin } from "./editions/grades-5-6/benjamin/2025";
import { edition2009Kadett } from "./editions/grades-7-8/kadett/2009";
import { edition2010Kadett } from "./editions/grades-7-8/kadett/2010";
import { edition2011Kadett } from "./editions/grades-7-8/kadett/2011";
import { edition2012Kadett } from "./editions/grades-7-8/kadett/2012";
import { edition2013Kadett } from "./editions/grades-7-8/kadett/2013";
import { edition2014Kadett } from "./editions/grades-7-8/kadett/2014";
import { edition2015Kadett } from "./editions/grades-7-8/kadett/2015";
import { edition2016Kadett } from "./editions/grades-7-8/kadett/2016";
import { edition2017Kadett } from "./editions/grades-7-8/kadett/2017";
import { edition2018Kadett } from "./editions/grades-7-8/kadett/2018";
import { edition2019Kadett } from "./editions/grades-7-8/kadett/2019";
import { edition2020Kadett } from "./editions/grades-7-8/kadett/2020";
import { edition2021Kadett } from "./editions/grades-7-8/kadett/2021";
import { edition2022Kadett } from "./editions/grades-7-8/kadett/2022";
import { edition2023Kadett } from "./editions/grades-7-8/kadett/2023";
import { edition2024Kadett } from "./editions/grades-7-8/kadett/2024";
import { edition2025Kadett } from "./editions/grades-7-8/kadett/2025";

const rawQuestionSets: Record<string, QuestionSet> = {
  "ecolier-2009": edition2009Ecolier,
  "benjamin-2009": edition2009Benjamin,
  "benjamin-2010": edition2010Benjamin,
  "benjamin-2011": edition2011Benjamin,
  "benjamin-2012": edition2012Benjamin,
  "benjamin-2013": edition2013Benjamin,
  "benjamin-2014": edition2014Benjamin,
  "benjamin-2015": edition2015Benjamin,
  "benjamin-2016": edition2016Benjamin,
  "benjamin-2017": edition2017Benjamin,
  "benjamin-2018": edition2018Benjamin,
  "benjamin-2019": edition2019Benjamin,
  "benjamin-2020": edition2020Benjamin,
  "benjamin-2021": edition2021Benjamin,
  "benjamin-2022": edition2022Benjamin,
  "benjamin-2023": edition2023Benjamin,
  "benjamin-2024": edition2024Benjamin,
  "benjamin-2025": edition2025Benjamin,
  "kadett-2009": edition2009Kadett,
  "kadett-2010": edition2010Kadett,
  "kadett-2011": edition2011Kadett,
  "kadett-2012": edition2012Kadett,
  "kadett-2013": edition2013Kadett,
  "kadett-2014": edition2014Kadett,
  "kadett-2015": edition2015Kadett,
  "kadett-2016": edition2016Kadett,
  "kadett-2017": edition2017Kadett,
  "kadett-2018": edition2018Kadett,
  "kadett-2019": edition2019Kadett,
  "kadett-2020": edition2020Kadett,
  "kadett-2021": edition2021Kadett,
  "kadett-2022": edition2022Kadett,
  "kadett-2023": edition2023Kadett,
  "kadett-2024": edition2024Kadett,
  "kadett-2025": edition2025Kadett,
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
