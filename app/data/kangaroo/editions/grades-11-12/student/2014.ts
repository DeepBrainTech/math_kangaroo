import type { Question, QuestionSet, Section } from "../../../types";

const questions2014Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Removing some unit cubes from a 5x5x5 cube produces the pictured solid, made of equal-height pillars on a common base. How many small cubes were removed?",
    options: [
      "56",
      "60",
      "64",
      "68",
      "80"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: count the remaining cubes by pillar height using the source solid diagram.",
    hint: "Count the cubes in the common base and each pillar, then subtract from 125.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "56",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "60",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "64",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "68",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "80",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Today is Carmen, Gerda, and Sabine's birthday, and their ages sum to 44. What will their ages sum to the next time the sum is a two-digit number with equal digits?",
    options: [
      "55",
      "66",
      "77",
      "88",
      "99"
    ],
    answer: 2,
    explanation: "Their sum increases by 3 each year. The next repeated-digit total reachable from 44 is 77, after 11 years.",
    hint: "Repeated-digit totals increase by 11; check which difference from 44 is divisible by 3.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "55",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "66",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "77",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "88",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "99",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "What is the value of the power expression in a, given the relation between a and k shown in the source?",
    options: [
      "1/8",
      "8",
      "-8",
      "6",
      "1/6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the exponent and defining relation were not reliably recovered from PDF text; verify the expression from the source.",
    hint: "Substitute the stated value of k into the exponent and simplify the power.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "1/8",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "-8",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "1/6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Three differently sized baskets contain 48 balls in total. The smallest and largest together contain twice as many as the middle basket, and the smallest contains half as many as the middle basket. How many balls are in the largest basket?",
    options: [
      "16",
      "20",
      "24",
      "30",
      "32"
    ],
    answer: 2,
    explanation: "Let the middle basket contain m. The small basket contains m/2 and the large one 3m/2. Since the total is 3m=48, m=16 and the large basket has 24.",
    hint: "Express the small and large basket counts in terms of the middle basket count.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "16",
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
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "32",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Evaluate the fraction (2^2014-2^2013)/(2^2013-2^2012).",
    options: [
      "2^2011",
      "2^2012",
      "2^2013",
      "1",
      "2"
    ],
    answer: 4,
    explanation: "Factor the numerator as 2^2013(2-1) and the denominator as 2^2012(2-1); the quotient is 2.",
    hint: "Factor out the smaller power of 2 from the numerator and denominator.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "2^2011",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "2^2012",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "2^2013",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "1",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "For which expression is b+1 not a factor?",
    options: [
      "2b+2",
      "b^2-1",
      "b^2+b",
      "-1-b",
      "b^2+1"
    ],
    answer: 4,
    explanation: "Substituting b=-1 makes b+1 zero. The first four expressions then vanish, but b^2+1 equals 2, so it is not divisible by b+1.",
    hint: "Use the factor theorem: a polynomial is divisible by b+1 if its value at b=-1 is zero.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2b+2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "b^2-1",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "b^2+b",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "-1-b",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "b^2+1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "How many digits are in (2^22)^5 x (5^55)^2?",
    options: [
      "22",
      "55",
      "77",
      "110",
      "111"
    ],
    answer: 3,
    explanation: "The expression is 2^110 x 5^110=10^110, which is a 1 followed by 110 zeroes, or 111 digits.",
    hint: "Rewrite both powers with equal exponents of 2 and 5, then count the digits of a power of 10.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "22",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "55",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "77",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "110",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "111",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Fritz's secret email address is known by four friends, and he receives eight emails. Which statement must be true?",
    options: [
      "Exactly two from each friend",
      "He cannot receive all eight from one friend",
      "At least one from each friend",
      "At least two from one friend",
      "At least two from at least two friends"
    ],
    answer: 3,
    explanation: "By the pigeonhole principle, placing eight emails among four friends forces some friend to send at least two.",
    hint: "Assume each friend sent at most one and compare the maximum total with eight.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "Exactly two from each friend",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "He cannot receive all eight from one friend",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "At least one from each friend",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "At least two from one friend",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "At least two from at least two friends",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "The curved surfaces of two identical cylinders are cut open and joined to form the curved surface of one larger cylinder. How does the resulting cylinder's volume compare with one original cylinder?",
    options: [
      "2 times",
      "3 times",
      "pi times",
      "4 times",
      "8 times"
    ],
    answer: 3,
    explanation: "Joining the two curved surfaces doubles the circumference while keeping the height fixed. The radius doubles, so the volume is four times as large.",
    hint: "Doubling a cylinder's circumference doubles its radius; compare the resulting volumes.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "2 times",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "3 times",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "pi times",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "4 times",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "8 times",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "In 2014 all digits are different, and the last digit is greater than the sum of the other three. How many years earlier was this last true?",
    options: [
      "5",
      "215",
      "305",
      "395",
      "485"
    ],
    answer: 2,
    explanation: "The latest earlier year that can work is in the 1700s: its first two digits sum to 8, so the final digit must be 9 and the tens digit must be 0. The year 1709 has four distinct digits and 9>1+7+0; later years fail this inequality. The difference is 2014−1709=305 years.",
    hint: "Check nearby years first, then use the thousands and hundreds digits to rule out later centuries; the last digit must exceed the first three digits' sum.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "215",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "305",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "395",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "485",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "A cuboid has side lengths a<b<c. Increasing one side length by 5 cm gives the largest volume increase when which side is increased?",
    options: [
      "a",
      "b",
      "c",
      "It depends on the values",
      "All increases are equal"
    ],
    answer: 0,
    explanation: "Increasing a adds 5bc to the volume; increasing b adds 5ac, and increasing c adds 5ab. Since c>b>a, bc is largest.",
    hint: "Write each volume increase as 5 times the product of the other two side lengths.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "It depends on the values",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "All increases are equal",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Four teams play each other once. A finishes with 7 points and B and C with 4 points each. How many points does team D have? A win is 3 points, a draw gives each team 1 point, and a loss gives 0.",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "A's 7 points must come from two wins and one draw. Suppose the draw is with B; then A beat C and D, so B and C need 3 and 4 points from their other games. This forces B to beat D, C to beat B, and C and D to draw. D earns 1 point.",
    hint: "Start with A's 7 points: it must have two wins and one draw. Then check the remaining three matches against B's and C's totals.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Two concentric circles have radii in the ratio 1:3. AC is a diameter of the larger circle, and chord BC is tangent to the smaller circle. If AB=12, what is the larger radius?",
    options: [
      "13",
      "18",
      "21",
      "24",
      "26"
    ],
    answer: 1,
    explanation: "Let the larger radius be R. Chord BC is R/3 from the centre, so BC=2√(R²−(R/3)²)=4√2R/3. Since AC is a diameter, triangle ABC is right-angled at B. Thus 12²+(4√2R/3)²=(2R)², which gives R=18.",
    hint: "Use the smaller circle's radius to find the perpendicular distance from the centre to chord BC, then apply Pythagoras in triangle ABC.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "26",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "How many integer triples a>b>c>1 satisfy 1/a+1/b+1/c>1?",
    options: [
      "None",
      "1",
      "2",
      "3",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "The only triples are (4,3,2) and (5,3,2); the next largest possibility, (6,3,2), sums to exactly 1.",
    hint: "Start with the smallest possible c and bound the reciprocal sum as a,b,c increase.",
    sourcePage: 2,
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
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Six weeks equal n! seconds. What is n?",
    options: [
      "6",
      "7",
      "8",
      "10",
      "12"
    ],
    answer: 3,
    explanation: "Six weeks contain 42x24x3600=3,628,800 seconds, which is 10!.",
    hint: "Convert six weeks to seconds and compare with factorial values.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "The vertices of a die are labelled 1 through 8 so the four labels on every face have the same sum. The labels 1, 4, and 6 are shown. What is x?",
    options: [
      "2",
      "3",
      "5",
      "7",
      "8"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: use the three visible labels and cube vertex layout in the source diagram to identify x.",
    hint: "Write the equal-sum equations for opposite and adjacent faces of the cube.",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "A soft cheese is 24% fat by total weight and 64% fat in its dry substance. What percentage of the cheese is water?",
    options: [
      "88%",
      "62.5%",
      "49%",
      "42%",
      "37.5%"
    ],
    answer: 1,
    explanation: "The dry matter is 24/64=37.5% of the total, so the water content is 62.5%.",
    hint: "Find the dry-matter fraction from the total fat fraction divided by the fat fraction of dry matter.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "88%",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "62.5%",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "49%",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "42%",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "37.5%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "The function f(x)=ax+b satisfies f(f(f(1)))=29 and f(f(f(0)))=2. What is a?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The difference f^3(1)-f^3(0)=a^3 equals 27, so a=3.",
    hint: "For an affine function, the difference of its third iterate at inputs 1 and 0 is a^3.",
    sourcePage: 2,
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
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Among 10 distinct positive integers, exactly 5 are divisible by 5 and exactly 7 are divisible by 7. What is the smallest possible value of their largest number M?",
    options: [
      "105",
      "77",
      "75",
      "63",
      "Another value"
    ],
    answer: 4,
    explanation: "For M<70, at most one number is divisible by both 5 and 7. The five multiples of 5 and seven multiples of 7 would then require at least 5+7−1=11 distinct numbers. At M=70, the sets {5,10,15,35,70} and {7,14,21,28,35,42,70} have union of size 10 and meet both counts. The minimum is 70.",
    hint: "Count the overlap between the required multiples of 5 and 7; below 70 there is only one common multiple.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "105",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "77",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "75",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "63",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "Another value",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "PQRS is a rectangle and T is the midpoint of RS. QT is perpendicular to diagonal PR. What is the ratio PQ:QR?",
    options: [
      "2:1",
      "3:1",
      "3:2",
      "2:1",
      "5:4"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: confirm the vertex order and diagram labels; the extracted choices contain a duplicated ratio.",
    hint: "Place the rectangle on coordinate axes and use the perpendicularity condition at T.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "2:1",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "3:1",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "3:2",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "2:1",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "5:4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Different nonzero real numbers a,b,c and a positive integer n satisfy the two same-sign expressions shown in the source. Which statement about a,b,c is definitely true?",
    options: [
      "a>0",
      "b>0",
      "c>0",
      "a<0",
      "b<0"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the powers and signs in the two expressions are not reliably represented in extracted text.",
    hint: "Compare the parity of each exponent and the signs of the two products.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "a>0",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "b>0",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "c>0",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "a<0",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "b<0",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Line g passes through vertex A of rectangle ABCD. The perpendicular distances from C and D to g are 2 and 6, and AD is twice AB. Find AD.",
    options: [
      "10",
      "12",
      "14",
      "16",
      "4sqrt(3)"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the source diagram fixes the orientation and which sides correspond to AD and AB; verify the keyed value 10.",
    hint: "Use the area of the rectangle expressed using its sides and the two perpendicular distances to line g.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "4sqrt(3)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Nine Greatkangs are black or white. Three meet at random, and the probability that none is white is 2/3. How many are black?",
    options: [
      "1",
      "3",
      "5",
      "6",
      "8"
    ],
    answer: 4,
    explanation: "If B are black, C(B,3)/C(9,3)=2/3. Since C(8,3)=56 and C(9,3)=84, B=8.",
    hint: "Express the probability as a ratio of combinations of black kangaroos to all triples.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A straight line is tangent to two touching circles of radius 1. A square has one side on the line and one vertex on each circle. What is the square's side length?",
    options: [
      "2/5",
      "1/4",
      "1/2",
      "1/5",
      "sqrt(2)/2"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: verify the square placement and exact answer choices from the source geometry diagram.",
    hint: "Use the distances from the tangent line to the circle centres and the square's diagonal relation.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "2/5",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "1/4",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "1/2",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "1/5",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "sqrt(2)/2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "Thomas chooses distinct positive integers no greater than 100. Their product must not be divisible by 54. What is the largest number he can choose?",
    options: [
      "8",
      "17",
      "68",
      "69",
      "90"
    ],
    answer: 3,
    explanation: "Choose no number divisible by 9, and at most two numbers divisible by 3 but not 9. The remaining 69 numbers have product with 3-adic exponent at most 2, so it is not divisible by 54.",
    hint: "The product must have fewer than three factors of 3; maximize the selection by keeping numbers with no factor 3 and at most two with exactly one factor 3.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "17",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "68",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "69",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "90",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Two regular polygons of side length 1 lie on opposite sides of common edge AB. One is a 15-gon and the other an n-gon. For which n is the distance between their vertices C1 and C2 equal to 1?",
    options: [
      "10",
      "12",
      "15",
      "16",
      "18"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: derive the distance from the central angles of both regular polygons and verify the keyed n=10.",
    hint: "Express each C vertex relative to AB using the polygon's circumradius and central angle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "The displayed chain of equations relates positive integers k,m,n. How many different values can m take?",
    options: [
      "None",
      "1",
      "2",
      "3",
      "Infinitely many"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the exponent and fraction structure in the equation chain was corrupted by text extraction.",
    hint: "Rewrite each equality in prime-factor form and compare the possible exponents.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "None",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "A closed polygon has as vertices the midpoints of the edges of a die. What is the sum of its interior angles?",
    options: [
      "720 degrees",
      "1080 degrees",
      "1200 degrees",
      "1440 degrees",
      "1800 degrees"
    ],
    answer: 3,
    explanation: "The polygon has 8 vertices, so its interior-angle sum is (8-2)180=1080 degrees.",
    hint: "Count the polygon's vertices, then use the interior-angle sum formula.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "720 degrees",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "1080 degrees",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "1200 degrees",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "1440 degrees",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "1800 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2014/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "A mapping f:Z->Z satisfies f(4)=6 and x f(x)=(x-3)f(x+1). What is f(4)f(7)f(10)...f(2011)f(2014)?",
    options: [
      "2013",
      "2014",
      "2013x2014",
      "2013!",
      "2014!"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: verify the recurrence indexing and the product's endpoint against the source before confirming the factorial value.",
    hint: "Rearrange the recurrence to express f(x+1) in terms of f(x), then telescope over the required indices.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "2013",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "2014",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "2013x2014",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "2013!",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "2014!",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A magical island has lions, wolves, and goats with the eating and transformation rules shown in the paper. Starting with 17 goats, 55 wolves, and 6 lions, what is the maximum number of animals remaining when no further eating is possible?",
    options: [
      "1",
      "6",
      "17",
      "23",
      "35"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: prove the maximum terminal population using the exact transformations and allowed eating choices.",
    hint: "Search for a conserved quantity or a monotone measure under each permitted eating event.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "23",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "35",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2014Student: Section[] = [
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

export const edition2014Student: QuestionSet = {
  id: "student-2014",
  year: 2014,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "20 March 2014",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2014/2014_Student.pdf",
  questions: questions2014Student,
  sections: sections2014Student,
};
