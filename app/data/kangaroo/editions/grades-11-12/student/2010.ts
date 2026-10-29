import type { Question, QuestionSet, Section } from "../../../types";

const questions2010Student: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "The picture illustrates 1+3+5+7=4x4. What is 1+3+5+7+...+17+19?",
    options: [
      "10x10",
      "11x11",
      "12x12",
      "13x13",
      "14x14"
    ],
    answer: 0,
    explanation: "There are ten odd numbers from 1 through 19, and the sum of the first ten odd numbers is 10^2.",
    hint: "Use the identity that the sum of the first n odd numbers is n^2.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-01.png",
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "10x10",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "11x11",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "12x12",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "13x13",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "14x14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "What number belongs in the missing cell if the sums of the two rows are equal? The top row contains 1 through 10 and 2010; the bottom row contains 11 through 20 and the missing number.",
    options: [
      "1010",
      "1020",
      "1910",
      "1990",
      "2000"
    ],
    answer: 2,
    explanation: "The top row sums to 2065. The known bottom-row entries sum to 155, so the missing number is 1910.",
    hint: "Find the top-row total, then subtract the known bottom-row total.",
    sourcePage: 1,
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1010",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "1020",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "1910",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "1990",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "2000",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-02.png"
  },
  {
    number: 3,
    points: 3,
    prompt: "Two empty containers are cubic, with base areas 1 dm^2 and 4 dm^2. Using the small container as a scoop, how many full scoops are needed to fill the large cube?",
    options: [
      "2",
      "4",
      "6",
      "8",
      "16"
    ],
    answer: 3,
    explanation: "The cube side lengths are 1 dm and 2 dm, so their volumes are 1 dm^3 and 8 dm^3. Eight full scoops are needed.",
    hint: "For a cube, the side length is the square root of the base area; then compare volumes.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "8",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "How many four-digit numbers made only of odd digits are divisible by 5?",
    options: [
      "900",
      "625",
      "250",
      "125",
      "100"
    ],
    answer: 3,
    explanation: "The last digit must be 5. Each of the other three positions has five choices, giving 5^3=125.",
    hint: "A number divisible by 5 must end in 5 because only odd digits are allowed.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "900",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "625",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "250",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "125",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "100",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A managing director claims every employee is at least 25 years old, but the claim is false. Which statement must be correct?",
    options: [
      "All employees are exactly 25",
      "All employees are older than 26",
      "No employee is 25",
      "At least one employee is younger than 25",
      "At least one employee is exactly 26"
    ],
    answer: 3,
    explanation: "The negation of 'every employee is at least 25' is that some employee is younger than 25.",
    hint: "Translate the negation of a statement beginning with 'every'.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "All employees are exactly 25",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "All employees are older than 26",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "No employee is 25",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "At least one employee is younger than 25",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "At least one employee is exactly 26",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 3,
    prompt: "There are seven blocks in the pictured arrangement. What is the minimum number of blocks that must be moved to make room for one more block?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "It is not possible"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the initial arrangement and meaning of making room are given by the source illustration.",
    hint: "Look for a rearrangement that clears one position while preserving the intended stack arrangement.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "3",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "4",
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
        text: "It is not possible",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-06.png"
  },
  {
    number: 7,
    points: 3,
    prompt: "Triangle ABC is right-angled at C, and M is the midpoint of hypotenuse AB. What is angle BMC?",
    options: [
      "105 degrees",
      "108 degrees",
      "110 degrees",
      "120 degrees",
      "125 degrees"
    ],
    answer: 3,
    explanation: "Since M is the circumcentre, MA=MB=MC. The angle BMC is twice angle BAC and can be 120 degrees for the shown triangle; NEEDS_REVIEW: the source figure's shape is needed to determine it.",
    hint: "The midpoint of the hypotenuse is equidistant from all three vertices; inspect the source's other angle information.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "105 degrees",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "108 degrees",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "110 degrees",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "120 degrees",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "125 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 3,
    prompt: "Which of the following numbers could be the number of edges of a prism?",
    options: [
      "100",
      "200",
      "2008",
      "2009",
      "2010"
    ],
    answer: 4,
    explanation: "An n-sided prism has 3n edges. Since 2010 is divisible by 3, it can be the edge count of a 670-sided prism.",
    hint: "A prism with an n-sided base has n edges on each base and n joining edges.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "100",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "200",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "2008",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "2009",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "2010",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 3,
    prompt: "How many two-digit numbers with tens digit x and units digit y satisfy (x-3)^2+(y-2)^2=0?",
    options: [
      "1",
      "2",
      "6",
      "32",
      "None"
    ],
    answer: 0,
    explanation: "A sum of two squares is zero only if both are zero, so x=3 and y=2. There is one number.",
    hint: "Each squared term is nonnegative, so both must equal zero.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "32",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "None",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "In the diagram the square has side length 2. Four semicircles pass through its centre and have centres at the square's corners. Grey circles have centres on the square's sides and touch the semicircles. What is the total area of the grey parts?",
    options: [
      "4(3-2sqrt(2))pi",
      "2pi",
      "3pi/4",
      "pi",
      "pi/4"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: identify the exact shaded circles and their tangencies from the source diagram before confirming the area.",
    hint: "Use the square symmetry to find a grey circle's radius, then count the congruent shaded parts.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "4(3-2sqrt(2))pi",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "2pi",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "3pi/4",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "pi",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "pi/4",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "The numbers 7^(3/9), 7^(6/9), and 7^(?) are consecutive terms of a geometric sequence. Determine the next term.",
    options: [
      "7^(3/9)",
      "7^(6/9)",
      "7^(5/9)",
      "7^(10/9)",
      "1"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the superscripts and choices are garbled in text extraction; verify directly from the source page.",
    hint: "For a geometric sequence, successive exponents differ by the same amount when all terms are powers of 7.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "7^(3/9)",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "7^(6/9)",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "7^(5/9)",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "7^(10/9)",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "1",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 4,
    prompt: "A chord AB of length 16 is tangent to the smaller of two concentric circles. What is the area of the grey annulus?",
    options: [
      "32pi",
      "63pi",
      "64pi",
      "32pi^2",
      "It depends on the radii"
    ],
    answer: 2,
    explanation: "The annulus area is pi(R^2-r^2). The chord tangent to the inner circle has half-length 8, so R^2-r^2=8^2=64 and the area is 64pi.",
    hint: "Use a right triangle from the common centre to the chord midpoint and compare the squared radii.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "32pi",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "63pi",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "64pi",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "32pi^2",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "It depends on the radii",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-12.png"
  },
  {
    number: 13,
    points: 4,
    prompt: "Integers x and y satisfy 2x=5y. Which number could be x+y?",
    options: [
      "2011",
      "2010",
      "2009",
      "2008",
      "2007"
    ],
    answer: 2,
    explanation: "The coprime relation implies x=5k and y=2k, so x+y=7k. Of the options, 2009 is divisible by 7.",
    hint: "Express x and y as integer multiples of 5 and 2, respectively.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "2011",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "2010",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "2009",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "2008",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "2007",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "A large equilateral triangle consists of 36 small equilateral triangles of area 1 cm^2 each. What is the area of triangle ABC?",
    options: [
      "11 cm^2",
      "12 cm^2",
      "13 cm^2",
      "14 cm^2",
      "15 cm^2"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the vertices of triangle ABC must be read from the source diagram to count its area.",
    hint: "Use the triangular grid and count complete and fractional unit triangles inside ABC.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "11 cm^2",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "12 cm^2",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "13 cm^2",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "14 cm^2",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "15 cm^2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-14.png"
  },
  {
    number: 15,
    points: 4,
    prompt: "A bag contains blue, green, and red balls, with at least one of each colour. If five balls are drawn, it is certain that at least two are red and at least three have the same colour. How many blue balls are in the bag?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "It cannot be answered"
    ],
    answer: 0,
    explanation: "If there were more than 3 non-red balls, five could be drawn with fewer than two red, so blue plus green is at most 3. If their counts were 1 and 2, and there were at least 2 red (there must be at least 5 balls total), one could draw two red, two of the colour occurring twice, and one of the other colour, with no triple. Thus blue and green must each occur once, so there is 1 blue ball.",
    hint: "Use the guarantee of two red balls to bound blue plus green, then test whether a five-ball draw could avoid a triple.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "4",
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
    prompt: "Which graph represents the solution set of (x-|x|)^2+(y-|y|)^2=4?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five graph choices are essential to map the answer key to the displayed solution set.",
    hint: "Evaluate x-|x| separately for x>=0 and x<0, and do the same for y.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    imageExtra: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-16-extra.png"
  },
  {
    number: 17,
    points: 4,
    prompt: "Three vertices of a regular 14-sided polygon are joined to form a triangle. How many such triangles are right-angled?",
    options: [
      "42",
      "84",
      "88",
      "98",
      "168"
    ],
    answer: 1,
    explanation: "A right angle subtends a diameter. There are 7 diameters and 12 choices for the third vertex on the remaining vertices, giving 84 triangles.",
    hint: "Use Thales' theorem: the hypotenuse must be a diameter of the circumcircle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "42",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "84",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "88",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "98",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "168",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 18,
    points: 4,
    prompt: "Each star in 1*2*3*4*5*6*7*8*9*10 is replaced by + or x. Let N be the largest value obtainable. What is the smallest prime factor of N?",
    options: [
      "2",
      "3",
      "5",
      "7",
      "Another number"
    ],
    answer: 4,
    explanation: "The largest value is 1+2×3×…×10=1+10!=3,628,801; breaking any later product with a plus makes it smaller. This number is odd, its digit sum is 37, and it does not end in 0 or 5, so it is divisible by none of 2, 3, or 5. Since 10!≡−1 (mod 11), N=10!+1 is divisible by 11, making 11 its smallest prime factor.",
    hint: "Compare a sum break with multiplying the products on either side; then test small primes and use 10! modulo 11.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "3",
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
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "Another number",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "A triangle has natural-number side lengths 13, x, and y, with xy=105. What is its perimeter?",
    options: [
      "35",
      "39",
      "51",
      "69",
      "119"
    ],
    answer: 0,
    explanation: "The factor pair x,y=7,15 forms a triangle with sides 7,13,15 and perimeter 35; the other factor pairs either give the same perimeter or fail the triangle inequality.",
    hint: "Check the factor pairs of 105 against the triangle inequality.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "35",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "39",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "51",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "69",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "119",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 20,
    points: 4,
    prompt: "A paper strip is folded three times as shown. If alpha=70 degrees, determine beta.",
    options: [
      "140 degrees",
      "130 degrees",
      "120 degrees",
      "110 degrees",
      "100 degrees"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the fold directions in the source figure determine the angle relations.",
    hint: "Track how each fold reflects the adjacent paper angle.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "140 degrees",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "130 degrees",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "120 degrees",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "110 degrees",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "100 degrees",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-20.png"
  },
  {
    number: 21,
    points: 5,
    prompt: "Lines parallel to the base of the pictured triangle divide its other two sides into 10 equal parts. What percentage of the triangle is grey?",
    options: [
      "42.5%",
      "45%",
      "46%",
      "47.5%",
      "50%"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the alternating grey bands shown in the diagram are needed to sum their areas.",
    hint: "Use similar-triangle area ratios to calculate the area of each horizontal strip.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "42.5%",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "45%",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "46%",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "47.5%",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "50%",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "In a race of 100 people with no ties, everyone reports a place from 1 to 100. The sum of all reports is 4000. What is the minimum number of people who lied?",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    answer: 3,
    explanation: "The true places sum to 5050, so the reports reduce the total by 1050. With 11 liars, the largest possible reduction is at most (90+…+100)−11=1034, which is too small. Twelve can suffice: the 12 highest places sum to 1134, and those racers can report numbers totaling 84, reducing the sum by 1050. Thus the minimum is 12.",
    hint: "To maximize the reduction from k lies, start with the k highest true places and have them report the smallest values.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "11",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "13",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "An ordinary die is rolled three times. What is the probability that at least one roll is 2, given that the third number equals the sum of the first two?",
    options: [
      "1/6",
      "91/216",
      "1/2",
      "8/15",
      "7/12"
    ],
    answer: 3,
    explanation: "The first two rolls must sum to at most 6, giving 5+4+3+2+1=15 equally likely ordered pairs. Seven have a 2 among the first two; the pair (1,1), which makes the third roll 2, adds one more. Hence 8 of the 15 possible triples contain a 2, so the probability is 8/15.",
    hint: "Count the ordered first-two-roll pairs whose sum is at most 6, then count how many yield a 2 on any roll.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "1/6",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "91/216",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "1/2",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "8/15",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "7/12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A barcode has alternating black and white stripes, begins and ends with black, each stripe has width 1 or 2, and the total width is 12. How many different barcodes can be read from left to right?",
    options: [
      "24",
      "132",
      "66",
      "12",
      "116"
    ],
    answer: 4,
    explanation: "If t stripes have width 2, the remaining 12−2t have width 1, so the total number of stripes is 12−t. It must be odd for the barcode to begin and end with black, hence t=1, 3, or 5. The counts are respectively C(11,1)=11, C(9,3)=84, and C(7,5)=21, totaling 116.",
    hint: "Let t be the number of width-2 stripes. The total stripe count must be odd; count the placements for each possible t.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "132",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "66",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "116",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-24.png"
  },
  {
    number: 25,
    points: 5,
    prompt: "In the pictured tile pattern, large tiles have side length a and small tiles have side length b. The horizontal and tilted dotted lines form a 30-degree angle. What is a:b?",
    options: [
      "(2sqrt(3)):1",
      "(2+sqrt(3)):1",
      "(sqrt(3)+2):1",
      "(sqrt(3)*2):1",
      "2:1"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the tile layout and the source's exact option formulas require visual confirmation.",
    hint: "Use the 30-degree geometry to relate the projected lengths of the large and small tiles.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "(2sqrt(3)):1",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "(2+sqrt(3)):1",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "(sqrt(3)+2):1",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "(sqrt(3)*2):1",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "2:1",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-11-12/student/2010/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "The numbers 1 to 10 are written 10 times each. Repeatedly remove two numbers and replace them by their sum minus 1 until one number remains. What is the final number?",
    options: [
      "Less than 440",
      "451",
      "460",
      "488",
      "Greater than 500"
    ],
    answer: 1,
    explanation: "The initial sum is 10(1+...+10)=550. Each of the 99 operations reduces the total by 1, leaving 451.",
    hint: "Track how each operation changes the sum of all numbers on the board.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "Less than 440",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "451",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "460",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "488",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "Greater than 500",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "The expression shown in the source is equal to which of the following?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the nested powers and fractions in the printed expression were not reliably recovered from PDF text.",
    hint: "Rewrite the repeated factors using common powers before simplifying.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 28,
    points: 5,
    prompt: "The decimal number shown is formed from a repeated pattern of digits. What is its 100th digit after the decimal point?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the repeated decimal pattern is garbled in text extraction and must be read from the source page.",
    hint: "Identify the repeating block length and reduce position 100 modulo that length.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "6",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 29,
    points: 5,
    prompt: "A function maps positive real numbers to real numbers and satisfies 2f(x)+3f(2010/x)=5x for all positive x. Determine f(6).",
    options: [
      "993",
      "1",
      "2009",
      "1013",
      "923"
    ],
    answer: 0,
    explanation: "Use x=6 and x=335 to form two linear equations: 2f(6)+3f(335)=30 and 3f(6)+2f(335)=1675. Solving gives f(6)=993.",
    hint: "Write the equation once for x=6 and once for x=2010/6, then solve the pair.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "993",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "1",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "2009",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "1013",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "923",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "In a right triangle with legs a and b, points P and Q lie on the two legs. K and H are the feet of perpendiculars from P and Q to the hypotenuse. What is the minimum possible value of KP+PQ+QH?",
    options: [
      "a+b",
      "2ab/(a+b)",
      "2ab/sqrt(a^2+b^2)",
      "(a+b)^2/(a^2+b^2)",
      "2ab/(a^2+b^2)"
    ],
    answer: 2,
    explanation: "Put the right-angle vertex at the origin, with P=(p,0), Q=(0,q), and hypotenuse length c=√(a²+b²). The perpendicular distances are KP=b(a−p)/c and QH=a(b−q)/c, so KP+PQ+QH=2ab/c+√(p²+q²)−(bp+aq)/c. By Cauchy–Schwarz, bp+aq≤c√(p²+q²), giving a lower bound 2ab/c. Equality is possible when (p,q) is proportional to (b,a), so the minimum is 2ab/√(a²+b²), choice C.",
    hint: "Use coordinates on the two legs to express KP and QH, then apply Cauchy–Schwarz to the remaining terms.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "a+b",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "2ab/(a+b)",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "2ab/sqrt(a^2+b^2)",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "(a+b)^2/(a^2+b^2)",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "2ab/(a^2+b^2)",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2010Student: Section[] = [
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

export const edition2010Student: QuestionSet = {
  id: "student-2010",
  year: 2010,
  group: "Student",
  grades: "Grades 11-12",
  location: "Austria",
  date: "18 March 2010",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2010/2010_Student.pdf",
  questions: questions2010Student,
  sections: sections2010Student,
};
