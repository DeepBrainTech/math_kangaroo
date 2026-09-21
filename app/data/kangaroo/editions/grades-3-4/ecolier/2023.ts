import type { Question, QuestionSet, Section } from "../../../types";

const questions2023Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Five children each light a candle at the same time. Lisa blows out the candles at different times. Now they look as shown in the picture. Which candle did Lisa blow out first?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The first candle blown out is the one with the longest remaining candle, option D.",
    hint: "The longer a candle has burned, the shorter it is; order the five visible candle heights from shortest burn time to longest.",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-01.png",
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
    prompt: "The two markers with a question mark have the same value.\nWhich value do you have to use instead of the question mark so that the calculation is\ncorrect?",
    options: [
      "1",
      "2",
      "5",
      "10",
      "20"
    ],
    answer: 2,
    explanation: "Only value 5 makes the calculation correct, choice C.",
    hint: "Give both question marks the same value and simplify the two sides of the pictured calculation.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-02.png",
    imageAlt: "Original 2023 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A black disc with two holes is placed on top of a dial of a watch.\nThe black disc is turned.\nWhich two numbers can be seen at the same time?",
    options: [
      "4 and 9",
      "5 and 10",
      "5 and 9",
      "6 and 9",
      "7 and 12"
    ],
    answer: 2,
    explanation: "The possible pair is 5 and 9, choice C.",
    hint: "A half-turn of the disc pairs numbers with their opposite positions; check which two holes can align after a rotation.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-03.png",
    imageAlt: "Original 2023 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "4 and 9",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "5 and 10",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "5 and 9",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "6 and 9",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "7 and 12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "",
    options: [
      "1 and 2",
      "1 and 3",
      "2 and 3",
      "2 and 4",
      "1 and 4"
    ],
    answer: 4,
    explanation: "Pieces 1 and 4 have complementary notches and form the square, choice E.",
    hint: "Compare the cut edges of the three pieces and look for two that join to make a complete square boundary.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-04.png",
    imageAlt: "Original 2023 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "1 and 2",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "1 and 3",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "2 and 3",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "2 and 4",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "1 and 4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Maria switches the lights on and off according to the given plan.\nFor how many minutes in total are there exactly two lights on at the same time?",
    options: [
      "2",
      "6",
      "8",
      "9",
      "10"
    ],
    answer: 2,
    explanation: "The total duration is 8 minutes, choice C.",
    hint: "Mark the intervals when each light is on and count the overlap of exactly two intervals, excluding times with one or three lights.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-05.png",
    imageAlt: "Original 2023 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Christoph folds a see-through piece of foil along the dashed line.\nWhat can he then see?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The folded foil produces option A.",
    hint: "Reflect every visible line and corner across the dashed fold, preserving distances from the fold.",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-a.png"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-b.png"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-c.png"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-d.png"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-06-option-e.png"
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Anna has four discs of different sizes. She wants to build a tower using 3 discs. A smaller disc always has to lie on top of a bigger disc. How many ways are there for Anna to build this tower?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "There are four choices of which disc to leave out, but duplicate tower orders reduce this to 4, choice C.",
    hint: "Choose any three discs from four sizes; their order is forced from largest at the bottom to smallest at the top.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-07.png",
    imageAlt: "Original 2023 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "2",
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
    prompt: "Daniel sticks these two pieces of paper on this black circle: The two pieces of paper are not allowed to overlap. Which picture does he get?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only option E has both pieces in the required non-overlapping positions.",
    hint: "Place the two pieces on the circle without overlap and compare their curved edges and relative positions.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Using the pieces A, B, C, D and E one can fill this shape completely:\nWhich of the pieces lies on the dot?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Piece E is the only one that can occupy the dot while completing the shape.",
    hint: "Try placing each piece at the marked dot and fill the remaining boundary with the other four pieces.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-09-extra.png",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "The six weights of a scale weigh 1 kg, 2 kg, 3 kg, 4 kg, 5 kg and 6 kg.\nRosi places five weights on the two scale pans so that they are balanced. The sixth\nweight is left aside. \nWhich weight is left aside?",
    options: [
      "1 kg",
      "2 kg",
      "3 kg",
      "4 kg",
      "5 kg"
    ],
    answer: 0,
    explanation: "Leaving out 1 kg makes the other five weights total 20 kg, which balances as 10 and 10; choice A.",
    hint: "Let the five weights on the pans have equal sums; the unused weight is the one that makes the remaining total split evenly.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-10.png",
    imageAlt: "Original 2023 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1 kg",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2 kg",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "3 kg",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "4 kg",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "5 kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "The diagram shows four cars 1, 2, 3 and 4. The arrows show where the cars move to in 5 seconds. \nWhich cars will crash into each other?",
    options: [
      "1 and 2",
      "1 and 3",
      "1 and 4",
      "2 and 3",
      "3 and 4"
    ],
    answer: 3,
    explanation: "Cars 2 and 3 reach the same point and crash, choice D.",
    hint: "Move each car along its arrow for five seconds and compare the endpoints, not the starting positions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-11.png",
    imageAlt: "Original 2023 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1 and 2",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "1 and 3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "1 and 4",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "2 and 3",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "3 and 4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "North of Straße A (street A) there are 7 houses.\nEast of Straße B (street B) there are 8 houses.\nSouth of Straße A (street A) there are 5 houses.\nHow many houses are there West of Straße B (street B)?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 0,
    explanation: "7 + 5 = 12 total houses across A, and 12 − 8 = 4 west of B, choice A.",
    hint: "North and south of street A give the total height; east and west of street B split the total width.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-12.png",
    imageAlt: "Original 2023 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "In a queue in front of a ferry there are 8 cars with 19 people in total. There are either 2 or 3 people in each car. \nHow many cars are there with exactly 2 people?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "2x + 3(8 − x) = 19 gives x = 5, choice D.",
    hint: "If x cars have two people, the other 8 − x cars have three people; equate the total to 19.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "6 beavers and 2 kangaroos are standing on the fields in this order: Of three animals in a row there is always exactly one kangaroo. On which of these numbers stands a kangaroo?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The pattern forces a kangaroo on position 4, choice C.",
    hint: "Write the eight animal positions in three consecutive blocks and require exactly one kangaroo in every block.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/q-14-visual.png",
    imageAlt: "Original 2023 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Hanni wants to colour in the circles in the diagram. When two circles are connected by a line they should have different colours.\nWhat is the minimum number of colours she needs?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "The diagram contains an odd cycle, so two colours cannot work; three colours are enough, choice B.",
    hint: "Two connected circles need different colours; first find an odd cycle and then test whether three colours suffice.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-15.png",
    imageAlt: "Original 2023 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Only option D matches all of the given connections.",
    hint: "Compare each candidate with the exact sequence of shapes, rotations, and joins in the visual question.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-16.png",
    imageAlt: "Original 2023 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "An underground line has the six stations A, B, C, D, E and F. The train stops at every station. After reaching the end of the line A or F the train continues in the opposite direction. The train conductor starts his journey in station B. His first stop is in station C. In which station will be his 46th stop?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The 46th stop is D, choice D.",
    hint: "The train reverses direction at A and F; list the repeating sequence of stops beginning with B, C.",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Rebecca folds a square piece of paper twice. Then she cuts off one corner as you can see in the diagram. Then she unfolds the paper. What could the paper look like now?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The resulting paper matches option B.",
    hint: "Unfold the two creases: one cut corner creates four reflected corners, all at equal distances from the fold lines.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-18-extra.png",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "Three boys enter a room one after the other. Hermann is not the first. Felix is not the second. Clemens is not the third. How many different orders are there for the boys to enter the room?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    answer: 1,
    explanation: "Only two orders remain, so choice B.",
    hint: "List the six orders of Hermann, Felix, and Clemens and cross out those violating their restrictions.",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Five clocks are hanging on the wall. One clock is one hour ahead. Another one is one hour late and one is correct. Two clocks have stopped working. Which clock shows the correct time?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Clock D is the only one showing the actual time, choice D.",
    hint: "The correct clock is neither the one hour ahead nor the one hour behind, and stopped clocks show fixed times; compare all five readings.",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Adam has 9 marbles and Brenda also has 9 marbles. Together they have 8 white and 10 black marbles. Brenda has twice as many black marbles as white marbles. How many black marbles does Adam have?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "0"
    ],
    answer: 1,
    explanation: "w = 3, so Brenda has 6 black and Adam has 10 − 6 = 4 black, choice B.",
    hint: "Let Brenda have w white marbles and 2w black marbles; she has 9 total.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/q-21-visual.png",
    imageAlt: "Original 2023 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "0",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Else has two machines R and S. If she puts a square piece of paper into machine R it is rotated: If she puts the piece of paper in machine S it is printed on: She wants to produce the following picture: In which order does Else use the two machines so that she gets this picture?",
    options: [
      "SRR",
      "RSR",
      "RSS",
      "RRS",
      "SRS"
    ],
    answer: 1,
    explanation: "The order RSR produces the target, choice B.",
    hint: "Machine R rotates the paper and S prints it; test the five sequences by applying operations from left to right.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-22.png",
    imageAlt: "Original 2023 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "SRR",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "RSR",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "RSS",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "RRS",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "SRS",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "A teacher wants to write the numbers from 1 to 7 into the circles. He writes exactly one number in each circle. When he adds up the two numbers of circles that are next to each other , he gets the number that is written between the two circles. \nWhich number does he write in the circle with the question mark?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "The question-mark circle must contain 4, choice D.",
    hint: "Use the rule that adjacent circle numbers add to the number between them, starting with the already known entries.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-23.png",
    imageAlt: "Original 2023 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
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
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Pattern E is the unique pattern that one friend gets completely right while the others each have four correct cells.",
    hint: "Compare each five-cell guess with the four-correct condition for the other four guesses; the true pattern agrees with exactly four cells in each.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-24-extra.png",
    imageChoices: true,
    imageAlt: "Original 2023 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2023/questions/editor-q-24.png"
  }
];

const sections: Section[] = [
  {
    points: 3,
    label: "Foundations",
    range: "Questions 1–8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Reasoning",
    range: "Questions 9–16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Challenge",
    range: "Questions 17–24",
    accent: "purple"
  }
];

export const edition2023Ecolier: QuestionSet = {
  id: "ecolier-2023",
  year: 2023,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 16, 2023",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2023/2023_Ecolier.pdf",
  questions: questions2023Ecolier,
  sections: sections,
};
