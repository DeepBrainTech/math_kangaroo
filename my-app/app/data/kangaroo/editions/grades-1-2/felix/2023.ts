import type { Question, QuestionSet, Section } from "../../../types";

const questions2023: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Out of how many circles is the beaver made of?\n",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 3,
    explanation: "The beaver is built from 8 circles. Thus the correct choice is D.",
    hint: "Count complete circles and also the circles partly hidden by another part of the beaver; each circle counts once.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-01-diagram.png",
    imageAlt: "Original 2023 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The picture shows 5 cubes from the front.\nWhat do they look like from above?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The resulting footprint has the arrangement shown in picture B. Height differences disappear from the top view, so B is correct.",
    hint: "Project the five front-view cubes onto the floor: cubes in the same vertical line share one position in a top view.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-e.png"
    ],
    imageAlt: "Original 2023 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-02-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Each bowl has 4 balls. Add up the numbers on the balls.\nIn which bowl is the result biggest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Bowl A has the largest four-ball sum. Therefore A is the bowl with the greatest result.",
    hint: "Add all four ball numbers in each bowl, keeping each bowl's total separate until the comparison.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-e.png"
    ],
    imageAlt: "Original 2023 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Mr Beaver re-arranges the parts to build a kangaroo.\nWhich part is missing?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Part A is the only candidate whose boundary and internal pattern complete the kangaroo. Therefore A is the missing part.",
    hint: "Place the visible kangaroo parts together and inspect the remaining gap's outline, including the direction of any internal markings.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-e.png"
    ],
    imageAlt: "Original 2023 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-04-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Sara says: ''My boat has more than one circle. It also has 2 triangles more than squares.\" \nWhich boat belongs to Sara?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Boat E has more than one circle and its triangle count is exactly two greater than its square count. Hence E belongs to Sara.",
    hint: "For each boat, count circles, triangles, and squares separately, then check whether triangles exceed squares by exactly two.",
    sourcePage: 3,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-e.png"
    ],
    imageAlt: "Original 2023 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-05-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "The bee on the right has a few pieces missing. Each piece costs points (Punkte).\nHow many points does Maya need to complete the bee?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 4,
    explanation: "The missing pieces together cost 13 points. Maya needs 13 points to complete the bee, so E is correct.",
    hint: "Compare Maya's incomplete bee with the finished bee and add the point values of every absent piece, not the value of the pieces already present.",
    sourcePage: 3,
    imageAlt: "Original 2023 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "9",
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
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 4,
    prompt: "Susi folds a piece of paper in the middle. She stamps 2 holes.What does the piece of paper look like when she unfolds it again?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Unfolding produces the two original holes and their two reflections in pattern B. Therefore B is the correct picture.",
    hint: "A fold creates a mirror image of each hole across the crease. Keep the original holes as well as their reflected partners.",
    sourcePage: 3,
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-a.png"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-b.png"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-c.png"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-d.png"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-07-option-e.png"
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "Hansi sticks 12 cubes together to make this figure. He always puts one drop of glue between two cubes. \nHow many drops of glue does he need?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 3,
    explanation: "The 12-cube figure has 11 face-to-face contacts. It therefore needs 11 drops of glue, option D.",
    hint: "Glue is needed for each pair of cubes sharing a face. Count contacts rather than cubes, since one cube may contribute several drops.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-08-diagram.png",
    imageAlt: "Original 2023 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "The two markers with a question mark have the same number.\nWhich number do you have to put instead of the question mark so that the calculation is correct?\n",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "Substituting 3 for each repeated marker makes the two sides equal. Thus the unknown is C, 3.",
    hint: "Give both question-mark positions the same variable and simplify the equation before trying the five possible digits.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-09-diagram.png",
    imageAlt: "Original 2023 Felix question 9",
    imageClass: "question-diagram",
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
    points: 4,
    prompt: "Max wants to complete the jigsaw shown. He has different pieces.\nWhich pieces does he have to use?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Set A fills every exposed edge and leaves no overlap in the completed jigsaw. The other sets fail at an outer edge, so A is required.",
    hint: "Match the remaining outside edges of the jigsaw first; a candidate that fits inside but leaves a boundary gap cannot work.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-e.png"
    ],
    imageAlt: "Original 2023 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-10-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "Emma came third in a dance competition for girls. 3 dancers came between her and the last girl.\nHow many dancers took part in the competition?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "The last girl is in position 7: Emma at 3, three dancers at 4–6, then the last girl. Therefore 7 dancers participated, answer D.",
    hint: "Emma is third. Place the three dancers between her and the final girl, then include both endpoints in the line.",
    sourcePage: 5,
    imageClass: "question-diagram",
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
    ]
  },
  {
    number: 12,
    points: 5,
    prompt: "Elvis has 6 triangles with this pattern.\nWhich picture can he make with them?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The six triangles can be arranged to form picture A with every pattern line aligned. The other pictures leave a broken seam.",
    hint: "When patterned triangles meet, their repeated marks must continue across each seam. Rotate pieces only in ways that preserve that continuation.",
    sourcePage: 5,
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-a.png"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-b.png"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-c.png"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-d.png"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-12-option-e.png"
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Each of the children Ali, Lea, Josef, Vittorio and Sophie get a birthday cake. The number on top of the cake shows how old the child is. Lea is two years older than Josef, but one year younger than Ali. Vittorio is the youngest.\nWhich cake belongs to Sophie?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The age ordering and the youngest condition leave cake C for Sophie. Thus Sophie receives C.",
    hint: "Translate the age clues into a chain: Josef is two below Lea, and Ali is one above Lea; then place Vittorio below everyone and assign the remaining cake.",
    sourcePage: 5,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-e.png"
    ],
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2023/questions/editor-q-13-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Maria has a total of 19 apples in 3 bags. She takes the same amount of apples from each bag. Then there are 3, 4 and 6 apples in the bags.\nHow many apples did Maria take from each bag?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The final total is 3 + 4 + 6 = 13, so 6 apples were removed. Dividing 6 by 3 gives 2 from each bag, option B.",
    hint: "Add the apples remaining in the three bags, compare that total with 19, and divide the removed amount equally among the three bags.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2023/questions/q-14-diagram.png",
    imageAlt: "Original 2023 Felix question 14",
    imageClass: "question-diagram",
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
    points: 5,
    prompt: "Three frogs live in a pond. Each night only one of the frogs sings a song. After 9 nights the first frog has sung 2 times. The second frog has listened to 5 songs. How many songs did the third frog listen to?",
    options: [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 1,
    explanation: "The second frog sang 4 times because it heard 5 of the 9 songs. The first sang 2, leaving 3 songs sung by the third; the third listened on the other 9 − 3 = 6 nights. Answer B.",
    hint: "Across nine nights, the two known singers account for 2 + (9 − 5) songs; every other night is a song heard by the third frog.",
    sourcePage: 5,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2023: Section[] = [
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

export const edition2023: QuestionSet = {
  id: "2023",
  year: 2023,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 16, 2023",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2023/2023_Felix.pdf",
  questions: questions2023,
  sections: sections2023,
};
