import type { Question, QuestionSet, Section } from "../../../types";

const questions2011Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Bernd wants to paint the word KANGAROO. He begins on a Wednesday and paints one letter each day. On which day will he paint the last letter?",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    answer: 2,
    explanation: "KANGAROO has eight letters. The eighth day is seven days after the first, so it is Wednesday again.",
    hint: "The first letter is painted on Wednesday. Count how many days later the eighth letter is painted.",
    sourcePage: 2,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "Monday",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "Tuesday",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "Wednesday",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "Thursday",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Friday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "A motorcycle driver covers 28 km in 30 minutes. What was his average speed in km/h?",
    options: [
      "28",
      "36",
      "56",
      "58",
      "62"
    ],
    answer: 2,
    explanation: "Thirty minutes is half an hour, so the hourly distance is 28 × 2 = 56 km.",
    hint: "Double the distance to find how far the motorcycle would travel in one hour at the same speed.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "36",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "56",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "58",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "62",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A square piece of paper is cut in a straight line into two pieces. Which of the following shapes cannot be created?",
    options: [
      "A square",
      "A rectangle",
      "A right-angled triangle",
      "A pentagon",
      "An equilateral triangle"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the answer key indicates A, but an equilateral triangle also appears impossible from a single straight cut; verify the source wording and intended interpretation.",
    hint: "Consider where a single straight cut can meet the square's boundary, and which corners remain on each piece.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "A square",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "A rectangle",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "A right-angled triangle",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "A pentagon",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "An equilateral triangle",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "In Crazytown, houses on the right side of the street have odd numbers, and no house number contains the digit 3. The first house on that side is number 1. What number is on the fifteenth house?",
    options: [
      "29",
      "41",
      "43",
      "45",
      "47"
    ],
    answer: 4,
    explanation: "The first 12 valid house numbers are 1, 5, 7, 9, 11, 15, 17, 19, 21, 25, 27 and 29. The next three are 41, 45 and 47, so the fifteenth is 47.",
    hint: "Write the odd numbers in order, skipping every number that contains a 3, and count valid houses rather than labels.",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "29",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "41",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "43",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "45",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "47",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Which of the following pieces is needed to complete the cuboid?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-05-diagram.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-05-choices.png",
    imageChoices: true,
    imageAlt: "Cuboid and five possible missing pieces",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: verify that the combined choices preserve the source order and that E completes the cuboid.",
    hint: "Compare the exposed faces of the cuboid with each piece, including which faces would touch after insertion.",
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
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "One thousand litres of water flows through the system shown into two identical tanks. At each junction, the water divides into two equal amounts. How many litres end up in Tank Y?",
    options: [
      "800",
      "750",
      "666.67",
      "660",
      "500"
    ],
    answer: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-06-diagram.png",
    imageAlt: "Pipe network directing water into two tanks",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the flow splits depend on the exact junctions in the diagram; the answer key indicates B.",
    hint: "At each junction, halve the amount arriving there, then add the flows that reach Tank Y.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "800",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "750",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "666.67",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "660",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "500",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "The date 01-03-05 (1 March 2005) has three consecutive odd numbers. This is the first day in the 21st century with this property. How many days with this property are there in total in the 21st century?",
    options: [
      "5",
      "6",
      "16",
      "13",
      "8"
    ],
    answer: 0,
    explanation: "The day, month, and year must be three consecutive odd numbers. The month can be 3, 5, 7, 9, or 11, giving the dates 01-03-05, 03-05-07, 05-07-09, 07-09-11, and 09-11-13: 5 dates, answer A.",
    hint: "List valid odd day, month, and year endings in chronological order, remembering that the date components must be consecutive odd numbers.",
    sourcePage: 2,
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
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Andrew writes the letters from the word KANGAROO in the fields of a table. He can begin where he wants and then must write each consecutive letter in a field that shares at least one point with the previous field. Which of the following tables could Andrew not produce? \n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the five table choices are visual and have not yet been mapped to individual assets.",
    hint: "For each table, follow the letters in order and check whether each consecutive pair touches by a side or a corner.",
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
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-08-extra.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "A shape is made by fitting together four pieces of card without overlaps. Which of the following shapes is not possible?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the five visual answer choices have not yet been verified or attached.",
    hint: "Compare the edges and angles available from the four pieces with each proposed outline.",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-09.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-09-extra.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "When Liza the cat is lazy, she drinks 60 ml of milk a day. When she chases mice, she drinks one third more. In the past two weeks she chased mice every second day. How much milk did she drink?",
    options: [
      "840 ml",
      "980 ml",
      "1050 ml",
      "1120 ml",
      "1960 ml"
    ],
    answer: 1,
    explanation: "She chased mice on 7 days and drank 80 ml on each; on the other 7 days she drank 60 ml. The total is 7 × 80 + 7 × 60 = 980 ml.",
    hint: "Separate the 14 days into chasing days and lazy days, then find the amount for each kind of day.",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "840 ml",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "980 ml",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "1050 ml",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "1120 ml",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "1960 ml",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Fridolin the hamster runs through the maze shown. There are 16 pumpkin seeds on the path, and he may cross each junction only once. What is the maximum number of seeds he can collect?",
    options: [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    answer: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-11.png",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the maximum route must be checked against the maze's junctions and seed locations.",
    hint: "Treat each junction as usable only once and compare routes that leave the fewest seeds unreachable.",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "All four-digit numbers made from the digits 0, 1, 1 and 2 are written in ascending order. What is the difference between the two numbers next to 2011 in the list?",
    options: [
      "890",
      "891",
      "900",
      "909",
      "990"
    ],
    answer: 1,
    explanation: "The valid numbers immediately before and after 2011 are 1210 and 2101. Their difference is 2101 - 1210 = 891.",
    hint: "List the valid permutations immediately below and above 2011; a four-digit number cannot begin with zero.",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "890",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "891",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "900",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "909",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "990",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Nina made a wall around a square area using 36 identical cubes. A section of the wall is shown. How many cubes are needed to completely fill the square area?",
    options: [
      "36",
      "49",
      "64",
      "81",
      "100"
    ],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-13-diagram.png",
    imageAlt: "Section of a cube wall surrounding a square area",
    imageClass: "source-pdf-visual",
    explanation: "A one-cube-thick square wall with 36 cubes has 4n − 4 = 36 cubes around its perimeter, so n = 10 cubes along the outside. The unfilled inside is 8 by 8, which takes 8 × 8 = 64 cubes: C.",
    hint: "Use the visible wall section to determine the square's side length, then square that length.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "36",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "49",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "64",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "81",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "100",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Black and white tiles cover square floors. The examples have 4 and 9 black tiles; each corner has a black tile, and every black tile touches only white tiles. How many white tiles are on a floor with 25 black tiles?",
    options: [
      "25",
      "39",
      "45",
      "56",
      "72"
    ],
    answer: 3,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-14-diagram.png",
    imageAlt: "Square tile floors showing the black-tile pattern",
    imageClass: "source-pdf-visual",
    explanation: "The examples show that n² black tiles form a floor of (2n − 1)² tiles, with white tiles between and around them. For 25 black tiles, the floor is 9 × 9, so 81 − 25 = 56 tiles are white: D.",
    hint: "Relate the number of black tiles to the floor's side length, then count the white tiles between and around them.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "39",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "45",
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
        text: "72",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Paul meant to multiply a whole number by 301, but forgot the zero and multiplied by 31 instead. His answer was 372. What should the correct answer have been?",
    options: [
      "3010",
      "3612",
      "3702",
      "3720",
      "30720"
    ],
    answer: 1,
    explanation: "The whole number was 372 ÷ 31 = 12. Multiplying by 301 gives 12 × 301 = 3612.",
    hint: "First recover the whole number from Paul's incorrect multiplication, then multiply it by 301.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "3010",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "3612",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "3702",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "3720",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "30720",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "FC Barcelona scored 3 goals and conceded 1 goal across a tournament in which it won one game, lost one game and drew one game. What was the score in the game Barcelona won?",
    options: [
      "2:0",
      "3:0",
      "1:0",
      "4:1",
      "0:1"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the total score alone allows multiple game-score combinations; verify the intended conditions and answer key.",
    hint: "Write the goals scored and conceded in the win, loss and draw, then use the tournament totals.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "2:0",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "3:0",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "1:0",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "4:1",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "0:1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Given the three corner points of a triangle, how many places can a fourth point be placed to make the four corners of a parallelogram?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "That depends on the triangle"
    ],
    answer: 2,
    explanation: "Any one of the three given points can be the corner opposite the missing point, giving three possible parallelograms.",
    hint: "Draw a parallelogram using each of the three given points in turn as the corner opposite the new point.",
    sourcePage: 4,
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
        text: "That depends on the triangle",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "The 8 corners of the shape are labelled with 1, 2, 3 or 4 so that the numbers at the ends of every shown line differ. How many times does 4 appear?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the shape's edges and corner connections are required to determine the count.",
    hint: "Use the restriction on every connecting line to determine which corners can share a number.",
    sourcePage: 4,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "Daniel wants to make a complete square using only pieces like those shown. What is the minimum number of pieces he must use?",
    options: [
      "9",
      "10",
      "12",
      "16",
      "20"
    ],
    answer: 4,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-19-diagram.png",
    imageAlt: "Piece shapes used to form a square",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: confirm the exact piece shape and square arrangement from the source figure before accepting E.",
    hint: "Compare the area of one piece with the area of the smallest possible square made from whole pieces.",
    sourcePage: 4,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "There are 10 children at a judo club and the teacher has 80 sweets. If he gives each girl the same number of sweets, 3 are left over. How many boys are at the club?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    answer: 2,
    explanation: "The girls receive 77 sweets in equal shares. Of the possible numbers of girls among 10 children, 7 divides 77, so there are 7 girls and 3 boys.",
    hint: "The number of girls must divide 80 - 3 = 77 and cannot exceed 10.",
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Seven kittens have the colours white, black, ginger, black-white, ginger-white, ginger-black and ginger-black-white. In how many ways can you choose 4 kittens so that every pair shares a colour?",
    options: [
      "1",
      "3",
      "4",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "If a chosen group contains a single-colour kitten, all three others must share that colour, giving one group for each of white, black, and ginger. If none is single-colour, the only four that are pairwise compatible are black-white, ginger-white, ginger-black, and ginger-black-white. There are 4 groups in total: C.",
    hint: "Represent each kitten by the set of colours it has, then require every pair of chosen sets to intersect.",
    sourcePage: 4,
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "The picture shows a rectangle with four identical triangles. What is the total area of the triangles?",
    options: [
      "46 cm²",
      "52 cm²",
      "54 cm²",
      "56 cm²",
      "64 cm²"
    ],
    answer: 3,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-22-diagram.png",
    imageAlt: "Rectangle divided into four identical triangles",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: verify the labelled dimensions and the triangle regions in the source diagram before confirming D.",
    hint: "Use the rectangle's dimensions to find its area, then subtract any unshaded regions outside the four triangles.",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "46 cm²",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "52 cm²",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "54 cm²",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "56 cm²",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "64 cm²",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Lina has already placed two shapes on a square board. Which of the five shapes can she add so that none of the other four shapes will fit?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-a.png",
      "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-b.png",
      "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-c.png",
      "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-d.png",
      "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-e.png"
    ],
    imageAlt: "Square board, two placed shapes and five candidate pieces",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: confirm the board and all five options against the original before accepting D.",
    hint: "Try each candidate on the board, then test whether every remaining shape can still fit in some orientation.",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-5-6/benjamin/2011/questions/q-23-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Numbers are to be built using only the digits 1, 2, 3, 4 and 5 in such a way that each digit is only used once in each number. How many of these numbers will have the following property; The first digit is divisible by one, The first 2 digits make a number which is divisible by 2, the first 3 digits make a number which is divisible by three, the first 4 digits make a number which is divisible by 4 and all 5 digits make a number which is divisible by 5. ",
    options: [
      "It is not possible",
      "1",
      "2",
      "5",
      "10"
    ],
    answer: 0,
    explanation: "The fifth digit must be 5. The last two digits of the first four must form 12, 24, or 32 to be divisible by 4. For 12, the first three digits sum to 8; for 24, the two-digit prefix uses 1 and 3, so it is odd; for 32, the first three digits again sum to 8. Each case breaks a required divisibility rule, so no number works: A.",
    hint: "Use the divisibility rules in order: the second digit must be even, and the final digit must be 5.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "It is not possible",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2011Benjamin: Section[] = [
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

export const edition2011Benjamin: QuestionSet = {
  id: "benjamin-2011",
  year: 2011,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 17, 2011",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2011/2011_Benjamin.pdf",
  questions: questions2011Benjamin,
  sections: sections2011Benjamin,
};
