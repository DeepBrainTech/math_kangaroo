import type { Question, QuestionSet, Section } from "../../../types";

const questions2021: Question[] = [
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
    answer: 4,
    explanation: "Only shape E can be assembled from the three sticks without changing a length or leaving a gap. Thus E is possible.",
    hint: "Compare the three side lengths of each proposed shape with the available sticks, including the way the pieces must meet at their endpoints.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-01.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The picture shows 2 mushrooms. What is the difference between their heights?",
    options: [
      "4",
      "5",
      "6",
      "11",
      "17"
    ],
    answer: 1,
    explanation: "The two pictured heights differ by 5 units. The difference is therefore B, 5.",
    hint: "Measure both mushrooms from the same ground line, then subtract the shorter total height from the taller one.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-02-diagram.png",
    imageAlt: "Original 2021 Felix question 2",
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
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Which of the paths shown in the pictures is the longest?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The total distance of path A exceeds the totals of paths B through E. Hence A is the longest route.",
    hint: "Trace each path completely and add its segment lengths; a path that looks wider or more curved is not automatically longer.",
    sourcePage: 1,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Four identical pieces of paper are placed as shown. Michael wants to punch a hole\nthat goes through all four pieces. At which point should Michael punch the hole?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Point D is contained in the common intersection of the four sheets, so a hole there passes through every layer. The answer is D.",
    hint: "The punch must lie inside the overlap shared by all four identical paper outlines, not merely inside three of them.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-04.png",
    imageAlt: "Original 2021 Felix question 4",
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
    prompt: "Ella puts on this t-shirt and stands in front of a mirror. Which of these images does she see in the mirror?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The horizontal reflection of the t-shirt is image A. Its collar remains at the top while the side markings switch sides, so A is correct.",
    hint: "A mirror keeps the shirt's top and bottom but reverses its left and right details. Reflect the design without turning it upside down.",
    sourcePage: 1,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05-option-e.png",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "The pink tower is taller than the red tower but shorter than the green tower. The silver tower is taller than the green tower. Which tower is the tallest?",
    options: [
      "pink tower",
      "green tower",
      "red tower",
      "silver tower",
      "impossible to decide"
    ],
    answer: 3,
    explanation: "The order is silver > green > pink > red. Silver tower is highest, which is option D.",
    hint: "Chain the comparisons: red below pink, pink below green, and green below silver.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "pink tower",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "green tower",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "red tower",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "silver tower",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "impossible to decide",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "These children are standing in a line. Some are facing forwards and others are facing backwards. How many children are holding another child's hand with their right hand?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "Counting the handholds attached to the children's right hands gives 6. Therefore E is the correct count.",
    hint: "For each child, identify their own right side from the direction they face; a child facing backwards has right and left reversed on the page.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-07-diagram.png",
    imageAlt: "Original 2021 Felix question 7",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "3",
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
    prompt: "In the Kangaroo constellation, all stars have a number greater than 3 and their sum is 20. Which is the Kangaroo constellation?\n",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Constellation B has every star greater than 3 and its values sum to 20. No other option meets both tests, so B is correct.",
    hint: "Eliminate every constellation containing a number 3 or less, then add the remaining numbers in each survivor.",
    sourcePage: 1,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-08-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Edmund cut a ribbon as shown in the picture. How many pieces of the ribbon did\nhe finish with?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 3,
    explanation: "The marked cuts create 11 additional sections, so the ribbon ends as 12 pieces. The answer is D.",
    hint: "A cut through one existing ribbon piece increases the total by exactly one; begin with one piece and count each completed cut.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-09.png",
    imageAlt: "Original 2021 Felix question 9",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Rose the cat walks along the wall. She starts at point B and follows the direction of the arrows shown in the picture. The cat walks a total of 20 metres. Where does she end up?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The cumulative distance reaches 20 metres at point D. Thus Rose finishes at D.",
    hint: "Start at B and subtract each wall segment in order from the 20-metre walk, stopping at the point reached exactly at zero.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-10-diagram.png",
    imageAlt: "Original 2021 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Julie and Angela played \"kangball\", a ball game. Each goal in their game scores 2 points. Julie scored 5 goals and Angela scored 9 goals. How many more points than Julie did Angela score?",
    options: [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    answer: 2,
    explanation: "Angela scores 9 × 2 = 18 points and Julie scores 5 × 2 = 10. The difference is 8 points, option C.",
    hint: "Each goal is worth two points, so calculate both scores in points before comparing them.",
    sourcePage: 2,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Julia has two pots with flowers, as shown. She keeps the flowers exactly where they are. She buys more flowers and puts them in the pots. After that, each pot has the same number of each type of flower. What is the smallest number of flowers she needs to buy?",
    options: [
      "3",
      "4",
      "5",
      "8",
      "10"
    ],
    answer: 3,
    explanation: "The shortfalls across the three flower types add to 8 new flowers. Buying fewer would leave at least one type unequal, so D is minimal.",
    hint: "For each flower type, calculate how many more are needed in the poorer pot to match the richer pot; do not move the existing flowers.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-12.png",
    imageAlt: "Original 2021 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Tom encodes words using the board shown. For example, the word PIZZA has the\ncode A2A4C1C1B2. What word did Tom encode as B3B2C4D2 ?",
    options: [
      "MAZE",
      "MASK",
      "MILK",
      "MATE",
      "MATH"
    ],
    answer: 4,
    explanation: "The coordinates B3, B2, C4, and D2 produce M, A, T, and H respectively. The encoded word is MATH, answer E.",
    hint: "Treat each letter-number pair as a coordinate on Tom's board and decode the four pairs in their written order.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-13.png",
    imageAlt: "Original 2021 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "MAZE",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "MASK",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "MILK",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "MATE",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "MATH",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Which figure can be made from the 2 pieces shown on the right?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only figure A accepts both pieces with the angled seam aligned and the outline complete. Therefore A can be made.",
    hint: "Rotate and translate the two pieces while matching their distinctive angled edges; the outside boundary must close with no overlap.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-14.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-14-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "The picture shows the five houses of five friends and their school. The school is the largest building in the picture. To go to school, Doris and Ali walk past Leo's house. Eva walks past Chole's house. Which is Eva's house?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The only house whose route passes Chole's house in the required way is B. Therefore B is Eva's house.",
    hint: "Use the school as the destination and eliminate houses whose route would pass the wrong friend's house; Doris and Ali provide two of the constraints.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-15.png",
    imageAlt: "Original 2021 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "The kangaroo had two branches for lunch. Each branch had 10 leaves. The kangaroo ate some leaves from one branch. Then, from the second branch, it ate as many leaves as were left on the first branch. How many leaves in total were left on the two branches?",
    options: [
      "5",
      "6",
      "8",
      "10",
      "15"
    ],
    answer: 3,
    explanation: "The branches start with 20 leaves. After the first meal, x remain on branch one and 10 − x on branch two; together they always total 10. Hence D.",
    hint: "Call x the leaves left on the first branch. The second meal removes exactly the leaves that were left on the first branch.",
    sourcePage: 2,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Mara built the square by using 4 of the following 5 shapes. Which shape was not used?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The square can be tiled using every shape except D. Trying to include D leaves an edge or area mismatch, so D was not used.",
    hint: "Fit four of the five shapes to the outside square first; the seams between pieces then show which candidate cannot be part of the construction.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-17.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 17",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "17-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-17-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Every time the witch has 3 apples she turns them in to 1 banana. Every time she has 3 bananas she turns them in to 1 apple. What will she finish with if she starts with 4 apples and 5 bananas?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Starting with 4 apples and 5 bananas, the exchanges reduce the collection to a single banana. This final state corresponds to option A.",
    hint: "Keep exchanging any group of three identical fruits, and continue until fewer than three apples and fewer than three bananas remain.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-18.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-18-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 18",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "18-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-18-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-18-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "The cards 2 3 4 5 6 are placed into 2 boxes. The sums of the numbers in each box are the same.\nWhich number must be in the box with the number 4?",
    options: [
      "2",
      "3",
      "5",
      "6",
      "impossible to determine"
    ],
    answer: 3,
    explanation: "The number paired with 4 must be 6 because 4 + 6 = 10. The two remaining numbers also total 10, so D is forced.",
    hint: "The numbers 2 through 6 total 20, so equal box sums must be 10. Find the partner that makes 4's box total 10.",
    sourcePage: 4,
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "impossible to determine",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "The picture beside shows two cogs, each with a black tooth. Where will the black teeth be after the small cog has made one full turn?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The black-tooth positions after that gear movement match diagram C. Therefore C shows the final locations.",
    hint: "When the small cog completes one turn, count its teeth passing the contact point and make the large cog rotate by the same tooth count in the opposite direction.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-e.png"
    ],
    imageAlt: "Original 2021 Felix question 20",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "20-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-20-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "3 girls and 2 boys were dancing. They danced in pairs so that each girl danced with each boy for exactly 1 minute. At any time, there was only one pair on the dance floor. For how many minutes did they dance?",
    options: [
      "5",
      "6",
      "8",
      "9",
      "10"
    ],
    answer: 1,
    explanation: "There are 3 × 2 = 6 distinct girl-boy pairs. At one minute per pair, the dance lasts 6 minutes, answer B.",
    hint: "Each girl pairs with each boy once, and only one pair dances at a time. Count combinations of one girl and one boy.",
    sourcePage: 4,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Each participant in a cooking contest baked one tray of cookies like the one shown beside. What is the smallest number of trays of cookies needed to make the following plate?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "Three trays are sufficient to cover the target pattern, while two leave at least one position unmatched. Thus the minimum is C.",
    hint: "Overlay copies of the tray pattern on the target plate and look for the smallest number of trays that covers every required cookie position.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/editor-q-22.png",
    imageAlt: "Original 2021 Felix question 22",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Kangie eats only apples on Monday, Wednesday and Friday. On Tuesdays and Thursdays he eats only mangoes. He eats either 2 apples or 3 mangoes a day. On Saturdays and Sundays he eats nothing. How many pieces of fruit does Kangie eat in two weeks?",
    options: [
      "12",
      "16",
      "18",
      "20",
      "24"
    ],
    answer: 4,
    explanation: "Each week gives 3 × 2 + 2 × 3 = 12 pieces of fruit. Two weeks therefore produce 24 pieces, option E.",
    hint: "Over two weeks, count the three apple days and two mango days in each week; weekends contribute nothing.",
    sourcePage: 5,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Stan has five toys: a ball, a set of blocks, a game, a puzzle and a car. He puts each toy on a different shelf of the bookcase. The ball is higher than the blocks and lower than the car. The game is directly above the ball. On which shelf can the puzzle not be placed?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The linked toys can occupy shelves 1, 2, 4, and 5 in the only compatible pattern, leaving shelf 3 unavailable for the puzzle. Therefore C cannot be used.",
    hint: "Place the linked toys first: blocks below the ball, the car above the ball, and the game directly above the ball. Test the remaining shelf for the puzzle.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2021/questions/q-24-diagram.png",
    imageAlt: "Original 2021 Felix question 24",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2021: Section[] = [
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

export const edition2021: QuestionSet = {
  id: "2021",
  year: 2021,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Brazil / KSF",
  date: "2021",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2021/2021_Felix.pdf",
  questions: questions2021,
  sections: sections2021,
};
