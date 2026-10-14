import type { Question, QuestionSet, Section } from "../../../types";

const questions2016Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the following road signs has the most axes of symmetry?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Sign C, the no-entry sign, has both a horizontal and a vertical axis of symmetry. The arrows and other symbols on the remaining signs break any additional symmetry, so C has the most.",
    hint: "Check the whole sign, including its symbol: a line counts only if both the outline and the picture match across it.",
    sourcePage: 1,
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-01-extra.png",
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
    prompt: "Mike cuts a pizza into four equal pieces, then cuts each piece into three equal pieces. Into how many equal pieces is the pizza cut?",
    options: [
      "3",
      "4",
      "7",
      "8",
      "12"
    ],
    answer: 4,
    explanation: "Each of the four pieces becomes three, giving 4 × 3 = 12 pieces.",
    hint: "Multiply the number of first pieces by the number each is divided into.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "4",
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
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A 10 cm wire is folded so that every part has the same length, then cut at the two marked positions. How long are the three pieces created?",
    options: [
      "2 cm, 3 cm, 5 cm",
      "2 cm, 2 cm, 6 cm",
      "1 cm, 4 cm, 5 cm",
      "1 cm, 3 cm, 6 cm",
      "3 cm, 3 cm, 4 cm"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the folds and two marked cut positions are shown only in the source diagram.",
    hint: "Unfold the wire and transfer each cut back to its original position along the 10 cm length.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "2 cm, 3 cm, 5 cm",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "2 cm, 2 cm, 6 cm",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "1 cm, 4 cm, 5 cm",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "1 cm, 3 cm, 6 cm",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "3 cm, 3 cm, 4 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Lisa has mounted seven postcards on her fridge with eight strong magnets. What is the maximum number of magnets she can remove without any postcard falling?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the positions of the postcards and magnets are shown in the source picture.",
    hint: "Determine which magnets are essential to support each postcard, then remove only those that support none uniquely.",
    sourcePage: 1,
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Kathi draws a square with side length 10 cm and joins the midpoints of its sides to form a smaller square. What is the smaller square's area?",
    options: [
      "10 cm²",
      "20 cm²",
      "25 cm²",
      "40 cm²",
      "50 cm²"
    ],
    answer: 4,
    explanation: "The four corner triangles together have half the original square's area, so the midpoint square has 100 ÷ 2 = 50 cm².",
    hint: "The midpoint square and the four corner triangles divide the 10 × 10 square into equal total areas.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "10 cm²",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "20 cm²",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "25 cm²",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "40 cm²",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "50 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Maria wants a knife to the right of every plate and a fork to its left. To correct the order, she swaps one fork with one knife. What is the minimum number of swaps?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the initial order of the forks, knives and plates is shown only in the source picture.",
    hint: "Each swap should correct two misplaced utensils at once; look for a fork and knife that are both on the wrong sides.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A centipede owns 25 pairs of shoes and needs one shoe for each of its 100 feet. How many more single shoes must it buy?",
    options: [
      "15",
      "20",
      "35",
      "50",
      "75"
    ],
    answer: 3,
    explanation: "The 25 pairs contain 50 shoes. The centipede needs 100, so it must buy 50 more.",
    hint: "Convert the pairs to individual shoes, then subtract from the number of feet.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "35",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "50",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "75",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Four girls sleep with their heads on grey pillows. Bea and Pia are on the left side facing each other; Mary and Karen are on the right side with their backs toward each other. How many girls sleep with their right ear on the pillow?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the girls' positions and facing directions are shown in the room diagram.",
    hint: "For each girl, use her facing direction to identify which side of her head is against the pillow.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 4,
    prompt: "The given net is folded along dotted lines to form an open box, which is placed on a table with the opening at the top. Which side faces the table?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the labelled box net is visual and has not yet been included.",
    hint: "Fold the net into a box and identify which labelled face becomes the bottom when the opening points upward.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-09.png"
  },
  {
    number: 10,
    points: 4,
    prompt: "Robert has two equally sized paper squares and glues them together. Which of the following shapes can he not make?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five proposed outlines are visual and have not yet been included.",
    hint: "Any shape made this way must have the area of exactly two equal squares and be obtainable by joining their edges.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-10.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-10-extra.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Mona, Asma and Nadja work in a nursery. Each weekday exactly two work. Mona works three days and Asma works four days. How many days does Nadja work?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "There are 5 × 2 = 10 work assignments. Mona and Asma account for 3 + 4 = 7, leaving 3 for Nadja.",
    hint: "Count the total daily assignments for the week and subtract Mona's and Asma's days.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "3",
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
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Five squirrels A, B, C, D and E run at equal speeds to the nearest of six nuts. After collecting one nut, each immediately runs for another. Which squirrel gets a second nut?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the squirrel starting points and nut locations are shown only in the source diagram.",
    hint: "Compare the distances to each nut, then follow the next shortest available route after a nut is collected.",
    sourcePage: 2,
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "There are 30 students in a class and every boy shares a desk with a girl. Exactly half the girls share a desk with a boy. How many boys are in the class?",
    options: [
      "25",
      "20",
      "15",
      "10",
      "5"
    ],
    answer: 3,
    explanation: "If there are b boys, b girls share with them, and this is half the girls, so there are 2b girls. Thus 3b = 30 and b = 10.",
    hint: "The number of girls sharing with boys equals the number of boys, and it is half of all girls.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "25",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "15",
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
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Hansi writes 2581953764 on a strip of paper and cuts it twice between digits, making three numbers that he adds. What is the smallest possible sum?",
    options: [
      "2675",
      "2975",
      "2978",
      "4217",
      "4298"
    ],
    answer: 1,
    explanation: "Cutting as 258, 1953 and 764 gives 258 + 1953 + 764 = 2975, the smallest of the possible three-part sums.",
    hint: "Try cut positions that keep the first number short while avoiding unnecessarily large middle or final parts.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "2675",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "2975",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "2978",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "4217",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "4298",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Bart sees a clock in the mirror. What was the mirror image of the clock ten minutes earlier?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the displayed clock and five candidate mirror images are visual.",
    hint: "First work out the clock time ten minutes earlier, then reflect the hands across the vertical mirror line.",
    sourcePage: 2,
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-15.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-15-extra.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "What is the maximum number of the shown pieces that can be cut from a 5 × 5 square?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the shape of the piece and the cutting restrictions are shown in the source picture.",
    hint: "Compare the piece's area with 25 square units, then check how the shape can tile or fit inside the square.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 5,
    prompt: "Tim, Tom and Jim are triplets. Their brother Carl is exactly three years younger. All four have their birthdays today. How old can they be altogether?",
    options: [
      "53",
      "54",
      "56",
      "59",
      "60"
    ],
    answer: 0,
    explanation: "The total is 3x + (x - 3) = 4x - 3. The listed value 53 gives x = 14 and Carl age 11, so it is possible.",
    hint: "If each triplet is x, Carl is x - 3; express the total in terms of x.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "53",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "54",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "56",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "59",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Richard writes numbers whose first digit is 1, whose later digits are each at least as large as the previous digit, and whose digit sum is 5. How many such numbers can he write?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 1,
    explanation: "The possible nondecreasing digit lists summing to 5 and beginning with 1 are 14, 113, 122, 1112 and 11111. There are five.",
    hint: "After the first digit 1, partition the remaining total 4 into a nondecreasing sequence of digits no smaller than 1.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Three rectangles are added at corners A, B and D of rectangle ABCD. The original rectangle has perimeter 30 cm, and the three added rectangles have total perimeter 20 cm. What is the thick border's length?",
    options: [
      "50 cm",
      "45 cm",
      "40 cm",
      "35 cm",
      "It cannot be calculated"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the placement and shared boundaries of the added rectangles are shown in the source diagram.",
    hint: "Start with the original perimeter and account for each edge that becomes internal when a new rectangle is attached.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "50 cm",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "45 cm",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "40 cm",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "35 cm",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "It cannot be calculated",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Luigi owns square tables and chairs. Separate tables with four chairs each leave him six chairs short. Joining tables in pairs makes larger tables with six chairs each and leaves four chairs over. How many tables does he own?",
    options: [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    answer: 1,
    explanation: "If T is the number of tables and C the chairs, 4T - C = 6 and 3T - C = -4. Subtracting gives T = 10.",
    hint: "Write one equation for the separate arrangement and one for the paired arrangement, then compare them.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Clara forms one large triangle from identical small triangles and has already assembled the shape shown. What is the minimum number of small triangles she must add?",
    options: [
      "5",
      "9",
      "12",
      "15",
      "19"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the partial triangle and its dimensions are shown only in the source diagram.",
    hint: "Determine the side length of the completed large triangle, count its total unit triangles, then subtract the ones already present.",
    sourcePage: 3,
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
        text: "9",
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
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "Kirsten has written numbers in five of the ten circles of a pentagon. She fills the rest so that each side has the same sum. Which number belongs in the circle marked X?",
    options: [
      "7",
      "8",
      "11",
      "13",
      "15"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the five given circle values and the position of X are shown in the source diagram.",
    hint: "Write an equation for each side sum and compare sides that share a circle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2016/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "The symbols ○, □ and ♢ are different digits. The digits of ○□○ sum to □♢, and the digits of □♢ sum to □. Which digit does ○ represent?",
    options: [
      "4",
      "5",
      "6",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify the source symbols and their place-value interpretation before confirming C.",
    hint: "Translate each statement into an equation using the tens and units digits of the two-digit result.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Two three-digit numbers use six different digits. The first digit of the second number is twice the last digit of the first. What is the smallest possible sum?",
    options: [
      "301",
      "535",
      "537",
      "546",
      "552"
    ],
    answer: 2,
    explanation: "The first number cannot end in 0 (the second number would start with 0) or 5–9 (its doubled digit would be two digits). If it ends in 1, its first digit cannot be 1 or 2, so the smallest pair is 301 and 245, totaling 546. Ending in 2 allows 102 and 435, totaling 537. Ending in 3 or 4 makes the second number start with 6 or 8, so the sum is at least 700. Thus 537 is the minimum, option C.",
    hint: "Try the smallest possible last digits of the first number; doubling that digit fixes the hundreds digit of the second number. Keep all six digits different.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "301",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "535",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "537",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "546",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "552",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2016Benjamin: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–8",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 9–16",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 17–24",
    accent: "purple"
  }
];

export const edition2016Benjamin: QuestionSet = {
  id: "benjamin-2016",
  year: 2016,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 17, 2016",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Benjamin.pdf",
  questions: questions2016Benjamin,
  sections: sections2016Benjamin,
};
