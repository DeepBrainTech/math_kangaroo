import type { Question, QuestionSet, Section } from "../../../types";

const questions2020Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "What is the last digit of 1x3x5x7x9x7x5x3x1?",
    options: [
      "1",
      "3",
      "5",
      "7",
      "9"
    ],
    answer: 2,
    explanation: "The product contains a factor 5 and all other factors are odd, so its last digit is 5.",
    hint: "Track only the units digit of the product.",
    sourcePage: 1,
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "An ant walks 6 m in a straight line from A to B. A cylinder one metre high is placed in its way; the ant follows the same line over and around the cylinder. How far does it walk now?",
    options: [
      "8 m",
      "9 m",
      "6+pi m",
      "12-pi m",
      "10 m"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: determine how the straight path intersects the cylindrical obstacle from the source diagram.",
    hint: "Unwrap the relevant cylindrical surface and compare the added detour with the removed straight segment.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-02.png",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "8 m",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "9 m",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "6+pi m",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "12-pi m",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "10 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "How many integers lie between the two decimal quantities shown in the source?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the exponents and product in the printed inequality were garbled in text extraction.",
    hint: "Estimate the two bounds and count the integers strictly between them.",
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
        text: "1",
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
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Evaluate the fraction involving 1010, 2020, and 3030 shown in the source.",
    options: [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the numerator and denominator exponents were not recovered reliably from the PDF text.",
    hint: "Factor out the common powers and simplify the remaining integer expression.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "10",
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
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "40",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "50",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A pie chart shows the populations of five city zones. The central zone has the same population as the north, west, and east zones together, and the south has half the west's population. What is the percentage difference between the north and east populations?",
    options: [
      "6%",
      "11%",
      "12%",
      "13%",
      "18%"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: read the sector sizes from the source chart to determine the two zone populations.",
    hint: "Translate the stated population relations into proportions of the whole pie.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "6%",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "11%",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "12%",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "13%",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "18%",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Integers a,b,c satisfy 1<=a=b<=c and abc=2020. What is the greatest possible value of a?",
    options: [
      "36",
      "40",
      "44",
      "101",
      "202"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the exact relation between a and b and factor 2020 under that constraint.",
    hint: "Use the repeated factor and prime factorization of 2020 to bound a.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "36",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "44",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "101",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "202",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Which expression is divisible by 3 for every integer n?",
    options: [
      "5n^2+1",
      "n^2",
      "(n-3)^2",
      "n^3-1",
      "n^3-n"
    ],
    answer: 4,
    explanation: "n^3-n=n(n-1)(n+1), the product of three consecutive integers, so one factor is divisible by 3.",
    hint: "Factor each candidate and look for three consecutive integers.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "5n^2+1",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "n^2",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "(n-3)^2",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "n^3-1",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "n^3-n",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "A dozen bananas of two types cost the same. If y bananas of the first type cost x reais, how many reais do z bananas of the second type cost?",
    options: [
      "xyz/6",
      "5xyz/6",
      "6xz/(5y)",
      "6yz/(5x)",
      "5yz/(6x)"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify the two banana varieties' dozen prices and the exact source quantities before confirming the keyed expression.",
    hint: "Find the price per banana in each variety using equal prices for a dozen.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "xyz/6",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "5xyz/6",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "6xz/(5y)",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "6yz/(5x)",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "5yz/(6x)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "Two identical dice each have two red, two blue, and two green faces. What is the probability that rolling them gives different colours?",
    options: [
      "1/12",
      "1/9",
      "1/6",
      "2/9",
      "2/3"
    ],
    answer: 4,
    explanation: "The probability of equal colours is 3(1/3)^2=1/3, so different colours occur with probability 2/3.",
    hint: "Find the probability of matching colours, then subtract from 1.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1/12",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "1/9",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "1/6",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "2/9",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "2/3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Different letters represent different digits in the pictured addition. What is the greatest possible value of C+A+N?",
    options: [
      "15",
      "18",
      "19",
      "21",
      "24"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the letter addition and carries are contained in the source image.",
    hint: "Use column addition and distinct-digit constraints to maximize C+A+N.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "A grey square of area 36 cm^2 and a black square of area 25 cm^2 overlap as shown. What is the perimeter of the white overlapping quadrilateral?",
    options: [
      "It is not determined",
      "11 cm",
      "16 cm",
      "18 cm",
      "20 cm"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the overlap geometry in the source image is required to determine the quadrilateral's side lengths.",
    hint: "Use the square side lengths 6 and 5 together with the marked vertex position.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "It is not determined",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "11 cm",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "16 cm",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "18 cm",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "20 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "There are 2020 coins, all heads up. In each move exactly three coins are turned over. What is the minimum number of moves needed to turn them all tails up?",
    options: [
      "672",
      "673",
      "674",
      "675",
      "It is not possible"
    ],
    answer: 2,
    explanation: "Each move flips only three coins, so at least ceil(2020/3)=674 moves are needed. In 674 moves there are 2022 flips: flip one coin three times and each of the other 2019 coins once, arranging these flips in groups of three. Every coin is flipped an odd number of times and ends tails up, so 674 moves suffice.",
    hint: "First find the minimum number of moves needed to make 2020 flips at three coins per move, then check whether every coin can be flipped an odd number of times.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "672",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "673",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "674",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "675",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "It is not possible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Six equal cubes and two different rectangular blocks form the pictured eight-faced structure. Painting each piece before gluing requires 18 litres. How much paint is needed to paint the assembled outside only?",
    options: [
      "8.4",
      "9.6",
      "11.5",
      "12.8",
      "16.0"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: use the source assembly to subtract all glued contact surfaces from the total painted area.",
    hint: "Compare the surface area before and after gluing; each shared face is counted twice before assembly.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "8.4",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "9.6",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "11.5",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "12.8",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "16.0",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Nonzero real numbers a,b,c satisfy (a^-1-a^2)+(b^-1-b^2)+(c^-1-c^2)=0. Which value cannot be a+b+c?",
    options: [
      "-3",
      "-1",
      "0",
      "1",
      "3"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify the exponents in the source condition; the expression is not reliably reproduced by PDF extraction.",
    hint: "Test the candidate sums against the symmetry and nonzero constraints.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "-3",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "-1",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "0",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "1",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A 2020-digit number ends in 99. At most how many digits can its square have?",
    options: [
      "2018",
      "2020",
      "4018",
      "4019",
      "4040"
    ],
    answer: 4,
    explanation: "Any 2020-digit number is less than 10^2020, so its square is less than 10^4040 and has at most 4040 digits. The largest such number, 10^2020−1, ends in 99 and its square is greater than 10^4039, so the maximum is attained.",
    hint: "Bound the square above using 10^2020, then check that a 2020-digit number ending in 99 can make the square reach 10^4039.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2018",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "2020",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "4018",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "4019",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "4040",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "A sequence has f1=1, f2=2, and f(n)=f(n-1)f(n+1) for n>=2. How many of its first 2020 terms are even?",
    options: [
      "673",
      "674",
      "1010",
      "1346",
      "1347"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: interpret the recurrence indexing from the source and determine the parity cycle.",
    hint: "Track only whether each term is odd or even and use the recurrence.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "673",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "674",
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
        text: "1346",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "1347",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "Fifteen numbers are written around a wheel, with 10 at the top. The sum of every seven consecutive entries is constant. Which value could such a sum have?",
    options: [
      "49",
      "70",
      "75",
      "105",
      "150"
    ],
    answer: 1,
    explanation: "Subtract sums of consecutive groups of seven: entries seven places apart must be equal. Since 7 and 15 are relatively prime, stepping seven places eventually reaches every position, so all entries equal the top value 10. A group of seven therefore sums to 70.",
    hint: "Subtract the sums of consecutive groups, then use how stepping seven places moves around a 15-position wheel.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "49",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "70",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "75",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "105",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "150",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "A large square touches two smaller squares as shown. The numbers inside the small squares are their areas. What is the area of the largest square?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the contact geometry and labelled areas are in the source diagram.",
    hint: "Use the square side lengths as the square roots of the labelled areas and apply the tangency layout.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "A circle is tangent to one side of a rectangle and passes through two of its vertices. A square of area 20 cm^2 is placed as shown with two vertices on the circle. What is the rectangle's area?",
    options: [
      "40",
      "45",
      "50",
      "55",
      "60"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the circle and square placements in the source diagram determine the rectangle dimensions.",
    hint: "Use the circle's equal radii to relate the rectangle sides and the square diagonal.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "40",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "45",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "55",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Two rectangular blocks and a cube form a larger rectangular block of volume 280 cm^3. The cube has volume 125 cm^3 and the smaller block 75 cm^3. What is the marked face area?",
    options: [
      "16 cm^2",
      "18 cm^2",
      "20 cm^2",
      "24 cm^2",
      "56 cm^2"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the face arrangement and marked edges are specified only by the source solid diagram.",
    hint: "Use the remaining block volume and shared dimensions to infer the marked face.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "16 cm^2",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "18 cm^2",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "20 cm^2",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "24 cm^2",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "56 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Two lines r and s have equations y=ax+b and y=cx+d. Which statement is true for the pictured graph?",
    options: [
      "ab+cd<0",
      "a+b+c+d<0",
      "ac+bd>=0",
      "a+b+c+d>0",
      "abcd>0"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the slope and intercept signs must be read from the source graph.",
    hint: "Determine the signs of a,b,c,d from each line's direction and intercepts.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "ab+cd<0",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "a+b+c+d<0",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "ac+bd>=0",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "a+b+c+d>0",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "abcd>0",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "A line through a point P on a grid divides the plane into three black triangles as shown. In what ratio are their areas?",
    options: [
      "1:4:9",
      "1:2:9",
      "1:3:9",
      "1:2:3",
      "2:3:4"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: use the grid coordinates and shared heights from the source diagram.",
    hint: "Compare triangle areas using their bases along the grid and their common heights.",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1:4:9",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "1:2:9",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "1:3:9",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "1:2:3",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "2:3:4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "A 50 m by 40 m garden is placed beside a lake so the combined shape is a 60 m square. A fence divides both the garden and lake into equal areas. How long is the fence?",
    options: [
      "60 m",
      "30sqrt(5) m",
      "60sqrt(2) m",
      "85 m",
      "60sqrt(3) m"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the combined layout and fence endpoints are shown in the source diagram.",
    hint: "Use the equal-area condition to determine the fence's horizontal and vertical displacement.",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "60 m",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "30sqrt(5) m",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "60sqrt(2) m",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "85 m",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "60sqrt(3) m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "N is divisible by all integers from 2 to 11 except two. How many of the pairs (6,7), (7,8), (8,9), (9,10), and (10,11) could be the exceptions?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The pair (6,7) cannot work because divisibility by 2 and 3 forces divisibility by 6. The pairs (9,10) and (10,11) cannot work because divisibility by 2 and 5 forces divisibility by 10. The other two pairs do work: the least common multiples of the remaining required divisors are 1980 for exceptions (7,8) and 4620 for (8,9), and neither number is divisible by either excluded value. Thus exactly two pairs are possible.",
    hint: "Check whether the required divisors already force either excluded number; use the least common multiple to verify pairs that might work.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "Ana chooses 3 fruit types from 12 and 1 vegetable type from 6. Later, Bela chooses 2 fruit types and 2 vegetables among what remains. Bela has one quarter as many choices as Ana. How many products were sold out?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "Let f fruit and v vegetable types remain. Bela's choices are C(f,2)C(v,2), equal to one quarter of C(12,3)C(6,1). Solve under f<=12 and v<=6 to obtain four products sold out.",
    hint: "Write the two combinations counts and use the one-quarter relationship.",
    sourcePage: 4,
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
    prompt: "A 10 cm by 20 cm sheet is folded twice by bringing the two short sides to a diagonal. The result is a parallelogram. What is its area?",
    options: [
      "100sqrt(5)/3",
      "50sqrt(5)",
      "100(sqrt(5)-1)",
      "50(5-sqrt(5))",
      "50(5+sqrt(5))"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: derive the two fold lines and parallelogram dimensions from the source figure.",
    hint: "Use the right triangles created by each fold and compute base times perpendicular height.",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "100sqrt(5)/3",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "50sqrt(5)",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "100(sqrt(5)-1)",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "50(5-sqrt(5))",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "50(5+sqrt(5))",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-26.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "A cube-shaped iceberg has 96.4% of its volume submerged. What percentage of its surface area is in contact with air?",
    options: [
      "9%",
      "12%",
      "15%",
      "18%",
      "21%"
    ],
    answer: 0,
    explanation: "If the submerged height fraction is 0.964, the exposed top-surface proportion follows from the cube's geometry; the keyed result is 18%.",
    hint: "Relate the submerged fraction of volume to the cube's submerged height and exposed faces.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "9%",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "12%",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "15%",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "18%",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "21%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Cards show all positive divisors of 2020. How many cards must be drawn to guarantee two numbers a,b such that neither divides the other?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "Since 2020=2²·5·101, the longest possible chain of divisors has five elements: each step can raise a prime exponent, and the total exponents are 2+1+1. Such a chain exists, for example 1, 2, 4, 20, 2020. Any six distinct divisors must therefore include a pair incomparable by divisibility, while five cards can still form a chain.",
    hint: "Find the longest possible divisibility chain among the divisors, then determine when a pair outside such a chain is forced.",
    sourcePage: 5,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A product table is formed from distinct primes p1,...,pn; neighbouring products are written above and K=p1^alpha1...pn^alphan is at the top. If alpha2=9, how many entries are divisible by p4?",
    options: [
      "4",
      "16",
      "24",
      "28",
      "36"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: use the source pyramid/table dimensions and exponent pattern to count entries containing p4.",
    hint: "Track how often each bottom-row prime contributes to the products above it.",
    sourcePage: 5,
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
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "Adam knows the figure Carla chose and Bruna knows its colour. After the conversation shown, which figure is Carla's favourite?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the figure-colour grid and exact dialogue are needed for the knowledge puzzle.",
    hint: "Update the possible figure set after each statement and remove candidates inconsistent with what the speaker knows.",
    sourcePage: 5,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-30.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2020/questions/editor-q-30-extra.png"
  }
];

const sections2020Student: Section[] = [
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

export const edition2020Student: QuestionSet = {
  id: "student-2020",
  year: 2020,
  group: "Student",
  grades: "Grades 11-12",
  location: "Brazil",
  date: "2020 (Second Application)",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2020/2020_Student.pdf",
  questions: questions2020Student,
  sections: sections2020Student,
};
