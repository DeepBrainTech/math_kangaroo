import type { Question, QuestionSet, Section } from "../../../types";

const questions2012Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In which of the five pictures is the white area bigger than the grey area?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the five picture choices are required to compare the shaded areas.",
    hint: "Compare the white and grey regions in each picture, using symmetry or equal-area pieces where possible.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "Barbara wrote \"KAENGURUWETTBEWERB\" on the blackboard. She used the same colour for each occurrence of a letter and different colours for different letters. How many colours did she use?",
    options: ["7", "8", "9", "10", "11"],
    answer: 3,
    explanation: "The distinct letters are K, A, E, N, G, U, R, W, T and B, so she used 10 colours.",
    hint: "Count each different letter once, even when it appears more than once in the word.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "Three bars of chocolate cost €6. How much does one bar cost?",
    options: ["€2", "€4", "€1", "€3", "€5"],
    answer: 0,
    explanation: "Divide the total cost by 3: €6 ÷ 3 = €2 per bar.",
    hint: "Share the €6 equally among the three bars.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "A blackboard has a total unfolded length of 6 m. The middle section is 3 m long. How long is the section labelled with a question mark?",
    options: ["1 m", "1.25 m", "1.5 m", "1.75 m", "2 m"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the labelled section depends on the blackboard diagram, which is not yet included.",
    hint: "Use the total unfolded length and the 3 m middle section together with the proportions shown in the diagram.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Grandfather's chicks hatched on 24 February 2012. There are 29 days in February in 2012. How old are the chicks on 15 March 2012?",
    options: ["29 days", "24 days", "22 days", "20 days", "15 days"],
    answer: 3,
    explanation: "From 24 February to 15 March is 20 elapsed days: 5 days to the end of February and 15 more days in March.",
    hint: "Count the days after 24 February to the end of the leap-year month, then add the days in March.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "Which pattern will you get if you join the centres of each of the neighbouring hexagons?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the hexagon arrangement and five pattern choices are visual and have not yet been added.",
    hint: "Mark the centre of each hexagon and connect centres only when the hexagons share a side.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "The number 3 should be added to 6. This amount is then doubled and the result increased by 1. Which sum fits this description?",
    options: ["(6 + 3 × 2) + 1", "6 + 3 × 2 + 1", "(6 + 3) × (2 + 1)", "(6 + 3) × 2 + 1", "6 + 3 × (2 + 1)"],
    answer: 3,
    explanation: "First add 3 to 6, then double the sum and add 1: (6 + 3) × 2 + 1.",
    hint: "Translate the instructions in order, adding parentheses around the amount that is doubled.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "At an animal school there are 3 cats, 2 ducks, 2 sheep and some dogs. The teacher counted 44 legs in all. How many dogs go to the school?",
    options: ["6", "5", "4", "3", "2"],
    answer: 1,
    explanation: "The cats, ducks and sheep have 3 × 4 + 2 × 2 + 2 × 4 = 24 legs. The remaining 20 legs belong to 5 dogs.",
    hint: "Find the legs accounted for by the known animals, then divide the remaining legs by 4.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "The last row in an aeroplane is row 25. There is no row 13, and row 15 has only 4 seats. Every other row has 6 seats. How many passenger seats are there?",
    options: ["120", "138", "142", "144", "150"],
    answer: 2,
    explanation: "There are 24 numbered rows because row 13 is missing. Row 15 has 4 seats and the other 23 rows have 6, giving 23 × 6 + 4 = 142.",
    hint: "Count the rows that have six seats, then add the four seats in row 15.",
    sourcePage: 1
  },
  {
    number: 10,
    points: 4,
    prompt: "One balloon can lift 80 kg in addition to the weight of its basket. Two balloons can lift 180 kg in addition to the basket. How heavy is the basket?",
    options: ["60 kg", "50 kg", "40 kg", "30 kg", "20 kg"],
    answer: 4,
    explanation: "Let each balloon lift L kg and the basket weigh b kg. Then L - b = 80 and 2L - b = 180, so L = 100 and b = 20 kg.",
    hint: "Subtract the one-balloon equation from the two-balloon equation to find one balloon's lift, then find the basket weight.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Grandmother gave Vivian and Mike apples and pears. Together they had 25 pieces of fruit. On the way home Vivian ate 1 apple and 3 pears, and Mike ate 3 apples and 2 pears. At home the basket had the same number of apples and pears. How many pears had Grandmother given them?",
    options: ["12", "13", "16", "20", "21"],
    answer: 1,
    explanation: "They ate 4 apples and 5 pears. Since the remaining numbers are equal, the original basket had one more pear than apple. With 25 pieces, that is 12 apples and 13 pears.",
    hint: "Compare how many apples and pears were eaten, then use the equal amounts remaining and the total of 25.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Which three puzzle pieces are needed to complete the large puzzle?",
    options: ["1, 3, 4", "1, 3, 6", "2, 3, 5", "2, 3, 6", "2, 5, 6"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the puzzle outline and numbered pieces are visual and have not yet been included.",
    hint: "Compare the missing boundary of the large puzzle with the edges on each numbered piece.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "Lisa built a large cube from 8 smaller cubes. Every face of a small cube has the same letter on it (A, B, C or D), and cubes sharing a face always have different letters. Which letter is on the cube that cannot be seen in the picture?",
    options: ["A", "B", "C", "D", "The picture is not possible"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the visible cube labels are needed to determine the hidden cube's letter.",
    hint: "Use the different-letter rule for each pair of cubes sharing a face, including the hidden cube's neighbours.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "Natural numbers are coloured in a repeating pattern: 1 is red, 2 blue, 3 green, 4 red, and so on. Which colour can the sum of a red number and a blue number have?",
    options: ["Green only", "Red only", "Blue only", "Red or blue", "Impossible to say"],
    answer: 0,
    explanation: "The colours repeat every 3 numbers. A red number is 1 modulo 3 and a blue number is 2 modulo 3, so their sum is divisible by 3 and is green.",
    hint: "Represent the three repeating colours by their remainders after division by 3.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "The figure on the right has perimeter 42 cm and is made from eight equally sized squares. What is its area?",
    options: ["8 cm²", "9 cm²", "24 cm²", "72 cm²", "128 cm²"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the outline is needed to count its unit-edge perimeter and determine each square's side length.",
    hint: "Count the outside unit edges in the figure to find one small square's side length from the 42 cm perimeter.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "The upper coin rolls without sliding around the fixed lower coin. Which position will the two coins have afterwards?",
    options: ["A", "B", "C", "D", "It depends on the speed"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the initial and final coin positions are shown in visual answer choices that have not yet been included.",
    hint: "Track the upper coin's rotation as it rolls once around the outside of the fixed coin.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "Write the numbers 1 to 7 in the small circles so that the sum along each line is the same. Which number should go in the uppermost circle of the triangle?",
    options: ["1", "3", "4", "5", "6"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the exact circle connections in the triangle diagram are needed to verify the common line sums.",
    hint: "Add the totals of all the lines and account for circles that are counted in more than one line.",
    sourcePage: 2
  },
  {
    number: 18,
    points: 5,
    prompt: "Four cogs are connected as shown. The first has 30 teeth, the second 15, the third 60 and the fourth 10. How many turns does the last cog make for each full turn of the first cog?",
    options: ["3", "4", "6", "8", "9"],
    answer: 0,
    explanation: "Each pair's speed ratio is the first cog's tooth count divided by the next cog's count. Multiplying the ratios gives 30/15 × 15/60 × 60/10 = 3 turns.",
    hint: "For each pair of meshing cogs, the number of turns is inversely proportional to the number of teeth.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "A rectangular piece of paper is 108 mm long and 84 mm wide. A straight cut makes a square and a leftover piece. Repeat this with each leftover piece until it is itself a square. What is the side length of the last square?",
    options: ["1 mm", "4 mm", "6 mm", "10 mm", "12 mm"],
    answer: 4,
    explanation: "Repeatedly subtract the shorter side: 108 - 84 = 24, 84 - 3 × 24 = 12, and 24 - 2 × 12 = 0. The final square has side 12 mm.",
    hint: "This is the Euclidean algorithm: keep subtracting the shorter side until both sides are equal.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "A regular octagon is folded three times down the middle until it forms a triangle. The rightmost corner is cut away. Which shape is formed when the paper is unfolded?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the fold lines and cut location must be checked against the source diagram and choices.",
    hint: "Reflect the cut across each fold line in reverse order to see every cut made in the unfolded octagon.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Both figures on the right are made from the same five pieces. One is a 5 cm by 10 cm rectangle; the other is a different arrangement. What is the difference between their perimeters?",
    options: ["2.5 cm", "5 cm", "10 cm", "15 cm", "20 cm"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the outline and radii of the quarter-circle pieces are needed to calculate both perimeters.",
    hint: "Compare which straight and curved edges are on the outside of each arrangement; shared edges do not contribute to perimeter.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "Some fields of a 4 by 4 grid were painted red. The numbers in the bottom row and left column give the counts of red fields. The red has been rubbed away. Which grid could be a solution?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the row and column counts and five candidate grids are visual and have not yet been included.",
    hint: "For each candidate, count the red fields in every row and column and compare with the given totals.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "A square sheet of paper has area 64 cm² and is folded twice as shown. What is the area of the two grey sections?",
    options: ["10 cm²", "14 cm²", "15 cm²", "16 cm²", "24 cm²"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the fold directions and grey regions are shown only in the missing diagram.",
    hint: "Use the folds to compare each grey region with equal-area parts of the original square.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "Twelve children at a birthday party are 6, 7, 8, 9 or 10 years old. Four are 6, and there are more 8-year-olds than any other age group. What is their average age?",
    options: ["8", "7.5", "7", "6.5", "6"],
    answer: 1,
    explanation: "The four 6-year-olds contribute 24 years. The remaining eight ages total 66 years, consistent with one 7-year-old, five 8-year-olds, one 9-year-old and one 10-year-old. The total is 90, so the average is 90 ÷ 12 = 7.5.",
    hint: "Use the fact that exactly four children are 6 and that the 8-year-old group is the largest to determine the remaining total.",
    sourcePage: 3
  }
];

const sections2012Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2012Benjamin: QuestionSet = {
  id: "benjamin-2012",
  year: 2012,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 15, 2012",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2012/2012_Benjamin.pdf",
  questions: questions2012Benjamin,
  sections: sections2012Benjamin
};