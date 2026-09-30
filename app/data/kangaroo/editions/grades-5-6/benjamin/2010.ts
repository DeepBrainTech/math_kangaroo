import type { Question, QuestionSet, Section } from "../../../types";

const questions2010Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Given that ▲ + ▲ + 6 = ▲ + ▲ + ▲ + ▲, which number should replace ▲?",
    options: ["2", "3", "4", "5", "6"],
    answer: 1,
    explanation: "If ▲ is x, then 2x + 6 = 4x, so 6 = 2x and x = 3.",
    hint: "Count the triangles on both sides, then move the two extra triangles to one side of the equation.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "The number 4 is reflected twice in the picture. What appears in the field with the question mark if we do the same with the number 5?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-option-a.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-option-b.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-option-c.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-option-d.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-02-option-e.png"
    ],
    imageAlt: "Two reflections of the number 4 and visual answer choices for the number 5",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: confirm that the extracted reflection diagram and option C match the source page.",
    hint: "Follow each reflection in order; the second reflection starts from the image produced by the first.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "Kangi goes directly from the zoo to school (Schule) and counts the flowers along the way. Which of the following numbers can he not obtain this way?",
    options: ["9", "10", "11", "12", "13"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the route diagram is not yet matched to an asset, so choice C cannot be independently verified.",
    hint: "Trace each direct route from the zoo to Schule and count the flowers on that route.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "A staircase has 21 steps. Nick and Mike count the steps, one from bottom to top and the other from top to bottom. They meet at one step which Nick indicates as the 10th. As which number does Mike indicate this step?",
    options: ["The 13th", "The 14th", "The 11th", "The 12th", "The 10th"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the OCR'd answer key indicates C, but counting from opposite ends gives 21 - 10 + 1 = 12, which is D.",
    hint: "The same step is counted from opposite ends of a 21-step staircase; include the shared step in both counts.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Anna has connected all the upper and lower points with straight lines. How many lines has she drawn?",
    options: ["20", "25", "30", "35", "40"],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-05-diagram.png",
    imageAlt: "Upper and lower points joined by straight lines",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the source diagram must be checked to confirm the line count represented by choice C.",
    hint: "Count the lines from each upper point separately, then add those counts without counting any line twice.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "A fly has 6 legs and a spider has 8. Together, 2 flies and 3 spiders have as many legs as 10 birds and how many cats?",
    options: ["2 cats", "3 cats", "4 cats", "5 cats", "6 cats"],
    answer: 2,
    explanation: "The flies and spiders have 2 × 6 + 3 × 8 = 36 legs. Ten birds have 20, leaving 16 legs, or 4 cats.",
    hint: "Find the total legs for the flies and spiders first, then subtract the birds' legs and divide by 4.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "In the box are seven blocks. It is possible to slide the blocks around so that another block can be added to the box. What is the minimum number of blocks that must be moved?",
    options: ["1", "2", "3", "4", "5"],
    answer: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-07-diagram.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-07-extra.png",
    imageAlt: "The box and its blocks shown in two source views",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: verify the block layout and the minimum move count against the source diagram.",
    hint: "Look for a rearrangement that opens one complete block-sized space while disturbing as few blocks as possible.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Lines are drawn on a piece of paper and some of the lines are given numbers. The paper is cut along some of these lines and then folded as shown. Along which lines were the cuts made?",
    options: ["1, 3, 5, 7", "2, 4, 6, 8", "2, 3, 5, 6", "3, 4, 6, 7", "1, 4, 5, 8"],
    answer: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-08-diagram.png",
    imageAlt: "Numbered cut lines and the folded paper from the source question",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the cut pattern depends on matching the folded diagram to the numbered lines.",
    hint: "Unfold the picture mentally and track which numbered edges would meet after folding.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "What is the perimeter of the figure shown? All angles are right angles.",
    options: ["23", "31", "38", "42", "46"],
    answer: 4,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-09-diagram.png",
    imageAlt: "Right-angled figure with labelled side lengths",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: verify the dimensions in the extracted figure before confirming choice E.",
    hint: "Add the lengths around the outside boundary; use the right angles to infer any unlabelled lengths.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "In the following figures you see five elastic bands, only one of which is tied in a knot. Which one?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-10-diagram.png",
    imageExtra: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-10-extra.png",
    imageChoices: true,
    imageAlt: "Five elastic-band figures from the source question",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: follow each band in the source figures to confirm which one is knotted; the answer key indicates D.",
    hint: "Trace each band continuously from one end. A crossing alone is not a knot unless the path is interwoven.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Which of the following expressions has a value that differs from the others?",
    options: [
      "20 × 10 + 20 × 10",
      "(20 ÷ 10) × 20 × 10",
      "20 × 10 × (20 ÷ 10)",
      "20 × 10 + 10 × 20",
      "(20 ÷ 10) × 20 + 10"
    ],
    answer: 4,
    explanation: "The first four expressions equal 400. The last is 2 × 20 + 10 = 50, so E is the one that differs.",
    hint: "Evaluate multiplication and division before addition, and compare the four results rather than their written forms.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "The figure should be rotated 180° around point F. What is the result?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-option-a.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-option-b.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-option-c.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-option-d.png",
      "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-12-option-e.png"
    ],
    imageAlt: "Figure around point F and five rotated answer choices",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: compare the extracted rotation choices with the original figure before confirming C.",
    hint: "A half-turn sends every point to the opposite side of F at the same distance.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "Benjamin chooses a number, divides it by 7, adds 7 to the result and multiplies that result by 7. He obtains 777. Which number did he start with?",
    options: ["7", "111", "722", "567", "728"],
    answer: 4,
    explanation: "Reversing the final multiplication gives 111. Subtract 7 to get 104, then multiply by 7: the starting number is 728.",
    hint: "Undo the operations in reverse order: divide 777 by 7, subtract 7, then multiply by 7.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "The numbers 1, 4, 7, 10 and 13 should be written into the squares so that the sum of the three numbers in the horizontal row equals the sum of the three numbers in the vertical column. What is the largest possible value of these sums?",
    options: ["18", "20", "21", "22", "24"],
    answer: 4,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-14-diagram.png",
    imageAlt: "Cross-shaped arrangement of five squares",
    imageClass: "source-pdf-visual",
    explanation: "The shared centre is counted twice across the two equal sums. Put 13 in the centre; then the four remaining values total 22 and can be paired as 1 + 10 and 4 + 7, giving 24 in each line.",
    hint: "The centre number belongs to both lines, so compare twice the line sum with the total of all five numbers plus the centre.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "A newspaper has 60 pages and is made from 15 sheets nested inside each other. Page 7 is missing from one such newspaper. Which other pages are also missing?",
    options: ["8, 9 and 10", "8, 42 and 43", "8, 48 and 49", "8, 52 and 53", "8, 53 and 54"],
    answer: 4,
    explanation: "The sheet containing page 7 also contains pages 8, 53 and 54: the two page pairs on a sheet add to 61.",
    hint: "For a 60-page nested booklet, paired pages on a sheet add to 61; locate the other pair beside page 7.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "Since 1 + 3 + 5 + 7 = 4 × 4, how big is 1 + 3 + 5 + 7 + … + 17 + 19?",
    options: ["10 × 10", "11 × 11", "12 × 12", "13 × 13", "14 × 14"],
    answer: 0,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-16-diagram.png",
    imageAlt: "The first four odd numbers arranged as a 4 by 4 square",
    imageClass: "source-pdf-visual",
    explanation: "There are ten odd numbers from 1 through 19, and the sum of the first n odd numbers is n². The total is 10².",
    hint: "Count the odd numbers in the sum, then use the pattern shown by the first four terms.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "Lydia draws a flower with 5 petals. She wants to colour the flower using white and black. How many different flowers can she draw if the flower can also be just one colour?",
    options: ["6", "7", "8", "9", "10"],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-17-diagram.png",
    imageAlt: "Five-petal flower used for the colouring question",
    imageClass: "source-pdf-visual",
    explanation: "There are 32 black-and-white assignments to five labelled petals. The two all-one-colour patterns are unchanged by rotation; each of the other 30 patterns forms a group of five rotations. Thus there are 2 + 30 ÷ 5 = 8 flowers.",
    hint: "Treat rotations of the same flower as identical. The two single-colour flowers are special; the others fall into groups of five rotations.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "What fraction of the square is grey?",
    options: ["1/3", "1/4", "1/5", "3/8", "2/9"],
    answer: 0,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-18-diagram.png",
    imageAlt: "Square partitioned into grey and white regions",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the region areas depend on the source diagram; the answer key indicates A.",
    hint: "Look for a way to split the square into equal-area pieces, then count how many pieces are grey.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "The picture shows a hanging mobile with a total weight of 112 grams. The weights of the sticks and threads are not taken into account. How much does the star weigh?",
    options: ["6 g", "7 g", "12 g", "16 g", "It cannot be calculated"],
    answer: 1,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-19-diagram.png",
    imageAlt: "Balanced hanging mobile with a star",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: the balance lengths and attached weights must be read from the source figure; the answer key indicates B.",
    hint: "Use the balance of each stick: the total weight on one side times its distance from the support must match the other side.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "A basic pizza with tomato and cheese can have only one or two of four toppings: anchovies, artichokes, mushrooms or capers. The pizza comes in three sizes. How many different types of pizza are offered?",
    options: ["30", "12", "18", "48", "72"],
    answer: 0,
    explanation: "There are 4 choices of one topping and 6 pairs of toppings, for 10 topping combinations. Each comes in 3 sizes, so 10 × 3 = 30.",
    hint: "Count the one-topping and two-topping combinations separately, then account for all three sizes.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Leni, Sara, Hannes, Petra and Arno stand clockwise in that order and count KAN–GA–ROO–OUT–ARE–YOU. The child counted on YOU is out, and they continue until one remains. Who should Leni choose to start if she wants Arno to get the last piece of cake?",
    options: ["Leni", "Sara", "Hannes", "Petra", "Arno"],
    answer: 1,
    explanation: "Starting with Sara removes Sara, then Petra, then Hannes, then Leni as each six-syllable count ends. Arno is the last child remaining.",
    hint: "Simulate the six syllables one at a time, removing the child on YOU and restarting with the next child clockwise.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "In the multiplication PPQ × Q = RQ5Q, P, Q and R are different digits. What is P + Q + R?",
    options: ["13", "15", "16", "17", "20"],
    answer: 3,
    explanation: "The digits are P = 7, Q = 6 and R = 4, since 776 × 6 = 4656. Their sum is 17.",
    hint: "Use the repeated final digit to restrict Q, then test the remaining digits in the hundreds and thousands places.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "In the grid, how many grey squares must be coloured white so that each row and each column has exactly one grey square?",
    options: ["4", "5", "6", "7", "This is not possible"],
    answer: 2,
    image: "/assets/kangaroo/grades-5-6/benjamin/2010/questions/q-23-diagram.png",
    imageAlt: "Grid containing grey squares",
    imageClass: "source-pdf-visual",
    explanation: "NEEDS_REVIEW: count the grey squares by row and column in the source grid before confirming the number to recolour.",
    hint: "Each row and column must keep one grey square; identify which rows or columns currently have extras.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "Six-legged, seven-legged and eight-legged octopuses serve Neptune. The seven-legged ones always lie, while the six- and eight-legged ones always tell the truth. Four octopuses make statements that their total number of legs is 28, 27, 26 and 25. What colour is the octopus that speaks the truth?",
    options: ["Red", "Blue", "Green", "Yellow", "Nobody speaks the truth"],
    answer: 2,
    explanation: "If the total is 27, it can consist of one six-legged octopus and three seven-legged liars. The truthful six-legged octopus is the one stating 27, the green octopus.",
    hint: "Try each claimed total and check whether it can be made from four counts of 6, 7 or 8 while matching who must lie.",
    sourcePage: 3
  }
];

const sections2010Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2010Benjamin: QuestionSet = {
  id: "benjamin-2010",
  year: 2010,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 18, 2010",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2010/2010_Benjamin.pdf",
  questions: questions2010Benjamin,
  sections: sections2010Benjamin
};