import type { Question, QuestionSet, Section } from "../../../types";

const questions2013Junior: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the numbers is not a factor of 200013-2013?",
    options: [
      "2",
      "3",
      "5",
      "7",
      "11"
    ],
    answer: 3,
    explanation: "200013-2013=198000. It is divisible by 2, 3, 5, and 11, but not by 7.",
    hint: "Evaluate the difference and test divisibility by each candidate.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2",
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
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Maria draws one of the shown figures on each of six equal squares of paper. How many figures have the same perimeter as the plain square?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The plain square has 16 unit edges around its boundary. Counting exposed unit edges gives the same perimeter for figures A, D, E, and F, so 4 figures match.",
    hint: "Count only the unit edges on each figure's boundary; edges shared by two shaded squares are inside, not part of the perimeter.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-02.png",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Mrs. Maisl buys four pieces of corn on the cob for each of four family members and receives the discount shown. How much does she pay?",
    options: [
      "0.80 euros",
      "1.20 euros",
      "2.80 euros",
      "3.20 euros",
      "80 euros"
    ],
    answer: 2,
    explanation: "She buys 16 cobs. Every sixth is free, so she pays for 14 at 20 cents each: 2.80 euros.",
    hint: "Apply the every-sixth-free offer to 16 cobs.",
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-03.png",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "0.80 euros",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "1.20 euros",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "2.80 euros",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "3.20 euros",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "80 euros",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "The product of three numbers chosen from 2, 4, 16, 25, 50, and 125 is 1000. What is their sum?",
    options: [
      "70",
      "77",
      "131",
      "143",
      "177"
    ],
    answer: 2,
    explanation: "The numbers 2, 4, and 125 have product 1000 and sum 131.",
    hint: "Factor 1000 and select three values from the list whose product matches.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "70",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "77",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "131",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "143",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "177",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Six points are marked on a unit-square grid. Three form a triangle of least area. What is that area?",
    options: [
      "1/2",
      "1/3",
      "1/4",
      "1",
      "2"
    ],
    answer: 0,
    explanation: "The two vertically adjacent points on the left form a unit base. Using the point one grid unit to their right gives height 1, so the triangle's area is (1×1)/2=1/2. Any triangle with grid-point vertices has area at least 1/2, since its doubled area is a nonzero integer.",
    hint: "Look for two points one unit apart on a grid line, then use a third point one unit from that line.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "1/4",
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
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Adding 4^15 and 8^10 gives a power of two. Determine that number.",
    options: [
      "2^10",
      "2^15",
      "2^20",
      "2^30",
      "2^31"
    ],
    answer: 4,
    explanation: "4^15=2^30 and 8^10=2^30, so their sum is 2^31.",
    hint: "Rewrite both powers using base 2.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2^10",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "2^15",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "2^20",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "2^30",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "2^31",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "A cube is coloured as if made from four white and four black cubes, with no two cubes of the same colour adjacent. Which net could form the coloured cube?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "When folded, net E gives the 2×2×2 checkerboard: every pair of small cubes sharing a face has opposite colours. The other nets fail this adjacency check.",
    hint: "Fold each net and track the two colours across the seams so that every touching pair of small cubes stays opposite in colour.",
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
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-07.png",
    imageExtra: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-07-extra.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "n is the greatest natural number for which 4n has three digits, and m is the least such number. What is 4n-4m?",
    options: [
      "900",
      "899",
      "896",
      "225",
      "224"
    ],
    answer: 2,
    explanation: "The smallest three-digit multiple of 4 is 100 and the largest is 996. Their difference is 896.",
    hint: "Find the smallest and largest three-digit multiples of 4.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "900",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "899",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "896",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "225",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "224",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "A three-quarter circle is turned 90 degrees anticlockwise about its centre and then reflected in the x-axis. Which picture results?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the original and answer diagrams require a clean visual check.",
    hint: "Perform the rotation first, then reflect the result across the x-axis.",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-09.png",
    imageExtra: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-09-extra.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "Which of the following numbers is largest?",
    options: [
      "sqrt(20) x sqrt(3)",
      "sqrt(20) x 3",
      "20 x sqrt(3)",
      "sqrt(201) x 3",
      "sqrt(2013)"
    ],
    answer: 2,
    explanation: "The value 20sqrt(3) is about 34.6, greater than the other listed values.",
    hint: "Estimate each expression numerically, keeping the square roots grouped correctly.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "sqrt(20) x sqrt(3)",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "sqrt(20) x 3",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "20 x sqrt(3)",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "sqrt(201) x 3",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "sqrt(2013)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Triangle RZT is made by rotating equilateral triangle AZC about Z. If angle CZR=70 degrees, determine alpha=angle CAR.",
    options: [
      "20 degrees",
      "25 degrees",
      "30 degrees",
      "35 degrees",
      "40 degrees"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: diagram-based angle chase should be rechecked against the source figure.",
    hint: "Track the 60-degree angles before and after the rotation about Z.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "20 degrees",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "25 degrees",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "30 degrees",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "35 degrees",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "40 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "The figure is made of six unit squares. Its perimeter is 14 cm. Squares are added in a zigzag pattern until the figure has 2013 squares. What is the new perimeter?",
    options: [
      "2022",
      "4028",
      "4032",
      "6038",
      "8050"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: verify the zigzag attachment shares exactly one edge per added square.",
    hint: "Each new square adds four sides but shares one side with the existing figure.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "2022",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "4028",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "4032",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "6038",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "8050",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "A and B are opposite vertices of a regular hexagon, while C and D are midpoints of two opposite sides. The hexagon's area is 60. Determine the product of AC and BD.",
    options: [
      "40",
      "50",
      "60",
      "80",
      "100"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the labelled midpoint locations and length calculation against the diagram.",
    hint: "Express both lengths in terms of the hexagon side and use its area formula.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "40",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "60",
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
        text: "100",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "The sum of the squares of three consecutive positive integers is 770. What is the largest?",
    options: [
      "15",
      "16",
      "17",
      "18",
      "19"
    ],
    answer: 3,
    explanation: "17^2+18^2+19^2=974, not 770; NEEDS_REVIEW: the key letter D and the extracted options appear inconsistent, so verify the source numbers.",
    hint: "Test consecutive triples near the square root of 770/3.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "For a rectangle ABCD positioned below the x-axis and to the right of the y-axis, calculate (y-coordinate):(x-coordinate) at each corner. At which point is the quotient smallest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "It depends on the position and side lengths"
    ],
    answer: 0,
    explanation: "All four quotients are negative. At the lower corners the y-coordinate is most negative, and dividing by the smaller positive x-coordinate at A makes the quotient more negative still. Thus A has the smallest quotient.",
    hint: "Since every y-coordinate is negative and every x-coordinate is positive, compare how the numerator and denominator change at each corner.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "It depends on the position and side lengths",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Today is Hans's and his son's birthday. Hans's age multiplied by his son's age is 2013. In which year was Hans born?",
    options: [
      "1952",
      "1953",
      "1980",
      "1982",
      "More information is needed"
    ],
    answer: 4,
    explanation: "Several factor pairs of 2013 can represent ages consistent with the 20th century, so the information is insufficient to determine Hans's birth year.",
    hint: "Factor 2013 and test the possible age pairs against the century condition.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "1952",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "1953",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "1980",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "1982",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "More information is needed",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "Tarzan draws a rhombus made of two equilateral triangles. The shown angles are slightly inaccurate. Which of the five line segments is longest?",
    options: [
      "AD",
      "AC",
      "AB",
      "BC",
      "BD"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: independently compare the five segment lengths from the stated angle values.",
    hint: "Use the exact 60-degree geometry rather than the imperfect sketch.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "AD",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "AC",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "AB",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "BC",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "BD",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "Five consecutive positive integers have the property that the sum of three is as large as the sum of the other two. How many sets of five such numbers are there?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "More than 3"
    ],
    answer: 2,
    explanation: "Write the numbers as n through n+4. Their total is 5n+10, so the chosen three must sum to (5n+10)/2. If their offsets from n sum to S, this gives n=10−2S. The only positive possibilities are S=3 ({0,1,2}, n=4) and S=4 ({0,1,3}, n=2), giving two sets.",
    hint: "Write the numbers as n,n+1,…,n+4 and equate a three-number sum to half of their total.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "More than 3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "How many different ways are there to get from A to B in the directed diagram if you may only move in the arrow directions?",
    options: [
      "6",
      "8",
      "9",
      "12",
      "15"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the count against the fully cropped directed graph.",
    hint: "Use dynamic counting: the number of ways to reach a node is the sum from its incoming arrows.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2013/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "A six-digit number has an even digit sum and an odd digit product. Which statement must be true?",
    options: [
      "Two or four digits are even",
      "There is no such number",
      "The number of odd digits is odd",
      "The number can be made of six different digits",
      "None of A-D is correct"
    ],
    answer: 4,
    explanation: "An odd digit product requires all six digits odd, which makes their sum even only in some cases; none of the listed statements is forced.",
    hint: "An odd product means every digit is odd; then analyze the parity of their sum.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "Two or four digits are even",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "There is no such number",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "The number of odd digits is odd",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "The number can be made of six different digits",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "None of A-D is correct",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "How many decimal places are needed to write 1/1024000 as a terminating decimal?",
    options: [
      "10",
      "12",
      "13",
      "14",
      "1024000"
    ],
    answer: 2,
    explanation: "1024000=2^13 x 5^3. To make equal powers of 2 and 5 in the denominator requires 13 decimal places.",
    hint: "Factor the denominator into powers of 2 and 5.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "1024000",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "The year 2013 consists of four consecutive digits 0,1,2,3. How many years before 2013 was the date last made up of four consecutive digits?",
    options: [
      "467",
      "527",
      "581",
      "693",
      "990"
    ],
    answer: 2,
    explanation: "The previous year with four consecutive digits in its date is 1432, which is 581 years before 2013.",
    hint: "Search backwards for the latest year whose four digits are consecutive in some order.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "467",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "527",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "581",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "693",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "990",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Rectangles have one side of length 5 cm and can be cut into a square and another rectangle, one of which has area 4 cm^2. How many such rectangles are there?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Considering both orientations and the possible 4 cm^2 component yields four rectangles.",
    hint: "Let the rectangle's other side be x and test which cuts produce a square and an area-4 rectangle.",
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Starting from the set {1,2,3}, replace each number by the sum of the other two. How many such changes are needed until 2013 appears?",
    options: [
      "8",
      "9",
      "10",
      "2013 appears several times",
      "2013 never appears"
    ],
    answer: 4,
    explanation: "The operation preserves a recurrence whose values remain even or divisible by a fixed factor; 2013 never appears.",
    hint: "Compute a few triples and identify an invariant under the sum-change operation.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "2013 appears several times",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "2013 never appears",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "Let Q be the number of squares from 1 to 2013^6 and K the number of cubes in the same range. Which statement is true?",
    options: [
      "Q=2013 x K",
      "2Q=3K",
      "3Q=2K",
      "Q=K",
      "Q^3=K^2"
    ],
    answer: 0,
    explanation: "There are 2013^3 square numbers and 2013^2 cube numbers, so Q=2013K.",
    hint: "Count squares and cubes separately up to 2013^6.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "Q=2013 x K",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "2Q=3K",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "3Q=2K",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "Q=K",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "Q^3=K^2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Using 1,2,3,...,22, eleven fractions a/b are formed, with each number used exactly once. What is the maximum number of fractions that are whole numbers?",
    options: [
      "11",
      "10",
      "9",
      "8",
      "7"
    ],
    answer: 1,
    explanation: "Pairing each small numerator with a distinct larger multiple allows ten whole-number fractions; one remaining pair cannot form an integer.",
    hint: "A fraction is whole when its denominator divides its numerator; allocate divisors efficiently.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "Any three vertices of a regular 13-sided polygon form a triangle. How many such triangles contain the polygon's circumcentre?",
    options: [
      "72",
      "85",
      "91",
      "100",
      "Another number"
    ],
    answer: 2,
    explanation: "Counting vertex triples whose vertices are not contained in any semicircle gives 91 triangles containing the centre.",
    hint: "A triangle contains the centre exactly when its vertices are not all within one semicircle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "72",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "85",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "91",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "100",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "Another number",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "A car leaves A at 50 km/h. Every hour another car leaves A 1 km/h faster than the previous one. The last leaves 50 hours later at 100 km/h. What is the speed of the car leading 100 hours after the first start?",
    options: [
      "50 km/h",
      "66 km/h",
      "75 km/h",
      "84 km/h",
      "100 km/h"
    ],
    answer: 2,
    explanation: "The first car travels 100 hours at 50 km/h. Comparing arrival positions of the staggered starts shows the leading car has speed 75 km/h.",
    hint: "Compare how far each car travels by the 100-hour mark, accounting for its delayed start.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "50 km/h",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "66 km/h",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "75 km/h",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "84 km/h",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "100 km/h",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "One hundred oak and birch trees stand in a row. Between any two oaks, the number of trees is not 5. What is the maximum number of birches?",
    options: [
      "60",
      "52",
      "50",
      "48",
      "It is impossible"
    ],
    answer: 1,
    explanation: "To maximize birches, place oaks so no pair is separated by exactly five intervening trees. The maximum number of birches is 52.",
    hint: "Translate the restriction into forbidden oak positions six places apart.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "60",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "52",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "48",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "It is impossible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A positive integer N is smaller than the sum of its three largest proper factors. Which statement is true?",
    options: [
      "All such N are divisible by 7",
      "All such N are divisible by 6",
      "All such N are divisible by 5",
      "All such N are divisible by 4",
      "Such a number does not exist"
    ],
    answer: 1,
    explanation: "Any number satisfying the inequality must have proper factors whose sum exceeds N; this forces divisibility by 6.",
    hint: "Compare the three largest proper factors with N using its prime factorization.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "All such N are divisible by 7",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "All such N are divisible by 6",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "All such N are divisible by 5",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "All such N are divisible by 4",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "Such a number does not exist",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2013Junior: Section[] = [
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

export const edition2013Junior: QuestionSet = {
  id: "junior-2013",
  year: 2013,
  group: "Junior",
  grades: "Grades 9-10",
  location: "Austria",
  date: "21 March 2013",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2013/2013_Junior.pdf",
  questions: questions2013Junior,
  sections: sections2013Junior,
};
