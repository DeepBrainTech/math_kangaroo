import type { Question, QuestionSet, Section } from "../../../types";

const questions2018: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Alice draws lines between the beetles. She starts with the beetle with the fewest points.Then she continues drawing to the beetle with one more point.\nWhich figure is formed?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Following the increasing dot sequence produces the line arrangement shown in figure D. The other figures change one connection, so D is the match.",
    hint: "Label the beetles by their dot counts, connect them from the smallest count upward, and preserve the positions of every intermediate beetle.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-01.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-e.png"
    ],
    imageAlt: "Original 2018 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The same amount of kangaroos should be in both parks. How many kangaroos have to be moved from the left park to the right park for that to happen?\n",
    options: [
      "4",
      "5",
      "6",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "The two park totals differ by 10. Moving half that difference, 5 kangaroos, makes the totals equal, so B is correct.",
    hint: "If the parks contain L and R kangaroos, moving x makes them L − x and R + x; set those two expressions equal.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-02.png",
    imageAlt: "Original 2018 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "6",
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
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Which beetle has to fly away so that the remaining beetles have 20 dots altogether?",
    options: [
      "Beetle with 4 points",
      "Beetle with 7 points",
      "Beetle with 5 points",
      "Beetle with 6 points",
      "no beetle"
    ],
    answer: 1,
    explanation: "The total is 27 spots, so removing the 7-spot beetle leaves 27 − 7 = 20. Therefore the beetle with 7 points, B, must fly away.",
    hint: "Add the spots on all beetles first; the beetle that must leave has exactly the excess over 20.",
    sourcePage: 1,
    imageAlt: "Original 2018 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "Beetle with 4 points ",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "Beetle with 7 points",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "Beetle with 5 points",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "Beetle with 6 points",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "no beetle",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Peter has drawn this pattern:He draws exactly the same pattern once more.\nWhich point is on his drawing?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Repeating the drawing places the second copy through point D. Thus D is the point on Peter's completed pattern.",
    hint: "Copy each segment with the same direction and length as the first pattern, then see which labelled point lies on the second copy.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-04-diagram.png",
    imageAlt: "Original 2018 Felix question 4",
    imageClass: "question-diagram",
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
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Theodor has built this tower made up of discs. He looks at the tower from above.\nHow many discs does he see?\n",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The tower has three distinct disc locations visible in its footprint. A top view therefore shows 3 discs, answer C.",
    hint: "From above, discs that are vertically aligned can hide one another; count distinct positions rather than all discs in the stack.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-05-diagram.png",
    imageAlt: "Original 2018 Felix question 5",
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
        text: "3",
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
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "This diagram shows two see-through sheets. You place the sheets on top of each other.\nWhich pattern do you get?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Superimposing the two sheets creates the line network in pattern D. Any missing or extra crossing rules out the other options.",
    hint: "Imagine the sheets transparent and preserve every line from both layers. The sought pattern is their exact overlay, including crossings.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-06.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-e.png"
    ],
    imageAlt: "Original 2018 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "In order to get to his bone, the dog has to follow the black line. In total he turns 3-times to the right and 2-times to the left.\nWhich path does he take?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The correct route contains three right turns and two left turns in sequence. That turn record identifies path E.",
    hint: "Trace the black route from the dog to the bone and record turns in travel order; a bend in the printed picture is not automatically a turn of the same direction.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-e.png"
    ],
    imageAlt: "Original 2018 Felix question 7",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-07-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "Lisa needs exactly 3 pieces to complete her jigsaw.\nWhich of the 4 pieces is left over?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "C or D"
    ],
    answer: 0,
    explanation: "Pieces B, C, and D complete the jigsaw together. Piece A has an edge that cannot be paired, so A is left over.",
    hint: "Try each candidate as the leftover piece and match the remaining three pieces to the target's curved and straight boundary.",
    sourcePage: 2,
    imageAlt: "Original 2018 Felix question 8",
    imageClass: "question-diagram",
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
        text: "C or D",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "Charles cuts a rope into 3 equally long pieces. Then he makes one knot in one of the pieces, 2 in the next and in the third piece 3 knots. Then he lays the three pieces down in a random order.\nWhich picture does he see?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Picture B shows three equal-length sections carrying exactly one, two, and three knots. It is the only arrangement compatible with the construction.",
    hint: "The three equal rope pieces remain equal after being rearranged; identify them by their knot counts 1, 2, and 3.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-e.png"
    ],
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2018/questions/q-09-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "How many of the hands pictured show a right hand?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "Five of the pictured hands are right hands after their individual orientations are interpreted correctly. Therefore the count is C, 5.",
    hint: "Decide left versus right from the hand's own palm orientation, then count the hands that would be controlled by a right-handed person.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-10.png",
    imageAlt: "Original 2018 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "The number of spots on the fly agarics (toadstools) shows how many dwarfs fit under it. We can see one side of the fungi. The other side has the same amount of spots. When it rains 36 dwarfs are trying to hide under the fungi.\nHow many dwarfs get wet?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The fungi can shelter 30 dwarfs altogether. With 36 dwarfs present, 36 − 30 = 6 get wet, so E is correct.",
    hint: "The visible spots show one side of each fungus, but the hidden side has the same capacity; double each visible spot count before summing.",
    sourcePage: 3,
    imageAlt: "Original 2018 Felix question 11",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 5,
    prompt: "You are forming two-digit numbers using the digits 2, 0, 1 or 8. They have to be bigger than 10 and smaller than 25.\nEvery number is made up of two different digits.\nHow many different numbers to you get?\n",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 0,
    explanation: "The complete list is 12, 18, 20, and 21. There are 4 valid numbers, which is option A.",
    hint: "Numbers must be two-digit, lie strictly between 10 and 25, use different digits, and may only use 2, 0, 1, or 8.",
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
    points: 5,
    prompt: "Alice has 3 white, 2 black and 2 grey pieces of paper. First she cuts every piece of paper that is not black into two pieces. Then she halves every piece of paper that is not white.\nHow many pieces of paper does she obtain in total?\n",
    options: [
      "14",
      "16",
      "17",
      "18",
      "20"
    ],
    answer: 3,
    explanation: "Initially there are 7 pieces. The first stage adds 5 pieces, giving 12; after it, 6 pieces are non-white, so the second stage adds 6 more. The final total is 18, D.",
    hint: "First split every white and grey sheet; then split every resulting piece that is not white, including the new grey pieces.",
    sourcePage: 3,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Susi makes this pattern using ice-lolly sticks. Each stick is 5 cm long and 1 cm wide.\nHow long is Susi’s pattern?",
    options: [
      "20 cm",
      "21 cm",
      "22 cm",
      "23 cm",
      "25 cm"
    ],
    answer: 1,
    explanation: "After removing the hidden overlap lengths from the full stick total, the pattern spans 21 cm. Hence the answer is B.",
    hint: "Add the stick lengths along the pattern, but subtract each overlap because that section is counted in both neighbouring sticks.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-14.png",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "20 cm",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "21 cm",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "22 cm",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "23 cm",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "25 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "The road from Anna’s to Mary’s house is 16 km long. The road from Mary’s to John’s house is 20 km long.\nThe road from the crossing to Mary’s house is 9 km long.\nHow long is the road from Anna’s to John’s house?",
    options: [
      "7 km",
      "9 km",
      "11 km",
      "16 km",
      "18 km"
    ],
    answer: 4,
    explanation: "The Anna-to-John distance is (16 − 9) + (20 − 9) = 7 + 11 = 18 km. This is option E.",
    hint: "Break both routes at the crossing. The segment from Anna to the crossing is 16 − 9, and the segment from the crossing to John is 20 − 9.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2018/questions/editor-q-15.png",
    imageAlt: "Original 2018 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "7 km",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "9 km",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "11 km",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "16 km",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "18 km",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2018: Section[] = [
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

export const edition2018: QuestionSet = {
  id: "2018",
  year: 2018,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 15, 2018",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2018/2018_Felix.pdf",
  questions: questions2018,
  sections: sections2018,
};
