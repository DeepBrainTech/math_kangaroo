import type { Question, QuestionSet, Section } from "../../../types";

const questions2011Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Numbers are written at the vertices of a hexagon so that the sums at the two ends of every side are equal. Two numbers are shown. Which number belongs at x?",
    options: [
      "1",
      "3",
      "4",
      "5",
      "24"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: use the two given vertex labels and the source hexagon orientation to verify the answer.",
    hint: "Write the six equations for adjacent vertex sums and compare them around the hexagon.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-01.png",
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
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Three racers begin in the order Michael, Fernando, Sebastian. During the race Michael and Fernando overtake each other 9 times, Fernando and Sebastian 10 times, and Michael and Sebastian 11 times. In what order do they finish?",
    options: [
      "Michael, Fernando, Sebastian",
      "Fernando, Sebastian, Michael",
      "Sebastian, Michael, Fernando",
      "Sebastian, Fernando, Michael",
      "Fernando, Michael, Sebastian"
    ],
    answer: 1,
    explanation: "An odd number of overtakes reverses a pair's order and an even number preserves it. Applying the three parities gives Fernando, Sebastian, Michael.",
    hint: "Track the final relative order of each pair from the parity of its overtaking count.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "Michael, Fernando, Sebastian",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "Fernando, Sebastian, Michael",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "Sebastian, Michael, Fernando",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "Sebastian, Fernando, Michael",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "Fernando, Michael, Sebastian",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "If 2^x=15 and 15^y=32, what is xy?",
    options: [
      "5",
      "log2(15)+log15(32)",
      "log2(47)",
      "7",
      "sqrt(47)"
    ],
    answer: 0,
    explanation: "Multiplying x=log2(15) and y=log15(32) gives xy=log2(32)=5.",
    hint: "Rewrite both exponents as logarithms and use the change-of-base identity.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "log2(15)+log15(32)",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "log2(47)",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "sqrt(47)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Jan's village map has the correct relative positions of houses and street crossings. Three roads are straight; Qurwik Street is not. Who lives on Qurwik Street?",
    options: [
      "Amy",
      "Ben",
      "Carol",
      "David",
      "It cannot be determined"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the map is required to identify which resident's street is curved.",
    hint: "Trace each road through the correctly placed crossings and identify the only non-straight route.",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "Amy",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "Ben",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "Carol",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "David",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "All four-digit numbers whose digit sum is 4 are written in descending order. In which position is 2011?",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    answer: 3,
    explanation: "There are eight valid four-digit numbers greater than 2011, placing 2011 ninth.",
    hint: "Count numbers with digit sum 4 in descending order by their leading digits.",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "9",
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
    prompt: "A regular hexagon of side length 1 is surrounded by six squares and six equilateral triangles as shown. What is the perimeter of the whole tessellation?",
    options: [
      "6(1+sqrt(2))",
      "6(1+sqrt(3)/2)",
      "9",
      "6+3sqrt(2)",
      "12"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: confirm the outer boundary segments in the source tessellation before summing its perimeter.",
    hint: "Count the exposed sides of the hexagon, squares, and triangles around the outside boundary.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "6(1+sqrt(2))",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "6(1+sqrt(3)/2)",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "6+3sqrt(2)",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A rectangular piece of paper is wrapped around a cylinder and cut along the shown slanted line through X and Y. Which picture could be the lower part when unrolled?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five visual answer choices must be checked against the cut path.",
    hint: "Unrolling the cylinder turns the slanted cut into a straight line across a rectangle.",
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
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-07.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-07-extra.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "In the pictured quadrilateral PQRS, PS=RS, angles PSR and PQR are right angles, ST is perpendicular to PQ, and ST=5. What is the area of PQRS?",
    options: [
      "20",
      "22.5",
      "25",
      "27.5",
      "30"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the quadrilateral's construction is diagram-dependent; verify the area from the source figure.",
    hint: "Use the equal sides and perpendicular height to decompose the quadrilateral into triangles.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "22.5",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "25",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "27.5",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "30",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Andrew writes all odd numbers from 1 to 2011. Bob deletes all multiples of 3. How many numbers remain?",
    options: [
      "335",
      "336",
      "671",
      "1005",
      "1006"
    ],
    answer: 2,
    explanation: "There are 1006 odd numbers from 1 to 2011. Of these, 335 are multiples of 3, leaving 671.",
    hint: "Count the odd multiples of 3 up to 2011 and subtract from the total odd count.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "335",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "336",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "671",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "1005",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "1006",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Dice are rolled to choose who jumps into a cold lake. With no sixes Max jumps; with exactly one six Hugo jumps; with two or more sixes neither jumps. How many dice make the probabilities of Max and Hugo having to jump equal?",
    options: [
      "3",
      "5",
      "8",
      "9",
      "17"
    ],
    answer: 1,
    explanation: "Equate P(no six)=(5/6)^n and P(exactly one six)=n(1/6)(5/6)^(n-1). This gives n=5.",
    hint: "Write the probabilities of zero sixes and exactly one six, then cancel their common factor.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "A rectangle is split into three smaller rectangles. One is 7 by 11 and another is 4 by 8. What dimensions can the third rectangle have so its area is as large as possible?",
    options: [
      "1 by 11",
      "3 by 4",
      "3 by 8",
      "7 by 8",
      "7 by 11"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement of the three rectangles is necessary to determine the maximizing dimensions.",
    hint: "Use the shared outer rectangle dimensions and test which compatible placement leaves the largest remaining rectangle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1 by 11",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "3 by 4",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "3 by 8",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "7 by 8",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "7 by 11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Four numbers are already entered in a 3x3 table. Each 2x2 square sums to 10. Which value could be the sum of the remaining five numbers?",
    options: [
      "9",
      "10",
      "12",
      "13",
      "None of these"
    ],
    answer: 4,
    explanation: "The source key marks E; verify the four given entries and solve the overlapping 2x2 equations before finalizing the derivation.",
    hint: "Add the four 2x2 equations and compare the resulting total with the known cells.",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "None of these",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Forty-eight children go on a ski trip. Six go with exactly one sibling, nine with exactly two siblings, and four with exactly three siblings. The rest go without siblings. How many families go on the trip?",
    options: [
      "19",
      "25",
      "31",
      "36",
      "48"
    ],
    answer: 3,
    explanation: "The groups represent 3 families of two children, 3 families of three, 1 family of four, and 29 only children: 36 families total.",
    hint: "Convert each count of children with a given number of siblings into a count of families.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "25",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "31",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "36",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "How many of the eight functions shown are included in the sketch on the right?",
    options: [
      "None",
      "2",
      "4",
      "6",
      "All 8"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: compare each of the eight function graphs with the source sketch.",
    hint: "Use symmetry and the sign of each function on positive and negative inputs to classify the graphs.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "None",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "All 8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "A car's rear wiper has a rod and blade of equal length joined at angle alpha. As the wiper rotates about O, it cleans the shown area. Find beta, the angle between the right edge of the cleaned area and the tangent to its curved upper edge.",
    options: [
      "(3pi-alpha)/2",
      "pi-alpha/2",
      "(3pi+alpha)/2",
      "alpha+pi/2",
      "pi+alpha/2"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the swept-region diagram and exact angle labels are needed to verify the formula.",
    hint: "Relate the blade's endpoint arcs and the angle between the rod and blade.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "(3pi-alpha)/2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "pi-alpha/2",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "(3pi+alpha)/2",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "alpha+pi/2",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "pi+alpha/2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Three horizontal lines and three parallel sloped lines form the shown grid. Two circles touch four of the lines. X, Y, and Z are grey areas and D is the area of parallelogram PQRS. What is the minimum number of X, Y, Z, and D values needed to determine the area T of another parallelogram?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "It cannot be determined"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the circle and parallelogram layout is essential to determine whether one area value suffices.",
    hint: "Use equal-height parallelograms and the circle tangencies to relate the grey regions.",
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
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "A point A(1,-10) lies on the parabola y=ax^2+bx+c. Most of the parabola and the axes have been erased. Which statement could be false?",
    options: [
      "a>0",
      "b<0",
      "a+b+c<0",
      "b^2>4ac",
      "c<0"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the remaining parabola sketch is needed to determine which listed property is not forced.",
    hint: "Use the visible branch and the point (1,-10) to constrain the coefficients and roots.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "a>0",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "b<0",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "a+b+c<0",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "b^2>4ac",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "c<0",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "The sides AB, BC, CD, DE, EF, and FA of a hexagon all touch the same circle. AB, BC, CD, DE, and EF have lengths 4, 5, 6, 7, and 8, respectively. What is FA?",
    options: [
      "9",
      "8",
      "7",
      "6",
      "It cannot be determined"
    ],
    answer: 3,
    explanation: "For a tangential hexagon, alternating side sums are equal. Thus AB+CD+EF=BC+DE+FA, so FA=4+6+8-5-7=6.",
    hint: "Use the equal sums of alternate sides of a polygon tangent to a circle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "7",
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
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "The expression shown uses different nonzero digits for different letters. What is its smallest possible positive whole-number value?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the numerator and denominator products are visually formatted and were not reliably recovered from the PDF text.",
    hint: "Translate the letter expression into a digit assignment and minimize the resulting ratio.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Gerhard says all members of the chess club are male with five exceptions. Günther says that in every group of six members there are at least four females. How many members are in the club?",
    options: [
      "6",
      "7",
      "8",
      "12",
      "18"
    ],
    answer: 1,
    explanation: "There are exactly five female members. For every six-member group to contain at least four females, there can be at most two males, so the club has 7 members.",
    hint: "Use the smallest possible number of females in a six-person subset to bound the number of males.",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "A drum contains distinct positive integers: 30 are divisible by 6, 20 by 7, and 10 by 42. What is the minimum possible number of balls?",
    options: [
      "30",
      "40",
      "53",
      "54",
      "60"
    ],
    answer: 1,
    explanation: "By inclusion-exclusion, the 30 multiples of 6 and 20 multiples of 7 overlap in 10 multiples of 42, so the minimum union size is 30+20-10=40.",
    hint: "Apply inclusion-exclusion to the two sets of multiples.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "30",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "53",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "54",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "How many different arithmetic sequences of positive integers have both 5,20,35,... and 35,61,87,... as subsequences?",
    options: [
      "1",
      "3",
      "5",
      "26",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: determine the possible common subsequence steps and starting terms; the answer key accepts C (and parenthetically E) on this item.",
    hint: "A common arithmetic subsequence must have a step divisible by both 15 and 26, and its starting term must occur in both sequences.",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "26",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Define f1(x)=x and f(n+1)(x)=1/(1-f(n)(x)). What is f2011(2011)?",
    options: [
      "2011",
      "-1/2010",
      "1/2010",
      "1",
      "-2011"
    ],
    answer: 0,
    explanation: "The iteration cycles with period three: f1(x)=x, f2(x)=1/(1-x), and f3(x)=1-1/x; hence f2011=f1 and the value is 2011.",
    hint: "Compute the first few iterates and look for a three-step return.",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "2011",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "-1/2010",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "1/2010",
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
        text: "-2011",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A box has red and green balls. Two balls drawn at random have probability 1/2 of being the same colour. Which total number of balls could be in the box?",
    options: [
      "81",
      "101",
      "1000",
      "2011",
      "10001"
    ],
    answer: 0,
    explanation: "If there are r red and g green balls, with n=r+g, then the probability is [r(r−1)+g(g−1)]/[n(n−1)]. Setting this to 1/2 and using r²+g²=((r+g)²+(r−g)²)/2 gives (r−g)²=n. Thus n must be a perfect square. Of the choices only 81 is a square, and it works with 45 red and 36 green balls.",
    hint: "Write the probability using the two same-colour pair counts, then simplify in terms of n and the colour-count difference.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "81",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "101",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "1000",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "2011",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "10001",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "An airline charges for luggage above a free allowance. Mr. and Mrs. Raiss carry 60 kg total and pay 3 euros. Mr. Wander also carries 60 kg but pays 10.50 euros. How many kilograms per passenger are free?",
    options: [
      "10",
      "18",
      "20",
      "25",
      "39"
    ],
    answer: 3,
    explanation: "Let p be the rate per excess kilogram and w the free allowance per passenger. The two bills give 2(30-w)p=3 and (60-w)p=10.5; solving yields w=25.",
    hint: "Write one cost equation for each travel party using the same rate and free allowance.",
    sourcePage: 4,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "25",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "39",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Find the sum of positive whole numbers x<100 for which x^2-81 is divisible by 100.",
    options: [
      "200",
      "100",
      "90",
      "81",
      "50"
    ],
    answer: 0,
    explanation: "The residues solving x^2 congruent to 81 modulo 100 are 9, 41, 59, and 91. Their sum is 200.",
    hint: "Solve the square congruence modulo 100 and list the positive solutions below 100.",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "200",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "100",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "90",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "81",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "50",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "An archer hits the pictured target with each of three arrows. How many different total scores are possible?",
    options: [
      "13",
      "17",
      "19",
      "20",
      "21"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the target's scoring regions are essential for enumerating possible totals.",
    hint: "List the score values for one arrow, then form distinct sums of three values.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "17",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Positive integers a,b,c satisfy a^2=2b^3=3c^5. What is the minimum possible number of positive divisors of abc, counting 1 and abc?",
    options: [
      "30",
      "49",
      "60",
      "77",
      "1596"
    ],
    answer: 3,
    explanation: "Let the common value be N. Its 2-adic exponent must be even, one more than a multiple of 3, and a multiple of 5; the least possibility is 10. Its 3-adic exponent must be a multiple of 2 and 3 and one more than a multiple of 5; the least is 6. These give exponents 5+3+2=10 for 2 and 3+2+1=6 for 3 in abc. Any other prime appearing in N adds positive exponents to abc, so the minimum divisor count is (10+1)(6+1)=77.",
    hint: "For each prime, find the smallest exponent of the common value compatible with all three power expressions.",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "30",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "49",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "60",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "77",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "1596",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "Twenty different positive integers are placed in a 4x5 table. Numbers in cells sharing a side must have a common factor greater than 1. What is the smallest possible value of the largest number n?",
    options: [
      "21",
      "24",
      "26",
      "27",
      "40"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify the construction and lower bound for the 4x5 adjacency condition.",
    hint: "Use the smallest numbers with suitable shared prime factors to build the grid, then show why a smaller maximum fails.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "21",
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
        text: "26",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "27",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2011/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "A 3x3x3 cube is assembled from 27 identical small cubes. A plane perpendicular to a space diagonal passes through the cube's centre. How many small cubes does it cut?",
    options: [
      "17",
      "18",
      "19",
      "20",
      "21"
    ],
    answer: 2,
    explanation: "Center the cube at the origin and give the small-cube centres coordinates from −1 to 1. The perpendicular plane is x+y+z=0. A unit cube is cut when its centre's coordinate sum is −1, 0, or 1; there are 6, 7, and 6 such cubes, for 19 altogether.",
    hint: "Use coordinates for the 27 small-cube centres; the plane cuts a cube when the sum of its centre coordinates is close enough to zero.",
    sourcePage: 4,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2011Student: Section[] = [
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

export const edition2011Student: QuestionSet = {
  id: "student-2011",
  year: 2011,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "17 March 2011",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2011/2011_Student.pdf",
  questions: questions2011Student,
  sections: sections2011Student,
};
