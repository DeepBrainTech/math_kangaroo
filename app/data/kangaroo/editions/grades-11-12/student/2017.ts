import type { Question, QuestionSet, Section } from "../../../types";

const questions2017Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In the number wall, each tile equals the sum of the two tiles directly below it. What number is in the tile marked with a question mark?",
    options: [
      "15",
      "16",
      "17",
      "18",
      "19"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the bottom-row values and marked tile are in the source diagram.",
    hint: "Build the wall upward by adding adjacent entries.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "A model railway uses scale 1:87. Benjamin's model of his brother is 2 cm tall. How tall is his brother in reality?",
    options: [
      "1.74 m",
      "1.62 m",
      "1.86 m",
      "1.94 m",
      "1.70 m"
    ],
    answer: 0,
    explanation: "The actual height is 2x87=174 cm=1.74 m.",
    hint: "Multiply the model height by 87, then convert centimetres to metres.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1.74 m",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "1.62 m",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "1.86 m",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "1.94 m",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "1.70 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Ten islands are connected by 15 bridges. What is the minimum number of bridges to close so there is no connection from A to B?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: find the minimum A-B edge cut in the source bridge diagram.",
    hint: "Identify the distinct routes from A to B and the smallest set of bridges intersecting all of them.",
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
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Positive numbers a and b satisfy 75% of a = 40% of b. What follows?",
    options: [
      "15a=8b",
      "7a=8b",
      "3a=2b",
      "5a=12b",
      "8a=15b"
    ],
    answer: 0,
    explanation: "0.75a=0.40b implies 75a=40b, or 15a=8b.",
    hint: "Convert both percentages to fractions and clear denominators.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "15a=8b",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "7a=8b",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "3a=2b",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "5a=12b",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "8a=15b",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Four of the five pictured pieces belong to the graph of the same quadratic function. Which piece does not belong?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: compare the five graph fragments and their curvature/vertex positions.",
    hint: "A quadratic graph is one parabola, so its pieces must share one axis and curvature.",
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
    imageExtra: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "A circle has centre O and diameters BA and XC, with the relation OB=CB shown. What fraction of the circle is shaded?",
    options: [
      "2/5",
      "1/3",
      "2/7",
      "3/11",
      "4/5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the shaded sector geometry and exact given relation are diagram-dependent.",
    hint: "Translate the chord equality into a central angle, then compare the shaded sector with the full circle.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2/5",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "2/7",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "3/11",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "4/5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A 4x1x1 cuboid consists of two white and two grey unit cubes as shown. Which cuboids can be built entirely from these pieces?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the coloured 4x1x1 pieces and five target solids are visual.",
    hint: "Track how the two colours can occupy positions in each proposed assembly.",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-07.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-07-extra.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Which quadrant contains no points of the graph f(x)=-3.5x+7?",
    options: [
      "I",
      "II",
      "III",
      "IV",
      "Every quadrant contains points"
    ],
    answer: 0,
    explanation: "For x<0 the line has y>7, and for 0<x<2 it has y>0; it never has both x<0 and y<0, so quadrant III is empty.",
    hint: "Find the x- and y-intercepts and determine the sign of y on either side.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "I",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "II",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "III",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "IV",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "Every quadrant contains points",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Five boxes contain red and blue balls. In which box is a randomly chosen ball most likely to be blue?",
    options: [
      "10 blue, 8 red",
      "6 blue, 4 red",
      "8 blue, 6 red",
      "7 blue, 7 red",
      "12 blue, 9 red"
    ],
    answer: 1,
    explanation: "The blue proportions are 10/18, 6/10, 8/14, 7/14, and 12/21. The greatest is 6/10, option B.",
    hint: "Compare the five blue-to-total ratios.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "10 blue, 8 red",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "6 blue, 4 red",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "8 blue, 6 red",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "7 blue, 7 red",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "12 blue, 9 red",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Which function graph intersects y=x^2 the greatest number of times?",
    options: [
      "g(x)=x",
      "g(x)=x^2",
      "g(x)=x^3",
      "g(x)=-x^4",
      "g(x)=-x^5"
    ],
    answer: 1,
    explanation: "The graph of g(x)=x^2 is the same parabola as y=x^2, so the two graphs share every point. Each other listed function gives only finitely many intersections.",
    hint: "Set each candidate equal to x^2; one choice may describe the very same graph.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "g(x)=x",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "g(x)=x^2",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "g(x)=x^3",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "g(x)=-x^4",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "g(x)=-x^5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Three circles with centres A, B, C touch externally in pairs and have radii 3, 2, and 1. What is the area of triangle ABC?",
    options: [
      "6",
      "4sqrt(3)",
      "3sqrt(2)",
      "9",
      "2sqrt(6)"
    ],
    answer: 0,
    explanation: "The centre distances are 5, 4, and 3, giving a right triangle of area (3x4)/2=6.",
    hint: "Use the sums of radii as the sides of the centre triangle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "4sqrt(3)",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "3sqrt(2)",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "2sqrt(6)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "For 0<p<1 and q>1, which of the listed expressions is biggest?",
    options: [
      "qp",
      "q+p",
      "p/q",
      "p",
      "q"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the source includes a fraction that was lost in text extraction; compare all exact options before finalizing.",
    hint: "Use 0<p<1 and q>1 to bound each candidate expression.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "qp",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "q+p",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "p/q",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "p",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "q",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Two cylinders have equal volume. Cylinder B's base radius is 10% greater than A's. By what percentage is A's height greater than B's?",
    options: [
      "5%",
      "10%",
      "11%",
      "20%",
      "21%"
    ],
    answer: 3,
    explanation: "Equal volumes give hA/hB=(rB/rA)^2=1.1^2=1.21, so A is 21% taller.",
    hint: "For equal volumes, height is inversely proportional to the square of the radius.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "5%",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "10%",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "11%",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "20%",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "21%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A polyhedron has 6 square faces, each bordering 4 triangles, and each triangle borders 3 squares. How many triangular faces are there?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 0,
    explanation: "Count square-triangle incidences: 6x4=24. Each triangle accounts for 3, so there are 8 triangles.",
    hint: "Count the shared square-triangle edges from each type of face.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Four tetrahedral dice have faces labelled 2,0,1,7. Three faces of each die are visible from above. What is the probability that one visible digit from each die can form 2017?",
    options: [
      "1/256",
      "63/256",
      "8/256",
      "1/32",
      "29/32"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: count the visible-face outcomes that permit choosing 2,0,1,7 once each.",
    hint: "For each tetrahedron, the top-visible set omits one digit; count combinations leaving all four target digits available.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "1/256",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "63/256",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "8/256",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "1/32",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "29/32",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "A polynomial x^5+ax^3+bx^2+24 has whole-number coefficients a,b. Which number is definitely not a solution of the polynomial equation?",
    options: [
      "1",
      "-1",
      "3",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "By the rational root theorem, any integer root must divide 24. The number 5 does not divide 24.",
    hint: "Use the integer-root theorem: an integer root divides the constant term.",
    sourcePage: 2,
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
        text: "-1",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "3",
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
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "Julia has 2017 discs: 1009 black and 1008 white. She makes the largest possible alternating-colour square pattern, starting with black at the upper-left. How many discs remain?",
    options: [
      "None",
      "40 of each colour",
      "40 black and 41 white",
      "41 of each",
      "40 white and 41 black"
    ],
    answer: 0,
    explanation: "A 44x44 board uses 968 discs of each colour. The remaining discs are 41 black and 40 white.",
    hint: "Find the largest square side whose checkerboard uses no more of either colour than available.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "None",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "40 of each colour",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "40 black and 41 white",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "41 of each",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "40 white and 41 black",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "Two consecutive positive integers are written on a board. Each number's digit sum is divisible by 7. What is the minimum number of digits in the smaller number?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the minimum consecutive pair satisfying both digit-sum conditions.",
    hint: "Search for consecutive numbers whose digit sums are both multiples of 7, accounting for carries.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "A convex quadrilateral has perpendicular diagonals and sides AB=2017, BC=2018, CD=2019. What is DA?",
    options: [
      "2016",
      "2018",
      "sqrt(2020^2-4)",
      "sqrt(2018^2+2)",
      "2020"
    ],
    answer: 3,
    explanation: "For a quadrilateral with perpendicular diagonals, AB^2+CD^2=BC^2+DA^2. Substitution gives DA^2=2017^2+2019^2-2018^2=2018^2+2.",
    hint: "Use the equality between sums of squares of opposite sides when diagonals are perpendicular.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "2016",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "2018",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "sqrt(2020^2-4)",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "sqrt(2018^2+2)",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "2020",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Lilli lies on every third statement and tells the truth on the others. She makes six statements about a two-digit number. What is the sum of its digits?",
    options: [
      "9",
      "12",
      "13",
      "15",
      "17"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: identify which statement positions are lies and solve for the number from their truth values.",
    hint: "Test the possible starting truth/lie patterns and enforce all six statements.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "How many positive whole numbers become exactly one fourteenth as large when their last digit is deleted?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: solve 10a+d=14a for digit d and count valid positive integers.",
    hint: "Write the number as 10a+d, where d is its last digit.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A regular hexagon has side length 1. The grey flower is bounded by radius-1 arcs centred at its vertices. What is its area?",
    options: [
      "pi/2",
      "2pi/3",
      "2sqrt(3)-pi",
      "pi/2+sqrt(3)",
      "2pi-3sqrt(3)"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: identify the flower boundary sectors and overlap from the source diagram.",
    hint: "Decompose the flower into circular sectors and equilateral triangles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "pi/2",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "2pi/3",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "2sqrt(3)-pi",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "pi/2+sqrt(3)",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "2pi-3sqrt(3)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "A sequence starts a1=2017 and follows the recurrence shown in the source. What is the requested expression involving a2016 and a2017?",
    options: [
      "-2017",
      "2017",
      "2016/2017",
      "1",
      "-1/2016"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: transcribe the recurrence and requested expression directly from the source before confirming the keyed choice E.",
    hint: "Compute the first few terms and look for a reciprocal pattern.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "-2017",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "2017",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "2016/2017",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "1",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "-1/2016",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A regular tetrahedron of volume 1 has each vertex cut off by planes through the midpoints of its incident edges. What is the remaining volume?",
    options: [
      "4/5",
      "3/4",
      "2/3",
      "1/2",
      "1/3"
    ],
    answer: 0,
    explanation: "Each corner tetrahedron has linear scale 1/2 and volume 1/8. Removing four leaves 1-4/8=1/2.",
    hint: "Each corner cut forms a smaller tetrahedron similar to the original with half the side length.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "4/5",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "3/4",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "2/3",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "1/2",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "1/3",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "The sum of the three side lengths of a right-angled triangle equals 18. The sum of the squares of these three side lengths equals 128. What is the area of the triangle?",
    options: [
      "18",
      "16",
      "12",
      "10",
      "9"
    ],
    answer: 2,
    explanation: "Let c be the hypotenuse. Then 2c^2=128, so c=8 and the legs sum to 10. Their product is 18, giving area 9.",
    hint: "Use a^2+b^2=c^2 and the perimeter to find the product of the legs.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Anna has five boxes, five black balls, and five white balls. She puts at least one ball in every box. Which distribution maximizes the chance Beate randomly selects a white ball by choosing a box and drawing from it?",
    options: [
      "One white and one black in every box",
      "Black balls in three boxes and white in two",
      "Four black balls across four boxes and all whites in the last",
      "All whites in one box and one black in each box",
      "All blacks in one box and one white in each box"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: compare the expected white probability for the five listed distributions.",
    hint: "For each arrangement, average the white fraction in each box equally.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "One white and one black in every box",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "Black balls in three boxes and white in two",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "Four black balls across four boxes and all whites in the last",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "All whites in one box and one black in each box",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "All blacks in one box and one white in each box",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "Nine integers fill a 3x3 table and sum to 500. Adjacent cells differ by exactly 1. What is in the middle cell?",
    options: [
      "50",
      "54",
      "55",
      "56",
      "57"
    ],
    answer: 3,
    explanation: "Let the centre be c. The four neighbouring entries are c±1, and each corner differs by 1 from both of its neighbouring entries, so each corner is c, c+2, or c−2. Thus the total differs from 9c by an even number between −12 and 12. Since 500=9·55+5, c cannot be 55; c=54 or 57 would require a difference outside that range. Therefore c=56.",
    hint: "Express the eight surrounding entries relative to the centre; their total offset is even and bounded.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "50",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "54",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "55",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "56",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "57",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2017/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "If |x|+x+y=5 and x+|y|-y=10, what is x+y?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: split into sign cases for x and y and solve the two equations.",
    hint: "Use |x|+x=2max(x,0) and |y|-y=2max(-y,0).",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "How many three-digit numbers ABC have (A+B)^C equal to a three-digit power of 2?",
    options: [
      "15",
      "16",
      "18",
      "20",
      "21"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the exponent placement in the source and enumerate the valid digit triples.",
    hint: "List three-digit powers of 2 and test their bases and exponents against the digit constraints.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "There are 2017 people on an island, each a liar or noble. More than 1000 sit around a table, each saying one neighbour is a liar and the other a noble. What is the maximum number of nobles on the island?",
    options: [
      "1683",
      "668",
      "670",
      "1344",
      "1343"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: determine the possible alternating truth-status pattern around the banquet table and maximize nobles among all 2017 people.",
    hint: "The statement constrains the two neighbours' types; derive the repeating pattern around the circle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "1683",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "668",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "670",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "1344",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "1343",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2017Student: Section[] = [
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

export const edition2017Student: QuestionSet = {
  id: "student-2017",
  year: 2017,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "16 March 2017",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2017/2017_Student.pdf",
  questions: questions2017Student,
  sections: sections2017Student,
};
