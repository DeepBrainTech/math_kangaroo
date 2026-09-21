import type { Question, QuestionSet, Section } from "../../../types";

const questions2025: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Pablo has six balloons. He gives away two of his balloons.\nHow many balloons does Pablo have now?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "Six minus two leaves 4 balloons. The correct choice is C.",
    hint: "Pablo starts with six balloons and gives away two, so the operation is subtraction rather than division.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-01-diagram.png",
    imageAlt: "Original 2025 Felix question 1",
    imageClass: "question-diagram",
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
    prompt: "How many of these shapes are triangles? ",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "There are 6 shapes meeting that definition. Therefore E is the answer.",
    hint: "Use the definition of a triangle: exactly three straight sides and three corners. Exclude shapes with curved or extra sides.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-02.png",
    imageAlt: "Original 2025 Felix question 2",
    imageClass: "question-diagram",
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
    prompt: "How many pencils are in this picture? ",
    options: [
      "7",
      "8",
      "9",
      "14",
      "16"
    ],
    answer: 1,
    explanation: "The picture contains 8 pencils in total, so B is correct.",
    hint: "Count the pencils one by one from a fixed end, including any that overlap or are partly hidden by another pencil.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-03.png",
    imageAlt: "Original 2025 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Felix forms a square out of 16 small, grey tiles. He then removes some of the small tiles – see picture. \nHow many small tiles did he remove? ",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 2,
    explanation: "The number removed is 6, giving option C.",
    hint: "The complete square contains 16 small tiles. Count the tiles still visible and subtract that count from 16.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-04.png",
    imageAlt: "Original 2025 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Five baby kangaroos are looking for their mothers. They jump along the lines marked.\nWhich path is the shortest? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Route A has the smallest total length among the five paths. Therefore A is the shortest.",
    hint: "Add the segment lengths on each marked route, even when two paths look similar in the drawing.",
    sourcePage: 3,
    imageAlt: "Five marked paths across square grids",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-a.png"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-b.png"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-c.png"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-d.png"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-05-option-e.png"
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Laura glues together 18 cubes.\nThen she stretches two rubber bands around them – see picture.\nHow many cubes are not touched by any of the rubber bands?",
    options: [
      "6",
      "8",
      "9",
      "10",
      "12"
    ],
    answer: 0,
    explanation: "Of the 18 cubes, 6 lie outside both bands and are untouched. Thus A is correct.",
    hint: "Mark every cube touched by either rubber band, taking the union so a cube touched by both is not counted twice.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-06.png",
    imageAlt: "Original 2025 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "Which key fits the lock? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Key D matches every tooth and its orientation with the lock. The other keys fail at least one notch, so D fits.",
    hint: "Compare the lock's notch sequence with each key tooth by tooth, including which side each notch opens toward.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-07-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-e.png"
    ],
    imageAlt: "A lock with a square and round keyhole",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-07-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "A dog has 2 puppies that both weigh the same.\nPicture 1 shows that the dog and one puppy together weigh 14 kilograms.\nPicture 2 shows that the dog and both puppies together weigh 18 kilograms. \nHow many kilograms does the big dog weigh? ",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 1,
    explanation: "The extra puppy weighs 18 − 14 = 4 kg. The big dog weighs 14 − 4 = 10 kg, option B.",
    hint: "Subtract the first picture's total from the second: the only added object is one puppy. Then remove that puppy's weight from 14 kg.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-08.png",
    imageAlt: "Original 2025 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Jan puts 12 pieces of fruit on a table.\nVera takes away 2 pears, 4 apples and half of the oranges.\nNow there are only oranges on the table.\nHow many oranges are left? ",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    answer: 2,
    explanation: "There were 12 − 2 − 4 = 6 oranges. Vera removed half, leaving 6 ÷ 2 = 3 oranges, answer C.",
    hint: "The non-orange fruit removed consists of 2 pears and 4 apples. Use the starting total to find the orange count before half is taken.",
    sourcePage: 4,
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
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: " All the buttons on Carola's sweater look exactly like this:\nWhich one of these buttons is from her sweater? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Button E has the same hole placement and orientation as Carola's sweater buttons. Therefore E belongs to the sweater.",
    hint: "Compare the button's hole arrangement and front/back orientation with the reference button, not merely its outside outline.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-e.png"
    ],
    imageAlt: "Original 2025 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-10-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "Alex threads white and black beads alternately onto a piece of string.\nTwice, 5 beads are hidden – see picture. \nHow many white beads are hidden in total? ",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 2,
    explanation: "Each hidden run contains 3 white beads. Two hidden runs therefore contain 2 × 3 = 6 white beads, option C.",
    hint: "An alternating string of five beads contains either three white and two black or the reverse; inspect the end colours to choose which.",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 5,
    prompt: "17 squirrels are sitting on 4 trees.\nThere are at least 2 squirrels on each tree.\nThe number of squirrels is different on each tree.\nWhat is the largest possible number of squirrels on one tree? ",
    options: [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    answer: 1,
    explanation: "The smallest distinct counts are 2, 3, and 4, using 9 squirrels. The remaining 17 − 9 = 8 can sit on one tree, so B is maximal.",
    hint: "To maximise one tree, minimise the other three while keeping their counts distinct and at least 2.",
    sourcePage: 5,
    imageClass: "question-diagram",
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
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Mike has these 2 building blocks: \nWhich of the objects cannot be built with these two building blocks? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Objects A through D can be decomposed into the two supplied blocks, but E has no compatible two-block arrangement. Thus E cannot be built.",
    hint: "Keep each two-cube block connected and try both orientations when matching it to each proposed object.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-13.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-e.png"
    ],
    imageAlt: "Original 2025 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/q-13-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Every time a coin is put into the machine,\nthe bottom ball falls out of one of the five tubes.\nHow many coins does Barbara have to put in to be sure she gets at\nleast one white ball? ",
    options: [
      "6",
      "9",
      "10",
      "11",
      "15"
    ],
    answer: 3,
    explanation: "There are 10 non-white balls, so after 10 unlucky draws the next draw must be white. Barbara needs 11 coins, option D.",
    hint: "Assume the worst case: all balls that are not white come out first. You need one more coin than that worst-case count.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-14.png",
    imageAlt: "Original 2025 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The row and column constraints determine the arrangement in picture B. Therefore B is the valid completion.",
    hint: "Treat each row and column of the dot grid as a complete set with no repeated count, then use the missing entries to force the top row.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-e.png"
    ],
    imageAlt: "Original 2025 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2025/questions/editor-q-15-option-e.png",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2025: Section[] = [
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

export const edition2025: QuestionSet = {
  id: "2025",
  year: 2025,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 20, 2025",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2025/2025_Felix.pdf",
  questions: questions2025,
  sections: sections2025,
};
