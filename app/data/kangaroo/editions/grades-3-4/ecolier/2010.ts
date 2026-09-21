import type { Question, QuestionSet, Section } from "../../../types";

const questions2010: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "A piece is missing from the middle of the map shown. The cat must be able to reach the milk, and the mouse must be able to reach the cheese, but the cat and the mouse must not meet each other. What should the missing middle piece look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-3-1.jpeg",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-3-2.png",
    imageAlt: "Map with a missing middle piece and answer choices",
    explanation: "Option E supplies two independent continuations: one route reaches the milk and the other reaches the cheese, while the animals never enter the same route.",
    hint: "Follow the cat's route and the mouse's route separately. A crossing is allowed; a shared corridor is not.",
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
    prompt: "A 40-minute class starts at 11:50. Exactly in the middle of the class, a bird flies into the classroom. At what time does this happen?",
    options: [
      "11:30",
      "12:00",
      "12:10",
      "12:20",
      "12:30"
    ],
    answer: 2,
    explanation: "Half of 40 minutes is 20 minutes. Adding 20 minutes to 11:50 gives 12:10, which is option C.",
    hint: "The middle of a 40-minute interval is 20 minutes after the start, so place the halfway point on the clock.",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "11:30",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "12:00",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "12:10",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "12:20",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "12:30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "Which box contains 3 quadrilaterals, 3 circles, and 4 hearts?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-5-1.jpeg",
    imageChoices: true,
    imageAlt: "Five boxes containing squares, circles and hearts",
    imageClass: "image-wide",
    explanation: "The counts in box D are 3 quadrilaterals, 3 circles, and 4 hearts. Every other box misses at least one of those three targets, so D is the fit.",
    hint: "For each box, tally quadrilaterals, circles, and hearts independently; a nearly correct box still fails if one count is off.",
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
    prompt: "At a café, soup costs €4, a main course costs €9, and dessert costs €5. A three-course set menu costs only €15. How many euros cheaper is it than ordering the three courses separately?",
    options: [
      "€3",
      "€4",
      "€5",
      "€6",
      "€7"
    ],
    answer: 0,
    explanation: "Separate ordering costs €4 + €9 + €5 = €18. The €15 menu therefore saves €18 − €15 = €3, so the answer is A.",
    hint: "Compare the set-menu price with the sum of the three prices, not with any one course.",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "€3",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "€4",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "€5",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "€6",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "€7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Six coins are arranged in a triangle (see figure). What is the minimum number of coins that need to be moved to arrange them in a circle?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-7-1.jpeg",
    imageAlt: "Six coins arranged as a triangle and a circle",
    explanation: "Four coins already occupy four positions of the required circle. Moving the two remaining outside coins completes the circle, and no arrangement can use fewer than two moves.",
    hint: "Try to leave the largest possible group of coins in place as part of the final circle.",
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "3",
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
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Four friends each ate some ice cream. Mike ate more than Franz, Jaroslav ate more than Veit, and Jaroslav ate less than Franz. Rank them from most to least eaten.",
    options: [
      "Mike, Jaroslav, Veit, Franz",
      "Veit, Mike, Franz, Jaroslav",
      "Mike, Franz, Jaroslav, Veit",
      "Jaroslav, Veit, Mike, Franz",
      "Jaroslav, Mike, Veit, Franz"
    ],
    answer: 2,
    explanation: "Mike ate more than Franz, Franz ate more than Jaroslav, and Jaroslav ate more than Veit. The order is Mike, Franz, Jaroslav, Veit: option C.",
    hint: "Turn each comparison into a greater-than sign and connect the overlapping names into one chain.",
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "Mike, Jaroslav, Veit, Franz",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Veit, Mike, Franz, Jaroslav",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Mike, Franz, Jaroslav, Veit",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "Jaroslav, Veit, Mike, Franz",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "Jaroslav, Mike, Veit, Franz",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "I have the following types of tiles… Which pattern cannot be made using these tiles?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-9-1.png",
    imageExtra: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-9-2.jpeg",
    imageAlt: "Tile types and five possible patterns",
    imageClass: "image-wide",
    explanation: "Pattern B demands an edge arrangement that the supplied tiles cannot provide. The other four patterns can be assembled by matching their straight and diagonal edges.",
    hint: "Check the number and direction of each edge in a proposed pattern; rotating an available tile does not create a new kind of edge.",
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
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Eva is a centipede with 100 feet. Yesterday she bought 16 pairs of shoes and put them on immediately, but still had 14 feet without shoes. How many feet already had shoes before she went shopping yesterday?",
    options: [
      "27",
      "40",
      "54",
      "70",
      "77"
    ],
    answer: 2,
    explanation: "The shopping trip added 16 × 2 = 32 covered feet. Before shopping, 100 − 14 − 32 = 54 feet already had shoes, so C is correct.",
    hint: "Sixteen pairs give two shoes per pair. Remove those covered feet and the 14 still-bare feet from the full 100.",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "27",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "54",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "70",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "77",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "Given that ▲ + ▲ + 6 = ▲ + ▲ + ▲ + ▲, what number should ▲ be replaced with?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "After removing two triangles from each side, 6 equals two triangles. Dividing by 2 gives ▲ = 3, option B.",
    hint: "Cancel two triangles from the equality and see how many triangles must equal 6.",
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
    prompt: "Maria folds a square piece of paper so that the kangaroo pattern completely overlaps itself. Along how many of the fold lines shown in the figure can this be done?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "6"
    ],
    answer: 2,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-13-1.jpeg",
    imageAlt: "Kangaroo pattern with possible fold lines",
    explanation: "Exactly two of the shown lines make the kangaroo pattern coincide with its mirror image. Therefore the count is 2, answer C.",
    hint: "A valid fold line must pair every marked feature with a reflected copy; test symmetry rather than just the outside square.",
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
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Matthias and Klara live in the same building. Klara lives 12 floors above Matthias. One day Matthias climbs the stairs to visit Klara, and halfway there he is on the 8th floor. On which floor does Klara live?",
    options: [
      "Floor 12",
      "Floor 14",
      "Floor 16",
      "Floor 20",
      "Floor 24"
    ],
    answer: 1,
    explanation: "If the halfway point is floor 8, Klara is 8 + 6 = floor 14. Equivalently Matthias is on floor 2, confirming option B.",
    hint: "The two floors are 12 apart, so the halfway floor is 6 floors above Matthias and 6 below Klara.",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "Floor 12",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "Floor 14",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "Floor 16",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "Floor 20",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "Floor 24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "A large cube is made up of 64 small cubes. The 5 visible faces of the large cube are green, and the bottom face is red. How many small cubes have exactly 3 green faces?",
    options: [
      "4",
      "8",
      "16",
      "20",
      "24"
    ],
    answer: 0,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-15-1.jpeg",
    imageAlt: "Large cube made from 64 small cubes",
    explanation: "The four top corners each touch three green faces. Bottom corners touch the red bottom face, so exactly 4 small cubes qualify: A.",
    hint: "Three green faces can meet only at a corner. Separate the four top corners from the four bottom corners, whose third visible face is red.",
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Kangi walks straight from the zoo to school, counting flowers along the way. Which of the following numbers is it impossible for him to count?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 2,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-16-1.jpeg",
    imageAlt: "Flowers along a path from zoo to school",
    explanation: "The attainable counts skip 11; every other listed number can be produced by choosing an appropriate section of the walk. Thus 11 is impossible, option C.",
    hint: "Mark the flowers in each section of the route and consider every possible start and finish position along that straight path.",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A ferry can carry 10 cars or 6 trucks per trip. Yesterday, the ferry made 5 trips, each fully loaded, carrying a total of 42 vehicles. How many of them were cars?",
    options: [
      "10",
      "12",
      "20",
      "22",
      "30"
    ],
    answer: 4,
    explanation: "Five truck trips would carry 5 × 6 = 30 vehicles. The actual total is 12 higher, and each car trip adds 4, so there are 3 car trips. They carry 3 × 10 = 30 cars: E.",
    hint: "Treat a car-only trip as 4 vehicles more than a truck-only trip, then use the five-trip total to find how many car trips occurred.",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "10",
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
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Hans started a chain email and sent it to his friend Peter. Peter forwarded it to 2 people, and each of them forwarded it to 2 more people. After 3 rounds, a total of 1 + 2 + 4 = 7 people received the email. How many people received the email after 5 rounds?",
    options: [
      "15",
      "16",
      "31",
      "33",
      "63"
    ],
    answer: 2,
    explanation: "Across five rounds the recipients total 1 + 2 + 4 + 8 + 16 = 31. The correct choice is C.",
    hint: "The number received in each round doubles: 1, 2, 4, 8, 16. Add the rounds rather than counting only the final round.",
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "31",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "33",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "63",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Some children measure the length of a playground using their steps. Anni takes 15 steps, Betty takes 17 steps, Denis takes 12 steps, and Ivo takes 14 steps. Who has the longest stride?",
    options: [
      "Anni",
      "Betty",
      "Denis",
      "Ivo",
      "Cannot be determined"
    ],
    answer: 2,
    explanation: "Denis covers the distance in 12 steps, fewer than Anni, Betty, or Ivo. Each of his steps is therefore longest, making C the answer.",
    hint: "Everyone measures the same playground, so the child needing fewer steps must have the longer step length.",
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "Anni",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "Betty",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "Denis",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "Ivo",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "Cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "If the sum of numbers in each row is the same, what number should replace the question mark?",
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/2010-q17-table.svg",
    imageAlt: "2010 Ecolier question 17 row table",
    imageClass: "legacy-table-image",
    options: [
      "99",
      "100",
      "209",
      "289",
      "299"
    ],
    answer: 0,
    explanation: "The first row has 1 through 10 plus 199, so its sum is 55 + 199 = 254. The second row's known entries sum to 155, leaving 254 − 155 = 99: A.",
    hint: "Use the first row to find its total, then subtract the known entries in the second row from that same total.",
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "99",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "100",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "209",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "289",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "299",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Which of the following does 60 × 60 × 24 × 7 equal?",
    options: [
      "The number of minutes in seven weeks",
      "The number of hours in sixty days",
      "The number of seconds in seven hours",
      "The number of seconds in one week",
      "The number of minutes in 24 weeks"
    ],
    answer: 3,
    explanation: "Multiplying 60 × 60 × 24 × 7 converts one week into seconds. It is exactly the number of seconds in one week, option D.",
    hint: "Read the factors as a chain of unit conversions: 60 seconds per minute, 60 minutes per hour, 24 hours per day, and 7 days per week.",
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "The number of minutes in seven weeks",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "The number of hours in sixty days",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "The number of seconds in seven hours",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "The number of seconds in one week",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "The number of minutes in 24 weeks",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Two years ago, the sum of the ages of cats Tim and Tom was 15. Now Tom is 13 years old. In how many years will Tim be 9 years old?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "Two years ago Tom was 11, so Tim was 15 − 11 = 4. Tim is now 6 and reaches 9 in 3 years, which is C.",
    hint: "Tom was two years younger in the earlier statement. Use the age sum then advance Tim from his current age to 9.",
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
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 5,
    prompt: "Kamilla wrote down all of the numbers from 1 to 100 one after the other in a table with 5 columns. Her brother cut out a piece of the table and erased some of the numbers. Which of the following pieces could it have been?",
    options: [
      "A: 43, __, __, 48",
      "B: __, 58, 52, __",
      "C: __, 69, 72, __",
      "D: 81, __, 86, __",
      "E: 90, __, __, 94"
    ],
    answer: 2,
    explanation: "In fragment C, the visible 69 and 72 can be placed consistently with the five-column row and column offsets. Each other fragment forces a spacing contradiction, so C works.",
    hint: "In a five-column table, moving across changes a number by 1 and moving down changes it by 5. Test both visible numbers in each fragment.",
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20.png",
    optionImages: [
      "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-a.png",
      "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-b.png",
      "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-c.png",
      "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-d.png",
      "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-e.png"
    ],
    optionContent: [
      {
        id: "20-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-20-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "A teacher says the library has approximately 2010 books. Artur guesses 2010, Beate guesses 1998, and Carlos guesses 2015. They were wrong by 12, 7 and 5, but not in this order. How many books does the library actually have?",
    options: [
      "2003",
      "2005",
      "2008",
      "2020",
      "2022"
    ],
    answer: 0,
    explanation: "At 2003 the errors are |2003−2010| = 7, |2003−1998| = 5, and |2003−2015| = 12. These are precisely the three stated errors, so A is valid.",
    hint: "For each proposed library size, calculate its distance from 2010, 1998, and 2015; the three distances must be 12, 7, and 5 in some order.",
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "2003",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "2005",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "2008",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "2020",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "2022",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Several lines are drawn on a piece of paper and labeled with numbers. After cutting along certain lines and folding, the paper forms the shape shown. What is the sum of the numbers on the cut lines?",
    options: [
      "16",
      "17",
      "18",
      "20",
      "21"
    ],
    answer: 3,
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/image-26-1.jpeg",
    imageAlt: "Numbered paper grid and folded shape",
    explanation: "Tracing the folded shape back to the paper marks the cut lines whose labels total 20. Therefore the sum is option D.",
    hint: "Identify which numbered lines become seams that are cut before folding; matching the folded faces back to the flat net reveals the required labels.",
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "17",
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
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "",
    options: [
      "Paris",
      "Rome",
      "Dubrovnik",
      "Berlin",
      "Zagreb"
    ],
    answer: 3,
    explanation: "The exclusions leave Berlin as Marko's only possible origin. Hence the answer is D, Berlin.",
    hint: "Use the arrival and city clues to eliminate cities for Andrew, Stefan, and Robert first; the city left for Marko is forced.",
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "Paris",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "Rome",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "Dubrovnik",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "Berlin",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "Zagreb",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-3-4/ecolier/2010/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Berti's friends each added the day and month of their birthday, and every one of them got 35, but no two friends share the same birthday. What is the maximum number of friends Berti can have?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "12"
    ],
    answer: 1,
    explanation: "The valid pairs are (30,5), (29,6), (28,7), (27,8), (26,9), (25,10), (24,11), and (23,12). That gives 8 distinct birthdays; (31,4) is invalid because April has only 30 days.",
    hint: "A birthday must satisfy day + month = 35, and the day must exist in that month. List the pairs while checking the 30-day and 31-day limits.",
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2010: Section[] = [
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

export const edition2010: QuestionSet = {
  id: "2010",
  year: 2010,
  group: "Ecolier",
  grades: "Grades 3-4",
  location: "Austria",
  date: "March 18, 2010",
  timeLimitMinutes: 60,
  questions: questions2010,
  sections: sections2010,
};
