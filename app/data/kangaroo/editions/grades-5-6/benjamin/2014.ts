import type { Question, QuestionSet, Section } from "../../../types";

const questions2014Benjamin: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "Arno lays out KANGAROO using eight cards, but some cards are turned. K needs two turns to be corrected and A needs one. How many turns are needed to read the whole word correctly?",
    options: ["4", "5", "6", "7", "8"],
    answer: 2,
    explanation: "NEEDS_REVIEW: the orientations of all eight letter cards are shown in the source drawing.",
    hint: "Count how many turns are needed for each card, using the examples for K and A to interpret the card orientations.",
    sourcePage: 1
  },
  {
    number: 2,
    points: 3,
    prompt: "A cake weighs 900 g and is cut into four pieces. The biggest piece weighs exactly as much as the other three pieces together. How much does the biggest piece weigh?",
    options: ["250 g", "300 g", "400 g", "450 g", "600 g"],
    answer: 3,
    explanation: "The biggest piece is half of the total because it equals the weight of all the other pieces together. Half of 900 g is 450 g.",
    hint: "The biggest piece and the other three pieces have equal weight and together make the whole cake.",
    sourcePage: 1
  },
  {
    number: 3,
    points: 3,
    prompt: "A white ring and a grey ring are interlinked. Peter sees them from the front as in the diagram. What does Paul see from the back?",
    options: ["A", "B", "C", "D", "E"],
    answer: 3,
    explanation: "NEEDS_REVIEW: the interlinked rings and five back-view choices are visual.",
    hint: "Imagine looking at the same rings from the opposite side; the front-to-back order reverses.",
    sourcePage: 1
  },
  {
    number: 4,
    points: 3,
    prompt: "In the addition sum, three digits have been replaced with stars: 1★2 + 1★3 + 1★4 = 309. What is the sum of the three missing digits?",
    options: ["0", "1", "2", "3", "10"],
    answer: 0,
    explanation: "The hundreds digits sum to 3 and the units digits sum to 9, so there is no carry into the tens column. The three star digits therefore sum to 0.",
    hint: "Check the units and hundreds columns first to see whether either creates a carry into the tens column.",
    sourcePage: 1
  },
  {
    number: 5,
    points: 3,
    prompt: "What is the difference between the smallest five-digit number and the largest four-digit number?",
    options: ["1", "10", "1111", "9000", "9900"],
    answer: 0,
    explanation: "The smallest five-digit number is 10,000 and the largest four-digit number is 9,999. Their difference is 1.",
    hint: "Write the two numbers at the boundary between four and five digits.",
    sourcePage: 1
  },
  {
    number: 6,
    points: 3,
    prompt: "A square with perimeter 48 cm is cut into two equal pieces with one cut. The pieces are fitted together to make the rectangle shown. What is the rectangle's perimeter?",
    options: ["24 cm", "30 cm", "48 cm", "60 cm", "72 cm"],
    answer: 3,
    explanation: "The square's side is 48 ÷ 4 = 12 cm. The cut makes two 12-by-6 cm rectangles; placed end to end, they make a 24-by-6 cm rectangle with perimeter 2 × (24 + 6) = 60 cm.",
    hint: "Find the square's side length, then read the two side lengths of the rearranged rectangle from the cut pieces.",
    sourcePage: 1
  },
  {
    number: 7,
    points: 3,
    prompt: "Katrin has 38 matches and uses all of them to make a triangle and a square that do not share matches. Each side of the triangle uses 6 matches. How many matches make one side of the square?",
    options: ["4", "5", "6", "7", "8"],
    answer: 1,
    explanation: "The triangle uses 3 × 6 = 18 matches, leaving 20 for the square. Each of its four sides uses 20 ÷ 4 = 5 matches.",
    hint: "Subtract the triangle's matches from 38, then divide the remainder equally among the square's four sides.",
    sourcePage: 1
  },
  {
    number: 8,
    points: 3,
    prompt: "Grey and white pearls are threaded on a string. Monika wants five grey pearls and can pull pearls only from an end. What is the minimum number of white pearls she must pull off as well?",
    options: ["2", "3", "4", "5", "6"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the order of the grey and white pearls on the string is shown only in the source picture.",
    hint: "Starting from either end, continue until the fifth grey pearl has been removed and count the white pearls passed.",
    sourcePage: 1
  },
  {
    number: 9,
    points: 4,
    prompt: "A witch competes in a five-round broomstick race. The table shows the times when she crossed the starting line. Which round was her fastest?",
    options: ["The first", "The second", "The third", "The fourth", "The fifth"],
    answer: 1,
    explanation: "The round times are 29, 19, 42, 62 and 24 minutes, found by subtracting each crossing time from the previous one. The second round is shortest at 19 minutes, so the answer is B.",
    hint: "Subtract consecutive crossing times to find the length of each round, then compare those intervals.",
    sourcePage: 2
  },
  {
    number: 10,
    points: 4,
    prompt: "Which square must replace the question mark so that the white and black areas are equal?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the coloured-square patterns are visual and have not yet been included.",
    hint: "Compare black and white area in each candidate, splitting shapes into equal smaller regions if needed.",
    sourcePage: 2
  },
  {
    number: 11,
    points: 4,
    prompt: "At a holiday camp, 7 children eat ice cream every day and 9 eat it every other day. The rest never eat ice cream. Yesterday 13 children ate ice cream. How many will eat it today?",
    options: ["7", "8", "9", "10", "11"],
    answer: 3,
    explanation: "Six of the nine every-other-day children ate yesterday, leaving three for today. Adding the seven daily eaters gives 10.",
    hint: "Of the 13 who ate yesterday, 7 eat every day; the remaining eaters belong to the alternating group.",
    sourcePage: 2
  },
  {
    number: 12,
    points: 4,
    prompt: "Kangaroos A, B, C, D and E sit clockwise in that order. After a bell, all but one change seats with a neighbour. They then sit clockwise in the order A, E, B, D, C. Which kangaroo did not change places?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the exact simultaneous seat-swap interpretation and final arrangement need to be checked against the source diagram.",
    hint: "Compare each kangaroo's original and final neighbours, remembering that a change must be to an adjacent seat.",
    sourcePage: 2
  },
  {
    number: 13,
    points: 4,
    prompt: "A square can be made from four of the given pieces. Which piece will not be used?",
    options: ["A", "B", "C", "D", "E"],
    answer: 1,
    explanation: "NEEDS_REVIEW: the five piece shapes are visual and have not yet been included.",
    hint: "Compare the pieces' areas and edges, then check which four can combine to form the square outline.",
    sourcePage: 2
  },
  {
    number: 14,
    points: 4,
    prompt: "The three digits of a three-digit number multiply to 135. What is their sum?",
    options: ["14", "15", "16", "17", "18"],
    answer: 3,
    explanation: "The one-digit factors of 135 that form three digits are 3, 5 and 9. Their sum is 17.",
    hint: "Factor 135 into three one-digit factors and add the digits.",
    sourcePage: 2
  },
  {
    number: 15,
    points: 4,
    prompt: "A restaurant has 16 tables with 3, 4 or 6 chairs each. The tables with 3 or 4 chairs seat 36 guests altogether, and all tables seat 72. How many tables have 3 chairs?",
    options: ["4", "5", "6", "7", "8"],
    answer: 0,
    explanation: "The six-chair tables account for 72 - 36 = 36 seats, so there are 6 such tables. The other 10 tables seat 36: if x have 3 chairs, the rest have 4, so 3x + 4(10 - x) = 36 and x = 4.",
    hint: "First find how many six-chair tables there are, then use the number and total seats of the 3- and 4-chair tables.",
    sourcePage: 2
  },
  {
    number: 16,
    points: 4,
    prompt: "Points A, B, C, D, E and F lie in that order on a line. AF = 35, AC = 12, BD = 11, CE = 12 and DF = 16. What is BE?",
    options: ["13", "14", "15", "16", "17"],
    answer: 3,
    explanation: "Set A = 0. Then C = 12, D = 35 - 16 = 19, B = 19 - 11 = 8, and E = 12 + 12 = 24. Thus BE = 24 - 8 = 16.",
    hint: "Place A at 0 and use the known distances to locate C, D, B and E on the line.",
    sourcePage: 2
  },
  {
    number: 17,
    points: 5,
    prompt: "Lea has some marbles. Grouping them in threes leaves 2 over, and grouping them in fives also leaves 2 over. How many more marbles are needed to make both groupings exact?",
    options: ["3", "1", "4", "10", "13"],
    answer: 4,
    explanation: "The number is 2 more than a multiple of both 3 and 5, so it is 2 more than a multiple of 15. Adding 13 reaches the next multiple of 15.",
    hint: "Find the smallest amount to add to a remainder of 2 so the result is divisible by both 3 and 5.",
    sourcePage: 3
  },
  {
    number: 18,
    points: 5,
    prompt: "A die's faces are labelled 1 through 6. Faces 1 and 6, 1 and 5, 1 and 2, 6 and 5, 6 and 4, and 6 and 2 share edges. Which number is opposite face 4?",
    options: ["1", "2", "3", "5", "6"],
    answer: 0,
    explanation: "Face 6 is adjacent to 1, 2, 4 and 5, so it is opposite 3. Face 1 is adjacent to 2, 5 and 6, leaving 4 opposite 1.",
    hint: "A die face has four neighbours and one opposite face. Use the given neighbour lists to find the missing opposite pair.",
    sourcePage: 3
  },
  {
    number: 19,
    points: 5,
    prompt: "Some unit cubes are removed from a 3 × 3 × 3 cube. The pictures show the result from the right, above and in front. How many small cubes were removed?",
    options: ["1", "4", "5", "6", "7"],
    answer: 4,
    explanation: "NEEDS_REVIEW: the three projections are necessary to determine which of the 27 cubes remain.",
    hint: "Use all three views together to identify occupied positions; a cube must agree with each projection it appears in.",
    sourcePage: 3
  },
  {
    number: 20,
    points: 5,
    prompt: "Five songs play one after another: A lasts 3 minutes, B 2 minutes 30 seconds, C 2 minutes, D 1 minute 30 seconds and E 4 minutes. Song C is playing when Andy leaves home. Exactly one hour later, which song is playing?",
    options: ["A", "B", "C", "D", "E"],
    answer: 0,
    explanation: "The playlist lasts 13 minutes, so 60 minutes is four full playlists plus 8 minutes. From any point in C, the remaining part of C followed by D and E takes between 5.5 and 7.5 minutes. Thus A has started by the 8-minute mark, but has played for less than 3 minutes, so A is still playing.",
    hint: "Find the playlist length, then track the remaining part of C before D and E; Andy need not leave at the start of a song.",
    sourcePage: 3
  },
  {
    number: 21,
    points: 5,
    prompt: "Daniela fills a 3 × 3 table with digits 1 to 9, one per square. The positions of 1, 2, 3 and 4 are shown. Adjacent squares share a side. The sum of the digits adjacent to 5 is 9. What is the sum of the digits adjacent to 6?",
    options: ["14", "15", "17", "28", "29"],
    answer: 4,
    explanation: "The 5 cannot go at the centre, whose four neighbours would all be larger, or at the top, right or bottom middle: their neighbour sums would force a repeated digit. So 5 is at the middle-left, next to 1, 2 and 6; the sum 1 + 2 + 6 = 9 fixes the centre as 6. Its neighbours are 5, 7, 8 and 9, which sum to 29.",
    hint: "Use the corner digits to test where 5 can fit; its neighbours must add to 9. Then add the digits around the resulting position of 6.",
    sourcePage: 3
  },
  {
    number: 22,
    points: 5,
    prompt: "The king travels at 5 km/h from his castle to his summer residence. Each hour he sends a messenger back to the castle at 10 km/h. What is the time difference between two consecutive messengers arriving at the castle?",
    options: ["30 min", "60 min", "75 min", "90 min", "120 min"],
    answer: 3,
    explanation: "One hour after the king starts, the first messenger travels 5 km back and takes 30 minutes. Each later messenger starts 5 km farther away, adding 30 minutes of travel, so arrivals are 90 minutes apart.",
    hint: "Each messenger leaves one hour after the previous one, but starts 5 km farther along the road and travels at 10 km/h.",
    sourcePage: 3
  },
  {
    number: 23,
    points: 5,
    prompt: "Mia writes three single-digit numbers whose sum is 15. Ali replaces one number with 3. Resi multiplies the three new numbers and gets 36. Which number could Ali have replaced?",
    options: ["Either 6 or 7", "Either 7 or 8", "Only 6", "Only 7", "Only 8"],
    answer: 1,
    explanation: "The two unchanged digits must multiply to 36 ÷ 3 = 12. They can be 2 and 6, leaving 7 as the replaced number, or 3 and 4, leaving 8.",
    hint: "The unchanged pair multiplies to 12 and, because the original sum was 15, its sum determines the replaced digit.",
    sourcePage: 3
  },
  {
    number: 24,
    points: 5,
    prompt: "Grandma gives 180 marbles to her ten grandchildren, with no two receiving the same number. Anna receives the most. What is the minimum number of marbles Anna could receive?",
    options: ["19", "20", "21", "22", "23"],
    answer: 4,
    explanation: "If Anna gets x, the largest possible total for ten distinct nonnegative amounts below x is x + (x-1) + … + (x-9) = 10x - 45. For x = 22 this is 175, too few; x = 23 can reach 180, so 23 is the minimum.",
    hint: "To make Anna's amount as small as possible, give the other nine children the largest distinct amounts below hers.",
    sourcePage: 3
  }
];

const sections2014Benjamin: Section[] = [
  { points: 3, label: "Section 1", range: "Questions 1–8", accent: "coral" },
  { points: 4, label: "Section 2", range: "Questions 9–16", accent: "blue" },
  { points: 5, label: "Section 3", range: "Questions 17–24", accent: "purple" }
];

export const edition2014Benjamin: QuestionSet = {
  id: "benjamin-2014",
  year: 2014,
  group: "Benjamin",
  grades: "Grades 5-6",
  location: "Austria",
  date: "March 20, 2014",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2014/2014_Benjamin.pdf",
  questions: questions2014Benjamin,
  sections: sections2014Benjamin
};