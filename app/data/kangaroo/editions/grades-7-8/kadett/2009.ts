import type { Question, QuestionSet, Section } from "../../../types";

const questions2009Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the following is an even number?",
    options: [
      "2009",
      "2 + 0 + 0 + 9",
      "200 - 9",
      "200 × 9",
      "200 + 9"
    ],
    answer: 3,
    explanation: "200 × 9 is divisible by 2; the other choices are odd.",
    hint: "Check the parity of each expression rather than its size.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "2009",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "2 + 0 + 0 + 9",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "200 - 9",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "200 × 9",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "200 + 9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "At a party there were 4 boys and 4 girls. Boys danced only with girls and girls only with boys. The boys reported 3, 1, 2 and 2 dance partners, and three girls reported 2 each. How many people had the fourth girl danced with?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "The boys report 3 + 1 + 2 + 2 = 8 dances. The three girls account for 6, so the fourth girl danced with 2 boys.",
    hint: "Count each dance once from the boys' reports and compare it with the girls' reports.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "3",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A star is made from 12 congruent equilateral triangles and has perimeter 36 cm. What is the perimeter of the grey hexagon?",
    options: [
      "6 cm",
      "12 cm",
      "18 cm",
      "24 cm",
      "30 cm"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the grey hexagon and star geometry are shown in the source diagram.",
    hint: "Relate the star's outside edge length to one small triangle side, then count the hexagon's sides.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-03.png",
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "6 cm",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "12 cm",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "18 cm",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "24 cm",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "30 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Harry delivers a paper to every odd-numbered house in Long Street. The first house is 15 and the last is 53. How many houses does he visit?",
    options: [
      "19",
      "20",
      "27",
      "38",
      "53"
    ],
    answer: 1,
    explanation: "The odd numbers from 15 to 53 inclusive form an arithmetic sequence with 20 terms: (53 - 15) ÷ 2 + 1 = 20.",
    hint: "Count the two-unit steps from 15 to 53 and include both endpoints.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "19",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "20",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "27",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "38",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "53",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "The large square in the picture has area 1. What is the area of the small black square?",
    options: [
      "1/100",
      "1/300",
      "1/600",
      "1/900",
      "1/1000"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the division of the large square into smaller regions is visual.",
    hint: "Use the side lengths and equal-area subdivisions shown in the diagram to compare the small square with the whole.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "1/100",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "1/300",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "1/600",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "1/900",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "1/1000",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-05.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "The product of four different natural numbers is 100. What is their sum?",
    options: [
      "10",
      "12",
      "15",
      "18",
      "20"
    ],
    answer: 3,
    explanation: "The distinct factors 1, 2, 5 and 10 multiply to 100 and sum to 18.",
    hint: "Factor 100 into four distinct positive integers and compare their sums.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "7) In a park there are some cats and dogs. The number of cats feet is double the size of the number of dogs noses. The number of cats is how much of the number of dogs.",
    options: [
      "Double",
      "Half",
      "The same",
      "A quarter",
      "A sixth"
    ],
    answer: 1,
    explanation: "Four legs per cat equal twice one nose per dog, so 4c = 2d and c = d/2.",
    hint: "Write an equation using four feet per cat and one nose per dog.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "Double",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "Half",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "The same",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "A quarter",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "A sixth",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "In the diagram QSR is a straight line, angle QPS = 12°, and PQ = PS = RS. How large is angle QPR?",
    options: [
      "36°",
      "42°",
      "54°",
      "60°",
      "84°"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: confirm the labelled equal lengths and angle positions in the source diagram before accepting C.",
    hint: "Use the two isosceles triangles formed by the equal lengths and the straight angle at S.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "36°",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "42°",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "54°",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "60°",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "84°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "A lift carries either 12 adults or 20 children. What is the maximum number of children who can ride with 9 adults?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    answer: 2,
    explanation: "Nine adults use 9/12 of the lift capacity, leaving 3/12. That capacity holds 20 × 3/12 = 5 children.",
    hint: "Treat 12 adults as the full capacity and find the fraction left after 9 adults board.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Which of the pictured string designs is made using more than one piece of string?",
    options: [
      "I, III, IV and V",
      "I, III and V",
      "III, IV and V",
      "All of them",
      "None"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the string diagrams must be traced to confirm which designs are disconnected.",
    hint: "Follow each line continuously and check whether it separates into distinct pieces.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "I, III, IV and V",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "I, III and V",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "III, IV and V",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "All of them",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "None",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "For how many positive whole numbers n do n² and n³ have the same number of digits?",
    options: [
      "0",
      "3",
      "4",
      "9",
      "Infinitely many"
    ],
    answer: 1,
    explanation: "For one-digit powers, n=1 or 2 works; n=3 does not because 3²=9 but 3³=27. For two-digit powers, n=4 works (16 and 64). For three or more digits, the ranges n²≥10^(k−1) and n³<10^k cannot both hold: they would require 10^((k−1)/2)≤n<10^(k/3), which is impossible for k≥3. So there are three values: 1, 2 and 4.",
    hint: "Check the small values directly, then compare the lower bound needed for n² to have k digits with the upper bound needed for n³ to stay at k digits.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "What is the minimum number of dots that must be removed from the picture so that no three remaining dots lie on a straight line?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "7"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the dot arrangement is needed to identify its collinear triples.",
    hint: "Find the largest subset of the pictured dots with no three collinear.",
    sourcePage: 2,
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "7",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Six angles belong to one acute and one obtuse triangle. Four angles are 120°, 80°, 55° and 10°. What is the smallest angle in the acute triangle?",
    options: [
      "45°",
      "10°",
      "5°",
      "55°",
      "It cannot be answered"
    ],
    answer: 0,
    explanation: "The obtuse triangle contains 120°, so its other two angles sum to 60°. Pairing 55° with a missing 5° would leave a 90° angle in the other triangle, which would not be acute. Thus 10° pairs with a missing 50°, and the other missing angle is 45°. The acute triangle is 80°, 55°, 45°, so its smallest angle is 45°.",
    hint: "The two missing angles sum to 95°. Use the 120° angle to identify which given angle joins it in the obtuse triangle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "45°",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "10°",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "5°",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "55°",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "It cannot be answered",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "What fraction of the largest square is grey?",
    options: [
      "1/4",
      "1/5",
      "2/5",
      "3/8",
      "1/3"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the shaded nested-square diagram is visual.",
    hint: "Compare the grey area with the largest square by splitting it into equal pieces.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "1/4",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "1/5",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "2/5",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "3/8",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "1/3",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "Twenty-five people stand in a line on an island of truth-tellers and liars. The first says everyone behind him is a liar; everyone else says the person in front is a liar. How many liars are in the line?",
    options: [
      "0",
      "12",
      "13",
      "24",
      "It cannot be answered"
    ],
    answer: 2,
    explanation: "From the second person onward, each statement is true exactly when the person immediately in front is a liar, so the truth/lie types alternate. The first person must be a liar: if truthful, the second would be a liar and the third truthful, contradicting the first person's claim that everyone behind is a liar. Therefore the 13 odd-positioned people are liars.",
    hint: "Determine how each person's type depends on the person immediately in front, then check whether the first person's statement can be true.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "13",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "24",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "It cannot be answered",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "An object has six triangular faces. Each corner is labelled with a number, two of which are shown. Every triangular face has the same sum. What is the sum of all five numbers?",
    options: [
      "9",
      "12",
      "17",
      "18",
      "24"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the solid's face connections and two visible labels are needed to derive the total.",
    hint: "Write equal-sum equations for the six triangular faces and combine them to eliminate repeated labels.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "9",
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
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 5,
    prompt: "In the equation E x I x G x H x T / F x O x U x R = T x W x O, each letter represents a digit and equal letters represent equal digits. How many different values can T × H × R × E × E have?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the equation's layout and intended arithmetic operation must be confirmed against the source.",
    hint: "Use the digit constraints column by column, remembering repeated letters must keep the same digit.",
    sourcePage: 3,
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
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 5,
    prompt: "Colour each square in the grid P, Q, R or S so neighbouring squares, including squares touching at a corner, have different colours. In which colour(s) can the grey square be painted?",
    options: [
      "Only Q",
      "Only R",
      "Only S",
      "R or S",
      "Impossible"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the partial grid colouring and grey square location are visual.",
    hint: "List the colours ruled out by every neighbouring square, including diagonal neighbours.",
    sourcePage: 3,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "Only Q",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "Only R",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "Only S",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "R or S",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "Impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-18.png"
  },
  {
    number: 19,
    points: 5,
    prompt: "A regular nonagon is shown. What is the size of angle x?",
    options: [
      "40°",
      "45°",
      "50°",
      "55°",
      "60°"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the vertex positions defining angle x are shown in the diagram.",
    hint: "Use the 40° exterior angle of a regular nonagon and the relevant isosceles triangles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "40°",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "45°",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "50°",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "55°",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "60°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 5,
    prompt: "A pattern is made from white square tiles. The first three patterns are shown. How many tiles are needed for the tenth pattern?",
    options: [
      "76",
      "80",
      "84",
      "92",
      "100"
    ],
    answer: 3,
    explanation: "The key indicates 92; verify the growth rule from the three pictured patterns before finalizing the explanation.",
    hint: "Compare consecutive patterns to determine how many tiles are added each time.",
    sourcePage: 3,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "76",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "80",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "84",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "92",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "100",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "A beetle walks along the edges of a cube from P, turning alternately right, then left, at the end of each edge. How many edges does it walk before returning to P?",
    options: [
      "2",
      "4",
      "6",
      "9",
      "12"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the beetle's initial direction and cube orientation are shown in the source figure.",
    hint: "Track the beetle's position and direction after each edge, remembering the right-left alternation.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "How many 10-digit numbers using only 1, 2 and 3 have consecutive digits that always differ by 1?",
    options: [
      "16",
      "32",
      "64",
      "80",
      "100"
    ],
    answer: 2,
    explanation: "Let the counts ending in 1, 2 and 3 be a, b and c. Extending a number can end in 1 only after 2, in 2 after 1 or 3, and in 3 only after 2. Starting with (1,1,1), the counts for ten digits become (16,32,16), for 16+32+16=64 numbers.",
    hint: "Track how many valid numbers end in each digit; the next digit must be a neighbor in the chain 1–2–3.",
    sourcePage: 3,
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
        text: "32",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "64",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "80",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "100",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "The fractions 1/3 and 1/5 are marked on a number line. Where should 1/4 be placed?",
    options: [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the number-line positions are visual.",
    hint: "Place 1/4 between 1/5 and 1/3, then compare its distance to each mark.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "d",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "e",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "A cube is cut in three directions, each cut parallel to a face, producing eight cuboids. What is the ratio of their total surface area to the original cube's surface area?",
    options: [
      "1:1",
      "4:3",
      "3:2",
      "2:1",
      "4:1"
    ],
    answer: 3,
    explanation: "Each of the three cuts adds two internal faces with total area equal to twice one face of the cube. Starting from 6 face-areas, the pieces have total area 6 + 6 = 12 face-areas, so the ratio is 2:1.",
    hint: "Each cut creates two new surfaces; add their areas to the original cube's six faces.",
    sourcePage: 4,
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
        text: "4:3",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "3:2",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "2:1",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "4:1",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2009/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "All proper factors of N except 1 are listed. The largest listed factor is 45 times the smallest. For how many N is this true?",
    options: [
      "0",
      "1",
      "2",
      "More than 2",
      "It cannot be answered"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: interpret the factor-list condition precisely and verify how many N satisfy it.",
    hint: "The smallest listed factor is the least prime divisor; use the ratio to constrain the largest proper divisor.",
    sourcePage: 4,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "More than 2",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "It cannot be answered",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "A square is cut into 2009 smaller squares, each with an integer side length. What is the minimum possible side length of the original square?",
    options: [
      "44",
      "45",
      "46",
      "503",
      "It is impossible"
    ],
    answer: 1,
    explanation: "The 2009 pieces have total area at least 2009, so the original integer side must be at least 45 because 44² < 2009. A 45×45 grid has 2025 unit squares; replace two disjoint 3×3 groups of unit squares by one 3×3 square each, reducing the number of pieces by 16 to 2009. Thus 45 is attainable and minimal.",
    hint: "Use area to rule out side 44, then start with a 45×45 unit grid and see how replacing small groups by larger squares changes the piece count.",
    sourcePage: 4,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "44",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "45",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "46",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "503",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "It is impossible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A quadrilateral PQRS has side lengths PQ=2006, QR=2008, RS=2007 and SP=2009. At which corners must the interior angle be less than 180°?",
    options: [
      "P, Q, R",
      "Q, R, S",
      "P, Q, S",
      "P, R, S",
      "P, Q, R, S"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: prove which three vertices are necessarily convex from the four side lengths before finalizing D.",
    hint: "Use the triangle inequality and consider which vertex could be reflex while preserving the given side lengths.",
    sourcePage: 4,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "P, Q, R",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "Q, R, S",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "P, Q, S",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "P, R, S",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "P, Q, R, S",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "A 6 cm × 6 cm square and a triangle overlap. The square can cover up to 60% of the triangle, and the triangle can cover two thirds of the square. What is the triangle's area?",
    options: [
      "22.8 cm²",
      "24 cm²",
      "36 cm²",
      "40 cm²",
      "60 cm²"
    ],
    answer: 3,
    explanation: "The overlap is two thirds of the square: (2/3) × 36 = 24 cm². This is 60% of the triangle, so the triangle's area is 24 ÷ 0.6 = 40 cm².",
    hint: "Find the overlap area from the square, then use the percentage it represents of the triangle.",
    sourcePage: 4,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "22.8 cm²",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "24 cm²",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "36 cm²",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "40 cm²",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "60 cm²",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "Friday writes different positive integers less than 11 in a row so each neighbouring pair is divisible one way or the other. What is the greatest number he can write?",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    answer: 3,
    explanation: "Nine numbers can be arranged as 9, 3, 6, 2, 10, 5, 1, 4, 8, with each neighbor dividing the next or vice versa. Ten cannot be used: 7 can only neighbor 1, so it must be at an end and 1 next to it. After removing 1, the remaining numbers split into three groups around 2: {4,8}, {6,3,9}, and {10,5}. A single row can connect through 2 to at most two of these groups, so all ten cannot fit.",
    hint: "Build a long chain using the divisibility links. For an upper bound, look at which numbers have only one possible neighbor, then see what removing 1 does to the remaining links.",
    sourcePage: 4,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "6",
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
    prompt: "In triangle ABC, angles B=20° and C=40°. The angle bisector from A has length 2. What is the difference between BC and AB?",
    options: [
      "1",
      "1.5",
      "2",
      "4",
      "It cannot be answered"
    ],
    answer: 2,
    explanation: "The angle-bisector length formula with A=120°, B=20° and C=40° gives the required side difference as 2.",
    hint: "Use the angle-bisector theorem together with the sine rule to express AB and BC in terms of the bisector length.",
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
        text: "1.5",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "2",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "It cannot be answered",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2009Kadett: Section[] = [
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

export const edition2009Kadett: QuestionSet = {
  id: "kadett-2009",
  year: 2009,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 23, 2009",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2009/2009_Kadett.pdf",
  questions: questions2009Kadett,
  sections: sections2009Kadett,
};
