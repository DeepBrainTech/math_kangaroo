import type { Question, QuestionSet, Section } from "../../../types";

const questions2017: Question[] = [
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
    answer: 0,
    explanation: "Butterfly A uses the six stickers with exactly the permitted orientations. Every other butterfly needs a sticker arrangement that is unavailable, so A can be made.",
    hint: "Count the available stickers by shape and orientation, then compare those requirements with the stickers visible on each butterfly.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-01.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 1",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Into how many pieces will the string be cut?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 4,
    explanation: "The diagram has 8 interior cuts, which divide one string into 8 + 1 = 9 pieces. Therefore E is correct.",
    hint: "A cut inside a string increases the number of pieces by one; count the marked cuts rather than the spaces between them.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-02.png",
    imageAlt: "Original 2017 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "How many blocks are missing in the igloo?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 2,
    explanation: "The completed igloo requires 10 more blocks than are visible in the picture. Thus the number missing is 10, option C.",
    hint: "Complete the igloo row by row, including blocks hidden behind the front layer, and compare that total with the blocks shown.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-03-diagram.png",
    imageAlt: "Original 2017 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
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
    explanation: "Band E has the same cyclic order as the given bracelet after rotation. Its pattern matches without flipping the band, so E is correct.",
    hint: "Follow the pearl sequence around the bracelet and allow rotations of the whole band, but not a mirror reversal of the pattern.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-04.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-04-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Four of the numbers 1, 3, 4, 5 and 7 are written into the boxes so that the calculation is correct. \nWhich number was not used?",
    options: [
      "1",
      "3",
      "4",
      "5",
      "7"
    ],
    answer: 2,
    explanation: "The calculation works only when 4 is left out; the numbers 1, 3, 5, and 7 fill the four boxes correctly. The unused number is C, 4.",
    hint: "Substitute each candidate as the unused number and test the remaining four numbers in the displayed calculation.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-05-diagram.png",
    imageAlt: "Original 2017 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "1",
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
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "Jim and Ben are sitting in a ferris wheel.\nThe ferris wheel is turning. \nNow Ben is in the position where Jim was beforehand. \nWhere is Jim now? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Applying that rotation to Jim's original seat places him at position C. The wheel moves everyone together, so C is the answer.",
    hint: "The entire wheel turns by one fixed step, so Ben's new position tells you the same step by which Jim moved.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-06.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 6",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-06-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "Alfred turns his building block 10 times.The first three times can be seen in the \npicture. What is the final position of the building block? ",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The sequence repeats after a fixed number of turns, and the tenth position matches the block shown in option D. Therefore D is the final position.",
    hint: "Look for the block's repeating orientation cycle. Remove complete cycles from 10 before reading the remaining turn.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 7",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-07-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 4,
    prompt: "In which picture are there half as many circles as triangles and twice as many squares as triangles?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Picture E has circles equal to half its triangles and squares equal to twice its triangles. It is the only option satisfying both conditions.",
    hint: "Use the ratios in their smallest form: if there are 2 triangles, there must be 1 circle and 4 squares.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-08-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Leo and Max are standing in a queue that is made up of 11 people in total.\nThere are 7 people in front of Leo, Max stands directly behind him in the queue.\nHow many people are behind Max?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "Leo is eighth and Max is ninth in the eleven-person queue. People in positions 10 and 11 stand behind Max, giving 2: option B.",
    hint: "Leo is immediately before Max, so first determine both positions from the seven people standing in front of Leo.",
    sourcePage: 2,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "There is one horse, two cows and three pigs. How many more cows does he need, so that exactly half of all his animals are cows? ",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "There are 6 animals initially. Solving 2 + x = (6 + x)/2 gives x = 2; then 4 of 8 animals are cows, exactly half. The answer is C.",
    hint: "After adding x cows, compare the number of cows with half of all animals, including the original horse and pigs.",
    sourcePage: 2,
    imageAlt: "Original 2017 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 5,
    prompt: "Every box shows the result of the addition of the numbers on the very left and on the very top (for example: 5 + 7 = 12). Which number is written behind the star?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "15"
    ],
    answer: 1,
    explanation: "The row and column values at the star add to 11. Therefore the number hidden behind the star is B.",
    hint: "Use the leftmost number and the top number as addends for the relevant row and column, following the example before filling the starred box.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-11.png",
    imageAlt: "Original 2017 Felix question 11",
    imageClass: "question-diagram",
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
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "13",
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
    points: 5,
    prompt: "",
    options: [
      "7",
      "9",
      "10",
      "11",
      "13"
    ],
    answer: 1,
    explanation: "The crown requires enough sections for 9 sheets; eight sheets leave one required piece short. Therefore the minimum is 9, option B.",
    hint: "Count how many crown pieces each sheet can supply, then round up only after finding the total number of pieces needed.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-12.png",
    imageAlt: "Original 2017 Felix question 12",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "Simon has two identical tiles, whose front look like this: The back is white. \nWhich pattern can he make with those two tiles?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "The two identical tiles can be placed to create pattern A while respecting the visible fronts and white backs. No arrangement produces the other patterns.",
    hint: "A tile may be turned over, exposing its white back, but the patterned front itself cannot be redrawn. Check both possible tile faces.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-e.png"
    ],
    imageAlt: "Original 2017 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2017/questions/q-13-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "A kangaroo always does ten jumps within a minute.\nThen he has a three minute break. \nHow many minutes does it need in order to do 50 jumps?",
    options: [
      "4",
      "5",
      "16",
      "17",
      "21"
    ],
    answer: 3,
    explanation: "Five groups require 5 minutes. There are only four breaks, adding 4 × 3 = 12 minutes, for a total of 17 minutes: D.",
    hint: "Divide 50 jumps into groups of 10 and count breaks only between groups; the kangaroo does not rest after the last group.",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "Each one of the four keys locks exactly one padlock. Every letter on a padlock stands for exactly one digit. Same letters mean same digits. \nWhich letters must be written on the fourth padlock? ",
    options: [
      "GDA",
      "ADG",
      "GAD",
      "GAG",
      "DAD"
    ],
    answer: 3,
    explanation: "The unused key corresponds to the repeated-letter pattern G-A-G. Hence the fourth padlock must read GAG, which is D.",
    hint: "Match the repeated letters and digits in the first three lock codes, then use the one remaining key for the fourth padlock.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2017/questions/editor-q-15.png",
    imageAlt: "Original 2017 Felix question 15",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "GDA",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "ADG",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "GAD",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "GAG",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "DAD",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2017: Section[] = [
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

export const edition2017: QuestionSet = {
  id: "2017",
  year: 2017,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 16, 2017",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2017/2017_Felix.pdf",
  questions: questions2017,
  sections: sections2017,
};
