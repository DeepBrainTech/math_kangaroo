import type { Question, QuestionSet, Section } from "../../../types";

const questions2015Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "",
    options: [
      "6",
      "7",
      "8",
      "10",
      "15"
    ],
    answer: 4,
    explanation: "Starting from 2 gives (2 − 0 + 1) × 5 = 15, so choice E.",
    hint: "Read the operations along the arrows in order: subtract 0, add 1, then multiply by 5.",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Strip A leaves the greatest distance between its two outer ends, so it is the longest.",
    hint: "Because all strips are identical, the longest pair is the one with the smallest overlap; compare the hole positions at the join.",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 2 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "In kangaroo land you pay with “Kangas”.  Lucy has a few Kangas in her purse. She buys a ball and pays 7 Kangas. How many Kangas does she have left over, after she has paid fort he ball?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "The remaining amount matches option B.",
    hint: "Count the Kangas in Lucy's purse in the picture and remove the 7 paid for the ball.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-03-extra.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
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
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: " If you multiply both digits of the number 35, you get 15.  How big is the sum of both digits?",
    options: [
      "2",
      "4",
      "6",
      "7",
      "8"
    ],
    answer: 4,
    explanation: "The digits are 3 and 5, and 3 + 5 = 8, choice E.",
    hint: "Find the two digits whose product is 15, then add them rather than multiplying again.",
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
        text: "4",
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
    prompt: "Which number is hidden behind the square?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The hidden value is 6, so choice E is correct.",
    hint: "Work through the pictured arithmetic from left to right and isolate the value behind the square.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/q-05-visual.png",
    imageAlt: "Original 2015 Ecolier question 5 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "The word Kangaroo is written on the top of my umbrella. Which of the 5 pictures shows my umbrella",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The orientation seen from above is option A.",
    hint: "Imagine looking down from above the umbrella, keeping the printed word attached to the top and the handle below.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-06-extra.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 6 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
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
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "9 points, numbered 1 to 9 are marked on a circle. Point 1 is joined to point 3, 3 to 5. Continue the drawing, always joining to the next but one point along. Which drawing do you get if you keep going until you get back to point 1?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The nine-point step pattern produces the drawing in option E.",
    hint: "Starting at point 1, jump to every second point and continue until the path closes.",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 7 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-a.png"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-b.png"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-c.png"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-d.png"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-07-option-e.png"
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "In the diagram you can see a very ragged island. Some of the frogs are sitting in the water. How many are sitting on the island?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "There are six frogs on the island, choice B.",
    hint: "Separate frogs whose feet lie on land from frogs whose feet are in the water; count only the former.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-08.png",
    imageAlt: "Original 2015 Ecolier question 8 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Luis has got 7 apples and 2 bananas. He gives 2 apples to his friend Jacob, who gives him bananas in return. Afterwards Luis has got the same amounts of apples as bananas. How many bananas did Luis get from Jacob?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "7"
    ],
    answer: 1,
    explanation: "He needs 5 − 2 = 3 bananas to make the amounts equal, choice B.",
    hint: "After Luis gives away two apples, compare his five remaining apples with his new bananas.",
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
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Julia folds the paper net pictured on the right, into a cube. Which number is on the face that is opposite to the face with the number 3?",
    options: [
      "1",
      "2",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The face opposite 3 is 6, so choice E.",
    hint: "Fold the net around the face numbered 3 and track which face lands opposite it after the four side faces close.",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Jack makes a cube from 27 small cubes. The small cubes are either grey or white as shown in the diagram. Two small cubes with the same colour are not allowed to be placed next to each other. How many small, white cubes has Jack used?",
    options: [
      "10",
      "12",
      "13",
      "14",
      "15"
    ],
    answer: 2,
    explanation: "The diagram's alternating arrangement contains 13 white cubes, choice C.",
    hint: "The 3 × 3 cube alternates colours across every shared face; count one colour in the complete checkerboard.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/q-11-visual.png",
    imageAlt: "Original 2015 Ecolier question 11 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "10 runners start in a running race. At the finish, there are 3 more runners behind Thomas than there are in front of him. In which position did Thomas finish?",
    options: [
      "1",
      "3",
      "4",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "f + 1 + (f + 3) = 10 gives f = 3, so Thomas is fourth, choice C.",
    hint: "Let f be the number of runners in front of Thomas; then the number behind is f + 3.",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Joseph has got a toy car, a teddy bear, a ball and a ship. He wants to put them in a new order on the shelf. The ship must be next to the car, and the teddy bear should also be next to the car. In how many different orders can he put the toys on the shelf?",
    options: [
      "2",
      "4",
      "5",
      "6",
      "8"
    ],
    answer: 1,
    explanation: "The block has two orders and the ball can occupy four gaps: 2 × 4 = 8, choice E.",
    hint: "The car must have both the ship and teddy bear beside it, so place the three-object block first.",
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
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Peter rides his bike along a cycle path in a park. He starts at point S and rides in the direction of the arrow. At the first crossing he turns right, then at the next left, and then again to the right and then again to left. Which crossing does he not reach?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The path misses crossing D, so choice D.",
    hint: "Trace the route from S, applying right, left, right, left at successive crossings; do not choose a turn by visual symmetry.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/q-14-visual.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Two of the 5 ladybirds in the picture are always friends with each other if the difference between their number of dots is exactly 1. Today every ladybird has sent an SMS to each of their friends. How many SMS messages were sent?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "The picture gives three friendship pairs and therefore 6 messages, choice C.",
    hint: "Join ladybirds whose dot counts differ by exactly one, then count each friendship in both directions because each friend receives an SMS.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/q-15-visual.png",
    imageAlt: "Original 2015 Ecolier question 15 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "6",
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
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "There are 10 balls, numbered 0 to 9 in a basket. John and George play a game. Each person is allowed to take three balls from the basket and calculate the total of the numbers on the balls. What is the biggest possible difference between the john and Georges totals?",
    options: [
      "1",
      "12",
      "18",
      "19",
      "21"
    ],
    answer: 4,
    explanation: "(9 + 8 + 7) − (0 + 1 + 2) = 21, choice E.",
    hint: "To maximize a difference, give one player the three largest numbers and the other the three smallest.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/q-16-visual.png",
    imageAlt: "Original 2015 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
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
        text: "12",
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
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Luca wants to cut the shape in figure 1 into equally sized small triangles (like those in figure 2). One of these triangles is already drawn on figure 1. How many of these triangles will he get?",
    options: [
      "8",
      "12",
      "14",
      "15",
      "16 Figur 1"
    ],
    answer: 3,
    explanation: "The shape contains 15 equal small triangles, so choice D.",
    hint: "Compare the area of the large shape with the area of one small triangle, using the already drawn triangle as the unit.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-17.png",
    imageAlt: "Original 2015 Ecolier question 17 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "16 Figur 1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Some of the small squares on each of the square transparencies have been coloured black. If you slide the three transparencies on top of each other, without lifting them from the table, a new pattern can be seen. What is the maximum number of black squares which could be seen in the new pattern?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 3,
    explanation: "The maximum union contains 8 black squares, choice D.",
    hint: "Overlay the three transparencies and count each square that is black in at least one layer; slide them to avoid overlap of black cells.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-18-extra.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "The numbers 1, 2, 3, 4 and 9 are written into the squares on the following figure. The sum of the three numbers in the horizontal row, should be the same as the sum of the three numbers in the vertical column. Which number is written in the middle?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "9"
    ],
    answer: 4,
    explanation: "Only x = 9 makes the two three-number sums equal, so choice E.",
    hint: "Let the centre be x; equate the sum of the horizontal row and vertical column and test the five possible centre values.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-19.png",
    imageAlt: "Original 2015 Ecolier question 19 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "The shape in the picture is to be split into three identical pieces. What does one of these pieces look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The three-piece partition has the shape shown in option A.",
    hint: "Try cutting the original shape into three congruent pieces, rotating a candidate whenever its notch points the wrong way.",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 20 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "20-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-a.png"
      },
      {
        id: "20-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-b.png"
      },
      {
        id: "20-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-c.png"
      },
      {
        id: "20-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-d.png"
      },
      {
        id: "20-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-20-option-e.png"
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Which picture shows a single large loop?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Only option B forms one single large loop.",
    hint: "Follow each wire through the crossings and check whether it belongs to one closed component or several loops.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-21-extra.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 21 visual",
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
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "In this square there are 9 dots. The distance between the points is always the same. You can draw a square by joining 4 points. How many different sizes can such squares have?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "There are two possible square sizes, so choice C.",
    hint: "A square can use two adjacent grid spacings or one diagonal-sized spacing; count the distinct side lengths that close.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-22.png",
    imageAlt: "Original 2015 Ecolier question 22 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Thomas drew a pig and a shark. He cuts each animal into three pieces. Then he takes one of the two heads, one of the two middle sections and one of the two tails and lays them together to make another animal. How many different animals can he make in this way?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "8"
    ],
    answer: 4,
    explanation: "2 × 2 × 2 = 8 different animals, choice E.",
    hint: "Choose one of two heads, one of two middles, and one of two tails independently.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2015/questions/editor-q-23-extra.png",
    imageChoices: true,
    imageAlt: "Original 2015 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
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
        text: "5",
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
    prompt: "Anna, Berta, Charlie, David and Elisa baked biscuits at the weekend. Anna baked 24, Berta 25, Charlie 26, David 27 and Elisa 28 biscuits. By the end of the weekend one of the children had twice as many, one 3 times, one 4 times, one 5 times and one 6 times as many biscuits as on Saturday. Who baked the most biscuits on Saturday?",
    options: [
      "Anna",
      "Berta",
      "Charlie",
      "David",
      "Elisa"
    ],
    answer: 2,
    explanation: "The only assignment that fits all five statements puts the largest Saturday amount, 26, with Charlie: choice C.",
    hint: "Assign the multipliers 2, 3, 4, 5, and 6 to the Saturday amounts and require each product to be a whole weekend total.",
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "Anna",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "Berta",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "Charlie",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "David",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "Elisa",
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

export const edition2015Ecolier: QuestionSet = {
  id: "ecolier-2015",
  year: 2015,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 23, 2015",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2015/2015_Ecolier.pdf",
  questions: questions2015Ecolier,
  sections: sections,
};
