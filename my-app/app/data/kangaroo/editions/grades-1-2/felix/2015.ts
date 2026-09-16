import type { Question, QuestionSet, Section } from "../../../types";

const questions2015: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which shape cannot be seen in every picture?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Shape D is the only candidate absent from one of the pictures while the other four appear in all five. Thus D cannot be seen every time.",
    hint: "Compare the same five shapes in every small picture and mark the one that disappears at least once.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-01-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-e.png"
    ],
    imageAlt: "A house with one missing piece",
    imageClass: "question-diagram",
    imageChoices: false,
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "How many triangles can you find in the picture?",
    options: [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 2,
    explanation: "The diagram contains 5 triangles after the composite ones are included. Hence the answer is C.",
    hint: "Count the smallest complete triangles first, then inspect combinations of adjacent triangles that make a larger triangle.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-02-diagram.png",
    imageAlt: "",
    imageClass: "question-diagram",
    imageChoices: false,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "7",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Which part of the house is missing?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Piece E matches both the boundary of the house and the internal drawing at the cut. The other choices break at least one line, so E fits.",
    hint: "Compare the missing piece's outside outline first, then continue each line and shape that crosses the cut.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "How many dots do all the ladybirds have together?",
    options: [
      "17",
      "18",
      "19",
      "20",
      "21"
    ],
    answer: 2,
    explanation: "The individual dot counts add to 19. Therefore the combined number of dots is option C.",
    hint: "Record the dot count on each ladybird separately; adding a single total from the picture makes it easier to avoid skipping a small spot.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-04-diagram.png",
    imageAlt: "Five ladybirds with different numbers of dots",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Florian has 10 equally long metal strips with equally many holes. He bolts the metal strips together in pairs. Now he has five long strips (see the diagram). Which of the long strips is the shortest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The pair labelled B has the greatest overlap, so its combined length is least. The shortest long strip is B.",
    hint: "Each long strip is two equal strips joined with some overlap. The more overlap at the join, the shorter the finished strip.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-05-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Which of the kangaroo cards shown below can be turned around so that it then looks the same as the card shown on the right?  ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Card E becomes identical to the reference after a rotation. The other cards require a reflection or have a mismatched figure, so E is correct.",
    hint: "A turn may change which edge is on top, but it must preserve the card's handedness; a mirror image is not a rotation.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-06-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "What do you see if you look at the tower, which is made up of two building blocks, exactly from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The two-block tower covers the footprint drawn in option A when viewed from above. Height does not add another top-view square.",
    hint: "For a top view, replace every cube by its footprint on the ground and ignore how high the second cube sits.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 7",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-07-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "How many numbers are outside the square?",
    options: [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    answer: 4,
    explanation: "Exactly two numbers lie outside the square. Therefore the correct choice is E.",
    hint: "Count only the numerals whose positions lie beyond the square's boundary; numbers touching the line still need to be judged by their centers.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-08.png",
    imageAlt: "Original 2015 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "5",
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
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "It takes jennifer half an hour to cover half of her journey home from school. How long does it take her to cover the whole journey home?",
    options: [
      "15 minutes",
      "30 minutes",
      "40 minutes",
      "1 hour",
      "2 hours"
    ],
    answer: 3,
    explanation: "If half the trip takes 30 minutes, the complete trip takes 2 × 30 = 60 minutes, or 1 hour. The answer is D.",
    hint: "Half the journey and half an hour are paired quantities. Doubling the distance requires doubling the time at the same speed.",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "15 minutes",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "30 minutes",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "40 minutes",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "1 hour",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "2 hours",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Michael has two building blocks, Each building block is made up of two cubes glued together. Which figure can he not make using the blocks?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Every target except B can be tiled by two connected dominoes. Shape B cannot be formed without breaking or overlapping a block, so B is impossible.",
    hint: "Each building block is a connected 2-cube domino. Try the candidate silhouettes while keeping both dominoes intact.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-10-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "Julia has 9 sweets and Katharina has 17 sweets. How many sweets does Katharina have to give to Julia so that they both have the same amount of sweets?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The initial difference is 17 − 9 = 8. Transferring half the difference, 4 sweets, leaves both with 13, so C is right.",
    hint: "When Katharina gives one sweet, her total falls and Julia's rises; the gap closes by two sweets at a time.",
    sourcePage: 4,
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
    ]
  },
  {
    number: 12,
    points: 5,
    prompt: "Every one of these six building blocks consists of 5 little cubes. The little cubes are either white or grey. Cubes of equal colour don’t touch each other. How many little white cubes are there in total?",
    options: [
      "10",
      "11",
      "12",
      "18",
      "30"
    ],
    answer: 2,
    explanation: "Each block contributes 2 white cubes under the stated arrangement. Six blocks therefore contain 6 × 2 = 12 white cubes, answer C.",
    hint: "Because equal colours cannot touch within a five-cube block, inspect the alternating colour pattern of one block before multiplying across all six.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-12-diagram.png",
    imageAlt: "Original 2015 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Which piece is missing ?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Piece A continues every edge and internal segment of the surrounding shape. The other pieces leave a mismatch, making A the missing piece.",
    hint: "Fit the candidate into the missing region by following the cut boundary; only after the outline matches should you check the interior marks.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2015/questions/q-13-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-e.png"
    ],
    imageAlt: "Original 2015 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2015/questions/editor-q-13-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Flags are placed alongside a straight race course. The first flat is at the start, the last one at the finish. The distance between two flags is always 8 meters. How long is the race course?",
    options: [
      "24 metres",
      "48 metres",
      "72 metres",
      "80 metres",
      "88 metres"
    ],
    answer: 3,
    explanation: "There are 11 − 1 = 10 intervals. At 8 metres per interval, the race length is 10 × 8 = 80 metres, option D.",
    hint: "Eleven flags create gaps only between neighbouring flags, so count intervals rather than flags themselves.",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "24 metres",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "48 metres",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "72 metres",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "80 metres",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "88 metres",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "Some pirates are climbing onto a ship one after the other using a rope. Their leader is exactly in the middle. He is the eighth pirate to climb onto the ship. How many pirates board the ship?",
    options: [
      "16",
      "15",
      "12",
      "8",
      "7"
    ],
    answer: 1,
    explanation: "Seven pirates board before the leader and seven after him. Including the eighth pirate gives 7 + 1 + 7 = 15, so B is correct.",
    hint: "An exactly central eighth pirate has the same number of pirates before and after him.",
    sourcePage: 4,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2015: Section[] = [
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

export const edition2015: QuestionSet = {
  id: "2015",
  year: 2015,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 23, 2015",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2015/2015_Felix.pdf",
  questions: questions2015,
  sections: sections2015,
};
