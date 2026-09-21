import type { Question, QuestionSet, Section } from "../../../types";

const questions2017Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which one of the domino piece’s A to E has to be placed in between the shown pieces, so that both calculations are correct?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only domino D makes both calculations correct.",
    hint: "Read the numbers on the two shown dominoes and test each candidate in the gap so both arithmetic statements remain true.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "If John looks out the window he can see half of the kangaroos in the park. How many kangaroos in total are there in the park?",
    options: [
      "6",
      "7",
      "8",
      "12",
      "14"
    ],
    answer: 3,
    explanation: "The window shows 6, so there are 12 kangaroos in total, choice D.",
    hint: "If the window shows exactly half the kangaroos, double the visible count in the picture.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-02-visual.png",
    imageAlt: "Original 2017 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Two square sheets are made up of see‐through and black little squares. Both are placed on top of each other onto the sheet in the middle. Which shape can then still be seen? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The surviving outline is option E.",
    hint: "Overlay the two transparent sheets and keep only the regions not covered by black squares in either sheet.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-03-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The missing pair is the one shown in option C.",
    hint: "Rotate every footprint group by the same angle, then compare the complete left and right sets to find what is absent.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-04-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "How many white squares need to be coloured in black, so that there are exactly twice as many white squares as there are black squares?",
    options: [
      "1",
      "3",
      "8",
      "12",
      "16"
    ],
    answer: 1,
    explanation: "Three recolourings are needed to make white exactly twice black, choice B.",
    hint: "Count the starting white and black squares, then note that each recolouring changes the white-minus-black difference by two.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-05-visual.png",
    imageAlt: "Original 2017 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Which number is hidden behind the panda?",
    options: [
      "16",
      "18",
      "20",
      "24",
      "28"
    ],
    answer: 0,
    explanation: "The equations force 16, so choice A.",
    hint: "Follow the arrows in the pictured equations and isolate the value hidden behind the panda.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-06-visual.png",
    imageAlt: "Original 2017 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "28",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "The following picture shows a necklace with six pearls: Which of the following diagrams shows the same necklace?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Option A is the same necklace viewed from a different starting point.",
    hint: "A necklace can be rotated, but the cyclic order of its six pearls must stay the same; compare each option around the loop.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "This picture shows you Anna’s house from the front: At the back it has three windows but no door. Which picture shows Anna’s house from the back?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The only matching rear view is option E.",
    hint: "Turn the front view around to the back while keeping the three back windows and no door.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Every box shows the result of the addition of the numbers on the very left and on the very top (for example: 6 + 2 = 8). Which number is written behind the question mark?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "15"
    ],
    answer: 4,
    explanation: "The required sum is 15, which is choice E.",
    hint: "For the missing box, add the number at the far left to the number at the top of its column.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-09.png",
    imageAlt: "Original 2017 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Four apples and one pear weigh as much as three pears. What is therefore correct?",
    options: [
      "One pear weighs as much as one apple.",
      "Three apples weigh as much as one pear.",
      "Three pears weigh as much as one apple.",
      "Two pears weigh as much as one apple.",
      "Two apples weigh as much as one pear."
    ],
    answer: 4,
    explanation: "Four apples equal two pears, so two apples equal one pear: choice E.",
    hint: "Translate the balance equation 4 apples + pear = 3 pears by subtracting one pear from both sides.",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "One pear weighs as much as one apple.",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "Three apples weigh as much as one pear.",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "Three pears weigh as much as one apple.",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "Two pears weigh as much as one apple.",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "Two apples weigh as much as one pear.",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Balloons are sold in packages of 5, 10 or 25 pieces each. Marius buys exactly 70 balloons. What is the minimum number of packages he has to buy?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "25 + 25 + 10 + 10 = 70, so four packages suffice and are minimal, choice B.",
    hint: "Use the largest package sizes first and check whether the remaining balloons can be made from 5s, 10s, or 25s.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Bob folds a piece of paper, then punches a hole into the paper and unfolds it again. The unfolded paper then looks like this: Along which dotted line has Bob folded the paper beforehand? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only fold line C produces the shown pair of holes.",
    hint: "A punched hole is reflected across the fold line; compare the symmetric hole pairs in the unfolded sheet.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 12 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "13 children registered for a competition. Then another 19 joined. Six equally big teams are needed for the  competition. \nHow many more children are needed, so that six equally big teams can be formed?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "The next multiple of six is 36, so four more children are needed, choice D.",
    hint: "There are 32 children after the second group joins; divide 32 into six equal teams.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Ben wants to cut out two identical pieces out of the 4 x 3 grid. For which of the following shapes can he not achieve that?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Shape A cannot be paired into two identical pieces, so A is the impossible one.",
    hint: "Try to split the 4 × 3 grid into two congruent copies of each candidate shape, allowing rotations and translations.",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-a.png"
      },
      {
        id: "14-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-b.png"
      },
      {
        id: "14-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-c.png"
      },
      {
        id: "14-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-d.png"
      },
      {
        id: "14-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-14-option-e.png"
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "David has a stove with two hobs on which he wants to prepare five different dishes. The dishes need 40 min, 15 min, 35 min, 10 min and 45 min until they are fully cooked. He wants to spend as little time in the kitchen as possible but is only allowed to take dishes off the hob when they are fully cooked. How long does he need for the preparation?",
    options: [
      "60 min",
      "70 min",
      "75 min",
      "80 min",
      "85 min"
    ],
    answer: 2,
    explanation: "The best split is 45+15+10 = 70 and 40+35 = 75, so preparation takes 75 minutes, choice C.",
    hint: "With two hobs, try pairing the cooking times and minimize the larger of the two total times.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "60 min",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "70 min",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "75 min",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "80 min",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "85 min",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Which number must be written into the circle with the question mark so that the calculation is correct? ",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12 - 5 Points Questions -"
    ],
    answer: 1,
    explanation: "The question-mark circle must contain 9, choice B.",
    hint: "Use the surrounding circle equations to solve for the missing value rather than guessing from the diagram.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-16-visual.png",
    imageAlt: "Original 2017 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "12 - 5 Points Questions -",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Max builds this construction using some small equally big cubes. If he looks at his construction from above, the plan on the right tells the number of cubes in every tower. How big is the sum of the numbers covered by the two hearts?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "The two heart cells total 5 cubes, so choice C.",
    hint: "Read the cube heights under the two hearts in the top-view plan and add them.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-17.png",
    imageAlt: "Original 2017 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Georg starts his training at 5 o’clock in the afternoon. It takes him 5 minutes to get to the bus stop. The bus journey takes 15 minutes. Then he has to walk for 5 minutes to get to the pitch. The bus comes at 6 o’clock in the morning for the first time and then every 10 minutes. What is the latest possible time he has to leave the house in order to be at the pitch on time?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The latest departure is the time marked by option A.",
    hint: "Allow the last bus before training and subtract the 5-minute walk, 15-minute ride, and 5-minute walk from the start time.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-18-extra.png",
    imageChoices: true,
    imageAlt: "Original 2017 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Four brothers have eaten 11 biscuits altogether. Everyone has eaten at least one biscuit but all of them have eaten a different amount of biscuits. Three of the brothers ate 9 biscuits altogether, where one of them got exactly 3 biscuits. How many biscuits did the boy who had the most biscuits eat?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "The three amounts must be 1, 3, and 5, leaving 2 for the fourth; the largest amount is 5, choice C.",
    hint: "The three brothers total 9 and include exactly 3; use distinct positive amounts before adding the fourth brother.",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "A number is written into every square of a 4 x 4 table. Mary is looking for the 2 x 2 table where the sum of the four numbers is greatest. How big is this sum?",
    options: [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    answer: 3,
    explanation: "The largest block sum is 14, which is choice D.",
    hint: "Add each possible 2 × 2 block in the 4 × 4 table and compare the totals.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-20-visual.png",
    imageAlt: "Original 2017 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Five boys share 10 bags of marbles between themselves. Everyone gets exactly two bags:\nAlex gets 5 marbles, Bob 7, Charles 9, and Dennis 15. Eric gets the two bags that are left over. \nHow many marbles does he get?",
    options: [
      "9",
      "11",
      "13",
      "17",
      "19"
    ],
    answer: 4,
    explanation: "The two leftover bags contain 19 marbles, so choice E.",
    hint: "Add the two marble counts on the two bags left after Alex, Bob, Charles, and Dennis receive theirs.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/q-21-visual.png",
    imageAlt: "Original 2017 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A small zoo has a giraffe, an elephant, a lion and a turtle. Susi wants to visit exactly two of the animals today but does not want to start with the lion. How many different possibilities does she have, to visit the two animals one after the other?",
    options: [
      "3",
      "7",
      "8",
      "9",
      "12"
    ],
    answer: 3,
    explanation: "There are 3 × 3 = 9 ordered visits, choice D.",
    hint: "Choose the first animal from giraffe, elephant, or turtle, then choose any different second animal.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Kate has four flowers, which have 6, 7, 8 and 11 petals respectively. She now tears off one petal from each of three different flowers. She repeats this until it is no longer possible to tear off one petal from each of three different flowers. What is the minimum number of petals left over?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The best sequence leaves 2 petals, so choice B.",
    hint: "Remove one petal from three different flowers per round and stop as soon as fewer than three flowers have petals.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-23.png",
    imageAlt: "Original 2017 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Leonie has hidden a Smiley behind some of the grey boxes. The numbers state how many Smileys there are in neighbouring boxes. Two boxes are neighbouring if they have one side or one corner in common. How many Smileys has Leonie hidden?",
    options: [
      "4",
      "5",
      "7",
      "8",
      "11"
    ],
    answer: 1,
    explanation: "The counts force five hidden smileys, which is choice B.",
    hint: "Use each grey-box number as a count of neighbouring smileys, including diagonal neighbours, and solve the overlapping constraints.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2017/questions/editor-q-24.png",
    imageAlt: "Original 2017 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "11",
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

export const edition2017Ecolier: QuestionSet = {
  id: "ecolier-2017",
  year: 2017,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 16, 2017",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2017/2017_Ecolier.pdf",
  questions: questions2017Ecolier,
  sections: sections,
};
