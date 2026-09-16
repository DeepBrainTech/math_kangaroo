import type { Question, QuestionSet, Section } from "../../../types";

const questions2022: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "In which box are the most triangles?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "After both small and composite triangles are counted, box B has the greatest total. Therefore B contains the most triangles.",
    hint: "Count the smallest triangles and then search for larger triangles whose sides are made from several smaller ones.",
    sourcePage: 2,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-e.png"
    ],
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "1-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-01-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "A sandwich and a juice cost 12 Euros together. \nA sandwich and two juices cost 14 Euros together.\nHow many Euros does one juice cost?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "The second purchase costs €14 − €12 = €2 more because it adds exactly one juice. One juice therefore costs €2, option B.",
    hint: "Write the two purchases as equations and subtract them; the sandwich price disappears, leaving one juice.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-02-diagram.png",
    imageAlt: "Original 2022 Felix question 2",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: " Anna cuts the picture of a mushroom in two halves.She then arranges the two pieces together to form a new picture.\nWhat could this new picture look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 4,
    explanation: "Only picture E joins the two original halves along their matching cut edges and closes into a valid new image. Thus E is possible.",
    hint: "The two pieces can be rearranged but cannot be stretched; compare the cut edges and the total outline of each proposed mushroom.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-e.png"
    ],
    imageAlt: "Original 2022 Felix question 3",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "3-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-03-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 4,
    points: 3,
    prompt: "In the four squares of a row there always have to be exactly two coins.\nIn the four squares below each other there also always have to be exactly two coins.\nOn which square does one more coin have to be placed?",
    options: [
      "square A",
      "square B",
      "square C",
      "square D",
      "square E"
    ],
    answer: 3,
    explanation: "Square D is the intersection of the deficient row and deficient column. Adding a coin there makes every row and column contain two coins, so D is correct.",
    hint: "Find the row with one coin missing and the column with one coin missing; their intersection identifies the only legal extra placement.",
    sourcePage: 2,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-04.png",
    imageAlt: "Original 2022 Felix question 4",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "square A",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "square B",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "square C",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "square D",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "square E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A monkey tears a piece from Captain Jack's map. What does the missing piece look like?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "Piece B has the complementary jagged edge and continues the map's lines without a break. It is the missing piece.",
    hint: "Continue the lines and colour bands across the torn edge, matching the exact shape of the missing boundary.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-05-diagram.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-e.png"
    ],
    imageAlt: "Original 2022 Felix question 5",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "5-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-05-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 6,
    points: 4,
    prompt: "These five animals are made up from different shapes.\nThere is one shape which is only used on one animal.\nOn which animal is this shape used?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 3,
    explanation: "The remaining one-use shape appears on animal D and nowhere else. Therefore D is the animal asked for.",
    hint: "List the component shapes of each animal and cross out every shape that appears on two or more animals.",
    sourcePage: 3,
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "6-0",
        type: "image",
        text: "",
        imageAlt: "A option",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-a.png"
      },
      {
        id: "6-1",
        type: "image",
        text: "",
        imageAlt: "B option",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-b.png"
      },
      {
        id: "6-2",
        type: "image",
        text: "",
        imageAlt: "C option",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-c.png"
      },
      {
        id: "6-3",
        type: "image",
        text: "",
        imageAlt: "D option",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-d.png"
      },
      {
        id: "6-4",
        type: "image",
        text: "",
        imageAlt: "E option",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-e.png"
      }
    ],
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-06-option-e.png"
    ]
  },
  {
    number: 7,
    points: 4,
    prompt: "There is an animal asleep in each of the five baskets.\nThe koala and the fox sleep in baskets with the same pattern and the same shape.\nThe kangaroo and the rabbit sleep in baskets with the same pattern.\nIn which basket does the mouse sleep?",
    options: [
      "Basket 1",
      "Basket 2",
      "Basket 3",
      "Basket 4",
      "Basket 5"
    ],
    answer: 4,
    explanation: "Those two matching conditions account for four baskets. Basket 5 is the only remaining basket, so it contains the mouse: E.",
    hint: "First pair the koala and fox by both pattern and shape, then pair the kangaroo and rabbit by pattern. The unpaired basket must belong to the mouse.",
    sourcePage: 3,
    imageAlt: "Original 2022 Felix question 7",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "Basket 1 ",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "Basket 2",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "Basket 3",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "Basket 4 ",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "Basket 5 ",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-07.png"
  },
  {
    number: 8,
    points: 4,
    prompt: "The picture shows one object made up of 5 identical building blocks.\nHow many building blocks touch exactly 3 others?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "Exactly two blocks have three face-sharing neighbours in the five-block construction. Thus the answer is B.",
    hint: "For every block, count neighbours only when the two blocks share a full face; touching at an edge or corner does not count.",
    sourcePage: 3,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-08.png",
    imageAlt: "Original 2022 Felix question 8",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "1",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "2",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "3",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "5",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 9,
    points: 4,
    prompt: "The kangaroo wants to visit the koala. On its way it is not allowed to jump through a square with water. Each arrow shows one jump on to a neighbouring field.\nWhich path is the kangaroo allowed to take?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 2,
    explanation: "Route C reaches the koala using neighbouring jumps and never lands on a water square. The other routes violate at least one condition.",
    hint: "Check each proposed route one jump at a time and reject it as soon as a landing square contains water.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09.png",
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-e.png"
    ],
    imageAlt: "Original 2022 Felix question 9",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "9-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-09-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 4,
    prompt: "Carl writes down a five-digit number.\nHe then places a shape on each of the five digits (see picture).\nHe places different shapes on different digits.\nHe places the same shape on the same digits.\nWhich number did Carl hide?",
    options: [
      "34426",
      "34526",
      "34423",
      "34424",
      "32446"
    ],
    answer: 0,
    explanation: "The repeated-shape pattern forces the digits to read 3, 4, 4, 2, 6. The hidden number is 34426, option A.",
    hint: "Equal shapes represent equal digits, while different shapes represent different digits. Use the repeated shape positions before checking the choices.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-10.png",
    imageAlt: "Original 2022 Felix question 10",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "34426",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "34526",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "34423",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "34424",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "32446",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 11,
    points: 5,
    prompt: "",
    options: [
      "10",
      "11",
      "12",
      "14",
      "16"
    ],
    answer: 2,
    explanation: "Counting the distinct stones on the complete path gives 12. Therefore the correct choice is C.",
    hint: "Trace the stone path around the figure and count a corner stone once even when two sides meet there.",
    sourcePage: 4,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-11.png",
    imageAlt: "Original 2022 Felix question 11",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "14",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "16",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 12,
    points: 5,
    prompt: "Below you see five pieces of lawn.\nWhich one has the smallest area of grass?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "Piece A contains the fewest equal area units among the five choices. Hence A has the smallest area of grass.",
    hint: "Break each lawn piece into the same area units, such as equal triangles or squares, so the outlines do not mislead you.",
    sourcePage: 4,
    optionImages: [
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-a.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-b.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-c.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-d.png",
      "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-e.png"
    ],
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "12-0",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-a.png",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-b.png",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-c.png",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-d.png",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "image",
        text: "",
        image: "/assets/kangaroo/grades-1-2/felix/2022/questions/q-12-option-e.png",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 5,
    prompt: "The numbers in the five circles around each house add up to 20. Some numbers are missing.\nWhich number does the question mark stand for?\n",
    options: [
      "3",
      "4",
      "7",
      "9",
      "14"
    ],
    answer: 3,
    explanation: "The missing circle must contribute 9 so that the five circles around the house total 20. Therefore the answer is D.",
    hint: "For the house containing the question mark, add the four visible circle values and subtract that sum from 20.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-13.png",
    imageAlt: "Original 2022 Felix question 13",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "3",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "4",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "7",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 5,
    prompt: "Dino walks from the entrance to the exit. He is only allowed to go through each room once. The rooms have numbers (see diagram). Dino adds up all the numbers of the rooms he walks through.\nWhat is the biggest result he can get this way?",
    options: [
      "27",
      "29",
      "32",
      "34",
      "36"
    ],
    answer: 3,
    explanation: "The best valid route visits rooms whose numbers add to 34. No route can include another room without repeating or breaking the path, so D is maximal.",
    hint: "Search routes from entrance to exit while forbidding repeated rooms; prefer high-numbered rooms, but only when the route remains connected.",
    sourcePage: 5,
    image: "/assets/kangaroo/grades-1-2/felix/2022/questions/editor-q-14.png",
    imageAlt: "Original 2022 Felix question 14",
    imageClass: "question-diagram",
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "27",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "29",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "32",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "34",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 5,
    prompt: "The three zebras Runa, Zara and Biba take part in a competition. The winner is the zebra with the most stripes. \n\nRuna has 15 stripes.\nZara has 3 stripes more than Runa.\nRuna has 5 stripes less than Biba.\n\nHow many stripes does the winner have?",
    options: [
      "16",
      "18",
      "20",
      "21",
      "22"
    ],
    answer: 2,
    explanation: "Zara has 15 + 3 = 18 stripes, while Biba has 15 + 5 = 20. Biba wins with 20 stripes, option C.",
    hint: "Compute Zara's and Biba's stripe counts separately from Runa's 15, then compare the two results.",
    sourcePage: 5,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "16",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "18",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "20",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "21",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "22",
        imageAlt: "E option"
      }
    ]
  }
];

const sections2022: Section[] = [
  {
    points: 3,
    label: "Foundations",
    range: "Questions 1-5",
    accent: "coral"
  },
  {
    points: 4,
    label: "Reasoning",
    range: "Questions 6-10",
    accent: "blue"
  },
  {
    points: 5,
    label: "Challenge",
    range: "Questions 11-15",
    accent: "purple"
  }
];

export const edition2022: QuestionSet = {
  id: "2022",
  year: 2022,
  group: "Felix",
  grades: "Grades 1-2",
  location: "Austria",
  date: "March 17, 2022",
  timeLimitMinutes: 60,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2022/2022_Felix.pdf",
  questions: questions2022,
  sections: sections2022,
};
