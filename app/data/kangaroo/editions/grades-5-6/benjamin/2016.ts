import type { Question, QuestionSet, Section } from "../../../types";

const questions2016Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the following road signs has the most axes of symmetry?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five road-sign shapes are visual and have not yet been included.",
    hint: "For each sign, count the lines that divide it into two matching mirror halves.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "Mike cuts a pizza into four equal pieces, then cuts each piece into three equal pieces. Into how many equal pieces is the pizza cut?",
    options: ["3", "4", "7", "8", "12"],
    answer: 4,
    explanation: "Each of the four pieces becomes three, giving 4 × 3 = 12 pieces.",
    hint: "Multiply the number of first pieces by the number each is divided into.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "A 10 cm wire is folded so that every part has the same length, then cut at the two marked positions. How long are the three pieces created?",
    options: ["2 cm, 3 cm, 5 cm", "2 cm, 2 cm, 6 cm", "1 cm, 4 cm, 5 cm", "1 cm, 3 cm, 6 cm", "3 cm, 3 cm, 4 cm"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the folds and two marked cut positions are shown only in the source diagram.",
    hint: "Unfold the wire and transfer each cut back to its original position along the 10 cm length.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "Lisa has mounted seven postcards on her fridge with eight strong magnets. What is the maximum number of magnets she can remove without any postcard falling?",
    options: ["2", "3", "4", "5", "6"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the positions of the postcards and magnets are shown in the source picture.",
    hint: "Determine which magnets are essential to support each postcard, then remove only those that support none uniquely.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Kathi draws a square with side length 10 cm and joins the midpoints of its sides to form a smaller square. What is the smaller square's area?",
    options: ["10 cm²", "20 cm²", "25 cm²", "40 cm²", "50 cm²"],
    answer: 4,
    explanation: "The four corner triangles together have half the original square's area, so the midpoint square has 100 ÷ 2 = 50 cm².",
    hint: "The midpoint square and the four corner triangles divide the 10 × 10 square into equal total areas.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "Maria wants a knife to the right of every plate and a fork to its left. To correct the order, she swaps one fork with one knife. What is the minimum number of swaps?",
    options: ["1", "2", "3", "5", "6"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the initial order of the forks, knives and plates is shown only in the source picture.",
    hint: "Each swap should correct two misplaced utensils at once; look for a fork and knife that are both on the wrong sides.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "A centipede owns 25 pairs of shoes and needs one shoe for each of its 100 feet. How many more single shoes must it buy?",
    options: ["15", "20", "35", "50", "75"],
    answer: 3,
    explanation: "The 25 pairs contain 50 shoes. The centipede needs 100, so it must buy 50 more.",
    hint: "Convert the pairs to individual shoes, then subtract from the number of feet.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Four girls sleep with their heads on grey pillows. Bea and Pia are on the left side facing each other; Mary and Karen are on the right side with their backs toward each other. How many girls sleep with their right ear on the pillow?",
    options: ["0", "1", "2", "3", "4"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the girls' positions and facing directions are shown in the room diagram.",
    hint: "For each girl, use her facing direction to identify which side of her head is against the pillow.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "The given net is folded along dotted lines to form an open box, which is placed on a table with the opening at the top. Which side faces the table?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the labelled box net is visual and has not yet been included.",
    hint: "Fold the net into a box and identify which labelled face becomes the bottom when the opening points upward.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "Robert has two equally sized paper squares and glues them together. Which of the following shapes can he not make?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five proposed outlines are visual and have not yet been included.",
    hint: "Any shape made this way must have the area of exactly two equal squares and be obtainable by joining their edges.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Mona, Asma and Nadja work in a nursery. Each weekday exactly two work. Mona works three days and Asma works four days. How many days does Nadja work?",
    options: ["1", "2", "3", "4", "5"],
    answer: 2,
    explanation: "There are 5 × 2 = 10 work assignments. Mona and Asma account for 3 + 4 = 7, leaving 3 for Nadja.",
    hint: "Count the total daily assignments for the week and subtract Mona's and Asma's days.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Five squirrels A, B, C, D and E run at equal speeds to the nearest of six nuts. After collecting one nut, each immediately runs for another. Which squirrel gets a second nut?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the squirrel starting points and nut locations are shown only in the source diagram.",
    hint: "Compare the distances to each nut, then follow the next shortest available route after a nut is collected.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "There are 30 students in a class and every boy shares a desk with a girl. Exactly half the girls share a desk with a boy. How many boys are in the class?",
    options: ["25", "20", "15", "10", "5"],
    answer: 3,
    explanation: "If there are b boys, b girls share with them, and this is half the girls, so there are 2b girls. Thus 3b = 30 and b = 10.",
    hint: "The number of girls sharing with boys equals the number of boys, and it is half of all girls.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "Hansi writes 2581953764 on a strip of paper and cuts it twice between digits, making three numbers that he adds. What is the smallest possible sum?",
    options: ["2675", "2975", "2978", "4217", "4298"],
    answer: 1,
    explanation: "Cutting as 258, 1953 and 764 gives 258 + 1953 + 764 = 2975, the smallest of the possible three-part sums.",
    hint: "Try cut positions that keep the first number short while avoiding unnecessarily large middle or final parts.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "Bart sees a clock in the mirror. What was the mirror image of the clock ten minutes earlier?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the displayed clock and five candidate mirror images are visual.",
    hint: "First work out the clock time ten minutes earlier, then reflect the hands across the vertical mirror line.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "What is the maximum number of the shown pieces that can be cut from a 5 × 5 square?",
    options: ["3", "4", "5", "6", "7"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the shape of the piece and the cutting restrictions are shown in the source picture.",
    hint: "Compare the piece's area with 25 square units, then check how the shape can tile or fit inside the square.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "Tim, Tom and Jim are triplets. Their brother Carl is exactly three years younger. All four have their birthdays today. How old can they be altogether?",
    options: ["53", "54", "56", "59", "60"],
    answer: 0,
    explanation: "The total is 3x + (x - 3) = 4x - 3. The listed value 53 gives x = 14 and Carl age 11, so it is possible.",
    hint: "If each triplet is x, Carl is x - 3; express the total in terms of x.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "Richard writes numbers whose first digit is 1, whose later digits are each at least as large as the previous digit, and whose digit sum is 5. How many such numbers can he write?",
    options: ["4", "5", "6", "7", "8"],
    answer: 1,
    explanation: "The possible nondecreasing digit lists summing to 5 and beginning with 1 are 14, 113, 122, 1112 and 11111. There are five.",
    hint: "After the first digit 1, partition the remaining total 4 into a nondecreasing sequence of digits no smaller than 1.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "Three rectangles are added at corners A, B and D of rectangle ABCD. The original rectangle has perimeter 30 cm, and the three added rectangles have total perimeter 20 cm. What is the thick border's length?",
    options: ["50 cm", "45 cm", "40 cm", "35 cm", "It cannot be calculated"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the placement and shared boundaries of the added rectangles are shown in the source diagram.",
    hint: "Start with the original perimeter and account for each edge that becomes internal when a new rectangle is attached.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "Luigi owns square tables and chairs. Separate tables with four chairs each leave him six chairs short. Joining tables in pairs makes larger tables with six chairs each and leaves four chairs over. How many tables does he own?",
    options: ["8", "10", "12", "14", "16"],
    answer: 1,
    explanation: "If T is the number of tables and C the chairs, 4T - C = 6 and 3T - C = -4. Subtracting gives T = 10.",
    hint: "Write one equation for the separate arrangement and one for the paired arrangement, then compare them.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Clara forms one large triangle from identical small triangles and has already assembled the shape shown. What is the minimum number of small triangles she must add?",
    options: ["5", "9", "12", "15", "19"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the partial triangle and its dimensions are shown only in the source diagram.",
    hint: "Determine the side length of the completed large triangle, count its total unit triangles, then subtract the ones already present.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "Kirsten has written numbers in five of the ten circles of a pentagon. She fills the rest so that each side has the same sum. Which number belongs in the circle marked X?",
    options: ["7", "8", "11", "13", "15"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the five given circle values and the position of X are shown in the source diagram.",
    hint: "Write an equation for each side sum and compare sides that share a circle.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "The symbols ○, □ and ♢ are different digits. The digits of ○□○ sum to □♢, and the digits of □♢ sum to □. Which digit does ○ represent?",
    options: ["4", "5", "6", "8", "9"],
    answer: 2,
    explanation: "NEEDS_REVIEW: verify the source symbols and their place-value interpretation before confirming C.",
    hint: "Translate each statement into an equation using the tens and units digits of the two-digit result.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "Two three-digit numbers use six different digits. The first digit of the second number is twice the last digit of the first. What is the smallest possible sum?",
    options: ["301", "535", "537", "546", "552"],
    answer: 2,
    explanation: "NEEDS_REVIEW: enumeration gives 537 (102 + 435), but the final answer-key cell was not legible in the scan.",
    hint: "Minimise place values from left to right while keeping all six digits different and satisfying the doubled-digit condition.",
    sourcePage: 3
  }
];

const sections2016Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2016Benjamin: QuestionSet = {
  id: "benjamin-2016",
  year: 2016,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 17, 2016",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Benjamin.pdf",
  questions: questions2016Benjamin,
  sections: sections2016Benjamin
};