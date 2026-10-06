import type { Question, QuestionSet, Section } from "../../../types";

const questions2009Benjamin: Question[] = ([
  {
    number: 1,
    points: 3,
    prompt: "Where is the Kangaroo?",
    options: [
      "In the circle and in the triangle but not in the square.",
      "In the circle and in the square but not in the triangle.",
      "In the triangle and in the square but not in the circle.",
      "In the circle but in neither the square or the triangle.",
      "In the square but in neither the circle or the triangle."
    ],
    answer: 1,
    explanation: "The kangaroo lies inside the circle and inside the square. The triangle's lower side passes above it, so it is outside the triangle; this matches B.",
    hint: "Check the kangaroo against each boundary in the picture: circle, square, and triangle.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-01-diagram.png",
    imageAlt: "Original 2009 Benjamin question 1 visual",
    imageClass: "source-pdf-visual",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "In the circle and in the triangle but not in the square.",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "In the circle and in the square but not in the triangle.",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "In the triangle and in the square but not in the circle.",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "In the circle but in neither the square or the triangle.",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "In the square but in neither the circle or the triangle.",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which of the following numbers is even?",
    options: ["2009", "2 + 0 + 0 + 9", "200 - 9", "200 × 9", "200 + 9"],
    answer: 3,
    explanation: "Only 200 × 9 is even: it equals 1800, which ends in 0. The other choices are odd, so D is correct.",
    hint: "A whole number is even when its last digit is 0, 2, 4, 6, or 8.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "How many natural numbers lie between 2.009 and 23.03?",
    options: ["20", "21", "22", "23", "More than 23"],
    answer: 1,
    explanation: "The natural numbers strictly between 2.009 and 23.03 are 3 through 23. There are 23 − 3 + 1 = 21, so B is correct.",
    hint: "List the whole numbers strictly greater than the lower endpoint and strictly less than the upper endpoint.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "What is the minimum number of digits that must be removed from 12323314 so that the resulting number reads the same from left to right and from right to left?",
    options: ["1", "2", "3", "4", "5"],
    answer: 2,
    explanation: "The digits 1, 2, 3, 2, 1 (in that order) form a palindrome, so at least 5 digits can be kept. No six-digit subsequence reads the same in both directions, so the longest palindrome has length 5 and 8 − 5 = 3 digits must be removed.",
    hint: "Keep the longest possible subsequence of digits that is a palindrome; the rest must be removed.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "There are three boxes: one white, one red, and one green. One contains a chocolate bar, another contains an apple, and one is empty. The chocolate is in either the white or red box, and the apple is in neither the white nor the green box. In which box is the chocolate?",
    options: ["White", "Red", "Green", "Red or green", "It is not possible to answer"],
    answer: 0,
    explanation: "The apple cannot be in the white or green box, so it must be in the red box. The chocolate is in the white or red box but cannot share the red box with the apple, so it is in the white box: A.",
    hint: "Use the apple's possible locations first, then apply the condition about the chocolate.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "How many faces does the object shown, a prism with a hole, have?",
    options: ["3", "5", "6", "8", "12"],
    answer: 3,
    explanation: "There are 3 rectangular outside faces and 3 rectangular faces inside the triangular tunnel. The two triangular ends are also faces, giving 3 + 3 + 2 = 8 faces, or D.",
    hint: "Count every flat face, including the inside surfaces created by the hole.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-06-diagram.png",
    imageAlt: "Prism with a hole shown in the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "The diagram shows squares of different sizes. The side length of the smallest square is 20 cm. How long is the black line?",
    options: ["380 cm", "400 cm", "420 cm", "440 cm", "1680 cm"],
    answer: 2,
    explanation: "Tracing the bold path along the square edges gives 21 side-lengths of the smallest square. Each is 20 cm, so the line is 21 × 20 = 420 cm: C.",
    hint: "Use the side length of the smallest square as a unit and trace the black line in those units.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-07-diagram.png",
    imageAlt: "Different-sized squares and the black line from the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 2
  },
  {
    number: 8,
    points: 3,
    prompt: "The digits are made using sticks as shown. The weight of a number is the number of sticks used to make it. How heavy is the heaviest two-digit number?",
    options: ["10", "11", "12", "13", "14"],
    answer: 4,
    explanation: "The digit 8 uses all 7 sticks shown. No digit uses more, so the heaviest two-digit number is 88, weighing 7 + 7 = 14 sticks: E.",
    hint: "Find the stick count for each digit, then choose the two digits with the greatest combined count.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-08-diagram.png",
    imageAlt: "Stick-built digits from the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 2
  },
  {
    number: 9,
    points: 4,
    prompt: "A bridge is built across a river 120 m wide. One quarter of the bridge extends onto land at the left bank, and another quarter extends onto land at the right bank. How long is the bridge?",
    options: ["150 m", "180 m", "210 m", "240 m", "270 m"],
    answer: 3,
    explanation: "The 120 m river is one half of the bridge, because one quarter extends onto each bank. Thus the full length is 120 ÷ 1/2 = 240 m, choice D.",
    hint: "The 120 m river is the middle half of the bridge; the two land portions together make the other half.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "In a park there are some cats and dogs. The number of cats' feet is double the number of dogs' noses. The number of cats is what fraction of the number of dogs?",
    options: ["Double", "Half", "The same", "A quarter", "A sixth"],
    answer: 1,
    explanation: "If there are C cats and D dogs, the cats' feet number 4C and the dogs' noses number D. Since 4C = 2D, C = D/2: the cats are half as numerous as the dogs, B.",
    hint: "Write the number of cats' feet as four times the cats and the number of dogs' noses as the number of dogs.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Which of the following is made using more than one piece of string?",
    options: ["I, III, IV and V", "III, IV and V", "I, III and V", "All of them", "None of these answers"],
    answer: 2,
    explanation: "Follow each drawn strand continuously. Designs I, III, and V contain disconnected pieces, while II and IV each form one piece, so C is correct.",
    hint: "For each drawing, follow the string continuously and check whether it separates into disconnected pieces.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-11-diagram.png",
    imageAlt: "String designs from the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "A quadrilateral has side lengths AB = 11, BC = 7, CD = 9, and DA = 3. The angles at A and C are right angles. What is its area?",
    options: ["30", "44", "48", "52", "60"],
    answer: 2,
    explanation: "The diagonal divides the quadrilateral into right triangles. Their areas are (11 × 3)/2 = 16.5 and (7 × 9)/2 = 31.5, for a total of 48 square units: C.",
    hint: "Split the quadrilateral along a diagonal into two right triangles and add their areas.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-12-diagram.png",
    imageAlt: "Quadrilateral with labelled side lengths and right angles",
    imageClass: "source-pdf-visual",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "A dance group has 39 boys and 23 girls. Each week 6 more boys and 8 more girls join. After a few weeks, the numbers of boys and girls will be equal. How many boys and girls will there be then?",
    options: ["144", "154", "164", "174", "184"],
    answer: 3,
    explanation: "After w weeks the counts are 39 + 6w boys and 23 + 8w girls. Equality gives 16 = 2w, so w = 8; there are 39 + 6 × 8 = 87 of each, or 174 altogether: D.",
    hint: "Set 39 + 6w equal to 23 + 8w, where w is the number of weeks, then find the group size.",
    sourcePage: 3
  },
  {
    number: 14,
    points: 4,
    prompt: "The tower in the diagram is made of a square, a rectangle, and an equilateral triangle. Each shape has the same perimeter. The square has side length 9 cm. How long is the indicated side of the rectangle?",
    options: ["4 cm", "5 cm", "6 cm", "7 cm", "8 cm"],
    answer: 2,
    explanation: "The square's perimeter is 4 × 9 = 36 cm, so the triangle's equal sides are 12 cm. The rectangle also has perimeter 36 cm; with its 12 cm side, the other side is 18 − 12 = 6 cm: C.",
    hint: "Use the square to find the common perimeter, then compare it with the rectangle's perimeter.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-14-diagram.png",
    imageAlt: "Tower made from a square, rectangle, and equilateral triangle",
    imageClass: "source-pdf-visual",
    sourcePage: 3
  },
  {
    number: 15,
    points: 4,
    prompt: "We want to build a box measuring 40 × 40 × 60 using identical cubes. What is the minimum number of cubes needed?",
    options: ["6", "12", "96", "1200", "96000"],
    answer: 1,
    explanation: "The largest cube side that divides both 40 and 60 is 20. The box then holds 40/20 × 40/20 × 60/20 = 2 × 2 × 3 = 12 cubes, answer B.",
    hint: "To use the fewest identical cubes, make each cube as large as possible while fitting evenly along all three dimensions.",
    sourcePage: 3
  },
  {
    number: 16,
    points: 4,
    prompt: "Today is Sunday. Francis starts reading a 290-page book today. He reads 25 pages on Sundays and 4 pages on every other day. How many days does it take him to read the whole book?",
    options: ["5", "46", "40", "35", "41"],
    answer: 4,
    explanation: "In each full week Francis reads 25 + 6 × 4 = 49 pages. After five weeks he has read 245 pages, leaving 45; the next Sunday and five other days add 25 + 5 × 4 = 45 pages. That is 35 + 6 = 41 days: E.",
    hint: "Count complete seven-day weeks, remembering that each contains one Sunday and six other days.",
    sourcePage: 3
  },
  {
    number: 17,
    points: 5,
    prompt: "Two rectangles measuring 8 × 10 and 9 × 12 overlap. The dark grey area is 37. What is the area of the light grey part?",
    options: ["60", "62", "62.5", "64", "65"],
    answer: 4,
    explanation: "The rectangles have areas 8 × 10 = 80 and 9 × 12 = 108. Their non-overlapping shaded parts differ by 108 − 80 = 28. If the dark part is 37, the light part is 37 + 28 = 65, choice E.",
    hint: "Compare the total areas of the two rectangles with the shaded regions shown in the diagram.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-17-diagram.png",
    imageAlt: "Overlapping rectangles with shaded regions from the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "Eight cards numbered 1 to 8 are placed in boxes A and B so the sums in the boxes are equal. If box A contains exactly 3 cards, which statement must be true?",
    options: ["Three cards in B are odd numbers", "Four cards in B are even numbers", "Card 1 is not in B", "Card 2 is in B", "Card 5 is in B"],
    answer: 3,
    explanation: "Each box must total (1 + 2 + … + 8)/2 = 18. Checking the possible three-card groups that total 18 shows that card 2 is always among the other five cards in box B, so D must be true.",
    hint: "The cards sum to 36, so each box must total 18. Check which three-card groups can make 18.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "Andrea, Branimir, Celestin, and Doris finish a fencing tournament in places 1 to 4. Andrea's, Branimir's, and Doris's places sum to 6, and Branimir's and Celestin's places also sum to 6. Who won, if Branimir placed ahead of Andrea?",
    options: ["Andrea", "Branimir", "Celestin", "Doris", "It cannot be determined"],
    answer: 3,
    explanation: "The places total 1 + 2 + 3 + 4 = 10. Since B + C = 6, their places are 2 and 4; B cannot be 4 because B finished ahead of A, so B = 2 and C = 4. Then A + D = 4, leaving places 1 and 3; A cannot be 1 because B finished ahead of A, so Doris is first: D.",
    hint: "Use the fact that the four places sum to 10, then compare the two given rank sums.",
    sourcePage: 4
  },
  {
    number: 20,
    points: 5,
    prompt: "An object has 6 triangular faces. Each corner is labelled with a number, and two labels are shown in the diagram. The sum of the numbers at the corners of every triangle is the same. What is the sum of all 5 numbers?",
    options: ["9", "12", "17", "18", "24"],
    answer: 2,
    explanation: "The Benjamin answer key lists choice C.",
    hint: "Write the equal-sum equation for each triangular face and use the shared corners to relate the labels.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-20-diagram.png",
    imageAlt: "Solid with six triangular faces and numbered corners",
    imageClass: "source-pdf-visual",
    sourcePage: 4
  },
  {
    number: 21,
    points: 5,
    prompt: "A hotel has 5 floors with 35 rooms on each floor. Room numbers use the floor as the first digit and the room number as the last two digits; for example, 125 is room 25 on floor 1. How many times does the digit 2 appear in all room numbers?",
    options: ["60", "65", "95", "100", "105"],
    answer: 4,
    explanation: "A digit 2 appears 35 times as the floor digit on floor 2. In room numbers 01–35, it appears 10 times in the tens place and 4 times in the ones place on each of 5 floors. Thus 35 + 5 × (10 + 4) = 105, answer E.",
    hint: "Count appearances separately in the floor digit, the tens digit of the room number, and the ones digit.",
    sourcePage: 4
  },
  {
    number: 22,
    points: 5,
    prompt: "ABCD is a square with side length 10 cm, and the distance from N to M is 6 cm. Every unshaded region is either a square or an isosceles triangle. What is the area shaded grey?",
    options: ["42 cm²", "46 cm²", "48 cm²", "52 cm²", "58 cm²"],
    answer: 2,
    explanation: "The Benjamin answer key lists choice C.",
    hint: "Use the square's total area and the dimensions in the diagram to find the areas of the unshaded regions.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-22-diagram.png",
    imageAlt: "Square divided into shaded and unshaded regions",
    imageClass: "source-pdf-visual",
    sourcePage: 4
  },
  {
    number: 23,
    points: 5,
    prompt: "The diagram gives the total of each row and column. What is the value of the question mark?",
    options: ["3", "4", "5", "6", "7"],
    answer: 0,
    explanation: "The row and column totals give 2(square) + curl = 11 and square + 2(curl) = 10. Subtracting shows the square is 4 and the curl is 3; the extra symbol is the curl, so the question mark is 3: A.",
    hint: "Use the row and column totals together to find the missing entries, then determine the question mark.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-23-diagram.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-23-extra.png",
    imageAlt: "Row and column totals diagram with the missing-value expression",
    imageClass: "source-pdf-visual",
    sourcePage: 4
  },
  {
    number: 24,
    points: 5,
    prompt: "Colour each square in the grid with A, B, C, or D so that neighbouring squares have different colours. Squares that share only a corner also count as neighbours. Some squares are already coloured. Which colour can the grey square have?",
    options: ["A", "B", "C", "D", "There are two possibilities"],
    answer: 0,
    explanation: "Every 2-by-2 block has four mutually neighbouring squares, so it must contain A, B, C, and D once each. Starting from the top row, these blocks force the colours downward; in the final 2-by-2 block the square diagonally above-left of the grey square is C and the other two neighbours are B and D, leaving A for the grey square.",
    hint: "List the colours ruled out by every square that touches the grey square, including diagonal neighbours.",
    image: "/assets/kangaroo/grades-5-6/benjamin/2009/questions/q-24-diagram.png",
    imageAlt: "Partly coloured grid with a grey square from the original question",
    imageClass: "source-pdf-visual",
    sourcePage: 4
  }
] satisfies Question[]).map((question): Question => ({
  ...question,
  optionContent: question.options.map((text, index) => ({
    id: `${question.number}-${index}`,
    type: "text",
    text,
    imageAlt: `${String.fromCharCode(65 + index)} option`
  }))
}));

const sections: Section[] = [
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

export const edition2009Benjamin: QuestionSet = {
  id: "benjamin-2009",
  year: 2009,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 23, 2009",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2009/2009_Benjamin.pdf",
  questions: questions2009Benjamin,
  sections,
};

