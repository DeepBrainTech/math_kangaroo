import type { Question, QuestionSet, Section } from "../../../types";

const questions2024Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which square was divided into two different figures?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only square E produces two different figures.",
    hint: "Compare the two resulting pieces for each divided square, checking both shape and size after the cut.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    prompt: "Lizzy has 7 coins of a kind. She buys three fruits at the market. \nEach fruit has a different price. \nHow much is the most expensive fruit?",
    options: [
      "2 coins",
      "3 coins",
      "4 coins",
      "5 coins",
      "6 coins"
    ],
    answer: 2,
    explanation: "The prices can be 1, 2, and 4, so the most expensive fruit costs 4 coins, choice C.",
    hint: "With seven coins and three distinct positive fruit prices, maximize the largest price while the three prices can be bought.",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "2 coins",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "3 coins",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "4 coins",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "5 coins",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "6 coins",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "The rectangle on the right consists of 4 rows and 7 columns. \nIn total, it consists of 28 white squares. \nIra paints 2 rows and 1 column. \nHow many squares remain white?",
    options: [
      "8",
      "10",
      "12",
      "14",
      "17"
    ],
    answer: 2,
    explanation: "2 × 7 + 1 × 4 − 2 = 16 are painted, leaving 28 − 16 = 12 white, choice C.",
    hint: "The painted cells are the union of two full rows and one full column; subtract overlaps from the 28 cells.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-03.png",
    imageAlt: "Original 2024 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Firefighter Fred wants to put out the fire. What is the smallest number of ladders he has to climb in the picture on the right, to get to the fire without jumping?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 2,
    explanation: "The shortest route uses six ladders, choice C.",
    hint: "Follow the ladder network from the start without jumping and count each ladder climbed before reaching the fire.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-04.png",
    imageAlt: "Original 2024 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Ben has built a structure. A cat has thrown a cube off his structure: Which of these structures did Ben build?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only structure E leaves the required missing-cube view.",
    hint: "Remove one cube from each candidate and compare the remaining visible structure with Ben's model.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Alex hangs a poster on his kitchen wall. The kitchen wall has white and grey tiles of the same size - see picture. How many grey tiles are completely covered by the poster?",
    options: [
      "15",
      "21",
      "25",
      "30",
      "35"
    ],
    answer: 1,
    explanation: "There are 21 completely covered grey tiles, choice B.",
    hint: "Overlay the poster on the tiled wall and count only grey tiles completely inside its boundary.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/q-06-visual.png",
    imageAlt: "Original 2024 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "25",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "35",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Tim has black and white squares of paper. He glues the squares on the inside of a\nwindow. This creates the pattern shown on the right.\nWhat pattern can you see from the outside?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The outside view is option D.",
    hint: "A view through the window reverses the inside pattern left-to-right; reflect the black and white tiles.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "213, 214 and 215 are three consecutive three-digit numbers. Mohammad writes three consecutive four-digit numbers in a row. His sister erases a few digits from each of the three numbers.\nWhich digits (from left to right) are missing?",
    options: [
      "3 8 9, 3, 9 9",
      "4 8 9, 3, 9 6",
      "4 8 9, 4, 9 8",
      "4 8 9, 4, 9 9",
      "4 8 8, 4, 9 9"
    ],
    answer: 3,
    explanation: "The missing digits, left to right, are 4 8 9, 4, and 9 9, choice D.",
    hint: "Write three consecutive four-digit numbers and compare their erased positions with the surviving digits 213, 214, and 215.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-08.png",
    imageAlt: "Original 2024 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "3 8 9, 3, 9 9",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "4 8 9, 3, 9 6",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "4 8 9, 4, 9 8",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "4 8 9, 4, 9 9",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "4 8 8, 4, 9 9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Lisa writes the numbers 1, 2, 4, 5 and 6 in the circles of the pattern. She writes each of the five numbers exactly once, and if she adds up the numbers along one of the three straight lines, she gets 11 each time.\nWhich number did she write in the circle with the question mark?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The centre number must be 4, choice C.",
    hint: "The three straight lines each sum to 11, so add the five numbers and compare the shared centre contributions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-09.png",
    imageAlt: "Original 2024 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "These five fruits are in a basket:. Ann likes. Ben likes. Cam likes. Dan likes. Eli likes. Each child takes one fruit that they like. Which fruit does Ben take?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Ben must take fruit A, choice A.",
    hint: "Use each child's allowed fruit and eliminate any fruit choice that leaves another child without a liked fruit.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-10-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "The wizard Adam built the tower on the right out of 8 discs.\nHe magically makes discs disappear one after the other:\nFirst the second disc from the bottom, then from the new tower the third disc from\nthe bottom. Then he makes the fourth disc from bottom of the newly created tower\ndisappear. At the end, he removes the fifth disc from the bottom of the now newly\ncreated tower.\nWhat tower does Adam get?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Applying the four removals in order gives tower B.",
    hint: "Record the tower after each removal, counting from the bottom of the newly shortened tower every time.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-11-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Penguin Peter goes fishing every day and brings 9 fish for his two children. Every day he gives 5 fish to the first child he sees. The other child then gets 4 fish. In the last few days, a child has had a total of 26 fish. \nHow many fish did the other child get?",
    options: [
      "19",
      "22",
      "25",
      "28",
      "31"
    ],
    answer: 3,
    explanation: "The other child received 22 fish, choice B.",
    hint: "The two children together receive 9 fish per day; subtract the known child's 26 from the total over the same days.",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "22",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "25",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "31",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "7 cards with the numbers from 1 to 7 are placed in these four overlapping rings: If you add up the numbers of all the cards in a ring, the result is always 10. What number is on the card with the question mark?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "7"
    ],
    answer: 0,
    explanation: "The question-mark card is 1, choice A.",
    hint: "Each ring totals 10; use the overlaps to form equations for the seven card values and solve the question mark.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-13.png",
    imageAlt: "Original 2024 Ecolier question 13 visual",
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
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Lucas has these five pieces of a puzzle available: He wants to lay a caterpillar consisting of a head, a tail and 1, 2 or 3 parts in between.\nHow many different caterpillars can Lucas build?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "The available pieces make 4 different caterpillars, choice B.",
    hint: "A caterpillar is an ordered head, a tail, and a consecutive selection of 1, 2, or 3 middle parts; avoid counting the same reversal twice.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-14.png",
    imageAlt: "Original 2024 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Kangaroo Joey hops through a maze. The arrows of a field indicate how far, and in which direction, Joey has to bounce. A field with three arrows means that Joey bounces in the direction of the arrows, skipping two spaces, and landing in the 3rd space. Through which exit will Joey leave the maze, if he starts in the\nbottom left field with the three arrows?",
    options: [
      "through A",
      "through B",
      "through C",
      "through D",
      "through none of the four exits"
    ],
    answer: 4,
    explanation: "Starting at the bottom-left field exits through none of the four exits, choice E.",
    hint: "Follow the arrows exactly, treating an arrow marked 3 as a jump over two fields and landing on the third.",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "through A",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "through B",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "through C",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "through D",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "through none of the four exits",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "",
    options: [
      "3 cm",
      "4 cm",
      "5 cm",
      "6 cm",
      "7 cm"
    ],
    answer: 3,
    explanation: "23 = 11 + 2s gives s = 6 cm, choice D.",
    hint: "Use the repeated rectangular tile dimensions in the pattern: the long side equals the short side plus two square widths.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-16.png",
    imageAlt: "Original 2024 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "3 cm",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "4 cm",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "5 cm",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "6 cm",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "7 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Mia has 3 cards with three-digit numbers on them. If she adds the three numbers together, she gets the number 782. Unfortunately, a worm has eaten one digit of each card. What number does she get when she adds up the three digits that the worm has eaten?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 3,
    explanation: "The eaten digits sum to 11, choice D.",
    hint: "Add the three cards to 782 column by column; the three eaten digits are the differences between the visible and complete sums.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-17.png",
    imageAlt: "Original 2024 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Lucy weighs building blocks and obtains the following values: \nHow much do the three different building blocks weigh together?",
    options: [
      "270 g",
      "280 g",
      "290 g",
      "300 g",
      "310 g"
    ],
    answer: 0,
    explanation: "The three different blocks total 270 g, choice A.",
    hint: "Solve the three balance equations for the three block weights, then add the weights.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-18.png",
    imageAlt: "Original 2024 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "270 g",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "280 g",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "290 g",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "300 g",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "310 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "60 children stand in a row. Each child has a high-visibility vest and a backpack.\nThe colours of their high-visibility vests always alternate: yellow, green, yellow, green, ...The colours of their backpacks make the following pattern: red, brown, purple, red, brown, purple, ...\nHow many children have a yellow safety vest and a purple backpack?",
    options: [
      "3",
      "4",
      "6",
      "8",
      "10"
    ],
    answer: 4,
    explanation: "The overlap occurs 10 times, choice E.",
    hint: "A yellow vest occurs on every other child and a purple backpack every third child; find their common positions among 60.",
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
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "",
    options: [
      "0",
      "15",
      "18",
      "28",
      "30"
    ],
    answer: 3,
    explanation: "2T = 10S + C and C + T = 11S give S = 1, T = 7, C = 4; the product is 28, choice D.",
    hint: "Substitute the three shapes as digits: the first equation is a two-digit number and the second is a repeated-digit number.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-20.png",
    imageAlt: "Original 2024 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "There are exactly 2 frogs in each row and in each column - see picture. Two of the six frogs jump to one of their neighbouring fields at the same time when it is empty. After that, there are again two frogs in each row and in each column. How many possibilities are there for two frogs to jump like this?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "There are four valid simultaneous moves, choice D.",
    hint: "List the allowed pairs of frog moves and preserve the condition of two frogs in every row and column after both jumps.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-21.png",
    imageAlt: "Original 2024 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "The picture on the right shows a honeycomb with 9 cells. There is honey in some cells. The numbers in the cells indicate how many neighbouring cells contain honey. How many cells are filled with honey?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 2,
    explanation: "Exactly 6 cells contain honey, choice C.",
    hint: "For each honeycomb cell, use its neighbour count to test whether it contains honey; update shared neighbours consistently.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/q-22-visual.png",
    imageAlt: "Original 2024 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Option E cannot be decomposed into the three pieces.",
    hint: "Try to partition each candidate into the three given 3D pieces, allowing rotations and reflections but no overlap.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-23-extra.png",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Comparing the three possible take counts identifies the cookie shown in option E.",
    hint: "Work backwards through the girls' taking order: heart-shaped cookies are removed first, then white cookies, then large cookies.",
    imageChoices: true,
    imageAlt: "Original 2024 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "24-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-a.png"
      },
      {
        id: "24-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-b.png"
      },
      {
        id: "24-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-c.png"
      },
      {
        id: "24-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-d.png"
      },
      {
        id: "24-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2024/questions/editor-q-24-option-e.png"
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

export const edition2024Ecolier: QuestionSet = {
  id: "ecolier-2024",
  year: 2024,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 21, 2024",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2024/2024_Ecolier.pdf",
  questions: questions2024Ecolier,
  sections: sections,
};
