import type { Question, QuestionSet, Section } from "../../../types";

const questions2016Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Amy, Bert, Carl, Doris and Ernst each throw two dice. Who has got the biggest total altogether?",
    options: [
      "Amy",
      "Bert",
      "Carl",
      "Doris",
      "Ernst"
    ],
    answer: 4,
    explanation: "The pair with the greatest total belongs to Ernst, choice E.",
    hint: "Add the two dice shown for each child instead of comparing only one die.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/q-01-visual.png",
    imageAlt: "Original 2016 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "Amy",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "Bert",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "Carl",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "Doris",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Ernst",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: " A kangaroo is 7 weeks and 2 days old. In how many days is it 8 weeks old?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "Eight weeks is 56 days; 56 − (7 × 7 + 2) = 5 days, choice E.",
    hint: "Convert 8 weeks into days and subtract the kangaroo's current age.",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "What is the final result?",
    options: [
      "24",
      "28",
      "36",
      "56",
      "80"
    ],
    answer: 0,
    explanation: "Following the arrows gives a final result of 24, choice A.",
    hint: "Evaluate the nested operations in the pictured calculation from the innermost pair outward.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-03.png",
    imageAlt: "Original 2016 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "28",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "36",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "56",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "80",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Clown Pipo looks like this: He looks at himself in the mirror. Which picture does he see?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The reflected clown is shown in option A.",
    hint: "Reflect each asymmetric part of Pipo across a vertical mirror line, including the direction of his hat and features.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-04-extra.png",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 4 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Georg goes to the circus with his father. They have the seat numbers 71 and 72. Which arrow do they have to follow to get to their seats?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The required route is option D.",
    hint: "Use the seat numbers 71 and 72 to find their row and then follow the arrow that reaches that row in the diagram.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 5 visual",
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
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Anna has shared her apples fairly between herself and her five girlfriends. Each girl has received half an apple. How many apples did Anna have to start with?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Six halves make 3 apples, so Anna started with 3, choice B.",
    hint: "Anna and five friends make six equal shares, each receiving half an apple.",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
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
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Part of a rectangle is hidden by a curtain. The hidden part is a",
    options: [
      "triangle",
      "square",
      "hexagon",
      "circle",
      "rectangle"
    ],
    answer: 0,
    explanation: "The hidden part must be a triangle, choice A.",
    hint: "Complete the hidden side of the rectangle by matching the same straight boundary and the same number of corners.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-07.png",
    imageAlt: "Original 2016 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "triangle",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "square",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "hexagon",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "circle",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "rectangle",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Which of the following sentences fits to the picture?",
    options: [
      "There are equally many circles as squares.",
      "There are fewer circles than triangles.",
      "There are twice as many circles as triangles.",
      "There are more squares than triangles.",
      "There are two more triangles than circles. - 4 Points Questions -"
    ],
    answer: 2,
    explanation: "Only statement C, twice as many circles as triangles, is true.",
    hint: "Count circles, squares, and triangles in the picture, then compare each statement with those totals.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-08.png",
    imageAlt: "Original 2016 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "There are equally many circles as squares.",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "There are fewer circles than triangles.",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "There are twice as many circles as triangles.",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "There are more squares than triangles.",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "There are two more triangles than circles. - 4 Points Questions -",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "If you add up the digits of the year 2016 (2+0+1+6), the result is 9. What is the next year after 2016, for which the sum of the digits is 9 again?",
    options: [
      "2007",
      "2025",
      "2034",
      "2108",
      "2134"
    ],
    answer: 1,
    explanation: "2025 has 2 + 0 + 2 + 5 = 9, so choice B.",
    hint: "Look for the next year after 2016 whose digit sum is 9; test years in order rather than jumping centuries.",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "2007",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2025",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "2034",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "2108",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "2134",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "A mouse wants to escape a labyrinth. On her way out she is only allowed to go through each opening once at most. How many different ways can the mouse choose to go to get outside?\n",
    options: [
      "2",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "There are four distinct legal escape routes, choice B.",
    hint: "At every junction, mark which openings have already been used and trace each possible route to the outside.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-10.png",
    imageAlt: "Original 2016 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Peter wants to guess Paul’s password. He already knows the following: The three last characters are digits. There are at most three capital letters in the password. Which of the following passwords could be Paul’s?",
    options: [
      "PAUL123",
      "P0a1u2L3",
      "1234LLuuaapp4321",
      "Paulin3",
      "123PAUL"
    ],
    answer: 2,
    explanation: "Only password B satisfies the stated format restrictions.",
    hint: "Check both the number of capital letters and whether the final three characters are digits for each password.",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "PAUL123",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "P0a1u2L3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "1234LLuuaapp4321",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "Paulin3",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "123PAUL",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "In the middle of the big diagram one piece is missing and should be replaced. You are only allowed to do this by connecting light-grey lines with light-grey lines, dark-grey lines with dark-grey lines and black lines with black lines. Which piece fits?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Option B is the only piece whose three edge colours continue every line without a mismatch.",
    hint: "Connect light-grey edges only to light-grey, dark to dark, and black to black; rotate each candidate piece.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 12 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Five children each have a black square, a grey triangle and a white circle made up of paper. The children place the three shapes on top of each other as seen in the pictures. In how many pictures was the triangles placed after the square?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "Exactly three of the five pictures meet that order, choice D.",
    hint: "In each stack, compare the vertical order of square, triangle, and circle; count cases where triangle is placed after square.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-13.png",
    imageAlt: "Original 2016 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Konrad dries mushrooms. From 4 kg of fresh mushrooms he gets 1 kg of dried mushrooms. How many kilograms of mushrooms does he have to pick in order to receive 4 kg of dried mushrooms?",
    options: [
      "12 kg",
      "16 kg",
      "20 kg",
      "25 kg",
      "50 kg"
    ],
    answer: 1,
    explanation: "To obtain 4 kg dried mushrooms, Konrad needs 16 kg fresh, choice B.",
    hint: "The drying ratio is 4 kg fresh to 1 kg dried; scale both sides by four.",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "12 kg",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "16 kg",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "20 kg",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "25 kg",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "50 kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Chantal has placed numbers in two of the nine cells (see diagram). She wants to place the numbers 1, 2, 3 in every row and every column exactly once. How big is the sum of the two numbers in the grey cells?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The forced grey entries add to 4, so choice C.",
    hint: "Complete each row and column with 1, 2, and 3 exactly once, then read the two grey cells.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-15.png",
    imageAlt: "Original 2016 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "3",
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
    prompt: "Hannes has a game board with 11 spaces. He places one coin each on eight spaces that lie next to each other. He can choose on which space to place his first coin. No matter where Hannes starts some spaces will definitely be filled. How many spaces will definitely be filled?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6 - 5 Points Questions -"
    ],
    answer: 3,
    explanation: "The common intersection of those blocks is spaces 4–8, so five spaces are guaranteed, choice D.",
    hint: "The eight coins occupy a consecutive block of eight spaces; list all four possible starting positions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-16.png",
    imageAlt: "Original 2016 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "2",
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
        text: "6 - 5 Points Questions -",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "A card has a diagram printed on one side and the other side is plain white. The card is first flipped over to the left and then upwards (see diagram). Which picture do you get this way?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The resulting orientation is option A.",
    hint: "Track the card's diagram through the left flip and then the upward flip, remembering that the second flip acts on the already mirrored image.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-17-extra.png",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Tick, Trick and Track are triplets. Their brother Franz is exactly 3 years older. All four children are having their birthdays today. How old can the four brothers be altogether?",
    options: [
      "25",
      "27",
      "29",
      "30",
      "60"
    ],
    answer: 1,
    explanation: "3x + (x + 3) = 27 is possible, so the total 27 is choice B.",
    hint: "Let each triplet be x years old; Franz is x + 3.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "27",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "29",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "In a magic garden there are magic trees. On each tree there are either 6 pears and 3 apples or 8 pears and 4 apples. In total there are 25 apples on the magic trees. How many pears in total are hanging on the magic trees altogether?",
    options: [
      "35",
      "40",
      "45",
      "50",
      "56"
    ],
    answer: 3,
    explanation: "The only solution is a = 3 and b = 4, giving 6a + 8b = 50 pears, choice D.",
    hint: "Use 3a + 4b = 25 for the numbers of the two tree types, then replace apples by pears.",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "35",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "45",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "50",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "56",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Lisa’s dogs have 18 more legs than noses. How many dogs does Lisa have?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "18 ÷ 3 = 6 dogs, so choice C.",
    hint: "Each dog contributes four legs but only one nose, a difference of three.",
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Karin wants to place five bowls on a table so that they are ordered according to their weight. She has already placed the bowls Q, R, S and T in order, where Q is lightest and T is heaviest. Where does she have to place bowl Z?",
    options: [
      "to the left of bowl Q",
      "between bowls Q and R",
      "between bowls R and S",
      "between bowls S and T",
      "to the right of bowl T"
    ],
    answer: 1,
    explanation: "The diagram's comparison places Z between Q and R, choice B.",
    hint: "Because Q<R<S<T, insert Z by comparing its weight with the four already ordered bowls.",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "to the left of bowl Q",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "between bowls Q and R",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "between bowls R and S",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "between bowls S and T",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "to the right of bowl T",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "Eva writes seven numbers on a piece of paper, one of which is 201. She adds up these seven numbers and gets 2016. Now she substitutes the 201 by the number 102 and again adds up the seven numbers. Which result does she get now?",
    options: [
      "1815",
      "1914",
      "1917",
      "2115",
      "2118"
    ],
    answer: 2,
    explanation: "2016 − 201 + 102 = 1917, choice C.",
    hint: "Only the one number changes; subtract the old value 201 and add the new value 102 to the original total.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1815",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "1914",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "1917",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "2115",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "2118",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Leo has built a stick made up of 27 building blocks.\nHe splits the stick into two pieces in a way so that one part is twice as long as the other. He keeps repeating this again and again. He takes one of the two pieces and splits it up so that one piece is twice as long as the other. \nWhich of the following pieces can never result in this way?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The piece shown in option E never appears in that binary splitting process.",
    hint: "Every split replaces a length by two pieces in a 1:2 ratio; list the lengths obtainable from 27 by repeated splits.",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-a.png"
      },
      {
        id: "23-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-b.png"
      },
      {
        id: "23-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-c.png"
      },
      {
        id: "23-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-d.png"
      },
      {
        id: "23-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-23-option-e.png"
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Five sparrows on a rope look in one or the other direction (see diagram). Every sparrow whistles as many times as the number of sparrows he can see in front of him. Azra therefore whistles four times. Then one sparrow turns in the opposite direction and again all sparrows whistle according to the same rule. The second time the sparrows whistle more often in total than the first time. Which sparrow has turned around?",
    options: [
      "Azra",
      "Bernhard",
      "Christa",
      "David",
      "Elsa"
    ],
    answer: 1,
    explanation: "Only Bernhard's turn makes the second total larger, so choice B.",
    hint: "Calculate every sparrow's first whistle total, then flip one direction at a time and recompute the total.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2016/questions/editor-q-24-extra.png",
    imageChoices: true,
    imageAlt: "Original 2016 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "Azra",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "Bernhard",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "Christa",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "David",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "Elsa",
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

export const edition2016Ecolier: QuestionSet = {
  id: "ecolier-2016",
  year: 2016,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 17, 2016",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Ecolier.pdf",
  questions: questions2016Ecolier,
  sections: sections,
};
