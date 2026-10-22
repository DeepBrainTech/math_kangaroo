import type { Question, QuestionSet, Section } from "../../../types";

const questions2017Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "An isosceles triangle has equal-width white and grey stripes. What fraction of its area is white?",
    options: [
      "1/2",
      "1/3",
      "2/3",
      "3/4",
      "2/5"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the stripe widths and triangle height are shown in the source diagram.",
    hint: "Compare the areas of the horizontal strips; their widths are equal but their lengths vary with height.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "2/3",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "3/4",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "2/5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "What time is 17 hours after 17:00?",
    options: [
      "8:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00"
    ],
    answer: 1,
    explanation: "17+17=34 hours, which is 10:00 on the following day.",
    hint: "Reduce the hour total modulo 24.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "8:00",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "10:00",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "11:00",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "12:00",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "13:00",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "What number must be subtracted from −17 to obtain −33?",
    options: [
      "−50",
      "−16",
      "16",
      "40",
      "50"
    ],
    answer: 2,
    explanation: "−17−16=−33, so the required number is 16.",
    hint: "Solve −17−x=−33.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "−50",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "−16",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "40",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "50",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Which statement about the pictured fractions is correct?",
    options: [
      "4/1 = 1.4",
      "5/2 = 2.5",
      "6/3 = 3.6",
      "7/4 = 4.7",
      "8/5 = 5.8"
    ],
    answer: 1,
    explanation: "5/2=2.5; the other written decimal equalities are false.",
    hint: "Convert each fraction to a decimal and compare it with the stated value.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "4/1 = 1.4",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "5/2 = 2.5",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "6/3 = 3.6",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "7/4 = 4.7",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "8/5 = 5.8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Two rectangles have parallel sides as shown. By how much is the larger perimeter greater than the smaller?",
    options: [
      "12 m",
      "16 m",
      "20 m",
      "21 m",
      "24 m"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the rectangles' side lengths and offsets are shown in the source diagram.",
    hint: "Compare corresponding side lengths; perimeter changes by twice the changes in width and height.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "12 m",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "16 m",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "20 m",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "21 m",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "24 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "Paul folds paper, punches a hole, then unfolds it. Along which dotted line could he have folded it?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the hole pattern and candidate fold lines are visual.",
    hint: "Reflect the hole pattern across each possible fold line and compare it with the unfolded page.",
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
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-06.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-06-extra.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Three different positive whole numbers sum to 7. What is their product?",
    options: [
      "12",
      "10",
      "9",
      "8",
      "5"
    ],
    answer: 3,
    explanation: "The only increasing triple with sum 7 that maximizes the product is 1, 2, 4, whose product is 8.",
    hint: "List the distinct positive triples summing to 7 and compare their products.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "8",
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
    prompt: "Petra glues two black and two white hearts of areas 1, 4, 9 and 16 cm² as shown. What is the total area of the visible black parts?",
    options: [
      "9 cm²",
      "10 cm²",
      "11 cm²",
      "12 cm²",
      "13 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the overlap order and visible portions of the four hearts are visual.",
    hint: "Subtract the covered portions of each black heart from its full area.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "9 cm²",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "10 cm²",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "11 cm²",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "12 cm²",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "13 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Yvonne has €20 and each of her four sisters has €10. How much must she give each sister so all five have the same amount?",
    options: [
      "€2",
      "€4",
      "€5",
      "€8",
      "€10"
    ],
    answer: 0,
    explanation: "There are €60 total, so each person should have €12. Yvonne gives €2 to each sister.",
    hint: "Divide the total money by five, then compare each sister's current amount with that share.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "€2",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "€4",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "€5",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "€8",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "€10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Girls stand in a circle and count clockwise from Bianca. Antonia says 5 clockwise and 8 anticlockwise. How many girls are in the circle?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 2,
    explanation: "The two counts differ by 3 because they approach Antonia from opposite directions; the circle has 5+8−2=11 girls.",
    hint: "Combine the clockwise and anticlockwise counts, subtracting the duplicated endpoints.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Ant Annie crawls two thirds of a stick from the left; ladybird Bob crawls three quarters from the right. What fraction of the stick separates them?",
    options: [
      "38/12",
      "1/7",
      "5/12",
      "?",
      "7/12"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the OCR of the four fractional choices is ambiguous; verify the printed option D before finalizing.",
    hint: "Represent both positions as fractions measured from the same end, then subtract.",
    sourcePage: 1,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "38/12",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "1/7",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "5/12",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "?",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "7/12",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "One sixth of theatre spectators are adults. Two fifths of the children are girls. What fraction of all spectators are boys?",
    options: [
      "1/2",
      "1/3",
      "1/4",
      "1/5",
      "2/5"
    ],
    answer: 0,
    explanation: "Children are 5/6 of the audience; boys are 3/5 of the children, so (5/6)(3/5)=1/2.",
    hint: "Multiply the fraction who are children by the fraction of children who are boys.",
    sourcePage: 1,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "1/3",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "1/4",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "1/5",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "2/5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Seven equilateral triangles are formed by the black and dashed lines. The dashed line is 20 cm. How long is the black line?",
    options: [
      "25 cm",
      "30 cm",
      "35 cm",
      "40 cm",
      "45 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the seven-triangle layout and which edges form each line are visual.",
    hint: "Count each unit triangle edge along the dashed and black paths.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "25 cm",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "30 cm",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "35 cm",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "40 cm",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "45 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-13.png"
  },
  {
    number: 14,
    points: 4,
    prompt: "Four cousins are 3, 8, 12 and 14. Emma is younger than Rita; Zita+Emma and Zita+Rita are both divisible by 5. How old is Ina?",
    options: [
      "14",
      "12",
      "8",
      "2017",
      "3"
    ],
    answer: 0,
    explanation: "The only assignment satisfying both divisibility conditions gives Ina age 14.",
    hint: "Test which pair of ages can share the same remainder modulo 5 when added to Zita's age.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "2017",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "More than 800 people run a race. 35% are female, and there are 252 more men than women. How many people take part?",
    options: [
      "802",
      "810",
      "822",
      "824",
      "840"
    ],
    answer: 4,
    explanation: "The male-female difference is 30% of the total. Thus 0.30N=252 and N=840.",
    hint: "The difference between 65% male and 35% female is 30% of the total.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "802",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "810",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "822",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "824",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "840",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Ria fills five boxes so all five numbers sum to 35, the first three sum to 22 and the last three sum to 25. What is the product of the numbers in the grey boxes?",
    options: [
      "63",
      "108",
      "0",
      "48",
      "39"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five boxes and grey-box positions are shown in the source figure.",
    hint: "Use the overlapping sums to determine the unknown box values, then multiply the grey entries.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "63",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "108",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "0",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "48",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "39",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Simon marks cuts to split a wire into 9 equal pieces; Barbara marks cuts for 8 equal pieces. Carl cuts at every mark. How many pieces result?",
    options: [
      "15",
      "16",
      "17",
      "18",
      "19"
    ],
    answer: 1,
    explanation: "The 9-piece plan marks 8 interior points and the 8-piece plan marks 7. None of these interior points coincide, so there are 15 cuts and 16 pieces.",
    hint: "Count the interior cut points in each plan and check whether any fractions of the wire are marked by both.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Two 1 cm segments lie on opposite sides of an 8 cm square and their endpoints are joined as shown. What is the grey area?",
    options: [
      "2 cm²",
      "4 cm²",
      "6.4 cm²",
      "8 cm²",
      "10 cm²"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the endpoint positions and grey polygon are visual.",
    hint: "Use the equal 1 cm marks to split the square into triangles and rectangles.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "2 cm²",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "4 cm²",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "6.4 cm²",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "8 cm²",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "10 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "Tycho runs on two weekdays each week, never on consecutive days. How many different weekly plans are possible?",
    options: [
      "16",
      "14",
      "12",
      "10",
      "8"
    ],
    answer: 1,
    explanation: "Choose 2 of 7 weekdays with no adjacent pair: C(7,2)−6=15. The key indicates B (14), so NEEDS_REVIEW.",
    hint: "Count all weekday pairs and subtract the six consecutive pairs.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Emily fills a 3×3 table so any two side-neighbouring numbers have the same sum. Two entries are given. What is the sum of all nine numbers?",
    options: [
      "18",
      "20",
      "21",
      "22",
      "23"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the two given values and their positions are visual.",
    hint: "Equal adjacent-pair sums force a repeating pattern across the checkerboard positions.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "18",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "21",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "23",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "A triangle has three different natural-number angles. What is the smallest possible sum of its largest and smallest angles?",
    options: [
      "61°",
      "90°",
      "91°",
      "120°",
      "121°"
    ],
    answer: 2,
    explanation: "The middle angle is at most 89° because all three are distinct positive integers. Then the smallest plus largest is 180−middle, at least 91°.",
    hint: "Minimize the sum of the smallest and largest by maximizing the middle angle while keeping all three distinct.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "61°",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "90°",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "91°",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "120°",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "121°",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Ten kangaroos stand in a row. Neighbours who face one another swap places by hopping past each other until no more swaps are possible. How many swaps occur?",
    options: [
      "15",
      "16",
      "18",
      "20",
      "21"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the initial directions of the ten kangaroos are shown in the source picture.",
    hint: "Each swap removes one adjacent pair facing inward; follow the changing order until none remain.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "21",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Diana adds either 2 or 5 to each whole number from 1 to 9. What is the minimum number of different sums she can obtain?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 1,
    explanation: "The sets {3,…,11} and {6,…,14} overlap in six values, so the union contains 12? NEEDS_REVIEW: re-evaluate the question's intended selection and key B.",
    hint: "List the possible sums from adding 2 and from adding 5, then count distinct results.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "7",
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
    prompt: "Buses leave every three minutes and take 60 minutes to reach the city. A car starts with a bus and takes 35 minutes. How many buses does it overtake, not counting its own?",
    options: [
      "8",
      "9",
      "10",
      "11",
      "13"
    ],
    answer: 0,
    explanation: "The car takes 35 minutes while each bus takes 60, so it catches buses that started ahead of it within the previous 25 minutes. Those departures are 3, 6, 9, 12, 15, 18, 21 and 24 minutes earlier: 8 buses.",
    hint: "A bus that left 25 minutes earlier would just reach the city as the car did. Count the earlier buses that left less than 25 minutes before the car.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A square tablecloth is tiled with small light squares whose diagonals are parallel to its sides. What fraction of the tablecloth is black?",
    options: [
      "16%",
      "24%",
      "25%",
      "32%",
      "36%"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the tablecloth pattern is visual.",
    hint: "Count the black and total equal-area triangular parts in the repeated pattern.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "16%",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "24%",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "25%",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "32%",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "36%",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "The sequence starts 2, 3, 6, 8, 8. Each later digit is the units digit of the product of the previous two. What is the 2017th digit?",
    options: [
      "2",
      "3",
      "4",
      "6",
      "8"
    ],
    answer: 0,
    explanation: "The terms from the 7th onward repeat in a 6-term cycle: 2, 8, 6, 8, 8, 4. Since 2017−7=2010 is divisible by 6, the 2017th term is the first in that cycle, 2.",
    hint: "Generate the sequence until the same pair of consecutive digits returns, then use the cycle to locate term 2017.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A 5×5×5 cube is made from 125 unit cubes. Nine straight tunnels pass through it. How many cubes are unused?",
    options: [
      "52",
      "45",
      "42",
      "39",
      "36"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the nine tunnel positions and overlaps are shown in the source diagram.",
    hint: "Count the cubes removed by each tunnel and correct for cubes shared by intersecting tunnels.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "52",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "45",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "42",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "39",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "Two runners travel in opposite directions around a 720 m track. Their lap times are 4 and 5 minutes. How far does the slower runner travel between consecutive meetings?",
    options: [
      "355 m",
      "350 m",
      "340 m",
      "330 m",
      "320 m"
    ],
    answer: 4,
    explanation: "Their relative speed is 720/4+720/5=324 m/min. The meeting interval is 720/324 minutes, during which the slower runner travels 144×720/324=320 m.",
    hint: "Use the sum of their speeds to find the time between meetings, then multiply by the slower speed.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "355 m",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "350 m",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "340 m",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "330 m",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "320 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A number wall has positive integers, each equal to the sum of the two directly below it. What is the maximum number of odd entries?",
    options: [
      "5",
      "7",
      "8",
      "10",
      "11"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the wall's shape and allowed bottom-row assignments are visual.",
    hint: "Track parity upward: a sum is odd exactly when its two addends have different parity.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "A parallelogram has area 1. Its diagonals meet at M; P lies on DC, with E=AP∩BD and F=BP∩AC. If triangles AED and BFC together have area 1/3, what is the area of quadrilateral EMFP?",
    options: [
      "1/6",
      "1/10",
      "1/12",
      "1/14",
      "1/18"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: derive the area relation from the parallelogram diagram; key indicates D.",
    hint: "Use the equal areas created by diagonals and express the two corner triangles in terms of P's position on DC.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "1/6",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "1/10",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "1/12",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "1/14",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "1/18",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2017/questions/editor-q-30.png"
  }
];

const sections2017Kadett: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11–20",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 21–30",
    accent: "purple"
  }
];

export const edition2017Kadett: QuestionSet = {
  id: "kadett-2017",
  year: 2017,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 16, 2017",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2017/2017_Kadett.pdf",
  questions: questions2017Kadett,
  sections: sections2017Kadett,
};
