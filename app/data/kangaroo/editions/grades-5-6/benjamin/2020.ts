import type { Question, QuestionSet, Section } from "../../../types";

const questions2020Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which tile completes the wall next to it?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the wall pattern and five tile choices are visual.",
    hint: "Compare the edges and colours exposed around the missing tile with each candidate.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-01.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-01-extra.png",
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
    prompt: "Amira travels from Atown to Betown and passes two road signs. One sign has a hidden number. What is the number?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the two road signs and their mile markers are shown in the source picture.",
    hint: "Use the distances and direction of travel shown on the two signs to determine the hidden value.",
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "A board is formed from small white and dark squares. After a quarter-turn, how can the board appear?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the board and five rotated patterns are visual.",
    hint: "Rotate the whole pattern 90 degrees without changing the relative positions of its squares.",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-03.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-03-extra.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Ana lights a candle every 10 minutes. Each candle lasts 40 minutes. After 55 minutes, how many candles are lit?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "Candles started at 0, 10, 20, 30, 40 and 50 minutes. The first has gone out after 40 minutes, leaving four lit at 55 minutes.",
    hint: "List each lighting time and remove candles that have already burned for 40 minutes.",
    sourcePage: 1,
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
        text: "3",
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Turning a card around its top edge shows a kangaroo photo. If the card is turned around its right edge instead, what appears?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the card image and five views are visual.",
    hint: "Track which edge is used as the hinge and how the picture rotates around that edge.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-05.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Bia has five coins and buys a fruit using exactly three coins without change. Which price cannot be paid?",
    options: [
      "1.30",
      "1.35",
      "1.40",
      "1.55",
      "1.75"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the denominations of Bia's five coins are shown in the source picture.",
    hint: "List the sums of every three-coin combination and compare them with the prices.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "1.30",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "1.35",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "1.40",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "1.55",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "1.75",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A bush has branches with either seven leaves or four leaves and one flower. It has 9 flowers and 120 leaves. How many branches does it have?",
    options: [
      "14",
      "21",
      "28",
      "35",
      "42"
    ],
    answer: 1,
    explanation: "The 9 flowering branches have 4 leaves each, accounting for 36 leaves. The remaining 84 leaves are on 84 ÷ 7 = 12 other branches, so there are 21 branches.",
    hint: "Subtract the leaves on the flowering branches, then divide the rest by seven.",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "42",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Cynthia colours each region red, blue or yellow, with touching regions in different colours. In how many ways can she colour the figure?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the region adjacency diagram is required to count the valid colourings.",
    hint: "Choose a colour for one region, then restrict the choices for every region that touches it.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Five boxes contain 2, 3, 4, 7 and 15 balls. Move balls between boxes so every box has twice or half the number in another box. What is the minimum number of balls to move?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the exact meaning of moving balls between boxes and the allowed final relationships should be checked against the original wording.",
    hint: "Try to make the five final counts form pairs with a 2-to-1 relationship while changing as few balls as possible.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "A white mouse and a dark mouse take different paths through equal-sized squares to the same cheese and arrive at the same time. If the dark mouse runs at 4.5 m/s, how fast does the white mouse run?",
    options: [
      "1 m/s",
      "1.5 m/s",
      "2 m/s",
      "2.5 m/s",
      "3 m/s"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the path lengths through the square maze are shown in the source figure.",
    hint: "Compare the number of equal square-length segments on each route; equal travel times make speed proportional to distance.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1 m/s",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "1.5 m/s",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "2 m/s",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "2.5 m/s",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "3 m/s",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Circles are numbered 0 to 10, each number used once. The five sums of the three numbers on each diameter must be odd. If one sum is as small as possible, what is the largest possible value of another sum?",
    options: [
      "13",
      "15",
      "17",
      "19",
      "21"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the circle arrangement and diameters are shown in the source diagram.",
    hint: "Use the parity of each three-number sum and account for how often each circle belongs to a diameter.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "When the bat Elisa leaves its cave at night, a digital clock shows a time. In the morning she returns and, hanging upside down, sees the clock reflected. How long was she out?",
    options: [
      "2 h 48 min",
      "2 h 59 min",
      "3 h 39 min",
      "3 h 41 min",
      "3 h 49 min"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the departure display and reflected return display are absent from the extracted text.",
    hint: "Convert the reflected display to the actual return time, then subtract the departure time.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "2 h 48 min",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "2 h 59 min",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "3 h 39 min",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "3 h 41 min",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "3 h 49 min",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "There are 2020 brown truth-telling kangaroos and grey kangaroos who always lie, holding hands in a circle. Each says one neighbour is brown and the other is grey. How many are brown?",
    options: [
      "0",
      "1009",
      "1010",
      "2019",
      "2020"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the cyclic truth/lie conditions require an independent parity proof before accepting A.",
    hint: "Translate each animal's statement into a condition on its two neighbours, depending on whether it tells the truth or lies.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "1009",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "1010",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "2019",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "2020",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Maria glues nine white, nine light-grey and nine dark-grey cubes into a larger cube. Which pictured cube did she make?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five coloured cube arrangements are visual.",
    hint: "Check that each visible layer uses the correct number of each shade and that adjacent small cubes fit the views.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-14-extra.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Five figures show paths, drawn with thick lines, between X and Y. Which path is the longest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five paths are visual and have not yet been included.",
    hint: "Count equal-length horizontal and vertical segments for each path, or compare the lengths of its diagonal segments.",
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
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-15-extra.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Mary numbers the two sides of three cards from 1 to 6 and uses the cards to form three-digit numbers. Which number cannot be obtained?",
    options: [
      "134",
      "146",
      "235",
      "245",
      "256"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the numbers printed on the front and back of each card are needed to determine which combination is impossible.",
    hint: "List the two available digits on each card and check whether each proposed number uses one side of each card.",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "134",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "146",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "235",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "245",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "256",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "Which of the pictured rigid wire pieces can be duplicated and joined at their ends to form a closed loop without crossings?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the wire shapes are visual and have not yet been included.",
    hint: "Compare the endpoints and turning directions of two copies of each wire piece.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-17-extra.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "Amelia glues six stickers onto a cube. The cube is shown in two positions. Which sticker is opposite the duck?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the two cube views and sticker labels are visual.",
    hint: "Compare the two views to identify which stickers share an edge with the duck; the remaining face is opposite.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-18.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-18-extra.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Beatriz has sisters aged 2, 3, 5, 8, 10 and 17. She places these ages in the diagram so the sum at the four corners of a square equals the sum in four horizontally aligned circles. What is this sum?",
    options: [
      "13",
      "17",
      "26",
      "32",
      "There is more than one possible value"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the positions in the circle diagram determine which ages contribute to each sum.",
    hint: "Use the fact that each age is used once and compare the circles shared by the two groups.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "17",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "26",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "32",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "There is more than one possible value",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Vases I, II and III contain 4, 3 and 4 litres and look the same size from the front. Which image could show them from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the vase shapes and candidate top views are visual.",
    hint: "The top openings must accommodate the given volumes while preserving the matching front silhouettes.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-20.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "A grey square has area 81 and contains three white squares with sides parallel to its sides. What is the uncovered grey area?",
    options: [
      "25",
      "43",
      "52",
      "68",
      "81"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the areas printed inside the three white squares are missing from the extracted text.",
    hint: "Subtract the three white-square areas from the grey square's total area of 81.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "43",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "52",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "68",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "81",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "John builds a structure from identical cubes to match three shown views, using as many cubes as possible. How many cubes can Ana remove without changing any of the three views?",
    options: [
      "None",
      "12",
      "18",
      "22",
      "34"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the three orthographic views are needed to count the minimum cubes that must remain.",
    hint: "For each cell shown in any view, retain only the minimum stack height required by the other two views.",
    sourcePage: 5,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "None",
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
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "34",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "A panel has four circles. Touching a circle toggles it and every circle touching it. Starting with all white, what is the fewest touches needed to make all circles black?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "More than 5"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the adjacency pattern among the four circles is shown in the source figure.",
    hint: "Represent each touch as toggling a set of circles and combine touches so every circle is toggled an odd number of times.",
    sourcePage: 5,
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
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "More than 5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Which set of weights balances the third scale shown in the picture?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the first two scales and five candidate weight sets are visual.",
    hint: "Use the first two balances to find relationships among the weights, then test each candidate set.",
    sourcePage: 5,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-24.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-24-extra.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "Ten people order four vanilla, three chocolate, two lemon and one mango ice cream, with four umbrellas, three cherries, two wafers and one chocolate gum as toppings. No two orders may be identical. Which flavour-and-topping combination is possible?",
    options: [
      "Chocolate and chocolate gum",
      "Mango and cherry",
      "Lemon and wafer",
      "Mango and wafer",
      "Lemon and cherry"
    ],
    answer: 4,
    explanation: "The four vanilla orders must use four different toppings, so they use one of each. The three chocolate orders must then use three different remaining toppings: umbrellas, cherries and wafers. This leaves umbrellas and cherries for the two lemon orders, one each, and an umbrella for the mango order. Thus lemon and cherry is possible (choice E).",
    hint: "First account for the four vanilla orders: they must use four different toppings. Then track which toppings remain for the other flavours.",
    sourcePage: 5,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "Chocolate and chocolate gum",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "Mango and cherry",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "Lemon and wafer",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "Mango and wafer",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "Lemon and cherry",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "A three-digit number is balanced if its middle digit is the arithmetic mean of the first and last digits. How many balanced numbers are divisible by 18?",
    options: [
      "2",
      "3",
      "6",
      "9",
      "18"
    ],
    answer: 2,
    explanation: "If the middle digit is b, the first and last digits sum to 2b, so the digit sum is 3b. Divisibility by 9 makes b one of 3, 6 or 9. For b=3, the valid even last digits give 234, 432 and 630; for b=6 they give 468, 666 and 864; b=9 gives no three-digit number with a valid first digit. There are 6 such numbers, choice C.",
    hint: "Use the mean condition to express the digit sum in terms of the middle digit; then apply the tests for divisibility by 9 and by 2.",
    sourcePage: 5,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "9",
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
    prompt: "Janaina spends all her money on three toys. First she pays half her money plus 1 real; then half the remainder plus 2 reais; then half the remainder plus 3 reais. How much did she start with?",
    options: [
      "34 reais",
      "36 reais",
      "45 reais",
      "65 reais",
      "100 reais"
    ],
    answer: 0,
    explanation: "Work backwards: before the last purchase she had 6 reais; before the second she had 16; before the first she had 34 reais.",
    hint: "Reverse each step, doubling the amount left after adding back the extra 3, then 2, then 1 real.",
    sourcePage: 6,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "34 reais",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "36 reais",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "45 reais",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "65 reais",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "100 reais",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Dirce builds the pictured sculpture from half-metre cubes and paints it except for the support base. Each can covers 4 m². How many cans does she need?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the sculpture's cube arrangement and support base are shown only in the source diagram.",
    hint: "Count exposed half-metre square faces, exclude the support base, and divide the area by 4 m² per can.",
    sourcePage: 6,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "Vania folds a 3 × 3 sheet first horizontally and then vertically so the coloured square is on top. She writes 1 through 9 so they appear in ascending order from the top after folding. Which values belong at a, b and c?",
    options: [
      "a=9, b=5, c=3",
      "a=4, b=6, c=8",
      "a=7, b=5, c=3",
      "a=3, b=5, c=7",
      "a=6, b=4, c=7"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the coloured square and fold directions are shown in the source diagram.",
    hint: "Trace the stack order created by the horizontal fold, then the vertical fold, and assign the numbers from top to bottom.",
    sourcePage: 6,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "a=9, b=5, c=3",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "a=4, b=6, c=8",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "a=7, b=5, c=3",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "a=3, b=5, c=7",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "a=6, b=4, c=7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "A map shows islands connected by bridges. A navigator must visit each island exactly once, from Cang Island to Uru Island. Having reached the central black island, which direction must the navigator take to complete the route?",
    options: [
      "North",
      "East",
      "South",
      "West",
      "There is more than one possible choice"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the bridge map is required to determine which route continues without revisiting an island.",
    hint: "Trace the remaining unvisited islands and choose the bridge that leaves a complete path to Uru Island.",
    sourcePage: 6,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "North",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "East",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "South",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "West",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "There is more than one possible choice",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2020/questions/editor-q-30.png"
  }
];

const sections2020Benjamin: Section[] = [
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

export const edition2020Benjamin: QuestionSet = {
  id: "benjamin-2020",
  year: 2020,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Brazil",
  date: "2020 (Second Application)",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2020/2020_Benjamin.pdf",
  questions: questions2020Benjamin,
  sections: sections2020Benjamin,
};
