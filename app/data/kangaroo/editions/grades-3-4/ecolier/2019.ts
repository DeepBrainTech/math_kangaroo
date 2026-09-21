import type { Question, QuestionSet, Section } from "../../../types";

const questions2019Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The higher someone stands on the podium, the better the ranking. Which number got third place?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "The number at the third-highest podium position is 5, so the correct answer is choice E.",
    hint: "Rank the five numbered podium positions from highest to lowest, using the height of each platform rather than the person's size.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-01.png",
    imageAlt: "Original 2019 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The diagram shows the number 8. A dot stands for the number 1 and a line for the number 5. Which diagram represents the number 12?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The diagram in option C contains two lines and two dots, giving 2 × 5 + 2 = 12.",
    hint: "Count the dots as ones and the lines as fives, then compare the total with 12.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-02.png",
    imageAlt: "Original 2019 Ecolier question 2 visual",
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
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-02-extra.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Yesterday it was Sunday. Which day will it be tomorrow?",
    options: [
      "Saturday",
      "Thursday",
      "Wednesday",
      "Tuesday",
      "Monday"
    ],
    answer: 3,
    explanation: "Today is Monday, so tomorrow is Tuesday, choice D.",
    hint: "If yesterday was Sunday, first name today and then move one day forward.",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "Saturday",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "Thursday",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "Wednesday",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "Tuesday",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "Monday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "There are two holes in the cover of a book. The book lies on the table opened up (see diagram). \nAfter closing up the book which vehicles can Olaf see?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The reflected hole positions reveal the vehicle pair in option D.",
    hint: "Close the book by reflecting the two holes across the fold and inspect which vehicle images remain visible together.",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-a.png"
      },
      {
        id: "4-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-b.png"
      },
      {
        id: "4-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-c.png"
      },
      {
        id: "4-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-d.png"
      },
      {
        id: "4-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-04-option-e.png"
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Three people walked through the snow in their winter boots. In which order did they walk through the snow? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The print sequence matches option A.",
    hint: "Compare the depth, tread, and overlap of the three boot prints to reconstruct who walked first.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 5 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-05.png"
  },
  {
    number: 6,
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
    explanation: "Only option B appears as a neighbouring star-and-club pair, so B is possible.",
    hint: "Look for an adjacent pair in the card grid with exactly the two symbols shown on the cut-out piece.",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Using the connected sticks shown, Pia forms different shapes. Which shape can she not make?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Shape D cannot be made from the connected sticks, so choice D.",
    hint: "Join sticks edge to edge without bending or reusing a stick, and check the closed boundary of each candidate.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 7 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Which number goes into the field with the question mark, if all calculations are solved correctly?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 1,
    explanation: "The consistent value is 5, choice B.",
    hint: "Fill the missing number by using the same row and column calculation rules as the completed boxes.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-08.png",
    imageAlt: "Original 2019 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Linda fixes 3 photos on a pin board next to each other. She uses 8 pins to do so. Peter wants to fix 7 photos in the same way. How many pins does he need for that?",
    options: [
      "14",
      "16",
      "18",
      "22",
      "26"
    ],
    answer: 1,
    explanation: "Seven photos need 2 × (7 + 1) = 16 pins, so choice B.",
    hint: "Three adjacent photos use four pins on each of two horizontal edges; extend that same two-row pattern to seven photos.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-09-visual.png",
    imageAlt: "Original 2019 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "26",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Dennis takes off one of the squares of this shape How many of these 5 shapes can he get?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "Four of the five targets are obtainable; the count is choice C.",
    hint: "For each of the five silhouettes, try removing one square and compare the remaining shape with the target.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-10.png",
    imageAlt: "Original 2019 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Mother halves the birthday cake. One half she then halves again. Of that she again halves one of the smaller pieces. Of these smaller pieces she once more halves one of them (see diagram). One of the two smallest pieces weighs 100 g. How much does the entire cake weigh?",
    options: [
      "600 g",
      "800 g",
      "1200 g",
      "1600 g",
      "2000 g"
    ],
    answer: 3,
    explanation: "That piece is 1/16 of the cake, so the whole cake weighs 1600 g, choice D.",
    hint: "Track the repeated halving: the 100 g piece is one of the two pieces at the deepest level.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-11-visual.png",
    imageAlt: "Original 2019 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "600 g",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "800 g",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "1200 g",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "1600 g",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "2000 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "All dogs are equally heavy. How much could one dog weigh?",
    options: [
      "7 kg",
      "8 kg",
      "9 kg",
      "10 kg",
      "11 kg"
    ],
    answer: 4,
    explanation: "The pictured balances allow 11 kg for one dog, so choice E is possible.",
    hint: "Use both balance inequalities in the diagram to find a weight that is heavier than the displayed lower bound but still fits the upper bound.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-12-visual.png",
    imageAlt: "Original 2019 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "7 kg",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "8 kg",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "9 kg",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "10 kg",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "11 kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Sara has 16 blue marbles. She can swap her marbles in the following way: For 3 blue marbles she gets 1 red marble. For 2 red marbles she gets 5 green marbles. What is the maximum number of green marbles she can get?",
    options: [
      "5",
      "10",
      "13",
      "15",
      "20"
    ],
    answer: 1,
    explanation: "Sixteen blue give five red with one blue left; two red become five green, so choice B.",
    hint: "Use as many blue-to-red exchanges as possible, then convert red marbles to green in pairs.",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Steven wants to write each of the digits 2, 0, 1 and 9 into the boxes of this addition: He wants to obtain the biggest result possible. Which digit does he have to use for the single-digit number?",
    options: [
      "either 0 or 1",
      "either 0 or 2",
      "only 0",
      "only 1",
      "only 2"
    ],
    answer: 0,
    explanation: "The one-digit number can be 0 or 1 without reducing the maximum, so choice A.",
    hint: "In the addition, place the smallest available digit in the subtracted one-digit number, but compare both placements that keep the result largest.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-14-visual.png",
    imageAlt: "Original 2019 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "either 0 or 1",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "either 0 or 2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "only 0",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "only 1",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "only 2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A full glass of water weighs 400 grams. An empty glass weighs 100 grams. \nHow much does a half-full glass of water weigh?",
    options: [
      "150 g",
      "200 g",
      "225 g",
      "250 g",
      "300 g"
    ],
    answer: 3,
    explanation: "A half-full glass weighs 100 + 150 = 250 g, choice D.",
    hint: "Water contributes half of 300 g, while the glass contributes its full 100 g.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-15-visual.png",
    imageAlt: "Original 2019 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "150 g",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "200 g",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "225 g",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "250 g",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "300 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "The pictures show how much 2 pieces of fruit cost altogether",
    options: [
      "8 Taler",
      "9 Taler",
      "10 Taler",
      "11 Taler",
      "12"
    ],
    answer: 3,
    explanation: "The only matching pair total is 9 taler, choice B.",
    hint: "Use the pictured pair prices to solve for the value of each fruit and add the two fruits in each candidate.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-16.png",
    imageAlt: "Original 2019 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "8 Taler",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "9 Taler",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "10 Taler",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "11 Taler",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The circle is 4, the heart is 5, and the star is 6, so choice E.",
    hint: "Let the three rows of the 3-by-3 table have sums 15, 12, and 16; solve for the circle, heart, and star values.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-17.png",
    imageAlt: "Original 2019 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    prompt: "Anna uses 32 small grey squares to frame a 7 cm by 7 cm big picture. How many small grey squares does she have to use to frame a 10 cm by 10 cm big picture?",
    options: [
      "36",
      "40",
      "44",
      "48",
      "52"
    ],
    answer: 2,
    explanation: "The larger frame needs 44 small squares, choice C.",
    hint: "A 7 × 7 frame uses 32 squares; separate the four corners from the four side runs before scaling to 10 × 10.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "36",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "44",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "48",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "52",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "The pages of a book are numbered with 1, 2, 3, 4, 5 and so on. The digit 5 appears exactly 16 times. What is the maximum number of pages the book can have?",
    options: [
      "56",
      "64",
      "72",
      "80",
      "88"
    ],
    answer: 1,
    explanation: "The maximum page number is 64, giving exactly 16 fives, choice B.",
    hint: "Count the occurrences of digit 5 in one- and two-digit page numbers, then stop just before the next block would use too many.",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "56",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "64",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "72",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "80",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "88",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Six paper strips are used to weave a pattern (see diagram).\nWhat do you see when you look at the pattern from behind? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The back view is option C.",
    hint: "Follow each strip over and under its neighbours, then reverse the crossing order when viewed from behind.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-20-extra.png",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 20 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "There live exactly 15 animals on a farm: cows, cats and kangaroos. We know that exactly 10 animals are not cows and exactly 8 animals are not cats. How many kangaroos live on the farm?",
    options: [
      "2",
      "3",
      "4",
      "10",
      "18"
    ],
    answer: 1,
    explanation: "There are 5 cows and 7 cats, leaving 3 kangaroos, choice B.",
    hint: "Ten animals are not cows and eight are not cats; subtract from the total to find cows and cats, then the remainder.",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Marta sticks several triangles on top of each other and makes a star that way. What is the minimum number of triangles she has used?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Five triangles are the minimum needed, choice B.",
    hint: "Count the exposed points of one triangular sticker and compare them with the star's points; test overlays from the centre outward.",
    imageChoices: true,
    imageAlt: "Original 2019 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "One of the 5 children Alex, Bartek, Cora, Dani and Emil has eaten a cake.\n\nAlex says: \"I did not eat a cake.\"\nBartek says: \"I ate a cake.\"\nCora says: \"Emil has not eaten a cake.\"\nDani says: \"I did not eat a cake.\"\nEmil says: \"Alex has eaten a cake.\"\n\nOne of the children lies.\nWhich child has eaten a cake? ",
    options: [
      "Alex",
      "Bartek",
      "Cora",
      "Dani",
      "Emil"
    ],
    answer: 1,
    explanation: "Only the case where Bartek ate the cake leaves exactly one lie, so choice B.",
    hint: "Assume each child's statement in turn is the single lie and check all five statements.",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "Alex",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "Bartek",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "Cora",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "Dani",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "Emil",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "From above, the corridor of a school looks like in the diagram. A cat walks along the dotted line drawn in the middle of the room. How many meters does the cat walk?",
    options: [
      "75 m",
      "77 m",
      "79 m",
      "81 m",
      "83 m"
    ],
    answer: 4,
    explanation: "The complete route is 83 m, which is choice E.",
    hint: "Trace every straight section of the cat's route through the corridor and add the repeated lengths shown in the plan.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2019/questions/q-24-visual.png",
    imageAlt: "Original 2019 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "75 m",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "77 m",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "79 m",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "81 m",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "83 m",
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

export const edition2019Ecolier: QuestionSet = {
  id: "ecolier-2019",
  year: 2019,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 21, 2019",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2019/2019_Ecolier.pdf",
  questions: questions2019Ecolier,
  sections: sections,
};
