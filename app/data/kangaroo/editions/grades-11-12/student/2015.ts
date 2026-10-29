import type { Question, QuestionSet, Section } from "../../../types";

const questions2015Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Andrea was born during 1997 and her sister Charlotte during 2001. What is known for certain about the age difference?",
    options: [
      "Less than 4 years",
      "At least 4 years",
      "Exactly 4 years",
      "More than 4 years",
      "Not less than 3 years"
    ],
    answer: 4,
    explanation: "The difference between two birth dates in those calendar years is always less than four years.",
    hint: "Compare the earliest possible birthday in one year with the latest in the other.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "Less than 4 years",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "At least 4 years",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "Exactly 4 years",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "More than 4 years",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Not less than 3 years",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Simplify (a-b)^3+(b-a)^3.",
    options: [
      "0",
      "2(a-b)^3",
      "a^2b-b^2a",
      "a^2b+b^2a",
      "a^6+b^6"
    ],
    answer: 0,
    explanation: "Since b-a=-(a-b), the two cubes cancel and the sum is zero.",
    hint: "Rewrite b-a as -(a-b) and use the odd exponent.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2(a-b)^3",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "a^2b-b^2a",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "a^2b+b^2a",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "a^6+b^6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "How many real solutions does the exponential equation shown in the source have?",
    options: [
      "0",
      "Infinitely many",
      "2",
      "1",
      "3"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the exponent signs and parentheses are ambiguous in the extracted source text; verify the equation before solving.",
    hint: "Rewrite both sides with the same base and compare exponents.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "Infinitely many",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "1",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Diana counts four types of trees and makes a bar chart. Heinz thinks a pie chart would better show the proportions. What would the pie chart look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the bar heights and five pie-chart choices are shown in the source figure.",
    hint: "Convert each bar height into a sector proportional to the total tree count.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-04.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-04-extra.png",
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
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Add all whole numbers from 2001 through 2031 and divide the sum by 31. What is the result?",
    options: [
      "2012",
      "2013",
      "2015",
      "2016",
      "2496"
    ],
    answer: 3,
    explanation: "The numbers form an arithmetic sequence, so their average is (2001+2031)/2=2016.",
    hint: "The average of an arithmetic sequence is the mean of its first and last terms.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "2012",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "2013",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "2015",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "2016",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "2496",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "How many of the pictured shapes can be drawn in one continuous line without tracing any line segment twice?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: count odd-degree vertices in each of the four source diagrams.",
    hint: "A connected graph can be drawn in one stroke exactly when it has zero or two odd-degree vertices.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A convex quadrilateral has n right angles. Which list gives all possible values of n?",
    options: [
      "0,1,2",
      "0,1,2,4",
      "0,1,2,3,4",
      "0,1,3",
      "1,2,3"
    ],
    answer: 1,
    explanation: "A convex quadrilateral can have 0, 1, 2, or 4 right angles; three right angles force the fourth to be right as well.",
    hint: "Use the 360-degree interior-angle sum.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "0,1,2",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "0,1,2,4",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "0,1,2,3,4",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "0,1,3",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "1,2,3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "A drinking glass is a truncated cone. What shape must be cut from coloured paper to cover its curved outside without overlap?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the source answer depends on the five candidate developments.",
    hint: "Unroll the frustum's curved surface and compare the two boundary arcs.",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-08.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-08-extra.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "The areas of the semicircles whose diameters are the sides of a right triangle are X, Y, and Z as shown. Which relation is definitely correct?",
    options: [
      "X<Y+Z",
      "sqrt(X)+sqrt(Y)=sqrt(Z)",
      "X=Y+Z",
      "X^2=Y^2+Z^2",
      "XY+YZ=Z"
    ],
    answer: 2,
    explanation: "The area of a semicircle is proportional to the square of its diameter. By Pythagoras, the area on the hypotenuse equals the sum of the areas on the legs.",
    hint: "Apply the Pythagorean theorem to the three diameters.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "X<Y+Z",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "sqrt(X)+sqrt(Y)=sqrt(Z)",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "X=Y+Z",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "X^2=Y^2+Z^2",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "XY+YZ=Z",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "A square sheet is folded along the dashed lines in the shown order and direction, then a corner of the folded square is cut off. How many holes will appear in the inner area when unfolded?",
    options: [
      "0",
      "1",
      "2",
      "4",
      "9"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the fold order and cut position are only visible in the paper diagram.",
    hint: "Unfold the cut through the folds in reverse order and count the distinct interior copies.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "2",
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
        text: "9",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Evaluate sqrt((2015+2015)+(2015-2015)+(2015x2015)+(2015/2015)).",
    options: [
      "sqrt(2015)",
      "2015",
      "2016",
      "2017",
      "4030"
    ],
    answer: 2,
    explanation: "The radicand is 4030+0+2015^2+1=2016^2, so the square root is 2016.",
    hint: "Recognize 2015^2+2(2015)+1 as a perfect square.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "sqrt(2015)",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "2015",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "2016",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "2017",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "4030",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "The x-axis and the graphs f(x)=2-x^2 and g(x)=x^2-1 divide the coordinate plane into how many regions?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    answer: 3,
    explanation: "The x-axis meets f at ±√2 and g at ±1, while f and g meet at ±√(3/2), giving six distinct intersections. Starting with the x-axis gives two regions; adding f, which crosses it twice, gives five. Curve g has four distinct intersections with the existing curves, so its five arcs add five regions. The total is 10.",
    hint: "Find the pairwise intersections first. Each distinct intersection splits a new curve into arcs, and each arc creates one region.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Numbers are placed around a circle so each number equals the sum of its two direct neighbours. What number goes in the circle marked with a question mark?",
    options: [
      "-5",
      "-16",
      "-8",
      "-3",
      "This has no solution"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the given circle values and adjacency order are diagram-dependent.",
    hint: "Write one linear equation for each circle using its two neighbours.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "-5",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "-16",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "-8",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "-3",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "This has no solution",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Five different positive whole numbers a,b,c,d,e satisfy the three relations shown in the source. Which number is largest?",
    options: [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the relations among a,b,c,d,e were not reliably recovered from the scan text.",
    hint: "Rewrite each relation to compare the variables pairwise.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "d",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "e",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "The geometric mean of three numbers is 3, and the geometric mean of the other three is 12. What is the geometric mean of all six numbers?",
    options: [
      "4",
      "6",
      "sqrt(15)",
      "15",
      "36"
    ],
    answer: 1,
    explanation: "The product of all six is 3^3 x 12^3, so the sixth root is sqrt(3x12)=6.",
    hint: "Combine the two triple products and take the sixth root.",
    sourcePage: 2,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "sqrt(15)",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Three concentric circles have perpendicular common diameters. The three grey sectors have equal area and the smallest circle has radius 1. What is the product of the radii?",
    options: [
      "sqrt(6)",
      "3",
      "3sqrt(3)/2",
      "2sqrt(2)",
      "6"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: identify the grey sector angles and their radii from the source diagram.",
    hint: "Express each equal sector area in terms of its circle's radius and angle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "sqrt(6)",
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
        text: "3sqrt(3)/2",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "2sqrt(2)",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Over 20 years, Arnberg's population grew by 40% and Berghausen's by 60%. Together their population grew by 54%. What was the ratio of their populations 20 years ago?",
    options: [
      "10:13",
      "20:27",
      "3:7",
      "7:12",
      "2:3"
    ],
    answer: 2,
    explanation: "Let the starting populations be A and B. Then 0.4A+0.6B=0.54(A+B), giving A:B=3:7.",
    hint: "Set the total increase equal to 54% of the combined starting population.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "10:13",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "20:27",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "3:7",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "7:12",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "2:3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Bibi rolls a die numbered 1 to 6. Tina rolls a die with faces 2,2,2,5,5,5. What is the probability that Tina rolls a larger number than Bibi?",
    options: [
      "1/3",
      "7/12",
      "5/12",
      "1/2",
      "11/18"
    ],
    answer: 2,
    explanation: "With Tina's roll 2, Bibi must roll 1, contributing 1/12. With Tina's roll 5, Bibi can roll 1 through 4, contributing 1/3. The total is 5/12.",
    hint: "Count separately when Tina rolls 2 and when she rolls 5.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1/3",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "7/12",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "5/12",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "1/2",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "11/18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Marbles numbered 1 through 2015 have the same colour exactly when their digit sums match. How many different colours are needed?",
    options: [
      "10",
      "27",
      "28",
      "29",
      "2015"
    ],
    answer: 2,
    explanation: "The smallest digit sum is 1 and the largest is 28, attained by 1999. Every value from 1 through 28 occurs for a number in the range, so 28 colours are needed.",
    hint: "Find the smallest and largest attainable digit sums, then check that no values between them are missing.",
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
        text: "27",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "29",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "2015",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Two standard dice are shown. What could be the number of dots on the non-visible right face marked with a question mark?",
    options: [
      "Only 5",
      "Only 2",
      "Either 2 or 5",
      "1, 2, 3, or 5",
      "2, 3, or 5"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: use the visible orientations of both dice to infer the right-hand face.",
    hint: "Use that opposite faces sum to 7 and compare the shared visible face arrangements.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "Only 5",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "Only 2",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "Either 2 or 5",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "1, 2, 3, or 5",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "2, 3, or 5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Statements A-E are checked in order. Which is the first true statement? (A) C is true. (B) A is true. (C) E is false. (D) B is false. (E) 1+1=2.",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "E is true, so C's claim that E is false is false. Thus A's claim that C is true is false, and B's claim that A is true is false. D says B is false, so D is the first true statement.",
    hint: "Start with E, whose truth is fixed, then work backward through the statements that refer to one another.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "The curve in the diagram is defined by the displayed equation. Which of the lines a,b,c,d is the y-axis?",
    options: [
      "a",
      "b",
      "c",
      "d",
      "None"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the curve equation and candidate-axis positions must be read from the source graph.",
    hint: "Use the curve's symmetry and intercepts to locate the coordinate axes.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "d",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "None",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "The multiplication table contains all products from 1x1 through 10x10. What is the sum of all 100 products?",
    options: [
      "1000",
      "2025",
      "2500",
      "3025",
      "5500"
    ],
    answer: 3,
    explanation: "The total is (1+...+10)^2=55^2=3025.",
    hint: "Factor the double sum as the product of the sum 1 through 10 with itself.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "1000",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "2025",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "2500",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "3025",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "5500",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "How many regular n-sided polygons have all their interior angles measured in whole degrees?",
    options: [
      "17",
      "18",
      "22",
      "25",
      "60"
    ],
    answer: 2,
    explanation: "For a regular n-gon each interior angle is 180(n-2)/n=180-360/n, an integer exactly when n divides 360. Counting n>=3 divisors gives 22.",
    hint: "Count divisors n>=3 of 360.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "22",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "25",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "How many three-digit whole numbers can be written as the sum of exactly nine different powers of 2?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: confirm whether the zeroth power is included and enumerate the distinct-power sums in the source's stated range.",
    hint: "List sums of nine distinct powers of 2 that lie between 100 and 999.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "How many different integer-sided right triangles have hypotenuse 20? Triangles are different when they are not congruent.",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: enumerate integer solutions to a^2+b^2=400 with positive legs and a<=b.",
    hint: "Factor (20-a)(20+a)=b^2 or test possible integer legs up to 20.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A rectangle 5 cm wide and 50 cm long is folded so B meets midpoint M of CD, then D meets midpoint N of AB. What is the visible white area?",
    options: [
      "50 cm^2",
      "60 cm^2",
      "62.5 cm^2",
      "100 cm^2",
      "125 cm^2"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the fold sequence and visible face colours require the source diagram to compute the white area.",
    hint: "Track the reflected regions after each fold and subtract the covered portions from the rectangle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "50 cm^2",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "60 cm^2",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "62.5 cm^2",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "100 cm^2",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "125 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2015/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "Let n be positive and p a prime dividing 1+2+...+n, but not dividing any summand. Which could be n+p?",
    options: [
      "217",
      "221",
      "229",
      "245",
      "269"
    ],
    answer: 0,
    explanation: "Since p divides none of 1,…,n, p>n. The triangular sum is n(n+1)/2; as p is odd, it must divide n or n+1. It cannot divide n, so n+1=p and n+p=2p−1. Among the choices, 217=2·109−1 and 109 is prime.",
    hint: "Factor the triangular sum and use p>n to determine which of n and n+1 is divisible by p.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "217",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "221",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "229",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "245",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "269",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A 5x5 grid starts white. One move flips three consecutive cells in a horizontal or vertical line. What is the minimum number of moves to obtain the shown checkerboard colouring?",
    options: [
      "Less than 10",
      "10",
      "12",
      "More than 12",
      "Impossible"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the exact target colouring is visual and must be checked for reachability and minimum moves.",
    hint: "Represent each move as toggling three cells and use parity constraints before searching for a minimum.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "Less than 10",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "More than 12",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "Impossible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "N has exactly six positive divisors including 1 and N. The product of five of these divisors is 648. Which is the sixth divisor?",
    options: [
      "4",
      "8",
      "9",
      "12",
      "24"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: determine which five divisors can multiply to 648 for a number with exactly six divisors.",
    hint: "List the possible divisor structures for N, then test their six divisors.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2015Student: Section[] = [
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

export const edition2015Student: QuestionSet = {
  id: "student-2015",
  year: 2015,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "23 March 2015",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2015/2015_Student.pdf",
  questions: questions2015Student,
  sections: sections2015Student,
};
