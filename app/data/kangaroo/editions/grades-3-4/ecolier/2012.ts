import type { Question, QuestionSet, Section } from "../../../types";

const questions2012Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In which of the five pictures is the white area bigger than the grey area?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "After the equal parts cancel, only option D has more white area than grey area.",
    hint: "Compare white and grey regions by pairing equal-size parts along the picture's boundaries.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
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
    prompt: "Barbara wrote the word MATHEMATIC on a piece of paper. She used the same colour for letters which are the same. She used a different colour for letters which are different. How many different colours did she use?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "13"
    ],
    answer: 0,
    explanation: "The distinct letters are M, A, T, H, E, I, and C, so seven colours are needed: A.",
    hint: "Mark every distinct letter in MATHEMATIC, counting a repeated letter only once.",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Father hangs towels on the washing as shown in the picture. For three towels he uses 4 clothes pegs. How many clothes pegs would he use for 5 towels?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    answer: 2,
    explanation: "Three towels need four pegs, so five towels need six pegs, choice C.",
    hint: "For a row of touching towels, the pegs at the two ends are shared with neighbouring towels.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-03.png",
    imageAlt: "Original 2012 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Oli coloured in the following 8 fields in the grid: A2, B1, B2, B3, B4, C3, D3 and D4. Which is his grid?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only option C contains A2, B1–B4, C3, D3, and D4 exactly.",
    hint: "Check the given coordinates one by one against the grid in each picture, including every entry in column B.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-04-extra.png",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 4 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "13 children play hide and seek. One of them searches. After a little while 9 children are found. How many are still hiding?",
    options: [
      "3",
      "4",
      "5",
      "9",
      "22"
    ],
    answer: 0,
    explanation: "13 − 1 − 9 = 3 children are still hiding, so choice A.",
    hint: "Remove the one child searching and the nine already found from the total.",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "9",
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
    prompt: "Mike and Jake play darts. Each of them throws three darts. Who won, and by how many points?",
    options: [
      "Mike won. He had three points more.",
      "Jake won. He had 4 points more.",
      "Mike won. He had 2 points more.",
      "Jake won. He had 2 points more.",
      "Mike won. He had 4 points more. Mike Jake"
    ],
    answer: 4,
    explanation: "The target totals show that Mike wins by 4 points, which is choice E.",
    hint: "Add Mike's three dart scores and Jake's three scores from the target, keeping the bullseye values distinct.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-06.png",
    imageAlt: "Original 2012 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "Mike won. He had three points more.",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Jake won. He had 4 points more.",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Mike won. He had 2 points more.",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "Jake won. He had 2 points more.",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "Mike won. He had 4 points more. Mike Jake",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "A Wall was tiled alternately with grey and striped tiles. Some tiles have fallen from the wall. How many grey tiles have fallen off?",
    options: [
      "9",
      "8",
      "7",
      "6",
      "5"
    ],
    answer: 2,
    explanation: "The missing positions contain seven grey tiles, so choice C is correct.",
    hint: "Follow the grey/striped alternation across every row and column, then count the grey positions that are missing.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/q-07-visual.png",
    imageAlt: "Original 2012 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "On the 24th February 2012 Grandfathers chicks hatched. There are 29 days in February in 2012. How old are the chicks today on 15th March 2012?",
    options: [
      "29 days",
      "24 days",
      "22 days",
      "20 days",
      "15 days"
    ],
    answer: 3,
    explanation: "There are 5 remaining February days plus 15 March days, giving 20 days, choice D.",
    hint: "Count from February 24 through February 29 and then add the first 15 days of March.",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "29 days",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "24 days",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "22 days",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "20 days",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "15 days",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 4,
    explanation: "All four shown silhouettes can be formed, so the answer is 4, choice E.",
    hint: "Place the two L-shapes over each candidate silhouette, allowing rotation but not overlap or uncovered squares.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "3 balloons cost 12 cents more than 1 balloon. How much does 1 balloon cost?",
    options: [
      "4 Cents",
      "6 Cents",
      "8 Cents",
      "10 Cents",
      "12 Cents"
    ],
    answer: 1,
    explanation: "3 balloons − 1 balloon = 2 balloons cost 12 cents, so one costs 6 cents, choice B.",
    hint: "The extra cost of two additional balloons is 12 cents; divide that difference by two.",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "4 Cents",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "6 Cents",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "8 Cents",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "10 Cents",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "12 Cents",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Grandmother baked 20 ginger biscuits for her grandchildren. She decorated them with raisins and nuts. First she decorated 15 with raisins, and then 15 with nuts. No biscuit was left over. How many biscuits were decorated with both raisins and nuts?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    answer: 4,
    explanation: "15 + 15 − 20 = 10 biscuits have both raisins and nuts, choice E.",
    hint: "Use inclusion–exclusion: add the two groups of 15 decorations and subtract the 20 biscuits counted twice.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "6",
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
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "In the school for animals there are 3 cats, 2 ducks, 2 sheep and some dogs. The teacher counted the legs of all the animals, and got 44. How many dogs go to the school?",
    options: [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    answer: 1,
    explanation: "The known animals have 24 legs; 44 − 24 = 20 legs means 5 dogs, choice B.",
    hint: "Count the legs already supplied by cats, ducks, and sheep before assigning the remaining legs to dogs.",
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
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "You need 3 pieces to build this shape. Each piece is made out of 4, equally sized cubes of the same colour. What is the shape of the white piece?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only option D has the correct turns and exposed-face pattern for the white piece.",
    hint: "Match the exposed faces of the white four-cube piece with the same faces in the three-part solid.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-a.png"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-b.png"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-c.png"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-d.png"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-13-option-e.png"
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "15 tables were set for a party. 5 plates were laid on 6 tables. 3 plates were laaid on the rest of the tables. How many plates were needed in total?",
    options: [
      "45",
      "50",
      "57",
      "60",
      "75"
    ],
    answer: 2,
    explanation: "6 × 5 + 9 × 3 = 30 + 27 = 57 plates, so choice C.",
    hint: "Separate the six tables with five plates from the nine tables with three plates.",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "45",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "57",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "60",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "75",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A flea stands on the floor and wants to climb the 10 steps. He can either jump 3 steps upwards or jump 4 steps downwards. What is the smallest number of jumps he must make?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 4,
    explanation: "The shortest route takes 8 jumps; every route with seven or fewer misses step 10, so choice E.",
    hint: "Search for a shortest sequence of +3 and −4 jumps that lands exactly on step 10 without going below the floor.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Frank laid out his dominoes as shown in the picture. (Dominoes which touch must always have the same number of points). Before his brother George removed two dominoes there were 33 points altogether. How many points is the questionmark worth?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The missing total forced by the diagram makes the question-mark domino value 4, choice C.",
    hint: "Add all the visible domino pips and use the stated total of 33 before the two dominoes were removed.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 5,
    prompt: "In an arithmetic sudoku, the values 1, 2, 3, and 4 appear exactly once in each row and each column. Which value belongs in the grey square?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "1 or 2"
    ],
    answer: 2,
    explanation: "The grey cell must contain 3, which is choice C.",
    hint: "In each row and column of the arithmetic sudoku, cross out the three present values and keep the missing one.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "1 or 2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "The classmates of Thomas are twice as many girls as boys. How many children could be in the class?",
    options: [
      "30",
      "20",
      "24",
      "25",
      "29"
    ],
    answer: 3,
    explanation: "Twenty-four classmates can be split 16 girls and 8 boys; adding Thomas gives 25 children, choice D.",
    hint: "If the classmates contain twice as many girls as boys, their number must be a multiple of three; then include Thomas.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "30",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "25",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "29",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Gregory made two 3-digit numbers from the numbers 1, 2, 3, 4, 5, 6. Each number was used only once. Afterwards he added the numbers together. What is the largest answer that he could have got?",
    options: [
      "975",
      "999",
      "1083",
      "1173",
      "1221"
    ],
    answer: 3,
    explanation: "The best place-value arrangement gives 1173, so the largest possible answer is choice D.",
    hint: "To maximize the sum, put the two largest digits in the hundreds places, then the next two in the tens places.",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "975",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "999",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "1083",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "1173",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "1221",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Anna, Laura, Lisa and Katharina wanted to take a photo together. Anna and Katharina are best Friends and wanted to stand next to each other. Lisa also wanted to stand next to Anna. In how many different ways can the photo be taken, if their wishes are to be met?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "The block has two orders and the fourth person has two possible positions, giving 4 arrangements, choice B.",
    hint: "Anna must sit between Katharina and Lisa, so treat those three as a block and place the remaining friend.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Grandma’s watch has an hour, minute and second hand. We don’t know which hand does which job, but we know that the watch tells the correct time. At 12:55:30 hours the watch looked as pictured. How will the watch look at 8:11:00 hours?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Keeping the three hand speeds consistent produces option E.",
    hint: "First identify which hand is the hour, minute, and second hand at 12:55:30, then advance each by the stated time.",
    imageChoices: true,
    imageAlt: "Original 2012 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-a.png"
      },
      {
        id: "21-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-b.png"
      },
      {
        id: "21-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-c.png"
      },
      {
        id: "21-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-d.png"
      },
      {
        id: "21-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2012/questions/editor-q-21-option-e.png"
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Michael thought of a number. He multiplied this number with itself, added 1, multiplied the result by 10, added 3 and multiplied the total by 4. He arrived at 2012. Which number had Michael thought of to start with?",
    options: [
      "11",
      "9",
      "8",
      "7",
      "5"
    ],
    answer: 3,
    explanation: "2012 ÷ 4 = 503, then 503 − 3 = 500, 500 ÷ 10 = 50, and 50 − 1 = 49; the starting number is 7, choice D.",
    hint: "Undo the final multiplication, addition, multiplication, and addition in reverse order.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "9",
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
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "A rectangular piece of paper is 60 mm loong and 36 mm wide. After making a straight cut you have a square and a leftover piece. You do the same with the leftover piece and so on until the leftover piece itself is square. What is the side length of the last square?",
    options: [
      "1 mm",
      "4 mm",
      "6 mm",
      "10 mm",
      "12 mm"
    ],
    answer: 4,
    explanation: "The remainders are 24 and 12, so the final square has side 12 mm, choice E.",
    hint: "Repeatedly cut off the largest possible square from 60 by 36, just as in the Euclidean algorithm.",
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "1 mm",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "4 mm",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "6 mm",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "10 mm",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "12 mm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "In football you get 3 points for a win, no points for a loss, and 1 point for a draw. A team has played 36 matches and has 80 points. What is the maximum number of matches the team could have lost?",
    options: [
      "12",
      "11",
      "10",
      "9",
      "8"
    ],
    answer: 4,
    explanation: "The maximum occurs at 26 wins, 2 draws, and 8 losses, so choice E is correct.",
    hint: "Let wins, draws, and losses add to 36 and let 3w + d = 80; maximize losses while keeping all counts nonnegative.",
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "8",
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

export const edition2012Ecolier: QuestionSet = {
  id: "ecolier-2012",
  year: 2012,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 15, 2012",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2012/2012_Ecolier.pdf",
  questions: questions2012Ecolier,
  sections: sections,
};
