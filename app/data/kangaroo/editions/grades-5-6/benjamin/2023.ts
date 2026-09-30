import type { Question, QuestionSet, Section } from "../../../types";

const questions2023Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Holger writes the numbers up to 40 in a table as shown. Which piece can he cut from the table?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the number table and five cut-out pieces are visual.",
    hint: "Compare the number pattern in each candidate piece with the rows and columns of Holger's table.",
    sourcePage: 2
  },
  {
    number: 2,
    points: 3,
    prompt: "Matchsticks form numbers as shown. The number 15 uses seven matchsticks, as does 8. What is the biggest number that can be built with seven matchsticks?",
    options: ["31", "51", "74", "711", "800"],
    answer: 3,
    explanation: "The digits 7, 1 and 1 use 3 + 2 + 2 = 7 matchsticks, making 711, which is the largest listed possibility.",
    hint: "Use the fewest matchsticks for leading digits so the number can have as many digits as possible.",
    sourcePage: 2
  },
  {
    number: 3,
    points: 3,
    prompt: "Which of the pictured shapes cannot be split into two triangles using one straight line?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five polygon shapes are visual.",
    hint: "A single cut producing two triangles must join suitable vertices and leave no extra corners on either piece.",
    sourcePage: 2
  },
  {
    number: 4,
    points: 3,
    prompt: "Nine equally high staircase steps wind around a cylinder from bottom to top. How many steps cannot be seen?",
    options: ["9", "10", "11", "12", "13"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the cylindrical staircase view is needed to count hidden steps.",
    hint: "Use the visible turns of the staircase to infer how many full steps are hidden behind the cylinder.",
    sourcePage: 2
  },
  {
    number: 5,
    points: 3,
    prompt: "Anna has five discs of different sizes and uses four to build a tower, always placing a smaller disc on top of a larger one. How many towers can she make?",
    options: ["4", "5", "9", "12", "20"],
    answer: 1,
    explanation: "The four discs in any tower must be in decreasing size order, so the only choice is which one of the five discs to omit. There are five towers.",
    hint: "Once four discs are chosen, their order is forced; count the possible omitted discs.",
    sourcePage: 2
  },
  {
    number: 6,
    points: 3,
    prompt: "Four ribbons M, N, P and Q are wrapped around a box. In which order were they wrapped?",
    options: ["M, N, Q, P", "N, M, P, Q", "N, Q, M, P", "N, M, Q, P", "Q, N, M, P"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the crossings of the four ribbons around the box are visual.",
    hint: "At each crossing, determine which ribbon passes over the other to recover the wrapping order.",
    sourcePage: 2
  },
  {
    number: 7,
    points: 3,
    prompt: "Alice has four jigsaw pieces. Which two pieces can be fitted together to form a hexagon?",
    options: ["1 and 2", "1 and 3", "2 and 3", "2 and 4", "1 and 4"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the four piece outlines are visual.",
    hint: "Look for two pieces whose exposed edges combine to make six sides with the angles of a hexagon.",
    sourcePage: 2
  },
  {
    number: 8,
    points: 3,
    prompt: "A dark disc with three holes is placed on a clock dial and rotated. Which three numbers can be seen through the holes at the same time?",
    options: ["4, 6 and 12", "1, 5 and 10", "2, 4 and 9", "3, 6 and 9", "5, 7 and 12"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the three hole positions on the disc are shown in the source diagram.",
    hint: "The three visible numbers must keep the same relative spacing as the holes while the disc rotates.",
    sourcePage: 2
  },
  {
    number: 9,
    points: 4,
    prompt: "A square ABCD has side length 10 cm. What is the total area of the shaded part?",
    options: ["40 cm²", "45 cm²", "50 cm²", "55 cm²", "60 cm²"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the shaded regions inside the square are visual.",
    hint: "Split the square into equal-area parts using the lines in the diagram and count the shaded portions.",
    sourcePage: 3
  },
  {
    number: 10,
    points: 4,
    prompt: "Five big and four small elephants walk along a narrow path without changing order. At a fork, each goes left or right. Which situation cannot happen?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five proposed divisions of the elephants are visual.",
    hint: "The two groups must each be consecutive parts of the original line of elephants.",
    sourcePage: 3
  },
  {
    number: 11,
    points: 4,
    prompt: "Marc builds the number 2022 from 66 identical cubes and paints the outside. On how many cubes are exactly four faces painted?",
    options: ["16", "30", "46", "54", "60"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the arrangement of the 66 cubes forming 2022 is visual.",
    hint: "Count cube positions by how many faces are exposed in the digit-shaped sculpture.",
    sourcePage: 3
  },
  {
    number: 12,
    points: 4,
    prompt: "A 4 m × 2 m × 1 m tank contains water 25 cm deep. It is turned on its side as shown. How high is the water now?",
    options: ["25 cm", "50 cm", "75 cm", "1 m", "1.25 m"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the direction in which the tank is turned determines the new base area.",
    hint: "Find the water volume first, then divide by the base area after the turn.",
    sourcePage: 3
  },
  {
    number: 13,
    points: 4,
    prompt: "A transparent square foil has artwork on it and is folded over twice as shown. What does it look like after both folds?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the original artwork, fold lines and candidate folded patterns are visual.",
    hint: "Reflect the design across the first fold, then reflect the result across the second fold.",
    sourcePage: 3
  },
  {
    number: 14,
    points: 4,
    prompt: "The year 2022 has three equal digits. It is the third such year tortoise Eva has experienced. What is the minimum age Eva can be?",
    options: ["20", "22", "23", "56", "134"],
    answer: 2,
    explanation: "If the previous two years she experienced with three equal digits were 1999 and 2000, she could have been born in 1999 and be 23 in 2022.",
    hint: "Choose the latest possible birth year that still lets two earlier years with three identical digits precede 2022.",
    sourcePage: 3
  },
  {
    number: 15,
    points: 4,
    prompt: "Four circles are connected by lines to form chains of four. Numbers 1 to 4 appear in each row, column and chain. What is in the question-mark circle?",
    options: ["1", "2", "3", "4", "It cannot be determined"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the circle layout, chains and given entries are visual.",
    hint: "Use the no-repeat rule in each row, column and chain to eliminate values for the marked circle.",
    sourcePage: 3
  },
  {
    number: 16,
    points: 4,
    prompt: "Lisa has four dogs of different whole-number weights totalling 60 kg. The second-heaviest weighs 28 kg. How heavy is the third-heaviest?",
    options: ["2 kg", "3 kg", "4 kg", "5 kg", "6 kg"],
    answer: 0,
    explanation: "The heaviest must weigh at least 29 kg. The two lightest distinct positive weights then sum to at most 3 kg, forcing them to be 1 kg and 2 kg. The third-heaviest is 2 kg.",
    hint: "Use distinct positive integer weights and subtract the two largest from the total.",
    sourcePage: 3
  },
  {
    number: 17,
    points: 5,
    prompt: "A stack of eight glasses is 42 cm high and a stack of two is 18 cm high. How high is a stack of six glasses?",
    options: ["22 cm", "24 cm", "28 cm", "34 cm", "40 cm"],
    answer: 3,
    explanation: "Six additional glasses increase the height by 24 cm, so each added glass contributes 4 cm. A six-glass stack is 18 + 4 × 4 = 34 cm.",
    hint: "Compare the two stack heights to find how much each additional nested glass adds.",
    sourcePage: 4
  },
  {
    number: 18,
    points: 5,
    prompt: "Villages A, B, C and D are 10 km apart in that order, with 10, 20, 30 and 40 children. Where should a school be built to minimize the sum of bus distances?",
    options: ["A", "B", "Between B and C", "C", "D"],
    answer: 3,
    explanation: "C is the weighted median: 60 children are at or to its left and 40 are to its right, so moving the school either way cannot reduce total distance.",
    hint: "For points on a line, a location minimizing total distance is a weighted median of the population.",
    sourcePage: 4
  },
  {
    number: 19,
    points: 5,
    prompt: "Anna glued cubes together to form the pictured solid. Which of the five pictures shows a different view of the solid?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the solid and proposed views are visual.",
    hint: "Compare visible cube faces and their adjacency, allowing the solid to rotate but not change shape.",
    sourcePage: 4
  },
  {
    number: 20,
    points: 5,
    prompt: "Werner fills the empty squares with four different numbers from 2, 3, 4, 5 and 6 so the calculation is correct. How many numbers can go in the grey square?",
    options: ["1", "2", "3", "4", "5"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the calculation and grey-square position are shown in the source diagram.",
    hint: "Try each possible value in the grey square and test whether four remaining distinct numbers complete the equation.",
    sourcePage: 4
  },
  {
    number: 21,
    points: 5,
    prompt: "A building of unit cubes is shown from above, the front and the right. What is the maximum number of cubes used?",
    options: ["18", "19", "20", "21", "22"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the three views are needed to determine the largest compatible stack at each position.",
    hint: "Use the height constraints from all three projections and maximize each stack without violating a view.",
    sourcePage: 5
  },
  {
    number: 22,
    points: 5,
    prompt: "Each animal represents a different positive integer. The sums of the two animals in each column are shown. What is the maximum sum of the four numbers in the top row?",
    options: ["18", "19", "20", "21", "22"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the animal equations and column totals are visual.",
    hint: "Write an equation for each column and maximize the sum of the four distinct positive top-row numbers.",
    sourcePage: 5
  },
  {
    number: 23,
    points: 5,
    prompt: "Thirty people sit around a table. People without hats tell the truth; those with hats may lie or tell the truth. Everyone says at least one neighbour wears a hat. What is the greatest number without hats?",
    options: ["5", "10", "15", "20", "25"],
    answer: 3,
    explanation: "No three consecutive people can be hatless, since the middle one would have two hatless neighbours. Ten hat-wearers can separate ten pairs of hatless people, giving 20.",
    hint: "Every truthful person without a hat needs a hat-wearing neighbour; arrange hat-wearers to separate pairs of others.",
    sourcePage: 5
  },
  {
    number: 24,
    points: 5,
    prompt: "Kai places 3, 4, 5, 6 and 7 in five circles so the product at each triangle's vertices equals the number inside it. What is the sum of the vertices of the triangle marked 168?",
    options: ["12", "14", "15", "17", "18"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the placement of the five numbers and the triangle labelled 168 are visual.",
    hint: "Find which three of 3, 4, 5, 6 and 7 multiply to 168, then add them.",
    sourcePage: 5
  }
];

const sections2023Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2023Benjamin: QuestionSet = {
  id: "benjamin-2023",
  year: 2023,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 16, 2023",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2023/2023_Benjamin.pdf",
  questions: questions2023Benjamin,
  sections: sections2023Benjamin
};