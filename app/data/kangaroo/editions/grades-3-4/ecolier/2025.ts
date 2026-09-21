import type { Question, QuestionSet, Section } from "../../../types";

const questions2025Ecolier: Question[] = [
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
    explanation: "Option E shows two shells and four marbles: 2 × 6 + 4 = 16.",
    hint: "Count shells as 6 and marbles as 1 in each picture; do not count the drawings by size.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-01.png",
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
    prompt: "Kenny the Kangaroo hops from his school to the zoo. \nHe hops like this: ↑ 2, ↖ 2, ↙ 1, ← 4 (see picture). \nFrom the zoo, Kenny hops like this: → 3, ↗ 2, ↑ 2. \nWhich house does Kenny land at?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The combined displacement lands at house A, choice A.",
    hint: "Add the horizontal and diagonal displacement vectors from school to zoo, then add the second set of hops.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-02-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Mia builds a large cube out of small cubes. While she is building it, she takes a photo at five different times.\nWhich of the five photos shown is the fourth? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The fourth stage is photo A.",
    hint: "Order the photos by the number of small cubes already present, from the earliest build to the fullest visible stage.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-03-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    prompt: "",
    options: [
      "0, 2, 2, 5",
      "0, 5, 2, 2",
      "2, 5, 2, 0",
      "5, 0, 2, 2",
      "5, 2, 0, 2"
    ],
    answer: 4,
    explanation: "5 + 2 − 0 + 2 = 9 is largest, so the order is option E.",
    hint: "In □ + □ − □ + □, put the smallest number in the subtracted position and the largest numbers in the added positions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-04.png",
    imageAlt: "Original 2025 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "0, 2, 2, 5",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "0, 5, 2, 2",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "2, 5, 2, 0",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "5, 0, 2, 2",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "5, 2, 0, 2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Markus pulls on both ends of each rope at the same time. Which rope forms a knot? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only rope C tightens into a knot.",
    hint: "Pull both ends of each rope and follow the strands; a knot forms only when the two ends are interlinked before pulling.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    prompt: "Larissa has a toy windmill that rotates in the wind (see picture) and then stops.\nWhat does it look like now? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The stopped windmill is option B.",
    hint: "Rotate the windmill's blades through the indicated motion and compare the final positions, not just the colours.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-06-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Alex steps on some lines on the ground.\nWhat does the ground look like under his shoe?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The footprint pattern under the shoe matches option D.",
    hint: "Project every ground line beneath Alex's shoe, preserving which crossings are above or below the shoe.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "If you add up the numbers on two opposite sides of a die, you always get 7.\nWhich of the pictures can show such a die? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only die A can have all opposite pairs summing to 7.",
    hint: "Opposite faces must pair as 1–6, 2–5, and 3–4; test each picture for all three pairs at once.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
        text: "E",
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
    explanation: "Only windmill B can be assembled without mismatching endpoints.",
    hint: "Compare the candidate windmills with the three poles' endpoint colours and lengths; each pole must be used once.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-09-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 9 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "Max draws a large circle in the sand. Lisa adds the letters A, B, C and D. Lisa and Max start at the same time from point A. Lisa goes clockwise around the circle, Max runs anti-clockwise around the circle (see picture). They meet for the first time at point B, then at C, at D and then again at point A. How many times has Max run around the circle by then?",
    options: [
      "1-times",
      "2-times",
      "3-times",
      "4-times",
      "5-times"
    ],
    answer: 2,
    explanation: "Max has completed three full circuits by the fourth meeting at A, choice C.",
    hint: "Lisa and Max meet at successive quarter points; count the total distance Max travels when they meet again at A.",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1-times",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2-times",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "3-times",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "4-times",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "5-times",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Anna, Bonnie and Caspar have some kangaroo cookies on their plates (see picture). There are 15 more cookies left. They distribute these in such a way that each child ends up with the same number of cookies on their plate. How many cookies does Anna get added to her plate?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "The final equal number determines that Anna receives 6 cookies, choice D.",
    hint: "Add the cookies already on the three plates, then divide the total after adding 15 by three.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/q-11-visual.png",
    imageAlt: "Original 2025 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "In the morning, the five friends Anna, Bob, Cristina, David and Eduard each have a fully charged cell-phone battery. By the evening, Bob has used up as much of his battery as Anna and Cristina combined. Bob's battery is empty. David hasn't used his cell-phone at all. The pictures show the battery levels of the five children. Which of these is the battery level of Eduard's cell phone?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The only remaining level satisfying the sum is option B.",
    hint: "Bob's used battery equals Anna's used battery plus Cristina's; use the displayed levels as remaining percentages.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "",
    options: [
      "1 and 2",
      "1 and 5",
      "3 and 4",
      "3 and 5",
      "4 and 5"
    ],
    answer: 1,
    explanation: "Pieces 1 and 5 are exactly the two cut-out pieces, choice B.",
    hint: "Compare the two missing chessboard regions with each candidate pair, including colour and orientation.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-13.png",
    imageAlt: "Original 2025 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "1 and 2",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "1 and 5",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "3 and 4",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "3 and 5",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "4 and 5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Rudi feeds six sheep in the petting zoo.The six sheep get a total of 210 g of food. Each of the five large sheep gets the same amount, the small one gets twice as much as a large sheep.\nHow much food does the small sheep get? ",
    options: [
      "50 g",
      "55 g",
      "60 g",
      "65 g",
      "70 g"
    ],
    answer: 2,
    explanation: "5x + 2x = 210 gives x = 30 and the small sheep gets 60 g, choice C.",
    hint: "Let each large sheep receive x grams; the small sheep receives 2x.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/q-14-visual.png",
    imageAlt: "Original 2025 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "50 g",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "55 g",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "60 g",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "65 g",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "70 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Tom wants to cut the pizza in half in such a way that each half has the same number of tomatoes. There are two ways to do this. Along which lines can he cut? ",
    options: [
      "1 or 3",
      "1 or 4",
      "2 or 3",
      "2 or 4",
      "3 or 4"
    ],
    answer: 3,
    explanation: "Cuts 2 and 4 split the tomatoes evenly, so choice D.",
    hint: "Count tomatoes on both sides of each proposed cut line, not just the geometric area of each half.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-15-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "1 or 3",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "1 or 4",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "2 or 3",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "2 or 4",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "3 or 4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Eva assembles these two identical parts into a figure. Which of these figures can she not build?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only figure E cannot be made from the two parts.",
    hint: "Try placing two identical parts on each candidate outline; congruent halves must have the same edge pattern.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-16-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 5,
    prompt: "Six ladybirds each have either 1, 2, 3, 4, 5 or 6 spots. \nMarta takes four photos each of three different ladybirds. \nEach ladybird appears equally often in the four photos. \nYou can see the first three photos on the right. \nHow many spots do the three ladybirds in the fourth photo have in total?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    answer: 2,
    explanation: "The missing three ladybirds total 12 spots, choice C.",
    hint: "Across the first three photos, count how often each ladybird appears; the fourth photo must complete equal frequencies.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/q-17-visual.png",
    imageAlt: "Original 2025 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Maria writes the numbers 1, 2, 3, 4, 5, 6 and 7 exactly once onto the number wall. If Maria adds two numbers from the bottom row together, she gets the number that is written exactly in the middle above these two numbers. Which number must she write in the box with the star?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "All valid placements put 4 in the starred box, choice D.",
    hint: "The middle number is the sum of two bottom numbers; test each placement of 1–7 exactly once.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/q-18-visual.png",
    imageAlt: "Original 2025 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Tim has laid out a pattern on the floor made of 11 identical tiles (see picture).\nHow long and how wide is one of these tiles? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The tile dimensions match option B.",
    hint: "Use the 11-tile outline to infer the tile's long and short dimensions from repeated runs and the total boundary.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-19-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Jana writes down how much her toys weigh: \nShe wants to divide all her toys into two boxes so that the boxes have the same weight.\nWhich two toys do not go in the same box? ",
    options: [
      "and",
      "and",
      "and",
      "and",
      "and"
    ],
    answer: 2,
    explanation: "Only the pair in option C must be separated, choice C.",
    hint: "The five toy weights total 140 g, so each box must total 70 g; test each proposed pair's complement.",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 5,
    optionContent: [
      {
        id: "20-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-a.png"
      },
      {
        id: "20-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-b.png"
      },
      {
        id: "20-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-c.png"
      },
      {
        id: "20-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-d.png"
      },
      {
        id: "20-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-20-option-e.png"
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "The picture on the right shows a bracelet with circular, square and triangular gemstones. Lisa removes three neighbouring stones, one of each shape. What bracelet can be created?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The only achievable bracelet is option B.",
    hint: "Remove each possible run of three neighbouring stones containing one of each shape, then close the remaining bracelet.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-21-extra.png",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "The calendar shown shows the days of the week in a month, but the numbers are missing. If you add the two numbers in the dark grey boxes together, you get 29. \nWhat day of the week is the 1st day of the month?",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Sunday"
    ],
    answer: 3,
    explanation: "The first day is Thursday, choice D.",
    hint: "Use the two grey-box numbers summing to 29 and their calendar positions to test each possible weekday for the 1st.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/q-22-visual.png",
    imageAlt: "Original 2025 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "Monday",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "Tuesday",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "Wednesday",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "Thursday",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "Sunday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Only option A folds into the shown four-hole pattern.",
    hint: "Undo both folds: every cut must appear in four reflected positions when the paper is unfolded.",
    imageChoices: true,
    imageAlt: "Original 2025 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "",
    options: [
      "1 kg",
      "2 kg",
      "3 kg",
      "4 kg",
      "5 kg"
    ],
    answer: 2,
    explanation: "The inequalities force the square to weigh 3 kg, choice C.",
    hint: "Let square, star, and circle weights be s, t, and c; use the two tilted balances and the distinct integer weights 1–5.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2025/questions/editor-q-24.png",
    imageAlt: "Original 2025 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 6,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1 kg",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2 kg",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "3 kg",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "4 kg",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "5 kg",
        imageAlt: "E option"
      }
    ]
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

export const edition2025Ecolier: QuestionSet = {
  id: "ecolier-2025",
  year: 2025,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 20, 2025",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2025/2025_Ecolier.pdf",
  questions: questions2025Ecolier,
  sections: sections,
};
