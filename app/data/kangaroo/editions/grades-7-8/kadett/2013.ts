import type { Question, QuestionSet, Section } from "../../../types";

const questions2013Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Triangle ABC is equilateral with area 9. Lines parallel to its sides divide each side into thirds. What is the area of the grey part?",
    options: [
      "1",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the grey subregions within the triangular grid are visual.",
    hint: "Partition the triangle into equal small triangles and count the grey ones.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-01.png",
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
        text: "4",
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Given 1111/101 = 11 and the expressions involving 3333/101 and 6666/303 shown, what is the sum A+B?",
    options: [
      "5",
      "9",
      "11",
      "55",
      "99"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the fraction layout and definitions of A and B were scrambled in text extraction; the key indicates D.",
    hint: "Evaluate each fraction exactly, then add the two values labelled A and B.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "9",
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
        text: "55",
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
    prompt: "In seawater the ratio of salt to fresh water is 7:193. How many kilograms of salt are in 1000 kg of seawater?",
    options: [
      "35",
      "186",
      "193",
      "200",
      "350"
    ],
    answer: 0,
    explanation: "There are 200 ratio parts, so each part is 1000/200=5 kg. Salt is 7×5=35 kg.",
    hint: "Find the mass of one of the 200 total ratio parts, then take seven parts.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "35",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "186",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "193",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "200",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "350",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Melanie cuts shapes from a 4×4 grid. Each cut-out matches the pictured shape or its mirror image. How many squares remain if she cuts out as many as possible?",
    options: [
      "0",
      "2",
      "4",
      "6",
      "8"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the allowed cut-out shape is shown in the source diagram.",
    hint: "Tile as much of the 4×4 grid as possible with the given shape and its mirror.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Matthias catches fish. If he had caught three times as many as he actually caught, he would have 12 more. How many did he catch?",
    options: [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 1,
    explanation: "If x is the actual catch, 3x=x+12, so x=6.",
    hint: "The difference between three times the catch and the catch itself is twice the catch.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "A sack has 2 red, 3 blue, 10 white, 4 green and 3 black marbles. How many must be removed without looking to guarantee two of the same colour?",
    options: [
      "2",
      "12",
      "10",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "There are five colours. In the worst case the first five marbles have different colours; the sixth guarantees a match. The key indicates C (10), so NEEDS_REVIEW.",
    hint: "Use the pigeonhole principle: determine the largest draw that could still contain at most one of each colour.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Alex lights a candle every 10 minutes. Each burns for 40 minutes. How many are burning 55 minutes after the first was lit?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "Candles lit at 20, 30, 40 and 50 minutes are still burning at minute 55; the first two have gone out. Four candles burn.",
    hint: "List the lighting times and remove candles that have already burned for 40 minutes.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "3",
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Five families live in a village. Which average number of children per family is impossible?",
    options: [
      "1.0",
      "1.2",
      "1.3",
      "1.4",
      "2.0"
    ],
    answer: 2,
    explanation: "Five families must have an integer total number of children, so the average must be a multiple of 1/5. 1.3×5=6.5 is impossible.",
    hint: "Multiply each proposed average by five; the total number of children must be an integer.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "1.0",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "1.2",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "1.3",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "1.4",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "2.0",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "Tom and Laura start opposite each other around a circular well and run clockwise. Tom's speed is 9/8 of Laura's. How many full laps does Laura run before Tom catches her?",
    options: [
      "4",
      "8",
      "9",
      "2",
      "72"
    ],
    answer: 0,
    explanation: "They start half a lap apart. Their relative speed is 1/8 of Laura's speed, so the catch takes four Laura-lap times.",
    hint: "Divide the initial half-lap gap by their relative speed, then express the time in Laura's laps.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "2",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "72",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Positive integers x, y and z satisfy xy=14, yz=10 and zx=35. What is x+y+z?",
    options: [
      "10",
      "12",
      "14",
      "16",
      "18"
    ],
    answer: 2,
    explanation: "x²=(xy)(xz)/(yz)=14×35/10=49, so x=7. Then y=2 and z=5, giving a sum of 14.",
    hint: "Multiply two equations and divide by the third to isolate the square of one variable.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "On a 5×5 grid, a 1×1 and 2×2 ship are already placed. Ships cannot touch, even diagonally. How many positions remain for a rectangular 3×1 ship?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the placed ships' grid coordinates are visual.",
    hint: "Enumerate horizontal and vertical placements whose three cells and surrounding neighbours avoid both existing ships.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "In the diagram α=55°, β=40° and γ=35°. How large is δ?",
    options: [
      "100°",
      "105°",
      "120°",
      "125°",
      "130°"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the arrangement of the four angles in the diagram is needed to derive δ.",
    hint: "Apply triangle angle sums and straight-line angles to the marked configuration.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "100°",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "105°",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "120°",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "125°",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "130°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "A trapezium has perimeter 5 and integer side lengths. What can its smallest angles be?",
    options: [
      "30° and 30°",
      "60° and 60°",
      "45° and 45°",
      "30° and 60°",
      "45° and 90°"
    ],
    answer: 1,
    explanation: "The only possible side lengths are 1, 1, 1 and 2. The parallel bases must be 1 and 2, leaving equal legs of length 1. Each leg has horizontal projection 1/2, so it forms a right triangle with hypotenuse 1 and an acute angle of 60° at the longer base.",
    hint: "List positive integer side lengths summing to five and use the parallel sides to relate the base angles.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "30° and 30°",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "60° and 60°",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "45° and 45°",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "30° and 60°",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "45° and 90°",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Four of the five pictured shapes can be folded into a cube. For which shape is this impossible?",
    options: [
      "Shape 1",
      "Shape 2",
      "Shape 3",
      "Shape 4",
      "Shape 5"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five candidate cube nets are visual.",
    hint: "Fold each net mentally and check whether any faces overlap or fail to cover one cube face.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "Shape 1",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Shape 2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Shape 3",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "Shape 4",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Shape 5",
        imageAlt: "E option"
      }
    ],
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-14-extra.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Willi writes a few consecutive whole numbers. What percentage of them are odd? Which percentage cannot occur?",
    options: [
      "40%",
      "45%",
      "48%",
      "50%",
      "60%"
    ],
    answer: 1,
    explanation: "For an even-length list, exactly half the numbers are odd. For an odd length n, the odd fraction is (n−1)/(2n) or (n+1)/(2n). Thus 40% and 60% are possible with five numbers, 48% with 25, and 50% with an even length. A 45% share would require an even-length list, where the share must be 50%, so it cannot occur.",
    hint: "In any consecutive list, odd and even numbers alternate, so their counts differ by at most one.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "40%",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "45%",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "48%",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "50%",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "60%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Aron, Ben and Carl always lie. Aron says his stone matches Ben's; Ben says his matches Carl's; Carl says exactly two stones are red. Which statement is correct?",
    options: [
      "Aron's stone is green",
      "Ben's stone is green",
      "Carl's stone is red",
      "Aron and Carl differ",
      "None is correct"
    ],
    answer: 0,
    explanation: "Since all statements are false, Aron and Ben differ, Ben and Carl differ, so Aron and Carl match. They must both be green; otherwise Carl's 'exactly two red' statement would be true.",
    hint: "Translate each lie into the opposite condition and test the two possible colours for Ben.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "Aron's stone is green",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "Ben's stone is green",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "Carl's stone is red",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "Aron and Carl differ",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "None is correct",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "All four-digit numbers made from the digits 2, 0, 1 and 3 are written in ascending order. What is the largest difference between consecutive numbers?",
    options: [
      "702",
      "703",
      "693",
      "793",
      "198"
    ],
    answer: 0,
    explanation: "The largest jumps occur between the blocks with different first digits: 1320 to 2013 is 693, and 2310 to 3012 is 702. Gaps within a block are smaller, so the largest difference is 702.",
    hint: "Sort the valid permutations and compare gaps where the leading digit changes.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "702",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "703",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "693",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "793",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "198",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "In an 8×6 grid, 24 squares are not cut by either diagonal. How many squares in a 10×6 grid are not cut by either diagonal?",
    options: [
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    answer: 4,
    explanation: "A diagonal through an m×n grid crosses m+n−gcd(m,n) unit squares. In a 10×6 grid that is 10+6−2=14 squares per diagonal. The diagonals meet at a grid vertex, so they cut 28 distinct squares altogether; 60−28=32 squares are untouched.",
    hint: "Count which unit squares each diagonal crosses, accounting for squares both diagonals share.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "29",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "31",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "32",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Andi, Berti, Christa, Doris and Edi were born on 20 Feb, 12 Mar, 20 Mar, 12 Apr and 23 Apr 2000. Andi and Edi share a month; Berti and Christa share a month; Andi and Christa share a day number in different months; Doris and Edi also share a day number in different months. Who is youngest?",
    options: [
      "Andi",
      "Berti",
      "Christa",
      "Doris",
      "Edi"
    ],
    answer: 1,
    explanation: "Andi and Christa must have the 12th on different months: Andi is 12 March and Christa is 12 April. Since Andi and Edi share a month, Edi is 20 March; Doris then shares Edi's day number and is 20 February. Berti is left with 23 April, the youngest date.",
    hint: "Use the two same-month pairs and two same-day pairs to determine each person's date.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "Andi",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "Berti",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "Christa",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "Doris",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "Edi",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Johann stacks cubes on a 4×4 grid. A diagram shows the height at each square. What will the tower look like from behind?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the height grid and five rear-view options are visual.",
    hint: "Reverse the order of the rows when viewing from behind, then compare the column heights.",
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
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-20.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "What is the smallest positive integer whose digit product is 24? What is its digit sum?",
    options: [
      "6",
      "8",
      "9",
      "10",
      "11"
    ],
    answer: 4,
    explanation: "The smallest such number is 38, since 3×8=24; its digit sum is 11.",
    hint: "Find the smallest two-digit factor pair of 24, then compare possible digit sums.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A rectangle ABCD lies below the x-axis and right of the y-axis. For each vertex, calculate y-coordinate divided by x-coordinate. Which point gives the smallest value?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "It depends"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the rectangle's orientation and vertex labels are visual.",
    hint: "All y-values are negative and x-values positive; compare the magnitudes of the negative ratios at each corner.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "It depends",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "A grid has 2 cm squares. What is the area of the grey quadrilateral ABCD?",
    options: [
      "96 cm²",
      "84 cm²",
      "76 cm²",
      "88 cm²",
      "104 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the quadrilateral's vertices on the grid are visual.",
    hint: "Count full grid squares and combine partial squares inside ABCD.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "96 cm²",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "84 cm²",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "76 cm²",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "88 cm²",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "104 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Robert removes one digit from a five-digit number, leaving a four-digit number. Their sum is 52713. What is the digit sum of the original number?",
    options: [
      "26",
      "20",
      "23",
      "19",
      "17"
    ],
    answer: 2,
    explanation: "Checking the possible places for the removed digit gives the original number 47921; deleting its last digit leaves 4792, and 47921+4792=52713. Its digit sum is 4+7+9+2+1=23.",
    hint: "Let the original be N and the shortened number be M; compare their digit sums by the removal position.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "26",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "23",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A gardener plants 20 linden and oak trees in a row. There must never be exactly three trees between any two oak trees. What is the maximum number of oak trees?",
    options: [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    answer: 2,
    explanation: "Positions with the same remainder when divided by 4 form a row of five, and adjacent spots in that row cannot both contain oaks. At most three spots per row are allowed, so there can be at most 4×3=12 oaks; alternating choices in each row attain this bound.",
    hint: "The forbidden oak spacing is four positions; arrange oaks to avoid that gap while maximizing their count.",
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
        text: "10",
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
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "There are twice as many runners behind Alex as runners before Daniel, and 1.5 times as many behind Daniel as before Alex. Alex finishes 21st. How many runners finish?",
    options: [
      "31",
      "41",
      "51",
      "61",
      "81"
    ],
    answer: 1,
    explanation: "There are 20 runners before Alex and therefore 30 behind Daniel. If there are N runners, Daniel is in position N−30; the first condition gives N−21=2(N−31), so N=41.",
    hint: "Translate each 'before' and 'behind' count into an expression involving the total number of runners.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "31",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "41",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "51",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "61",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "81",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A sequence begins 1, −1, −1, 1, −1; each new term is the product of the two preceding terms. What is the sum of the first 2013 terms?",
    options: [
      "−1006",
      "−671",
      "0",
      "671",
      "1007"
    ],
    answer: 1,
    explanation: "The recurrence repeats the six-term cycle 1, −1, −1, 1, −1, −1, whose sum is −2. The first 2010 terms make 335 cycles and sum to −670; the next three sum to 1−1−1=−1. Altogether the sum is −671.",
    hint: "Find the repeating cycle and sum complete cycles plus the remaining terms.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "−1006",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "−671",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "0",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "671",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "1007",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Dad makes six pancakes in order. Children sometimes enter and eat the hottest available pancake. Which eating order is impossible?",
    options: [
      "123456",
      "125436",
      "325461",
      "456231",
      "654321"
    ],
    answer: 3,
    explanation: "In the order 456231, pancakes 1, 2 and 3 are still available after 4, 5 and 6 have been eaten. Pancake 3 was made later than pancake 2, so it is hotter; pancake 2 cannot be eaten first. Therefore 456231 is impossible.",
    hint: "A child can only eat a pancake that is currently hottest; track which pancakes are available at each step.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "123456",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "125436",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "325461",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "456231",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "654321",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "The vertices and edges of a tetrahedron are labelled with 1,2,3,4,5,6,7,8,9,11, each used once. Each edge is labelled with the sum of its endpoint vertices. Edge AB is 9. What labels edge CD?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "11"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the vertex/edge incidence diagram and its labels are needed to determine CD.",
    hint: "Use the six edge-sum equations and the fact that each listed value is used exactly once.",
    sourcePage: 3,
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
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "Four cars enter a roundabout simultaneously from different directions. None drives all the way around, and no two leave at the same exit. In how many ways can they exit?",
    options: [
      "9",
      "12",
      "15",
      "24",
      "81"
    ],
    answer: 0,
    explanation: "There are !4 = 9 derangements of four exits: no car may leave by the entrance it used.",
    hint: "Count permutations of the four exits with no fixed point.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "81",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2013/questions/editor-q-30.png"
  }
];

const sections2013Kadett: Section[] = [
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

export const edition2013Kadett: QuestionSet = {
  id: "kadett-2013",
  year: 2013,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 21, 2013",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2013/2013_Kadett.pdf",
  questions: questions2013Kadett,
  sections: sections2013Kadett,
};
