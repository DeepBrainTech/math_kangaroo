import type { Question, QuestionSet, Section } from "../../../types";

const questions2020: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The kangaroo goes up three steps each time the rabbit goes down two steps. When the kangaroo is on step 9, on which step will the rabbit be? \n",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "Following the paired moves until the kangaroo reaches step 9 places the rabbit on step 4. Therefore B is the correct landing step.",
    hint: "Use the movement ratio from the diagram: for every three steps the kangaroo gains, the rabbit loses two steps.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-01-diagram.png",
    imageAlt: "Original 2020 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "3",
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
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Julia has 5 pieces of plastic and has stacked these pieces on a table, as shown beside. What was the second piece she put on the table? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The overlap order shows that piece C was put down second. The other pieces either sit above it or were already underneath it, so C is correct.",
    hint: "Read the visible overlaps from the top and bottom of the stack; a piece that covers an edge was placed later than the piece below it.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-02.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-02-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Marco's father took a picture of his son in front of the car shown beside. Which\nof the drawings below could represent this picture? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Drawing E shows the same visible side and front-to-back perspective as the photograph. Thus E is the drawing that could represent Marco's picture.",
    hint: "Compare the car's front, rear, and visible side with the photograph's viewpoint; a plausible outline is not enough if the perspective is reversed.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Every night the wizard Tilim makes the weather forecast for the king. When Tilim gets it right he gets 3 gold coins, but when he makes a mistake, he pays a fine of 2 gold coins. After making the prediction for 5 days, Tilim did the math and discovered that he neither won nor lost coins. How many times did he get the weather forecast right in those 5 days?",
    options: [
      "none",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "The balance equation is 3x − 2(5 − x) = 0. It simplifies to 5x = 10, so x = 2 correct forecasts: option C.",
    hint: "Let x be the number of correct forecasts. Then 5 − x forecasts are wrong, and the total gain must equal the total fines.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-04.png",
    imageAlt: "Original 2020 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "none",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A magician takes animals out of his hat always in the same order, as shown below. \nThe pattern of the figure is repeated every five animals. What will be the fourteenth animal he will pull out of his hat? \n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Fourteen leaves remainder 4 after two complete groups of five. The fourth animal in the displayed cycle is A, so the answer is A.",
    hint: "The sequence repeats every five animals. Divide 14 by 5 and use the remainder as the position within one cycle.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-05-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-05-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-05-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
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
    explanation: "The four cards needed for the tower leave card C unmatched. Consequently C is the card that is not used.",
    hint: "Match the tower's visible faces to the cards one by one, remembering that a card not used by the tower is the requested choice.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Maria made a block using white cubes and colored cubes in equal amounts.\nHow many of the white cubes cannot be seen in the picture? ",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The block contains two white cubes that have no visible face in the picture. Therefore the unseen count is 2, answer B.",
    hint: "Count the total white cubes in the complete block, then identify which of those white cubes are hidden behind visible cubes.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-07-diagram.png",
    imageAlt: "Original 2020 Felix question 7",
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
    points: 3,
    prompt: "Ana draws some shapes on a sheet. Her drawing has fewer squares than triangles. What could be her drawing? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only drawing D has fewer squares than triangles. Every other drawing has equal numbers or more squares, so D works.",
    hint: "For each candidate, count squares and triangles separately; compare the two counts instead of judging the picture by its overall appearance.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-08-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Which of the tiles below is NOT part of the wall next door? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Tile E contains a line arrangement that never occurs in the wall. It is therefore the tile that is not part of the wall.",
    hint: "Compare the internal line directions and joins of each candidate with the wall's repeating tile pattern, not only the tile outline.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-09.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 9",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-09-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "A village of 12 houses has four straight streets and four circular streets. The map shows 11 houses. In each straight street there are three houses and in each circular street there are also three houses. Where should the 12th house be placed on this map? ",
    options: [
      "On A",
      "On B",
      "On C",
      "On D",
      "On E"
    ],
    answer: 3,
    explanation: "Placing the twelfth house at D completes the required count on each street. The other locations leave at least one street short or overloaded, so D is correct.",
    hint: "Test each labelled location against all four straight streets and all four circular streets; every street must contain exactly three houses.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-10-diagram.png",
    imageAlt: "Original 2020 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "On A",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "On B",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "On C",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "On D",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "On E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Five blocks are built with equal cubes glued face to face. In which of them was the smallest number of cubes used? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "After hidden cubes are included, block A uses fewer cubes than the other four constructions. Hence A is the smallest build.",
    hint: "Count cubes hidden behind front cubes or underneath upper cubes; the visible outline alone does not reveal the full construction.",
    sourcePage: 3,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-e.png"
    ],
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-11-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Numbers were written on the petals of two flowers, with a number on each petal. One of the petals is hidden. The sum of the numbers written on the back flower is twice the sum of the numbers written on the front flower. What is the number written on the hidden petal? ",
    options: [
      "5",
      "12",
      "25",
      "30",
      "40"
    ],
    answer: 3,
    explanation: "Substituting the visible sums into that relation leaves x = 30. Thus the hidden petal carries 30, option D.",
    hint: "Call the hidden petal x. Add the visible petals on each flower and write the back-flower total as twice the front-flower total.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-12.png",
    imageAlt: "Original 2020 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "25",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
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
    explanation: "Combining the three views eliminates the other labels and places B opposite the target face. Therefore B is the answer.",
    hint: "Across the cube views, note which faces share an edge with the target face; opposite faces never meet along an edge.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-13-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Maria wants to write whole numbers in the squares of the figure, so that the sum of the numbers in three consecutive squares is always 10. She has already written a number. What number should she write on the gray square? ",
    options: [
      "1",
      "2",
      "3",
      "4",
      "8"
    ],
    answer: 1,
    explanation: "The constant-sum condition forces the repeating sequence to place 2 in the grey square. So the correct choice is B.",
    hint: "Write two overlapping three-square sums. Their difference reveals how the entries repeat, which fixes the grey square.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-14-diagram.png",
    imageAlt: "Original 2020 Felix question 14",
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
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Turning a card around on the top side, we see the photo of the kangaroo. Instead, if we turn the card around on the right side, what will appear? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The right-edge turn produces the orientation drawn in D. It is not the same as the top-edge turn, so D is correct.",
    hint: "Turning over the top edge and turning over the right edge reflect the card in different directions; track which horizontal or vertical coordinate is reversed.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-15.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-15-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Grandma has just baked 23 cupcakes and wants to give the same amount of them to each of her six grandchildren, eating what is left over. At least how many cupcakes will she have left to eat? ",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 4,
    explanation: "23 = 6 × 3 + 5, so three cupcakes go to each grandchild and 5 remain for Grandma. The answer is E.",
    hint: "Equal sharing among six grandchildren leaves the remainder after division by 6; look for the smallest possible number left over.",
    sourcePage: 4,
    imageClass: "question-diagram",
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
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only card E supplies the shape and count missing simultaneously in its row and column. Hence E completes the grid.",
    hint: "Use the row and column constraints of the pictured shape grid together; the missing tile must satisfy both at once.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-17.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-e.png"
    ],
    imageAlt: "Original 2020 Felix question 17",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "17-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2020/questions/q-17-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Two equal trains, each with 31 numbered wagons, travel in opposite directions. When the wagon number 7 of a train is side by side with the wagon number 12 of the other train, which wagon is side by side with the wagon number 11? ",
    options: [
      "8",
      "10",
      "11",
      "12",
      "15"
    ],
    answer: 0,
    explanation: "Wagon 7 on one train aligns with wagon 12 on the other, so moving five wagon positions along the first train pairs wagon 11 with wagon 8. The answer is A.",
    hint: "Mark the two wagons that are side by side and compare their distances from the meeting point in opposite directions.",
    sourcePage: 4,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "Tania bought 14 chocolates, 8 of them round and the rest square. Half were white chocolates and half were dark chocolates. Among the square chocolates, only two are not white. How many dark round chocolates did Tania buy? \n",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Half of 14 is 7 dark chocolates. Subtracting the 2 dark squares leaves 7 − 2 = 5 dark round chocolates, option D.",
    hint: "There are 7 dark chocolates altogether. Since two of the square chocolates are dark, remove those from the dark total to find the dark round ones.",
    sourcePage: 5,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "5",
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
    prompt: "Six different numbers, chosen from integers 1 to 9, are written on the faces of a cube, one number per face. The sum of the numbers on each pair of opposite faces is always the same. Which of the following numbers could have been written on the opposite side with the number 8? ",
    options: [
      "3",
      "5",
      "6",
      "7",
      "9"
    ],
    answer: 0,
    explanation: "Pairing 8 with 3 gives common sum 11; the remaining numbers can be paired to the same total. Thus 3 could be opposite 8, answer A.",
    hint: "The six chosen numbers must form three opposite pairs with one common sum. Try a partner for 8 and see whether the remaining four can split into two pairs with that same sum.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-20.png",
    imageAlt: "Original 2020 Felix question 20",
    imageClass: "question-diagram",
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
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "In a classroom, there are two chairs for each table. Each of the boys in the class sits with a girl on the same table, but there are four girls who do not sit on tables with a boy. There are 14 little tables in the classroom. How many girls are in that class?",
    options: [
      "6",
      "10",
      "12",
      "14",
      "16"
    ],
    answer: 4,
    explanation: "There are 28 seats; after the 4 unpaired girls, 24 seats form 12 boy-girl pairs. Adding those 12 girls to the 4 unpaired girls gives 16, option E.",
    hint: "Fourteen tables provide 28 seats. First account for the four girls sitting without boys, then pair the remaining seats.",
    sourcePage: 5,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Rita numbered the circles of the figure from 1 to 8, so that the sum of the three numbers on each of the four sides of the square equals 13. What is the sum of the four numbers written on the colored circles? ",
    options: [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    answer: 4,
    explanation: "The four side sums total 52. Removing the twice-counted corner contribution leaves the four coloured circles with sum 16, which is E.",
    hint: "Add the four side equations. A corner circle appears in two sides while each coloured circle appears once, so track those multiplicities.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-22.png",
    imageAlt: "Original 2020 Felix question 22",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "In the figure, an arrow pointing from one person to another means that the first person is shorter than the second. For example, person B is shorter than person A. \nWhich person is the tallest? ",
    options: [
      "Person A",
      "Person B",
      "Person C",
      "Person D",
      "Person E"
    ],
    answer: 2,
    explanation: "The height relations form a chain ending at person C, with no arrow placing anyone above C. C is therefore tallest.",
    hint: "Follow every arrow from shorter to taller and look for the person that sits at the end of the complete ordering.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2020/questions/editor-q-23.png",
    imageAlt: "Original 2020 Felix question 23",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "Person A",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "Person B",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "Person C",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "Person D",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "Person E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Maia the bee can only walk on colorful houses. How many ways can you color exactly three white houses with the same color so that Maia can walk from A to B? ",
    options: [
      "15",
      "16",
      "17",
      "18",
      "20"
    ],
    answer: 1,
    explanation: "Checking the possible three-house choices leaves 16 colourings that preserve a route from A to B. Therefore the answer is B.",
    hint: "List the A-to-B routes and reject a colouring only when all routes are blocked by the three chosen houses; a route remains open if it avoids at least one white house.",
    sourcePage: 5,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2020: Section[] = [
  {
    points: 3,
    label: "Foundations",
    range: "Questions 1-8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Reasoning",
    range: "Questions 9-16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Challenge",
    range: "Questions 17-24",
    accent: "purple"
  }
];

export const edition2020: QuestionSet = {
  id: "2020",
  year: 2020,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Brazil / KSF",
  date: "2020 second application",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2020/2020_Felix.pdf",
  questions: questions2020,
  sections: sections2020,
};
