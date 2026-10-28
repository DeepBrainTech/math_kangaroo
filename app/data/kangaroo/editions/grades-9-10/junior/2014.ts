import type { Question, QuestionSet, Section } from "../../../types";

const questions2014Junior: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The Kangaroo competition takes place each year on the third Thursday in March. What is the earliest possible date for the competition?",
    options: [
      "14/3",
      "15/3",
      "20/3",
      "21/3",
      "22/3"
    ],
    answer: 1,
    explanation: "The third Thursday can be as early as March 15.",
    hint: "For the earliest third Thursday, March 1 must be a Thursday.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "14/3",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "15/3",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "20/3",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "21/3",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "22/3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "The ship MSC Fabiola carries 12,500 identical containers. In a row they make a 75 km line. Roughly how long is one container?",
    options: [
      "6 m",
      "16 m",
      "60 m",
      "160 m",
      "600 m"
    ],
    answer: 0,
    explanation: "75 km is 75,000 m. Dividing by 12,500 gives 6 m per container.",
    hint: "Convert kilometres to metres, then divide by the number of containers.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "6 m",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "16 m",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "60 m",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "160 m",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "600 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "The labelled wire pieces have lengths a, b, and c. Which inequality is correct?",
    options: [
      "a < b < c",
      "a < c < b",
      "b < a < c",
      "b < c < a",
      "c < b < a"
    ],
    answer: 4,
    explanation: "Counting the horizontal and vertical segments and comparing the diagonal lengths gives c < b < a.",
    hint: "Add the lengths of each wire path using the unit grid as the scale.",
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/q-03-diagram.png",
    imageAlt: "Three wire paths a, b, and c drawn on a square grid",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "a < b < c",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "a < c < b",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "b < a < c",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "b < c < a",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "c < b < a",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Which number is equally distant from 2/3 and 4/5 on the number line?",
    options: [
      "11/15",
      "7/8",
      "3/4",
      "6/15",
      "5/8"
    ],
    answer: 0,
    explanation: "The midpoint is (2/3+4/5)/2=(10/15+12/15)/2=11/15.",
    hint: "Take the average of the two numbers.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "11/15",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "7/8",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "3/4",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "6/15",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "5/8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "In 2014, the last digit is greater than the sum of the other three digits. How many years ago did this last happen?",
    options: [
      "1",
      "3",
      "5",
      "7",
      "11"
    ],
    answer: 2,
    explanation: "In 2009, the last digit 9 exceeds 2+0+0=2; this was five years earlier.",
    hint: "Check earlier years by comparing the final digit with the sum of the first three.",
    sourcePage: 1,
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "The sides of a large regular hexagon are twice those of a small regular hexagon. If the small hexagon has area 4 cm^2, what is the area of the large hexagon?",
    options: [
      "16 cm^2",
      "14 cm^2",
      "12 cm^2",
      "10 cm^2",
      "8 cm^2"
    ],
    answer: 0,
    explanation: "Doubling all side lengths multiplies area by 2^2=4. The large hexagon has area 16 cm^2.",
    hint: "Area scales as the square of the side-length scale factor.",
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/q-06-diagram.png",
    imageAlt: "Large and small regular hexagons with the large side twice as long",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "16 cm^2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "14 cm^2",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "12 cm^2",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "10 cm^2",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "8 cm^2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Which statement is definitely correct if 'Everybody has solved more than 20 problems' is false?",
    options: [
      "Nobody solved more than 20",
      "Somebody solved less than 21",
      "Everybody solved less than 21",
      "Somebody solved exactly 20",
      "Somebody solved more than 20"
    ],
    answer: 1,
    explanation: "The negation of 'everybody solved more than 20' is that at least one person did not, meaning someone solved at most 20, or less than 21.",
    hint: "Negate the universal statement carefully.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "Nobody solved more than 20",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "Somebody solved less than 21",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "Everybody solved less than 21",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "Somebody solved exactly 20",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "Somebody solved more than 20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "A square is drawn on the coordinate plane with one diagonal on the x-axis, with endpoints (-1,0) and (5,0). Which point is another vertex?",
    options: [
      "(2,0)",
      "(2,3)",
      "(2,-6)",
      "(3,5)",
      "(3,-1)"
    ],
    answer: 1,
    explanation: "The diagonal has midpoint (2,0) and half-length 3. Rotating the half-diagonal vector by 90 degrees gives the other vertices (2,3) and (2,-3); only (2,3) is listed.",
    hint: "Find the diagonal midpoint and rotate its half-vector by a right angle.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "(2,0)",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "(2,3)",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "(2,-6)",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "(3,5)",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "(3,-1)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "In Kangaroo City, m men, f women, and k children satisfy m:f=2:3 and f:k=8:1. What is the ratio of adults to children?",
    options: [
      "5:1",
      "10:3",
      "13:1",
      "12:1",
      "40:3"
    ],
    answer: 4,
    explanation: "Let f=24, so m=16 and k=3. Adults total 40, giving ratio 40:3.",
    hint: "Scale both ratios to the same value of f.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "5:1",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "10:3",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "13:1",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "12:1",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "40:3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "A bicycle's large wheel has circumference 4.2 m and the small wheel 0.9 m. Starting with both valves at the lowest point, how far must the bicycle travel before both valves are at the lowest point again?",
    options: [
      "4.2 m",
      "6.3 m",
      "12.6 m",
      "25.2 m",
      "37.8 m"
    ],
    answer: 2,
    explanation: "The distance must be a common multiple of 4.2 and 0.9. Their least positive common distance is 12.6 m.",
    hint: "Find the least common multiple of the two wheel circumferences.",
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/q-10-diagram.png",
    imageAlt: "Bicycle with large and small wheels and valve markers",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "4.2 m",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "6.3 m",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "12.6 m",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "25.2 m",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "37.8 m",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "A grandmother, her daughter, and her granddaughter each have a February birthday. Together they are 100 years old, and each age is a power of 2. In which year was the granddaughter born?",
    options: [
      "1998",
      "2006",
      "2010",
      "2012",
      "2013"
    ],
    answer: 2,
    explanation: "The three distinct powers of 2 that add to 100 are 64+32+4. The granddaughter is 4, so in the 2014 competition year she was born in 2010.",
    hint: "Find three distinct powers of 2 adding to 100; the youngest person's age is the smallest power.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "1998",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "2006",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "2010",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "2012",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "2013",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Paul hangs rectangular pictures with their upper corners attached to a 2 m string whose nail is 2.5 m above the floor. Which picture size has its lower edge nearest the floor?",
    options: [
      "60 x 40",
      "120 x 50",
      "120 x 90",
      "160 x 60",
      "160 x 100"
    ],
    answer: 2,
    explanation: "Each half of the 2 m string is 1 m. For a picture of width w metres, its top edge is √(1−(w/2)²) metres below the nail. Subtract the picture height from its height above the floor: the 120×90 cm picture has its lower edge 2.5−0.8−0.9=0.8 m above the floor, the smallest of the five.",
    hint: "Split the string in half and use a right triangle to find how far below the nail the top edge sits; then subtract the picture height.",
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/q-12-diagram.png",
    imageAlt: "Rectangular picture hanging from a central nail by a string",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "60 x 40",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "120 x 50",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "120 x 90",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "160 x 60",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "160 x 100",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Three inhabitants each have at least two ears. Imi sees 8 ears, Dimi sees 7, and Trimi says she can only see 5. None can see their own ears. How many ears does Trimi have?",
    options: [
      "2",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the key marks B (4), while summing the three reported views gives 2 times the total of 10 ears and implies Trimi has 5. Check whether a printed statement or key differs.",
    hint: "Write an equation for each person's view, excluding their own ears.",
    sourcePage: 2,
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
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A cuboid container has a square base of side 10 cm and is filled to height h. A metal cube of side 2 cm sinks to the bottom. The water reaches the top corner of the metal cube. Determine h.",
    options: [
      "1.92 cm",
      "1.93 cm",
      "1.90 cm",
      "1.91 cm",
      "1.94 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: verify the answer-key letter and water-displacement calculation against the rendered diagram before finalizing.",
    hint: "Compare the cube's displaced volume with the container base area and the indicated waterline.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-14.png",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "1.92 cm",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "1.93 cm",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "1.90 cm",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "1.91 cm",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "1.94 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "The square ABCD has area 80. Points E, F, G, and H lie on the sides with AE=BF=CG=DH. What is the grey area if AE=3 x EB?",
    options: [
      "20",
      "25",
      "30",
      "35",
      "40"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the source diagram is required for an independent area calculation; the answer key marks A (20).",
    hint: "Use the equal side segments and the 3:1 division to decompose the shaded region.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "25",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "If the whole-number age of a father is multiplied by the whole-number age of his son, the product is 2015. Both were born in the 20th century. What is their age gap?",
    options: [
      "26",
      "29",
      "31",
      "34",
      "36"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: factor pairs of 2015 and the 20th-century age constraint need to be reconciled with the answer-key letter E.",
    hint: "Factor 2015 and check which factor pairs can be father and son ages in the stated century.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "26",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "29",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "31",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "34",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Four objects a,b,c,d are on a double balance. Two are exchanged, changing the balance positions as shown. Which two objects were exchanged?",
    options: [
      "a and b",
      "b and d",
      "b and c",
      "a and d",
      "a and c"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the double-balance visual is needed to identify how the exchange changes each beam's tilt; the key marks D.",
    hint: "Compare the change in torque on both balances for each possible exchanged pair.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "a and b",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "b and d",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "b and c",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "a and d",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "a and c",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "The roots of x^2-85x+c=0 are prime numbers. What is the digit sum of c?",
    options: [
      "12",
      "13",
      "14",
      "15",
      "21"
    ],
    answer: 1,
    explanation: "The prime roots sum to 85, so they are 2 and 83. Their product is c=166, whose digit sum is 13.",
    hint: "An odd sum of two primes requires one of them to be 2.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "15",
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
    points: 4,
    prompt: "How many three-digit positive integers have digits which, when placed side by side, always differ by 3?",
    options: [
      "12",
      "14",
      "16",
      "20",
      "27"
    ],
    answer: 3,
    explanation: "Counting valid three-digit strings in which each adjacent pair differs by 3 gives 20.",
    hint: "Count allowed transitions between digits 0-9, excluding a leading zero.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "12",
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
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "27",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "Which value of n is a counterexample to: if n is prime, then exactly one of n-2 and n+2 is prime?",
    options: [
      "11",
      "19",
      "21",
      "29",
      "37"
    ],
    answer: 4,
    explanation: "For n=37, both 35 and 39 are composite, so neither is prime.",
    hint: "Check the two numbers two away from each prime choice.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "19",
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
        text: "29",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "37",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "Seven regions are bounded by three circles. Each region contains a number equal to the sum of all numbers in adjacent regions. Two values, 1 and 2, are shown. What is the number in the inner region?",
    options: [
      "0",
      "-3",
      "3",
      "-6",
      "6"
    ],
    answer: 0,
    explanation: "Applying the adjacency-sum conditions to the three-circle arrangement gives 0 in the centre.",
    hint: "Write one equation per region using the regions that share more than one corner point.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "-3",
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
        text: "-6",
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
    prompt: "How many two-digit numbers can be written as a sum of exactly six different powers of two?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "The two such numbers are 63 and 95; each has exactly six 1s in its binary representation.",
    hint: "The number of distinct powers used equals the number of 1s in the binary form.",
    sourcePage: 3,
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
    prompt: "Petra has three different dictionaries and two different novels. How many arrangements keep all dictionaries together and all novels together?",
    options: [
      "12",
      "24",
      "30",
      "60",
      "120"
    ],
    answer: 1,
    explanation: "Arrange the two subject blocks in 2 ways, the dictionaries in 3! ways, and the novels in 2! ways: 24 arrangements.",
    hint: "Treat each subject group as one block, then arrange the books within the blocks.",
    sourcePage: 3,
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
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "60",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "120",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Lines parallel to base AC of triangle ABC are drawn through X and Y. The grey areas are equal. Given BX:XA=4:1, what is BY:YA?",
    options: [
      "1:1",
      "2:1",
      "3:1",
      "3:2",
      "4:3"
    ],
    answer: 3,
    explanation: "Comparing the areas of similar triangles and the equal grey bands gives BY:YA=3:2.",
    hint: "Express the shaded areas as differences of areas of similar triangles.",
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-24.png",
    imageAlt: "Two triangles with parallel cuts and equal grey regions",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1:1",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "2:1",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "3:1",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "3:2",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "4:3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "In a right-angled triangle, an angle bisector divides the opposite side into segments of lengths 1 and 2. How long is the angle bisector?",
    options: [
      "sqrt(2)",
      "sqrt(3)",
      "sqrt(4)",
      "sqrt(5)",
      "sqrt(6)"
    ],
    answer: 2,
    explanation: "Using the angle-bisector theorem and the right-triangle relation gives a bisector length of sqrt(4)=2.",
    hint: "Combine the angle-bisector theorem with the Pythagorean theorem.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "sqrt(2)",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "sqrt(3)",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "sqrt(4)",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "sqrt(5)",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "sqrt(6)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Three distinct digits a,b,c form two-digit numbers ab, bc, and ca. How many choices satisfy ab<bc<ca?",
    options: [
      "84",
      "96",
      "125",
      "201",
      "502"
    ],
    answer: 2,
    explanation: "Counting ordered triples of distinct digits satisfying the three two-digit inequalities gives 125.",
    hint: "Translate each comparison into an inequality between tens digits, then handle ties with units digits.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "84",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "96",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "125",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "201",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "502",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "One number from 1,2,...,n is crossed out, and the average of the remaining numbers is 4.75. What number was crossed out?",
    options: [
      "5",
      "7",
      "8",
      "9",
      "It cannot be determined"
    ],
    answer: 1,
    explanation: "Solving the remaining-sum equation for integer n and a crossed-out value gives 7.",
    hint: "Set the remaining sum equal to 4.75 times the number of remaining terms.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "It cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "An ant starts at a cube vertex, walks along every edge at least once, and returns to its start. What is the minimum possible walk length?",
    options: [
      "12",
      "14",
      "15",
      "16",
      "20"
    ],
    answer: 3,
    explanation: "The cube graph has eight odd-degree vertices. Repeating the minimum set of edges to make all degrees even adds four units, for total length 16.",
    hint: "Find the minimum extra edges needed to pair the cube's odd-degree vertices.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "Ten different numbers are written down. Each number equal to the product of the other nine may be underlined. What is the maximum number that can be underlined?",
    options: [
      "1",
      "2",
      "3",
      "9",
      "10"
    ],
    answer: 1,
    explanation: "At most two numbers can satisfy the product condition simultaneously, and a construction achieves two.",
    hint: "Multiply all ten numbers and compare the total product with each candidate underlined number.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "Several points lie on a straight line and every pair is connected. One point lies within exactly 80 connecting segments and another within exactly 90. How many points are on the line?",
    options: [
      "20",
      "22",
      "80",
      "90",
      "Not enough information"
    ],
    answer: 1,
    explanation: "For a point with k points on one side and n-k-1 on the other, the number of segments through it is k(n-k-1). The two given counts constrain n to 22.",
    hint: "Count the segments passing through an interior point as a product of the counts on either side.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "22",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "80",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "90",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "Not enough information",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2014/questions/editor-q-30.png"
  },
  {
    number: 31,
    points: 5,
    prompt: "2014 people stand in a row. Each is either a liar, who always lies, or a knight, who always tells the truth. Each says, 'There are more liars to my left than to my right.' How many liars are in the row?",
    options: [
      "0",
      "1",
      "1007",
      "1008",
      "2014"
    ],
    answer: 1,
    explanation: "If there were two or more liars, the rightmost liar would have at least one liar to the left and none to the right, so that person's statement would be true—a contradiction. Thus there is at most one liar. With one liar at the left end, every later person truthfully sees one liar to the left and none to the right, so exactly one liar works.",
    hint: "Consider the rightmost liar: what must be true about the number of liars on each side for that person's statement to be false?",
    sourcePage: 3,
    optionContent: [
      {
        id: "31-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "31-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "31-2",
        type: "text",
        text: "1007",
        imageAlt: "C option"
      },
      {
        id: "31-3",
        type: "text",
        text: "1008",
        imageAlt: "D option"
      },
      {
        id: "31-4",
        type: "text",
        text: "2014",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2014Junior: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1-10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11-21",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 22-31",
    accent: "purple"
  }
];

export const edition2014Junior: QuestionSet = {
  id: "junior-2014",
  year: 2014,
  group: "Junior",
  grades: "Grades 9-10",
  location: "Austria",
  date: "20 March 2014",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2014/2014_Junior.pdf",
  questions: questions2014Junior,
  sections: sections2014Junior,
};
