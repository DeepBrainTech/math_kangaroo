import type { Question, QuestionSet, Section } from "../../../types";

const questions2011Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Bernd wants to paint the word KANGAROO. He begins on a Wednesday and paints one letter each day. On which day will he paint the last letter?",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    answer: 2,
    explanation: "The eighth letter is painted seven days after Wednesday, on the next Wednesday; choice C.",
    hint: "Count the eight letters of KANGAROO, starting the first one on Wednesday.",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "Monday",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "Tuesday",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "Wednesday",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "Thursday",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Friday",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which stone should Mr Flintstone place on the right side of the scales, so that both sides weigh the same?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Only stone C supplies exactly the weight needed to level the scales.",
    hint: "Read the weights already on the two pans and compare each candidate stone with the missing difference.",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "2-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-a.png"
      },
      {
        id: "2-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-b.png"
      },
      {
        id: "2-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-c.png"
      },
      {
        id: "2-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-d.png"
      },
      {
        id: "2-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-02-option-e.png"
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A game is played on a board as shown in the picture. I move the counter from square to square according to the following rules. First, one square to the right, then one square up, then one square left, then one square down, and then once again one square right. Which picture shows where the counter can then be found?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The first four moves return to the starting row and column; the final right move places the counter as shown in option B.",
    hint: "Track the counter one move at a time: right, up, left, down, then right again.",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-a.png"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-b.png"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-c.png"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-d.png"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-03-option-e.png"
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Simon awoke one and a half hours ago. In three and a half hours he will catch a train to go to his grandma. How long before the time his train leaves, did he wake up?",
    options: [
      "Two hours",
      "Three and a half hours",
      "Four hours",
      "Four and a half hours",
      "Five hours"
    ],
    answer: 4,
    explanation: "1.5 + 3.5 = 5 hours, so the correct choice is E.",
    hint: "The time from waking to the train is the 1.5 hours already passed plus the 3.5 hours still to come.",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "Two hours",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "Three and a half hours",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "Four hours",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "Four and a half hours",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "Five hours",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Maria describes one of these five shapes in the following way: \"It is not a square. It is grey. It is either round or three sided.\" Which shape did she describe?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The only figure satisfying all three descriptions is option B.",
    hint: "Eliminate the square first, then among the remaining shapes keep only grey shapes that are round or three-sided.",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 5 visual",
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Lenka paid 1 Euro and 50 Cents for three scoops of ice cream. Miso paid 2 Euro’s and 40 Cents for two chocolate bars. How much did Igor pay for one scoop of ice cream and one chocolate bar?",
    options: [
      "1 € 70 c",
      "1 € 90 c",
      "2 € 20 c",
      "2 € 70 c",
      "3 € 90 c"
    ],
    answer: 0,
    explanation: "A scoop costs 1.50 ÷ 3 = 0.50 euros and a bar costs 2.40 ÷ 2 = 1.20 euros; together they cost 1.70 euros, choice A.",
    hint: "Find the unit price of one ice cream scoop and one chocolate bar separately.",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "1 € 70 c",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "1 € 90 c",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "2 € 20 c",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "2 € 70 c",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "3 € 90 c",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "The bell of a clocktower rings every full hour (8:00, 9:00, 10:00 etc.) and rings as many times as the number of hours. It also rings once on every half hour (8:30, 9:30, 10:30 etc). How often will it ring between 7:55 and 10:45?",
    options: [
      "6 times",
      "18 times",
      "27 times",
      "30 times",
      "33 times"
    ],
    answer: 3,
    explanation: "The full hours contribute 8 + 9 + 10 = 27 rings, and the three half-hours add 3, for 30 rings, choice D.",
    hint: "Include the full-hour rings and the half-hour rings from 7:55 through 10:45.",
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "6 times",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "18 times",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "27 times",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "30 times",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "33 times",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Which shape has the biggest area?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The equal-region count shows that shape C encloses the greatest area.",
    hint: "Compare the shapes by splitting them into the same small reference regions rather than judging their outlines.",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 8 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "A chicken farmer packs eggs in boxes of 6 and boxes of 12. What is the smallest number of boxes he needs to pack 66 eggs?",
    options: [
      "5",
      "6",
      "9",
      "11",
      "13"
    ],
    answer: 1,
    explanation: "Five 12-boxes hold 60 eggs and one 6-box holds the remaining 6, so six boxes are enough and minimal: B.",
    hint: "Use as many 12-egg boxes as possible, then fill the remainder with a 6-egg box.",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "11",
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
    prompt: "All the children in a class at school have at least one pet, and at most two pets. They write down how many pets they have together. Two children each have a dog and a fish. Three have each a cat and a dog. No child has two cats. Altogether they have eight cats, six dogs, and two fish. How many children are in the class?",
    options: [
      "11",
      "12",
      "13",
      "14",
      "17"
    ],
    answer: 0,
    explanation: "The remaining five cats must belong to five different children, and the one remaining dog must belong to one more child because the three cat-dog pairs are already fixed. Total: 2 + 3 + 5 + 1 = 11, choice A.",
    hint: "Use the fact that exactly three children already have both a cat and a dog, and exactly two have both a dog and a fish.",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Johannes has only 5 Cent coins and 10 Cent coins in his pocket. Altogether he has 13 coins. Which of the following amounts cannot be the total of his coins?",
    options: [
      "80 c",
      "60 c",
      "70 c",
      "115 c",
      "125 c"
    ],
    answer: 1,
    explanation: "The possible totals are 65 + 5k; 60 cents would require k = −1, so it cannot occur. Choice B.",
    hint: "With 13 coins, start from 65 cents and add 5 cents for each 10-cent coin.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "80 c",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "60 c",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "70 c",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "115 c",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "125 c",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "A page is folded along the thick line as shown. Which letter will not be covered by a grey square?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Following the reflected positions leaves letter E uncovered, so E is the answer.",
    hint: "Fold the page along the thick line and match every point to its reflected position.",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 12 visual",
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Anna, Bob, Cleo, Dido, Eva, and Ferdl each roll a dice. Each person rolls a different number. Anna’s number is twice as big as Bob’s. Anna’s number is three times as big as Cleo’s. Dido’s number is four times as big as Eva’s. Which number did Ferdl roll?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "The forced values are Anna 6, Bob 3, Cleo 2, Dido 4, and Eva 1; the only number left for Ferdl is 5, choice D.",
    hint: "Use the dice values 1–6 exactly once: Anna is twice Bob, three times Cleo, and Dido is four times Eva.",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A quizshow has the following rules: Each contestant begins with 10 points. They must answer 10 questions. For each correct answer they get a point and for each incorrect answer they lose a point. Mrs Blandorfer finished the show with 14 points. How many questions had she answered incorrectly?",
    options: [
      "7",
      "4",
      "5",
      "3",
      "6"
    ],
    answer: 3,
    explanation: "10 + (10 − x) − x = 14 gives x = 3, which is choice D.",
    hint: "Let x be the number wrong. The number correct is 10 − x, so write the final score equation.",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "In each square of the maze there is a piece of cheese. Ronnie the mouse wants to enter and leave the maze as shown in the picture. He doesn’t want to visit a square more than once, but would like to eat as much cheese as possible. What is the maximum number of pieces of cheese that he can eat?",
    options: [
      "17",
      "33",
      "37",
      "41",
      "49"
    ],
    answer: 2,
    explanation: "The longest legal route visits 37 squares before exiting, so choice C is correct.",
    hint: "Trace a non-repeating route through the maze and count cheese squares, checking where a turn would trap the mouse.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/q-15-visual.png",
    imageAlt: "Original 2011 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "17",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "33",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "37",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "41",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "49",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "During a party, two identical cakes were each cut into four identical pieces. Each of these pieces was then cut into three identical pieces. Each person at the party got a piece of cake, and there were three pieces left over. How many people were at the party?",
    options: [
      "24",
      "21",
      "18",
      "27",
      "13"
    ],
    answer: 1,
    explanation: "There are 24 pieces altogether and 3 remain, so 21 people received a piece, choice B.",
    hint: "Each cake gives 4 × 3 = 12 small pieces; combine both cakes before subtracting the leftovers.",
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "21",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "27",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Four friends Masha, Sasha, Dasha and Pasha are sitting on a bench. At first Masha swapped places with Dasha. Then Dasha swapped places with Pasha. After this the four friends are sitting from left to right in the order: Masha, Sasha, Dasha, Pasha. In what order, from left to right were they sitting to begin with?",
    options: [
      "Masha, Sasha, Dasha, Pasha",
      "Masha, Dasha, Pasha, Sasha",
      "Dasha, Sasha, Pasha, Masha",
      "Sasha, Masha, Dasha, Pasha",
      "Pasha, Masha, Sasha, Dasha"
    ],
    answer: 2,
    explanation: "Reversing the two swaps gives Dasha, Sasha, Pasha, Masha, which is option C.",
    hint: "Undo the swaps in reverse order: first undo Dasha–Pasha, then undo Masha–Dasha.",
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "Masha, Sasha, Dasha, Pasha",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "Masha, Dasha, Pasha, Sasha",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "Dasha, Sasha, Pasha, Masha",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "Sasha, Masha, Dasha, Pasha",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "Pasha, Masha, Sasha, Dasha",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "How often in a day does a digital clock display four identical digits? The picture shows a digital clock that is displaying exactly two different digits.",
    options: [
      "1 time",
      "24 times",
      "3 times",
      "5 times",
      "12 times"
    ],
    answer: 2,
    explanation: "There are three such times, so choice C is correct.",
    hint: "A four-digit display has identical digits only at 00:00, 11:11, and 22:22 in a 24-hour day.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-18.png",
    imageAlt: "Original 2011 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1 time",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "24 times",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "3 times",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "5 times",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "12 times",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Four identical dice were put together to make a tower as shown. The sum of the numbers on opposite faces of each dice is always 7. What would the tower look like from behind?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "The back view produced by the required rotations is option C.",
    hint: "Use opposite faces summing to 7 and rotate the tower without changing the order of its visible faces.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-19-extra.png",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "You can place together the cards pictured, to make different three digit numbers, for instance 989 or 986. How many different three digit numbers can you make with these cards?",
    options: [
      "4",
      "6",
      "8",
      "9",
      "12"
    ],
    answer: 4,
    explanation: "There are 12 different three-digit numbers, so choice E is correct.",
    hint: "Count arrangements of the pictured cards while treating the two orientations of a 6/9 card as distinct when they make different numbers.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/q-20-visual.png",
    imageAlt: "Original 2011 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Andrea made the pattern in the picture out of several identical tiles. None of the tiles overlap each other. Which of the following tiles could she definitely not have used?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "Only option D leaves an unavoidable overlap or gap, so D is the tile that cannot have been used.",
    hint: "Try each candidate tile against every exposed edge of the pattern; a tile is impossible if one of its edges cannot be matched.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-21-extra.png",
    imageChoices: true,
    imageAlt: "Original 2011 Ecolier question 21 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "The picture shows a Fortress made from cubes. How many cubes were used to make it?",
    options: [
      "56",
      "60",
      "64",
      "68",
      "72"
    ],
    answer: 0,
    explanation: "Adding all layer counts gives 56 cubes, which is choice A.",
    hint: "Count the cubes in each horizontal layer of the fortress rather than counting only the visible front faces.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/q-22-visual.png",
    imageAlt: "Original 2011 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "56",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "60",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "64",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "68",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "72",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Johannes wrote the numbers 6, 7 and 8 in the circles as shown. He wants to write the numbers 1, 2, 3, 4 and 5 in the remaining circles so that the sum of the numbers along each side of the square is 13. What will be the sum of the numbers in the grey circles?",
    options: [
      "12",
      "13",
      "14",
      "15",
      "16"
    ],
    answer: 4,
    explanation: "The five remaining numbers can be placed only when the grey circles total 16, choice E.",
    hint: "Write the side-sum equations as 13 and use the fixed 6, 7, and 8 to determine the grey-circle total.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/q-23-visual.png",
    imageAlt: "Original 2011 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Sylvia draws patterns with hexagons as shown. If she carries on drawing in this way, how many hexagons will there be in the fifth pattern?",
    options: [
      "37",
      "49",
      "57",
      "61",
      "64"
    ],
    answer: 3,
    explanation: "Continuing the same growth to pattern five gives 61 hexagons, so choice D is correct.",
    hint: "Count the hexagons in each shown pattern and compare how many the next pattern adds.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2011/questions/q-24-visual.png",
    imageAlt: "Original 2011 Ecolier question 24 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "37",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "49",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "57",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "61",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "64",
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

export const edition2011Ecolier: QuestionSet = {
  id: "ecolier-2011",
  year: 2011,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 17, 2011",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2011/2011_Ecolier.pdf",
  questions: questions2011Ecolier,
  sections: sections,
};
