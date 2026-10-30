import type { Question, QuestionSet, Section } from "../../../types";

const questions2016Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Tom and Johann's ages sum to 23, Johann and Alex's to 24, and Alex and Tom's to 25. How old is the oldest?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    answer: 3,
    explanation: "Adding the three equations gives a total age of 36. Tom is 12, Johann 11, and Alex 13, so the oldest is 13.",
    hint: "Add the pairwise sums to find the total of all three ages.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Evaluate 1/10+1/100+1/1000.",
    options: [
      "3/111",
      "111/1110",
      "111/1000",
      "3/1000",
      "3/1110"
    ],
    answer: 2,
    explanation: "Using a common denominator gives 100/1000+10/1000+1/1000=111/1000.",
    hint: "Write all three fractions with denominator 1000.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "3/111",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "111/1110",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "111/1000",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "3/1000",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "3/1110",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "A river has the property that the shortest bridge from each point on one shore to the other shore always has the same length. Which pictured river cannot have this property?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the five river shapes are needed to determine which violates constant shore-to-shore distance.",
    hint: "The distance between the two shores must be constant along their entire length.",
    sourcePage: 1,
    imageExtra: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-03-extra.png",
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
    prompt: "How many whole numbers are greater than 2015x2017 and less than 2016x2016?",
    options: [
      "0",
      "1",
      "2015",
      "2016",
      "2017"
    ],
    answer: 0,
    explanation: "2016^2=2015x2017+1, so there is no integer strictly between them.",
    hint: "Expand both products and compare their difference.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "0",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "2015",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "2016",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "2017",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A scatter diagram shows a kangaroo. If the x- and y-coordinates of every point are swapped, what does the resulting picture look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: reflect the source point plot across y=x and compare the five candidate images.",
    hint: "Swapping coordinates reflects the entire plot in the line y=x.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-05.png",
    imageExtra: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "What is the minimum number of planes needed to bound a region in three-dimensional space?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "A tetrahedron is a bounded region enclosed by four planes; fewer planes cannot enclose a finite volume.",
    hint: "Recall the number of faces of the simplest polyhedron.",
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
        text: "7",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Numbers are placed in circles so each of eight small triangles has the same corner-sum. What is the maximum number of different numbers that can be used?",
    options: [
      "1",
      "2",
      "3",
      "5",
      "8"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: solve the equal-sum constraints using the source circle diagram.",
    hint: "Subtract equations for adjacent triangles to find which vertex values must agree.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "5",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "The pictured rectangles S1 and S2 have equal area. What is the ratio x:y?",
    options: [
      "1:1",
      "3:2",
      "4:3",
      "7:4",
      "8:5"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the rectangle dimensions and marked lengths are in the source image.",
    hint: "Set the two rectangle area expressions equal and solve for x:y.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "1:1",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "3:2",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "4:3",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "7:4",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "8:5",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "If x^2-4x+2=0, what is x+2/x?",
    options: [
      "-4",
      "-2",
      "0",
      "2",
      "4"
    ],
    answer: 4,
    explanation: "Divide the equation by nonzero x to obtain x-4+2/x=0, hence x+2/x=4.",
    hint: "Divide the quadratic equation by x.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "-4",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "-2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "0",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "2",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "A circle has centre O and a tangent at P. Arcs AP and BP have lengths 20 and 16. What is angle AXP?",
    options: [
      "30 degrees",
      "24 degrees",
      "18 degrees",
      "15 degrees",
      "10 degrees"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the positions of A, B, X, and P are specified by the source circle diagram.",
    hint: "Convert arc lengths to central angles and use the tangent-chord angle theorem.",
    sourcePage: 2,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "30 degrees",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "24 degrees",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "18 degrees",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "15 degrees",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "10 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Positive integers satisfy a+2=b-2=2c=d/2. Which of a,b,c,d is largest?",
    options: [
      "a",
      "b",
      "c",
      "d",
      "It is not uniquely defined"
    ],
    answer: 3,
    explanation: "Let the common value be t. Then a=t-2, b=t+2, c=t/2, and d=2t; d is largest for positive permitted t.",
    hint: "Express all four numbers in terms of the common value.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "a",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "b",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "c",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "d",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "It is not uniquely defined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "In a number pyramid, each cell is the product of the two cells directly below. Which number cannot be at the top if the bottom row contains natural numbers greater than 1?",
    options: [
      "56",
      "84",
      "90",
      "105",
      "220"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: factor each candidate according to the pyramid's bottom-row exponent pattern to verify the keyed choice D.",
    hint: "For bottom entries a,b,c,d, the top is a*b^3*c^3*d.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "56",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "84",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "90",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "105",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "220",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Define x1=2 and x(n+1)=x(n)^n for n>=1. What is x4?",
    options: [
      "2^2",
      "2^3",
      "2^11",
      "2^16",
      "2^768"
    ],
    answer: 2,
    explanation: "The exponents evolve as 1,1,2,6, so x4=2^6; NEEDS_REVIEW: verify the recurrence's indexing and the printed answer options.",
    hint: "Write each term as a power of 2 and track the exponent recursively.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "2^2",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2^3",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "2^11",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "2^16",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "2^768",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "In rectangle ABCD, BC is half the diagonal AC. X is the point on CD with AX=XC. What is angle CAX?",
    options: [
      "12.5 degrees",
      "15 degrees",
      "27.5 degrees",
      "42.5 degrees",
      "Another angle"
    ],
    answer: 4,
    explanation: "Let BC=1. Since it is half the diagonal, AB=√3. Put A=(0,√3), B=(0,0), C=(1,0), and X=(1,t). The condition AX=XC=t gives 1+(√3−t)²=t², so t=2/√3. The rays AC and AX are at 60° and 30° below the horizontal, respectively, hence ∠CAX=30°.",
    hint: "Use coordinates so the rectangle's diagonal condition fixes the side ratio, then use AX=XC to find X.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "12.5 degrees",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "15 degrees",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "27.5 degrees",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "42.5 degrees",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Another angle",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "A rectangle of area 2016 is cut into 56 identical squares. Its side lengths and the square side length are whole numbers. How many different rectangles are possible?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "0"
    ],
    answer: 1,
    explanation: "If each square has side s, the rectangle's area is 56s²=2016, so s=6. The rectangle's side lengths are 6u and 6v with uv=56. Up to rotation, the factor pairs are (1,56), (2,28), (4,14), and (7,8), giving four rectangles.",
    hint: "Use the total area to find the square's side, then count unordered factor pairs of 56.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "0",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 16,
    points: 4,
    prompt: "The pictured square has perimeter 4. What is the perimeter of the equilateral triangle?",
    options: [
      "4",
      "3+sqrt(3)",
      "3",
      "3+sqrt(2)",
      "4+sqrt(3)"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the relative placement of the square and triangle is required from the source image.",
    hint: "Use the unit square side and the equilateral triangle's shared segment geometry.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "3+sqrt(3)",
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
        text: "3+sqrt(2)",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "4+sqrt(3)",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-16.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Seven people around a bonfire are each knights or liars. Each says, 'I am sitting between two liars.' How many liars are there?",
    options: [
      "3",
      "4",
      "5",
      "6",
      "More information is needed"
    ],
    answer: 1,
    explanation: "Every knight must have two liar neighbours, so knights cannot be adjacent. A liar's statement is false, so each liar must have at least one knight neighbour. Around seven seats, these rules force three knights and four liars.",
    hint: "Turn the truth of the sentence into neighbour rules for knights and liars, then consider the possible runs around the circle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "5",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "6",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "More information is needed",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Three three-digit numbers use the digits 1 through 9 exactly once. Which total cannot be their sum?",
    options: [
      "1500",
      "1503",
      "1512",
      "1521",
      "1575"
    ],
    answer: 0,
    explanation: "The sum is congruent to the sum of the digits, 45, modulo 9, so it must be divisible by 9. 1500 is not.",
    hint: "Use that the digits sum to 45 and check the candidate totals modulo 9.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "1500",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "1503",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "1512",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "1521",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "1575",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Ten points are labelled 0, 1, or 2. Each white triangle's vertex sum is divisible by 3, while each black triangle's sum is not. Three labels are shown. Which values can label the inner point?",
    options: [
      "Only 0",
      "Only 1",
      "Only 2",
      "Only 0 and 1",
      "0, 1, or 2"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the triangle colours and three given point labels are essential to solve the modular constraints.",
    hint: "Treat labels modulo 3 and write one congruence for each white and black triangle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "Only 0",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "Only 1",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "Only 2",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "Only 0 and 1",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "0, 1, or 2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "Five points A-E lie on a circle and a tangent is drawn at A. The five marked angles x are equal. What is angle ABD?",
    options: [
      "66 degrees",
      "70.5 degrees",
      "72 degrees",
      "75 degrees",
      "77.5 degrees"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the cyclic point order and marked equal angles must be read from the source diagram.",
    hint: "Use the tangent-chord theorem and the equal inscribed angles around the circle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "66 degrees",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "70.5 degrees",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "72 degrees",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "75 degrees",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "77.5 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "How many distinct real solutions does (x^2-4x+5)^(x^2+x-30)=1 have?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "The base is (x−2)²+1, so it is positive and equals 1 only at x=2. The exponent (x+6)(x−5) is zero at x=−6 and x=5. Each of these three values makes the expression 1, and no others do.",
    hint: "The base is always at least 1. Find where it equals 1 and where the exponent is zero.",
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
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "Infinitely many",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 22,
    points: 5,
    prompt: "A tangential quadrilateral has perimeter to incircle circumference ratio 4:3. What is its area to circle area ratio?",
    options: [
      "4:pi",
      "3sqrt(2):pi",
      "16:9",
      "pi:3",
      "4:3"
    ],
    answer: 4,
    explanation: "If the inradius is r and the quadrilateral's perimeter is P, its area is rP/2. Dividing by the circle's area πr² gives P/(2πr), exactly the perimeter-to-circumference ratio. So the area ratio is 4:3, choice E.",
    hint: "Write the quadrilateral's area as inradius times semiperimeter, then divide by πr².",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "4:pi",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "3sqrt(2):pi",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "16:9",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "pi:3",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "4:3",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "How many quadratic functions y=ax^2+bx+c with a nonzero have graphs passing through at least three of the marked points?",
    options: [
      "6",
      "15",
      "19",
      "22",
      "27"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: count the qualifying triples from the source point diagram and account for duplicates.",
    hint: "A quadratic is determined by three points with distinct x-coordinates; test each triple.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "19",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "22",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "27",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "In a right triangle, the acute-angle bisectors meet at P. The distance from P to the hypotenuse is sqrt(8). What is the distance from P to the right-angle vertex?",
    options: [
      "8",
      "3",
      "sqrt(10)",
      "sqrt(12)",
      "4"
    ],
    answer: 4,
    explanation: "P is the incenter, so its perpendicular distance to each leg is also √8. From the right-angle vertex, P therefore forms a right triangle with both legs √8. Its distance to the vertex is √(8+8)=4.",
    hint: "Use the incenter's equal distances to both perpendicular legs to form a right triangle from P to the right-angle vertex.",
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
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "sqrt(10)",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "sqrt(12)",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "4",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "The equations x^2+ax+b=0 and x^2+bx+a=0 both have real roots. The sums of the squares of the roots are equal and a!=b. What is a+b?",
    options: [
      "0",
      "-2",
      "4",
      "-4",
      "It is not uniquely determined"
    ],
    answer: 1,
    explanation: "For x²+ax+b=0, the sum of the squared roots is a²−2b; for the second equation it is b²−2a. Equating these gives (a−b)(a+b+2)=0. Since a≠b, a+b=−2.",
    hint: "Express each roots' squared sum using the sum and product of the roots, then factor the equality.",
    sourcePage: 3,
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
        text: "-2",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "4",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "-4",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "It is not uniquely determined",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 26,
    points: 5,
    prompt: "A point inside a cube divides it into six pyramids, one for each face. Five pyramid volumes are 2, 5, 10, 11, and 14. What is the sixth volume?",
    options: [
      "1",
      "4",
      "6",
      "9",
      "12"
    ],
    answer: 2,
    explanation: "Opposite-face pyramids have volumes summing to half the cube volume. The three opposite-pair sums are equal; pairing the given volumes forces the missing volume to be 4.",
    hint: "Volumes for opposite faces sum to half the cube's volume, so the three opposite-pair sums are equal.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A 5 cm by 50 cm strip is folded so B meets midpoint M of CD, then D meets midpoint N of AB. What is the area of the visible white part?",
    options: [
      "50 cm^2",
      "60 cm^2",
      "62.5 cm^2",
      "100 cm^2",
      "125 cm^2"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the two folds and visible paper faces must be inspected in the source diagram.",
    hint: "Use the fold lines as perpendicular bisectors to calculate the covered regions.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "50 cm^2",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "60 cm^2",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "62.5 cm^2",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "100 cm^2",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "125 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "For positive integer n, a prime p divides 1+2+...+n but divides none of the summands. Which value could n+p be?",
    options: [
      "217",
      "221",
      "229",
      "245",
      "269"
    ],
    answer: 0,
    explanation: "Since p divides none of 1,…,n, p>n. The triangular sum is n(n+1)/2; as p is odd, it must divide n or n+1. It cannot divide n, so n+1=p and n+p=2p−1. Among the choices, 217=2·109−1, and 109 is prime.",
    hint: "Factor the triangular sum and use p>n to determine which of n and n+1 is divisible by p.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "217",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "221",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "229",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "245",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "269",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "On a 5x5 grid, one move flips three consecutive cells in a row or column. What is the minimum number of moves to make the shown checkerboard pattern?",
    options: [
      "Less than 10",
      "10",
      "12",
      "More than 12",
      "Impossible"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: verify target parity constraints and minimum move count from the source pattern.",
    hint: "Model the operations modulo 2 and derive lower bounds from row and column parities.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "Less than 10",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "More than 12",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "Impossible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2016/questions/editor-q-29.png"
  },
  {
    number: 30,
    points: 5,
    prompt: "A positive integer N has exactly six positive divisors. The product of five of them is 648. Which number is the sixth divisor?",
    options: [
      "4",
      "8",
      "9",
      "12",
      "24"
    ],
    answer: 2,
    explanation: "The product of all six divisors is N³. If d is omitted, N³=648d. Taking d=9 gives 648·9=5832=18³; 18 has divisors 1, 2, 3, 6, 9, and 18, whose product excluding 9 is 648.",
    hint: "Use the fact that the product of all six divisors is N³, then test which choice makes 648 times the missing divisor a cube.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "9",
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
        text: "24",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2016Student: Section[] = [
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

export const edition2016Student: QuestionSet = {
  id: "student-2016",
  year: 2016,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "17 March 2016",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Student.pdf",
  questions: questions2016Student,
  sections: sections2016Student,
};
