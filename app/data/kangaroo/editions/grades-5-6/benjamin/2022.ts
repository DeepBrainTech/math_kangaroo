import type { Question, QuestionSet, Section } from "../../../types";

const questions2022Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Six points are numbered as shown. One triangle joins the even-numbered points and another joins the odd-numbered points. What shape results?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the numbered points and triangle outlines are shown in the source diagram.",
    hint: "Connect the even points in order, then do the same for the odd points and compare the overlapping shape.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-01.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-01-extra.png",
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
    prompt: "Eva paddles around five buoys. Which buoys does she paddle around in an anticlockwise direction?",
    options: [
      "1 and 4",
      "2, 3 and 5",
      "2 and 3",
      "1, 4 and 5",
      "1 and 3"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the route around the five buoys is shown in the source diagram.",
    hint: "Follow Eva's route and note the direction in which she circles each buoy.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1 and 4",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2, 3 and 5",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "2 and 3",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "1, 4 and 5",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "1 and 3",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Two-sided mirrors reflect laser beams as shown. At which letter does the beam leave the picture?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the mirror angles and laser path are visual.",
    hint: "At each mirror, reflect the beam so that its angle of incidence equals its angle of reflection.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "In the 13th century, monks used special signs or combinations of two signs to write numbers from 1 to 99. What did the number 45 look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the historical number symbols and five choices are visual.",
    hint: "Express 45 using the values assigned to the two signs, then match that combination.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-04.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-04-extra.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Marbles are sold in packages of 5, 10 or 25. Tom buys exactly 95 marbles. What is the minimum number of packages?",
    options: [
      "4",
      "5",
      "7",
      "8",
      "10"
    ],
    answer: 1,
    explanation: "Three packages of 25 and two packages of 10 make 95 marbles in five packages. Four packages would total 100 if all were 25s; replacing any 25-package with a 10- or 5-package lowers the total by 15 or 20, so four packages cannot total 95.",
    hint: "Try the largest packages first, and check whether one fewer package could reach 95 exactly.",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Vehicles in the garage can move only forwards or backwards. What is the minimum number of grey vehicles that must move so the black car can leave?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the car positions and garage layout are visual.",
    hint: "Identify the vehicles blocking the black car's exit and determine which ones must move to clear a path.",
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Bodil lays seven cards next to each other to make the smallest possible 12-digit number. What are the last three digits?",
    options: [
      "14",
      "21",
      "28",
      "35",
      "42"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the printed key indicates A, but the stated counts give 9 × 4 = 36 leaves on flowering branches and 84 ÷ 7 = 12 other branches, for 21 in total (B). Verify the source version.",
    hint: "Subtract the leaves on the flowering branches, divide the remainder by seven, and add the flowering branches.",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "42",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "How much does this Ferris wheel need to turn so that a white gondola is on top for the first time?",
    options: [
      "699",
      "113",
      "551",
      "967",
      "459"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the seven cards are shown as visual number pieces.",
    hint: "Arrange the cards to make the smallest possible number, then read the final three digits.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "699",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "113",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "551",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "967",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "459",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-08.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-08-extra.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "The sides of square ABCD are 10 cm. What is the total area of the shaded part?",
    options: [
      "40 cm²",
      "45 cm²",
      "50 cm²",
      "55 cm²",
      "60 cm²"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the shaded regions and their boundaries are shown in the source diagram.",
    hint: "Divide the square into equal or complementary regions and compare the shaded parts with its 100 cm² total area.",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "40 cm²",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "45 cm²",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "50 cm²",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "55 cm²",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "60 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "Five big and four small elephants march along a narrow path without changing order. At a fork, each goes either left or right. Which situation cannot happen?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five proposed left/right arrangements are visual.",
    hint: "Check whether the original order can be preserved when the two groups split at the fork.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-10.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-10-extra.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Marc builds the number 2022 from 66 identical cubes, then paints the entire surface. On how many cubes are exactly four faces painted?",
    options: [
      "16",
      "30",
      "46",
      "54",
      "60"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the 2022-shaped arrangement of cubes is shown in the source picture.",
    hint: "Count the exposed faces for cubes in each position of the digit sculpture.",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "30",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "46",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "54",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "A 4 m × 2 m × 1 m box-shaped tank contains water to a height of 25 cm. The tank is turned on its side. How high is the water now?",
    options: [
      "25 cm",
      "50 cm",
      "75 cm",
      "1 m",
      "1.25 m"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the pictured orientation determines the new base area; the answer key indicates 1 m.",
    hint: "Keep the water volume constant and divide it by the area of the new bottom face.",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "25 cm",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "50 cm",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "75 cm",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "1 m",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "1.25 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "A transparent square foil has artwork on it and is folded over twice as shown. What does the foil look like after both folds?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the original artwork, fold lines and answer choices are visual.",
    hint: "Reflect the artwork across the first fold, then reflect the result across the second fold.",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-13.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-13-extra.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "The year 2022 has three equal digits. This is the third time tortoise Eva has experienced a year in which the same digit appears three times. What is the minimum age Eva can be?",
    options: [
      "20",
      "22",
      "23",
      "56",
      "134"
    ],
    answer: 2,
    explanation: "The previous such years can be 1999 and 2000; if Eva was born in 1999, she is 23 in 2022.",
    hint: "Find the latest possible birth year that still lets 1999 and 2000 be the first two such years she experienced.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "22",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "23",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "56",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "134",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Four circles are connected in chains of four. The numbers 1, 2, 3 and 4 appear in every row, column and chain. What number is in the circle with the question mark?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "It cannot be determined"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the circle layout, chains and given values are visual.",
    hint: "Apply the no-repeat rule in each row, column and chain to narrow the question-mark circle's value.",
    sourcePage: 3,
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
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Lisa has four dogs of different whole-number weights totalling 60 kg. The second-heaviest weighs 28 kg. How heavy is the third-heaviest?",
    options: [
      "2 kg",
      "3 kg",
      "4 kg",
      "5 kg",
      "6 kg"
    ],
    answer: 0,
    explanation: "The heaviest dog weighs at least 29 kg, and the two lightest are distinct positive integers below 28. The remaining total is at most 60 - 29 - 28 = 3, forcing the third-heaviest to weigh 2 kg.",
    hint: "Subtract the two heaviest weights from 60 and use the fact that all four whole-number weights differ.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "2 kg",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "3 kg",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "4 kg",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "5 kg",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "6 kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "A stack of eight identical glasses is 42 cm high, and a stack of two is 18 cm high. How high is a stack of six?",
    options: [
      "22 cm",
      "24 cm",
      "28 cm",
      "34 cm",
      "40 cm"
    ],
    answer: 3,
    explanation: "Six extra glasses increase the stack height by 42 - 18 = 24 cm, or 4 cm per added glass. A six-glass stack is 18 + 4 × 4 = 34 cm.",
    hint: "The height difference between the two stacks comes from six additional glasses; use that to find the increase per glass.",
    sourcePage: 4,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "22 cm",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "24 cm",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "28 cm",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "34 cm",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "40 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Villages A, B, C and D lie in order, 10 km apart, and have 10, 20, 30 and 40 children. Where should a school be built to minimize the sum of the children's bus distances?",
    options: [
      "A",
      "B",
      "Between B and C",
      "C",
      "D"
    ],
    answer: 3,
    explanation: "The weighted median location is C: at least half the children are at or to its left, and at least half are at or to its right.",
    hint: "For total travel distance on a line, find a weighted median of the village populations.",
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
        text: "Between B and C",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "C",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "D",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Anna glues cubes into the pictured solid. Which of the five pictures shows a different view of the solid?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the solid and five candidate views are visual.",
    hint: "Compare the number and arrangement of visible cube faces in each view, allowing rotations of the solid.",
    sourcePage: 4,
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-19.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-19-extra.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Werner fills empty squares with four distinct numbers from 2, 3, 4, 5 and 6 so the calculation is correct. How many of the five numbers can go in the grey square?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the calculation and position of the grey square are shown in the source diagram.",
    hint: "Test each candidate number in the grey square and see whether the remaining four numbers can make the calculation true.",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "A building of unit cubes is shown from above, from the front and from the right. What is the maximum number of cubes used?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the three projections are needed to find the maximum compatible stack heights.",
    hint: "For each footprint position, use the three views to determine the largest possible stack height.",
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "Each animal represents a different positive integer. The sums of the two numbers in each column are shown. What is the maximum sum of the four numbers in the top row?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the animal equations and column totals are visual.",
    hint: "Translate each column into a sum equation and maximize the four distinct positive values on top.",
    sourcePage: 5,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Thirty people sit around a table. People without hats tell the truth; hat-wearers may lie or tell the truth. Everyone says at least one neighbour wears a hat. What is the greatest number without hats?",
    options: [
      "5",
      "10",
      "15",
      "20",
      "25"
    ],
    answer: 3,
    explanation: "No three consecutive people can be hatless, because the middle one would have two hatless neighbours. Ten hat-wearers can separate ten pairs of hatless people around the circle, giving a maximum of 20.",
    hint: "Every truthful person without a hat needs a hat-wearing neighbour, so no two uncovered positions can be adjacent.",
    sourcePage: 5,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "25",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Kai places 3, 4, 5, 6 and 7 in five circles so the product at each triangle's vertices equals the number inside it. What is the sum of the vertices of the triangle marked 168?",
    options: [
      "12",
      "14",
      "15",
      "17",
      "18"
    ],
    answer: 3,
    explanation: "Among 3, 4, 5, 6 and 7, the only three numbers whose product is 168 are 4, 6 and 7, since 4 × 6 × 7 = 168. Their sum is 17.",
    hint: "Test triples from the five numbers until their product is 168; then add the three numbers.",
    sourcePage: 5,
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
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2022/questions/editor-q-24.png"
  }
];

const sections2022Benjamin: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 9–16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 17–24",
    accent: "purple"
  }
];

export const edition2022Benjamin: QuestionSet = {
  id: "benjamin-2022",
  year: 2022,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 17, 2022",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2022/2022_Benjamin.pdf",
  questions: questions2022Benjamin,
  sections: sections2022Benjamin,
};
