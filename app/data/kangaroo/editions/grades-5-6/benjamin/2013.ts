import type { Question, QuestionSet, Section } from "../../../types";

const questions2013Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which answer completes the addition tree?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "The lower sums are 2 + 0 = 2 and 1 + 3 = 4. Adding those results gives 2 + 4 = 6, option E.",
    hint: "Evaluate the two lower additions first, then add those results at the top.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-01.png"
  },
  {
    number: 2,
    points: 3,
    prompt: "Nathalie wants to build a large cube from small cubes. How many cubes are missing from the picture on the right to build the large cube on the left?",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the two cube diagrams are needed to count the missing small cubes.",
    hint: "Find the total number of unit cubes in the complete large cube, then subtract the number already shown.",
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
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "How far must Maria walk to reach her friend Bianca?",
    options: [
      "300 m",
      "400 m",
      "800 m",
      "1 km",
      "700 m"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the map and route distances are shown only in the source visual.",
    hint: "Follow a shortest route to Bianca and add the distances along its segments.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "300 m",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "400 m",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "800 m",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "1 km",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "700 m",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Nick can turn right but not left on his bicycle. What is the least number of right turns he must make to get from A to B?",
    options: [
      "3",
      "4",
      "6",
      "8",
      "10"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the street layout between A and B is required to determine the minimum route.",
    hint: "Trace only routes that move forward or turn right; avoid taking a route with an unnecessary loop.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "3",
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
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Anna, Bob and Chris are 31 years old altogether. How old will all three be altogether in three years?",
    options: [
      "32",
      "34",
      "35",
      "37",
      "40"
    ],
    answer: 4,
    explanation: "Each of the three people will be 3 years older, so their combined age increases by 3 × 3 = 9 years. The total will be 31 + 9 = 40.",
    hint: "The total increases by three years for each of the three people.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "32",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "34",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "35",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "37",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "The same digit is used in each square: □□ × □ = 176. Which digit makes the equation correct?",
    options: [
      "6",
      "4",
      "7",
      "9",
      "8"
    ],
    answer: 1,
    explanation: "If the digit is d, the two-digit number is 11d, so 11d² = 176. Thus d² = 16 and d = 4.",
    hint: "Write the repeated-digit number as 11 times the digit, then test the resulting square equation.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Michael must take a tablet every 15 minutes. He takes the first at 11:05. When does he take the fourth?",
    options: [
      "11:40",
      "11:50",
      "11:55",
      "12:00",
      "12:05"
    ],
    answer: 1,
    explanation: "The fourth tablet is taken three intervals after the first: 11:05 + 3 × 15 minutes = 11:50.",
    hint: "There are three 15-minute intervals between the first tablet and the fourth.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "11:40",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "11:50",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "11:55",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "12:00",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "12:05",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "Anne has grey tiles like the one shown. What is the maximum number she can place on a 5 × 4 rectangle without overlaps?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the tile's shape and orientation are necessary to verify the packing maximum.",
    hint: "Compare the tile's area with the board, then check how its shape can fit along the board's edges.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "The number 36 has the following property: 36 can be divided by its units digit without a remainder (36 is divisible by 6). With the number 38 this doesn't work. How many numbers between 20 and 30 have the same property as 36?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The qualifying numbers are 21, 22, 24 and 25: each divides by its units digit. There are four.",
    hint: "Check each number from 21 through 29, dividing it by its final digit.",
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
    prompt: "Maria drew several figures on square sheets of paper. How many figures have the same perimeter as the square sheet itself?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the drawn figures are required to compare their perimeters with the square's perimeter.",
    hint: "Count exposed unit edges in each figure and compare that count with the square's outside boundary.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "3",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Patricia drives at a constant speed to her friend and looks at her watch when she leaves and when she arrives. Where will the minute hand be when she has completed one third of her journey?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the departure and arrival times and five clock-face choices are visual.",
    hint: "At constant speed, one third of the journey takes one third of the total travel time.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-11.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-11-extra.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Johann stacks 1×1 cubes on the squares of a 4×4 grid. The diagram on the right shows how many cubes were piled on top of each other on each square of the grid. What will Johann see if he looks from behind (hinten) at the tower?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the height grid and five view choices are not yet included.",
    hint: "Reverse the order of the rows when viewing from behind, and compare the tallest stacks in each column.",
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
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-12.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-12-extra.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Thirty-six children each cast one vote for five students. The winner received 12 votes and the student in last place received 4. Every student received a different number of votes. How many votes did the second-place student receive?",
    options: [
      "8",
      "8 or 9",
      "9",
      "9 or 10",
      "10"
    ],
    answer: 1,
    explanation: "The three middle totals sum to 20. Distinct descending possibilities include 9, 6, 5 and 8, 7, 5, so the second-place total can be 8 or 9.",
    hint: "Subtract the winner's 12 and last-place 4 from 36, then find distinct descending triples summing to the remainder.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "8 or 9",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "9 or 10",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A 1 × 1 × 1 cube is cut from each corner of a 3 × 3 × 3 cube. The picture shows the result after the first cut. How many faces does the final shape have?",
    options: [
      "16",
      "20",
      "24",
      "30",
      "36"
    ],
    answer: 3,
    explanation: "Each of the eight corner cuts adds three new faces while leaving the original six faces. The total is 6 + 8 × 3 = 30.",
    hint: "Count the original cube faces, then count the new faces created by one corner cut and multiply by eight.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "How many different subtractions of two-digit numbers have an answer of 50?",
    options: [
      "40",
      "30",
      "50",
      "60",
      "10"
    ],
    answer: 0,
    explanation: "The subtractions are 60 - 10 through 99 - 49, one for each two-digit number from 60 to 99. There are 40.",
    hint: "The first number must be 50 greater than the second, and both must remain two-digit numbers.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "40",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "30",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "60",
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
    prompt: "In the last hockey game, 6 goals were scored in the first half and the visiting team was leading. The home team scored 3 more goals in the second half and won. How many goals did the home team score in total?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "The visitors scored 6 - h goals in the first half while the home team scored h, with h < 3. After the home team adds 3, it wins only when h = 2, so it scored 5 in total.",
    hint: "Let h be the home team's first-half goals. The visitors scored 6 - h, and the home team finished with h + 3.",
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
    ]
  },
  {
    number: 17,
    points: 5,
    prompt: "Which figure will cover the most dots when laid on the square shown?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the dot pattern and five candidate figures are visual and have not yet been included.",
    hint: "Place each figure in turn and count the dots it covers, including any rotations allowed by the picture.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-17.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-17-extra.png"
  },
  {
    number: 18,
    points: 5,
    prompt: "Matthias is catching fish. If he had caught three times as many fish as he actually caught, he would have 12 more fish. How many fish did he catch?",
    options: [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 1,
    explanation: "If x is the actual catch, then 3x = x + 12. Thus 2x = 12 and x = 6 fish.",
    hint: "The difference between three times the catch and the actual catch is two times the catch.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "7",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 5,
    prompt: "Numbers fill a 4 × 4 grid so that numbers in edge-neighbouring squares differ by 1. The number 3 is given, and 9 is used somewhere. How many different numbers are used when the grid is complete?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "A path of neighbouring squares from 3 to 9 must pass through every integer from 3 to 9, so at least seven values occur. A grid can be filled using just those seven values.",
    hint: "Along any path from the square containing 3 to the square containing 9, each step changes the value by only 1.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "Two smiling and two sad buttons are in a row. Pressing a button changes its face and the faces of its neighbours. What is the minimum number of presses needed so that only smiling faces remain?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the initial order of the four faces is shown in the missing diagram.",
    hint: "Track each press as toggling three adjacent positions where possible, and check which presses combine to change all sad faces.",
    sourcePage: 3,
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
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-20-extra.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "If you start with three numbers, the 'addition machine' produces three new ones by adding together each pair of two. For instance from the numbers {3, 4, 6} the addition machine makes {10, 9, 7}. If you use the addition machine again these numbers become {16, 17, 19}. We feed the three numbers {20, 1, 3} into the addition machine and let the machine calculate 2013 times. What is the biggest possible difference between two of the three resulting numbers?",
    options: [
      "1",
      "2",
      "17",
      "19",
      "2013"
    ],
    answer: 3,
    explanation: "For numbers a, b and c, the new numbers are a+b, a+c and b+c. The difference between any pair equals the difference between the omitted original numbers, so the greatest difference stays 20 - 1 = 19.",
    hint: "Compare two new pairwise sums; their shared term cancels, leaving a difference from the previous triple.",
    sourcePage: 3,
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
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "2013",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "From an old model train set there are only identical pieces of track to use. Matthias puts 8 such pieces in a circle (picture on the left). Martin begins his track with 2 pieces as shown in the picture on the right. He also wants to build a closed track and use the smallest number of pieces possible. How many pieces will his track use? ",
    options: [
      "11",
      "12",
      "14",
      "15",
      "16"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the track-piece geometry and the starting arrangement are shown in the source pictures.",
    hint: "Compare the angle and direction changes in the 8-piece circle with the two-piece start, then find the smallest matching closure.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-5-6/benjamin/2013/questions/editor-q-22.png"
  },
  {
    number: 23,
    points: 5,
    prompt: "2013 people live on an island. Some of these people are truthtellers and the others are liars. The truthtellers always tell the truth whereas the liars always lie. Each day one of the people says ' when I have left the island the number of truthtellers will be the same as the number of liars.' Then he leaves the island. After 2013 days there is no longer anybody living on the island. How many liars were living there to begin with? ",
    options: [
      "0",
      "1006",
      "1007",
      "2013",
      "It is not possible to answer"
    ],
    answer: 1,
    explanation: "A truth-teller can leave when truth-tellers outnumber liars by one; a liar can leave when the counts are equal. This allows the people to leave in truth-teller/liar pairs, ending with one truth-teller. Thus there were 1007 truth-tellers and 1006 liars.",
    hint: "Check when a truthful statement can be made by a departing truth-teller and when a departing liar's statement is false.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "1006",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "1007",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "2013",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "It is not possible to answer",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "Forty boys and 28 girls hold hands in a circle. Exactly 18 boys give their right hand to a girl. How many boys give their left hand to a girl?",
    options: [
      "18",
      "9",
      "28",
      "14",
      "20"
    ],
    answer: 0,
    explanation: "In a circle, every transition from a boy to a girl has a matching transition from a girl to a boy. These are the 18 girl-to-boy handholds, so 18 boys give their left hands to girls.",
    hint: "Count the changes from boys to girls and from girls to boys as you move once around the circle.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "18",
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
        text: "28",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2013Benjamin: Section[] = [
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

export const edition2013Benjamin: QuestionSet = {
  id: "benjamin-2013",
  year: 2013,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 21, 2013",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2013/2013_Benjamin.pdf",
  questions: questions2013Benjamin,
  sections: sections2013Benjamin,
};
