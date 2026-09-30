import type { Question, QuestionSet, Section } from "../../../types";

const questions2019Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Carina has started drawing a cat and adds some eyes. Which picture could show her finished drawing?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the partial cat and five eye placements are visual.",
    hint: "Check which eye placement is consistent with the cat's head orientation and visible features.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "The Maya used dots for 1 and lines for 5. Which of the following Maya numbers represents 17?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "Seventeen is three groups of five and two extra units, so its numeral uses three bars and two dots.",
    hint: "Write 17 as a multiple of 5 plus a remainder.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "A nursery group has 14 girls and 12 boys. Half the group goes for a walk. What is the minimum number of girls in that group?",
    options: ["5", "4", "3", "2", "1"],
    answer: 4,
    explanation: "Half of 26 is 13. Since there are only 12 boys, at least one of the 13 children must be a girl.",
    hint: "The group has 26 children, so half is 13; compare this with the total number of boys.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "A digital clock shows the time in the picture. What time uses exactly the same digits again for the first time afterwards?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the starting clock time and five candidate times are visual.",
    hint: "Keep the same four digits and find their earliest later arrangement that is a valid clock time.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Opposite sides of an ordinary die add to 7. Which of the five pictured dice could be an ordinary die?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the visible faces and orientations of the five dice are visual.",
    hint: "Check that every pair of opposite faces sums to 7 and that the shown face adjacencies are possible.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "Which of the following geometrical figures does not appear in the large picture?",
    options: ["Triangle", "Square", "Hexagon", "Octagon", "Dodecagon"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the large composite picture must be inspected to identify which polygon is absent.",
    hint: "Search the picture for each listed polygon, including shapes formed by several adjacent regions.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "The ages of all the kangaroos in an enclosure sum to 36 years. In two years their total age will be 60. How many kangaroos are in the enclosure?",
    options: ["12", "15", "18", "20", "24"],
    answer: 0,
    explanation: "The total age increases by 2 years per kangaroo. The increase is 60 - 36 = 24, so there are 24 ÷ 2 = 12 kangaroos.",
    hint: "The total age rises by two years for each kangaroo over two years.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Laura wants to colour exactly one 2 × 2 square in the given figure. How many ways can she do this?",
    options: ["5", "6", "7", "8", "9"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the shape of the grid or figure determines how many 2 × 2 placements are possible.",
    hint: "Count each position where all four cells of a 2 × 2 block lie within the figure.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "Three separate pieces of paper each show a three-digit number. Their sum is 826. What is the sum of the two hidden digits?",
    options: ["7", "8", "9", "10", "11"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the three numbers and the locations of the hidden digits are needed to determine their sum.",
    hint: "Add the visible hundreds, tens and units columns separately, carrying between columns as needed.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "The six smallest odd natural numbers are written on a die. Toni rolls it three times and adds the results. Which sum is impossible?",
    options: ["3", "19", "21", "29", "35"],
    answer: 4,
    explanation: "The largest possible sum is 11 + 11 + 11 = 33, so 35 is impossible.",
    hint: "Find the smallest and largest possible sums and remember every roll is odd.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Pia has a folding yardstick made of 10 equal-length pieces. Which of the five figures can she not make?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five yardstick shapes are visual.",
    hint: "Count the equal segments in each proposed outline and check whether they can be joined in order without breaking the stick.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Which of the five squares has the greatest proportion of black area?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the five shaded squares are visual.",
    hint: "Compare the black fractions, splitting each square into equal-area pieces if necessary.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "A witch has 30 dogs, cats and mice. She changes 6 dogs into cats, then 5 cats into mice. Now there are equal numbers of dogs, cats and mice. How many cats were there at first?",
    options: ["4", "5", "9", "10", "11"],
    answer: 2,
    explanation: "After the changes there are 10 of each. The cats increased by 6 and then decreased by 5, a net increase of 1, so there were 9 cats initially.",
    hint: "Work backwards from 10 cats after the changes, reversing the conversion of five cats into mice and then six dogs into cats.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "Maxi builds towers from 1 cm × 1 cm × 2 cm blocks as shown. He continues the same pattern and uses 28 blocks. What is the tower's height?",
    options: ["9 cm", "10 cm", "11 cm", "12 cm", "14 cm"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the tower pattern is shown in the source picture and is needed to relate block count to height.",
    hint: "Count how many blocks are added at each height in the pictured pattern, then extend it to 28 blocks.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "Bridget folds a square sheet of paper twice and cuts along the two shown lines. How many pieces of paper does she obtain?",
    options: ["6", "8", "9", "12", "16"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the fold directions and cut locations are shown only in the source diagram.",
    hint: "Reflect each cut across the folds as the paper is unfolded, then count the resulting pieces.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "Each cube net has a line drawn on it. For which net does the line form a closed loop when folded into a cube?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the five nets and drawn lines are visual and have not yet been included.",
    hint: "Fold each net mentally and track the line across joined edges to see whether its endpoints meet.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "A positive integer is written on each face of a die. The products of opposite face numbers are all equal. What is the smallest possible sum of the six numbers?",
    options: ["36", "37", "41", "44", "60"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the numbers shown on the die are required to determine the common opposite-face product.",
    hint: "Pair the opposite faces and use the equal-product condition to constrain the unknown positive integers.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "Four equally heavy black pearls, one white pearl and a 30 g iron piece balance as shown. How much do six black pearls and three white pearls weigh?",
    options: ["100 g", "99 g", "96 g", "94 g", "90 g"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the sides of the beam balance and which objects are on each side are shown in the diagram.",
    hint: "Translate the balanced beam into an equation relating the black and white pearl weights, then find the requested total.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "Robert makes five statements, one of which is wrong: his son Basil has 3 sisters; daughter Ann has 2 brothers; Ann has 2 sisters; Basil has 2 brothers; he has 5 children. Which statement is wrong?",
    options: ["Statement A", "Statement B", "Statement C", "Statement D", "Statement E"],
    answer: 3,
    explanation: "With five children, Basil has one brother if the other four include Ann and three sisters; the statements about Ann's two brothers and two sisters fit, so statement D is the inconsistent one.",
    hint: "Translate each statement into the numbers of sons and daughters implied by a five-child family.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "Benjamin starts with a number in the first circle and follows the indicated calculations, writing each result in the next circle. How many of the six numbers are divisible by 3?",
    options: ["1", "2", "1 or 2", "2 or 3", "3 or 4"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the starting value and sequence of operations are shown in the missing diagram.",
    hint: "Track each result modulo 3; only the remainder matters for divisibility by 3.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Emil takes selfies with eight cousins. Each cousin appears in two or three pictures, and each picture contains exactly five cousins. How many selfies does Emil take?",
    options: ["3", "4", "5", "6", "7"],
    answer: 1,
    explanation: "There are between 16 and 24 cousin appearances. Each selfie has five cousins, so the total must be a multiple of 5; the only possible value in that range is 20, giving 4 selfies.",
    hint: "Count total cousin appearances in two ways: by cousins and by selfies.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "The cardboard is folded into a 2 × 1 × 1 box. Which picture does not show the box?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the cardboard net and five box views are visual.",
    hint: "Check which faces can share edges on a 2 × 1 × 1 box and compare them with each view.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "Jette and Willi throw balls at identical pyramids of 15 tins. Jette hits 6 tins and scores 25 points. Willi hits 4 tins. How many points does Willi score?",
    options: ["22", "23", "25", "26", "28"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the point values of the tins by row are shown in the source diagram.",
    hint: "Use the pyramid's row values and Jette's total to determine the value of each row or tin position.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "A 4 × 4 × 4 cube has 32 white and 32 black unit cubes. They are arranged to maximize the white area on the large cube's surface. What fraction of the surface is white?",
    options: ["3/4", "2/3", "1/2", "3/8", "1/4"],
    answer: 0,
    explanation: "Place the 8 black cubes in the interior and the remaining 24 black cubes on face-centre positions, where each contributes one exterior face. Of the 96 unit faces, 24 are black, so 72/96 = 3/4 are white.",
    hint: "To maximize white surface, place black cubes where they expose the fewest outer faces.",
    sourcePage: 3
  }
];

const sections2019Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2019Benjamin: QuestionSet = {
  id: "benjamin-2019",
  year: 2019,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 21, 2019",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2019/2019_Benjamin.pdf",
  questions: questions2019Benjamin,
  sections: sections2019Benjamin
};