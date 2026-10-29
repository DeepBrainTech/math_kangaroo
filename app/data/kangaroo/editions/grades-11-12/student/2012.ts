import type { Question, QuestionSet, Section } from "../../../types";

const questions2012Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "A clock has three hands of different lengths for seconds, minutes, and hours. At 12:55:30 they occupy the positions shown. What will the clock face look like at 8:10:00?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: all three hand positions and answer choices are visual in the source.",
    hint: "Calculate the rotation of each hand over the elapsed time, using its own period.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-01.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-01-extra.png",
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
    prompt: "The water level in a port rises and falls during one day as shown in the diagram. For how many hours is the water level above 30 cm?",
    options: [
      "5",
      "6",
      "7",
      "9",
      "13"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: read the above-30-cm intervals from the source tide graph.",
    hint: "Find where the graph crosses 30 cm and total the time intervals above that level.",
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
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "How many different rectangles with whole-number side lengths have area 60?",
    options: [
      "8",
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 1,
    explanation: "The unordered factor pairs are (1,60),(2,30),(3,20),(4,15),(5,12),(6,10): six rectangles.",
    hint: "Count factor pairs of 60 without counting a pair twice in reverse order.",
    sourcePage: 1,
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
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "Positive integers are coloured red, blue, green in order: 1 red, 2 blue, 3 green, 4 red, and so on. What colour could the sum of a red number and a blue number be?",
    options: [
      "Any colour",
      "Red or blue",
      "Green only",
      "Red only",
      "Blue only"
    ],
    answer: 2,
    explanation: "Red numbers are 1 mod 3 and blue numbers are 2 mod 3, so their sum is 0 mod 3 and green.",
    hint: "Use the residues of the two colour classes modulo 3.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "Any colour",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "Red or blue",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "Green only",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "Red only",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "Blue only",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "What is the value of the radical expression shown in the source?",
    options: [
      "1",
      "sqrt(2)",
      "sqrt(2sqrt(2))",
      "sqrt(4)",
      "2"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: nested radical bars were lost in PDF text extraction; verify the exact expression and choice B from the paper.",
    hint: "Simplify the nested radicals from the innermost expression outward.",
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
        text: "sqrt(2)",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "sqrt(2sqrt(2))",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "sqrt(4)",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "A list of five numbers begins with 2 and ends with 12. The product of the first three is 30, the middle three is 90, and the last three is 360. What is the middle number?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "10"
    ],
    answer: 2,
    explanation: "Let the middle entry be x. Dividing the middle product by the first gives the fourth entry as 3 times the first, or 6. The last product then gives x·6·12=360, so x=5.",
    hint: "Compare overlapping products to isolate an entry, then use the product of the last three numbers.",
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
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "A 4 cm by 16 cm rectangular sheet ABCD is folded along MN so that corner C coincides with A. What is the area of quadrilateral ANMD?",
    options: [
      "28 cm^2",
      "30 cm^2",
      "32 cm^2",
      "48 cm^2",
      "56 cm^2"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: use the fold geometry in the source diagram to verify the area of ANMD.",
    hint: "The fold line is the perpendicular bisector of AC; use that condition to locate M and N.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "28 cm^2",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "30 cm^2",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "32 cm^2",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "48 cm^2",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "56 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "The digits of a nine-digit number sum to 8. What is the product of its digits?",
    options: [
      "0",
      "1",
      "8",
      "9",
      "9!"
    ],
    answer: 0,
    explanation: "Nine positive digits would sum to at least 9, so at least one digit is zero. The product is zero.",
    hint: "Compare the digit sum with the minimum possible sum if every digit were positive.",
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
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "9!",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "The largest natural number n for which n^200<5^300 is true is?",
    options: [
      "5",
      "6",
      "8",
      "11",
      "12"
    ],
    answer: 3,
    explanation: "Taking the 200th root gives n<5^(3/2), approximately 11.18, so n=11.",
    hint: "Take the positive 200th root and compare consecutive integers.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "5",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "6",
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
        text: "11",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "Quintus's age is a two-digit power of 5 and Secundus's age is a two-digit power of 2. The sum of the digits of their ages is odd. What is the product of the digits of their ages?",
    options: [
      "240",
      "2012",
      "60",
      "50",
      "300"
    ],
    answer: 0,
    explanation: "The two-digit power of 5 is 25. The condition forces Secundus's age to be 64, so the products of their age digits are 10 and 24, whose product is 240.",
    hint: "List the two-digit powers and check the parity of the combined digit sum.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "240",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2012",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "60",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "50",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "300",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 4,
    prompt: "What is angle alpha in the regular five-pointed star shown?",
    options: [
      "24 degrees",
      "30 degrees",
      "36 degrees",
      "45 degrees",
      "72 degrees"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify which star angle is labelled alpha in the source figure.",
    hint: "Use the equal arcs and triangle angle sums in a regular pentagram.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "24 degrees",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "30 degrees",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "36 degrees",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "45 degrees",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "72 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-11.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "A real number x satisfies x^3<64<x^2. Which statement is definitely true?",
    options: [
      "0<x<64",
      "-8<x<4",
      "x>8",
      "-4<x<8",
      "x<-8"
    ],
    answer: 4,
    explanation: "Since x^2>64, either x>8 or x<-8. The inequality x^3<64 rules out x>8, so x<-8.",
    hint: "First solve x^2>64, then use x^3<64 to eliminate one branch.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "0<x<64",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "-8<x<4",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "x>8",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "-4<x<8",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "x<-8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "A travel agency organizes four different trips for a group. Each trip has an 80% participation rate. What is the minimum percentage of the group that took part in all four trips?",
    options: [
      "80%",
      "60%",
      "40%",
      "20%",
      "16%"
    ],
    answer: 3,
    explanation: "Each trip can exclude 20% of the group. The union of four excluded sets is at most 80%, so at least 20% participated in every trip.",
    hint: "Use the union bound on the four groups of people who missed a trip.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "80%",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "60%",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "40%",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "20%",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "16%",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Consecutive race numbers are handed out, but one number is handed out twice. The sum of all numbers handed out is 857. Which number was duplicated?",
    options: [
      "4",
      "16",
      "25",
      "37",
      "42"
    ],
    answer: 3,
    explanation: "The sum 1 through 40 is 820. The extra copy contributes 37, giving 857.",
    hint: "Compare 857 with the triangular sums of consecutive integers.",
    sourcePage: 2,
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
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "25",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "37",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "42",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A class's average test mark is 4. The boys average 3.6 and the girls average 4.2. Which statement is correct?",
    options: [
      "Twice as many boys as girls",
      "Four times as many boys as girls",
      "Twice as many girls as boys",
      "Four times as many girls as boys",
      "Equal numbers of boys and girls"
    ],
    answer: 2,
    explanation: "Let b and g be the numbers of boys and girls. The weighted mean equation gives 3.6b+4.2g=4(b+g), hence g=2b.",
    hint: "Set the weighted average equal to 4 and solve for the ratio of the class sizes.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "Twice as many boys as girls",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "Four times as many boys as girls",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "Twice as many girls as boys",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "Four times as many girls as boys",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "Equal numbers of boys and girls",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "The pictured rose bed contains equal white-rose squares, a large square with red roses, and a right-angled triangle with yellow roses. The bed is 16 m wide and high. What is its area?",
    options: [
      "114 m^2",
      "130 m^2",
      "144 m^2",
      "160 m^2",
      "186 m^2"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the bed layout and component boundaries must be inspected in the source diagram.",
    hint: "Partition the 16-by-16 region into the pictured squares and triangle, then add their areas.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "114 m^2",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "130 m^2",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "144 m^2",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "160 m^2",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "186 m^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "A right triangle has side lengths 8, 15, and 17. What is the radius r of the inscribed semicircle shown?",
    options: [
      "2.4",
      "3",
      "3.75",
      "4.8",
      "6"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: confirm the semicircle's diameter placement and the exact decimal options from the source figure.",
    hint: "Use the inradius and tangency geometry of the 8-15-17 triangle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "2.4",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "3.75",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "4.8",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "A square ABCD has side length 2. E and F are the midpoints of AB and AD. Point G lies on CF with 3CG=2GF. What is the area of triangle BEG?",
    options: [
      "7/10",
      "4/5",
      "8/5",
      "3/5",
      "6/5"
    ],
    answer: 1,
    explanation: "Set A=(0,0), B=(2,0), C=(2,2), and D=(0,2). Then E=(1,0), F=(0,1), and CG:GF=2:3 places G at (6/5,8/5). Triangle BEG has base BE=1 and height 8/5, so its area is 4/5.",
    hint: "Use coordinates for the square and divide CF in the ratio CG:GF=2:3.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "7/10",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "4/5",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "8/5",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "3/5",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "6/5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "A clock has a rectangular face, but its hands move in the usual circular pattern. The distance between the marks 8 and 10 is 12 cm. What is the distance x between the marks 1 and 2?",
    options: [
      "3sqrt(3)",
      "2sqrt(3)",
      "4sqrt(3)",
      "2+sqrt(3)",
      "12-3sqrt(3)"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: use the source's rectangular clock-face diagram to identify the relevant chord lengths and scale.",
    hint: "The hands' circular path gives equally spaced angular positions; compare the corresponding chord lengths.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "3sqrt(3)",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "2sqrt(3)",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "4sqrt(3)",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "2+sqrt(3)",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "12-3sqrt(3)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Renate glues ordinary dice into a row, joining only faces with equal numbers of dots. She wants the total number of dots on all unglued faces to be 2012. How many dice are needed?",
    options: [
      "70",
      "71",
      "142",
      "143",
      "It is impossible"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: account for opposite-face dot sums and the paired glued faces to prove whether 2012 is attainable.",
    hint: "Start from the total dots on all dice and subtract the pips on each glued pair.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "70",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "71",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "142",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "143",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "It is impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Which function shown satisfies the condition involving f(1/x) for every nonzero x?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the functional equation and formulas were corrupted in PDF extraction; transcribe directly from the source.",
    hint: "Substitute 1/x into each candidate and simplify the composition.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "What is the solution set of |x|+|x-3|>3?",
    options: [
      "(-infinity,0) union (3,infinity)",
      "(-3,3)",
      "(-infinity,-3)",
      "(-3,infinity)",
      "All real numbers"
    ],
    answer: 0,
    explanation: "Between 0 and 3 the sum of distances is 3; outside that interval it exceeds 3.",
    hint: "Interpret each absolute value as distance on the number line and split at 0 and 3.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "(-infinity,0) union (3,infinity)",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "(-3,3)",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "(-infinity,-3)",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "(-3,infinity)",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "All real numbers",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "An ellipse with semiaxes a>b is rotated about the x-axis to form Ex and about the y-axis to form Ey. Which statement about the solids and their volumes is true?",
    options: [
      "Ex=Ey and equal volumes",
      "Ex=Ey but unequal volumes",
      "Ex differs from Ey and Vol(Ex)>Vol(Ey)",
      "Ex differs from Ey and Vol(Ex)<Vol(Ey)",
      "Ex differs from Ey but equal volumes"
    ],
    answer: 2,
    explanation: "The ellipsoid formed around the longer axis has volume proportional to a*b^2, while rotating around the shorter axis gives a volume proportional to a^2*b; since a>b, Vol(Ex)>Vol(Ey).",
    hint: "Use the volume formula for an ellipsoid and compare the semiaxes in each orientation.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "Ex=Ey and equal volumes",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "Ex=Ey but unequal volumes",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "Ex differs from Ey and Vol(Ex)>Vol(Ey)",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "Ex differs from Ey and Vol(Ex)<Vol(Ey)",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "Ex differs from Ey but equal volumes",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-23.png"
  },
  {
    number: 24,
    points: 5,
    prompt: "Starting with 7/8, each operation either increases the numerator by 8 or the denominator by 7, without simplifying. After n operations, the fraction again has the same value. What is the smallest n?",
    options: [
      "56",
      "81",
      "109",
      "113",
      "It cannot be obtained"
    ],
    answer: 3,
    explanation: "After u numerator and v denominator operations, equality requires 8(7+8u)=7(8+7v), or 64u=49v. The least positive solution is u=49, v=64, so n=113.",
    hint: "Let u and v count the two operation types and equate the new fraction to 7/8.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "56",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "81",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "109",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "113",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "It cannot be obtained",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "An equilateral triangle rolls around a unit square as shown. How long is the path traced by the marked point until it and the triangle are both back at their starting positions for the first time?",
    options: [
      "28pi/3",
      "14pi/3",
      "14pi",
      "21pi/2",
      "7pi"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the marked vertex and rolling sequence in the source diagram determine the arcs traced.",
    hint: "Track the triangle's rotations around the square and add the circular arcs of the marked point.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "28pi/3",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "14pi/3",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "14pi",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "21pi/2",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "7pi",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2012/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "How many permutations (x1,x2,x3,x4) of {1,2,3,4} make x1x2+x2x3+x3x4+x4x1 divisible by 3?",
    options: [
      "8",
      "12",
      "14",
      "16",
      "24"
    ],
    answer: 3,
    explanation: "Factor the expression as (x1+x3)(x2+x4) modulo 3. The only pair among 1,2,3,4 whose sum is divisible by 3 is 2 with either 1 or 4, so one of the two opposite-position pairs must contain 2 and one of those values. Choose the opposite pair (2 ways), the value paired with 2 (2), their order (2), and the order of the remaining two numbers (2): 16 permutations.",
    hint: "Factor the expression into sums of opposite entries modulo 3, then count the permutations where one pair sums to 0.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "8",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "14",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "24",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "The parabola y=x^2 and 2012 lines parallel to y=x are drawn. Each line intersects the parabola twice. What is the sum of all x-coordinates of the intersection points?",
    options: [
      "0",
      "1",
      "1006",
      "2012",
      "It depends on the lines"
    ],
    answer: 3,
    explanation: "Each line has form y=x+c. The roots of x^2=x+c sum to 1, so 2012 lines contribute a total of 2012.",
    hint: "Use the sum of roots for each quadratic intersection equation.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "1006",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "2012",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "It depends on the lines",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "Three corners of a die, not all on the same face, have coordinates P(3,4,1), Q(5,2,9), and R(1,6,5). What are the coordinates of the centre of the die?",
    options: [
      "(4,3,5)",
      "(2,5,3)",
      "(3,4,7)",
      "(3,4,5)",
      "(2,3,5)"
    ],
    answer: 0,
    explanation: "The centre is the midpoint of the body diagonal joining opposite vertices P and Q, namely ((3+5)/2,(4+2)/2,(1+9)/2)=(4,3,5).",
    hint: "Identify which listed corners are opposite vertices, then take their midpoint.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "(4,3,5)",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "(2,5,3)",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "(3,4,7)",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "(3,4,5)",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "(2,3,5)",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A sequence begins 1,1,0,1,-1,..., alternating subtraction and addition of the previous two terms. What is the sum of the first 100 terms?",
    options: [
      "0",
      "3",
      "-21",
      "100",
      "-1"
    ],
    answer: 1,
    explanation: "The sequence repeats in a 12-term cycle whose sum is 0. The first 100 terms contain eight full cycles and the first four terms, whose sum is 3.",
    hint: "Generate the 12-term cycle, sum it, then handle the remaining four terms.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "-21",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "100",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "-1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "Gerhard chooses a,b from {1,2,...,26}. Their product equals the sum of the other 24 numbers. What is |a-b|?",
    options: [
      "10",
      "9",
      "7",
      "2",
      "6"
    ],
    answer: 4,
    explanation: "The total of 1 through 26 is 351, so ab=351-a-b and (a+1)(b+1)=352. The factor pair satisfying 1<=a,b<=26 gives |a-b|=6.",
    hint: "Replace ab+a+b by (a+1)(b+1) and factor 352.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "9",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "2",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2012Student: Section[] = [
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

export const edition2012Student: QuestionSet = {
  id: "student-2012",
  year: 2012,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "15 March 2012",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2012/2012_Student.pdf",
  questions: questions2012Student,
  sections: sections2012Student,
};
