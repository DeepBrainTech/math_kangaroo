import type { Question, QuestionSet, Section } from "../../../types";

const questions2021Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Which of the following solid shapes can be made with the six bricks shown?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the six brick shapes and five candidate solids are visual.",
    hint: "Compare how the faces of the bricks can join without gaps or overlaps to make each solid.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "In how many places in the picture are two children holding each other with their left hands?",
    options: ["1", "2", "3", "4", "5"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the children and their hand positions are shown in the source picture.",
    hint: "For each pair, check which hand belongs to each child rather than judging only by where the hands meet.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "A square shows the digits 1 to 9. Starting at the star, follow a line and write down the digits passed. Which line makes the largest number?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the digit grid and five paths are visual.",
    hint: "Read each path's digits from the star outward and compare the resulting numbers from left to right.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "Sofie wants to write KENGU using letters from the boxes, taking exactly one letter from each box. What letter must she take from box 4?",
    options: ["K", "E", "N", "G", "U"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the letters available in the five boxes are shown in the source diagram.",
    hint: "Work through boxes 1 to 5 and use the requirement that each letter in KENGU is used exactly once.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "When the five pieces are fitted together, they form a rectangle with a calculation written on it. What is the answer to the calculation?",
    options: ["22", "32", "41", "122", "203"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the calculation appears on the assembled pieces in the source picture.",
    hint: "Assemble the pieces into the rectangle first, then read and evaluate the displayed calculation.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "A measuring tape is wound around a cylinder. What number should be at the place marked with the question mark?",
    options: ["53", "60", "69", "77", "81"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the tape markings and cylinder are shown in the source diagram.",
    hint: "Follow the tape continuously around the cylinder and account for how the visible markings continue on the hidden side.",
    sourcePage: 2
  },
  {
    number: 7,
    points: 3,
    prompt: "Five figures on a grid can move only in the directions shown by black arrows. Which figure can leave through gate G?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the grid, arrows and gate are visual.",
    hint: "Trace each figure's allowed directions and check whether it can reach G without moving against an arrow.",
    sourcePage: 2
  },
  {
    number: 8,
    points: 3,
    prompt: "Carin mixes green paint with white paint. Which mixture gives the darkest green: 1 part green + 3 white, 2 + 6, 3 + 9 or 4 + 12?",
    options: ["1 green + 3 white", "2 green + 6 white", "3 green + 9 white", "4 green + 12 white", "They are all equally dark"],
    answer: 4,
    explanation: "Each mixture has the same green-to-white ratio, 1:3, so they are equally dark.",
    hint: "Reduce each green-to-white ratio to its simplest form.",
    sourcePage: 2
  },
  {
    number: 9,
    points: 3,
    prompt: "Mary folds a piece of paper exactly in half, then exactly in half again. Which of shapes P, Q or R could have been the original piece?",
    options: ["Only P", "Only Q", "Only R", "Only P or Q", "Any of P, Q or R"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the folded shape and candidate original outlines are visual.",
    hint: "Unfold the shape by reflecting it across each fold line, then compare the possible original outlines.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 3,
    prompt: "Line segments are drawn in a square from vertices or midpoints. One eighth of the large square is coloured. Which picture shows this colouring?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the partitioned square and five shading choices are visual.",
    hint: "Use the segment layout to split the large square into equal-area parts and identify one eighth of its area.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Julian cuts 5021972970 twice to make three numbers. What is the smallest sum of the three numbers?",
    options: ["3244", "3444", "5172", "5217", "5444"],
    answer: 1,
    explanation: "NEEDS_REVIEW: confirm the minimum cut positions by checking the source's intended interpretation of the resulting numbers.",
    hint: "Try each pair of cut positions and compare the sum of the three resulting integers.",
    sourcePage: 3
  },
  {
    number: 12,
    points: 4,
    prompt: "Three bus stations A, B and C connect to the Zoo, Port and Park. The four round-trip distances are 10, 12, 13 and 15 km as shown. What is the shortest tour from A to B to C and back to A?",
    options: ["18 km", "20 km", "25 km", "35 km", "50 km"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the map's connections and distances are needed to calculate the shortest tour.",
    hint: "Use the four round-trip equations to determine the individual connection lengths, then compare the A-B-C-A route.",
    sourcePage: 3
  },
  {
    number: 13,
    points: 4,
    prompt: "Rosa starts at the arrow and follows the line to the other arrow. Which piece cannot be placed in the middle to make a continuous path?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the path ends and five candidate pieces are visual.",
    hint: "Match the entry and exit directions of each piece with the path at both ends.",
    sourcePage: 3
  },
  {
    number: 14,
    points: 4,
    prompt: "Three hexagons have numbers at their vertices, some hidden. The six numbers around each hexagon sum to 30. What is the number at the question-mark vertex?",
    options: ["3", "4", "5", "6", "7"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the visible vertex numbers and overlap pattern are shown in the source diagram.",
    hint: "Add the three hexagon totals and account for numbers at shared vertices that appear in more than one sum.",
    sourcePage: 3
  },
  {
    number: 15,
    points: 4,
    prompt: "Three rectangles have the same height. Their areas are shown, and AB = 6 cm. How long is CD?",
    options: ["7 cm", "7.5 cm", "8 cm", "8.2 cm", "8.5 cm"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the rectangle areas and labelled segments are shown in the source diagram.",
    hint: "Use area = height × width for each rectangle to compare their widths and recover CD.",
    sourcePage: 3
  },
  {
    number: 16,
    points: 4,
    prompt: "A triangular pyramid is built from ten identical balls, with two balls labelled by each of A, B, C, D and E. Three side views are shown. What letter is on the ball with the question mark?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the three views of the pyramid are visual and are needed to identify the hidden ball.",
    hint: "Match the repeated letters across the three views and use each letter exactly twice.",
    sourcePage: 4
  },
  {
    number: 17,
    points: 4,
    prompt: "Ronja has four white tokens and Wanja four grey tokens. They alternately place tokens into two piles, with Ronja starting. Which pair of piles could they not create?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the five proposed pile arrangements are visual.",
    hint: "Check that each pile can be built in alternating turns from the available four tokens of each colour.",
    sourcePage: 4
  },
  {
    number: 18,
    points: 4,
    prompt: "Three pirates each tell the truth to one question and lie about the other when asked how many coins and diamonds Graybeard has. What is the total number of coins and diamonds?",
    options: ["11", "12", "13", "14", "15"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the pirates' six statements are shown in the source picture.",
    hint: "For each pirate, test which of the two statements can be true while the other is false.",
    sourcePage: 4
  },
  {
    number: 19,
    points: 4,
    prompt: "A box has 20 apples and 20 pears. Carl randomly takes 20 fruits and Luca takes the rest. Which statement is always true?",
    options: ["Carl got at least one pear", "Carl got as many apples as pears", "Carl got as many pears as Luca", "Carl got as many pears as Luca got apples", "Carl got as many apples as Luca"],
    answer: 3,
    explanation: "If Carl gets p pears and a apples, Luca gets 20-p pears and 20-a apples. Carl's total is 20, so p+a=20, which gives p=20-a: Carl's pears equal Luca's apples.",
    hint: "Let Carl's apples and pears be a and p; use the fact that he takes 20 fruits in total.",
    sourcePage: 4
  },
  {
    number: 20,
    points: 4,
    prompt: "Trains travel between X and Y at constant speeds, taking 180 minutes from X to Y and 60 minutes from Y to X. They can pass only on one double-track section and must not collide. Which track layout is possible?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the double-track section's location and the five track layouts are visual.",
    hint: "Compare where the trains meet, taking account of their three-to-one travel-time ratio.",
    sourcePage: 4
  },
  {
    number: 21,
    points: 5,
    prompt: "Ann, Bob, Carina, Dan and Ed sit around a table. Ann is not next to Bob, Dan is next to Ed, and Bob is not next to Dan. Who sits next to Carina?",
    options: ["Ann and Bob", "Bob and Dan", "Dan and Ed", "Ed and Ann", "It is not possible to be certain"],
    answer: 0,
    explanation: "The seating constraints force Ann and Bob to sit on either side of Carina.",
    hint: "Place Dan next to Ed first, then use the two exclusions to determine where Bob and Ann can sit.",
    sourcePage: 5
  },
  {
    number: 22,
    points: 5,
    prompt: "Maurice has 6 eggs, 400 g flour, 0.5 litres milk and 200 g butter. How many pancakes can he make using the pictured recipe?",
    options: ["6", "8", "10", "12", "15"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the ingredient amounts in the pancake recipe are shown in the source picture.",
    hint: "For each ingredient, divide the amount Maurice has by the recipe requirement; the smallest quotient limits the number of batches.",
    sourcePage: 5
  },
  {
    number: 23,
    points: 5,
    prompt: "Three gears each have a black tooth marked. Which picture shows their positions after the small gear turns one full turn clockwise?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the numbers of teeth and marked positions in the three-gear diagram are visual.",
    hint: "Track each gear's direction and number of rotations from the tooth counts as the small gear makes one full turn.",
    sourcePage: 5
  },
  {
    number: 24,
    points: 5,
    prompt: "An apple and orange weigh as much as a pear and peach. An apple and pear weigh less than an orange and peach. A pear and orange weigh less than an apple and peach. Which fruit is heaviest?",
    options: ["Apple", "Orange", "Peach", "Pear", "Impossible to determine"],
    answer: 2,
    explanation: "The inequalities imply peach > apple, orange > pear, and combining the equal sums shows peach exceeds each of the other three fruits.",
    hint: "Rewrite each comparison as an inequality and combine them with the equality to compare individual fruit weights.",
    sourcePage: 5
  },
  {
    number: 25,
    points: 5,
    prompt: "What is the smallest number of shaded squares that can be added to the diagram so the design, including its grid, has four axes of symmetry?",
    options: ["1", "9", "12", "13", "21"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the initial shaded pattern and grid are visual.",
    hint: "Reflect the existing pattern across each of the four symmetry axes and add only the missing squares.",
    sourcePage: 5
  },
  {
    number: 26,
    points: 5,
    prompt: "A four-digit bike lock starts at the correct combination. Each wheel is turned the same amount in the same direction and now shows 6348. Which combination cannot have been correct?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the five proposed four-digit combinations are shown in the source picture.",
    hint: "Compare the digit shifts modulo 10; all four wheels must have undergone the same rotation.",
    sourcePage: 5
  },
  {
    number: 27,
    points: 5,
    prompt: "Each shelf holds 64 dl of apple juice. The bottles come in large, medium and small sizes as shown. How many decilitres does a medium bottle hold?",
    options: ["3", "6", "8", "10", "14"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the shelf arrangements of bottle sizes are shown in the source diagram.",
    hint: "Write an equation for each shelf total using the counts of large, medium and small bottles.",
    sourcePage: 6
  },
  {
    number: 28,
    points: 5,
    prompt: "A 7 cm cube has both diagonals drawn in red on each face. It is cut into 1 cm cubes. How many small cubes contain at least one red line?",
    options: ["54", "62", "70", "78", "86"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the exact placement and intersections of the drawn diagonals must be counted from the source figure.",
    hint: "Count cubes on face diagonals, correcting for cubes lying on two or more diagonals where they intersect.",
    sourcePage: 6
  },
  {
    number: 29,
    points: 5,
    prompt: "Ten elves and trolls receive different numbers from 1 to 10. Their answers sum to 36. Every troll lies and every elf tells the truth. What is the smallest possible number of trolls?",
    options: ["1", "3", "4", "5", "7"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the relationship between each token number and the person's spoken answer is not fully captured in the extracted text.",
    hint: "Compare the sum of the true token numbers with the total of all numbers from 1 to 10, then determine how many answers must be false.",
    sourcePage: 6
  },
  {
    number: 30,
    points: 5,
    prompt: "Nine rectangular cards, each divided into four cells with different shapes, form a rectangle. Which candidate card was definitely not used?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the nine-card arrangement and candidate edge patterns are visual.",
    hint: "Match the shapes along every shared edge of the assembled rectangle, then compare each candidate card's edge pattern.",
    sourcePage: 6
  }
];

const sections2021Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–10", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 11–20", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 21–30", accent: "purple" }
];

export const edition2021Benjamin: QuestionSet = {
  id: "benjamin-2021",
  year: 2021,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Brazil",
  date: "2021",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2021/2021_Benjamin.pdf",
  questions: questions2021Benjamin,
  sections: sections2021Benjamin
};