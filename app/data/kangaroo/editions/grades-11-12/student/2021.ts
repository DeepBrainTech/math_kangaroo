import type { Question, QuestionSet, Section } from "../../../types";

const questions2021Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "A weather app shows the forecast and maximum temperatures for the next seven days. Which graph represents the temperatures?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: read the seven temperatures and compare them with the graph choices in the source.",
    hint: "Match each day's maximum temperature to the corresponding point on the graph.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-01.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-01-extra.png",
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
    prompt: "How many integers lie in the interval (20-sqrt(21),20+sqrt(21))?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 0,
    explanation: "Since sqrt(21) is between 4 and 5, the interval is between 15 and 25 and contains the integers 16 through 24: nine integers.",
    hint: "Approximate sqrt(21) and count the integers strictly inside the endpoints.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "12",
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
    prompt: "A cube of edge length 1 is cut into two identical cuboids. What is the surface area of one cuboid?",
    options: [
      "3/2",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Each cuboid has dimensions 1 by 1 by 1/2, so its surface area is 2(1+1/2+1/2)=4.",
    hint: "A plane through the cube's centre halves one dimension; apply the cuboid surface-area formula.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "3/2",
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
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "A large square is divided into smaller squares, with a shaded circle inscribed in each. What proportion of the large square is shaded?",
    options: [
      "8pi/9",
      "13pi/16",
      "3/4",
      "3pi/4",
      "Another value"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the subdivision and circle sizes are specified by the source diagram.",
    hint: "Add the areas of the inscribed circles and divide by the large square's area.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "8pi/9",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "13pi/16",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "3/4",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "3pi/4",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "Another value",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "A leaning flagpole's tip is to the right of its base when viewed from the northwest, and also from the east. In which direction could it be leaning?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: interpret the five 3D direction choices using the source compass illustration.",
    hint: "Translate each view's 'right' direction into a horizontal direction in the ground plane.",
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
    imageExtra: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "A rectangular sheet has length x and width y, x>y. It can be rolled into a cylinder in two ways. What is the ratio of the longer cylinder's volume to the shorter one's?",
    options: [
      "y^2:x^2",
      "x:y",
      "1:1",
      "x^2:y^2",
      "x:y^2"
    ],
    answer: 1,
    explanation: "The volumes are x^2y/(4pi) and xy^2/(4pi), so their ratio is x:y.",
    hint: "For each orientation, use one sheet dimension as circumference and the other as height.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "y^2:x^2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "x:y",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "1:1",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "x^2:y^2",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "x:y^2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Let x=pi/4. Which of the listed powers of x is largest?",
    options: [
      "x^4",
      "x^2",
      "x^3",
      "x",
      "x^5"
    ],
    answer: 4,
    explanation: "Since 0<x<1, the smaller the exponent, the larger the power; verify the source's ordered choices because the keyed answer is E.",
    hint: "For a number between 0 and 1, compare how powers change as the exponent increases.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "x^4",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "x^2",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "x^3",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "x",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "x^5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "How many three-digit numbers formed only from 1, 3, and 5 are divisible by 5? Digits may repeat.",
    options: [
      "3",
      "6",
      "9",
      "18",
      "27"
    ],
    answer: 2,
    explanation: "The final digit must be 5; the first two positions each have three choices, giving 3x3=9.",
    hint: "A number is divisible by 5 only if its last digit is 5 among these choices.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "27",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "What is the area of the triangle with vertices (p,q), (3p,q), and (2p,3q), where p,q>0?",
    options: [
      "pq/2",
      "pq",
      "2pq",
      "3pq",
      "4pq"
    ],
    answer: 2,
    explanation: "The horizontal base has length 2p and the height is 2q, so the area is (1/2)(2p)(2q)=2pq.",
    hint: "Use the horizontal side between the first two points as the base.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "pq/2",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "pq",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "2pq",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "3pq",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "4pq",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "A parabola has equation y=ax^2+bx+c. Which of the pictured lines could have the equation shown in the source?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: identify the parabola and line coefficients from the graph image.",
    hint: "Compare the line's intercept and slope with the labelled coefficients of the parabola.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "What fraction of the positive divisors of 7! are odd?",
    options: [
      "1/2",
      "1/3",
      "1/4",
      "1/5",
      "1/6"
    ],
    answer: 3,
    explanation: "7!=2^4 x 3^2 x 5 x 7 has 5x3x2x2 divisors, of which 3x2x2 are odd. The fraction is 1/5.",
    hint: "The odd divisors are formed by choosing exponents for odd primes only.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "1/4",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "1/5",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "1/6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "A=(0,1) union (2,3) and B=(1,2) union (3,4). What is the set of all sums a+b with a in A and b in B?",
    options: [
      "(1,7)",
      "(1,5) union (5,7)",
      "(1,3) union (3,7)",
      "(1,3) union (3,5) union (5,7)",
      "Empty"
    ],
    answer: 3,
    explanation: "Adding each interval pair gives (1,3), (3,5), (3,5), and (5,7); the three open intervals form the result.",
    hint: "Add the endpoints for each of the four possible interval pairs.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "(1,7)",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "(1,5) union (5,7)",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "(1,3) union (3,7)",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "(1,3) union (3,5) union (5,7)",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "Empty",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "How many three-digit numbers become a three-digit number 99 greater when their digits are reversed?",
    options: [
      "8",
      "64",
      "72",
      "80",
      "81"
    ],
    answer: 3,
    explanation: "Writing the number and its reverse gives a difference of 99(c-a), so c-a=1. The first digit a can be 1 through 8, and the middle digit b can be any of the 10 digits. There are 8×10=80 numbers.",
    hint: "Write the number as 100a+10b+c and its reverse as 100c+10b+a, then compare the hundreds and units digits.",
    sourcePage: 2,
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
        text: "64",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "72",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "80",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "81",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "The first 1000 positive integers are written in some order. What is the greatest possible number of odd sums of three adjacent entries?",
    options: [
      "997",
      "996",
      "995",
      "994",
      "993"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: maximize the number of consecutive triples with odd parity by arranging odd/even entries.",
    hint: "A triple sum is odd exactly when it contains an odd number of odd entries.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "997",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "996",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "995",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "994",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "993",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A large triangle is divided into smaller triangles whose perimeters are shown. What is the perimeter of the large triangle?",
    options: [
      "30",
      "31",
      "34",
      "39",
      "41"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the subdivision and small-triangle perimeters are in the source figure.",
    hint: "Add the small perimeters and subtract internal edges counted twice.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "30",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "31",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "34",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "39",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "41",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "An infinite sequence has the property that the average of its first n terms is n for every positive n. How many terms are less than 2021?",
    options: [
      "44",
      "504",
      "1010",
      "1427",
      "2018"
    ],
    answer: 2,
    explanation: "The nth term is n^2-(n-1)^2=2n-1. It is less than 2021 for n<=1010, giving 1010 terms.",
    hint: "Recover the nth term by subtracting the sum of the first n-1 terms from the sum of the first n terms.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "44",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "504",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "1010",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "1427",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "2018",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "A 5x5 table has equal sums in every row and column. What number belongs in the marked cell?",
    options: [
      "8",
      "10",
      "12",
      "18",
      "23"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the visible table entries and marked cell are required to solve the row/column constraints.",
    hint: "Use the common row and column sum to form equations for the unknown entries.",
    sourcePage: 2,
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
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "23",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "A string is partly covered by three coins. Under each coin it is equally likely to cross over itself in either of two ways. What is the probability the string is knotted when its ends are pulled?",
    options: [
      "1/2",
      "1/4",
      "1/8",
      "3/4",
      "3/8"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: determine which of the eight crossing patterns form a knot using the source illustrations.",
    hint: "There are 2^3 equally likely crossing patterns; count the unknotted arrangements.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "1/4",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "1/8",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "3/4",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "3/8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "A puppy pulls toilet paper from a roll at constant speed. Which graph best describes the roll's thickness y as a function of the unrolled length x?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: compare the changing radius of the paper roll with the five graph shapes.",
    hint: "The area of paper remaining is proportional to the roll's cross-sectional annulus area.",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-19.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-19-extra.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Three squares PQRS, TUVR, and UWXY share edges as shown. Their first two areas are 36 and 16. What is the area of triangle PXV?",
    options: [
      "44/3",
      "46/3",
      "16",
      "53/3",
      "18"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: use the square placements and collinearity of P,T,X from the source diagram.",
    hint: "Place the adjacent squares in coordinates and compute the triangle's base and height.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "44/3",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "46/3",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "53/3",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "The graph shows f on [-5,5]. How many distinct solutions does f(f(x))=0 have?",
    options: [
      "2",
      "4",
      "6",
      "7",
      "8"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: count zeros and their preimages from the source graph.",
    hint: "Find all x for which f(x) is a zero of f, working backward from the graph.",
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
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "The numbers 1,2,7,9,10,15,19 are alternately deleted by two players until one remains. One player's deleted sum is twice the other's. Which number remains?",
    options: [
      "7",
      "9",
      "10",
      "15",
      "19"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: analyze possible partitions of the six deleted values into sums in a 2:1 ratio.",
    hint: "The total is 63; if one player's sum is twice the other's, the two deleted sums are multiples of 21.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "7",
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
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "A function satisfies f(x+y)=f(x)f(y) and f(1)=2. Find f(2)/f(1)+f(3)/f(2)+f(2021)/f(2020).",
    options: [
      "0",
      "1/2",
      "2",
      "2020",
      "None of these"
    ],
    answer: 4,
    explanation: "Each quotient is f(1)=2, so the sum is 6, which is not among A-D.",
    hint: "Use the functional equation to express every consecutive-term ratio.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "1/2",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "2020",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "None of these",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Five kangaroos and their five children are arranged in two group photos. Exactly two children stand next to their mothers in the first photo and exactly three in the second. Whose child is a?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the two photographs and adjacency conditions are visual.",
    hint: "Compare the mother-child adjacencies across both arrangements and eliminate inconsistent assignments.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "A solid has 12 regular pentagonal faces; every pentagon borders 5 squares and every triangular face borders 3 squares. Faces are labelled 1 on triangles, 5 on pentagons, and -1 on squares. What is the total?",
    options: [
      "20",
      "50",
      "60",
      "80",
      "120"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: count the square and triangular faces from incidence relations in the source solid.",
    hint: "Count pentagon-square incidences, then use square edges to determine the remaining face counts.",
    sourcePage: 4,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "60",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "80",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "120",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "Fifteen equally spaced points lie on a circle. How many triangles can be formed, counting congruent triangles under rotation or reflection as one?",
    options: [
      "19",
      "23",
      "46",
      "91",
      "455"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: count triples of cyclic gaps up to rotation and reversal.",
    hint: "Represent each triangle by its three positive arc-step counts summing to 15, modulo cyclic order and reflection.",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "23",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "46",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "91",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "455",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-26.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "A triangle is divided into four parts by two straight lines. Three smaller triangle areas are 1, 3, and 3. What is the area of the original triangle?",
    options: [
      "12",
      "12.5",
      "13",
      "13.5",
      "14"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the line positions and three labelled regions are in the source figure.",
    hint: "Use ratios of areas of triangles sharing a height or lying on the same base.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "12.5",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "13.5",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "Two plane mirrors OP and OQ meet at an acute angle. A ray parallel to OQ reflects between them and finally hits OQ at right angles at R. If OR=5 cm, what is the distance d of the ray from OQ?",
    options: [
      "4 cm",
      "4.5 cm",
      "5 cm",
      "5.5 cm",
      "6 cm"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: trace the three reflections and use the source's mirror-angle diagram.",
    hint: "Unfold successive reflections into a straight-line ray and compare perpendicular distances.",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "4 cm",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "4.5 cm",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "5 cm",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "5.5 cm",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "6 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2021/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "For real k, let M(k) be the maximum of 4x^2-4x+k on [-1,1]. What is the minimum possible value of M(k)?",
    options: [
      "4",
      "9/2",
      "5",
      "11/2",
      "8"
    ],
    answer: 1,
    explanation: "The convex quadratic reaches its maximum at an endpoint: values are k+8 at -1 and k at 1, so M(k)=k+8 and has no minimum over unrestricted real k; NEEDS_REVIEW: verify the polynomial and parameter constraints from the source.",
    hint: "For a convex quadratic on a closed interval, compare its endpoint values.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "9/2",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "11/2",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A game ends when a player is 3 points ahead. A is currently 1 point ahead, and each player is equally likely to win each point. What is the probability A wins?",
    options: [
      "1/2",
      "2/3",
      "3/4",
      "4/5",
      "5/6"
    ],
    answer: 1,
    explanation: "Starting one point ahead, A must reach +3 before -3. The symmetric random walk's hitting probability is (1+3)/(3+3)=2/3.",
    hint: "Treat the score difference as a fair random walk with absorbing boundaries at +3 and -3.",
    sourcePage: 4,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "2/3",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "3/4",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "4/5",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "5/6",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2021Student: Section[] = [
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

export const edition2021Student: QuestionSet = {
  id: "student-2021",
  year: 2021,
  group: "Student",
  grades: "Grades 11-12",
  location: "Brazil",
  date: "2021",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2021/2021_Student.pdf",
  questions: questions2021Student,
  sections: sections2021Student,
};
