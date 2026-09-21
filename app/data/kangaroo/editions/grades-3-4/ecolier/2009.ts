import type { Question, QuestionSet, Section } from "../../../types";

const questions2009Ecolier: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "2 × 9 + 200 + 9 =",
    options: [
      "292",
      "209",
      "290",
      "272",
      "227"
    ],
    answer: 4,
    explanation: "2 × 9 = 18, and 18 + 200 + 9 = 227, so the correct choice is E.",
    hint: "Separate the multiplication from the two additions, then combine the hundreds, tens, and ones.",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "292",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "209",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "290",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "272",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "227",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Four sticks have 8 ends. How many ends do 7 sticks have?",
    options: [
      "6",
      "8",
      "12",
      "13",
      "14"
    ],
    answer: 4,
    explanation: "Seven sticks have 7 × 2 = 14 ends, which is choice E.",
    hint: "Every stick contributes two ends; the drawing is not needed for this count.",
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
        text: "8",
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
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Where is the Kangaroo?",
    options: [
      "In the circle and in the triangle but not in the square.",
      "In the circle and in the square but not in the triangle.",
      "In the triangle and in the square but not in the circle.",
      "In the circle but in neither the square or the triangle.",
      "In the square but in neither the circle or the triangle."
    ],
    answer: 1,
    explanation: "The kangaroo is inside the circle and the square but outside the triangle, matching choice B.",
    hint: "Check the kangaroo against each boundary in the picture: circle, square, and triangle.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/q-03-visual.png",
    imageAlt: "Original 2009 Ecolier question 3 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "In the circle and in the triangle but not in the square.",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "In the circle and in the square but not in the triangle.",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "In the triangle and in the square but not in the circle.",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "In the circle but in neither the square or the triangle.",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "In the square but in neither the circle or the triangle.",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "In the picture you see the number 930. How many small squares must be changed so that the number becomes 806?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "Changing the six cells that differ transforms 930 into 806, so choice B is correct.",
    hint: "Compare the two seven-segment-style numbers cell by cell, including the white cells inside each digit.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/q-04-visual.png",
    imageAlt: "Original 2009 Ecolier question 4 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Mother bought 16 mandarins. Karl ate half of them, Eva ate two, und Dana ate the rest. How many mandarins did Dana eat?",
    options: [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    answer: 1,
    explanation: "Karl eats 8, leaving 8; Eva eats 2, so Dana gets 6 mandarins, choice B.",
    hint: "First take half of 16, then remove Eva's two mandarins from what remains.",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "4",
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
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "In his garden Tony made a pathway using 10 paving stones. Each paver was 4 dm wide and 6 dm long. He then drew a black line connecting the middle points of each paving stone. How long is the black line?",
    options: [
      "24 dm",
      "40 dm",
      "46 dm",
      "50 dm",
      "56 dm"
    ],
    answer: 2,
    explanation: "The line contains five 6 dm runs and four 4 dm runs: 5 × 6 + 4 × 4 = 46 dm, choice C.",
    hint: "Trace the black line through the ten paver centres and count the long and short steps shown in the diagram.",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "24 dm",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "40 dm",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "46 dm",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "50 dm",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "56 dm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Sophie rolled a die four times and scored a total of 23 points. How often did she roll a six?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "Four sixes score 24, so being one point short means three dice showed 6 and the remaining die showed 5. The answer is D.",
    hint: "Compare the score of 23 with the maximum score of four sixes.",
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "A certain film lasts 90 minutes. It begins at 17:10. During the film there are two advert breaks, one lasting eight minutes and the other five minutes. At what time will the film end?",
    options: [
      "um 18:13",
      "um 18:27",
      "um 18:47",
      "um 18:53",
      "um 19:13"
    ],
    answer: 3,
    explanation: "The total time is 90 + 8 + 5 = 103 minutes; 17:10 + 1:43 = 18:53, choice D.",
    hint: "Add the two advertising breaks to the film length before adding the total to 17:10.",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "um 18:13",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "um 18:27",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "um 18:47",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "um 18:53",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "um 19:13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "In a dance group there are 25 boys and 19 girls. Every week 2 more boys and 3 more girls join the group. After how many weeks will there be the same number of boys as girls in the dance group?",
    options: [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    answer: 0,
    explanation: "25 + 2w = 19 + 3w gives w = 6, so choice A is correct.",
    hint: "Write the two totals after w weeks as 25 + 2w and 19 + 3w, then set them equal.",
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "5",
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
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Peter shared a bar of chocolate. First he broke off a row with five pieces for his brother. Then he broke off a column with 7 pieces for his sister. How many pieces were there in the entire bar of chocolate?",
    options: [
      "28",
      "32",
      "35",
      "40",
      "54"
    ],
    answer: 3,
    explanation: "The bar is 5 pieces wide and 8 pieces high, giving 5 × 8 = 40 pieces, choice D.",
    hint: "Use the five-piece row as the width and remember that the seven-piece column starts below that row.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/q-10-visual.png",
    imageAlt: "Original 2009 Ecolier question 10 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "32",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "35",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "40",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "54",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "A farmer has 30 cows, some chickens and no other animals.The total number of chickens legs is equal to the total number of cows legs. How many animals does the farmer have?",
    options: [
      "60",
      "90",
      "120",
      "180",
      "240"
    ],
    answer: 1,
    explanation: "Thirty cows have 120 legs, requiring 60 chickens. Thus there are 30 + 60 = 90 animals, choice B.",
    hint: "Convert the cows to legs first, then use two legs per chicken and include both species in the final count.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "60",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "90",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "120",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "180",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "240",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Picture X is paired with picture Y. Which of the following pictures is paired with picture G?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "The same pairing rule sends picture G to option E; the visual relationship, not the letter labels, determines the answer.",
    hint: "Identify exactly what changes from picture X to picture Y, then apply that same transformation to picture G.",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-extra.png",
    imageChoices: true,
    imageAlt: "Original 2009 Ecolier question 12 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-a.png"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-b.png"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-c.png"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-d.png"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-12-option-e.png"
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "The length of a rectangle is 8cm. The width is half as long. How long are the sides of a square that has the same perimeter as the rectangle?",
    options: [
      "4 cm",
      "6 cm",
      "8 cm",
      "12 cm",
      "24 cm"
    ],
    answer: 1,
    explanation: "The rectangle is 8 cm by 4 cm, with perimeter 24 cm. Each square side is 24 ÷ 4 = 6 cm, choice B.",
    hint: "Find the rectangle's width, calculate its perimeter, and make the square perimeter equal to it.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "4 cm",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "6 cm",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "8 cm",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "12 cm",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "24 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Thomas has made a table out of small cubes. How many small cubes did he use?",
    options: [
      "24",
      "26",
      "28",
      "32",
      "36"
    ],
    answer: 3,
    explanation: "Layering the table in the diagram gives 32 cube positions altogether, so choice D is correct.",
    hint: "Count the cubes by horizontal layers and then add the cubes forming the lower supports.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-14.png",
    imageAlt: "Original 2009 Ecolier question 14 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "26",
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
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Three squirrels Anni, Asia and Elli have collected 7 nuts. They have all collected a different amount of nuts, and everybody has collected at least one nut. Anni has collected the least and Asia the most. How many nuts has Elli collected?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "Not possible to answer."
    ],
    answer: 1,
    explanation: "The only possible ordered amounts are 1, 2, and 4, so Elli collected 2 nuts, choice B.",
    hint: "List distinct positive amounts adding to 7, keeping Anni smallest and Asia largest.",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "3",
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
        text: "Not possible to answer.",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Which of the following diagrams is impossible to make with the two dominos?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Choices A–D can be assembled with matching joins; option E forces unlike pip counts to meet and is impossible.",
    hint: "Rotate or reflect the two dominoes mentally, but allow them to touch only where the pip counts match.",
    imageChoices: true,
    imageAlt: "Original 2009 Ecolier question 16 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-a.png"
      },
      {
        id: "16-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-b.png"
      },
      {
        id: "16-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-c.png"
      },
      {
        id: "16-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-d.png"
      },
      {
        id: "16-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-e.png"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-16-option-e.png"
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "A white and a black pig weigh together 320 kg. The black pig weighs 32kg more than the white one. How much does the white pig weigh?",
    options: [
      "128 kg",
      "144 kg",
      "160 kg",
      "176 kg",
      "192 kg"
    ],
    answer: 1,
    explanation: "w + (w + 32) = 320 gives 2w = 288 and w = 144 kg, choice B.",
    hint: "Let the white pig weigh w kilograms and express the black pig as w + 32.",
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "128 kg",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "144 kg",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "160 kg",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "176 kg",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "192 kg",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Anna and Peter live in the same street. On one side of Anna's house there are 27 houses, and on the other side there are 13 houses. Peter lives in the house right in the middle of the street. How many houses are there between Anna's and Peter's houses?",
    options: [
      "6",
      "7",
      "8",
      "14",
      "21"
    ],
    answer: 0,
    explanation: "There are 41 houses, so Peter is number 21 and Anna is number 28. Six houses lie between them, choice A.",
    hint: "Number the houses from one end of the street; the middle house is fixed by the total number of houses.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/q-18-visual.png",
    imageAlt: "Original 2009 Ecolier question 18 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "A secret agent wants to crack a six digit code. He knows that the sum of the digits in the even positions is equal to the sum of the digits in the odd positions. Which of the following numbers is the code?",
    options: [
      "81**61",
      "7*727*",
      "4*4141",
      "12*9*8",
      "181*2*"
    ],
    answer: 3,
    explanation: "Only the arrangement in option D can fill its hidden digits so the odd-position and even-position sums agree.",
    hint: "For every candidate, add digits in positions 1, 3, 5 and compare with positions 2, 4, 6.",
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "81**61",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "7*727*",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "4*4141",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "12*9*8",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "181*2*",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Meta collects pictures of famous sports people. Each year she collects as many pictures as she did in the previous two years. In 2008 she had 60 photos and this year she has 96. How many photos did she have in 2006?",
    options: [
      "20",
      "24",
      "36",
      "40",
      "48"
    ],
    answer: 1,
    explanation: "Since y + 60 = 96, y = 36, and x = 60 − 36 = 24. The answer is B.",
    hint: "Call the 2006 and 2007 totals x and y; the recurrence says 2008 is x + y and 2009 is y + 60.",
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "36",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "40",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "48",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "In a vase there is one red, one blue, one yellow and one white flower. Maja the bee visits each flower exactly once. She begins with the red flower and she never flies directly from the yellow to the white flower. In how many different ways can she visit each flower?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    answer: 3,
    explanation: "Exactly two of the six orders have the forbidden Y→W step, leaving 4 valid visits, choice D.",
    hint: "Start with the six orders beginning with red, then exclude only orders in which yellow is immediately followed by white.",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "In a haunted house the house ghost suddenly disappears. At that moment in time all clocks show 6:15 o’clock. However, there is also one strange clock in the house that shows the correct time before that event. Starting from the disappearance it starts to count backwards. At 19:30 o-clock according to the real time the house ghost reappears. What time does the odd clock show at that time?",
    options: [
      "17:00",
      "17:45",
      "18:30",
      "19:00",
      "19:15"
    ],
    answer: 0,
    explanation: "The elapsed time is 13 h 15 min; 6:15 minus that is 17:00, so choice A is correct.",
    hint: "Measure the real elapsed time from 6:15 to 19:30, then run the strange clock backwards by that amount.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "17:00",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "17:45",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "18:30",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "19:00",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "19:15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Sylvia draws shapes made up of straight lines which are each 1cm long. At the end of each line she continues in a right angle either to the left or right. At every turn she notes down either a ❤ or a ♠️ on a piece of paper. The same symbol always indicates a turn in the same direction. Today her notes show ❤♠️♠️♠️❤❤. Which of the following shapes could she have drawn today if A indicates her starting point?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only option E has the same six turns, segment directions, and starting point A, so E is the possible shape.",
    hint: "Follow the six left/right turns from A and compare the resulting unit-step path with each option.",
    imageChoices: true,
    imageAlt: "Original 2009 Ecolier question 23 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-a.png"
      },
      {
        id: "23-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-b.png"
      },
      {
        id: "23-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-c.png"
      },
      {
        id: "23-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-d.png"
      },
      {
        id: "23-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2009/questions/editor-q-23-option-e.png"
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "In Funny-Foot-Land men and women wear the same sort of shoes. Each man has a left foot that is two sizes bigger than the right foot. Each woman has a left foot that is one size bigger than the right foot. However, shoes are only sold in pairs of the same size. To save money some friends decide to buy shoes together. After putting on their new shoes two shoes are left over - one of size 36 and one of size 45. What is the minimum number of people in that group?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 0,
    explanation: "The smallest workable group has five people; their matched pairs can leave exactly sizes 36 and 45, so choice A is minimal.",
    hint: "Treat every person's left and right shoe sizes as a pair and match shoes of equal size across the group.",
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

export const edition2009Ecolier: QuestionSet = {
  id: "ecolier-2009",
  year: 2009,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 23, 2009",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2009/2009_Ecolier.pdf",
  questions: questions2009Ecolier,
  sections: sections,
};
