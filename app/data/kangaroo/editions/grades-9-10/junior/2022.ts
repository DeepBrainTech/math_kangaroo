import type { Question, QuestionSet, Section } from "../../../types";

const questions2022Junior: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "What is 20 x 22 / ((2 + 0) x (2 + 2))?",
    options: [
      "34",
      "40",
      "44",
      "55",
      "85"
    ],
    answer: 3,
    explanation: "The numerator is 440 and the denominator is 2 x 4 = 8, so the quotient is 55.",
    hint: "Evaluate the numerator and denominator separately.",
    sourcePage: 2,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "34",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "44",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "55",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "85",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Karo has a box of 30 matches. She uses some matches to form 2022 and has already formed the first two digits. How many matches will be left after she finishes the number?",
    options: [
      "5",
      "9",
      "10",
      "19",
      "5"
    ],
    answer: 1,
    explanation: "The completed digit shapes use 21 matches, leaving 9 from the box of 30.",
    hint: "Count the matches required for the final two digits, then subtract the total used from 30.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-02-diagram.png",
    imageAlt: "The first two digits, 20, made from matches",
    sourcePage: 2,
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
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "19",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "An equilateral triangle with side length 12 has the same perimeter as a square with side length x. What is x?",
    options: [
      "9",
      "12",
      "16",
      "24",
      "36"
    ],
    answer: 0,
    explanation: "The triangle's perimeter is 3 x 12 = 36. Each square side is 36/4 = 9.",
    hint: "Set the square's perimeter equal to the triangle's perimeter.",
    sourcePage: 2,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "12",
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
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Various symbols are drawn on a piece of paper. The teacher folds the left side along the vertical line to the right. How many symbols on the left now lie congruently on top of a symbol on the right?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "After reflecting the left half across the centre line, three symbols coincide with matching shapes on the right.",
    hint: "Reflect each left-side symbol across the vertical fold and compare both shape and position.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-04-diagram.png",
    imageAlt: "Grid with arrows, triangles, and circles arranged on both sides of a fold line",
    sourcePage: 2,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "Karin places 2 x 1 tables according to the number of participants. The diagram shows arrangements for small, medium, and large meetings. How many tables are used in the large meeting?",
    options: [
      "10",
      "11",
      "12",
      "14",
      "16"
    ],
    answer: 2,
    explanation: "The table arrangement grows as a square spiral; extending the pattern to the marked size 7 gives 12 tables.",
    hint: "Count the perimeter tables in each shown arrangement and continue the same square-ring pattern.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-05-diagram.png",
    imageAlt: "Table layouts marked 3, 5, and 7 participants with the largest layout missing",
    sourcePage: 2,
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
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "I am smaller than my half and bigger than my double. The sum of me and my square is 0. Which number am I?",
    options: [
      "-2",
      "-1",
      "0",
      "1",
      "2"
    ],
    answer: 1,
    explanation: "The equation x+x^2=0 gives x(x+1)=0. The inequalities require a negative value, so x=-1.",
    hint: "Solve the quadratic, then test the inequalities.",
    sourcePage: 2,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "-2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "-1",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "0",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "1",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "The midpoints of both longer sides of a rectangle are connected with the vertices. Which fraction of the rectangle is shaded?",
    options: [
      "1/5",
      "1/4",
      "2/7",
      "1/3",
      "2/5"
    ],
    answer: 4,
    explanation: "The central shaded diamond has area two fifths of the rectangle, as follows by splitting it into triangles with the rectangle's full height as a common base scale.",
    hint: "Compare the diamond's diagonals with the rectangle's side lengths.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-07-diagram.png",
    imageAlt: "Rectangle divided by diagonal segments with a shaded central diamond",
    sourcePage: 2,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "1/5",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "1/4",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "2/7",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "1/3",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "2/5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "The chart shows how long Sonja used four apps last week. This week she spent half as much time using two of the apps and the same amount of time using the other two. Which picture could show this week's chart?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Option C halves exactly two bar lengths and keeps the other two unchanged, matching the conditions.",
    hint: "Compare each candidate bar with the corresponding bar in the original chart.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-08-reference.png",
    imageExtra: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-08-choices.png",
    imageChoices: true,
    imageAlt: "Original four-app bar chart and five candidate charts",
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
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "In the multiplication grid, each white cell contains the product of the numbers in the same row and column. The integer x is greater than the positive integer y. One product is 77. What is y?",
    options: [
      "6",
      "7",
      "8",
      "10",
      "11"
    ],
    answer: 0,
    explanation: "The given cell gives (x+1)(y+1)=77. Since 77=7 x 11 and x>y, we have y+1=7, hence y=6.",
    hint: "Factor 77 and use x>y to decide which factor is y+1.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-09-diagram.png",
    imageAlt: "Two-by-two multiplication grid with row labels y and y+1 and column labels x and x+1",
    sourcePage: 2,
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
        text: "7",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "11",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Five people can be elected on a ballot paper. After counting 90% of the votes, the intermediate result is shown. How many of the five people cannot win the election anymore?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The first count represents 90% of the final votes. Even if every remaining vote went to a candidate below the current leaders, two candidates can no longer catch the leader.",
    hint: "Use the remaining 10% of votes as the maximum number any candidate can still gain.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-10-diagram.png",
    imageAlt: "Intermediate vote counts for Alex, Bella, Clint, Diana, and Eddy",
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
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "Five squares and two right-angled triangles are placed as shown. The numbers 3, 8, and 22 in the squares state their areas. What is the area of the square marked with a question mark?",
    options: [
      "14",
      "15",
      "16",
      "17",
      "18"
    ],
    answer: 3,
    explanation: "The two right triangles have equal corresponding legs along the central square. Applying the Pythagorean relation to the attached square areas gives 22+3-8=17.",
    hint: "Use the Pythagorean theorem for each right triangle and compare the shared side lengths.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-11-diagram.png",
    imageAlt: "Five attached squares and two right triangles with areas 22, 3, 8, and an unknown",
    sourcePage: 3,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "14",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "There are 2022 tiles in one long row. Adam removes every sixth tile. Beate then removes every fifth of the remaining tiles. Finally Cora removes every fourth of the remaining tiles. How many tiles are left?",
    options: [
      "0",
      "337",
      "674",
      "1011",
      "1348"
    ],
    answer: 3,
    explanation: "Removing one sixth leaves 1685. Removing one fifth leaves 1348, and removing one fourth of those leaves 1011.",
    hint: "At each stage multiply the current count by the fraction that remains.",
    sourcePage: 3,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "337",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "674",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "1011",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "1348",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "The diagram shows three large circles of equal size and four small circles. Each small circle touches two large circles and has radius 1. How large is the shaded area?",
    options: [
      "pi",
      "2 pi",
      "3 pi",
      "4 pi",
      "6 pi"
    ],
    answer: 1,
    explanation: "The shaded lunes from the three equal large circles combine to two unit-circle areas, giving 2 pi.",
    hint: "Pair equal overlap regions of the congruent large circles; the remaining shaded pieces match two small circles.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-13-diagram.png",
    imageAlt: "Three equal overlapping large circles with four small tangent circles and shaded lunes",
    sourcePage: 3,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "pi",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2 pi",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "3 pi",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "4 pi",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "6 pi",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A bee called Maja hikes from honeycomb X to honeycomb Y. She can move only between neighbouring honeycombs that share an edge. How many different paths are there if she must step on each of the seven unlabelled honeycombs exactly once?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Enumerating the valid edge-sharing routes through all seven intermediate cells exactly once gives five paths.",
    hint: "Treat the honeycomb cells as vertices in a graph and trace paths from X to Y that visit each required cell once.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-14-diagram.png",
    imageAlt: "Seven-cell honeycomb route from X to Y",
    sourcePage: 3,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "5",
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
    prompt: "The sum of two positive integers is three times their difference. Their product is four times their sum. What is their sum?",
    options: [
      "9",
      "10",
      "12",
      "15",
      "18"
    ],
    answer: 4,
    explanation: "Let the larger number be a and the smaller b. The sum condition gives a=2b. Then 2b^2=4(3b), so b=6 and a=12; their sum is 18.",
    hint: "Use the sum-and-difference condition first to relate the two integers.",
    sourcePage: 3,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "15",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "Rectangle ABCD is made up of 12 congruent rectangles. What is the ratio AD/DC?",
    options: [
      "8/9",
      "5/6",
      "7/8",
      "2/3",
      "9/8"
    ],
    answer: 0,
    explanation: "Matching the widths and heights of the 12 congruent rectangles in the arrangement gives AD:DC=8:9.",
    hint: "Express the large rectangle's side lengths as sums of the small rectangle dimensions.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-16-diagram.png",
    imageAlt: "Rectangle ABCD subdivided into 12 congruent smaller rectangles",
    sourcePage: 3,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "8/9",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "5/6",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "7/8",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "2/3",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "9/8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "A rabbit and a hedgehog race around a circular course 550 m long. The rabbit runs at 10 m/s and the hedgehog at 1 m/s. They start together, but the hedgehog runs in the opposite direction. When they meet, the hedgehog turns around and follows the rabbit. How many seconds after the rabbit finishes does the hedgehog reach the finish?",
    options: [
      "45",
      "50",
      "55",
      "100",
      "505"
    ],
    answer: 0,
    explanation: "Their first meeting occurs when they cover one lap together: 550/(10+1)=50 seconds. The rabbit has then run 500 m, while the hedgehog has 50 m left to the finish, which takes 50 seconds; the rabbit needs 5 more seconds to finish, so the difference is 45 seconds.",
    hint: "Find the first meeting time, then compare each runner's remaining distance to the finish.",
    sourcePage: 3,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "45",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "50",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "55",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "100",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "505",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Three grandchildren guess their grandmother's age. They say 75, 78, and 81. One guess is wrong by 1 year, one by 2 years, and one by 4 years. How many possible ages does their grandmother have?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "Testing ages whose distances from 75, 78, and 81 are 1, 2, and 4 in some order gives exactly two possibilities.",
    hint: "List the candidate ages one, two, or four years from each guess and look for a matching assignment.",
    sourcePage: 3,
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
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Three paths run through a park in the city. A tree is situated in the centre of the park. What is the minimum number of trees that must be planted additionally so that there are the same number of trees on either side of each path?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "The existing tree is on one side of each path. Placing three trees in the corresponding regions balances the counts on both sides of all three paths.",
    hint: "Each path divides the park into two sides; track the three side-balance conditions simultaneously.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-19-diagram.png",
    imageAlt: "Three curved paths through a park with one tree",
    sourcePage: 3,
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
    points: 4,
    prompt: "Square PQRS has side length 1. U is the midpoint of RS and W is the midpoint of the square. Segments TW, UW, and VW split the square into three equal areas. How long is SV?",
    options: [
      "1/2",
      "2/3",
      "3/4",
      "4/5",
      "5/6"
    ],
    answer: 4,
    explanation: "The right region has area 1/3 and width 1/2, so its height from W to the right side is 2/3. The top-left region then has area 1/3, which determines V so that SV=5/6.",
    hint: "Use the equal one-third areas and the midpoint coordinates to solve for V's position on PS.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-20-diagram.png",
    imageAlt: "Unit square divided from centre W to points T, U, and V",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "1/2",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "2/3",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "3/4",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "4/5",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "5/6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "I met six sisters whose ages were six consecutive integers. I asked each of them the age of the oldest sister. Which of the following numbers cannot be the sum of the six answers?",
    options: [
      "95",
      "125",
      "167",
      "205",
      "233"
    ],
    answer: 3,
    explanation: "If the oldest age is n, the answers are n-5 through n. Their sum is 6n-15, which is congruent to 3 modulo 6. Of the choices, 205 is not.",
    hint: "Write the six ages as consecutive integers and compute the sum of the repeated answers.",
    sourcePage: 4,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "95",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "125",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "167",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "205",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "233",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "Veronika wears five rings as shown. How many different ways are there for her to take off the rings one by one?",
    options: [
      "16",
      "20",
      "24",
      "30",
      "45"
    ],
    answer: 1,
    explanation: "The finger arrangement imposes order constraints on which rings can be removed first. Counting the valid linear orders gives 20.",
    hint: "Represent each ring-removal restriction as a precedence relation, then count the valid orders.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-22-diagram.png",
    imageAlt: "Hand wearing five rings across adjacent fingers",
    sourcePage: 4,
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
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "24",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "30",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "45",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "A square is drawn inside each of two congruent isosceles right triangles. The area of square P is 45 units. How many units is the area of square R?",
    options: [
      "35",
      "40",
      "45",
      "50",
      "60"
    ],
    answer: 1,
    explanation: "The two squares occupy different fractions of the congruent right-isosceles triangles. Comparing the leg and hypotenuse placements gives area R=40.",
    hint: "Express each square's side using the common triangle leg and compare their areas.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-23-diagram.png",
    imageAlt: "Two congruent isosceles right triangles containing squares P and R",
    sourcePage: 4,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "35",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "40",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "45",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "50",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "60",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "In a certain city, positive inhabitants only ask questions answered yes and negative inhabitants only ask questions answered no. Albert and Berta meet and Berta asks, 'Are Albert and I both negative?' What kind of inhabitants are they?",
    options: [
      "Both positive",
      "Both negative",
      "Albert positive and Berta negative",
      "Albert negative and Berta positive",
      "There is not enough information"
    ],
    answer: 2,
    explanation: "If Berta were positive, her question would have to receive yes; if negative, it would have to receive no. Checking the truth of 'both are negative' leaves Albert positive and Berta negative.",
    hint: "Test the four combinations and require the answer to match the type of the person asking.",
    sourcePage: 4,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "Both positive",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "Both negative",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "Albert positive and Berta negative",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "Albert negative and Berta positive",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "There is not enough information",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "Twelve weights have masses 1 g, 2 g, ..., 12 g. A vendor divides them into three groups of four. The first group has total mass 41 g and the second has total mass 26 g. Which weight is in the same group as the 9 g weight?",
    options: [
      "3 g",
      "5 g",
      "7 g",
      "8 g",
      "10 g"
    ],
    answer: 2,
    explanation: "The remaining group sums to 78-41-26=11 g. Using the pictured group split, the 9 g weight shares its group with 7 g.",
    hint: "Use the total mass and the two known group sums to determine the third group, then check the possible four-weight partitions.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-25-diagram.png",
    imageAlt: "Three groups of weights with totals 41 g and 26 g shown on scales",
    sourcePage: 4,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "3 g",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "5 g",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "7 g",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "8 g",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "10 g",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "The diagonals of squares ABCD and EFGD are 7 cm and 10 cm respectively. P is the intersection of the diagonals of square ABCD. What is the area of triangle FPD?",
    options: [
      "14.5",
      "15",
      "15.75",
      "16.5",
      "17.5"
    ],
    answer: 4,
    explanation: "Using the diagonal lengths to find the perpendicular separation of the square centres, the triangle's base-height product gives area 17.5 cm^2.",
    hint: "Use the common diagonal line and the two square diagonals to express the triangle's base and height.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-26-diagram.png",
    imageAlt: "Two overlapping squares with diagonals, point P, and shaded triangle FPD",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "14.5",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "15.75",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "16.5",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "17.5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "The product of the digits of a number N is 20. Which of the following numbers cannot be the product of the digits of N+1?",
    options: [
      "24",
      "25",
      "30",
      "35",
      "40"
    ],
    answer: 3,
    explanation: "Considering the possible digit endings and carries when adding 1 to a number whose digit product is 20 shows that 35 cannot occur.",
    hint: "Factor 20 into possible final digits and examine how a carry changes the trailing 9s.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "25",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "35",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Five circles A, B, C, D, and E touch as shown. Line segments join the centres of adjacent circles. The distances between centres are AB=16, BC=14, CD=17, DE=13, and EA=14. Which point is the centre of the circle with the largest radius?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "For tangent neighbouring circles, each centre distance equals the sum of their radii. Comparing the five sums around the cycle shows that circle A has the largest radius.",
    hint: "Write one equation for each adjacent pair: the centre distance is the sum of their radii.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-28-diagram.png",
    imageAlt: "Five mutually touching circles with their centres connected and labelled A through E",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "Eight teams play a football tournament in which each team plays every other team once. A win is worth 3 points, a draw gives each team 1 point, and a loss gives 0. What is the maximum number of points the top-scoring team could have earned?",
    options: [
      "21",
      "19",
      "18",
      "17",
      "16"
    ],
    answer: 3,
    explanation: "There are 28 matches. To maximize one team's score it wins all 7 games for 21 points, while the remaining 21 matches must each give the other teams enough points to make the top score possible; the maximum consistent score is 17.",
    hint: "Separate the seven matches of the leading team from the other 21 matches and use the total tournament points.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "21",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "19",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "18",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "17",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A hemispherical hole is carved into each face of a wooden cube with side length 2. All holes are the same size and centred on the faces. The holes are as large as possible so each hemisphere touches each adjacent hemisphere in exactly one point. What is the diameter of the holes?",
    options: [
      "1",
      "2",
      "sqrt(2)",
      "3/2",
      "sqrt(3/2)"
    ],
    answer: 2,
    explanation: "Each hemispherical hole has its circular opening centred on a face. For adjacent openings to be tangent on their shared cube edge, the radius is 1/sqrt(2), so the diameter is sqrt(2).",
    hint: "Use the distance between the centres of two adjacent face openings and set it equal to twice the radius.",
    image: "/assets/kangaroo/grades-9-10/junior/2022/questions/q-30-diagram.png",
    imageAlt: "Cube with equal hemispherical holes centred on three visible faces",
    sourcePage: 4,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "sqrt(2)",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "3/2",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "sqrt(3/2)",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2022Junior: Section[] = [
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

export const edition2022Junior: QuestionSet = {
  id: "junior-2022",
  year: 2022,
  group: "Junior",
  grades: "Grades 9-10",
  location: "Austria",
  date: "17 March 2022",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2022/2022_Junior.pdf",
  questions: questions2022Junior,
  sections: sections2022Junior,
};
