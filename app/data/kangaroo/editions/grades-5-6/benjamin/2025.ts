import type { Question, QuestionSet, Section } from "../../../types";

const questions2025Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the pieces shown completes the pattern?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the pattern and five candidate pieces are visual.",
    hint: "Compare how the lines and shapes continue across the missing part of the pattern.",
    sourcePage: 2
  },
  {
    number: 2,
    points: 3,
    prompt: "Anna builds a wall from black and grey bricks that shows 2025. What can Bella read on the back of the wall?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the brick lettering and back-view choices are visual.",
    hint: "View the wall from the opposite side; the horizontal order reverses, but the lettering remains attached to its bricks.",
    sourcePage: 2
  },
  {
    number: 3,
    points: 3,
    prompt: "A bookshelf has 17 books on the top row, 15 in the middle and 7 on the bottom. Monika wants equal numbers in all three rows and wants to move as few books as possible. How many must she move from the middle row to the bottom row?",
    options: ["1", "2", "3", "4", "5"],
    answer: 1,
    explanation: "There are 39 books, so each row should have 13. The middle row has 2 too many and the bottom row has 6 too few; move 2 from the middle and 4 from the top.",
    hint: "Find the target number of books per row, then compare each row with that target.",
    sourcePage: 2
  },
  {
    number: 4,
    points: 3,
    prompt: "Equal grey squares are glued onto a cube so that all six surfaces look the same. How many grey squares are used?",
    options: ["14", "15", "16", "18", "30"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement of grey squares on the cube is shown in the source picture.",
    hint: "Count the squares on each face while accounting for squares shared along cube edges.",
    sourcePage: 2
  },
  {
    number: 5,
    points: 3,
    prompt: "Thea rotates a painted hexagon clockwise one space at a time. Which hexagon does she see after the eighth rotation?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the painted hexagon and its rotation choices are visual.",
    hint: "Reduce eight rotations by the hexagon's rotational period and track the direction of the paint pattern.",
    sourcePage: 2
  },
  {
    number: 6,
    points: 3,
    prompt: "A burger menu lists burgers in order of price, but rain washed away some prices. Which price appeared on the board?",
    options: ["€4.10", "€5.50", "€5.60", "€6.30", "€6.60"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the remaining prices and their order are shown in the source menu image.",
    hint: "Use the visible prices and the strictly increasing order to find which proposed value can fit.",
    sourcePage: 2
  },
  {
    number: 7,
    points: 3,
    prompt: "Six children race. Ariadne finishes third; Bill finishes sixth just behind Ernest; Fatima finishes between Ariadne and Ernest; Diana overtakes Charles near the finish. Who wins?",
    options: ["Ariadne", "Charles", "Diana", "Ernest", "Fatima"],
    answer: 2,
    explanation: "Ernest is fifth, Bill sixth and Fatima fourth. Ariadne is third, leaving first and second to Diana and Charles; Diana finishes ahead and wins.",
    hint: "Fill the known places first, then use the overtake to order the two remaining racers.",
    sourcePage: 2
  },
  {
    number: 8,
    points: 3,
    prompt: "A three-part card has numbers on its middle section and holes in its left and right sections. After folding the right section over, holes show 2, 3, 5 and 6. After folding the left section over too, what is the sum of the numbers still visible?",
    options: ["8", "9", "10", "12", "14"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the number grid, holes and fold directions are visual.",
    hint: "Track which middle-section numbers line up with holes after each fold, including holes covered by the second flap.",
    sourcePage: 2
  },
  {
    number: 9,
    points: 4,
    prompt: "Three turtles race over 10 km at constant speeds. When the first finishes, the second has gone one quarter of the distance and the third one fifth. How far is the third turtle from the finish when the second finishes?",
    options: ["1 km", "2 km", "3 km", "4 km", "5 km"],
    answer: 1,
    explanation: "When the first finishes, the second has travelled 2.5 km and the third 2 km. The second needs four times that elapsed time to reach 10 km; the third then travels 8 km and has 2 km left.",
    hint: "Compare the second turtle's speed with its distance at the first turtle's finish, then scale the third turtle's distance by the same time factor.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "Vera builds a tower of numbered cubes. She fills two missing numbers so each cube has a number at least 2 greater than the cube below. How many ways can she fill them?",
    options: ["3", "4", "5", "6", "7"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the fixed cube values and positions of the two missing numbers are visual.",
    hint: "Write the inequalities from bottom to top and count integer pairs satisfying both.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Five wheels of fortune are divided into equal sectors, with dark sectors indicating a win. Which wheel gives Anna the best chance?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the number of sectors and dark sectors on each wheel are visual.",
    hint: "Compare the fraction of dark sectors on each wheel, not just the number of dark sectors.",
    sourcePage: 3
  },
  {
    number: 12,
    points: 4,
    prompt: "Which of five shapes cannot be placed on the large square so that it lies only on white squares?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the coloured square grid and five shapes are visual.",
    hint: "Try each shape in every allowed orientation, checking that every covered cell is white.",
    sourcePage: 3
  },
  {
    number: 13,
    points: 4,
    prompt: "Five swimmers each swim the same distance without stopping. The stopwatch shows cumulative times after each swimmer. Which swimmer was fastest?",
    options: ["The first", "The second", "The third", "The fourth", "The fifth"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the cumulative stopwatch times are shown in the source chart.",
    hint: "Subtract consecutive cumulative times to get each swimmer's individual time, then choose the smallest.",
    sourcePage: 3
  },
  {
    number: 14,
    points: 4,
    prompt: "Jana cuts four equal small squares from the corners of a square sheet. The removed area totals 16 cm² and the remaining cross has area 9 cm². What is the cross's perimeter?",
    options: ["9 cm", "16 cm", "20 cm", "25 cm", "32 cm"],
    answer: 2,
    explanation: "The original square has area 25 cm², so its side is 5 cm. Each removed square has area 4 cm² and side 2 cm. The four corner cuts replace 16 cm of outer boundary with 16 cm of inner boundary, leaving perimeter 20 cm.",
    hint: "Find the original square's side length and the corner-square side length, then compare removed and added boundary lengths.",
    sourcePage: 3
  },
  {
    number: 15,
    points: 4,
    prompt: "Each card has two three-digit numbers, with some digits hidden. On which card do the digits of the two numbers have equal sums?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five cards and hidden digits are visual.",
    hint: "Add the visible digits on each side of a card and use the total equality to determine its hidden digits.",
    sourcePage: 3
  },
  {
    number: 16,
    points: 4,
    prompt: "Squares of equal size form the diagram. B is midway between A and C, and D midway between C and E. Which point must be joined to S by a straight line to divide the figure into equal areas?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the square diagram and points A through S are visual.",
    hint: "Compare the area on each side of a line from S, using the midpoint relationships to split the squares evenly.",
    sourcePage: 3
  },
  {
    number: 17,
    points: 5,
    prompt: "Hassan writes 0 or 1 in each cell of a table so every row, column and diagonal sums to 3. One cell is already 0. What is the sum in the question-mark cells?",
    options: ["1", "2", "3", "4", "It cannot be determined"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the table size, fixed zero and question-mark positions are shown in the source diagram.",
    hint: "Use the required sum of 3 in each row, column and diagonal to determine the marked cells.",
    sourcePage: 4
  },
  {
    number: 18,
    points: 5,
    prompt: "A witch has 10 apples, 9 bananas and 6 pears. She transforms all fruit into different types and ends with 15 apples, 7 bananas and 3 pears. How many apples did she turn into bananas?",
    options: ["3", "4", "5", "6", "7"],
    answer: 4,
    explanation: "All 15 original bananas and pears must change into apples: there are exactly 15 apples at the end, and no original apple can stay an apple. That leaves the 10 original apples to become the 7 final bananas and 3 final pears. So 7 apples became bananas.",
    hint: "Track which original fruits can become the apples at the end, then account for what happens to the original apples.",
    sourcePage: 4
  },
  {
    number: 19,
    points: 5,
    prompt: "A 10 cm square is divided into two equal rectangles by its vertical centre line. What is the area of the grey section shown?",
    options: ["12.5 cm²", "25 cm²", "30 cm²", "40 cm²", "50 cm²"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the grey region within the half-square is shown in the source diagram.",
    hint: "Use the 10 cm square's area and the equal-rectangle division to measure the shaded region.",
    sourcePage: 4
  },
  {
    number: 20,
    points: 5,
    prompt: "Joanna divides the figure into five equal, same-shaped parts, each made of three squares. Which letter is in the part containing the star?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the square figure, star and letter positions are visual.",
    hint: "Partition the figure into congruent three-square pieces while keeping the indicated star in one piece.",
    sourcePage: 4
  },
  {
    number: 21,
    points: 5,
    prompt: "Fabio lies on Tuesdays, Thursdays and Saturdays and tells the truth on other days. Mateo asks what day it is and what day tomorrow will be; Fabio says Saturday and Wednesday. On which day did they talk?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: 3,
    explanation: "On Thursday Fabio lies: today is not Saturday and tomorrow is not Wednesday, so both statements are false, as required.",
    hint: "Test each weekday against whether Fabio must tell the truth or lie, and check both statements together.",
    sourcePage: 4
  },
  {
    number: 22,
    points: 5,
    prompt: "Julio has tiles of five shapes and wants to assemble the pictured shape without overlaps. What is the smallest number of tiles he must use?",
    options: ["11", "12", "13", "15", "17"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the target shape and available tile types are visual.",
    hint: "Compare the target area with each tile's area and test how their boundaries can fit together.",
    sourcePage: 4
  },
  {
    number: 23,
    points: 5,
    prompt: "Tina combines the three pictured building blocks to form a cube. Which of the five cube buildings could she make?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the three blocks and five candidate cube buildings are visual.",
    hint: "Compare the unit-cube shapes and orientations of the pieces with each proposed assembly.",
    sourcePage: 4
  },
  {
    number: 24,
    points: 5,
    prompt: "Zita can buy flowers costing €3, €4 or €5 each. How many different bouquets can she buy for exactly €23?",
    options: ["4", "5", "6", "7", "8"],
    answer: 3,
    explanation: "Count by the number of €5 flowers. With 0 or 1 five-euro flower, there are two ways each to make the remainder using €3 and €4 flowers. With 2, 3 or 4 five-euro flowers, there is one way each. Altogether, 2 + 2 + 1 + 1 + 1 = 7 bouquets.",
    hint: "Fix how many €5 flowers are in the bouquet (from 0 to 4), then count ways to make the remainder using €3 and €4 flowers.",
    sourcePage: 4
  }
];

const sections2025Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2025Benjamin: QuestionSet = {
  id: "benjamin-2025",
  year: 2025,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 20, 2025",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2025/2025_Benjamin.pdf",
  questions: questions2025Benjamin,
  sections: sections2025Benjamin
};