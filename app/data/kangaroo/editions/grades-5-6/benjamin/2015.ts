import type { Question, QuestionSet, Section } from "../../../types";

const questions2015Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In which shape is exactly one half coloured grey?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "In shape B, a line from the triangle's vertex to the midpoint of its base divides it into two equal areas. Exactly one of those halves is grey, so B is correct.",
    hint: "Look for a division into two equal-area parts, and check whether exactly one part is grey.",
    sourcePage: 1,
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-01-extra.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The word KANGAROO is written on the top side of an umbrella. Which picture does not show the umbrella?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the umbrella's orientation and the five views are shown in source pictures.",
    hint: "Imagine turning the umbrella while keeping the lettering attached to its top surface.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-02.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-02-extra.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Sam paints the nine small squares in the shape white, grey or black. What is the minimum number he must repaint so that no two squares sharing a side have the same colour?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the initial colouring and arrangement of the nine squares are shown in the source diagram.",
    hint: "Check each pair of side-sharing squares and find a smallest set of squares whose colours can be changed to fix every conflict.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Mr Bauer has 10 ducks. Five lay an egg every day, and the other five lay an egg every second day. How many eggs do they lay in 10 days?",
    options: [
      "75",
      "60",
      "50",
      "25",
      "10"
    ],
    answer: 0,
    explanation: "The daily layers produce 5 × 10 = 50 eggs. The other five produce 5 eggs every two days, or 25 in 10 days. The total is 75.",
    hint: "Count the eggs from the daily layers and the alternate-day layers separately.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "75",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "60",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "25",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Each square in the shape has area 4 cm². How long is the thick line?",
    options: [
      "16 cm",
      "18 cm",
      "20 cm",
      "21 cm",
      "23 cm"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the thick line's length depends on the squares it crosses in the source diagram.",
    hint: "A square of area 4 cm² has side length 2 cm. Count the side-length units along the thick line.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "16 cm",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "18 cm",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "20 cm",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "21 cm",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "23 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Which of the following fractions is smaller than 2?",
    options: [
      "198/99",
      "98/99",
      "20/10",
      "21/11",
      "23/12"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the stacked fraction choices were unclear in extraction; verify each numerator and denominator from the source before confirming E.",
    hint: "Compare each numerator with twice its denominator; a fraction is less than 2 exactly when its numerator is smaller.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "198/99",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "98/99",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "20/10",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "21/11",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "23/12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "How much does Dita weigh?",
    options: [
      "2 kg",
      "3 kg",
      "4 kg",
      "5 kg",
      "6 kg"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the balance or weighing diagram is needed to determine Dita's weight.",
    hint: "Use the equalities shown in the weighing diagram to compare Dita's weight with the known weights.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "2 kg",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "3 kg",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "4 kg",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "5 kg",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "6 kg",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Peter looks more closely at a picture hanging on the wall through a magnifying glass. Which section can he not see?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the full picture and magnified sections are visual and have not yet been included.",
    hint: "A magnifying glass enlarges one part of the picture without changing the pattern within that part.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-08.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-08-extra.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Each plant in John's garden has exactly five leaves, or exactly two leaves and one flower. Altogether, the plants have six flowers and 32 leaves. How many plants are there?",
    options: [
      "10",
      "12",
      "13",
      "15",
      "16"
    ],
    answer: 0,
    explanation: "Six plants have flowers and two leaves each, accounting for 12 leaves. The remaining 20 leaves belong to 4 plants with five leaves each. There are 10 plants.",
    hint: "The six flowers identify six plants of the two-leaf type; subtract their leaves from the total.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "Andrea has four equally long strips of paper. Gluing two together with a 10 cm overlap makes a 50 cm strip. With the other two she wants a 56 cm strip. How large must the second overlap be?",
    options: [
      "4 cm",
      "6 cm",
      "8 cm",
      "10 cm",
      "12 cm"
    ],
    answer: 0,
    explanation: "Each original strip is 30 cm because 2L - 10 = 50. To make 56 cm, the overlap must be 2 × 30 - 56 = 4 cm.",
    hint: "First find the length of one strip from the 50 cm result, then calculate the overlap needed for 56 cm.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "4 cm",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "6 cm",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "8 cm",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "10 cm",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "12 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Thomas made the shown shape from six unit squares. What is its perimeter?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement of the six unit squares is required to count the exposed edges.",
    hint: "Count the outer unit edges, or subtract twice the number of shared edges from 4 × 6.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "11",
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
        text: "13",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Each day Maria writes the date and adds its digits. For example, on 23 March she writes 23.03 and calculates 2 + 3 + 0 + 3 = 8. What is the largest total she gets during a year?",
    options: [
      "7",
      "13",
      "14",
      "16",
      "20"
    ],
    answer: 4,
    explanation: "The largest digit sum uses a date with day 29 and month 09: 2 + 9 + 0 + 9 = 20.",
    hint: "Choose the month and valid day whose written digits have the greatest possible sum.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "A rectangle is formed from four equally sized smaller rectangles. The shorter side is 10 cm. How long is the longer side?",
    options: [
      "40 cm",
      "30 cm",
      "20 cm",
      "10 cm",
      "5 cm"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the arrangement of the four smaller rectangles is shown in the source diagram.",
    hint: "Use the fact that all four smaller rectangles are congruent to relate their short and long sides in the assembled shape.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "40 cm",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "30 cm",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "20 cm",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "10 cm",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "5 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Field Street has nine houses in a row, with at least one person in each. Every pair of neighbouring houses has at most six inhabitants altogether. What is the maximum number of people on Field Street?",
    options: [
      "23",
      "25",
      "27",
      "29",
      "31"
    ],
    answer: 3,
    explanation: "The maximum arrangement alternates 5 and 1 inhabitants, starting and ending with 5. Every neighbouring pair totals 6, and the total is 5 × 5 + 4 × 1 = 29.",
    hint: "Each adjacent pair is capped at six, so large houses must be separated by houses with as few people as allowed.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "23",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "25",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "27",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "29",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "31",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Lucy and her mother were both born in January. On 23 March 2015 Lucy adds their birth years and their ages. What total does she get?",
    options: [
      "4028",
      "4029",
      "4030",
      "4031",
      "4032"
    ],
    answer: 2,
    explanation: "For each person, birth year plus age is 2015 because both January birthdays have already passed. The total is 2015 + 2015 = 4030.",
    hint: "For each person, add the birth year to the age reached after the birthday in January.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "4028",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "4029",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "4030",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "4031",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "4032",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "A rectangle has area 12 cm² and natural-number side lengths. Which perimeter could it have?",
    options: [
      "20 cm",
      "26 cm",
      "28 cm",
      "32 cm",
      "48 cm"
    ],
    answer: 1,
    explanation: "The integer factor pairs of 12 are 1 × 12 and 2 × 6, giving perimeters 26 cm and 16 cm. Only 26 cm is listed.",
    hint: "List the factor pairs of 12 and calculate 2(length + width) for each.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "20 cm",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "26 cm",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "28 cm",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "32 cm",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "48 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Each of the nine sides of the triangles in the picture is coloured blue, green or red. Three sides are already red. Each triangle must have three different colours on its sides. Which colour can side x have?",
    options: [
      "Only blue",
      "Only green",
      "Only red",
      "Any of the three colours",
      "The described colouring is not possible"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the triangle connections and pre-coloured sides are shown in the source picture.",
    hint: "Use the three-different-colours rule on each triangle that contains side x.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "Only blue",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "Only green",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "Only red",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "Any of the three colours",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "The described colouring is not possible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "A sack contains 3 green apples, 5 yellow apples, 7 green pears and 2 yellow pears. Without looking, how many pieces of fruit must Sebastian take to be sure of getting an apple and a pear of the same colour?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 4,
    explanation: "A draw of 12 can still avoid a same-colour apple-and-pear pair: take all 7 green pears and all 5 yellow apples. The next fruit must be a green apple or a yellow pear, completing a matching-colour pair either way. Therefore 13 fruits are needed.",
    hint: "For each colour, avoid taking both its apples and its pears; use the largest possible single fruit group of each colour.",
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
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "For the game of Chess a new piece, the Kangaroo, has been invented. With each jump the kangaroo jumps either 3 squares vertically and 1 Horizontally, or 3 horizontally and 1 vertically, as pictured. What is the smallest number of jumps the kangaroo must make to move from its current position to position A?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the starting square and target A are shown in the board diagram.",
    hint: "List the squares reachable in one jump, then check which of those can reach A in the next jump.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "4",
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
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Sarah bought three books. For the first book she paid half of her money plus 1 Euro more. For the second book she paid again half of her left-over money plus 2 Euro's more. For the third book she paid again half of her left-over money plus 3 Euro's more. After which she had spent all of her money. How much money did she have to begin with?",
    options: [
      "45 €",
      "36 €",
      "34 €",
      "33 €",
      "30 €"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the key appears to indicate C, but reducing 60 minutes modulo the 13-minute playlist and accounting for the unknown position within song C needs source clarification.",
    hint: "The playlist lasts 13 minutes; reduce one hour modulo 13, while accounting for when in song C Andy left.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "45 €",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "36 €",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "34 €",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "33 €",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "30 €",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Nina wants to make a cube from the shown paper net, which has seven squares. Which square or squares can she remove so the remaining six stay connected and form a cube net?",
    options: [
      "Only 4",
      "Only 7",
      "Only 3 or 4",
      "Only 3 or 7",
      "Only 3, 4 or 7"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the seven-square net is visual, and the possible removals must be tested against its exact layout.",
    hint: "After removing a square, check both that the net stays connected and that folding it can give six distinct cube faces.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "Only 4",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "Only 7",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "Only 3 or 4",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "Only 3 or 7",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "Only 3, 4 or 7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "A train has 12 carriages with the same number of compartments in each. Mike sits in the 18th compartment behind the engine, in the third carriage. Joanna sits in the 50th compartment, in the seventh carriage. How many compartments are in each carriage?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "12"
    ],
    answer: 1,
    explanation: "If each carriage has n compartments, the seventh carriage contains compartments 6n + 1 through 7n. Since compartment 50 is in it, 6n < 50 ≤ 7n, which forces n = 8. Then carriage 3 contains compartments 17–24, including compartment 18.",
    hint: "Use the global compartment numbers that can lie in carriage 7 to narrow the number per carriage, then check carriage 3.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "In how many ways can three kangaroos be placed in three different squares so that no kangaroo has an immediate neighbour?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the board shape and definition of immediate neighbour are shown in the source diagram.",
    hint: "Count placements that leave at least one empty square between each pair of kangaroos.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Maria writes a number on each face of the cube. Then, for each corner point of the cube, she adds the numbers on the faces which meet at that corner. (For corner B she adds the numbers on faces BCDA, BAEF and BFGC.) In this way she gets a total of 14 for corner C, 16 for corner D, and 24 for corner E. Which total, does she get for corner F?",
    options: [
      "15",
      "19",
      "22",
      "24",
      "26"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the cube's face labels and corner relationships are needed to derive the total at F.",
    hint: "Write an equation for each known corner total and compare the three faces shared by neighbouring corners.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "22",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "26",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2015/questions/editor-q-24.png"
  }
];

const sections2015Benjamin: Section[] = [
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

export const edition2015Benjamin: QuestionSet = {
  id: "benjamin-2015",
  year: 2015,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 23, 2015",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2015/2015_Benjamin.pdf",
  questions: questions2015Benjamin,
  sections: sections2015Benjamin,
};
