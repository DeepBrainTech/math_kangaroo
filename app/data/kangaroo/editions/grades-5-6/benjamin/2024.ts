import type { Question, QuestionSet, Section } from "../../../types";

const questions2024Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Joey jumps through a maze. The number of arrows in a square tells him how many squares to jump over in that direction. Where does he leave the maze?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "Joey cannot leave"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the maze and arrow counts are shown in the source diagram.",
    hint: "Start in the bottom-left square and follow each arrow for the indicated jump length.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-01.png",
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
        text: "Joey cannot leave",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Mia follows a hopscotch pattern in the direction of the arrow. Prints show whether a square allows a left-foot, right-foot or two-foot landing. In which numbered square may she land with her right foot only?",
    options: [
      "Square 10",
      "Square 1",
      "Square 20",
      "Square 22",
      "Square 23"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the hopscotch print pattern and its continuation are visual.",
    hint: "Repeat the printed sequence in the arrow's direction and track which foot is allowed at each landing.",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "Square 10",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "Square 1",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "Square 20",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "Square 22",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "Square 23",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Dina places three building blocks behind a wall. The arrangement is shown from the front. What does it look like from behind?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the block arrangement and five rear views are visual.",
    hint: "Reverse the left-to-right order when viewing the same arrangement from behind.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-03.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-03-extra.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Mona draws the shown figure without lifting her pen and may retrace segments. Segment lengths are labelled. What is the minimum distance she must draw?",
    options: [
      "6 cm",
      "7 cm",
      "8 cm",
      "9 cm",
      "10 cm"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the graph and segment lengths are shown in the source figure.",
    hint: "Add each segment once, then add the shortest extra retracing needed to make a continuous route.",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "6 cm",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "7 cm",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "8 cm",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "9 cm",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "10 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Pieter has a 445 g parcel and eight weights. The parcel is on the right scale pan, and weights may go on either side. What is the minimum number of weights needed to balance it?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the eight available weight values are shown in the source picture.",
    hint: "Represent the balance as a difference of selected weights that totals 445 g.",
    sourcePage: 2,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Werner has a transparent circular paper with holes and lines and folds it along the dashed line. What does the folded paper look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the circular pattern and fold line are visual.",
    hint: "Reflect each hole and line across the dashed fold line, keeping its distance from the line unchanged.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-06.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-06-extra.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Two children fly kites. Which picture fits the empty space so each child is holding one kite?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the children, strings and missing picture choices are visual.",
    hint: "Match each kite string continuously to one child's hand without crossing or disconnecting it.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-07.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-07-extra.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Eight boxes are on a lorry. A worker may unload only a box with nothing on top, placing it on the floor or another box; each box is touched once. Which tower cannot be built?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the initial box arrangement and target towers are visual.",
    hint: "A box buried below another must be removed later, so check which target orders respect that dependency.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-08.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-08-extra.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Pia writes a number in each of 16 small circles. Neighbouring circles differ by 1. She writes 5 in one circle and 13 in another. How many different numbers occur?",
    options: [
      "9",
      "10",
      "13",
      "14",
      "16"
    ],
    answer: 0,
    explanation: "Any path of neighbouring circles from 5 to 13 must pass through every integer from 5 to 13, giving at least nine different values; the arrangement permits exactly those nine.",
    hint: "A sequence of steps changing by only 1 cannot go from 5 to 13 without using all intermediate integers.",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "10",
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
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "A 45 cm by 30 cm picture is made of identical rectangles. What is the area of one rectangle?",
    options: [
      "24 cm²",
      "27 cm²",
      "30 cm²",
      "33 cm²",
      "36 cm²"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the arrangement and count of identical rectangles are shown in the source picture.",
    hint: "Use the picture's grid to find how many identical rectangles cover the 45 × 30 cm area.",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "24 cm²",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "27 cm²",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "30 cm²",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "33 cm²",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "36 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Hotel rooms are numbered consecutively from 1. Across all room numbers, digit 2 appears 14 times and digit 5 appears 3 times. What is the largest possible room number?",
    options: [
      "25",
      "26",
      "34",
      "35",
      "41"
    ],
    answer: 2,
    explanation: "From 1 to 34, digit 2 appears ten times in the tens place (20–29) and four times in the units place (2, 12, 22 and 32), for 14 appearances. Digit 5 appears in 5, 15 and 25, for three. Room 35 would be a fourth 5, so 34 is the largest possible last room.",
    hint: "Count each digit separately in the tens and units places, and check what changes at the next possible room number.",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "26",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "34",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "41",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Four small grey squares are cut from a large square. The remaining white shape has half the area of the large square. The small-square side lengths are shown. What is the white shape's perimeter?",
    options: [
      "36",
      "40",
      "44",
      "48",
      "52"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the four side lengths are shown in the source diagram.",
    hint: "Use the half-area condition to relate the large square's side to the four cut-out squares, then count the remaining boundary.",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "36",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "44",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "48",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "52",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "How many different four-digit numbers greater than 2024 can be made using exactly the digits 2, 0, 2 and 4?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the distinct permutations greater than 2024 are 2042, 2204, 2240, 2402 and 2420, so the count is 5 (B); the extracted answer key indicates E.",
    hint: "List the distinct permutations, exclude those beginning with zero, and compare each with 2024.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Simon places four cups randomly on four matching saucers. Which statement is definitely true?",
    options: [
      "None match",
      "Exactly one matches",
      "Exactly two matching is impossible",
      "Exactly three matching is impossible",
      "All four matching is impossible"
    ],
    answer: 3,
    explanation: "A permutation cannot have exactly three fixed cups: if three cups are on their own saucers, the fourth must also be on its own saucer.",
    hint: "Think about what must happen to the final cup if the other three are already correctly placed.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "None match",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Exactly one matches",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Exactly two matching is impossible",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "Exactly three matching is impossible",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "All four matching is impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Four rectangles touch as shown. What is the area of the rectangle marked with a question mark?",
    options: [
      "12 cm²",
      "14 cm²",
      "16 cm²",
      "18 cm²",
      "20 cm²"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the labelled lengths and rectangle arrangement are visual.",
    hint: "Use the shared side lengths and equal areas or dimensions indicated in the diagram.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "12 cm²",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "14 cm²",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "16 cm²",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "18 cm²",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "20 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Braille digits use up to six tactile dots. How many two-digit numbers have exactly four black dots in total?",
    options: [
      "11",
      "12",
      "21",
      "22",
      "23"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the Braille dot patterns for digits 0 through 9 are needed to count the two-digit combinations.",
    hint: "Count the dots in each tens and units digit, then count pairs whose dot counts sum to four.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "23",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 5,
    prompt: "Two equal-area large squares contain grey regions. Dots divide the left square's sides in half and the right square's sides in thirds. The left grey area totals 9 cm². What is the right grey area?",
    options: [
      "4 cm²",
      "8 cm²",
      "9 cm²",
      "10 cm²",
      "12 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the positions and shapes of the grey regions are shown in the source figure.",
    hint: "Express each grey part as a fraction of its square, then use that the large squares have equal area.",
    sourcePage: 4,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "4 cm²",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "8 cm²",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "9 cm²",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "10 cm²",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "12 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Annie writes 1 to 10 in ten circles so the four numbers along each line sum to 23. What number belongs in the question-mark circle?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the ten-circle layout and line connections are visual.",
    hint: "Add the line totals and account for circles that are included in more than one line.",
    sourcePage: 4,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "5",
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
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "A city map has seven subway lines represented by circles at stations. Lines sharing a station need different colours. What is the minimum number of colours?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the subway-line intersection graph is shown in the source map.",
    hint: "Find groups of lines that all meet pairwise for a lower bound, then test a colouring of the full map.",
    sourcePage: 4,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Dimitri folds a net into a cube. Triangles sharing an edge must have the same colour. How should the triangles in the white square be coloured?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the cube net and triangle colours are visual.",
    hint: "Fold the net and match triangles that become adjacent on the cube's faces.",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-20.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Mary labels the cube's eight corners with 1 through 8 so every face has the same corner sum. The values 6, 7 and 8 are already placed. What goes in the question-mark corner?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the locations of 6, 7, 8 and the question mark on the cube are visual.",
    hint: "Write equations for the sums on adjacent faces and compare faces that share corners.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "Daniel marks cuts to divide a rope into 12 equal pieces. Mohammed marks cuts to divide it into 16 equal pieces. Maya cuts at every marked spot. How many pieces result?",
    options: [
      "24",
      "25",
      "27",
      "28",
      "29"
    ],
    answer: 0,
    explanation: "The cut positions overlap at the three quarter points. There are 11 + 15 - 3 = 23 distinct internal cuts, making 24 pieces.",
    hint: "Count both sets of internal cut points and subtract those that coincide.",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "25",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "27",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "29",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "A 16-cell honeycomb has some filled cells. Each number gives how many neighbouring cells are filled. How many cells contain honey?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the neighbour counts in the honeycomb diagram are visual.",
    hint: "Translate each cell's number into a constraint on its neighbouring cells and count a consistent filling.",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Three identical dice are on a table. What is the sum of the numbers on their bottom faces?",
    options: [
      "26",
      "40",
      "43",
      "47",
      "56"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the visible faces of the three dice are needed to determine their bottom faces.",
    hint: "Use the opposite-face relationships of a standard die to find the number hidden underneath each die.",
    sourcePage: 4,
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
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "43",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "47",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "56",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2024/questions/editor-q-24.png"
  }
];

const sections2024Benjamin: Section[] = [
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

export const edition2024Benjamin: QuestionSet = {
  id: "benjamin-2024",
  year: 2024,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 21, 2024",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2024/2024_Benjamin.pdf",
  questions: questions2024Benjamin,
  sections: sections2024Benjamin,
};
