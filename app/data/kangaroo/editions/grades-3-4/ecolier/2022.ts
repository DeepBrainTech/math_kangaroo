import type { Question, QuestionSet, Section } from "../../../types";

const questions2022Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The bee wants to get to the flower. Each arrow indicates a move to one neighbouring square. Which path can the bee fly to get to the flower?",
    options: [
      "↓ → → ↓ ↓ ↓",
      "↓ ↓ → ↓ ↓ →",
      "→ ↓ → ↓ → →",
      "→ → ↓ ↓ ↓ ↓",
      "→ ↓ → ↓ ↓ →"
    ],
    answer: 4,
    explanation: "Only the route in option E reaches the flower legally.",
    hint: "Follow each arrow one neighbouring square at a time and reject paths that leave the grid or miss the flower.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/q-01-visual.png",
    imageAlt: "Original 2022 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "↓ → → ↓ ↓ ↓",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "↓ ↓ → ↓ ↓ →",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "→ ↓ → ↓ → →",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "→ → ↓ ↓ ↓ ↓",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "→ ↓ → ↓ ↓ →",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "For every birthday Maria gets as many teddies as she is years old on that day. For her first birthday she got 1 teddy. For her second birthday she got 2 teddies and so on. How many teddies in total has Maria got on the day after her sixth birthday?",
    options: [
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    answer: 2,
    explanation: "1 + 2 + 3 + 4 + 5 + 6 = 21 teddies, choice C.",
    hint: "Add the teddies received on birthdays 1 through 6; the day after the sixth birthday does not add another birthday gift.",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "23",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "One of the five coins A, B, C, D or E shall be placed in an empty square so that there are exactly two coins in each row and in each column. Which coin should be moved?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Moving coin C is the only way to make every row and column contain exactly two coins.",
    hint: "Count the coins already in every row and column, then try moving each candidate into the empty square.",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Which two numbers can be placed instead of the  in the calculation 2022 +  = 2020 +  so that it is correct?",
    options: [
      "3 and 5",
      "4 and 1",
      "3 and 4",
      "7 and 2",
      "9 and 8"
    ],
    answer: 0,
    explanation: "The equation requires the right replacement to be 2 larger; 3 and 5 satisfy it, choice A.",
    hint: "Subtract 2020 from 2022 and compare the two replacement numbers.",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "3 and 5",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "4 and 1",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "3 and 4",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "7 and 2",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "9 and 8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The reflected beam ends at B, so choice B is correct.",
    hint: "Trace the laser through each 45-degree mirror, reflecting its direction at every hit and recording the exit letter.",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 5 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Kengu jumps on the number line to the right (see diagram). He first makes one big jump and then two little jumps in a row and keeps repeating the same thing over and over again. He starts at 0 and ends at 16. How many jumps does Kengu make in total?",
    options: [
      "4",
      "7",
      "8",
      "9",
      "12"
    ],
    answer: 4,
    explanation: "The pattern reaches 16 after four groups, or 12 jumps, choice E.",
    hint: "Group jumps as one big jump followed by two little jumps and measure the repeated distance from 0 to 16.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-06.png",
    imageAlt: "Original 2022 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "In the diagram on the right two neighbouring squares are never allowed to have the same number. Which puzzle piece has to be placed in the gap so that this rule is\nfollowed?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only piece D avoids equal neighbouring numbers, so D must fill the gap.",
    hint: "Check the numbers on both sides of every neighbouring edge around the gap, then rotate each puzzle piece.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "John uses some building blocks to form a work of art.\nWhat does John see when he looks at his work of art from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The resulting plan view is option C.",
    hint: "Look straight down at the construction and record the occupied top squares, ignoring hidden lower blocks.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Five cars are labelled with the numbers 1 to 5 and drive in the direction of the arrow. First the last car overtakes the two cars in front of it. Then the now second-to-last car overtakes the two in front of it. In the end the car now in the middle overtakes the two in front of it. In which order do the cars now drive?",
    options: [
      "1, 2, 3, 4, 5",
      "2, 1, 3, 5, 4",
      "2, 1, 5, 3, 4",
      "3, 1, 4, 2, 5",
      "4, 1, 2, 5, 3"
    ],
    answer: 1,
    explanation: "The final order is 2, 1, 5, 3, 4, choice B.",
    hint: "Update the order after each overtake, remembering that the overtaking car moves ahead of the two cars in front.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-09.png",
    imageAlt: "Original 2022 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1, 2, 3, 4, 5",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2, 1, 3, 5, 4",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "2, 1, 5, 3, 4",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "3, 1, 4, 2, 5",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "4, 1, 2, 5, 3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "The members of a family of kangaroos are 2, 4, 5, 6, 8 and 10 years old. Four of them are 22 years old when added together. How old are the other two kangaroos?\n",
    options: [
      "2 and 8",
      "4 and 5",
      "5 and 8",
      "6 and 8",
      "6 and 10"
    ],
    answer: 2,
    explanation: "The selected four leave ages 5 and 8, so choice C.",
    hint: "Find the four ages that sum to 22 and then compare the unused pair with the answer choices.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/q-10-visual.png",
    imageAlt: "Original 2022 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "2 and 8",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "4 and 5",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "5 and 8",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "6 and 8",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "6 and 10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Mosif has filled a table with numbers (see diagram). When he adds the numbers in each row and in each column together, the result should always be the same. He has however, made a mistake. In order to get the same result every time he has to change one single number. Which number does Mosif have to change?",
    options: [
      "1",
      "3",
      "one of the two 4s",
      "5",
      "one of the two 7s"
    ],
    answer: 1,
    explanation: "Changing the entry to 3 equalizes the row and column totals, so the correct choice is B.",
    hint: "Add every row and column, then compare the totals; testing the single entry 3 is the only change that makes all six sums agree.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-11.png",
    imageAlt: "Original 2022 Ecolier question 11 visual",
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
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "one of the two 4s",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "one of the two 7s",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Aladdin’s carpet has the shape of a square. Along each edge there are two rows of dots (see diagram). The number of points is the same along each edge. How many dots in total does the carpet have?",
    options: [
      "32",
      "36",
      "40",
      "44",
      "48"
    ],
    answer: 0,
    explanation: "The total is 32 dots, choice A.",
    hint: "Count two rows of dots along each edge, subtract corner duplications, and use the square's side count.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-12.png",
    imageAlt: "Original 2022 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "32",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "36",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "40",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "44",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "In a classroom the children sit in rows. \nIn each row there are the same amount of children. \nIn Robert‘s row there are 2 children to the left of him and 3 children to the right of him. In front of Robert there are 2 rows, behind him just one. \nHow many children in total are in this class?",
    options: [
      "8",
      "15",
      "18",
      "20",
      "24"
    ],
    answer: 4,
    explanation: "There are 4 rows of 6, giving 24 children, choice E.",
    hint: "Robert has 2 children left and 3 right, so each row has 6 children; his row has two rows in front and one behind.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Johanna folds a piece of paper with the numbers 1 to 36 in half twice (see diagrams).\nThen she stabs a hole through all four layers at the same time (see diagram on the right).\nWhich four numbers does she pierce in doing so?\n",
    options: [
      "8, 11, 26, 29",
      "14, 16, 21, 23",
      "14, 17, 20, 23",
      "15, 16, 21, 22",
      "15, 17, 20, 22"
    ],
    answer: 2,
    explanation: "The four pierced numbers are 14, 17, 20, and 23, choice C.",
    hint: "Fold the 6 × 6 number grid twice and reflect the hole into all four layers.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-14.png",
    imageAlt: "Original 2022 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "8, 11, 26, 29",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "14, 16, 21, 23",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "14, 17, 20, 23",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "15, 16, 21, 22",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "15, 17, 20, 22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Three football teams are taking part in a tournament. \nEach team plays each other team once. \nFor a win the team scores 3 points, the other team 0 points. \nFor a draw both teams get 1 point each. \nWhich number of points is impossible, for any team to reach at the end of this tournament?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "A team cannot finish on 5 points, so choice D.",
    hint: "List the totals a team can get from two matches: 0, 1, 2, 3, 4, 6.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Jan sends five postcards to his friends during his holiday. \nThe card for Michael does not have ducks. \nThe card for Lexi shows a dog. \nThe card for Clara shows the sun. \nThe card for Heidi shows kangaroos. \nThe card for Paula shows exactly two animals. \nWhich card does Jan send to Michael?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The remaining card for Michael is option A.",
    hint: "Use each clue to eliminate one postcard image: Michael lacks ducks, Lexi has a dog, Clara has sun, Heidi has kangaroos, Paula has exactly two animals.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-16-extra.png",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Wanda chooses some of the following shapes. She says: \"I have chosen exactly 2 grey, 2 big and 2 round shapes.\" \nWhat is the minimum number of shapes Wanda has chosen?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Two shapes cannot cover all three pairs, but three can, so the minimum is 3, choice B.",
    hint: "A shape can satisfy two attributes at once; choose shapes that cover grey, big, and round requirements with maximum overlap.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-17.png",
    imageAlt: "Original 2022 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "The little caterpillar rolls up to go to sleep. What could it look like then?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The resulting curled shape is option A.",
    hint: "Roll the caterpillar in the only physically possible direction, keeping the head and tail order through each bend.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-18-extra.png",
    imageChoices: true,
    imageAlt: "Original 2022 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "A pyramid is built from cubes (see diagram). \nAll cubes have side length 10 cm. \nAn ant crawls along the line drawn across the pyramid (see diagram). \nHow long is the path taken by the ant?",
    options: [
      "30 cm",
      "60 cm",
      "70 cm",
      "80 cm",
      "90 cm"
    ],
    answer: 4,
    explanation: "The path contains nine 10-cm segments, so it is 90 cm, choice E.",
    hint: "Each cube edge is 10 cm; count the straight segments of the ant's path across the pyramid.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/q-19-visual.png",
    imageAlt: "Original 2022 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "30 cm",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "60 cm",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "70 cm",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "80 cm",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "90 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "A road leads away from each of the six houses (see diagram). A hexagon showing the roads in the middle is however, missing.\nWhich hexagons fit in the middle so that one can travel from A to B and to E, but not to D?",
    options: [
      "1 and 2",
      "1 and 4",
      "1 and 5",
      "2 and 3",
      "4 and 5"
    ],
    answer: 2,
    explanation: "Only hexagons 1 and 5 satisfy all three route conditions, choice C.",
    hint: "Test each pair of middle hexagons by tracing connections from A; require routes to B and E but no route to D.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-20.png",
    imageAlt: "Original 2022 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "1 and 2",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "1 and 4",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "1 and 5",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "2 and 3",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "4 and 5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The first common travel distance is lcm(20, 30) = 60 m, so Ahmed walks 3 rounds, choice C.",
    hint: "The square garden has perimeter 20 m and the rectangular garden has perimeter 30 m; both walkers return to A after a whole number of rounds.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-21.png",
    imageAlt: "Original 2022 Ecolier question 21 visual",
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
    prompt: "Five girls eat plums. \nLaura eats 2 plums more than Sophie. \nBettina eats 3 plums less than Laura. \nClara eats one plum more than Bettina and 3 less than Alice. \nWhich two of the girls eat the same amount of plums?",
    options: [
      "Alice and Bettina",
      "Alice and Laura",
      "Alice and Sophie",
      "Clara and Laura",
      "Clara and Sophie"
    ],
    answer: 4,
    explanation: "Clara and Sophie eat the same number of plums, choice E.",
    hint: "Write the five girls' amounts in terms of Sophie's amount, then compare the resulting expressions.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "Alice and Bettina",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "Alice and Laura",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "Alice and Sophie",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "Clara and Laura",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "Clara and Sophie",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "The big cube is made up of three different kinds of building blocks (see diagram).\nHow many of the little white cubes are needed for this big cube?",
    options: [
      "8",
      "11",
      "13",
      "16",
      "19"
    ],
    answer: 1,
    explanation: "The total number of small white cubes is 11, choice B.",
    hint: "Count the white cubes in each layer of the large cube, using the repeated block types shown in the diagram.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-23.png",
    imageAlt: "Original 2022 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Under cards with the same colour, the same number is always found. If the three hidden numbers in one row are added, one obtains the number to the right of the row.\nWhich number is hidden under the black card?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    answer: 3,
    explanation: "The black card hides 12, so choice E.",
    hint: "Write the same hidden number for each colour and solve the row-sum equations containing the black card.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2022/questions/editor-q-24.png",
    imageAlt: "Original 2022 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "8",
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
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "14",
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

export const edition2022Ecolier: QuestionSet = {
  id: "ecolier-2022",
  year: 2022,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 17, 2022",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2022/2022_Ecolier.pdf",
  questions: questions2022Ecolier,
  sections: sections,
};
