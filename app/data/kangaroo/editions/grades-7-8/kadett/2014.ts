import type { Question, QuestionSet, Section } from "../../../types";

const questions2014Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The Mathematical Kangaroo takes place on the third Thursday of March. What is the latest possible date?",
    options: [
      "14 March",
      "15 March",
      "20 March",
      "21 March",
      "22 March"
    ],
    answer: 3,
    explanation: "The third Thursday can be as late as March 21, when March 1 falls on a Saturday.",
    hint: "Check the weekday of March 1 in the latest calendar arrangement.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "14 March",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "15 March",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "20 March",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "21 March",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "22 March",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "How many quadrilaterals of any size are in the pictured diagram?",
    options: [
      "0",
      "1",
      "2",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the intersecting lines and quadrilateral regions are visual.",
    hint: "Count every four-sided outline, including larger shapes made from smaller regions.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-02.png",
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
        text: "4",
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
    prompt: "What is 2014 × 2014 ÷ 2014 − 2014?",
    options: [
      "0",
      "1",
      "2013",
      "2014",
      "4028"
    ],
    answer: 0,
    explanation: "2014×2014÷2014=2014, so the result is zero.",
    hint: "Perform multiplication and division from left to right before subtracting.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "2013",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "2014",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "4028",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Rectangle ABCD has area 10. M and N are the midpoints of AD and BC. What is the area of quadrilateral MBND?",
    options: [
      "0.5",
      "5",
      "2.5",
      "7.5",
      "10"
    ],
    answer: 1,
    explanation: "The midpoint segment divides the rectangle into two equal-area halves, so MBND has area 5.",
    hint: "Use the midpoint positions to compare the quadrilateral's area with the whole rectangle.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "0.5",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "2.5",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "7.5",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-04.png"
  },
  {
    number: 5,
    points: 3,
    prompt: "Two natural numbers have product 36 and sum 37. What is their positive difference?",
    options: [
      "1",
      "4",
      "10",
      "26",
      "35"
    ],
    answer: 4,
    explanation: "The numbers are 1 and 36, so their difference is 35.",
    hint: "Look for factor pairs of 36 whose sum is 37.",
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
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "10",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "26",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "35",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "Wanda cuts square-paper pages of area 4 into right-angled triangles and squares, then uses some pieces to form the pictured shape. What is its area?",
    options: [
      "3",
      "4",
      "9/2",
      "5",
      "6"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the piece arrangement and which pieces are used are visual.",
    hint: "Add the areas of the component pieces visible in the assembled shape.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "3",
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
        text: "9/2",
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
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A bucket is half full. Adding 2 litres makes it three-quarters full. How many litres does the bucket hold?",
    options: [
      "10",
      "8",
      "6",
      "4",
      "2"
    ],
    answer: 1,
    explanation: "Two litres is one quarter of the bucket, so its full capacity is 8 litres.",
    hint: "The added 2 litres represents the difference between one-half and three-quarters full.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "George builds the pictured sculpture from seven unit cubes. How many more cubes are needed to make a 3×3×3 cube?",
    options: [
      "12",
      "14",
      "16",
      "18",
      "20"
    ],
    answer: 4,
    explanation: "A 3×3×3 cube contains 27 unit cubes. With 7 already used, he needs 20 more.",
    hint: "Subtract the cubes already in the sculpture from 27.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "12",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "14",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "16",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "20",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Which sum gives the biggest answer?",
    options: [
      "44×777",
      "55×666",
      "77×444",
      "88×333",
      "99×222"
    ],
    answer: 1,
    explanation: "Each product can be compared directly; 55×666 = 36,630 is the largest.",
    hint: "Pair each repeated-digit factor with the other factor and compare the products.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "44×777",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "55×666",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "77×444",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "88×333",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "99×222",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Grey and white pearls are threaded on a string. Tony pulls pearls from either end and stops after the fifth grey pearl. At most how many white pearls could he have removed?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the order of pearls on the string is shown in the source picture.",
    hint: "Starting from either end, count the white pearls that can appear before the fifth grey pearl.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Max has a one-hour piano lesson twice a week; Hanna has one every second week. Over how many weeks does Max have 15 more lesson hours than Hanna?",
    options: [
      "30 weeks",
      "25 weeks",
      "20 weeks",
      "15 weeks",
      "10 weeks"
    ],
    answer: 4,
    explanation: "Max has 2 lessons per week and Hanna averages one every two weeks, so the difference is 1.5 hours per week. A 15-hour difference takes 10 weeks.",
    hint: "Compare their lesson hours over a two-week cycle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "30 weeks",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "25 weeks",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "20 weeks",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "15 weeks",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "10 weeks",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "Five overlapping circles each have area 1 cm², and each pairwise overlap shown has area 1/8 cm². What is the total area covered by the figure?",
    options: [
      "4 cm²",
      "9/8 cm²",
      "35/8 cm²",
      "39/4 cm²",
      "19/4 cm²"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the overlap arrangement and which regions are double-counted are visual.",
    hint: "Use inclusion-exclusion on the five circles and the indicated overlaps.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "4 cm²",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "9/8 cm²",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "35/8 cm²",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "39/4 cm²",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "19/4 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "A grandmother, daughter and granddaughter have ages summing to 100, and each age is a power of two. How old is the granddaughter?",
    options: [
      "1",
      "2",
      "4",
      "8",
      "16"
    ],
    answer: 2,
    explanation: "The distinct powers of two that sum to 100 are 64, 32 and 4, so the granddaughter is 4.",
    hint: "Find three powers of two summing to 100 and order them by age.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Five congruent rectangles are placed in a square of side 24 as shown. What is the area of one rectangle?",
    options: [
      "12 cm²",
      "16 cm²",
      "18 cm²",
      "24 cm²",
      "32 cm²"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the five-rectangle arrangement is visual; key E corresponds to 32 cm².",
    hint: "Use the shared side lengths and the square's 24 cm sides to determine one rectangle's dimensions.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "12 cm²",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "16 cm²",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "18 cm²",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "24 cm²",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "32 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "A heart and arrow move around the pictured figure: the arrow advances 3 spaces clockwise and the heart 4 spaces anticlockwise each repetition. After how many repetitions do they first occupy the same triangle?",
    options: [
      "7",
      "8",
      "9",
      "10",
      "It never happens"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the number and arrangement of triangles determine whether their positions ever coincide.",
    hint: "Track their relative displacement modulo the number of triangles in the diagram.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "7",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "It never happens",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "In triangle ABC, AD bisects angle A and BH is the altitude from B to AC. The obtuse angle between BH and AD is four times angle DAB. What is angle CAB?",
    options: [
      "30°",
      "45°",
      "60°",
      "75°",
      "90°"
    ],
    answer: 2,
    explanation: "Let x=∠DAB, so ∠CAB=2x. Since BH is perpendicular to AC, the obtuse angle between BH and AD is 90°+x. Thus 90°+x=4x, giving x=30° and ∠CAB=60°.",
    hint: "Let half of angle A be x; relate the angle between AD and BH to the right angle at H and triangle angles.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "30°",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "45°",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "60°",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "75°",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "90°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Six boys take 8, 10, 12, 17, 21 and 22 minutes to use two bathrooms, each alone. From 7:00, what is the earliest time all can have breakfast together?",
    options: [
      "7:45",
      "7:46",
      "7:47",
      "7:48",
      "7:50"
    ],
    answer: 1,
    explanation: "The two bathroom schedules can be packed so the last boy finishes after 46 minutes; verify the optimal two-machine schedule before finalizing.",
    hint: "Partition the six durations between two bathrooms to minimize the larger total time.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "7:45",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "7:46",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "7:47",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "7:48",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "7:50",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "A 6×11 rectangle is cut by the angle bisectors from the ends of a long side, dividing the opposite side into three pieces. What are their lengths?",
    options: [
      "1, 9, 1 cm",
      "2, 7, 2 cm",
      "3, 5, 3 cm",
      "4, 3, 4 cm",
      "5, 1, 5 cm"
    ],
    answer: 4,
    explanation: "Each angle bisector crosses the 6-cm width at 45°, so it reaches a point 6 cm from its endpoint along the opposite 11-cm side. The two points are 6 cm and 5 cm from the same end, leaving pieces of 5 cm, 1 cm and 5 cm.",
    hint: "Use the right triangles formed by each 45° bisector to find its distance along the opposite side.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1, 9, 1 cm",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "2, 7, 2 cm",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "3, 5, 3 cm",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "4, 3, 4 cm",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "5, 1, 5 cm",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Captain Sparrow shares coins equally among his pirates. Four fewer pirates would give each 10 more coins; 50 fewer coins would give each pirate 5 fewer. How many coins were shared?",
    options: [
      "80",
      "100",
      "120",
      "150",
      "250"
    ],
    answer: 3,
    explanation: "Let p be pirates and c coins. The conditions give c/p and c/(p−4)=c/p+10, and (c−50)/p=c/p−5; solving gives c=150.",
    hint: "Write equations for the original and changed equal shares, then solve for p and c.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "80",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "100",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "120",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "150",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "250",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "The average of two positive numbers is 30% less than one of them. By what percentage is the average greater than the other number?",
    options: [
      "75%",
      "70%",
      "30%",
      "25%",
      "20%"
    ],
    answer: 0,
    explanation: "If the larger number is x, the average is 0.7x, so the other number is 0.4x. The average is 75% greater than 0.4x.",
    hint: "Let the number that is 30% above the average be x and express the second number in terms of x.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "75%",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "70%",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "30%",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "25%",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "20%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "A magic square starts with side 8 cm. Each true statement reduces every side by 2 cm; each lie doubles its perimeter. With two truths and two lies, what is the greatest possible final perimeter?",
    options: [
      "28",
      "80",
      "88",
      "112",
      "120"
    ],
    answer: 4,
    explanation: "The two lies first double the perimeter twice: 32→64→128. Two true statements then reduce it by 8 each, giving 112, not 120; NEEDS_REVIEW against key E.",
    hint: "A true statement reduces perimeter by 8 and a lie doubles it; test the possible orders.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "80",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "88",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "112",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "120",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "A die rolls around its edge through the seven positions shown. Which two positions are occupied by the same face?",
    options: [
      "1 and 7",
      "1 and 6",
      "1 and 5",
      "2 and 7",
      "2 and 6"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the rolling sequence is visual; the Kadett key indicates D.",
    hint: "Track the bottom face after each roll along the labelled positions.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "1 and 7",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "1 and 6",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "1 and 5",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "2 and 7",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "2 and 6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Five dice have different sizes, with neighbouring heights differing by 2 cm. The largest is as high as the two smallest stacked together. What is the total height?",
    options: [
      "6 cm",
      "14 cm",
      "22 cm",
      "44 cm",
      "50 cm"
    ],
    answer: 4,
    explanation: "Let the smallest be x. Then x+8=(x)+(x+2), giving x=6; the five heights sum to 50 cm.",
    hint: "Represent the heights as x, x+2, x+4, x+6 and x+8, then use the stacking condition.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "6 cm",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "14 cm",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "22 cm",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "44 cm",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "50 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "In square ABCD, M is the midpoint of AB and MN is perpendicular to AC. What is the ratio of the grey triangle's area to the square's area?",
    options: [
      "1:6",
      "1:5",
      "7:36",
      "3:16",
      "7:40"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: locate N and the shaded triangle from the source diagram.",
    hint: "Use the midpoint and perpendicular conditions to find the triangle's base and height.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "1:6",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "1:5",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "7:36",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "3:16",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "7:40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "Three quarters of the men and four fifths of the women dance at an event with at most 50 people. How many people are dancing?",
    options: [
      "20",
      "24",
      "30",
      "31",
      "32"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the attendance equations imply 24 dancers, while the printed Kadett key indicates C (30). Verify the source wording or key.",
    hint: "Use equal numbers of dancing men and women and the total attendee limit.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "20",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "24",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "30",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "31",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "32",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "Numbers 1 through 12 are placed in a circle so neighbouring numbers differ by 2 or 3. Which pair must be adjacent?",
    options: [
      "4 and 6",
      "3 and 5",
      "7 and 9",
      "6 and 8",
      "5 and 8"
    ],
    answer: 3,
    explanation: "The numbers 1, 2, 11 and 12 each have only two possible neighbours, forcing 1–3 and 1–4, 2–4 and 2–5, 11–8 and 11–9, and 12–9 and 12–10. These links use up 4 and 9; they then force 5–7 and 7–10. Since 5 and 10 are full, 8 must link to 6, so 6 and 8 are adjacent.",
    hint: "Represent numbers as vertices joined when their difference is 2 or 3, then seek Hamiltonian cycles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "4 and 6",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "3 and 5",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "7 and 9",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "6 and 8",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "5 and 8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-26.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-26-extra.png"
  },
  {
    number: 27,
    points: 5,
    prompt: "Three-digit numbers become square numbers when the first digit is removed and when the last digit is removed. What is the sum of all such numbers?",
    options: [
      "1013",
      "1117",
      "1465",
      "1993",
      "2016"
    ],
    answer: 3,
    explanation: "The possible two-digit squares are 16, 25, 36, 49, 64 and 81. The three-digit numbers whose first two and last two digits are both on this list are 164, 364, 649 and 816; their sum is 1993.",
    hint: "Both two-digit numbers formed by deleting an end digit must be perfect squares.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "1013",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "1117",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "1465",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "1993",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "2016",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "A book has chapters of lengths 1 to 30 pages. The first starts on page 1. What is the maximum number of chapters that can start on an odd page?",
    options: [
      "15",
      "18",
      "20",
      "21",
      "23"
    ],
    answer: 4,
    explanation: "Start with the 15 even chapter lengths: each leaves the next chapter starting on an odd page, so these and the first chapter give 16 odd starts. The 15 odd lengths then alternate the parity of later starts, adding 7 more odd starts. The maximum is 16+7=23, and this ordering attains it.",
    hint: "A chapter start changes parity after an odd-length chapter; arrange odd and even lengths to maximize odd starts.",
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
        text: "20",
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
        text: "23",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A string is folded in half three times, then cut. Some pieces have lengths 4 m and 9 m. Which total length is impossible?",
    options: [
      "52 m",
      "68 m",
      "72 m",
      "88 m",
      "All are possible"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the cut position and fold order determine the resulting piece lengths; key indicates C.",
    hint: "Unfold each cut through the three folds and express piece lengths as multiples of the folded segment.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "52 m",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "68 m",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "72 m",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "88 m",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "All are possible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "Three lines divide a large triangle into four triangles and three quadrilaterals. The quadrilaterals' perimeters sum to 25 cm, the triangles' to 20 cm, and the large triangle's perimeter is 19 cm. What is the total length of the dividing lines?",
    options: [
      "11 cm",
      "12 cm",
      "13 cm",
      "15 cm",
      "16 cm"
    ],
    answer: 2,
    explanation: "The small-piece perimeters sum to 45 cm. Subtract the outer perimeter 19; each internal line is counted twice, so their total length is (45−19)/2=13 cm.",
    hint: "Subtract the outer perimeter from the sum of all piece perimeters and divide by two.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "11 cm",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "12 cm",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "13 cm",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "15 cm",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "16 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2014/questions/editor-q-30.png"
  }
];

const sections2014Kadett: Section[] = [
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

export const edition2014Kadett: QuestionSet = {
  id: "kadett-2014",
  year: 2014,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 20, 2014",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2014/2014_Kadett.pdf",
  questions: questions2014Kadett,
  sections: sections2014Kadett,
};
