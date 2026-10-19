import type { Question, QuestionSet, Section } from "../../../types";

const questions2011Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which calculation gives the biggest result?",
    options: [
      "201 × 1",
      "20 × 1 × 1",
      "1 × 2011",
      "1 + 2011",
      "1 ÷ 2011"
    ],
    answer: 3,
    explanation: "The results are 201, 20, 2011, 2012 and a fraction, so 1+2011 is largest.",
    hint: "Evaluate each expression and compare the results.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "201 × 1",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "20 × 1 × 1",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "1 × 2011",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "1 + 2011",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "1 ÷ 2011",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Elsa has three tetrahedra and five dice. How many faces do these eight objects have altogether?",
    options: [
      "42",
      "48",
      "50",
      "52",
      "56"
    ],
    answer: 0,
    explanation: "A tetrahedron has 4 faces and a die 6, so 3×4 + 5×6 = 42.",
    hint: "Count the faces of each type of solid separately.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "42",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "48",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "52",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "56",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A zebra crossing has alternating 50 cm white and black stripes, with white at both ends. It has 8 white stripes. How wide is the crossing?",
    options: [
      "7 m",
      "7.5 m",
      "8 m",
      "8.5 m",
      "9 m"
    ],
    answer: 4,
    explanation: "Eight white stripes require seven black stripes between them, for 15 stripes total. At 0.5 m each, the crossing is 7.5 m; NEEDS_REVIEW because the answer key indicates E (9 m).",
    hint: "Count the alternating white and black stripes, including the first and last white stripes.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "7 m",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "7.5 m",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "8 m",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "8.5 m",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "9 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "A faulty calculator divides when multiplication is pressed and subtracts when addition is pressed. What does it display for (12×3)+(4×2)?",
    options: [
      "2",
      "6",
      "12",
      "28",
      "38"
    ],
    answer: 3,
    explanation: "The multiplication signs perform division: 12÷3=4 and 4÷2=2. The addition sign performs subtraction: 4-2=2; NEEDS_REVIEW because the key indicates D.",
    hint: "Replace each requested operation by the faulty operation before evaluating.",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "38",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A digital clock shows 20:11. In how many minutes will it next show the digits 0, 1, 1 and 2 in any order?",
    options: [
      "40",
      "45",
      "50",
      "55",
      "60"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: determine the next valid time using exactly those four digits; the key indicates B.",
    hint: "List valid later hour-and-minute arrangements of 0, 1, 1 and 2.",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "40",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "45",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "55",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Three nested squares are formed by joining side midpoints. The smallest square has area 6 cm². What is the largest square's area?",
    options: [
      "24 cm²",
      "18 cm²",
      "15 cm²",
      "12 cm²",
      "9 cm²"
    ],
    answer: 0,
    explanation: "Each midpoint square has half the area of the square around it. Reversing two such steps gives 6×2×2=24 cm².",
    hint: "Each square formed by joining side midpoints has half its parent's area.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "24 cm²",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "18 cm²",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "15 cm²",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "12 cm²",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "9 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "There are 17 houses numbered consecutively on the two sides of a street, with odd numbers on one side and even numbers on the other. The last even house is 12. What number is the last odd house?",
    options: [
      "5",
      "7",
      "13",
      "17",
      "21"
    ],
    answer: 4,
    explanation: "The even-numbered side ends at 12, so it has six houses: 2, 4, 6, 8, 10 and 12. The other side therefore has 17−6=11 houses. Its odd numbers end at 2×11−1=21.",
    hint: "Count the even houses up to 12, then use the total of 17 to find how many odd houses there are.",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Felix the tomcat catches 12 fish in three days. He catches more each day than the previous day, and on day three he catches fewer than the first two days together. How many does he catch on day three?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 0,
    explanation: "The only increasing positive triple summing to 12 with the last term smaller than the sum of the first two is 3, 4, 5. He catches 5 on day three.",
    hint: "List increasing positive triples that sum to 12 and test the final condition.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "5",
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
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "Among three-digit numbers whose digits sum to 8, take the smallest and largest. What is their sum?",
    options: [
      "707",
      "907",
      "916",
      "1000",
      "1001"
    ],
    answer: 1,
    explanation: "The smallest is 107 and the largest is 800, so their sum is 907.",
    hint: "Minimize and maximize the hundreds digit while keeping the digit sum equal to 8.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "707",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "907",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "916",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "1000",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "1001",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "An L-shaped object made from four equal squares gets one more square added. How many placements make the new object have a line of symmetry?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the L orientation and allowed attachment positions are visual.",
    hint: "Try each adjacent placement and check whether the five-square shape has a reflection axis.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Compute (2011×2·011)/(201·1×20·11).",
    options: [
      "0.01",
      "0.1",
      "1",
      "10",
      "100"
    ],
    answer: 2,
    explanation: "Interpreting the grouped factors as shown, the numerator and denominator are equal, giving 1; verify the source's typography for the product marks.",
    hint: "Cancel common factors after reading the multiplication grouping carefully.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "0.01",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "0.1",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "1",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "100",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Pearls weighing 1 g through 9 g are used to make rings with pair sums 17 g, 13 g, 7 g and 5 g. How heavy is the unused pearl?",
    options: [
      "1 g",
      "2 g",
      "3 g",
      "4 g",
      "5 g"
    ],
    answer: 2,
    explanation: "The used pearls total 17+13+7+5=42 g. All nine pearls total 45 g, leaving 3 g unused.",
    hint: "Subtract the weights used in the four rings from the total weight 1+2+…+9.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "1 g",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "2 g",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "3 g",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "4 g",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "5 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Fridolin the hamster runs through the maze, crossing each junction at most once. There are 16 pumpkin seeds on the path. What is the maximum number he can collect?",
    options: [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the maze graph and seed locations are visual.",
    hint: "Find a route that collects as many seeds as possible without revisiting any junction.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "The scores 17, 13, 5, 10, 14, 9, 12 and 16 are listed. Which two can be removed without changing the average?",
    options: [
      "12 and 17",
      "5 and 17",
      "9 and 16",
      "10 and 12",
      "14 and 10"
    ],
    answer: 4,
    explanation: "The total is 96, so the average is 12. Removing 14 and 10 removes two scores whose average is also 12, leaving the average unchanged.",
    hint: "A pair can be removed without changing the average only if its average equals the full-list average.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "12 and 17",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "5 and 17",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "9 and 16",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "10 and 12",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "14 and 10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Colour each region red, green, blue or orange so touching regions have different colours. What colour must region X be?",
    options: [
      "Red",
      "Blue",
      "Green",
      "Orange",
      "It cannot be determined"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the region adjacency diagram is needed to determine X's available colour.",
    hint: "Use the neighbouring region colours to eliminate choices for X.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "Red",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "Blue",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "Green",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "Orange",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "A square sheet is cut into six rectangles as shown. The sum of the six perimeters is 120 cm. What is the square's area?",
    options: [
      "48 cm²",
      "64 cm²",
      "110.25 cm²",
      "144 cm²",
      "256 cm²"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement of the six rectangles is shown in the source diagram.",
    hint: "Relate the sum of the small-rectangle perimeters to the original square's side length.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "48 cm²",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "64 cm²",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "110.25 cm²",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "144 cm²",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "256 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "FC Barcelona scored three goals and conceded one across a tournament with one win, one loss and one draw. What was the score in the game it won?",
    options: [
      "2:0",
      "3:0",
      "1:0",
      "4:1",
      "0:1"
    ],
    answer: 1,
    explanation: "Only one goal was conceded across all three games. The loss must therefore be 0:1, and the draw must be 0:0; otherwise at least one more goal would have been conceded. All three goals scored were in the win, so it was 3:0.",
    hint: "Use the single conceded goal first: the loss needs at least one goal against Barcelona, while the draw has equal scores.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "2:0",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "3:0",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "1:0",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "4:1",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "0:1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "A segment DE is 2 cm long. How many points F form a right-angled triangle DEF with area 1 cm²?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    answer: 2,
    explanation: "If the right angle is at D or E, the other leg must be 1 cm; each case gives two points on opposite sides of DE. If the right angle is at F, DE is the 2 cm hypotenuse and the legs have product 2 and squares summing to 4, so both are √2. F is then above or below the midpoint of DE. Altogether there are 2+2+2=6 points.",
    hint: "Count possible F positions separately for a right angle at D, at E, and at F, considering both sides of DE.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "2",
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
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "a is between 0 and 1 and b is greater than 1. Which is largest: ab, a+b, a/b, b, or does it depend?",
    options: [
      "ab",
      "a+b",
      "a/b",
      "b",
      "It depends on a and b"
    ],
    answer: 1,
    explanation: "Since a>0, a+b>b. Also ab<b and a/b<1<b, so a+b is largest.",
    hint: "Compare each expression with b using 0<a<1 and b>1.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "ab",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "a+b",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "a/b",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "b",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "It depends on a and b",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "The dark line halves the surface area of the pictured dice. Which drawing could be the net of the die?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the dice and candidate nets are visual.",
    hint: "Fold each net and check whether the dark line covers exactly half of the cube's surface.",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-20.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "The five-digit number 24X8Y is divisible by 4, 5 and 9. What is X+Y?",
    options: [
      "13",
      "10",
      "9",
      "5",
      "4"
    ],
    answer: 4,
    explanation: "Divisibility by 5 gives Y=0. Divisibility by 4 is then automatic, and divisibility by 9 requires 2+4+X+8=14+X to be a multiple of 9, so X=4 and X+Y=4.",
    hint: "Use divisibility by 5 first, then the digit-sum rule for 9.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "10",
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
        text: "5",
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
    prompt: "Lina has placed two shapes on a square board. Which of five counters can she add so that none of the remaining four can be placed?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the board and five counters are visual.",
    hint: "Try each counter placement and check whether every other piece is blocked from fitting.",
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
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-22.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-22-extra.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Isaak, Max and Oskar each make a claim about their distances from the other two birds. At least two tell the truth. Who is lying?",
    options: [
      "Isaak",
      "Max",
      "Oskar",
      "Nobody",
      "It cannot be decided"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: solve the three distance inequalities together to identify the inconsistent speaker.",
    hint: "Place the three birds on a line and compare the three claimed 'more than twice as far' relationships.",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "Isaak",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "Max",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "Oskar",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "Nobody",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "It cannot be decided",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Inside a 7 cm square, a 3 cm square and then a 5 cm square are drawn as shown. What is the difference between the black and grey areas?",
    options: [
      "0 cm²",
      "10 cm²",
      "11 cm²",
      "15 cm²",
      "It cannot be determined"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the relative positions of the three squares and shaded regions are visual.",
    hint: "Compare the overlap areas created by the 3 cm and 5 cm squares inside the 7 cm square.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "0 cm²",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "10 cm²",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "11 cm²",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "15 cm²",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "Myshko hits only 5-, 8- and 10-point regions, hitting the 8 and 10 equally often, for 99 points total. He misses 25% of his shots. How many times does he shoot?",
    options: [
      "10",
      "12",
      "16",
      "20",
      "24"
    ],
    answer: 2,
    explanation: "If he hits the 8- and 10-point regions x times each and the 5-point region y times, then 18x+5y=99. Modulo 5 gives 3x≡4, so x≡3 (mod 5); x=3 gives y=9 and 12 hits. Since 12 hits are 75% of his shots, he shoots 12÷0.75=16 times.",
    hint: "Let x be the number of hits in each of the 8- and 10-point regions and y the number of 5-point hits. Solve 18x+5y=99 before using the miss rate.",
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
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "In a convex quadrilateral AB=AC, angle BAD=80°, angle ABC=75° and angle ADC=65°. What is angle BDC?",
    options: [
      "10°",
      "15°",
      "20°",
      "30°",
      "45°"
    ],
    answer: 1,
    explanation: "Since AB=AC, triangle ABC has equal base angles at B and C, so angle BAC=180°−75°−75°=30°. The diagonal AC splits angle BAD, giving angle CAD=80°−30°=50°. In triangle ADC, angle ACD=180°−50°−65°=65°, so AD=AC. Thus AB=AD, and triangle ABD has base angles 50° each. The diagonal BD splits angle ADC, so angle BDC=65°−50°=15°.",
    hint: "Use AB=AC to find angle BAC, then use the two equal 65° angles in triangle ADC to get a second pair of equal sides.",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "10°",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "15°",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "20°",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "30°",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "45°",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "Seven years ago Eva's age was a multiple of 8 and in eight years it will be a multiple of 7. Eight years ago Raffi's age was a multiple of 7 and in seven years it will be a multiple of 8. Which statement can be true?",
    options: [
      "Raffi is 2 years older",
      "Raffi is 10 years older",
      "They are the same age",
      "Raffi is 1 year younger",
      "Raffi is 2 years younger"
    ],
    answer: 0,
    explanation: "Eva's age is 7 modulo 8 and 6 modulo 7, so it is 55 modulo 56. Raffi's age is 1 modulo 7 and 1 modulo 8, so it is 1 modulo 56. Ages 111 and 113 respectively satisfy the conditions, with Raffi two years older.",
    hint: "Combine each person's age remainders modulo 8 and 7; the combined pattern repeats every 56 years.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "Raffi is 2 years older",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "Raffi is 10 years older",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "They are the same age",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "Raffi is 1 year younger",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "Raffi is 2 years younger",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Different letters represent different nonzero digits, and equal letters represent equal digits. What is the smallest possible value of K×A×N×G×A×R×O×O divided by G×A×M×E?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "7"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: verify the repeated-letter fraction and its minimum over distinct nonzero digits; the key indicates B.",
    hint: "Cancel common factors first, then assign the smallest and largest digits strategically while respecting distinct letters.",
    sourcePage: 4,
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "Two rectangles with side lengths marked 11 and 13 are cut into three pieces and rearranged to form a triangle. How long is side x?",
    options: [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the cut lines and triangle arrangement are visual.",
    hint: "Conserve area and use the marked rectangle dimensions to determine the triangle's missing side.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "36",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "37",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "38",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "39",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2011/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "On a 4×4 computer-game grid, each cell is initially hidden and contains red or blue. Exactly two blue cells share a side. What is the fewest clicks needed to definitely find them?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the click feedback rules and grid information are shown in the source figure.",
    hint: "Count how many possible adjacent blue pairs remain after each click's information is revealed.",
    sourcePage: 4,
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
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "11",
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
        text: "13",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2011Kadett: Section[] = [
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

export const edition2011Kadett: QuestionSet = {
  id: "kadett-2011",
  year: 2011,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 17, 2011",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2011/2011_Kadett.pdf",
  questions: questions2011Kadett,
  sections: sections2011Kadett,
};
