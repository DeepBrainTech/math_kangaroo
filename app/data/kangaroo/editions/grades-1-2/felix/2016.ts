import type { Question, QuestionSet, Section } from "../../../types";

const questions2016: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "How many ropes can you see in this picture?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "There are three separate ropes in the picture. Each can be traced from one end to the other, giving 3: option B.",
    hint: "Follow each rope between its two endpoints, and use a pencil mark at one endpoint so a loop is not counted twice.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-01-diagram.png",
    imageAlt: "Original 2016 Felix question 1",
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
    prompt: "In a cave there live a starfish, two seahorses and three turtles. They are visited by three starfish, four turtles and five seahorses. How many animals are there now in the cave altogether?",
    options: [
      "6",
      "9",
      "12",
      "15",
      "18"
    ],
    answer: 4,
    explanation: "The cave ends with 1 + 3 = 4 starfish, 2 + 5 = 7 seahorses, and 3 + 4 = 7 turtles. The grand total is 4 + 7 + 7 = 18, answer E.",
    hint: "Combine the visitors with the animals already in the cave by species, then add those three species totals.",
    sourcePage: 1,
    imageAlt: "Original 2016 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Which point in the labyrinth can we get to, starting at point O?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Following the open corridors from O reaches point C; the routes to A, B, D, and E are blocked. Therefore C is reachable.",
    hint: "At every junction, reject corridors blocked by a wall and continue from O until the route ends at one labelled point.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-03-diagram.png",
    imageAlt: "Original 2016 Felix question 3",
    imageClass: "question-diagram",
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
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Ten friends go to Robert's birthday party. Six of which are girls. How many boys in total are at the party?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 1,
    explanation: "Ten friends minus six girls leaves 4 boys among the invited friends. Robert is an additional boy, so the party has 4 + 1 = 5 boys: B.",
    hint: "The six girls are among the ten friends. Count the boys among those friends, then remember who is hosting the party.",
    sourcePage: 1,
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
    prompt: "Johannes hands out flyers to the houses with the numbers 15 to 47. How many houses get a flyer?",
    options: [
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    answer: 2,
    explanation: "The count from 15 through 47 is 47 − 15 + 1 = 33. Both endpoint houses receive flyers, so C is correct.",
    hint: "For consecutive house numbers, the first house counts as well; use the inclusive interval formula rather than just subtracting endpoints.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "31",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "32",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "33",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "34",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "35",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Max has 10 dice. Which one of the following solids can he build with them?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only solid A can be decomposed into exactly 10 connected unit cubes in the required arrangement. The other silhouettes need a different cube count or an impossible join.",
    hint: "Imagine separating each proposed solid into unit cubes and count cubes hidden behind visible faces as well as cubes you can see.",
    sourcePage: 1,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-e.png"
    ],
    imageAlt: "Original 2016 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "A hen lays white and brown eggs. Lisa takes six of them and puts them in a box as shown. The brown eggs are not allowed to touch each other. What is the maximum number of brown eggs Lisa can place in the box?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The box permits three non-touching brown positions. A fourth brown egg would have to touch one of them, so the maximum is 3, option C.",
    hint: "Place brown eggs in alternating or separated positions; adjacent positions cannot both be brown.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-07-diagram.png",
    imageAlt: "Original 2016 Felix question 7",
    imageClass: "question-diagram",
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
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "Grandma stands in the courtyard calling her cat and all her chickens. After a little while 20 legs are running towards her. How many chickens does Grandma have?",
    options: [
      "11",
      "9",
      "8",
      "6",
      "4"
    ],
    answer: 2,
    explanation: "Of the 20 running legs, 4 belong to the cat. The remaining 16 legs make 16 ÷ 2 = 8 chickens, so C is the answer.",
    hint: "Subtract the cat's four legs first, because only the remaining legs belong to chickens and each chicken contributes two.",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "11",
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
        text: "8",
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
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "A house has 12 rooms. Each room has two windows and one light. Only when the light is on in a room, both windows are illuminated. Yesterday evening 18 windows were illuminated. In how many of the rooms was the light off?",
    options: [
      "2",
      "3",
      "4",
      "6",
      "9"
    ],
    answer: 1,
    explanation: "Every lit room contributes 2 windows, so 18 ÷ 2 = 9 rooms are lit. From 12 rooms, 12 − 9 = 3 have the light off: B.",
    hint: "Two illuminated windows identify one lit room. Convert 18 windows into lit rooms before finding the rooms with lights off.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Together Paul and Josef are 12 years old. How old will they both be together in four years time?",
    options: [
      "16",
      "17",
      "18",
      "19",
      "20"
    ],
    answer: 4,
    explanation: "Their current total is 12. After four years it becomes 12 + 4 + 4 = 20, which is option E.",
    hint: "Four years pass for Paul and four years pass for Josef, so the combined age rises by eight rather than four.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "17",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "Gerda walks along the road and writes down the letters she can see on her right hand side. Which word is formed while Gerda walks from point 1 to point 2?",
    options: [
      "KNAO",
      "KNGO",
      "KNR",
      "AGRO",
      "KAO"
    ],
    answer: 0,
    explanation: "The travel-order letters are K, N, A, O. They spell KNAO, so the matching choice is A.",
    hint: "Read the letters on Gerda's right-hand side in the order she encounters them along the road, not in page order.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-11-diagram.png",
    imageAlt: "Original 2016 Felix question 11",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "KNAO",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "KNGO",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "KNR",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "AGRO",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "KAO",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 5,
    prompt: "Konrad has some pieces of cardboard which all look like this: Which of the shapes below can he not make out of these pieces?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Shape D cannot be partitioned into the given pieces without an unmatched edge or orientation. The other four targets can be tiled, making D impossible.",
    hint: "Try to tile each target using the available cardboard shape, paying attention to the number and direction of every exposed edge.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-e.png"
    ],
    imageAlt: "Original 2016 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-12-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Five sparrows are sitting on a rope (see picture). Some of them are looking to the left, some of them are looking to the right. Every sparrow whistles as many times as the number of sparrows he can see sitting in front of him. For example, the third sparrow whistles exactly twice. How often do all sparrows whistle altogether?",
    options: [
      "6",
      "8",
      "9",
      "10",
      "12"
    ],
    answer: 3,
    explanation: "The five individual whistle counts add to 10. The total number of whistles is therefore 10, answer D.",
    hint: "For a sparrow facing left or right, count only the birds in front of its beak; repeat this for all five positions.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-13-diagram.png",
    imageAlt: "Original 2016 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "In the picture above five ladybirds can be seen. Each one is sitting on a certain flower. A ladybird is only allowed to sit on a flower if the following conditions are met: \n1) The difference between the number of points on each wing is equal to the number of leaves on the stem. \n2) The number of points on the wings of the ladybird is equal to the number of petals on the flower. \nWhich of the following flowers is without a ladybird?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Applying both conditions pairs four ladybirds with four flowers and leaves flower E without a valid ladybird. Thus E is the unoccupied flower.",
    hint: "For each ladybird, compare its total wing spots with the flower's petals and its wing-spot difference with the stem leaves.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-e.png"
    ],
    imageAlt: "Original 2016 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-14-option-e.png",
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
    answer: 2,
    explanation: "The shared-face information from the views eliminates every candidate except C as the face opposite the marked face. Hence the answer is C.",
    hint: "In the two views of the cube, record which faces touch the marked face; an opposite face can never appear beside it.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2016/questions/editor-q-15.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-e.png",
      "/assets/kangaroo/grades-1-2/felix/2016/questions/editor-q-15-option-e.png"
    ],
    imageAlt: "Original 2016 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/q-15-option-e.png",
        imageAlt: "E option"
      },
      {
        id: "15-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2016/questions/editor-q-15-option-e.png",
        imageAlt: "A option"
      }
    ]
  }
];

const sections2016: Section[] = [
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

export const edition2016: QuestionSet = {
  id: "2016",
  year: 2016,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 17, 2016",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Felix.pdf",
  questions: questions2016,
  sections: sections2016,
};
