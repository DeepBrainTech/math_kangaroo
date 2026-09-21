import type { Question, QuestionSet, Section } from "../../../types";

const questions2014Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Luisa draws a star. She cuts a piece out of the middle of the drawing. What does this piece look like? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only option D has the same central piece as the one removed from Luisa's star.",
    hint: "Compare the cut-out boundary with the five silhouettes, matching every point and inward notch.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-01-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-01.png",
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
    prompt: "Marie wants to insert the digit 3 somewhere into the number 2014. Where must she put the digit 3 so that the new number (with all 5 digits) is as small as possible?",
    options: [
      "in front of 2014",
      "between 2 and 0",
      "between 0 and 1",
      "between 1 and 4",
      "after 2014"
    ],
    answer: 3,
    explanation: "Putting 3 between 1 and 4 gives 20134, the smallest possibility, so choice D.",
    hint: "To make the number smallest, place the new digit as far right as possible while it is still before a larger digit.",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "in front of 2014",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "between 2 and 0",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "between 0 and 1",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "between 1 and 4",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "after 2014",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "For which houses, were exactly the same building blocks used?",
    options: [
      "House 1 and 4",
      "House 3 and 4",
      "House 1, 4 and 5",
      "House 3, 4 and 5",
      "House 1, 2, 4 and 5"
    ],
    answer: 0,
    explanation: "Houses 1 and 4 use exactly the same collection of blocks, which is choice A.",
    hint: "Count and compare the individual building blocks in every pictured house, including hidden height changes.",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "House 1 and 4",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "House 3 and 4",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "House 1, 4 and 5",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "House 3, 4 and 5",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "House 1, 2, 4 and 5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Whenever Koko the koala bear is awake, he always eats 50 grams of leaves in one hour. Yesterday Koko slept for 20 hours. How many grams of leaves did he eat yesterday? ",
    options: [
      "0 grams",
      "50 grams",
      "100 grams",
      "200 grams",
      "400 grams"
    ],
    answer: 3,
    explanation: "He is awake 24 − 20 = 4 hours and eats 4 × 50 = 200 grams, choice D.",
    hint: "Koko is awake for the part of the 24-hour day not spent sleeping.",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "0 grams",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "50 grams",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "100 grams",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "200 grams",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "400 grams",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Christopher solved the sums next to the dots that you can see on the right, and got the answers 0 to 5. He joined the dots in order. He started with the dot that had the answer 0 and finished with the dot that had the answer 5. Which shape was he left with?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The resulting outline is the shape in option A.",
    hint: "Solve the six small sums, then join their dots in numerical order rather than by their positions on the page.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-05-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 5 visual",
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Anita has built fewer sandcastles than Hans but more than Steffan. Fabian has built more sandcastles than Anita and more than Hans. Bruno has built more sandcastles than Hans but less than Fabian. \nWho has built the most sandcastles? ",
    options: [
      "Hans",
      "Anita",
      "Stefan",
      "Bruno",
      "Fabian"
    ],
    answer: 4,
    explanation: "Fabian is above both Anita and Hans, and Bruno is below Fabian; Fabian is therefore greatest, choice E.",
    hint: "Turn each statement into an ordering relation and follow the chain from greatest to least.",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "Hans",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Anita",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Stefan",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "Bruno",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "Fabian",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Mr Hofer has drawn a picture of flowers on the inside of a display window (large picture). What do these flowers look like when you look at the picture from the outside? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The reflected arrangement is option E.",
    hint: "A window reverses left and right when the inside drawing is viewed from outside; preserve the flower shapes while reversing their order.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-07-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "With which square do you have to swap the question mark, so that the white area and the black area are the same size? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Only swapping with square B makes the two totals equal, so choice B.",
    hint: "Count the black and white unit areas before and after swapping each candidate square with the question mark.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-08-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: " A bowl was full with sweets. Raphael took half of them out. Afterwards Emanuel took out half of the remaining sweets. Now there are only 12 sweets left in the bowl. How many sweets were in the bowl to begin with? ",
    options: [
      "12",
      "18",
      "20",
      "24",
      "48"
    ],
    answer: 4,
    explanation: "12 doubled is 24, and 24 doubled is 48; the bowl began with 48 sweets, choice E.",
    hint: "Work backwards: undo Emanuel's halving first, then undo Raphael's halving.",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "The solid in the diagram is made out of 8 identical cubes. What does the solid look like when viewed from above? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The occupied-column pattern matches option C.",
    hint: "For each top-view choice, mark which cube columns are occupied and ignore the heights once a column is seen.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-10-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Leo writes numbers in the multiplication pyramid. Explanation of the multiplication pyramid: By multiplying the numbers which are next to each other, the number directly above (in the middle) is calculated. Which number must Leo write in the grey field? ",
    options: [
      "0",
      "1",
      "2",
      "4",
      "8"
    ],
    answer: 4,
    explanation: "The forced product in the grey field is 8, choice E.",
    hint: "Use multiplication upward in the pyramid, starting with the known bottom entries and carrying the products toward the grey cell.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-11.png",
    imageAlt: "Original 2014 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "4",
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
    points: 4,
    prompt: "Katja throws darts at the target pictured on the right. If she does not hit the target she gets no points. She throws twice and adds her points. What can her total not be?",
    options: [
      "60",
      "70",
      "80",
      "90",
      "100"
    ],
    answer: 3,
    explanation: "All listed totals except 90 can be made; 90 is the one impossible total, choice D.",
    hint: "List every possible two-dart total from the target scores, including zero for a miss.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-12.png",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "60",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "70",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "80",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "90",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "100",
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
    answer: 2,
    explanation: "Only drawing C accepts the pieces exactly, so C is correct.",
    hint: "Fit the four shown pieces against the special outline, testing rotations but never overlapping edges.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-13-extra.png",
    imageChoices: true,
    imageAlt: "Original 2014 Ecolier question 13 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Gerhard has the same number of white, grey and black counters. He has thrown some of these circular pieces together onto a pile. All the pieces he has used for this, can be seen in the picture. He has however, got 5 counters left that will not stay on the pile. How many black counters did he have to begin with? ",
    options: [
      "5",
      "6",
      "7",
      "15",
      "18"
    ],
    answer: 1,
    explanation: "The pile and the five counters left over force an original total of 6 black counters, choice B.",
    hint: "Count the black counters in the pile and use the fact that the original number of each colour was equal.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-14.png",
    imageAlt: "Original 2014 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Hubert the rabbit loves cabbages and carrots. In one day he eats either 9 carrots, or 2 cabbages, or one cabbage and 4 carrots. In one week Hubert had eaten 30 carrots. How many cabbages had he in eaten during this week? ",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    answer: 1,
    explanation: "4x + 9y = 30 and x + y ≤ 7 gives x = 3, y = 2; the remaining two days use 2 cabbages each, for 7 cabbages, choice B.",
    hint: "Let x be the number of days with one cabbage and four carrots, and y the days with nine carrots.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "How many dots are in the picture?",
    options: [
      "180",
      "181",
      "182",
      "183",
      "265"
    ],
    answer: 1,
    explanation: "The total is 181 dots, which is choice B.",
    hint: "Count the dots row by row, keeping track of the repeated pattern and the central dots.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-16.png",
    imageAlt: "Original 2014 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "180",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "181",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "182",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "183",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "265",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "On the Kangaroo planet each kangoo-year has 20 kangoo-months. Each kangoo-month has 6 kangoo-weeks. How many kangoo-weeks are in a quarter of a kangoo-year?",
    options: [
      "9",
      "30",
      "60",
      "90",
      "120"
    ],
    answer: 1,
    explanation: "5 × 6 = 30 kangoo-weeks, choice B.",
    hint: "A quarter of 20 kangoo-months is 5 months; convert those months into weeks.",
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "30",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "60",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "90",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "120",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Seven children stand in a circle. Nowhere are two boys found standing next to each other. Nowhere are three girls found standing next to each other. What is possible for the number of girls? The number of girls can…",
    options: [
      "only be 3",
      "be 3 or 4",
      "only be 4",
      "be 4 or 5",
      "only be 5"
    ],
    answer: 2,
    explanation: "Only four girls can be arranged without adjacent boys or three consecutive girls, so choice C.",
    hint: "Try the possible counts of girls and arrange boys and girls around the circle under both adjacency restrictions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-18.png",
    imageAlt: "Original 2014 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "only be 3",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "be 3 or 4",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "only be 4",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "be 4 or 5",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "only be 5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Elisabeth sorts the following cards: With each move she is allowed to swap any two cards with each other. What is the smallest number of moves she needs in order to get the word KANGAROO.",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Three carefully chosen swaps are sufficient and fewer cannot correct all misplaced letters, so choice B.",
    hint: "For each swap, compare the current card with the target word and count how many positions can be fixed at once.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/q-19-visual.png",
    imageAlt: "Original 2014 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
    prompt: "The number of black diamonds and white level 1 level 2 level 3 diamonds follow a fixed system. In the picture the first 3 levels are shown. Each level (from the 2nd level) has one row more than the level before. For each level the following applies: In the last row both of the outermost diamonds are white, all other diamonds are black. How many black diamonds are there in level 6?",
    options: [
      "19",
      "21",
      "26",
      "28",
      "34"
    ],
    answer: 2,
    explanation: "The black-diamond count is 26, matching choice C.",
    hint: "Count the diamonds in each row of level 6 and exclude only the two white outer diamonds in its last row.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-20.png",
    imageAlt: "Original 2014 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "26",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "28",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "34",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Heinzi the kangaroo has bought some toys. For this he gave 150 Kangoo-coins (KC) and received 20 kangoo-coins back. Just before leaving the shop he changed his mind, and exchanged one of the toys he had bought with another one. Therefore he received a further 5 kangoo-coins back from the shopkeeper. Which of the toys in the picture has Heinzi taken home with him?",
    options: [
      "Carriage and Aeroplane",
      "Carriage and Bus",
      "Carriage and Tram",
      "Motorbike and Tram",
      "Bus, Motorbike and Tram"
    ],
    answer: 0,
    explanation: "The final toys cost 150 − 20 − 5 = 125 KC; checking the pictured prices leaves carriage and aeroplane, choice A.",
    hint: "Use the money returned before and after the exchange to find the original and final purchase totals.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/q-21-visual.png",
    imageAlt: "Original 2014 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "Carriage and Aeroplane",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "Carriage and Bus",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "Carriage and Tram",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "Motorbike and Tram",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "Bus, Motorbike and Tram",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "In each box exactly one of the digits 0, 1, 2, 3, 4, 5 and 6 is to be written. Each digit will only be used once. Which digit has to be written in the grey box so that the sum is correct? ",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Only digit 5 makes the displayed addition correct, so choice D.",
    hint: "Substitute each candidate digit into the grey box while using every other digit exactly once, then check the whole sum.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/q-22-visual.png",
    imageAlt: "Original 2014 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "In the figure on the right, a few of the small squares will be painted grey. In so doing, no 2 × 2 square made up of four small grey squares must appear. At most how many of the squares in the figure can be painted grey?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    answer: 3,
    explanation: "The maximum is 21 grey squares, choice D.",
    hint: "Paint a trial grid and forbid every 2 × 2 block containing four grey cells; add grey squares until the next one would create such a block.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-23.png",
    imageAlt: "Original 2014 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Albin has put each of the digits from 1 to 9 in the fields of the table. In the diagram only 4 of these digits are visible. For the field containing the number 5, Albin noticed that the sum of the numbers in the neighbouring fields is 13. (neighbouring fields are fields which share a side). He noticed exactly the same for the field containing the digit 6. Which digit had Albin written in the grey field?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 3,
    explanation: "The only digit that satisfies both sums in the grey field is 8, choice D.",
    hint: "Use the neighbour-sum condition first around 5 and then around 6; shared neighbours give the strongest restrictions.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2014/questions/editor-q-24.png",
    imageAlt: "Original 2014 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "9",
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

export const edition2014Ecolier: QuestionSet = {
  id: "ecolier-2014",
  year: 2014,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 20, 2014",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2014/2014_Ecolier.pdf",
  questions: questions2014Ecolier,
  sections: sections,
};
