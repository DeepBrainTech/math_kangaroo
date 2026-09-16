import type { Question, QuestionSet, Section } from "../../../types";

const questions2024: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which number is in the triangle and also in the square and also in the circle?",
    options: [
      "1",
      "4",
      "5",
      "9",
      "12"
    ],
    answer: 2,
    explanation: "The common overlap contains 5 and no other listed number. Therefore C, 5, is correct.",
    hint: "Look only at the numbers lying inside all three boundaries at once; being in two shapes is not enough.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-01.png",
    imageAlt: "Original 2024 Felix question 1",
    imageClass: "question-diagram",
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
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: " Which pencil is the longest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Pencil D covers the greatest actual end-to-end distance. Hence D is the longest.",
    hint: "Compare each pencil from endpoint to endpoint on the same scale, ignoring where its middle happens to sit in the picture.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-02.png",
    imageAlt: "Original 2024 Felix question 2",
    imageClass: "question-diagram",
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
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "There are 8 different faces in the picture.\nWhich face only appears once?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Face E appears only once in the collection of eight faces. Thus E is the requested face.",
    hint: "Group identical faces before counting; then look for the group whose frequency is one rather than several.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-03.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-e.png"
    ],
    imageAlt: "Original 2024 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "The complete count is 6, which corresponds to option B.",
    hint: "Count the pictured units systematically by rows or layers, and compare the result with each numerical option.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-04.png",
    imageAlt: "Original 2024 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "5",
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
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Each of the numbers 1, 2, 5 and 6 in the picture is made by folding a strip of paper.\nWhich strip is the longest?",
    options: [
      "1",
      "2",
      "5",
      "6",
      "All strips are equally long"
    ],
    answer: 3,
    explanation: "After unfolding, strip 6 contains the greatest total paper length. Therefore D is the longest strip.",
    hint: "Mentally unfold each numbered strip at every crease. A fold hides length, so count the straight segments that would appear when opened.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-05.png",
    imageAlt: "Original 2024 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "2",
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "All strips are equally long",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Tim has black and white squares of paper. He sticks the squares on the inside of a window so that this pattern emerges:\nWhich pattern can be seen from outside?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The reflected arrangement is pattern D. It is the outside view of the squares stuck on the inner glass.",
    hint: "Looking through the window from outside reverses the inside pattern left-to-right, while top and bottom stay in place.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-e.png"
    ],
    imageAlt: "Original 2024 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Only pattern B satisfies the visual relationship required by the diagram. Therefore B is the matching option.",
    hint: "Compare the repeated shapes and their positions across the pictured choices; use the same correspondence in every row and column.",
    sourcePage: 3,
    imageAlt: "Original 2024 Felix question 7",
    imageClass: "question-diagram",
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
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 4,
    prompt: "In the table, each shape stands for a different number.\nWhat number does the star stand for?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The equations consistently give the star the value 3. Hence C is correct.",
    hint: "Use the row or column with the fewest unknowns to assign a number to one shape, then substitute that value into the row containing the star.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-08.png",
    imageAlt: "Original 2024 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The remainder 2 selects the second picture, which is B. Thus B is the answer.",
    hint: "The pictures repeat in a cycle of five. Since 27 = 5 × 5 + 2, use the second position of the cycle.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-09.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-e.png"
    ],
    imageAlt: "Original 2024 Felix question 9",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/q-09-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Ali chooses 2 numbers from the board and adds them together.\nHow many different results are possible?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "10"
    ],
    answer: 2,
    explanation: "The distinct pair-sums form a set of 7 possible results. Therefore the answer is C.",
    hint: "List every unordered pair of board numbers, calculate its sum, and remove duplicate results before counting.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-10.png",
    imageAlt: "Original 2024 Felix question 10",
    imageClass: "question-diagram",
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "Chiara has a see-through cube. Inside there are 6 small cubes, see picture.\nWhat does Chiara see if she looks at the cube from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The six cubes project to the arrangement shown in E. So E is what Chiara sees from above.",
    hint: "For a top view, mark each small cube's footprint on the upper face and merge footprints that lie directly above one another.",
    sourcePage: 5,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-e.png"
    ],
    imageAlt: "Original 2024 Felix question 11",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11-option-e.png",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-11.png"
  },
  {
    number: 12,
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
    explanation: "Only set E meets all of the shared-shape conditions simultaneously. Therefore E is the valid set.",
    hint: "Track the one shared shape assigned to each child and check that no required match is used twice in the same role.",
    sourcePage: 5,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-e.png"
    ],
    imageAlt: "Original 2024 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12-option-e.png",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 5,
    prompt: "Zoran builds towers made from three different building blocks. The picture shows the\nheights of three towers.\nHow high is the fourth tower?\n",
    options: [
      "12",
      "13",
      "14",
      "16",
      "17"
    ],
    answer: 0,
    explanation: "Solving the three height relations gives a fourth-tower height of 12. Thus A is correct.",
    hint: "Call the three block heights x, y, and z. Translate each shown tower into an equation, then combine the equations to get the fourth tower.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-13.png",
    imageAlt: "Original 2024 Felix question 13",
    imageClass: "question-diagram",
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
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Andrew throws arrows at a target board. He starts with 10 arrows. Each time he hits the target, he gets 2 more arrows. In total Andrew throws 20 arrows. Then he has run out of arrows.\nHow often did Andrew hit the target?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    answer: 1,
    explanation: "If h is the number of hits, 10 + 2h = 20. Hence 2h = 10 and h = 5, option B.",
    hint: "The final number of arrows equals the 10 starting arrows plus 2 for every successful hit.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-14.png",
    imageAlt: "Original 2024 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "These two pictures show a bridge at different times.\nAll cars are the same length.\nThe numbers state the distances between the cars or between the cars and the end of the bridge.\nHow long is each car?",
    options: [
      "3 metres",
      "4 metres",
      "5 metres",
      "6 metres",
      "7 metres"
    ],
    answer: 2,
    explanation: "The difference between the two arrangements isolates one car length as 5 metres. Therefore C is correct.",
    hint: "Write the bridge length in both snapshots using car length c and the labelled gaps; equate the two expressions to eliminate the bridge length.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2024/questions/editor-q-15.png",
    imageAlt: "Original 2024 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "3 metres",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "4 metres",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "5 metres",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "6 metres",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "7 metres",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2024: Section[] = [
  {
    points: 3,
    label: "Foundations",
    range: "Questions 1-5",
    accent: "coral"
  },
  {
    points: 4,
    label: "Reasoning",
    range: "Questions 6-10",
    accent: "blue"
  },
  {
    points: 5,
    label: "Challenge",
    range: "Questions 11-15",
    accent: "purple"
  }
];

export const edition2024: QuestionSet = {
  id: "2024",
  year: 2024,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 21, 2024",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2024/2024_Felix.pdf",
  questions: questions2024,
  sections: sections2024,
};
