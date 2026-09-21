import type { Question, QuestionSet, Section } from "../../../types";

const questions2013Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "How many more bricks does the right hand pyramid have than the left hand pyramid?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "10"
    ],
    answer: 1,
    explanation: "The right pyramid contains five more bricks than the left, so choice B.",
    hint: "Count the blocks in both stepped pyramids layer by layer, not just along their front edges.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/q-01-visual.png",
    imageAlt: "Original 2013 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "In which picture are there more black Kangaroos than white ones?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only option D has more black kangaroos than white ones.",
    hint: "Count black and white kangaroos in each picture and compare the two totals.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-02-extra.png",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 2 visual",
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
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Anna, Bob, and Josef are fixed by their pictured objects; the remaining matching face is Barbara, option D.",
    hint: "Use the clues to identify the people: match the earrings, necklace, glasses, and hat before choosing a face.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-03-extra.png",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 3 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "",
    options: [
      "2",
      "4",
      "5",
      "7",
      "8"
    ],
    answer: 0,
    explanation: "50 + x + 50 + x = 104 gives 2x = 4 and x = 2, choice A.",
    hint: "Let the hidden digit be x and write the pictured addition as two copies of 5x.",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "5",
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Five children are talking about the number 325. Andreas: \"It is a three digit number.\";\nBoris: \"all the digits are different.\" Sara: \"The digit sum is 10.\"\nGerda: \"The units digit is 5.\" Daniela: \"All the digits are odd.\"\nWho has made a mistake?",
    options: [
      "Andreas",
      "Boris",
      "Sara",
      "Gerda",
      "Daniela"
    ],
    answer: 4,
    explanation: "The digits 3, 2, and 5 are not all odd because 2 is even, so Daniela is wrong: E.",
    hint: "Check each statement about 325 directly; only one statement disagrees with the digits.",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "Andreas",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "Boris",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "Sara",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "Gerda",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "Daniela",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Anna starts in the direction of the arrow. At each crossing she turns either right or left. At the first crossing she turns right, at the next left, then left again, then right, then left and left again. \nWhat will she find at the next crossing thatshe comes to?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Following that exact turn sequence leads to the symbol in option A.",
    hint: "Start in the arrow direction and record the six turns R, L, L, R, L, L one crossing at a time.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-06-extra.png",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 6 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Nathalie wanted to build a large cube out of lots of small cubes, just like in picture 1. How many cubes are missing from picture 2 that would be needed to build the large cube?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9 Picture 1 Picture 2"
    ],
    answer: 2,
    explanation: "The completed cube needs seven additional cubes, so choice C.",
    hint: "Complete the large cube's full volume and subtract the cubes already present in picture 2.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-07.png",
    imageAlt: "Original 2013 Ecolier question 7 visual",
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
        text: "6",
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
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "9 Picture 1 Picture 2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "The rectangular mirror has broken. Which piece is missing?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Only piece B has the required complementary reflected outline.",
    hint: "Reflect the broken rectangle's boundary, matching every straight edge and corner angle.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 8 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "How many triangles can be seen in the picture on the right? (Be careful! A triangle can be also be made by joining several smaller triangles together.)",
    options: [
      "9",
      "10",
      "11",
      "13",
      "12"
    ],
    answer: 1,
    explanation: "The picture contains 10 triangles altogether, which is choice B.",
    hint: "Count the small triangles first, then count larger triangles made by combining them along complete sides.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-09.png",
    imageAlt: "Original 2013 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "11",
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
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: " Veras Mum has made sandwiches, each using two slices of bread. There are 24 slices in a pack. How many sandwiches can she make with two whole and one half packets of bread? ",
    options: [
      "6",
      "12",
      "24",
      "30",
      "48"
    ],
    answer: 3,
    explanation: "Two and a half packets give 2.5 × 24 = 60 slices, enough for 30 sandwiches, choice D.",
    hint: "Convert the bread supply into slices before dividing by two slices per sandwich.",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Daniel had 36 sweets. He shared them equally between his siblings. How many siblings can he definitely not have?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "36 cannot be divided equally among 5 siblings, so choice D is the impossible number.",
    hint: "A number of siblings must divide 36 exactly, because every sibling receives the same whole number of sweets.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "2",
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
        text: "4",
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
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Pinocchios nose is 9cm long. If he lies his nose grows by 6cm. If he tells the truth it shortens by 2cm. He tells three untruths and twice the truth. How long is Pinocchios nose now?",
    options: [
      "14 cm",
      "15 cm",
      "19 cm",
      "23 cm",
      "31 cm"
    ],
    answer: 3,
    explanation: "9 + 3 × 6 − 2 × 2 = 23 cm, so choice D.",
    hint: "Apply each lie as +6 cm and each truth as −2 cm, starting from 9 cm.",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "14 cm",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "15 cm",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "19 cm",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "23 cm",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "31 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Which of the following pieces can be joined to the one pictured so that a rectangle is formed?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Only option B has the required complementary edges.",
    hint: "Rotate and translate each candidate piece so its boundary completes the pictured rectangle without a gap.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-13-extra.png",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "In a shop you can buy oranges in bags of 4 or bags of 10. Pedro wants to buy exactly 48 oranges. What is the smallest number of bags he must buy?",
    options: [
      "8",
      "7",
      "6",
      "5",
      "4"
    ],
    answer: 2,
    explanation: "Four 10-bags and two 4-bags make 48 with six bags, and no five-bag combination works; choice C.",
    hint: "Try combinations of 4-orange and 10-orange bags, starting with the fewest bags.",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "6",
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
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "At the London 2012 Olympic games the USA won the most medals: 46 Gold-, 29 Silver- and 29 Bronze medals. China was second with 38 Gold-, 27 Silver- and 23 Bronze medals. How many more medals did the USA win than China?",
    options: [
      "6",
      "14",
      "16",
      "24",
      "26"
    ],
    answer: 2,
    explanation: "The USA has 104 medals and China 88, so the difference is 16, choice C.",
    hint: "Add gold, silver, and bronze medals for each country before subtracting the totals.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "26",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "30 children took part in a sports competition, in the sports football and handball. 15 took part in football and 20 took part in handball. How many students took part in both sports?",
    options: [
      "25",
      "15",
      "30",
      "10",
      "5"
    ],
    answer: 4,
    explanation: "15 + 20 − 30 = 5 students played both, choice E.",
    hint: "Use inclusion–exclusion: football plus handball counts the students in both sports twice.",
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "The number 35 has the property that it can be divided by its unit digit, because 35 divided by 5 is exactly 7. The number 38 does not have this property. How many numbers bigger than 21, but smaller than 30 have this property?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "22, 24, and 25 work, while the others do not; there are 3 such numbers, choice B.",
    hint: "Test 22 through 29 by dividing each number by its units digit.",
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
    prompt: "In February 2013 Schnurrli the tomcat slept for exactly three weeks. For how many hours in this month was he awake?",
    options: [
      "168",
      "192",
      "216",
      "240",
      "504"
    ],
    answer: 0,
    explanation: "28 × 24 − 21 × 24 = 168 awake hours, so choice A.",
    hint: "February 2013 has 28 days; subtract the 21 sleeping days from the month's total hours.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "168",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "192",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "216",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "240",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "504",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Andi, Betti, Clara and Dani were born in the same year. Their birthdays are on the 20th February, 12th April, 12th May and 25th May, but not necessarily in that order. Betti and Andi were born in the same month. Andi and Clara were born on the same day in different months. Who is the oldest?",
    options: [
      "Andi",
      "Betti",
      "Clara",
      "Dani",
      "There is not enough information to answer the question."
    ],
    answer: 3,
    explanation: "Andi must be May 12, Clara April 12, Betti May 25, leaving Dani February 20 as oldest: choice D.",
    hint: "Use the two same-month clues and the two same-day clues to assign the April and May dates first.",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "Andi",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "Betti",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "Clara",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "Dani",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "There is not enough information to answer the question.",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "If I join the midpoints of the sides of the large triangle in the picture, a small triangle is formed. If I join the midpoints of the sides of this small triangle, a tiny triangle is formed. How many of these tiny triangles can fit into the largest\ntriangle at the same time?",
    options: [
      "5",
      "8",
      "10",
      "16",
      "32"
    ],
    answer: 3,
    explanation: "A side ratio of 4 gives 4 × 4 = 16 tiny triangles, choice D.",
    hint: "Each midpoint triangle has half the side length of its parent; the tiny triangle therefore has one quarter the side length of the large one.",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "32",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Chrissi wants to sell 10 glass marbles which each have a different weight. Their weights are: 1 dag, 2 dag, 3 dag, 4 dag, 5 dag, 6 dag, 7 dag, 8 dag, 9 dag and 10 dag. They should be packed into bags two at a time, so that each bag has the same weight. Which two marbles will be put into the same bag?",
    options: [
      "3 and 6",
      "3 and 7",
      "3 and 8",
      "3 and 9",
      "3 and 10"
    ],
    answer: 2,
    explanation: "The only pair involving 3 that totals 11 is 3 and 8, choice C.",
    hint: "Pair the ten weights so every pair has the same sum; the total weight is 55, so each pair must total 11.",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "3 and 6",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "3 and 7",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "3 and 8",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "3 and 9",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "3 and 10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Baris has a few dominoes as shown in the picture. He wants to lay them in a line according to the rules of dominoes, that is that two dominoes can only be laid together if the neighbouring squares have the same number of dots in them. What is the biggest number of these dominoes that he can lay in a single line?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "The longest legal chain uses five dominoes, so choice C.",
    hint: "Build the longest chain by matching equal domino ends, and stop when every unused domino would break the chain.",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Peter has bought a rug that is 36 dm wide and 60 dm long. On the rug you can see squares that contain either a sun or a moon, as shown in the picture. As you can see there are exactly nine squares along the width of the rug. The total length of the rug cannot be seen. How many moons would you see, if you could see the entire rug? ",
    options: [
      "68",
      "67",
      "65",
      "63",
      "60"
    ],
    answer: 1,
    explanation: "The resulting 9-by-15 pattern contains 67 moons, matching choice B.",
    hint: "Use the nine squares across the 36 dm width to get the square size, then extend the visible repeating row across 60 dm.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-23.png",
    imageAlt: "Original 2013 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "68",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "67",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "65",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "63",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Beatrice has a few grey tiles that all look exactly like the one pictured. At least how many of these tiles does she need in order to make a complete square? ",
    options: [
      "3",
      "4",
      "6",
      "8",
      "16"
    ],
    answer: 1,
    explanation: "Four copies are enough and fewer cannot close all four sides, so choice B.",
    hint: "Rotate copies of the tile and fit their notches around a common centre, checking the outer boundary for a square.",
    imageChoices: true,
    imageAlt: "Original 2013 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "6",
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
        text: "16",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2013/questions/editor-q-24.png"
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

export const edition2013Ecolier: QuestionSet = {
  id: "ecolier-2013",
  year: 2013,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 21, 2013",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2013/2013_Ecolier.pdf",
  questions: questions2013Ecolier,
  sections: sections,
};
