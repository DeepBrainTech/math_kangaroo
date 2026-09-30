import type { Question, QuestionSet, Section } from "../../../types";

const questions2017Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Four cards are placed in a given order. Which order cannot be obtained by swapping only two cards?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the initial card order and five proposed orders are visual.",
    hint: "A single swap changes the positions of exactly two cards; compare each proposed order with the starting order.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "A fly has 6 legs and a spider has 8. Three flies and two spiders have as many legs as nine chickens and how many cats?",
    options: ["2 cats", "3 cats", "4 cats", "5 cats", "6 cats"],
    answer: 2,
    explanation: "The flies and spiders have 3 × 6 + 2 × 8 = 34 legs. Nine chickens have 18, leaving 16 legs, or four cats.",
    hint: "Subtract the legs of the nine chickens from the total legs of the flies and spiders, then divide by four.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "Anna has four identical building blocks. Which of the five shapes can she not form with them?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the block shape and candidate solids are visual and have not yet been included.",
    hint: "Compare each proposed solid with the arrangement of faces available on four copies of the block.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "Kevin knows 1111 × 1111 = 1234321. What is 1111 × 2222?",
    options: ["3456543", "2345432", "2234322", "2468642", "4321234"],
    answer: 3,
    explanation: "Since 2222 = 2 × 1111, the product is 2 × 1,234,321 = 2,468,642.",
    hint: "Use the given square and note that 2222 is twice 1111.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Ten islands are connected by 12 bridges. All are open to traffic. What is the minimum number of bridges that must be closed so traffic between A and B stops?",
    options: ["1", "2", "3", "4", "5"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the bridge network is needed to determine the minimum cut separating A from B.",
    hint: "Find the smallest set of bridges whose removal disconnects every route from A to B.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "Jane walks at the front, Kate in the middle and Lynn at the back. Jane weighs 500 kg more than Kate, and Kate weighs 1000 kg less than Lynn. Which picture shows them in the right order?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five pictures of the three walkers are visual.",
    hint: "Translate the weight differences into an ordering from heaviest to lightest, then compare the pictures.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "Max colours one third of the squares in a grid blue and one half yellow. He colours the rest red. How many squares are red?",
    options: ["1", "2", "3", "4", "5"],
    answer: 2,
    explanation: "The fractions not coloured blue or yellow total 1 - 1/3 - 1/2 = 1/6. The shown grid has 18 squares, so 3 are red.",
    hint: "Find the fraction left after the blue and yellow parts, then multiply by the total number of grid squares.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Bob folds a sheet of paper, punches a hole, then unfolds it. Along which dotted line did he fold the paper?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the punched-hole pattern and fold lines are visual and have not yet been included.",
    hint: "Reflect the hole positions across each possible fold line and compare the resulting pattern with the unfolded sheet.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "A rectangle is twice as long as it is wide. Which fraction of the rectangle is coloured grey?",
    options: ["1/4", "3/4", "3/2", "1/5", "3/5"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the grey region is shown in a source diagram that is not included.",
    hint: "Use the rectangle's length-to-width ratio to divide it into equal-area parts, then count the grey parts.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "Only four players score in a handball game, and each scores a different number of goals. Michael scores the fewest. If the other three score 20 goals altogether, what is the maximum Michael could have scored?",
    options: ["2", "3", "4", "5", "6"],
    answer: 2,
    explanation: "To maximize the smallest score, make the other three distinct scores as small as possible above it. The totals 4, 5, 6 sum to 15, so the other three can sum to 20 with Michael scoring 4 (for example 5, 6, 9).",
    hint: "The other scores must be distinct and larger than Michael's; test the largest possible minimum while keeping their sum 20.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "A shop sells sofas with one, two or three seats. Each seat has the same width, as do the two armrests. A two-seat sofa is 160 cm wide and a three-seat sofa is 220 cm wide. How wide is a one-seat sofa?",
    options: ["60 cm", "80 cm", "90 cm", "100 cm", "120 cm"],
    answer: 3,
    explanation: "The extra seat between the two models adds 220 - 160 = 60 cm, so one seat is 60 cm wide. The two armrests total 40 cm, making a one-seat sofa 60 + 40 = 100 cm.",
    hint: "Subtract the sofa widths to find one seat's width, then use the two-seat sofa to find the combined armrest width.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Tom concatenates the numbers 1 through 20 into a 31-digit number, then deletes 24 digits so the remaining number is as large as possible. Which number does he obtain?",
    options: ["9671819", "9567892", "9781920", "9912345", "9818192"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the maximum seven-digit subsequence should be verified against the full concatenated string; the answer key indicates C.",
    hint: "Choose seven digits in their original order, preferring the largest possible next digit while leaving enough digits to finish.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "Opposite faces of a special die have equal sums. Five face numbers are 5, 6, 9, 11 and 14. What is the sixth number?",
    options: ["4", "7", "8", "13", "15"],
    answer: 4,
    explanation: "The five numbers sum to 45. The total of all six faces must be three times the common opposite-pair sum; testing the options gives 45 + 15 = 60, so each opposite pair sums to 20.",
    hint: "The total of the six face numbers is three equal opposite-pair sums; test which missing number makes that possible.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "Paul hikes for five days from Monday to Friday, walking 2 km more each day than the previous day. He walks 70 km altogether. How far does he walk on Thursday?",
    options: ["12 km", "13 km", "14 km", "15 km", "16 km"],
    answer: 4,
    explanation: "The five distances are x, x+2, x+4, x+6 and x+8. Their sum is 5x + 20 = 70, so x = 10 and Thursday's distance is 16 km.",
    hint: "Write the five daily distances as an arithmetic sequence and use their total of 70 km.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "Boris can use three magic wands exactly once: add €1, subtract €1, and double his money. In which order does he finish with the most money?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the five wand-order expressions are visual and need accurate transcription before confirming D.",
    hint: "Compare all six possible orders; doubling has the greatest effect when used after an addition.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "Raphael has three squares with side lengths 2 cm, 4 cm and 6 cm, placed as shown. What is the total area of the figure?",
    options: ["51 cm²", "32 cm²", "27 cm²", "16 cm²", "6 cm²"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the overlap and placement of the three squares are shown in the source diagram.",
    hint: "Add the three square areas, then subtract any overlapping area counted twice.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "A large cube is made from nine identical building blocks. Which of the five large cubes is possible?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the block shape and five proposed cubes are visual.",
    hint: "Check whether the small block faces can meet in the orientations shown without leaving gaps or overlaps.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "Write 1, 2, 3, 4 and 5 in the five fields of the diagram. A number below another must be greater, and a number to the right must be greater. How many arrangements are possible?",
    options: ["3", "4", "5", "6", "8"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the diagram's exact partial order is needed to count its valid number arrangements.",
    hint: "List placements that respect every left-to-right and top-to-bottom inequality in the diagram.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "Eight kangaroos stand in a row. Neighbouring kangaroos facing each other hop past one another and swap places until no more such jumps are possible. How many swaps occur?",
    options: ["2", "10", "12", "13", "16"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the initial facing directions of the eight kangaroos are shown in the source picture.",
    hint: "Each swap removes one adjacent pair facing toward each other; count those pairs as the line evolves.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "A square floor has grey and white triangular and square tiles. What is the smallest set of tile colours to swap so the floor looks the same from all four viewing directions?",
    options: ["3 triangles, 1 square", "1 triangle, 3 squares", "1 triangle, 1 square", "3 triangles, 3 squares", "3 triangles, 2 squares"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the floor pattern and its four viewing directions are visual.",
    hint: "Look for rotations that do not match the current pattern, then change the fewest tiles needed to make all four views identical.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "A bag contains only red and green marbles. Drawing five guarantees at least one red marble, and drawing six guarantees at least one green marble. What is the maximum number of marbles in the bag?",
    options: ["11", "10", "9", "8", "7"],
    answer: 2,
    explanation: "There can be at most four green marbles and five red marbles; otherwise a draw of five could be all green or a draw of six all red. The maximum is 4 + 5 = 9.",
    hint: "Use each guarantee to bound how many marbles of one colour can be present.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "Five keys each lock exactly one padlock. Letters on a padlock stand for digits, with equal letters representing equal digits. Which digits are on the key marked with a question mark?",
    options: ["382", "282", "284", "823", "824"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the padlock letter patterns and matching key diagrams are visual and have not been included.",
    hint: "Match repeated letter patterns on the padlocks to digit patterns on the keys.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "Petra likes even numbers, Ina likes multiples of 3 and Celina likes multiples of 5. The basket contains 32, 52, 24, 33, 45, 20, 25 and 35. Each girl independently takes every ball matching her preference. In which order did they visit?",
    options: ["Petra, Celina, Ina", "Celina, Ina, Petra", "Ina, Petra, Celina", "Ina, Celina, Petra", "Celina, Petra, Ina"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the final basket contents after each visit need to be matched to the source condition.",
    hint: "Track which numbers remain after each girl removes all numbers divisible by her preferred divisor.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "The first kangaroo is repeatedly reflected across dotted lines; two reflections have already been made. In which position is the kangaroo in the grey triangle?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the reflection lines, starting kangaroo and five final positions are visual.",
    hint: "Reflect the kangaroo across each dotted line in order, preserving its distance from each line.",
    sourcePage: 3
  }
];

const sections2017Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2017Benjamin: QuestionSet = {
  id: "benjamin-2017",
  year: 2017,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 16, 2017",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2017/2017_Benjamin.pdf",
  questions: questions2017Benjamin,
  sections: sections2017Benjamin
};