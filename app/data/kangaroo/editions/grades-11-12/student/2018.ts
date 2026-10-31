import type { Question, QuestionSet, Section } from "../../../types";

const questions2018Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The diagram shows a partly obscured calendar page. On which day of the week does the 27th of that month fall?",
    options: [
      "Monday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the visible calendar dates are essential to identify the weekday.",
    hint: "Use the positions of the unobscured dates to determine the weekday columns.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-01.png",
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
        text: "Wednesday",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "Thursday",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "Saturday",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Sunday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which expression has the greatest value?",
    options: [
      "2-0x1+8",
      "2+0x1x8",
      "2x0+1x8",
      "2x(0+1+8)",
      "2x0+1+8"
    ],
    answer: 3,
    explanation: "The values are 10, 2, 8, 18, and 9; option D is greatest.",
    hint: "Apply multiplication before addition.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "2-0x1+8",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2+0x1x8",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "2x0+1x8",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "2x(0+1+8)",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "2x0+1+8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Renate enters her house from the terrace and walks through every door exactly once. In which room does she end?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the house floor plan and door graph are required to trace the route.",
    hint: "Model rooms as vertices and doors as edges, then follow a trail using every edge once.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Thor has seven stones. Each time he hits one stone with his hammer, it breaks into five small stones. Which number could be the final number of stones?",
    options: [
      "17",
      "20",
      "21",
      "23",
      "25"
    ],
    answer: 3,
    explanation: "Each hit increases the total by 4. Starting at 7, possible totals are 7+4k; 23 corresponds to k=4.",
    hint: "Find the change in the stone count after each hit.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "23",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "25",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "The pictured object is made of 12 glued dice and dipped in paint. How many small dice have exactly four painted faces?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: count exposed faces for each die using the source object's 3D arrangement.",
    hint: "For each small die, count how many of its six faces touch the outside.",
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
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Some aliens are green and all others are purple. Green aliens live only on Mars. Which conclusion follows?",
    options: [
      "All aliens live on Mars",
      "Only green aliens live on Mars",
      "Some purple aliens live on Venus",
      "All purple aliens live on Venus",
      "No green aliens live on Venus"
    ],
    answer: 4,
    explanation: "If every green alien lives only on Mars, none can live on Venus.",
    hint: "Translate 'green aliens live on Mars only' as an implication about where green aliens can live.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "All aliens live on Mars",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Only green aliens live on Mars",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Some purple aliens live on Venus",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "All purple aliens live on Venus",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "No green aliens live on Venus",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Four identical rhombi and two squares fit together to form a regular octagon. What are the obtuse angles of the rhombi?",
    options: [
      "135 degrees",
      "140 degrees",
      "144 degrees",
      "145 degrees",
      "150 degrees"
    ],
    answer: 0,
    explanation: "At a regular octagon vertex the interior angle is 135 degrees; the arrangement makes the rhombus obtuse angle 135 degrees.",
    hint: "Use the 135-degree interior angle of a regular octagon and the square's right angles.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "135 degrees",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "140 degrees",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "144 degrees",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "145 degrees",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "150 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "A box has 65 balls, 8 white and the rest black. Up to 5 balls can be drawn per draw without replacement. What is the minimum number of draws guaranteeing at least one white ball?",
    options: [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    answer: 1,
    explanation: "There are 57 black balls, requiring at most ceiling(57/5)=12 draws to exhaust them.",
    hint: "Consider the worst case in which every ball drawn first is black.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "A brick has three face areas A, B, and C as shown. What is its volume?",
    options: [
      "ABC",
      "sqrt(ABC)",
      "sqrt(AB+BC+CA)",
      "(ABC)^(1/3)",
      "2(A+B+C)"
    ],
    answer: 1,
    explanation: "If its side lengths are x,y,z, then AB C=(xy)(yz)(zx)=(xyz)^2, so the volume is sqrt(ABC).",
    hint: "Multiply the three pairwise face areas and take the square root.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "ABC",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "sqrt(ABC)",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "sqrt(AB+BC+CA)",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "(ABC)^(1/3)",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "2(A+B+C)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "How many ways can 1001 be written as the sum of two prime numbers?",
    options: [
      "No way",
      "One way",
      "Two ways",
      "Three ways",
      "More than three ways"
    ],
    answer: 0,
    explanation: "1001 is odd, so a sum of two primes would need one prime to be 2 and the other 999, which is not prime.",
    hint: "An odd sum of two primes must include the only even prime, 2.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "No way",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "One way",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "Two ways",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "Three ways",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "More than three ways",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Two dice of volumes V and W overlap. 90% of V and 85% of W lie outside their intersection. What is the relationship between V and W?",
    options: [
      "V/W=2/3",
      "V/W=3/2",
      "V/W=85/90",
      "V/W=90/85",
      "V/W=2/5"
    ],
    answer: 1,
    explanation: "The common volume is 10% of V and 15% of W. Equating them gives 0.1V=0.15W, so V/W=3/2.",
    hint: "Express the intersection volume as the fraction of each die not lying outside the overlap.",
    sourcePage: 1,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "V/W=2/3",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "V/W=3/2",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "V/W=85/90",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "V/W=90/85",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "V/W=2/5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Five pictured vases are filled at a constant rate. For which vase does the graph of water height h against time t match the shown graph?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: compare the vase cross-sectional areas with the slope changes in the source graph.",
    hint: "Water height rises faster where the vase's horizontal cross-section is narrower.",
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
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-12.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-12-extra.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Evaluate |sqrt(17)-5|+|sqrt(17)+5|.",
    options: [
      "10",
      "2sqrt(17)",
      "sqrt(34)-10",
      "10-sqrt(34)",
      "0"
    ],
    answer: 0,
    explanation: "Since sqrt(17)<5, the absolute values sum to (5-sqrt(17))+(sqrt(17)+5)=10.",
    hint: "Determine the sign of sqrt(17)-5 before removing the absolute values.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2sqrt(17)",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "sqrt(34)-10",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "10-sqrt(34)",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "0",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "An octahedron is inscribed in a unit cube with vertices at the face centres. What is its volume?",
    options: [
      "1/3",
      "1/4",
      "1/5",
      "1/6",
      "1/8"
    ],
    answer: 3,
    explanation: "The octahedron is the cube minus six corner pyramids, or equivalently has volume 1/6 of the cube.",
    hint: "Decompose the octahedron into two square pyramids with base area 1/2 and height 1/2.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "1/3",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "1/4",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "1/5",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "1/6",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "1/8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "A triangle has vertices A(p,q), B(r,s), C(t,u) and side midpoints M(-2,1), N(2,-1), P(3,2). Determine (p+q+r+s+t+u)/2.",
    options: [
      "2",
      "5/2",
      "3",
      "5",
      "Another value"
    ],
    answer: 3,
    explanation: "The sum of the three side midpoints is the sum of the triangle's vertices. Their coordinate total is (-2+1)+(2-1)+(3+2)=5, so the requested expression is 5.",
    hint: "Use that the sum of the three side midpoints equals the sum of the triangle's vertices.",
    sourcePage: 2,
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
        text: "5/2",
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "Another value",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Five predictions are made about a football match, and exactly three come true. How many goals did Real Madrid score?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "It cannot be determined"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: test each possible score and match result against the five predictions in the source.",
    hint: "Enumerate possible wins, draws, and losses, then count true statements in each case.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "A regular pentagon is cut from lined paper and rotated 21 degrees counterclockwise about its centre at each step. When does it first fill the hole exactly again?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: use the line pattern and the rotation diagrams to map the first matching orientation.",
    hint: "Find the first multiple of 21 degrees that is a rotational symmetry of the pentagon and paper pattern.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-17.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-17-extra.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "Which number is not a factor of 18^2017+18^2018?",
    options: [
      "8",
      "18",
      "28",
      "38",
      "48"
    ],
    answer: 2,
    explanation: "Factor the expression as 18^2017(1+18)=19x18^2017. It is divisible by 8, 18, 38, and 48, but not 28.",
    hint: "Factor out 18^2017 and inspect the remaining factor 19.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "38",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Three of five cards go to Nadia and the rest to Riny. Nadia multiplies her three values and Riny multiplies his two; the sum is prime. What is the sum of Nadia's card values?",
    options: [
      "12",
      "13",
      "15",
      "17",
      "18"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the five card values and their distribution are in the source picture.",
    hint: "Test the possible three-card subsets and use primality of the sum of products.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "13",
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
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Two rectangles make angles of 40 degrees and 30 degrees with a straight line as shown. What is angle alpha?",
    options: [
      "105 degrees",
      "120 degrees",
      "130 degrees",
      "135 degrees",
      "Another value"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the orientation of the rectangles and the marked angle are shown in the source diagram.",
    hint: "Use the right angles of both rectangles and the two given inclinations.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "105 degrees",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "120 degrees",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "130 degrees",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "135 degrees",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "Another value",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "A triangular prism has vertices labelled 1 to 6. The sum around each square face is the same, and 1 and 5 are shown. What number is at X?",
    options: [
      "2",
      "3",
      "4",
      "6",
      "Impossible"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the vertex assignments in the prism diagram determine the equal face sums.",
    hint: "Write the sum equation for each of the three square faces.",
    sourcePage: 3,
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "Impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "m and n are roots of x^2-x-2018=0. Find the expression n^2+m^2.",
    options: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020"
    ],
    answer: 3,
    explanation: "The roots have sum 1 and product -2018, so m^2+n^2=(m+n)^2-2mn=1+4036=4037; NEEDS_REVIEW: the source expression may instead be n^2+m^2 with a different constant or operation.",
    hint: "Use the sum and product of roots to compute the sum of their squares.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "2016",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "2017",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "2018",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "2019",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "2020",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Four brothers A,B,C,D have different heights. A says he is neither tallest nor shortest; B says he is not shortest; C says he is tallest; D says he is shortest. Exactly one statement is false. Who is tallest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "Cannot be determined"
    ],
    answer: 1,
    explanation: "A must be between the tallest and shortest, and D says he is shortest. Since B is not shortest, B and C occupy the two highest places. If C were tallest, all four statements would be true, contrary to the condition. So C's claim is the single false statement, and B is tallest.",
    hint: "Use A's claim and D's claim to place them, then check whether C can be tallest without making every claim true.",
    sourcePage: 3,
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
        text: "Cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A function satisfies f(x+y)=f(x)f(y) for all integers x,y and f(1)=1/2. Find f(0)+f(1)+f(2)+f(3).",
    options: [
      "1/8",
      "3/2",
      "5/2",
      "15/8",
      "6"
    ],
    answer: 3,
    explanation: "From f(1)=f(0)f(1) and f(1) nonzero, f(0)=1. Then f(2)=1/4 and f(3)=1/8, giving a total of 15/8.",
    hint: "Use the functional equation at x=0, then derive f(2) and f(3).",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1/8",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "3/2",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "5/2",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "15/8",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A quadratic f(x)=x^2+px+q crosses both axes in three distinct points. The circle through these points meets the graph again. What are the coordinates of the fourth intersection?",
    options: [
      "(0,-q)",
      "(q/p,q)",
      "(-p,q)",
      "(-q/p,q/2)",
      "(1,p+q+1)"
    ],
    answer: 2,
    explanation: "The circle through the x-intercepts and (0,q) has equation x²+y²+px−(q+1)y+q=0. Substituting y=x²+px+q from the parabola reduces this equation to y(y−q)=0. Besides the x-intercepts (where y=0) and (0,q), the other intersection with y=q satisfies x²+px=0, giving (−p,q).",
    hint: "Use the two roots on the x-axis and the y-intercept to determine the circle equation, then substitute the parabola.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "(0,-q)",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "(q/p,q)",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "(-p,q)",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "(-q/p,q/2)",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "(1,p+q+1)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "A point ball travels on a 3 m by 2 m rectangular billiard table, reflecting once from each other side. If BM=1.2 m and BN=0.8 m, how far from A does it hit side AB again?",
    options: [
      "2 m",
      "1.5 m",
      "1.2 m",
      "2.8 m",
      "1.8 m"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: use the exact reflection order and labelled points in the source billiard diagram.",
    hint: "Unfold the reflections into adjacent copies of the rectangle and use similar triangles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "2 m",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "1.5 m",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "1.2 m",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "2.8 m",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "1.8 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-26.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "How many real solutions does ||4^x-3|-2|=1 have?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "The nested absolute values give 4^x-3 equal to 3, -3, 1, or -1. The resulting positive powers are 6, 0, 4, and 2; 4^x=0 is impossible, leaving three solutions.",
    hint: "Remove the outer absolute value twice, then keep only positive values for 4^x.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "In a regular hexagon, G is the midpoint of AB and lines GD and GE meet FC at H and I. What is the ratio of the areas of triangle GIF and trapezium IHDE?",
    options: [
      "1/2",
      "1/3",
      "1/4",
      "sqrt(3)/3",
      "sqrt(3)/4"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: derive the area ratio from the source regular-hexagon construction.",
    hint: "Place the regular hexagon in coordinates and find the line intersections on FC.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "1/4",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "sqrt(3)/3",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "sqrt(3)/4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "A class has 40% more girls than boys. The probability that two randomly selected students consist of one girl and one boy is 1/2. How many students are in the class?",
    options: [
      "20",
      "24",
      "36",
      "38",
      "This is impossible"
    ],
    answer: 2,
    explanation: "Let the number of boys be 5k; then there are 7k girls and 12k students altogether. The probability of choosing one of each is (5k·7k)/C(12k,2)=70k²/[12k(12k−1)]. Setting this to 1/2 gives k=3, so there are 36 students.",
    hint: "Use a multiple of 5 for the boys' count so the 40% increase gives a whole number of girls.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "36",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "38",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "This is impossible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "Two digits, the second and tenth, are unreadable in 15!. What are the missing digits?",
    options: [
      "2 and 0",
      "4 and 8",
      "7 and 4",
      "9 and 2",
      "3 and 8"
    ],
    answer: 4,
    explanation: "Compute 15!=1307674368000. Counting from the left, the second digit is 3 and the tenth digit is 8, so the missing digits are 3 and 8.",
    hint: "Write out 15! and number its digits in order from the left.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "2 and 0",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "4 and 8",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "7 and 4",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "9 and 2",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "3 and 8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2018/questions/editor-q-30.png"
  }
];

const sections2018Student: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1-10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11-20",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 21-30",
    accent: "purple"
  }
];

export const edition2018Student: QuestionSet = {
  id: "student-2018",
  year: 2018,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "15 March 2018",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2018/2018_Student.pdf",
  questions: questions2018Student,
  sections: sections2018Student,
};
