import type { Question, QuestionSet, Section } from "../../../types";

const questions2021Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only cube C uses exactly the four bricks with the permitted face arrangement.",
    hint: "Count the four bricks and compare how their white and grey faces can touch when the candidates are rotated.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-01.png",
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
    prompt: "How many fish will have their heads pointing towards the ring when we straighten the line?",
    options: [
      "3",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 2,
    explanation: "Six fish point toward the ring after the line is straightened, choice C.",
    hint: "Straighten the fish line by reversing each bend, keeping each fish's head on the same side of its segment.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-02-visual.png",
    imageAlt: "Original 2021 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "3",
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
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "When you put the 4 puzzle pieces together correctly, they form a rectangle with a calculation on it. What is the result of this calculation?",
    options: [
      "6",
      "15",
      "18",
      "24",
      "33"
    ],
    answer: 1,
    explanation: "The completed calculation gives 18, choice C.",
    hint: "Join the four pieces so the printed edges meet, then perform the arithmetic on the completed rectangle.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-03-visual.png",
    imageAlt: "Original 2021 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "33",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Alaya draws a picture of the sun. Which of the following answers is part of her picture?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The matching part is option B.",
    hint: "Rotate the sun picture mentally and compare each candidate for one of its exact rays or facial details.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-04-extra.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Five boys competed in a shooting challenge. Ricky scored the most points. Which target was Ricky's?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Ricky's highest total belongs to target E.",
    hint: "Compare the five target scores by adding the marked scoring regions, not by counting hits alone.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
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
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "A measuring tape is wrapped around a cylinder. Which number should be at the\nplace shown by the question mark?",
    options: [
      "33",
      "42",
      "48",
      "53",
      "69"
    ],
    answer: 2,
    explanation: "The mark aligned with the question mark is 48, choice C.",
    hint: "Unwrap the measuring tape one marked interval at a time and preserve the cylinder's circumference.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-06-visual.png",
    imageAlt: "Original 2021 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "33",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "42",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "48",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "53",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "69",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Denise fired a silver and a gold rocket at the same time. The rockets exploded into 20 stars in total. The gold rocket exploded into 6 more stars than the silver one. How many stars did the gold rocket explode into?",
    options: [
      "9",
      "10",
      "12",
      "13",
      "15"
    ],
    answer: 3,
    explanation: "2s + 6 = 20 gives s = 7 and gold = 13, choice D.",
    hint: "Let silver stars be s and gold stars be s + 6; use their total of 20.",
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Rosana has some balls of 3 different colours. Balls of the same colour have the same weight. What is the weight of each white ball?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "Solving the equations gives 5 for each white ball, choice C.",
    hint: "Write one variable for each colour's ball weight and use the three pictured balance equations.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-08-visual.png",
    imageAlt: "Original 2021 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "7",
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
    answer: 0,
    explanation: "Only option A satisfies all of the visual constraints.",
    hint: "Check each candidate against the exact shape, orientation, and colour changes shown in the source diagram.",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-a.png"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-b.png"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-c.png"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-d.png"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-09-option-e.png"
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Sofie wants to pick 5 different shapes from the boxes. She can only pick 1 shape from each box. Which shape must she pick from box 4?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The only shape that must be taken from box 4 is option E.",
    hint: "Treat each box as offering a set of shapes; choose one per box and eliminate choices that duplicate a shape.",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-a.png"
      },
      {
        id: "10-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-b.png"
      },
      {
        id: "10-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-c.png"
      },
      {
        id: "10-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-d.png"
      },
      {
        id: "10-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10-option-e.png"
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Reconstructing the 18-cube model leaves option E as the only possible grey part.",
    hint: "Compare the white, grey, and black cube layers in the model with the five proposed grey pieces.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-11-extra.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
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
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The values combine to 49 and the final ball points left, giving option C.",
    hint: "When opposite-moving balls collide, add their values to the larger ball and keep its direction; repeat until one remains.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "In an ice cream shop there is some money in a drawer. After 6 ice creams were sold, there were 70 euros left in the drawer. After a total of 16 ice creams were sold, there were 120 euros left in the drawer. How many euros were there in the drawer at the start?",
    options: [
      "20",
      "30",
      "40",
      "50",
      "60"
    ],
    answer: 2,
    explanation: "Each ice cream costs 5 euros, so the starting amount was 70 − 6 × 5 = 40 euros, choice C.",
    hint: "The drawer gained 50 euros while 10 more ice creams were sold; find the price per ice cream and reverse six sales.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "30",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "40",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "50",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "The Koala ate some leaves from 3 branches. Each branch had 20 leaves. The Koala ate a few leaves from the first branch and then ate as many leaves from the second branch as were left on the first branch. Then it ate 2 leaves from the third branch. How many leaves in total were left on the 3 branches?",
    options: [
      "20",
      "22",
      "28",
      "32",
      "38"
    ],
    answer: 4,
    explanation: "The total left is 60 − x − (20 − x) − 2 = 38, choice E.",
    hint: "Let x leaves be eaten from the first branch; the second branch loses 20 − x, and the third loses 2.",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "22",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "32",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "38",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "On a tall building there are 4 fire escape ladders, as shown. The heights of 3 lad- ders are at their tops. What is the height of the shortest ladder?",
    options: [
      "12",
      "14",
      "16",
      "20",
      "22"
    ],
    answer: 3,
    explanation: "The shortest ladder is 20 units high, choice D.",
    hint: "Use the three labelled ladder heights to infer the common vertical differences in the drawing, then read the shortest top.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-15-visual.png",
    imageAlt: "Original 2021 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Nora plays with 3 cups on the kitchen table. She takes the left-hand cup, flips it over, and puts it to the right of the other cups. The picture shows the first move. What do the cups look like after 10 moves?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "After ten moves the cups match option B.",
    hint: "The left cup moves to the right each turn, so track the three cup positions modulo 3 for ten turns.",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-a.png"
      },
      {
        id: "16-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-b.png"
      },
      {
        id: "16-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-c.png"
      },
      {
        id: "16-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-d.png"
      },
      {
        id: "16-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-16-option-e.png"
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "The arrangement corresponding to number 4 is the one that satisfies the picture.",
    hint: "Compare the five visual arrangements with the exact set of pieces and their allowed orientations.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-17.png",
    imageAlt: "Original 2021 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "7 cards are arranged as shown. Each card has 2 numbers on with 1 of them written upside down. The teacher wants to rearrange the cards so that the sum of the numbers in the top row is the same as the sum of the numbers in the bottom row. She can do this by turning one of the cards upside down. Which card must she turn?",
    options: [
      "A",
      "B",
      "D",
      "F",
      "G"
    ],
    answer: 4,
    explanation: "Turning card E makes the two row sums equal.",
    hint: "Add the seven card values on each side, then see which single flip changes the difference by the required amount.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-18-visual.png",
    imageAlt: "Original 2021 Ecolier question 18 visual",
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
        text: "D",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "F",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "G",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "The numbers 1 to 9 are placed in the squares shown with a number in each square. The sums of all pairs of neighbouring numbers are shown. Which number is placed in the shaded square?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "The shaded square contains 7, choice D.",
    hint: "Use the displayed sums of neighbouring pairs to subtract adjacent equations and recover the shaded number.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-19-visual.png",
    imageAlt: "Original 2021 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Mia throws darts at balloons worth 3, 9, 13, 14 and 18 points. She scores 30 points in total. Which balloon does Mia definitely hit?",
    options: [
      "3",
      "9",
      "13",
      "14",
      "18"
    ],
    answer: 0,
    explanation: "Every valid combination includes the 3-point balloon, choice A.",
    hint: "List combinations of the five balloon values that total 30 and find the value present in every valid combination.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-20-visual.png",
    imageAlt: "Original 2021 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "A box has fewer than 50 cookies in. The cookies can be divided evenly between 2, 3, or 4 children. How- ever, they cannot be divided evenly between 7 children because 6 more cookies would be needed. How many cookies are there in the box?",
    options: [
      "12",
      "24",
      "30",
      "36",
      "48"
    ],
    answer: 3,
    explanation: "36 is divisible by 2, 3, and 4, and 36 + 6 = 42 is divisible by 7; choice D.",
    hint: "The box count is divisible by 2, 3, and 4, so test their common multiples below 50; the condition about 7 fixes the one.",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "36",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Each of the 5 boxes contains either apples or bananas, but not both. The total weight of all the bananas is 3 times the weight of all the apples. Which boxes contain apples?",
    options: [
      "1 and 2",
      "2 and 3",
      "2 and 4",
      "3 and 4",
      "1 and 4"
    ],
    answer: 4,
    explanation: "The only pair of apple boxes consistent with the 3:1 ratio is 1 and 4, choice E.",
    hint: "Let the apple-box total be A and banana-box total be 3A; compare the five box weights in the diagram.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-22-visual.png",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1 and 2",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "2 and 3",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "2 and 4",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "3 and 4",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "1 and 4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Elena wants to write the numbers from 1 to 9 in the squares shown. The ar- rows always point from a smaller number to a larger one. She has already written 5 and 7. Which number should she write instead of the question mark?",
    options: [
      "2",
      "3",
      "4",
      "6",
      "8"
    ],
    answer: 3,
    explanation: "Filling the partial order forces 4 into the question-mark square, choice D.",
    hint: "Use the arrow directions as inequalities: every arrow points from a smaller number to a larger one.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/q-23-visual.png",
    imageAlt: "Original 2021 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "",
    options: [
      "1 square",
      "2 squares",
      "1 hexagon",
      "1 triangle",
      "2 triangles"
    ],
    answer: 0,
    explanation: "The unfolded object leaves one square, so choice A.",
    hint: "Compare all candidate outlines with the number and type of shapes in the folded object, allowing only the shown folds.",
    imageChoices: true,
    imageAlt: "Original 2021 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1 square",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2 squares",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "1 hexagon",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "1 triangle",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "2 triangles",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2021/questions/editor-q-24.png"
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

export const edition2021Ecolier: QuestionSet = {
  id: "ecolier-2021",
  year: 2021,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Brazil / KSF",
  date: "2021",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2021/2021_Ecolier.pdf",
  questions: questions2021Ecolier,
  sections: sections,
};
