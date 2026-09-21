import type { Question, QuestionSet, Section } from "../../../types";

const questions2020Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: " A mushroom grows up every day. For five days Maria took a picture of this mushroom, but she wrongly ordered the photos beside. What is the sequence of photos that correctly shows the mushroom growth, from left to right?",
    options: [
      "2-5-3-1- 4",
      "2-3-4-5-1",
      "5-4-3-2-1",
      "1-2-3-4-5",
      "2-3-5-1-4"
    ],
    answer: 0,
    explanation: "The increasing sequence is 2-5-3-1-4, choice A.",
    hint: "Order the mushroom photos by visible growth, from the smallest to the largest, before matching the labels.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-01.png",
    imageAlt: "Original 2020 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2-5-3-1- 4",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "2-3-4-5-1",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "5-4-3-2-1",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "1-2-3-4-5",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "2-3-5-1-4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which of the tiles below is NOT part of the wall next door? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Tile D is the only one that does not occur in the wall.",
    hint: "Compare each candidate tile with the wall's colour and edge pattern, allowing rotation only if the whole wall permits it.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-02-extra.png",
    imageChoices: true,
    imageAlt: "Original 2020 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "John paints the squares of the board next to it if the result of the calculation inside them is 24. How did the painting of the board look?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The resulting painted pattern matches option C.",
    hint: "Evaluate every square's calculation and paint precisely those whose result is 24.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-03.png",
    imageAlt: "Original 2020 Ecolier question 3 visual",
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
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-03-extra.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Which of the following pictures can you NOT do with all the pieces beside? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only picture C cannot be made from all the pieces, so choice C is correct.",
    hint: "Try assembling all the pieces for each candidate outline; a valid outline must use every piece exactly once.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-04-extra.png",
    imageChoices: true,
    imageAlt: "Original 2020 Ecolier question 4 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Eli drew a board on the floor with nine squares and wrote a number on each of them, starting from 1 and adding 3 units to each new number he wrote, until he filled the board. In the picture, three of the numbers that Eli wrote appear. What number below can be one of the numbers she wrote in the colored box?",
    options: [
      "10",
      "14",
      "17",
      "20",
      "22"
    ],
    answer: 4,
    explanation: "The coloured cell can contain 22, choice E.",
    hint: "The numbers form an arithmetic sequence beginning at 1 and increasing by 3; list the nine values and locate the coloured cell.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-05.png",
    imageAlt: "Original 2020 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Paulo took a rectangular sheet of paper, yellow on one side and green on the other side and, with several folds shown in the dotted lines in the figure below, made a little paper plane. To give the airplane a charm, Paulo made a circular hole, marked on the last figure.\nAfter playing a lot with the plane, Paulo unfolded the sheet and realized that there were several holes in it. How many holes did he count?\n",
    options: [
      "2",
      "4",
      "6",
      "8",
      "16"
    ],
    answer: 3,
    explanation: "The single hole creates eight holes after the shown folds, choice D.",
    hint: "Each fold mirrors the hole, so count the distinct positions after undoing the folds one at a time.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-06-visual.png",
    imageAlt: "Original 2020 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Five children should paint three quarters of the total amount of the little squares on their trays.\nOne of the children A, B, C, D or E was wrong. Which one? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Child C is the only one whose count is wrong, choice C.",
    hint: "Count the total squares on every tray, then compare each child's claimed number with three quarters of that total.",
    imageChoices: true,
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-a.png"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-b.png"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-c.png"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-d.png"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-07-option-e.png"
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Gaspar has these seven different pieces, formed by equal little squares. \n\nHe uses all these pieces to assemble rectangles with different perimeters, that is, with different shapes. How many different perimeters can he find? ",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "There are four different perimeter values, choice B.",
    hint: "For each arrangement of the seven pieces, count the outside boundary edges; equivalent shapes have the same perimeter.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-08.png",
    imageAlt: "Original 2020 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Janaína made the construction on a grid, using some lighted colored cubes and\nothers darker. Looking from above the construction, what can she see? \n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The top view is option B.",
    hint: "Look straight down on the construction: record each occupied column and ignore hidden cube colours unless visible from above.",
    imageChoices: true,
    imageAlt: "Original 2020 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-a.png"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-b.png"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-c.png"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-d.png"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-09-option-e.png"
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Cynthia paints each region of the figure in a single color: red, blue or yellow.\nShe paints with different colors the regions that touch each other. In how many\ndifferent ways can Cyntia paint the figure?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The valid colourings total 5, so choice E.",
    hint: "Build a colour-adjacency graph for the regions: touching regions must receive different colours.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-10.png",
    imageAlt: "Original 2020 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Denis ties his dog, using an 11-meter rope, one meter away from a corner of about 7 meters by 5 meters, as illustrated. Denis places 5 bones near the fence, as shown in the picture. How many bones can the dog catch? ",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "The dog can reach all five bones, choice E.",
    hint: "Measure the dog's reachable distance around the corner and compare it with the locations of all five bones.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-11-visual.png",
    imageAlt: "Original 2020 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "",
    options: [
      "6",
      "6,5",
      "7",
      "7,5",
      "8"
    ],
    answer: 1,
    explanation: "The endpoint distance is 6.5 m, so choice B.",
    hint: "Count the 2 m wooden pieces and account for the half-metre widths at the joins shown in the fence.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-12.png",
    imageAlt: "Original 2020 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "6,5",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "7,5",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 0,
    explanation: "The coloured triangle must carry 1, choice A.",
    hint: "Follow the equal-number rule around each joined triangular part; the shared edge forces the missing coloured value.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-13.png",
    imageAlt: "Original 2020 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    prompt: "Julia drew the picture on the side of a cardboard sheet, cut, folded and glued to form a cube. Which of the cubes below can be the one she did? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only cube A has a valid folding of Julia's net.",
    hint: "A cube view must preserve the same three mutually adjacent faces and their relative order; reject impossible triples.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-14-extra.png",
    imageChoices: true,
    imageAlt: "Original 2020 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Whenever the kangaroo goes up seven steps, the rabbit goes down three steps. When the kangaroo is on step number 56, on which step will the rabbit be?",
    options: [
      "73",
      "76",
      "79",
      "82",
      "85"
    ],
    answer: 1,
    explanation: "56 ÷ 7 = 8 groups, so the rabbit has moved down 24 steps from 100 and is on 76, choice B.",
    hint: "For every seven kangaroo steps, subtract three rabbit steps; count how many complete groups reach kangaroo step 56.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-15-visual.png",
    imageAlt: "Original 2020 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "73",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "76",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "79",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "82",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "85",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Ana, Bia and Cris have, together, 100 reais. They go to the movies and each one pays their own entrance fee. Ana had twice as much as each of her friends before they paid the entrance fee. Now Ana has three times what the two friends have together. How much did the entrance to the movie cost?",
    options: [
      "R$ 8,00",
      "R$ 10,00",
      "R$ 12,00",
      "R$ 15,00",
      "R$ 20,00"
    ],
    answer: 4,
    explanation: "The equations give an entrance fee of 20 reais, choice E.",
    hint: "Let Ana initially have 2x and each friend x; after all three pay the same entrance fee, use the final ratio.",
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "R$ 8,00",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "R$ 10,00",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "R$ 12,00",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "R$ 15,00",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "R$ 20,00",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "There are three flowers on the back of the left cactus. In total, the cactus on the right has six more flowers than the cactus on the left. How many flowers are on the back of the right cactus?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "14"
    ],
    answer: 3,
    explanation: "The right cactus has 12 flowers on its back, choice D.",
    hint: "Count the flowers visible on the front and use the given three flowers on the back of the left cactus.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-17-visual.png",
    imageAlt: "Original 2020 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "The 4 x 4 grid without a little square, shown beside, was divided into three equal\npieces. Which of the following figures represents one of these pieces?\n",
    options: [
      "10",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only option A has the correct five-cell shape.",
    hint: "A 4 × 4 grid with one square missing has 15 cells; divide them into three equal five-cell pieces.",
    imageChoices: true,
    imageAlt: "Original 2020 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "18-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-a.png"
      },
      {
        id: "18-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-b.png"
      },
      {
        id: "18-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-c.png"
      },
      {
        id: "18-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-d.png"
      },
      {
        id: "18-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-18-option-e.png"
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "The sum of the points on the opposite sides of a common dice is 7. This dice is placed in the first square as shown in the figure, and then rolled as shown in the figure, to the fifth square. When the dice reach the last square, what is the product of the numbers of points shown on the two colored vertical faces?",
    options: [
      "10",
      "12",
      "15",
      "18",
      "24"
    ],
    answer: 3,
    explanation: "Their product is 18, choice D.",
    hint: "Roll the die step by step, using opposite faces summing to 7, and record the two coloured vertical faces at the fifth square.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-19.png",
    imageAlt: "Original 2020 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Five friends decided to spend their vacations together. In a conversation, Adam said, \"Yesterday was Wednesday.\" Beto said, \"Tomorrow will be Friday\". Carlos said: \"The day before yesterday was Tuesday”. David then said, \"The day after tomorrow is Saturday\". Finally, it was Eli's turn: \"Today is Monday\". One of them was wrong. Who was wrong? ",
    options: [
      "Adam",
      "Beto",
      "Carlos",
      "David",
      "Eli"
    ],
    answer: 4,
    explanation: "All statements agree when today is Monday except Eli's claim, so Eli is wrong, choice E.",
    hint: "Translate every statement into a weekday and compare the five claims for one common today.",
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "Adam",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "Beto",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "Carlos",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "David",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "Eli",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "The teacher wrote the numbers 1 to 8 on the board. Then he covered the numbers with triangles, squares and a circle. The sum of the numbers covered with the triangles equals the sum of the numbers covered with the squares and the number covered with the circle is a quarter of that sum. What is the sum of the numbers covered with the triangles and the circle?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    answer: 2,
    explanation: "The only partition gives triangle-plus-circle sum 20, choice C.",
    hint: "Let the triangle-covered sum equal the square-covered sum S; the circle then equals S/4 and the numbers 1–8 are used once.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-21-visual.png",
    imageAlt: "Original 2020 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "",
    options: [
      "3",
      "6",
      "9",
      "12",
      "15"
    ],
    answer: 3,
    explanation: "If head and tail match there are 3 × 2 cases; if they differ there are 3 × 2 cases again, for 12 leaves, choice D.",
    hint: "For a parrot, the head and tail can each use any of three colours, while the wing must differ from both of them.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/editor-q-22.png",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Jonas and Elias went to the beach for their vacation, where they had ice cream every day. The ice cream they had, had two or three balls. On the last day of vacation, Jonas and Elias had 23 and 19 ice cream balls, respectively. At least how many days they were on vacation?",
    options: [
      "6",
      "7",
      "8",
      "10",
      "11"
    ],
    answer: 2,
    explanation: "The first common travel distance is lcm(20, 30) = 60 m, so Ahmed walks 60 ÷ 20 = 3 rounds, choice C.",
    hint: "The square garden has perimeter 20 m and the rectangular garden has perimeter 30 m; both walkers return to A after a whole number of rounds.",
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "The Kangaroo Hotel has 30 floors numbered from 1 to 30 and each floor has 20 rooms numbered from 1 to 20. The code to enter the room is formed by joining the floor number with the room number, in that order. But this code can be con- fusing, as shown in the picture. Note that the code 101 is not confusing, as it can only refer to floor 10 and room 1 and never to floor 1 and room 1, as it has the code 11. How many codes are confusing, including the one in the figure?",
    options: [
      "2",
      "5",
      "9",
      "12",
      "18"
    ],
    answer: 4,
    explanation: "There are 18 confusing codes, so choice E.",
    hint: "A confusing code must be splittable as both floor-room pairs, with room numbers at most 20; enumerate the possible split points.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2020/questions/q-24-visual.png",
    imageAlt: "Original 2020 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "2",
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
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "18",
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

export const edition2020Ecolier: QuestionSet = {
  id: "ecolier-2020",
  year: 2020,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Brazil / KSF",
  date: "2020 · second application",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2020/2020_Ecolier.pdf",
  questions: questions2020Ecolier,
  sections: sections,
};
