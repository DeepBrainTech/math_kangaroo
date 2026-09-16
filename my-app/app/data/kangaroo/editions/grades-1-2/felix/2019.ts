import type { Question, QuestionSet, Section } from "../../../types";

const questions2019: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of these clouds contain only numbers that are smaller than 7? \n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Every number in cloud D is less than 7, whereas each other cloud contains a number that reaches 7 or higher. Therefore D qualifies.",
    hint: "In each cloud, inspect the largest numeral first; one value of 7 or more disqualifies the entire cloud.",
    sourcePage: 1,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-e.png"
    ],
    imageAlt: "Original 2019 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which of the 5 pictures shows a part of this chain?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The sequence in picture C occurs consecutively in the full chain with the same orientations. The other pictures introduce a reversed or nonadjacent link.",
    hint: "A chain fragment must preserve consecutive links, their handedness, and which link passes over or under its neighbour.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02.png",
    imageAlt: "Original 2019 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-a.png"
      },
      {
        id: "2-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-b.png"
      },
      {
        id: "2-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-c.png"
      },
      {
        id: "2-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-d.png"
      },
      {
        id: "2-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-02-option-e.png"
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Mother kangaroo and her son Max together weigh 60 kg (kilograms).\nThe mother on her own weighs 52 kg.\nHow heavy is Max? \n",
    options: [
      "4kg",
      "8kg",
      "30kg",
      "56kg",
      "112kg"
    ],
    answer: 1,
    explanation: "Subtracting gives 60 kg − 52 kg = 8 kg. Thus Max weighs 8 kg, option B.",
    hint: "Max's weight is the difference between the combined weight and his mother's weight; no conversion beyond kilograms is needed.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-03-diagram.png",
    imageAlt: "Original 2019 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "4kg",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "8kg",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "30kg",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "56kg",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "112kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "There are 12 children in front of a zoo. Susi is the 7th from the front and Kim the 2nd from the back. \nHow many children are there between Susi and Kim? \n",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Kim is 12 − 2 + 1 = 11th from the front. Positions 8, 9, and 10 lie between seventh-place Susi and Kim, so there are 3 children: B.",
    hint: "Convert Kim's position from the back into a position from the front before counting the people strictly between the two children.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-04.png",
    imageAlt: "Original 2019 Felix question 4",
    imageClass: "question-diagram",
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
    prompt: "Jörg is sorting his socks. Two socks with the same number are one pair. \nHow many pairs can he find? \n",
    options: [
      "8",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 2,
    explanation: "The equal-number groups form 5 complete pairs. No sock remains unpaired within those counted matches, so C is the answer.",
    hint: "Sort the socks by their printed number and pair equal numbers; two socks with the same number make exactly one pair.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-05.png",
    imageAlt: "Original 2019 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "8",
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
        text: "5",
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
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Five equally big square pieces of card are placed on a table on top of each other. The picture on the side is created this way.\nThe cards are collected up from top to bottom.\nIn which order are they collected?",
    options: [
      "5-4-3-2-1",
      "5-2-3-4-1",
      "5-4-2-3-1",
      "5-3-2-1-4",
      "5-2-3-1-4"
    ],
    answer: 4,
    explanation: "The top-to-bottom collection sequence forced by the overlaps is 5, 2, 3, 1, 4. This is sequence E.",
    hint: "The visible upper card must be collected first whenever its edge covers another card; use those overlap relations to build the whole order.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-06.png",
    imageAlt: "Original 2019 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "5-4-3-2-1",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "5-2-3-4-1",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "5-4-2-3-1",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "5-3-2-1-4",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "5-2-3-1-4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "There are two kinds of camels: bactrian camels that have 2 humps, dromedaries that have 1 hump.Exactly 10 camels live in a certain zoo. Together they have 14 humps.\nHow many bactrian camels are there in this zoo? \n",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Ten one-hump camels would have 10 humps, but the zoo has 14. The four extra humps mean there are 4 bactrian camels, option D.",
    hint: "Pretend every camel has one hump first. Each bactrian camel contributes exactly one additional hump beyond that baseline.",
    sourcePage: 2,
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
    prompt: " floor of a room is covered with equally big rectangular tiles (see picture).\n How long is the room? \n",
    options: [
      "6 m",
      "8 m",
      "10 m",
      "11 m",
      "12 m"
    ],
    answer: 4,
    explanation: "The row spans twelve tile-length units, so the room is 12 m long. Therefore E is correct.",
    hint: "Use the repeated rectangular tile as a ruler along the room's long side and count complete tile lengths from one wall to the other.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-08.png",
    imageAlt: "Original 2019 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "6 m",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "8 m",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "10 m",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "11 m",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "12 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "The picture shows a mouse and a piece of cheese.\nThe mouse is only allowed to move to the neighbouring fields in the direction of the arrows.\nHow many paths are there from the mouse to the cheese? ",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "Following all allowed branches produces 6 distinct mouse-to-cheese routes. Thus the answer is E.",
    hint: "At each arrow junction, split the route into its possible continuations and record the next branch so the same path is not counted twice.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-09.png",
    imageAlt: "Original 2019 Felix question 9",
    imageClass: "question-diagram",
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
        text: "5",
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
    prompt: "Which of the figures can be cut into these 3 pieces?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only figure C has the same outline and can be divided into the three supplied pieces. Hence C is the figure that works.",
    hint: "Compare the three given pieces with each candidate's boundary, beginning with the unusual angle and longest side.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-e.png"
    ],
    imageAlt: "Original 2019 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-10-option-e.png",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 5,
    prompt: "The giants Tim and Tom build a sandcastle and decorate it with a flag.\nThey insert half the flagpole into the highest point of the sandcastle.\nThe highest point of the flagpole is now 16 m above the floor, the lowest 6 m (see diagram).\nHow high is the sandcastle? \n",
    options: [
      "11 m",
      "12 m",
      "13 m",
      "14 m",
      "15 m"
    ],
    answer: 0,
    explanation: "The pole extends from 6 m to 16 m, so its length is 10 m and its midpoint is 5 m above the floor's 6 m mark. The sandcastle is 11 m high, answer A.",
    hint: "The half of the flagpole below the sandcastle top has the same length as the half above it; find the pole's midpoint.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-11-diagram.png",
    imageAlt: "Original 2019 Felix question 11",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "11 m",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "12 m",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "13 m",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "14 m",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "15 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 5,
    prompt: "There are white, grey and black squares. Three children use these to make this pattern.\nFirst Anni replaces all black squares with white squares.\nThen Bob replaces all grey squares with black squares.\nFinally Chris replaces all white squares with grey squares.\nWhich picture have the three children now created? \n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Black becomes white, then grey becomes black, and finally white becomes grey. Carrying out those three substitutions yields pattern A.",
    hint: "Apply each child's colour replacement to the current picture in order; a square changed earlier is treated as its new colour in the next step.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-e.png"
    ],
    imageAlt: "Original 2019 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-12-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Together the three squirrels Anni, Asia and Elli have 10 nuts. Each one has a different number of nuts but at least 2 nuts.\nAnni has the least number of nuts. Asia has the most nuts.\nHow many nuts does Elli have? \n",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The only possible triple is 2, 3, 5. Elli is the middle value, 3 nuts, so the answer is C.",
    hint: "The three squirrel counts are distinct, all at least 2, and ordered Anni < Elli < Asia. List increasing triples summing to 10.",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Each figure is made up of 4 equally big cubes and coloured in.\nWhich figure needs the least amount of colour? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Counting the exposed faces in the five arrangements shows that figure B has the smallest paintable surface. Therefore B is correct.",
    hint: "Colour only exposed cube faces. A face hidden where two cubes touch does not add to the amount of colour required.",
    sourcePage: 3,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-e.png"
    ],
    imageAlt: "Original 2019 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-14-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "Four strips of paper are used to make a pattern (see picture). \nWhat do you see when you look at it from behind? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Mirroring the front arrangement left-to-right gives the pattern in option D. The heights remain unchanged, so D is the rear view.",
    hint: "Looking from behind reverses the horizontal order of the strips while preserving which parts are high or low.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2019/questions/editor-q-15.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-e.png"
    ],
    imageAlt: "Original 2019 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2019/questions/q-15-option-e.png",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2019: Section[] = [
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

export const edition2019: QuestionSet = {
  id: "2019",
  year: 2019,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 21, 2019",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2019/2019_Felix.pdf",
  questions: questions2019,
  sections: sections2019,
};
