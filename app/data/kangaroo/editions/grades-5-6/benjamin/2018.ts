import type { Question, QuestionSet, Section } from "../../../types";

const questions2018Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Three darts are thrown at nine fixed balloons. A hit balloon bursts and the dart continues in the same direction. How many balloons are not hit?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the balloon grid and dart paths are shown in the source diagram.",
    hint: "Follow each dart in a straight line, remembering that it continues after every balloon it bursts.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-01.png",
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
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Peter places three building blocks on a table as shown. What does he see when looking at them from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the block arrangement and five top views are visual.",
    hint: "Project each block vertically onto the table and compare the resulting footprints.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-02.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-02-extra.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "A target board awards points according to the area hit. Diana throws two darts three times. She scores 14 on the first attempt and 16 on the second. How many points does she score on the third?",
    options: [
      "17",
      "18",
      "19",
      "20",
      "22"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the point values of the three target regions are shown in the missing diagram.",
    hint: "List the two-dart combinations that make 14 and 16, then use them to determine the third total.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "A garden is divided into equal square lots. A slow snail walks along the outside at 1 m per hour, and a fast snail walks the other way at 2 m per hour. Both start at S. At which position do they first meet?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the perimeter divisions and labelled positions are shown in the source picture.",
    hint: "The snails approach each other at a combined speed of 3 m per hour; find how far around the boundary they meet.",
    sourcePage: 1,
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "A star consists of a square and four triangles. All sides of the triangles are equal. The square has perimeter 36 cm. What is the perimeter of the star?",
    options: [
      "144 cm",
      "120 cm",
      "104 cm",
      "90 cm",
      "72 cm"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the star's exact construction is shown in the diagram; confirm which triangle sides form its outside boundary.",
    hint: "The square's side is 9 cm. Count the equal triangle edges that remain on the star's outer boundary.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "144 cm",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "120 cm",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "104 cm",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "90 cm",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "72 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Ink covers most of a calendar page for a month. Which day of the week is the 25th of that month?",
    options: [
      "Monday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the visible calendar dates and weekdays are needed to determine the 25th.",
    hint: "Use the visible date-to-weekday alignment and count forward to the 25th.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "Monday",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Wednesday",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Thursday",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "Saturday",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "Sunday",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "How many times must an ordinary die be rolled to be certain that at least one number appears twice?",
    options: [
      "5",
      "6",
      "7",
      "12",
      "18"
    ],
    answer: 2,
    explanation: "In six rolls all six numbers could appear once. The seventh roll must repeat one of them.",
    hint: "Consider the longest possible sequence of rolls with no repeated result.",
    sourcePage: 1,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "A figure is made from three squares. The smallest square has side length 6 cm. How long is the side of the biggest square?",
    options: [
      "8 cm",
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the arrangement of the three squares is shown in the source figure.",
    hint: "Use the shared edges in the diagram to relate the side lengths of the three squares.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "8 cm",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "10 cm",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "12 cm",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "14 cm",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "16 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Alice subtracts one two-digit number from another and paints over two digits in the calculation. What is the sum of the painted digits?",
    options: [
      "8",
      "9",
      "12",
      "13",
      "15"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the subtraction with its two hidden digits is not preserved in the extracted text.",
    hint: "Use the visible digits and subtraction rules to recover the missing digits, including any borrowing.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "Circles represent light bulbs connected to other bulbs. All are initially off. Touching a bulb switches it and all directly adjacent bulbs on. What is the minimum number of bulbs to touch to switch them all on?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the bulb connection graph is shown in the source diagram.",
    hint: "Choose bulbs whose neighbourhoods cover every vertex in the connection graph.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "4",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Four equally sized squares are partly coloured black. In which square is the total black area largest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "The black areas are equal"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the four shaded-square diagrams are visual.",
    hint: "Rearrange or compare the black regions by area rather than by their shapes.",
    sourcePage: 2,
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
        text: "The black areas are equal",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Four smudges hide four of the numbers 1, 2, 3, 4 and 5. The calculations along two arrows are correct. Which number is under the starred smudge?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the arrow calculations and location of the starred smudge are visual.",
    hint: "Use each correct arrow calculation to constrain the numbers hidden by its smudges.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "A lion hides in one of three rooms. The notes say: room 1, 'The lion is not here'; room 2, 'The lion is here'; room 3, '2 + 3 = 5'. Exactly one note is true. Where is the lion?",
    options: [
      "Room 1",
      "Room 2",
      "Room 3",
      "It can be in any room",
      "Room 1 or room 2"
    ],
    answer: 0,
    explanation: "If the lion is in room 1, the first two notes are false and the arithmetic note is true. Exactly one note is true, so room 1 is correct.",
    hint: "Test each possible room and count how many of the three statements become true.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "Room 1",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "Room 2",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "Room 3",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "It can be in any room",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "Room 1 or room 2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Eva, Olga, Adam, Isaac and Urban pass a ball. A girl throws to the other girl or to a boy; a boy throws to another boy, but not to the boy who just passed it. Eva makes the first throw to Adam. Who makes the fifth throw?",
    options: [
      "Adam",
      "Eva",
      "Isaac",
      "Olga",
      "Urban"
    ],
    answer: 0,
    explanation: "Eva makes the first throw to Adam. Adam must throw to Isaac or Urban; that boy must then throw to the other one. On the next throw, the boy holding the ball must pass to Adam, since he cannot throw it back to the boy who just passed it. So Adam makes the fifth throw.",
    hint: "Follow the three boys' turns, remembering that each boy must pass to a different boy from the one who just threw to him.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "Adam",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Eva",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Isaac",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "Olga",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Urban",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A die's faces are white, grey or black, and opposite faces always have different colours. Which of the five nets cannot make such a die?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the five coloured cube nets are visual and have not yet been included.",
    hint: "Fold each net mentally and check the colours on every pair of opposite faces.",
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
        text: "E",
        imageAlt: "E option"
      }
    ],
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-15-extra.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Monika chooses three different numbers from 1 through 7 whose sum is 8. Daniel chooses three different numbers from the same list whose sum is 7. How many numbers did they choose in common?",
    options: [
      "None",
      "1",
      "2",
      "3",
      "It cannot be determined"
    ],
    answer: 2,
    explanation: "The triples summing to 8 are {1, 2, 5} and {1, 3, 4}; the triple summing to 7 is {1, 2, 4}. It shares 1 and 2 with the first triple, or 1 and 4 with the second, so either way they have two numbers in common.",
    hint: "List the distinct triples from 1 to 7 that sum to 8 and to 7, then compare them.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "None",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Emily writes numbers in every small triangle so that triangles sharing a side have the same sum. Two numbers are given. What is the sum of all numbers in the figure?",
    options: [
      "18",
      "20",
      "21",
      "22",
      "It cannot be calculated"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the triangle layout and the two given values are shown only in the diagram.",
    hint: "Write equations for adjacent triangles and use the repeated equal-sum condition to relate the unknown entries.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "It cannot be calculated",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Hannes uses different letters A, B, C and D for different digits in a calculation. Which digit does B represent?",
    options: [
      "0",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the calculation using A, B, C and D is missing from the extracted text.",
    hint: "Use the column carries and the fact that different letters represent different digits.",
    sourcePage: 3,
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "Four ladybirds occupy different cells of a 4 × 4 grid. One stays still; the other three move to adjacent free cells at each whistle and may not return to the cell they just left. Where could they be after the fourth whistle?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the initial ladybird locations and five candidate boards are visual.",
    hint: "Track the three moving ladybirds one whistle at a time, respecting occupied cells and the no-immediate-return rule.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-19.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-19-extra.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Five balls weigh 30 g, 50 g, 50 g, 50 g and 80 g. Which ball weighs 30 g?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the scale comparisons identifying the five weights are shown in the source diagram.",
    hint: "Translate each balance comparison into an equation and use the known multiset of five weights.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Three different digits A, B and C form the largest possible six-digit number using A three times, B twice and C once. Which representation cannot be that number?",
    options: [
      "AAABBC",
      "CAAABB",
      "BBAAAC",
      "AAABCB",
      "AAACBB"
    ],
    answer: 3,
    explanation: "The largest possible number must list the digits in descending order. In AAABCB, the C appears after a B, so it cannot be the largest arrangement.",
    hint: "For the largest number, digits must be arranged from greatest to least.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "AAABBC",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "CAAABB",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "BBAAAC",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "AAABCB",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "AAACBB",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Kathi's age plus her mother's age is 36. Her mother's age plus her grandmother's age is 81. How old was the grandmother when Kathi was born?",
    options: [
      "28",
      "38",
      "45",
      "53",
      "56"
    ],
    answer: 4,
    explanation: "The grandmother's age when Kathi was born equals grandmother's current age minus Kathi's age. Subtracting the two equations gives grandmother minus Kathi = 81 - 36 = 45.",
    hint: "Subtract the first age sum from the second; the mother's age cancels.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "38",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "45",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "53",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "56",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Nick divides the numbers 2 through 10 into groups with equal sums. What is the greatest number of groups he can make?",
    options: [
      "2",
      "3",
      "4",
      "6",
      "Another number"
    ],
    answer: 1,
    explanation: "Three groups of 18 are possible: {2, 7, 9}, {3, 5, 10} and {4, 6, 8}. Four groups are impossible because the total 54 is not divisible by 4, and six groups would each sum to 9, but 10 cannot fit in such a group. So the maximum is 3.",
    hint: "Find the total sum, list its divisors as possible group counts, and test whether the numbers can be partitioned accordingly.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "2",
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
        text: "4",
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
        text: "Another number",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "The shown figure consists of one square and eight rectangles, each 8 cm wide. Peter assembles all pieces into one long rectangle 8 cm wide. How long is it?",
    options: [
      "150 cm",
      "168 cm",
      "196 cm",
      "200 cm",
      "232 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the square and rectangle dimensions are labelled in the source figure.",
    hint: "Preserve the total area of all nine pieces, then divide by the assembled rectangle's 8 cm width.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "150 cm",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "168 cm",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "196 cm",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "200 cm",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "232 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2018/questions/editor-q-24.png"
  }
];

const sections2018Benjamin: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 9–16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 17–24",
    accent: "purple"
  }
];

export const edition2018Benjamin: QuestionSet = {
  id: "benjamin-2018",
  year: 2018,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 15, 2018",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2018/2018_Benjamin.pdf",
  questions: questions2018Benjamin,
  sections: sections2018Benjamin,
};
