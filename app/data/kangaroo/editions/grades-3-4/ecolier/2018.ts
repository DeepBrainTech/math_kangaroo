import type { Question, QuestionSet, Section } from "../../../types";

const questions2018Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "As seen in the diagram, 3 darts are flying towards 9 fixed balloons. If a balloon is hit by a dart, it bursts and the dart continues in the same direction it had beforehand. How many balloons are hit by the darts?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The three paths burst six balloons altogether, so choice E.",
    hint: "Trace each dart's straight path through the balloon field and count every balloon it crosses.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/q-01-visual.png",
    imageAlt: "Original 2018 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Susanne is 6 years old. Her sister Lisa is 2 years younger. Brother Max is 2 years older than Susanne. How old are the 3 siblings altogether?",
    options: [
      "15",
      "16",
      "17",
      "18",
      "19"
    ],
    answer: 3,
    explanation: "4 + 6 + 8 = 18, choice D.",
    hint: "Lisa is 4, Max is 8, and Susanne is 6; add the three ages.",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "The diagram shows a wooden block with 5 screws. 4 of which are equally long, one screw is shorter. Which is the shorter screw?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "Screw 5 is the one that does not reach as far, so it is the shorter screw.",
    hint: "Compare the visible screw heads and how far each screw reaches through the block.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-03.png",
    imageAlt: "Original 2018 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Leonie has one stamp for each of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Using them, she stamps the date of the kangaroo- competition. How many of the stamps does Leonie use to do that?",
    options: [
      "5",
      "6",
      "7",
      "9",
      "10"
    ],
    answer: 1,
    explanation: "The date uses six different stamps: 1, 5, 3, 2, 0, and 8, choice B.",
    hint: "Write the competition date as digits and cross out repeated digits before counting stamps.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/q-04-visual.png",
    imageAlt: "Original 2018 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "On the right you can see a picture of ladybird Sophie. Sophie turns. Which of the pictures below is not Sophie?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The orientation that cannot be obtained by a rotation is option D.",
    hint: "Rotate Sophie's picture through all allowed turns, keeping the relative positions of the spots and legs.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Lucy folds a piece of paper exactly half way and then cuts out a figure: Then she unfolds the paper again. Which of the five pictures can she see?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only option D has the two reflected halves produced by the fold.",
    hint: "A fold reflects every cut across the crease, so test each choice for the required mirror symmetry.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-06-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Mike sets the table for 8 people: The fork has to lie to the left and the knife to the right of the plate. For how many people is the cutlery set correctly?",
    options: [
      "5",
      "4",
      "6",
      "2",
      "3"
    ],
    answer: 0,
    explanation: "Exactly five of the eight settings satisfy both conditions, choice A.",
    hint: "For each place setting, check both conditions: fork left of plate and knife right of plate.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/q-07-visual.png",
    imageAlt: "Original 2018 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "2",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Four of the five patterns can be tiled; the count is choice D.",
    hint: "Use the two-colour tile as a domino and try to cover each displayed pattern without rotating individual colours.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-08.png",
    imageAlt: "Original 2018 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Diana shoots 3 darts, three times at a target board with two fields. The first time she scores 12 points, the second time 15. The number of points depends on which field she has hit. How many points does she score the third time?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22 12 Points 15 Points?"
    ],
    answer: 3,
    explanation: "The third three-dart arrangement totals 21 points, choice D.",
    hint: "Let the two target values be x and y; three darts make totals 12 and 15, so compare the possible combinations.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-09.png",
    imageAlt: "Original 2018 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "22 12 Points 15 Points?",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The missing field must be the ghost, option A.",
    hint: "In every row and column of the 5 × 5 grid, each of the five figures appears once.",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "Six copies are sufficient to cover the full boat and five cannot cover its tapered ends, choice B.",
    hint: "The rectangle and trapezoid pieces must cover the boat row by row; start with its narrow upper section.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-11.png",
    imageAlt: "Original 2018 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "The two colours of this picture are swapped. Then the picture is turned. Which of the pictures below is obtained?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The resulting pattern is option E.",
    hint: "Swap the two colours first, then rotate the entire figure; do not rotate before swapping.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Felix the rabbit has 20 carrots. Every day he eats 2 of them. He has eaten the 12th carrot on a Wednesday. On which day of the week did he start eating the carrots?",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    answer: 4,
    explanation: "The first eating day was Friday, so choice E.",
    hint: "The 12th carrot is eaten on the sixth eating day because Felix eats two per day; count five days back from Wednesday.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/q-13-visual.png",
    imageAlt: "Original 2018 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "Monday",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "Tuesday",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "Wednesday",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "Thursday",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "Friday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A rose bush has 8 flowers on which butterflies and dragonflies are sitting. On every flower there is at most one insect sitting on it. More than half of the flowers are occupied. The number of butterflies is twice as big as the number of dragonflies. How many butterflies are sitting on the rose blossoms?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The only possible occupied split is 4 butterflies and 2 dragonflies, so choice C.",
    hint: "More than half of eight means at least five occupied flowers; butterflies must be twice the dragonflies.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-14.png",
    imageAlt: "Original 2018 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "The map shows the roundtrip that Captain Bluebear covers during his journey. Three distances are given on the map. He sails from island to island and starts at the island Berg. In total he covers a distance of 100 km. The distances between the islands Wüste and Wald is equal to the distance between the islands Berg and Blume via Vulkan. How big is the distance between Berg and Wald?",
    options: [
      "17 km",
      "23 km",
      "26 km",
      "33 km",
      "35 km"
    ],
    answer: 3,
    explanation: "Solving the distance equations gives 33 km from Berg to Wald, choice D.",
    hint: "Write equations for the three labelled distances and use both the 100 km roundtrip and the equality of the two routes.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-15.png",
    imageAlt: "Original 2018 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "17 km",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "23 km",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "26 km",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "33 km",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "35 km",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Tobias glues 10 cubes together so that the following object is formed: He paints all of it, even the bottom. How many cubes then have exactly 4 faces coloured in? ",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    answer: 2,
    explanation: "Exactly eight cubes have four painted faces, choice C.",
    hint: "Count exposed faces after painting the 10-cube object, remembering that the bottom faces are painted too.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/q-16-visual.png",
    imageAlt: "Original 2018 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "The big rectangle consists of various squares of different sizes. Each of the three smallest squares has area 1. How big is the area of the big rectangle?",
    options: [
      "65",
      "71",
      "77",
      "87",
      "98"
    ],
    answer: 2,
    explanation: "The total area is 77 square units, so choice C.",
    hint: "Use the three unit squares to identify the scale of the square tiling, then add the areas of every square in the large rectangle.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-17.png",
    imageAlt: "Original 2018 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "65",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "71",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "77",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "87",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "98",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "In order to slay a dragon, Mathias has to cut off all of its heads. As soon as he has cut off 3 heads, a new one grows back immediately. After Mathias has cut off 13 heads the dragon is dead. How many heads did the dragon have initially?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 1,
    explanation: "After 12 cuts the dragon has lost 8 heads; the thirteenth cut removes the last one, so it began with 9, choice B.",
    hint: "Each group of three heads cut off produces one new head, so the net loss per group is two.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "The rooms in Kanga’s house are numbered. Eva enters the house through the main entrance. Eva has to walk through the rooms in such a way that each room that she enters has a number higher than the previous one. Through which door does Eva leave the house?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The increasing route exits through door D.",
    hint: "Move only through rooms with strictly increasing numbers and eliminate any door that would require a decrease.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-19-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "The symbols stand for one of the digits 1, 2, 3, 4 or 5. It is known that Which symbol stands for the digit 3?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The symbol representing 3 is the one labelled A.",
    hint: "Substitute digits 1–5 into the symbol equations and retain only assignments with different symbols getting different digits.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-20-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "",
    options: [
      "4 cm",
      "8 cm",
      "10 cm",
      "16 cm",
      "20 cm"
    ],
    answer: 1,
    explanation: "The required length is 8 cm, choice B.",
    hint: "Measure the repeated grid interval in the diagram and use the same interval along the indicated length.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-21.png",
    imageAlt: "Original 2018 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "4 cm",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "8 cm",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "10 cm",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "16 cm",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "20 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A decorated glass tile is mirrored several times along the boldly printed edge. The first mirror image is shown.\nWhat does the tile on the far right look like after the third reflection?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "After the third reflection the far-right tile is option B.",
    hint: "Reflect the tile across the bold edge three times, keeping track of which motif changes side at each reflection.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-22-extra.png",
    imageChoices: true,
    imageAlt: "Original 2018 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Lea should write the numbers 1 to 7 in the fields of the given figure. There is only one\nnumber allowed in every field.\nTwo consecutive numbers are not allowed to be in adjacent fields. Two fields are\nadjacent if they have one edge or one corner in common.\nWhich numbers can she write into the field with the question mark?",
    options: [
      "all 7 numbers",
      "only odd numbers",
      "only even numbers",
      "the number 4",
      "the numbers 1 or 7"
    ],
    answer: 4,
    explanation: "The centre can contain only 1 or 7, so choice E.",
    hint: "Place 1–7 while forbidding consecutive numbers in every edge- or corner-neighbouring pair; test the centre field last.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-23.png",
    imageAlt: "Original 2018 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "all 7 numbers",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "only odd numbers",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "only even numbers",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "the number 4",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "the numbers 1 or 7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Each of the four balls weighs either 10 or 20 or 30 or 40 grams.\nWhich ball weighs 30 grams?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "It can be A or B."
    ],
    answer: 2,
    explanation: "Solving the equations identifies ball C as the 30-gram ball.",
    hint: "Use the balances in the diagram to write linear equations for the four ball weights and test the answer choices.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2018/questions/editor-q-24.png",
    imageAlt: "Original 2018 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "It can be A or B.",
        imageAlt: "E option"
      }
    ]
  }
];

const sections: Section[] = [
  {
    points: 3,
    label: "Foundations",
    range: "Questions 1–8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Reasoning",
    range: "Questions 9–16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Challenge",
    range: "Questions 17–24",
    accent: "purple"
  }
];

export const edition2018Ecolier: QuestionSet = {
  id: "ecolier-2018",
  year: 2018,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 15, 2018",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2018/2018_Ecolier.pdf",
  questions: questions2018Ecolier,
  sections: sections,
};
