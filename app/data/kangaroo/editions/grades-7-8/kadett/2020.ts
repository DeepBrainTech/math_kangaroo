import type { Question, QuestionSet, Section } from "../../../types";

const questions2020Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which result of the additions is not a prime number?",
    options: [
      "2+11",
      "4+7",
      "6+11",
      "3+4",
      "5+7"
    ],
    answer: 4,
    explanation: "The sums are 13, 11, 17, 7 and 12. Only 12 is not prime.",
    hint: "Evaluate the sums and test whether each has a divisor other than 1 and itself.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2+11",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "4+7",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "6+11",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "3+4",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "5+7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Using 1, 2, 3 and 4, how many different fraction values less than 1 can be formed, beyond the example 1/3?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    answer: 1,
    explanation: "The distinct proper fractions are 1/2, 1/3, 1/4, 2/3, and 3/4; 2/4 is just another way to write 1/2. Excluding the given example 1/3 leaves four values.",
    hint: "List the proper fractions from these numerators and denominators, then simplify them to remove duplicate values.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Miguel solves 3 problems per day. Eight days later Daniel begins solving 5 per day. When do they tie in total problems solved, and how many has each solved?",
    options: [
      "12",
      "20",
      "60",
      "80",
      "120"
    ],
    answer: 2,
    explanation: "If Daniel works for t days, Miguel has worked t+8 days. Set 3(t+8)=5t to get t=12; each has then solved 60 problems. The answer is 60, choice C.",
    hint: "Compare Miguel's total after t+8 days with Daniel's total after t days.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "60",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "80",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "120",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "A square is divided into four equal squares containing smaller coloured squares and triangles as shown. What fraction of the original square is coloured?",
    options: [
      "1/3",
      "1/2",
      "4/9",
      "5/8",
      "3/4"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the coloured regions and subdivisions are visual.",
    hint: "Add the areas of the coloured squares and triangles, using the repeated equal partitions.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-04.png",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "1/3",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "1/2",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "4/9",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "5/8",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "3/4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Three football teams each play the other once. A win earns 4 points, a loss loses 1, and a draw gives each team 2. What is the largest possible total score across all teams?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 4,
    explanation: "A decisive match contributes 4−1=3 total points, while a draw contributes 4. Three draws give 12, the maximum.",
    hint: "Compare the total points awarded for a draw with those for a decisive result.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "A figure of side 1 uses six equal triangles and 12 matchsticks. How many matchsticks are needed for the pictured figure of side 2?",
    options: [
      "18",
      "24",
      "32",
      "36",
      "48"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the larger triangular-grid pattern is visual.",
    hint: "Count the unit edges on the larger figure, including shared internal boundaries only once.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "32",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "36",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Carlos chooses three numbers from 5, 3, 1, 0, 2 and 7 and squares their sum. What is the smallest result?",
    options: [
      "0",
      "1",
      "4",
      "9",
      "16"
    ],
    answer: 1,
    explanation: "The closest achievable sum to zero is 1, using 0, 1 and a? NEEDS_REVIEW: the intended choice may allow selecting any three numbers; verify the minimum sum.",
    hint: "Find the three-number sum with the smallest absolute value, then square it.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "On the trip from home to school, Julia walks half the way and rides the bus for half. Walking the whole way takes 45 minutes longer than using only the bus. How much less time does the bus-only trip take?",
    options: [
      "25 min",
      "45 min",
      "1 h",
      "1.5 h",
      "2 h"
    ],
    answer: 1,
    explanation: "The question states that walking the entire route takes 45 minutes longer than taking the bus for the entire route. Thus the bus-only trip takes 45 minutes less, choice B.",
    hint: "Compare the two full-route travel times; the difference is given directly.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "25 min",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "45 min",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "1 h",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "1.5 h",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "2 h",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "Positive integers fill a 3×3 board so every row and column has the same sum. The only remembered fact is that no three numbers repeat. What is in the centre?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the board's given numbers are omitted from the extracted text.",
    hint: "Use the equal row and column sums together with the displayed entries to constrain the centre.",
    sourcePage: 1,
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
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "A square and an equilateral triangle form the pictured figure. Which equality among angles a, b, c, d and e is true?",
    options: [
      "a=d",
      "b+c=d",
      "a+c=d+e",
      "a+b=d+e",
      "e+d=a"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the angle labels and figure are visual.",
    hint: "Use the right angles of the square and 60° angles of the equilateral triangle.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "a=d",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "b+c=d",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "a+c=d+e",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "a+b=d+e",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "e+d=a",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Charles sees a road sign when leaving for Caecá and another on the return. At that point, how far is it to his city?",
    options: [
      "12 km",
      "21 km",
      "29 km",
      "41 km",
      "52 km"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the two road signs are shown in the source picture.",
    hint: "Compare the distances shown on the outbound and return signs.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "12 km",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "21 km",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "29 km",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "41 km",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "52 km",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Ana plans to walk an average of 5 km per day in March. In the first 10 days she averages 4.4 km/day, and in the next 6 days 3.5 km/day. What average must she walk on the remaining days?",
    options: [
      "5.4",
      "5.8",
      "6",
      "6.6",
      "7"
    ],
    answer: 1,
    explanation: "The target total is 31×5=155 km. She has walked 44+21=65 km, leaving 90 km over 15 days, or 6 km/day; key B conflicts, NEEDS_REVIEW.",
    hint: "Subtract the distance already walked from the 31-day target, then divide by the remaining days.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "5.4",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "5.8",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "6.6",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Which picture shows the object when viewed from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the 3D object and five top views are visual.",
    hint: "Project the object's footprint onto the horizontal plane.",
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
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-13.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-13-extra.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "A class has 3/8 swimmers and the rest are dancers; five students do both. What is the minimum class size?",
    options: [
      "16",
      "24",
      "32",
      "40",
      "48"
    ],
    answer: 0,
    explanation: "The class size must be a multiple of 8 so that 3/8 of it is a whole number, and it must have at least 5 swimmers for 5 students to be in both groups. The smallest multiple of 8 meeting that condition is 16; it has 6 swimmers, enough for the overlap of 5.",
    hint: "The number of swimmers is 3/8 of the class, so it must be a whole number and at least five.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "32",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "40",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A 12 m square garden has three equal-area lawns; the central one is a parallelogram as shown. Its shorter diagonal is parallel to two sides of the square. What is that diagonal's length?",
    options: [
      "7.2",
      "7.6",
      "8.0",
      "8.4",
      "8.8"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the lawn boundaries and parallelogram geometry are visual.",
    hint: "Use the equal-area condition for the three lawns and the 12 m square dimensions.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "7.2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "7.6",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "8.0",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "8.4",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "8.8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Andrew has 27 cubes, each with three adjacent red faces and three faces of another colour. He builds a larger cube. What is the maximum number of completely red faces on the large cube?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the orientations of the small cubes and meaning of a completely red large face require visual checking.",
    hint: "For each large face to be red, every small cube on it must be oriented with a red face outward.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "A square of area 81 is made from four congruent rectangles and a central square. The square formed by the rectangle diagonals has area 64. What is the central square's area?",
    options: [
      "25",
      "27",
      "36",
      "47",
      "49"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the diagonal square's placement and relation to the central square are shown in the diagram.",
    hint: "Use the areas of the outer square and the diagonal square to constrain the rectangle dimensions.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "27",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "36",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "47",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "49",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "A store raises prices by 20%, then advertises a 30% discount. What is the actual discount from the original price?",
    options: [
      "10%",
      "12%",
      "15%",
      "16%",
      "20%"
    ],
    answer: 2,
    explanation: "The final price is 1.2×0.7=0.84 of the original, an actual discount of 16%; key C (15%) conflicts, NEEDS_REVIEW.",
    hint: "Apply the two percentage changes multiplicatively to an initial price of 100.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "10%",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "12%",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "15%",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "16%",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "20%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Irene builds a cube structure. Top and side views are shown, but the side view may be from either side. What is the fewest cubes she could have used?",
    options: [
      "10",
      "12",
      "13",
      "14",
      "15"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the two projections are visual and determine the minimum stack heights.",
    hint: "Combine the top footprint with both possible orientations of the side view and minimize each stack.",
    sourcePage: 2,
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
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "A five-cell paper strip has different drawings in its cells and is folded into five layers. Which top-to-bottom layer sequence is impossible?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the strip pattern, folds and five layer sequences are visual.",
    hint: "Track the order of cells as each fold reverses part of the strip.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-20.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Four children sit at the corners of a 10 m by 25 m swimming pool. The instructor is near the middle of one edge. Each child chooses the longer route along the pool edge to reach the instructor. What is the sum of their distances?",
    options: [
      "90 m",
      "120 m",
      "140 m",
      "160 m",
      "210 m"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the instructor's position and route directions depend on the source diagram.",
    hint: "For each corner, compare the two perimeter routes to the instructor and take the longer one.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "90 m",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "120 m",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "140 m",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "160 m",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "210 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Twelve coloured cubes are lined up: 3 blue, 2 yellow, 3 red and 4 green. A red cube is at one end, a yellow one at the other; each colour group is together; the tenth cube from the left is blue. How many orders are possible?",
    options: [
      "2",
      "3",
      "6",
      "9",
      "12"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: enumerate contiguous colour blocks satisfying the fixed ends and tenth-position clue to verify the count.",
    hint: "Treat each colour run as a block, then apply the end and position constraints.",
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
        text: "6",
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
    prompt: "A 52 cm² supply of unit-area isosceles triangles is used to make a square. What is the largest possible square area?",
    options: [
      "32 cm²",
      "36 cm²",
      "42 cm²",
      "50 cm²",
      "52 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the allowed triangle shape/orientation determines which square areas can be assembled.",
    hint: "A square's area must be compatible with the triangle pieces and cannot exceed 52 cm².",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "32 cm²",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "36 cm²",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "42 cm²",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "50 cm²",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "52 cm²",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "N is the smallest positive number for which N/2 is divisible by 2, N/3 by 3, N/4 by 4, N/5 by 5, N/6 by 6, N/8 by 8 and N/9 by 9. How many digits does √N have?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 0,
    explanation: "These conditions require N to be divisible by 4, 9, 16, 25, 36, 64 and 81. Their least common multiple determines N; NEEDS_REVIEW to confirm the digit length of its square root.",
    hint: "Compute the least common multiple of 2·2, 3·3, 4·4, 5·5, 6·6, 8·8 and 9·9.",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A car display at 21:00 shows 116.0 km travelled. Continuing at 90 km/h, later the four-digit distance sequence matches the time sequence. When?",
    options: [
      "21:30",
      "21:50",
      "22:00",
      "22:10",
      "22:30"
    ],
    answer: 3,
    explanation: "At 22:10, 70 minutes after 21:00, the car has travelled an additional 90×70/60=105 km. The display reads 221.0 km, whose four digits, 2210, match the time 22:10.",
    hint: "Convert each candidate time to minutes after 21:00, add 1.5 km per minute to 116.0, and compare the four digits.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "21:30",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "21:50",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "22:00",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "22:10",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "22:30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "A bean package has 8% impurities. After removing some, impurities are 4% of the remaining package. What fraction of the original impurities was removed?",
    options: [
      "1/2",
      "25/48",
      "7/12",
      "5/8",
      "25/36"
    ],
    answer: 1,
    explanation: "Take the original package to weigh 100 units, with 8 units of impurities. If x units of impurity are removed, then (8−x)/(100−x)=0.04, so 8−x=4−0.04x and x=25/6. This is (25/6)/8=25/48 of the original impurities, choice B.",
    hint: "Start with 100 units of mixture and let x be the impurity mass removed. The remaining impurity fraction is (8−x)/(100−x).",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "25/48",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "7/12",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "5/8",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "25/36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A unit square is folded twice as shown, bringing two consecutive sides to a diagonal. What is the area of the outlined quadrilateral?",
    options: [
      "7/10",
      "3/5",
      "2/5",
      "1/2",
      "2/1"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the fold pattern and quadrilateral outline are visual.",
    hint: "Track the folded corners and use the areas of the resulting right triangles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "7/10",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "3/5",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "2/5",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "1/2",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "2/1",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "A 2×2×2 block of equal spheres uses 12 glue drops at contact points. How many extra drops are needed to complete a 4×3×2 block?",
    options: [
      "12",
      "24",
      "34",
      "36",
      "44"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: count the face-sharing contacts in the 4×3×2 arrangement and subtract the 12 already used.",
    hint: "Count adjacent pairs along each of the three dimensions of the block.",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "34",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "36",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "44",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "Three consecutive whole numbers are written on the sides of a triangle. At each vertex write the sum of the two meeting side numbers; the product of the three vertex sums is 504. What is the product of the side numbers?",
    options: [
      "24",
      "60",
      "120",
      "210",
      "336"
    ],
    answer: 1,
    explanation: "Let the side numbers be n, n+1 and n+2. The vertex sums are 2n+1, 2n+2 and 2n+3; for n=3 their product is 7×8×9=504. Thus the side numbers are 3, 4 and 5, whose product is 60, choice B.",
    hint: "Write the three pairwise sums in terms of the smallest side number, then test the positive integer values.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "60",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "120",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "210",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "336",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A four-digit code N is constrained by five guesses describing correct digits and positions. What is the hundreds digit of N?",
    options: [
      "0",
      "1",
      "3",
      "5",
      "9"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five code-guess clues are missing from the extracted text.",
    hint: "Apply each clue to eliminate digits and positions systematically.",
    sourcePage: 4,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2020/questions/editor-q-30.png"
  }
];

const sections2020Kadett: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11–20",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 21–30",
    accent: "purple"
  }
];

export const edition2020Kadett: QuestionSet = {
  id: "kadett-2020",
  year: 2020,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Brazil",
  date: "2020 (Second Application)",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2020/2020_Kadett.pdf",
  questions: questions2020Kadett,
  sections: sections2020Kadett,
};
