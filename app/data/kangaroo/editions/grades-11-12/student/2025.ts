import type { Question, QuestionSet, Section } from "../../../types";

const questions2025Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The year 2025 is the perfect square 45^2. How many years until the next year whose number is a perfect square?",
    options: [
      "25",
      "91",
      "121",
      "500",
      "2025"
    ],
    answer: 1,
    explanation: "The next square is 46^2=2116, so 2116-2025=91 years.",
    hint: "Compare the next consecutive square with 45^2.",
    sourcePage: 2,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "91",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "121",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "500",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "2025",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Mike obtains x by dividing sqrt(11) by 3. Between which consecutive integers does x lie?",
    options: [
      "0 and 1",
      "1 and 2",
      "2 and 3",
      "3 and 4",
      "4 and 5"
    ],
    answer: 1,
    explanation: "sqrt(11)/3 is approximately 1.1, so it lies between 1 and 2.",
    hint: "Compare sqrt(11) with 3 and 6.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "0 and 1",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "1 and 2",
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
        text: "3 and 4",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "4 and 5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "There are 20 balls, each yellow, green, blue, or black. Exactly 17 are not green, 15 are not black, and 12 are not yellow. How many are blue?",
    options: [
      "8",
      "7",
      "6",
      "4",
      "3"
    ],
    answer: 3,
    explanation: "The green count is 3, black count 5, and yellow count 8. The remaining 4 balls are blue.",
    hint: "Find each colour count from the corresponding 'not' total, then subtract from 20.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "6",
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
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Which interval contains the product shown in the source?",
    options: [
      "Between 7 and 77",
      "Between 77 and 777",
      "Between 777 and 7777",
      "Between 7777 and 77777",
      "Between 77777 and 777777"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the factors and product expression were lost in PDF text extraction.",
    hint: "Estimate the product's order of magnitude and compare it with the listed intervals.",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "Between 7 and 77",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "Between 77 and 777",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "Between 777 and 7777",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "Between 7777 and 77777",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "Between 77777 and 777777",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Which expression has the same value as the square root expression shown in the source?",
    options: [
      "4^4",
      "4^8",
      "4^16",
      "8^8",
      "16^4"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the exponent and radical placement in the source expression must be checked directly.",
    hint: "Rewrite the radical as a fractional exponent and simplify.",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "4^4",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "4^8",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "4^16",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "8^8",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "16^4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "The first three pictures in a dot pattern are shown. How many dots are in the fifth picture?",
    options: [
      "72",
      "74",
      "76",
      "78",
      "80"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: infer the pattern from the source illustrations before extending it to the fifth image.",
    hint: "Count the added dots from one picture to the next and identify the growth rule.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-06.png",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "72",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "74",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "76",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "78",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "80",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "A student throws five stones in turn, cracking a window at A,B,C,D,E. Each crack stops at the edge or an existing crack. In what order were the stones thrown?",
    options: [
      "DACBE",
      "ABCDE",
      "BDACE",
      "BCDAE",
      "DCABE"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: crack intersections and endpoints in the source image determine the chronology.",
    hint: "At each later impact, its crack terminates at cracks made earlier.",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "DACBE",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "ABCDE",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "BDACE",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "BCDAE",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "DCABE",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Chocolate packets used to contain five bars and now contain four at the same price. By what percentage has each bar become more expensive?",
    options: [
      "10%",
      "20%",
      "25%",
      "30%",
      "50%"
    ],
    answer: 2,
    explanation: "The price per bar is multiplied by 5/4, an increase of 25%.",
    hint: "Compare the old price per bar with the new price per bar.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "10%",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "20%",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "25%",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "30%",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "50%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "ABCD is a rectangle. The area of quadrilateral ABPD is 4 cm^2 and DP=(1/3)CD. What is the area of rectangle ABCD?",
    options: [
      "5 cm^2",
      "5.5 cm^2",
      "6 cm^2",
      "6.5 cm^2",
      "7 cm^2"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: point P's location and the quadrilateral layout are shown in the source diagram.",
    hint: "Express the quadrilateral area as a fraction of the rectangle using DP/CD.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "5 cm^2",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "5.5 cm^2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "6 cm^2",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "6.5 cm^2",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "7 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "In the unit square 0<=x,y<=1, a point is black exactly when the first decimal digit of both coordinates is odd. What does the resulting region look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: compare the digit condition with the five pictured patterns.",
    hint: "The first decimal digit being odd restricts each coordinate to alternating tenths intervals.",
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
    imageExtra: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-10-extra.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Robert chooses four points so all pairwise distances are different. Which point among A-E must he remove?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: calculate pairwise distances in the source point diagram to identify the forced removal.",
    hint: "Look for repeated distances among the five points and determine which point participates in the unavoidable equality.",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Among ten distinct positive integers, exactly five are divisible by 5 and seven by 7. What is the smallest possible largest number M?",
    options: [
      "105",
      "77",
      "75",
      "63",
      "Another value"
    ],
    answer: 4,
    explanation: "The two groups contain 5+7=12 numbers altogether, but their union has only 10, so at least two numbers must be divisible by both 5 and 7. They are distinct multiples of 35, forcing M≥70. This bound is attained with {5,10,15,35,70} and {7,14,21,28,35,42,70}; their union has 10 numbers and largest member 70.",
    hint: "The two divisibility groups must overlap. How many common multiples of 35 are needed to fit their union into ten numbers?",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "105",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "77",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "75",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "63",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "Another value",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "A quarter circle of radius r and triangle ORP are shown. The two grey regions have equal area. How long is OR?",
    options: [
      "pi*r/2",
      "3r/2",
      "pi*r",
      "2r",
      "pi*r^2/2"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the grey regions and triangle dimensions are specified by the source figure.",
    hint: "Set the circular-sector area minus one region equal to the other grey area.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "pi*r/2",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "3r/2",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "pi*r",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "2r",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "pi*r^2/2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Two lines have equations y=ax+b and y=cx+d as shown. What is certain about ab+cd-(ac+bd)?",
    options: [
      "Negative",
      "Not positive",
      "Positive",
      "Zero",
      "None of these is definite"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: determine signs and relative slopes from the source graph.",
    hint: "Factor the expression as (a-d)(b-c) or compare coefficient signs from the lines.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "Negative",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Not positive",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Positive",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "Zero",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "None of these is definite",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "A ball of wool has diameter 30 cm. After knitting 70 socks, its diameter is 15 cm. How many more socks can be knitted?",
    options: [
      "70",
      "50",
      "30",
      "20",
      "10"
    ],
    answer: 4,
    explanation: "The remaining volume is (15/30)^3=1/8 of the original, so 70 socks used 7/8. The remaining wool makes 10 more socks.",
    hint: "Wool amount is proportional to the ball's volume, which scales as diameter cubed.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "70",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Sixteen kangaroos occupy a 4x4 chessboard. Each move every kangaroo jumps to an adjacent square. What is the maximum number of empty squares after 100 moves?",
    options: [
      "15",
      "14",
      "12",
      "10",
      "8"
    ],
    answer: 1,
    explanation: "Every kangaroo changes checkerboard colour on each jump. After the even number 100 of moves, the eight kangaroos that started on each colour must be back on that same colour. They can all gather on one square of their colour: every starting square is reachable in at most six moves, and extra moves can be made in back-and-forth pairs. Thus only two squares need be occupied, leaving 16−2=14 empty.",
    hint: "Track the checkerboard colour of each kangaroo after an even number of jumps, then see how many squares of each colour must remain occupied.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "12",
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
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "The five-digit number N18NN is divisible by 18. Which statement about digit N is true?",
    options: [
      "Exactly one such N",
      "Exactly two such N",
      "Exactly three such N",
      "No such N",
      "More than three such N"
    ],
    answer: 0,
    explanation: "For divisibility by 2, N must be even. The digit sum is 3N+9, which is divisible by 9 only when N is divisible by 3. The only even digit from 1 through 9 meeting both conditions is 6, so exactly one value of N works.",
    hint: "Use the last digit for divisibility by 2 and the digit sum for divisibility by 9.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "Exactly one such N",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "Exactly two such N",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "Exactly three such N",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "No such N",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "More than three such N",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "A black semicircle has area 12 cm^2. What is the area of the large quarter circle shown?",
    options: [
      "42 cm^2",
      "36 cm^2",
      "32 cm^2",
      "30 cm^2",
      "25 cm^2"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: relate the semicircle and quarter-circle radii using the source diagram's tangency.",
    hint: "Use the semicircle area to find its radius, then compare it with the quarter-circle radius.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "42 cm^2",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "36 cm^2",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "32 cm^2",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "30 cm^2",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "25 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Three square Martians and three round Jupiterians sit around a table. Exactly one has a key. Each planet's inhabitants either all tell the truth or all lie. Asked whether a neighbour has the key, they answer as shown. Who has the key?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the seating arrangement, species, and yes/no responses are in the source diagram.",
    hint: "For each possible key holder, determine which speakers tell truth and whether their planet's pattern is consistent.",
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
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "B and C lie on the diameter AD of a semicircle, and E,F,G,H lie on its arc. How many triangles can be formed from these eight points?",
    options: [
      "15",
      "50",
      "51",
      "52",
      "54"
    ],
    answer: 3,
    explanation: "There are C(8,3)=56 triples. Four triples from the collinear set A,B,C,D are not triangles, leaving 52.",
    hint: "Count all triples and subtract the collinear triples on diameter AD.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "51",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "52",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "54",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Four non-overlapping discs have centres at (0,0),(1,0),(3,0),(6,0). What is the largest possible sum of their radii?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "There is no upper limit"
    ],
    answer: 1,
    explanation: "For the first two discs, r1+r2≤1; for the last two, r3+r4≤3. Hence the total is at most 4. The bound is attainable, for example with radii 0.9, 0.1, 0.1, and 2.9: every pair of radii sums to no more than the distance between their centres, and the total is 4.",
    hint: "Bound the sums for the first pair and the last pair using their centre distances.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "3",
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
        text: "5",
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
        text: "There is no upper limit",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "A map shows four regions of points closest to four schools. School D is at (9,1). What are the coordinates of school A?",
    options: [
      "(0,4)",
      "(1,4)",
      "(1,5)",
      "(1,6)",
      "(2,4)"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the Voronoi boundaries in the source map determine the coordinates.",
    hint: "Use perpendicular bisectors between neighbouring schools to infer the unknown point.",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "(0,4)",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "(1,4)",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "(1,5)",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "(1,6)",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "(2,4)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "What is the smallest positive integer N such that the expression involving 2, 3, and N shown in the source is an integer?",
    options: [
      "2^12x3^6",
      "2^6x3^4",
      "2^4x3^5x5",
      "2^14x3^4",
      "Another number"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the radical/fraction expression and exponent choices were not fully recovered from text extraction.",
    hint: "Use prime-factor exponents to make the expression's denominator divide its numerator.",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "2^12x3^6",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "2^6x3^4",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "2^4x3^5x5",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "2^14x3^4",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "Another number",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A two-column table has 51 rows. The first row is 5 and 3. Each next row contains the sum and positive difference of the previous row's entries. What is in the bottom row?",
    options: [
      "5 and 3",
      "2^25 and 3^25",
      "2^50 and 3^50",
      "5x2^25 and 3x2^25",
      "Other numbers"
    ],
    answer: 3,
    explanation: "For a pair (a,b) with a>b, the next two rows are (a+b,a−b) and then (2a,2b). Thus every two rows double both entries. There are 50 transitions from the first row to the 51st, or 25 such pairs, so the bottom row is (5·2^25, 3·2^25), choice D.",
    hint: "Apply the sum-and-difference rule twice and simplify the result; then repeat that two-row pattern.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "5 and 3",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2^25 and 3^25",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "2^50 and 3^50",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "5x2^25 and 3x2^25",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "Other numbers",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A two-digit number loses its ones digit. By what percentage is its value reduced? Which listed value is closest to the largest possible percentage?",
    options: [
      "10",
      "50",
      "90",
      "95",
      "99"
    ],
    answer: 3,
    explanation: "The largest reduction occurs for 19: removing 9 leaves 1, a reduction of 18/19, about 94.7%, closest to 95%.",
    hint: "For a number 10a+b, the reduction fraction is (9a+b)/(10a+b); maximize over digits.",
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
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "90",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "95",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "99",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Julia cycles at 18 km/h and Paula at 12 km/h. They start together. After 20 minutes Julia turns back; when they meet, both ride home. How many minutes later does Paula arrive?",
    options: [
      "1",
      "6",
      "8",
      "10",
      "15"
    ],
    answer: 2,
    explanation: "Julia is 6 km ahead at the turn. They close the 2 km gap at 30 km/h in 4 minutes, meeting 4.8 km from home. Return times are 16 and 24 minutes, a difference of 8.",
    hint: "Find the meeting point using relative speed, then compare their return travel times.",
    sourcePage: 4,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "In a regular hexagon, P lies on BC. The areas of triangles PEF and PDE are 64 and 42. What is the area of triangle APF?",
    options: [
      "53",
      "54",
      "56",
      "60",
      "64"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: use the regular hexagon coordinates and given triangle areas to determine P's location.",
    hint: "Place the hexagon in coordinates and express each triangle area as a linear function of P's position.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "53",
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
        text: "56",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "60",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "64",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "A regular octagon has side length 1. Circular arcs of radius 1 centred at its vertices bound the dark area. What is its perimeter?",
    options: [
      "pi",
      "2pi/3",
      "8pi/9",
      "4pi/5",
      "3pi/4"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: determine how many radius-1 arcs and what central angles make up the dark boundary.",
    hint: "Use the 135-degree interior angle of the regular octagon to find each arc angle.",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "pi",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "2pi/3",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "8pi/9",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "4pi/5",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "3pi/4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2025/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "A 7x10 table has every 3x4 and 4x3 rectangle sum to zero. Two entries are shown. What is the sum of all entries?",
    options: [
      "45",
      "5",
      "-5",
      "-45",
      "It cannot be determined"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: use the local zero-sum rectangle equations and the two shown entries in the source grid.",
    hint: "Subtract sums of overlapping rectangles to derive relations between neighbouring cells.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "45",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "-5",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "-45",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "Three bags contain balls with labels 1 white/2 black, 2 white/1 black, and 3 white. All labels are wrong. Balls are drawn and shown one at a time. What is the minimum number needed to identify all correct labels?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: use the all-labels-wrong condition and possible draws to establish the guaranteed identification count.",
    hint: "Start by drawing from the bag labelled '3 white', which cannot actually contain three white balls.",
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
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2025Student: Section[] = [
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

export const edition2025Student: QuestionSet = {
  id: "student-2025",
  year: 2025,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "20 March 2025",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2025/2025_Student.pdf",
  questions: questions2025Student,
  sections: sections2025Student,
};
