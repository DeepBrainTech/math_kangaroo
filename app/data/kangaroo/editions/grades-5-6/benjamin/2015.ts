import type { Question, QuestionSet, Section } from "../../../types";

const questions2015Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In which shape is exactly one half coloured grey?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the five shaded shapes are visual and have not yet been included.",
    hint: "Compare the grey area with the white area in each shape, using symmetry or equal-sized parts.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "The word KANGAROO is written on the top side of an umbrella. Which picture does not show the umbrella?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the umbrella's orientation and the five views are shown in source pictures.",
    hint: "Imagine turning the umbrella while keeping the lettering attached to its top surface.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "Sam paints the nine small squares in the shape white, grey or black. What is the minimum number he must repaint so that no two squares sharing a side have the same colour?",
    options: ["2", "3", "4", "5", "6"],
    answer: 0,
    explanation: "NEEDS_REVIEW: the initial colouring and arrangement of the nine squares are shown in the source diagram.",
    hint: "Check each pair of side-sharing squares and find a smallest set of squares whose colours can be changed to fix every conflict.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "Mr Bauer has 10 ducks. Five lay an egg every day, and the other five lay an egg every second day. How many eggs do they lay in 10 days?",
    options: ["75", "60", "50", "25", "10"],
    answer: 0,
    explanation: "The daily layers produce 5 × 10 = 50 eggs. The other five produce 5 eggs every two days, or 25 in 10 days. The total is 75.",
    hint: "Count the eggs from the daily layers and the alternate-day layers separately.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "Each square in the shape has area 4 cm². How long is the thick line?",
    options: ["16 cm", "18 cm", "20 cm", "21 cm", "23 cm"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the thick line's length depends on the squares it crosses in the source diagram.",
    hint: "A square of area 4 cm² has side length 2 cm. Count the side-length units along the thick line.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "Which of the following fractions is smaller than 2?",
    options: ["198/99", "98/99", "20/10", "21/11", "23/12"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the stacked fraction choices were unclear in extraction; verify each numerator and denominator from the source before confirming E.",
    hint: "Compare each numerator with twice its denominator; a fraction is less than 2 exactly when its numerator is smaller.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "How much does Dita weigh?",
    options: ["2 kg", "3 kg", "4 kg", "5 kg", "6 kg"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the balance or weighing diagram is needed to determine Dita's weight.",
    hint: "Use the equalities shown in the weighing diagram to compare Dita's weight with the known weights.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Peter looks more closely at a picture hanging on the wall through a magnifying glass. Which section can he not see?",
    options: ["A", "B", "C", "D", "E"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the full picture and magnified sections are visual and have not yet been included.",
    hint: "A magnifying glass enlarges one part of the picture without changing the pattern within that part.",
    sourcePage: 2
  },
  {
    number: 9,
    points: 4,
    prompt: "Each plant in John's garden has exactly five leaves, or exactly two leaves and one flower. Altogether, the plants have six flowers and 32 leaves. How many plants are there?",
    options: ["10", "12", "13", "15", "16"],
    answer: 0,
    explanation: "Six plants have flowers and two leaves each, accounting for 12 leaves. The remaining 20 leaves belong to 4 plants with five leaves each. There are 10 plants.",
    hint: "The six flowers identify six plants of the two-leaf type; subtract their leaves from the total.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "Andrea has four equally long strips of paper. Gluing two together with a 10 cm overlap makes a 50 cm strip. With the other two she wants a 56 cm strip. How large must the second overlap be?",
    options: ["4 cm", "6 cm", "8 cm", "10 cm", "12 cm"],
    answer: 0,
    explanation: "Each original strip is 30 cm because 2L - 10 = 50. To make 56 cm, the overlap must be 2 × 30 - 56 = 4 cm.",
    hint: "First find the length of one strip from the 50 cm result, then calculate the overlap needed for 56 cm.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "Thomas made the shown shape from six unit squares. What is its perimeter?",
    options: ["9", "10", "11", "12", "13"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement of the six unit squares is required to count the exposed edges.",
    hint: "Count the outer unit edges, or subtract twice the number of shared edges from 4 × 6.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Each day Maria writes the date and adds its digits. For example, on 23 March she writes 23.03 and calculates 2 + 3 + 0 + 3 = 8. What is the largest total she gets during a year?",
    options: ["7", "13", "14", "16", "20"],
    answer: 4,
    explanation: "The largest digit sum uses a date with day 29 and month 09: 2 + 9 + 0 + 9 = 20.",
    hint: "Choose the month and valid day whose written digits have the greatest possible sum.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "A rectangle is formed from four equally sized smaller rectangles. The shorter side is 10 cm. How long is the longer side?",
    options: ["40 cm", "30 cm", "20 cm", "10 cm", "5 cm"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the arrangement of the four smaller rectangles is shown in the source diagram.",
    hint: "Use the fact that all four smaller rectangles are congruent to relate their short and long sides in the assembled shape.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "Field Street has nine houses in a row, with at least one person in each. Every pair of neighbouring houses has at most six inhabitants altogether. What is the maximum number of people on Field Street?",
    options: ["23", "25", "27", "29", "31"],
    answer: 3,
    explanation: "The maximum arrangement alternates 5 and 1 inhabitants, starting and ending with 5. Every neighbouring pair totals 6, and the total is 5 × 5 + 4 × 1 = 29.",
    hint: "Each adjacent pair is capped at six, so large houses must be separated by houses with as few people as allowed.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "Lucy and her mother were both born in January. On 23 March 2015 Lucy adds their birth years and their ages. What total does she get?",
    options: ["4028", "4029", "4030", "4031", "4032"],
    answer: 2,
    explanation: "For each person, birth year plus age is 2015 because both January birthdays have already passed. The total is 2015 + 2015 = 4030.",
    hint: "For each person, add the birth year to the age reached after the birthday in January.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "A rectangle has area 12 cm² and natural-number side lengths. Which perimeter could it have?",
    options: ["20 cm", "26 cm", "28 cm", "32 cm", "48 cm"],
    answer: 1,
    explanation: "The integer factor pairs of 12 are 1 × 12 and 2 × 6, giving perimeters 26 cm and 16 cm. Only 26 cm is listed.",
    hint: "List the factor pairs of 12 and calculate 2(length + width) for each.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "Each of the nine sides of the triangles in the picture is coloured blue, green or red. Three sides are already red. Each triangle must have three different colours on its sides. Which colour can side x have?",
    options: ["Only blue", "Only green", "Only red", "Any of the three colours", "The described colouring is not possible"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the triangle connections and pre-coloured sides are shown in the source picture.",
    hint: "Use the three-different-colours rule on each triangle that contains side x.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "A sack contains 3 green apples, 5 yellow apples, 7 green pears and 2 yellow pears. Without looking, how many pieces of fruit must Sebastian take to be sure of getting an apple and a pear of the same colour?",
    options: ["9", "10", "11", "12", "13"],
    answer: 4,
    explanation: "In the worst case he could draw all 12 fruits that are not yellow apples, leaving only yellow apples. The next fruit guarantees a yellow apple and an already drawn yellow pear, or the analogous same-colour pair earlier; the guaranteed number is 13.",
    hint: "Consider the largest draw that could still avoid having both an apple and a pear of one colour.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "A new chess piece, the Kangaroo, jumps either three squares vertically and one horizontally, or three horizontally and one vertically. What is the fewest jumps needed to move from its current position to A?",
    options: ["2", "3", "4", "5", "6"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the starting square and target A are shown in the board diagram.",
    hint: "List the squares reachable in one jump, then check which of those can reach A in the next jump.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "Five songs play continuously in order: A 3 min, B 2 min 30 s, C 2 min, D 1 min 30 s and E 4 min. Song C is playing when Andy leaves. Exactly one hour later, which song is playing?",
    options: ["A", "B", "C", "D", "E"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the key appears to indicate C, but reducing 60 minutes modulo the 13-minute playlist and accounting for the unknown position within song C needs source clarification.",
    hint: "The playlist lasts 13 minutes; reduce one hour modulo 13, while accounting for when in song C Andy left.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Nina wants to make a cube from the shown paper net, which has seven squares. Which square or squares can she remove so the remaining six stay connected and form a cube net?",
    options: ["Only 4", "Only 7", "Only 3 or 4", "Only 3 or 7", "Only 3, 4 or 7"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the seven-square net is visual, and the possible removals must be tested against its exact layout.",
    hint: "After removing a square, check both that the net stays connected and that folding it can give six distinct cube faces.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "A train has 12 carriages with the same number of compartments in each. Mike sits in the 18th compartment behind the engine, in the third carriage. Joanna sits in the 50th compartment, in the seventh carriage. How many compartments are in each carriage?",
    options: ["7", "8", "9", "10", "12"],
    answer: 1,
    explanation: "The first two carriages contain 18 compartments, so a carriage has 9. The seventh carriage begins after 6 × 9 = 54 compartments, but the stated 50th compartment is in the seventh carriage; NEEDS_REVIEW because these details conflict.",
    hint: "Use the carriage numbers and compartment positions to infer the number in each carriage, then check both statements.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "In how many ways can three kangaroos be placed in three different squares so that no kangaroo has an immediate neighbour?",
    options: ["7", "8", "9", "10", "11"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the board shape and definition of immediate neighbour are shown in the source diagram.",
    hint: "Count placements that leave at least one empty square between each pair of kangaroos.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "Maria writes a number on each face of a cube. At each corner she adds the numbers on the three meeting faces. The totals are 14 at C, 16 at D and 24 at E. What is the total at F?",
    options: ["15", "19", "22", "24", "26"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the cube's face labels and corner relationships are needed to derive the total at F.",
    hint: "Write an equation for each known corner total and compare the three faces shared by neighbouring corners.",
    sourcePage: 3
  }
];

const sections2015Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2015Benjamin: QuestionSet = {
  id: "benjamin-2015",
  year: 2015,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 23, 2015",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2015/2015_Benjamin.pdf",
  questions: questions2015Benjamin,
  sections: sections2015Benjamin
};