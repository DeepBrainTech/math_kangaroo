import type { Question, QuestionSet, Section } from "../../../types";

const questions2018Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "What is (20+18) ÷ (20−18)?",
    options: [
      "18",
      "19",
      "20",
      "34",
      "36"
    ],
    answer: 1,
    explanation: "38÷2=19.",
    hint: "Evaluate the numerator and denominator separately.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "34",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which word has a vertical axis of symmetry when its letters are written underneath each other, as MAMA does?",
    options: [
      "ADAM",
      "BAUM",
      "BOOT",
      "LOGO",
      "TOTO"
    ],
    answer: 4,
    explanation: "The letters in TOTO are each vertically symmetric, so the stacked word has a vertical axis.",
    hint: "Check each letter for vertical symmetry, not just the word's outline.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-02.png",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "ADAM",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "BAUM",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "BOOT",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "LOGO",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "TOTO",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A triangle has side lengths 6 cm, 10 cm and 11 cm. What is the side length of an equilateral triangle with the same perimeter?",
    options: [
      "6 cm",
      "9 cm",
      "10 cm",
      "11 cm",
      "27 cm"
    ],
    answer: 1,
    explanation: "The perimeter is 27 cm, so each equilateral side is 27÷3=9 cm.",
    hint: "Add the three sides and divide by three.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "6 cm",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "9 cm",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "10 cm",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "11 cm",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "27 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "What number replaces the symbol in 2×18×14 = 6×□×7?",
    options: [
      "8",
      "9",
      "10",
      "12",
      "15"
    ],
    answer: 3,
    explanation: "504 = 42×□, so □=12.",
    hint: "Divide both sides by 6×7.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "A fence with many holes falls onto the floor. Which picture shows the fallen fence?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the fence's hole pattern and candidate floor views are visual.",
    hint: "Track which holes line up after the fence falls flat.",
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
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-05.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Bernd makes staircase steps 15 cm high and 15 cm deep. The first floor is 3 m higher. How many steps are needed?",
    options: [
      "8",
      "10",
      "15",
      "20",
      "25"
    ],
    answer: 3,
    explanation: "300 cm divided by 15 cm per step gives 20 steps.",
    hint: "Convert 3 m to centimetres and divide by the rise per step.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "25",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A ball rolls through a Galton board, turning left or right at each nail. How many paths reach the second compartment from the left?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the number and arrangement of nails above the compartment are visual.",
    hint: "Count the distinct left/right sequences that end above the second compartment.",
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
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "A large rectangle is made from nine equal rectangles. Each small rectangle's longer side is 10 cm. What is the large rectangle's perimeter?",
    options: [
      "40 cm",
      "48 cm",
      "76 cm",
      "81 cm",
      "90 cm"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the orientation of the nine small rectangles is shown in the source figure.",
    hint: "Use the tiled arrangement to determine the large rectangle's width and height.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "40 cm",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "48 cm",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "76 cm",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "81 cm",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "90 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Two circles are inscribed in an 11 cm by 7 cm rectangle, each touching three sides. What is the distance between their centres?",
    options: [
      "1 cm",
      "2 cm",
      "3 cm",
      "4 cm",
      "5 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: determine which three sides each circle touches from the source diagram.",
    hint: "Use the circle diameters and the rectangle's 11 cm and 7 cm dimensions to locate the centres.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1 cm",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2 cm",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "3 cm",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "4 cm",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "5 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 3,
    prompt: "A 3 cm square ABCD is divided into three equal-area parts by joining M and N to C, where M and N lie on AD and AB. What is DM?",
    options: [
      "0.5 cm",
      "1 cm",
      "1.5 cm",
      "2 cm",
      "2.5 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the positions of M and N and the three regions are shown in the source diagram.",
    hint: "Set the areas of the three parts equal and solve for the location of M.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "0.5 cm",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "1 cm",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "1.5 cm",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "2 cm",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "2.5 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Martina multiplies two two-digit numbers and paints over three digits in the calculation. What is the sum of the hidden digits?",
    options: [
      "5",
      "6",
      "9",
      "12",
      "14"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the multiplication and covered digits are shown in the source picture.",
    hint: "Use the visible digits and multiplication carries to recover the missing entries.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "A rectangle contains 40 equal squares and has more than one row. Andreas colours the middle row. How many squares remain uncoloured?",
    options: [
      "20",
      "30",
      "32",
      "35",
      "39"
    ],
    answer: 2,
    explanation: "The diagram's middle row contains 8 of the 40 squares, leaving 32 uncoloured.",
    hint: "Count the squares in the middle row of the pictured rectangle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "30",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "32",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "39",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "A scale is accurate to 10 g. Philipp weighs several identical books together to determine one book's weight to the nearest half gram. What is the minimum number of books?",
    options: [
      "5",
      "10",
      "15",
      "20",
      "50"
    ],
    answer: 3,
    explanation: "A 10 g uncertainty in the combined weight becomes 10/n grams per book. To make that at most 0.5 g, n must be at least 20, so the minimum is 20 books.",
    hint: "Divide the scale's 10 g precision by the number of identical books; the result must be no more than 0.5 g.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "50",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A lion hides in one of three rooms. The notes say: room 1, 'The lion is here'; room 2, 'The lion is not here'; room 3, '2+3=2×3'. Exactly one note is true. Where is the lion?",
    options: [
      "Room 1",
      "Room 2",
      "Room 3",
      "It can be in any room",
      "Room 1 or room 2"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: as transcribed, room 1, room 2 and room 3 each make exactly one statement true; the answer key indicates C, suggesting a source-text or key discrepancy.",
    hint: "Test each possible room and count the true notes.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "Room 1",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Room 2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Room 3",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "It can be in any room",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Room 1 or room 2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A zig-zag line inside a rectangle uses angles 10°, 14°, 33° and 26°. What is angle φ?",
    options: [
      "11°",
      "12°",
      "16°",
      "17°",
      "33°"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the zig-zag arrangement and angle positions are visual.",
    hint: "Use parallel sides of the rectangle to relate the alternating turns of the zig-zag.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "11°",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "12°",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "16°",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "17°",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "33°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Alice writes three prime numbers below 100 using digits 1, 2, 3, 4 and 5 exactly once. Which prime must she have written?",
    options: [
      "2",
      "5",
      "31",
      "41",
      "53"
    ],
    answer: 3,
    explanation: "The digit 4 cannot end a two-digit prime, so it must start one. From the available digits, that prime could only be 41 or 43. If it were 43, the remaining digits 1, 2 and 5 could not form another two-digit prime plus a one-digit prime. Therefore 41 is required, choice D.",
    hint: "The digit 4 must start a two-digit prime. Test the possible final digits, then see whether the remaining digits can form two primes.",
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
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "31",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "41",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "53",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "A hotel advertises 350 sunny days in a 365-day year. How many days must Mr Happy stay to be guaranteed two consecutive sunny days?",
    options: [
      "17",
      "21",
      "31",
      "32",
      "35"
    ],
    answer: 3,
    explanation: "There are only 15 cloudy days. In a 31-day stay, they can separate at most 16 sunny days, so a streak of two is not yet guaranteed. A 32-day stay must contain at least 17 sunny days; 15 cloudy days can separate at most 16 isolated sunny days, so two sunny days must be consecutive.",
    hint: "Place the 15 cloudy days to separate as many sunny days as possible, then see how many sunny days fit in a stay with no consecutive pair.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "31",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "32",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "35",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "A rectangle contains a line parallel to one side and two points A and B on that line. The two grey triangles have total area 10 cm². What is the rectangle's area?",
    options: [
      "18 cm²",
      "20 cm²",
      "22 cm²",
      "24 cm²",
      "It depends on A and B"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: verify the relation between the two grey triangles and the rectangle using the source diagram; the key indicates B.",
    hint: "Express each triangle's area using the rectangle's height and the segments on the parallel line.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "18 cm²",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "20 cm²",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "22 cm²",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "24 cm²",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "It depends on A and B",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Jakob writes 1 to 9 in a 3×3 table. Five row and column sums are 12, 13, 15, 16 and 17. What is the sixth sum?",
    options: [
      "17",
      "16",
      "15",
      "14",
      "13"
    ],
    answer: 0,
    explanation: "The three row sums and three column sums total twice 1+…+9=90. The known five sum to 73, so the sixth is 17.",
    hint: "Every cell is counted once in a row sum and once in a column sum.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Eleven points lie in order on a line. The sum of distances from point 1 to all others is 2018; from point 2 to all points including point 1 it is 2000. What is the distance between points 1 and 2?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "Moving the reference point from 1 to 2 reduces the sum by 9 times the gap, since nine other points lie beyond point 2. Thus the gap is 18÷9=2.",
    hint: "Compare the two sums; the distance to point 1 changes direction, while the other nine distances each shift by the same gap.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Alfred has 37 votes, Kevin 29 and Samuel 24; 130 students vote in total. How many remaining votes must Alfred get to guarantee a win?",
    options: [
      "13",
      "14",
      "15",
      "16",
      "17"
    ],
    answer: 4,
    explanation: "There are 40 votes left. Alfred must exceed Kevin even if Kevin receives all remaining votes: 37+x > 29+(40−x), so x>16 and at least 17.",
    hint: "Assume every remaining vote not given to Alfred goes to his closest rival.",
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
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A net is folded into a rectangular box. What is its volume?",
    options: [
      "43 cm³",
      "70 cm³",
      "80 cm³",
      "100 cm³",
      "1820 cm³"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the box net's three dimensions are visual.",
    hint: "Read the three edge lengths from the net and multiply them.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "43 cm³",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "70 cm³",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "80 cm³",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "100 cm³",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "1820 cm³",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Numbers are written in the squares so each equals the sum of its two adjacent squares. Two values are given. What goes in square x?",
    options: [
      "10",
      "7",
      "13",
      "−13",
      "−3"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the square layout and given values are visual.",
    hint: "Write one sum equation for each square and solve the resulting linear relations.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "−13",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "−3",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Simon runs around a 50 m by w rectangular pool while Jan swims lengths. Simon runs three times as fast as Jan swims. During six swimming lengths, Simon completes five laps. What is the pool width?",
    options: [
      "25 m",
      "40 m",
      "50 m",
      "80 m",
      "180 m"
    ],
    answer: 1,
    explanation: "In the same time Simon covers 5 perimeters and Jan 6 lengths of 50 m. The speed ratio gives 5·2(50+w)=3·300, so w=40 m.",
    hint: "Equate the distances using the 3:1 speed ratio over the same elapsed time.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "25 m",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "40 m",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "50 m",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "80 m",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "180 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "A 4×6 flag has a dove of area 192 cm² made from straight edges and circular arcs. What are the flag's dimensions?",
    options: [
      "6×4 cm",
      "12×8 cm",
      "20×12 cm",
      "24×16 cm",
      "30×20 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the dove's area relative to the 4×6 grid is visual.",
    hint: "Determine the area of one grid cell from the dove area, then scale the 4 by 6 grid.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "6×4 cm",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "12×8 cm",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "20×12 cm",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "24×16 cm",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "30×20 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "Points N, M and L lie on the sides of an equilateral triangle of area 36 cm², with NM⊥BC, ML⊥AB and LN⊥AC. What is the area of triangle LMN?",
    options: [
      "9 cm²",
      "12 cm²",
      "15 cm²",
      "16 cm²",
      "18 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the perpendicular placement and inner triangle require the source geometry; the key indicates B.",
    hint: "Use symmetry and the perpendicular constraints to compare the inner triangle's area with the equilateral triangle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "9 cm²",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "12 cm²",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "15 cm²",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "16 cm²",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "18 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-26.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "Bettina spends 85% less than Claudia, while Anna spends 60% more than Claudia. Together they spend €55. How much does Anna spend?",
    options: [
      "€3",
      "€20",
      "€25",
      "€26",
      "€32"
    ],
    answer: 4,
    explanation: "Let Claudia spend x. Bettina spends 0.15x and Anna 1.6x, so 2.75x=55 and x=20. Anna spends €32.",
    hint: "Express all three amounts as multiples of Claudia's spending.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "€3",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "€20",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "€25",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "€26",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "€32",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Viola's average long jump is 3.80 m. A 3.99 m jump raises the mean to 3.81 m. What jump next raises it to 3.82 m?",
    options: [
      "3.97 m",
      "4.00 m",
      "4.01 m",
      "4.03 m",
      "4.04 m"
    ],
    answer: 2,
    explanation: "If n previous jumps average 3.80, then (3.80n+3.99)/(n+1)=3.81 gives n=18. To raise the 20-jump mean to 3.82, the next jump must be 4.01 m.",
    hint: "Use the first mean change to find the number of previous jumps, then solve for the next result.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "3.97 m",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "4.00 m",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "4.01 m",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "4.03 m",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "4.04 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "In isosceles triangle ABC with base AC, points K and L lie on AB and BC with AK=KL=LB and KB=AC. What is angle ABC?",
    options: [
      "30°",
      "35°",
      "36°",
      "40°",
      "44°"
    ],
    answer: 2,
    explanation: "Let each of AK, KL and LB be x and each equal side AB=BC be s. Since KB=AC, we have s−x=2s sin(∠ABC/2). In triangle BKL, the cosine rule and KL=LB=x give s−x=2x cos(∠ABC). Combining these relations yields ∠ABC=36°, option C.",
    hint: "Use KB=AC to relate the triangle's base to its equal sides, then apply the cosine rule to triangle BKL.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "30°",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "35°",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "36°",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "40°",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "44°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "Six dominoes must be arranged so touching halves show equal dots. A move swaps two dominoes or turns one 180°. What is the minimum number of moves needed?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "It is impossible"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the six domino values and starting order are visual; the key indicates C.",
    hint: "Find the required chain order and orientation, then count the fewest swaps and flips needed.",
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "It is impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2018/questions/editor-q-30.png"
  }
];

const sections2018Kadett: Section[] = [
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

export const edition2018Kadett: QuestionSet = {
  id: "kadett-2018",
  year: 2018,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 15, 2018",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2018/2018_Kadett.pdf",
  questions: questions2018Kadett,
  sections: sections2018Kadett,
};
