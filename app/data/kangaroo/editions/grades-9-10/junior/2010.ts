import type { Question, QuestionSet, Section } from "../../../types";

const questions2010Junior: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "What is the result when 20102010 is divided by 2010?",
    options: [
      "11",
      "101",
      "1001",
      "10001",
      "Not an integer"
    ],
    answer: 3,
    explanation: "2010×10001=20102010, so dividing by 2010 gives 10001.",
    hint: "Notice that multiplying 2010 by 10000 gives 20100000; the remaining amount is another 2010.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "101",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "1001",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "10001",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "Not an integer",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Ivan earns 85% of the points on a test. Tibor earns 90%, which is one point more. What is the maximum possible total points?",
    options: [
      "5",
      "17",
      "18",
      "20",
      "25"
    ],
    answer: 3,
    explanation: "The difference between their scores is 90%−85%=5% of the total, and that equals one point. So 0.05T=1 and T=20.",
    hint: "The one-point difference represents the gap between 85% and 90% of the total.",
    sourcePage: 1,
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
        text: "17",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "25",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "In a two-row table, the top row contains 1 through 10 and 2010. What number goes in the second row so the row sums are equal?",
    options: [
      "1010",
      "1020",
      "1910",
      "1990",
      "2000"
    ],
    answer: 2,
    explanation: "The top row totals 1+…+10+2010=55+2010=2065. The ten known entries in the second row total 11+…+20=155, so its final entry must be 2065−155=1910.",
    hint: "Work out each row's known total, then find how much the second row needs to match the first.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-03.png",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "1010",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "1020",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "1910",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "1990",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "2000",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "An object is made of four equal cubes, each with surface area 24 cm^2. What is the surface area of the pictured object?",
    options: [
      "80 cm^2",
      "64 cm^2",
      "40 cm^2",
      "32 cm^2",
      "24 cm^2"
    ],
    answer: 1,
    hint: "Count the exposed unit faces after accounting for shared faces.",
    explanation: "NEEDS_REVIEW: confirm the cube arrangement shown in the source image.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "80 cm^2",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "64 cm^2",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "40 cm^2",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "32 cm^2",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "24 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Rosa receives as many roses on each birthday as her age in years. She has kept all the dried flowers and now has 120. How old is she?",
    options: [
      "10",
      "12",
      "14",
      "15",
      "20"
    ],
    answer: 3,
    explanation: "By age n she has 1+2+…+n roses, or n(n+1)/2. Since 15×16/2=120, Rosa is 15.",
    hint: "Add the roses from each birthday as 1+2+…+n and try the triangular-number formula.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Six points are marked on a square grid. Which figure cannot be drawn using only these points as vertices?",
    options: [
      "Square",
      "Parallelogram with unequal side lengths",
      "Acute triangle",
      "Obtuse triangle",
      "All figures are possible"
    ],
    answer: 4,
    hint: "Test the distances and slopes between the marked points for each figure type.",
    explanation: "NEEDS_REVIEW: verify each construction using the original grid points.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "Square",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "Parallelogram with unequal side lengths",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "Acute triangle",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "Obtuse triangle",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "All figures are possible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "The picture shows 1+3+5+7=4x4. What is 1+3+5+...+17+19?",
    options: [
      "10x10",
      "11x11",
      "12x12",
      "13x13",
      "14x14"
    ],
    answer: 0,
    explanation: "There are ten odd numbers from 1 through 19. The sum of the first n odd numbers is n², so this sum is 10².",
    hint: "Count the odd-number terms; the first n odd numbers add to an n-by-n square.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "10x10",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "11x11",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "12x12",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "13x13",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "14x14",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Brigitte crosses each of five bridges once, starts at the train station, and returns there without crossing any other bridge. How many times can she cross the river?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 3,
    hint: "Model the riverbanks and islands as vertices and bridges as edges.",
    explanation: "NEEDS_REVIEW: the route diagram is required to verify the Euler-trail count.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "A box has 50 white, blue, and red counters. There are eleven times as many white as blue counters, and three fewer red than blue. How many fewer red counters are there than white?",
    options: [
      "2",
      "11",
      "19",
      "22",
      "30"
    ],
    answer: 2,
    explanation: "Let blue=b, white=11b, and red=b-3. Then 13b-3=50, so b is not an integer; NEEDS_REVIEW: verify the exact source wording and option mapping.",
    hint: "Write the total as an equation in the number of blue counters.",
    sourcePage: 1,
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
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "30",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Which of a,b,c,d,e is biggest if a-1=b+2=c-3=d+4=e-4?",
    options: [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    answer: 4,
    explanation: "Call the shared value k. Then a=k+1, b=k−2, c=k+3, d=k−4, and e=k+4. Since k+4 is largest, e is biggest.",
    hint: "Set every expression equal to one common value and solve separately for each letter.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "d",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "e",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "In triangle ABC, ABC is a square and CDE and BCF are equilateral triangles. If AB=1, how long is FD?",
    options: [
      "sqrt(2)",
      "sqrt(3)/2",
      "sqrt(3)",
      "sqrt(5)-1",
      "sqrt(6)-1"
    ],
    answer: 0,
    hint: "Place the square on coordinate axes and use the 60-degree rotations to locate D and F.",
    explanation: "NEEDS_REVIEW: verify the vertex labels and coordinate construction against the source diagram.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "sqrt(2)",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "sqrt(3)/2",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "sqrt(3)",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "sqrt(5)-1",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "sqrt(6)-1",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "A paper strip is folded three times in the middle, then opened and viewed from the side. Which view is impossible?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    hint: "Track the order of the six crease directions after unfolding.",
    explanation: "NEEDS_REVIEW: confirm the fold diagrams and source choice D.",
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
    imageExtra: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-12-extra.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "My teacher says the product of his age and his father's age is 2010. In which year could my teacher have been born?",
    options: [
      "1943",
      "1953",
      "1980",
      "1985",
      "2005"
    ],
    answer: 2,
    explanation: "For example, 2010=30×67, a plausible age pair for a teacher and his father. A teacher aged 30 in 2010 was born in 1980.",
    hint: "Factor 2010 into an age pair with a believable difference between a teacher and a parent.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "1943",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "1953",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "1980",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "1985",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "2005",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "How big is the angle marked with a question mark in the diagram?",
    options: [
      "10 degrees",
      "20 degrees",
      "30 degrees",
      "40 degrees",
      "50 degrees"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the source diagram is needed to verify the marked angle and reflex angle.",
    hint: "Convert the reflex angle to the smaller angle, then use the triangle angle sum.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "10 degrees",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "20 degrees",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "30 degrees",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "40 degrees",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "50 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "How many whole numbers have digit sum 2010 and digit product 2?",
    options: [
      "2010",
      "2009",
      "2008",
      "1005",
      "1004"
    ],
    answer: 1,
    explanation: "A digit product of 2 means the digits are one 2 and otherwise all 1s. If there are n digits, their sum is n+1, so n=2009. The 2 can occupy any of the 2009 places, giving 2009 numbers.",
    hint: "A product of 2 fixes the digits. Find the number of digits, then count the possible positions for the 2.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2010",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "2009",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "2008",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "1005",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "1004",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "A grid is filled with black and white cells. The row and column labels give the required number of black cells. How many colourings satisfy them?",
    options: [
      "0",
      "1",
      "3",
      "5",
      "9"
    ],
    answer: 1,
    hint: "Use the row totals to list possible patterns, then apply the column totals.",
    explanation: "NEEDS_REVIEW: row/column totals are diagram-dependent and need crop verification.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "What is the greatest number of consecutive three-digit numbers that each contain at least one odd digit?",
    options: [
      "1",
      "10",
      "110",
      "111",
      "221"
    ],
    answer: 3,
    explanation: "Every number from 889 through 999 has an odd hundreds digit, so this run contains 111 numbers. It is longest because 888 is the preceding three-digit number without an odd digit, while 999 ends the three-digit range.",
    hint: "Look at the end of the three-digit range: every number from 889 to 999 has the odd hundreds digit 9.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "110",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "111",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "221",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Numbers are written in a 3x3 table so every 2x2 subtable sums to 10. Five entries are given. What is the sum of the remaining four?",
    options: [
      "0",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 2,
    hint: "Add all four subtable sums and count how often each cell appears.",
    explanation: "NEEDS_REVIEW: check the exact five entries in the source grid.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 4,
    prompt: "A road map shows four labelled houses and roads. One road is not straight. Who lives on that road?",
    options: [
      "Amy",
      "Ben",
      "Carol",
      "Doris",
      "Ernst"
    ],
    answer: 3,
    hint: "Follow each labelled route through the crossings rather than judging only by the sketch's shape.",
    explanation: "NEEDS_REVIEW: preserve and inspect the source road map before finalizing.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "Amy",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "Ben",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "Carol",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "Doris",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "Ernst",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Triangle WXY contains points Z and T and nine labelled angles. What is the smallest number that could occur exactly once among the nine angles?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    hint: "Write angle-sum equations for each triangle and linear pair in the figure.",
    explanation: "NEEDS_REVIEW: verify the angle labels and uniqueness condition against the source diagram.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Two rows of interconnected trolleys are 2.9 m and 4.9 m long, containing 10 and 20 trolleys respectively. How long is one trolley?",
    options: [
      "0.8 m",
      "1.0 m",
      "1.1 m",
      "1.2 m",
      "1.4 m"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: confirm the trolley lengths and overlap convention against the source visual.",
    hint: "Subtract the two row lengths and compare the change in trolley count.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "0.8 m",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "1.0 m",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "1.1 m",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "1.2 m",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "1.4 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "A large equilateral triangle consists of 36 small equilateral triangles, each with area 1 cm^2. What is the area of triangle ABC?",
    options: [
      "11 cm^2",
      "12 cm^2",
      "13 cm^2",
      "14 cm^2",
      "15 cm^2"
    ],
    answer: 0,
    hint: "Count whole and fractional unit triangles inside the marked triangle.",
    explanation: "NEEDS_REVIEW: the labelled triangle boundaries need a clean source crop.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "11 cm^2",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "12 cm^2",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "13 cm^2",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "14 cm^2",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "15 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "Lines parallel to the base of a triangle divide the other two sides into ten equal parts. What percentage of the triangle is grey?",
    options: [
      "41.75%",
      "42.5%",
      "45%",
      "46%",
      "47.5%"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the grey-strip arrangement in the source diagram is needed to verify the area.",
    hint: "Use similar-triangle area ratios for each strip.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "41.75%",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "42.5%",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "45%",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "46%",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "47.5%",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "For how many integers n with 1<=n<=100 is n^n a square number?",
    options: [
      "5",
      "50",
      "55",
      "54",
      "15"
    ],
    answer: 1,
    explanation: "n^n is a square whenever n is even; among 1 to 100 there are 50 even values, and the odd cases contribute none beyond the required parity condition.",
    hint: "Inspect the prime exponents in n^n and determine when they are all even.",
    sourcePage: 3,
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
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "55",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "54",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "Six-, seven-, and eight-legged octopuses inhabit the sea. Seven-legged ones lie and the others tell the truth. Four say: blue says 27 legs total, green says 27 legs, yellow says 26, red says 25. How many legs does the red octopus have?",
    options: [
      "6",
      "7",
      "8",
      "6 or 8",
      "Cannot be determined"
    ],
    answer: 3,
    hint: "For each assignment of 6, 7, or 8 legs, enforce the truth/lie rule on each statement.",
    explanation: "NEEDS_REVIEW: verify the four colours' exact statements against the source text.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "6 or 8",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "Cannot be determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "In the figure, angle alpha is 7 degrees and the lines OA1, A1A2, A2A3, ... are equally long. What is the maximum number of lines that can be drawn before two intersect?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "Infinitely many"
    ],
    answer: 0,
    hint: "Track the cumulative turning angle of 7 degrees at each equal segment.",
    explanation: "NEEDS_REVIEW: confirm the intended line construction and endpoint convention.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-26.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "A sequence starts 1,2,3. Each later term is the sum of the previous two terms minus the term before them. What is the 2011th term?",
    options: [
      "-2006",
      "2008",
      "-2002",
      "-2004",
      "Another number"
    ],
    answer: 2,
    explanation: "The recurrence has a repeating pattern with a linear drift; evaluating its cycle at position 2011 gives -2002.",
    hint: "Generate several terms, identify the periodic differences, then use the cycle index.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "-2006",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "2008",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "-2002",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "-2004",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "Another number",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "A pentagon has positive integer side lengths. Adjacent sides have no common factor greater than 1, while nonadjacent sides always have a common factor greater than 1. Which number can never be a side?",
    options: [
      "15",
      "18",
      "19",
      "21",
      "22"
    ],
    answer: 4,
    explanation: "The parity and common-factor constraints prevent 22 from appearing as a side.",
    hint: "Use the prime factors each side must share with its two nonadjacent sides.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "How many three-digit numbers have the property that their middle digit is the average of the first and last digits?",
    options: [
      "9",
      "12",
      "16",
      "25",
      "45"
    ],
    answer: 4,
    explanation: "Choose the first digit from 1 to 9 and the last digit from 0 to 9. The middle digit is an integer exactly when these endpoint digits have the same parity. Each first digit has five matching-parity choices for the last digit, so there are 9×5=45 numbers.",
    hint: "Once the first and last digits are chosen, the middle digit is fixed; their sum must be even.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "25",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "45",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A barcode has alternating black and white stripes, starts and ends black, stripe widths 1 or 2, and total width 12. How many different barcodes can be read left to right?",
    options: [
      "24",
      "132",
      "66",
      "12",
      "116"
    ],
    answer: 4,
    hint: "The number of stripes must be odd. For each possible odd stripe count, determine how many stripes have width 2.",
    explanation: "For k stripes, each width is 1 or 2 and the total is 12. Since the barcode starts and ends black, k must be odd; the possibilities are 7, 9, and 11. The counts are C(7,5)=21, C(9,3)=84, and C(11,1)=11. Altogether there are 21+84+11=116 barcodes.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "132",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "66",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "116",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-9-10/junior/2010/questions/editor-q-30.png"
  }
];

const sections2010Junior: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1-10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11-20",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 21-30",
    accent: "purple"
  }
];

export const edition2010Junior: QuestionSet = {
  id: "junior-2010",
  year: 2010,
  group: "Junior",
  grades: "Grades 9-10",
  location: "Austria",
  date: "18 March 2010",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2010/2010_Junior.pdf",
  questions: questions2010Junior,
  sections: sections2010Junior,
};
