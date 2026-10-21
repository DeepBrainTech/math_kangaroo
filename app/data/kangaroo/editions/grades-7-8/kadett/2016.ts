import type { Question, QuestionSet, Section } from "../../../types";

const questions2016Kadett: Question[] = [
  {
    number: 1,
    points: 3,
    prompt: "How many natural numbers lie between 3.17 and 20.16?",
    options: [
      "15",
      "16",
      "17",
      "18",
      "19"
    ],
    answer: 2,
    explanation: "The integers are 4 through 20 inclusive, giving 20−4+1=17.",
    hint: "List the first and last integers strictly inside the interval.",
    sourcePage: 1,
    optionContent: [
      {
        id: "1-0",
        type: "text",
        text: "15",
        imageAlt: "A option"
      },
      {
        id: "1-1",
        type: "text",
        text: "16",
        imageAlt: "B option"
      },
      {
        id: "1-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "1-3",
        type: "text",
        text: "18",
        imageAlt: "D option"
      },
      {
        id: "1-4",
        type: "text",
        text: "19",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 2,
    points: 3,
    prompt: "Which of the pictured road signs has the most axes of symmetry?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five sign shapes are visual.",
    hint: "Count the lines that divide each sign into matching mirror halves.",
    sourcePage: 1,
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-02.png",
    optionContent: [
      {
        id: "2-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "2-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "2-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "2-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "2-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 3,
    points: 3,
    prompt: "What is the sum of the two marked angles?",
    options: [
      "150°",
      "180°",
      "270°",
      "320°",
      "360°"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the angle diagram is visual.",
    hint: "Use straight-line and full-turn angle sums to combine the marked angles.",
    sourcePage: 1,
    optionContent: [
      {
        id: "3-0",
        type: "text",
        text: "150°",
        imageAlt: "A option"
      },
      {
        id: "3-1",
        type: "text",
        text: "180°",
        imageAlt: "B option"
      },
      {
        id: "3-2",
        type: "text",
        text: "270°",
        imageAlt: "C option"
      },
      {
        id: "3-3",
        type: "text",
        text: "320°",
        imageAlt: "D option"
      },
      {
        id: "3-4",
        type: "text",
        text: "360°",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-03.png"
  },
  {
    number: 4,
    points: 3,
    prompt: "Jim should have added 26 to a number. Instead he subtracted 26 and got −14. What would he have obtained by adding 26?",
    options: [
      "28",
      "32",
      "36",
      "38",
      "42"
    ],
    answer: 3,
    explanation: "The starting number satisfies x−26=−14, so x=12. Adding 26 gives 38.",
    hint: "First recover the original number from the incorrect subtraction.",
    sourcePage: 1,
    optionContent: [
      {
        id: "4-0",
        type: "text",
        text: "28",
        imageAlt: "A option"
      },
      {
        id: "4-1",
        type: "text",
        text: "32",
        imageAlt: "B option"
      },
      {
        id: "4-2",
        type: "text",
        text: "36",
        imageAlt: "C option"
      },
      {
        id: "4-3",
        type: "text",
        text: "38",
        imageAlt: "D option"
      },
      {
        id: "4-4",
        type: "text",
        text: "42",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 5,
    points: 3,
    prompt: "A card has a diagram on one side. It is flipped downwards and then to the right as shown. Which picture results?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 1,
    explanation: "NEEDS_REVIEW: the original card diagram and flip sequence are visual.",
    hint: "Track the image through each flip, including the change in orientation caused by turning right.",
    sourcePage: 1,
    optionContent: [
      {
        id: "5-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "5-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "5-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "5-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "5-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-05.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-05-extra.png"
  },
  {
    number: 6,
    points: 3,
    prompt: "45 teachers, or 60% of the school's teachers, cycle to school. Only 12% come by car. How many teachers come by car?",
    options: [
      "4",
      "6",
      "9",
      "10",
      "12"
    ],
    answer: 2,
    explanation: "There are 45/0.6=75 teachers; 12% of 75 is 9.",
    hint: "Find the total number of teachers, then calculate 12% of that total.",
    sourcePage: 1,
    optionContent: [
      {
        id: "6-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "6-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "6-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "6-3",
        type: "text",
        text: "10",
        imageAlt: "D option"
      },
      {
        id: "6-4",
        type: "text",
        text: "12",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 7,
    points: 3,
    prompt: "Renate combines 555 piles of 9 stones, then splits the total into groups of 5 stones. How many groups does she obtain?",
    options: [
      "999",
      "900",
      "555",
      "111",
      "45"
    ],
    answer: 0,
    explanation: "555×9÷5=999 groups.",
    hint: "Multiply to find all stones, then divide by five.",
    sourcePage: 1,
    optionContent: [
      {
        id: "7-0",
        type: "text",
        text: "999",
        imageAlt: "A option"
      },
      {
        id: "7-1",
        type: "text",
        text: "900",
        imageAlt: "B option"
      },
      {
        id: "7-2",
        type: "text",
        text: "555",
        imageAlt: "C option"
      },
      {
        id: "7-3",
        type: "text",
        text: "111",
        imageAlt: "D option"
      },
      {
        id: "7-4",
        type: "text",
        text: "45",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 8,
    points: 3,
    prompt: "In rectangle ABCD, AD=10 cm and M and N are the midpoints of AB and CD. What is the grey area?",
    options: [
      "50 cm²",
      "80 cm²",
      "100 cm²",
      "120 cm²",
      "150 cm²"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the rectangle's other dimensions and grey region are shown in the diagram.",
    hint: "Use the midpoint positions to find the shaded fraction of the rectangle's total area.",
    sourcePage: 1,
    optionContent: [
      {
        id: "8-0",
        type: "text",
        text: "50 cm²",
        imageAlt: "A option"
      },
      {
        id: "8-1",
        type: "text",
        text: "80 cm²",
        imageAlt: "B option"
      },
      {
        id: "8-2",
        type: "text",
        text: "100 cm²",
        imageAlt: "C option"
      },
      {
        id: "8-3",
        type: "text",
        text: "120 cm²",
        imageAlt: "D option"
      },
      {
        id: "8-4",
        type: "text",
        text: "150 cm²",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-08.png"
  },
  {
    number: 9,
    points: 3,
    prompt: "Alex has ropes of lengths 1 m and 2 m and cuts both into equal-length pieces. Which total number of pieces cannot be obtained?",
    options: [
      "6",
      "8",
      "9",
      "12",
      "15"
    ],
    answer: 1,
    explanation: "If each piece is 1/n metres, the ropes produce n and 2n pieces, for 3n total. Eight is not divisible by 3.",
    hint: "A common piece length must divide both rope lengths; count the pieces in both ropes together.",
    sourcePage: 1,
    optionContent: [
      {
        id: "9-0",
        type: "text",
        text: "6",
        imageAlt: "A option"
      },
      {
        id: "9-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "9-2",
        type: "text",
        text: "9",
        imageAlt: "C option"
      },
      {
        id: "9-3",
        type: "text",
        text: "12",
        imageAlt: "D option"
      },
      {
        id: "9-4",
        type: "text",
        text: "15",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 10,
    points: 3,
    prompt: "A cyclist starts at D, finishes at B and rides each shown road exactly once. How many routes are possible?",
    options: [
      "10",
      "8",
      "6",
      "4",
      "2"
    ],
    answer: 2,
    explanation: "NEEDS_REVIEW: the road graph and possible Euler trails are visual.",
    hint: "Enumerate trails from D to B that use each edge once.",
    sourcePage: 1,
    optionContent: [
      {
        id: "10-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "10-1",
        type: "text",
        text: "8",
        imageAlt: "B option"
      },
      {
        id: "10-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "10-3",
        type: "text",
        text: "4",
        imageAlt: "D option"
      },
      {
        id: "10-4",
        type: "text",
        text: "2",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-10.png"
  },
  {
    number: 11,
    points: 4,
    prompt: "Four identical rectangles fill a square. Each rectangle has perimeter 16 cm. What is the square's perimeter?",
    options: [
      "16 cm",
      "20 cm",
      "24 cm",
      "28 cm",
      "32 cm"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the rectangle arrangement is required to relate its side lengths to the square.",
    hint: "Use the rectangle perimeter and the way four copies meet to find the square's side.",
    sourcePage: 2,
    optionContent: [
      {
        id: "11-0",
        type: "text",
        text: "16 cm",
        imageAlt: "A option"
      },
      {
        id: "11-1",
        type: "text",
        text: "20 cm",
        imageAlt: "B option"
      },
      {
        id: "11-2",
        type: "text",
        text: "24 cm",
        imageAlt: "C option"
      },
      {
        id: "11-3",
        type: "text",
        text: "28 cm",
        imageAlt: "D option"
      },
      {
        id: "11-4",
        type: "text",
        text: "32 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-11.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-11-extra.png"
  },
  {
    number: 12,
    points: 4,
    prompt: "Petra has 49 blue pearls and one red pearl. How many blue pearls must she remove so that 90% of the remaining pearls are blue?",
    options: [
      "4",
      "10",
      "29",
      "39",
      "40"
    ],
    answer: 4,
    explanation: "Let x blue pearls be removed. (49−x)/(50−x)=0.9 gives x=40.",
    hint: "Set the remaining blue fraction equal to 90% and solve for x.",
    sourcePage: 2,
    optionContent: [
      {
        id: "12-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "12-1",
        type: "text",
        text: "10",
        imageAlt: "B option"
      },
      {
        id: "12-2",
        type: "text",
        text: "29",
        imageAlt: "C option"
      },
      {
        id: "12-3",
        type: "text",
        text: "39",
        imageAlt: "D option"
      },
      {
        id: "12-4",
        type: "text",
        text: "40",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 13,
    points: 4,
    prompt: "Which fraction is closest to 1/2?",
    options: [
      "25/79",
      "27/59",
      "29/57",
      "52/79",
      "57/92"
    ],
    answer: 2,
    explanation: "29/57 is about 0.509, closer to 1/2 than the other listed fractions.",
    hint: "Compare each fraction's distance from 1/2 by cross-multiplying.",
    sourcePage: 2,
    optionContent: [
      {
        id: "13-0",
        type: "text",
        text: "25/79",
        imageAlt: "A option"
      },
      {
        id: "13-1",
        type: "text",
        text: "27/59",
        imageAlt: "B option"
      },
      {
        id: "13-2",
        type: "text",
        text: "29/57",
        imageAlt: "C option"
      },
      {
        id: "13-3",
        type: "text",
        text: "52/79",
        imageAlt: "D option"
      },
      {
        id: "13-4",
        type: "text",
        text: "57/92",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 14,
    points: 4,
    prompt: "Tennis results are listed in random order: Bert beats Anton; Carl beats Damien; Glen beats Henry; Glen beats Carl; Carl beats Bert; Edon beats Fred; Glen beats Edon. Who plays the final?",
    options: [
      "Glen and Henry",
      "Glen and Carl",
      "Carl and Bert",
      "Glen and Edon",
      "Carl and Damien"
    ],
    answer: 1,
    explanation: "Glen beat Carl, who beat Bert, and Glen beat Edon, who beat Fred. The final was Glen against Carl.",
    hint: "Follow each winner into the next round and identify the two finalists.",
    sourcePage: 2,
    optionContent: [
      {
        id: "14-0",
        type: "text",
        text: "Glen and Henry",
        imageAlt: "A option"
      },
      {
        id: "14-1",
        type: "text",
        text: "Glen and Carl",
        imageAlt: "B option"
      },
      {
        id: "14-2",
        type: "text",
        text: "Carl and Bert",
        imageAlt: "C option"
      },
      {
        id: "14-3",
        type: "text",
        text: "Glen and Edon",
        imageAlt: "D option"
      },
      {
        id: "14-4",
        type: "text",
        text: "Carl and Damien",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 15,
    points: 4,
    prompt: "Anne glued cubes into the pictured solid. Which view cannot be obtained by turning the solid?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the cube arrangement and five candidate views are visual.",
    hint: "Compare the visible front, top and side faces under rotations of the same solid.",
    sourcePage: 2,
    optionContent: [
      {
        id: "15-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "15-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "15-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "15-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "15-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-15.png"
  },
  {
    number: 16,
    points: 4,
    prompt: "Tim, Tom and Jim are triplets. Their twin brothers John and James are three years younger. What could be the sum of all five ages on their birthday?",
    options: [
      "92",
      "89",
      "76",
      "53",
      "36"
    ],
    answer: 1,
    explanation: "If each triplet is x, the twins are x−3, so the sum is 5x−6. For x=19 the total is 89.",
    hint: "Express the five ages using x and x−3, then test the possible totals.",
    sourcePage: 2,
    optionContent: [
      {
        id: "16-0",
        type: "text",
        text: "92",
        imageAlt: "A option"
      },
      {
        id: "16-1",
        type: "text",
        text: "89",
        imageAlt: "B option"
      },
      {
        id: "16-2",
        type: "text",
        text: "76",
        imageAlt: "C option"
      },
      {
        id: "16-3",
        type: "text",
        text: "53",
        imageAlt: "D option"
      },
      {
        id: "16-4",
        type: "text",
        text: "36",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 17,
    points: 4,
    prompt: "A 3 cm wide strip is folded into a 27 cm by 9 cm rectangle as shown. How long is the strip?",
    options: [
      "36 cm",
      "48 cm",
      "54 cm",
      "57 cm",
      "81 cm"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the folded path of the strip is shown in the diagram.",
    hint: "Trace the strip through the folded rectangle and add the lengths of its straight sections.",
    sourcePage: 2,
    optionContent: [
      {
        id: "17-0",
        type: "text",
        text: "36 cm",
        imageAlt: "A option"
      },
      {
        id: "17-1",
        type: "text",
        text: "48 cm",
        imageAlt: "B option"
      },
      {
        id: "17-2",
        type: "text",
        text: "54 cm",
        imageAlt: "C option"
      },
      {
        id: "17-3",
        type: "text",
        text: "57 cm",
        imageAlt: "D option"
      },
      {
        id: "17-4",
        type: "text",
        text: "81 cm",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-17.png"
  },
  {
    number: 18,
    points: 4,
    prompt: "Jump moves 6 m per jump. Hop jumps 1 m, then 2 m, then 3 m, and so on. After how many jumps does Hop catch Jump?",
    options: [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    answer: 1,
    explanation: "After n jumps Hop has gone n(n+1)/2 metres and Jump 6n. Equality gives n+1=12, so n=11.",
    hint: "Equate the triangular-number distance to 6n.",
    sourcePage: 2,
    optionContent: [
      {
        id: "18-0",
        type: "text",
        text: "10",
        imageAlt: "A option"
      },
      {
        id: "18-1",
        type: "text",
        text: "11",
        imageAlt: "B option"
      },
      {
        id: "18-2",
        type: "text",
        text: "12",
        imageAlt: "C option"
      },
      {
        id: "18-3",
        type: "text",
        text: "13",
        imageAlt: "D option"
      },
      {
        id: "18-4",
        type: "text",
        text: "14",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 19,
    points: 4,
    prompt: "Seven identical dice are glued together as shown, with touching faces showing equal numbers. How many dots are visible on the surface?",
    options: [
      "24",
      "90",
      "95",
      "105",
      "126"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the arrangement and matching values on glued faces are visual.",
    hint: "Start with the total dots on seven dice and subtract the dots hidden on every glued face pair.",
    sourcePage: 2,
    optionContent: [
      {
        id: "19-0",
        type: "text",
        text: "24",
        imageAlt: "A option"
      },
      {
        id: "19-1",
        type: "text",
        text: "90",
        imageAlt: "B option"
      },
      {
        id: "19-2",
        type: "text",
        text: "95",
        imageAlt: "C option"
      },
      {
        id: "19-3",
        type: "text",
        text: "105",
        imageAlt: "D option"
      },
      {
        id: "19-4",
        type: "text",
        text: "126",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-19.png"
  },
  {
    number: 20,
    points: 4,
    prompt: "A class has 20 boys and girls. Two students share each desk. One third of the boys share with girls and half the girls share with boys. How many boys are there?",
    options: [
      "9",
      "12",
      "15",
      "16",
      "18"
    ],
    answer: 1,
    explanation: "The number of boy-girl desks is both b/3 and g/2, so 2b=3g. With b+g=20, b=12.",
    hint: "Equate the number of mixed desks counted from the boys' and girls' sides, then use the class total.",
    sourcePage: 2,
    optionContent: [
      {
        id: "20-0",
        type: "text",
        text: "9",
        imageAlt: "A option"
      },
      {
        id: "20-1",
        type: "text",
        text: "12",
        imageAlt: "B option"
      },
      {
        id: "20-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "20-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "20-4",
        type: "text",
        text: "18",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 21,
    points: 5,
    prompt: "A square of area 36 has grey regions totalling area 27. What is the sum a+b+c+d shown?",
    options: [
      "4",
      "6",
      "8",
      "9",
      "10"
    ],
    answer: 3,
    explanation: "NEEDS_REVIEW: the distances and grey-region arrangement are shown in the diagram.",
    hint: "Use the relationship between the grey areas and the marked lengths along the square.",
    sourcePage: 3,
    optionContent: [
      {
        id: "21-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "21-1",
        type: "text",
        text: "6",
        imageAlt: "B option"
      },
      {
        id: "21-2",
        type: "text",
        text: "8",
        imageAlt: "C option"
      },
      {
        id: "21-3",
        type: "text",
        text: "9",
        imageAlt: "D option"
      },
      {
        id: "21-4",
        type: "text",
        text: "10",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-21.png"
  },
  {
    number: 22,
    points: 5,
    prompt: "Theo's watch runs 10 minutes slow, but he thinks it is 5 minutes fast. Leo's runs 5 minutes fast, but he thinks it is 10 minutes slow. When Theo thinks it is 12:00, what time does Leo think it is?",
    options: [
      "11:30",
      "11:45",
      "12:00",
      "12:30",
      "12:45"
    ],
    answer: 3,
    explanation: "Theo's watch shows 12:05 when he thinks it is 12:00; actual time is 12:15. Leo's watch shows 12:20 and he thinks it is 10 minutes slow, so he thinks it is 12:30.",
    hint: "Convert Theo's belief to actual time, then convert actual time to Leo's displayed time and belief.",
    sourcePage: 3,
    optionContent: [
      {
        id: "22-0",
        type: "text",
        text: "11:30",
        imageAlt: "A option"
      },
      {
        id: "22-1",
        type: "text",
        text: "11:45",
        imageAlt: "B option"
      },
      {
        id: "22-2",
        type: "text",
        text: "12:00",
        imageAlt: "C option"
      },
      {
        id: "22-3",
        type: "text",
        text: "12:30",
        imageAlt: "D option"
      },
      {
        id: "22-4",
        type: "text",
        text: "12:45",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 23,
    points: 5,
    prompt: "Twelve girls average 1.5 muffins each; none eats more than two and two girls eat none. How many eat two muffins?",
    options: [
      "2",
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 4,
    explanation: "There are 18 muffins total. Ten girls eat at least one; if x eat two, the total is 2x+(10−x)=18, so x=8.",
    hint: "Use the total muffin count and the ten girls who ate at least one.",
    sourcePage: 3,
    optionContent: [
      {
        id: "23-0",
        type: "text",
        text: "2",
        imageAlt: "A option"
      },
      {
        id: "23-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "23-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "23-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "23-4",
        type: "text",
        text: "8",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 24,
    points: 5,
    prompt: "A basket starts full. Before each of three grandmothers, a wolf eats half the waffles; each grandmother receives the same amount, and the basket is empty after the third. Which number must divide the original amount?",
    options: [
      "4",
      "5",
      "6",
      "7",
      "9"
    ],
    answer: 3,
    explanation: "Working backwards through the halvings and equal servings shows the starting amount must be divisible by 7.",
    hint: "Let each grandmother receive x waffles and reverse the three halving steps to express the initial amount.",
    sourcePage: 3,
    optionContent: [
      {
        id: "24-0",
        type: "text",
        text: "4",
        imageAlt: "A option"
      },
      {
        id: "24-1",
        type: "text",
        text: "5",
        imageAlt: "B option"
      },
      {
        id: "24-2",
        type: "text",
        text: "6",
        imageAlt: "C option"
      },
      {
        id: "24-3",
        type: "text",
        text: "7",
        imageAlt: "D option"
      },
      {
        id: "24-4",
        type: "text",
        text: "9",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 25,
    points: 5,
    prompt: "A 4×4×4 cube contains 64 unit cubes, one grey. Grey cubes colour face-neighbours on day one; on day two all grey cubes colour their face-neighbours. How many are grey after day two?",
    options: [
      "11",
      "13",
      "15",
      "16",
      "17"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the initial grey cube's location in the 4×4×4 cube matters.",
    hint: "Count the cubes within Manhattan distance two of the initial grey cube, accounting for the starting position.",
    sourcePage: 3,
    optionContent: [
      {
        id: "25-0",
        type: "text",
        text: "11",
        imageAlt: "A option"
      },
      {
        id: "25-1",
        type: "text",
        text: "13",
        imageAlt: "B option"
      },
      {
        id: "25-2",
        type: "text",
        text: "15",
        imageAlt: "C option"
      },
      {
        id: "25-3",
        type: "text",
        text: "16",
        imageAlt: "D option"
      },
      {
        id: "25-4",
        type: "text",
        text: "17",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-25.png"
  },
  {
    number: 26,
    points: 5,
    prompt: "Distinct natural numbers are on a board. The two smallest multiply to 16 and the two largest to 225. What is the sum of all numbers?",
    options: [
      "38",
      "42",
      "44",
      "58",
      "243"
    ],
    answer: 2,
    explanation: "The two smallest must be 2 and 8, and the two largest must be 9 and 25: these are the only factor pairs in increasing order that leave room for distinct whole numbers between the pairs. No integer lies strictly between 8 and 9, so these are all the numbers. Their sum is 2+8+9+25=44.",
    hint: "Use factor pairs for 16 and 225, then determine which intermediate values must be present.",
    sourcePage: 3,
    optionContent: [
      {
        id: "26-0",
        type: "text",
        text: "38",
        imageAlt: "A option"
      },
      {
        id: "26-1",
        type: "text",
        text: "42",
        imageAlt: "B option"
      },
      {
        id: "26-2",
        type: "text",
        text: "44",
        imageAlt: "C option"
      },
      {
        id: "26-3",
        type: "text",
        text: "58",
        imageAlt: "D option"
      },
      {
        id: "26-4",
        type: "text",
        text: "243",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 27,
    points: 5,
    prompt: "A pentagon has circles centred at A, B, C, D and E; circles at the ends of each side touch. Which centre belongs to the largest circle?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the side lengths and tangent-circle diagram are visual.",
    hint: "Adjacent circle radii sum to the corresponding pentagon side length; solve the resulting radius equations.",
    sourcePage: 3,
    optionContent: [
      {
        id: "27-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "27-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "27-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "27-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "27-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-27.png"
  },
  {
    number: 28,
    points: 5,
    prompt: "A 14-cube pyramid has nine bottom cubes with distinct positive integers summing to 50. Each cube above is the sum of the four directly beneath it. What is the largest possible top number?",
    options: [
      "112",
      "110",
      "50",
      "120",
      "118"
    ],
    answer: 4,
    explanation: "NEEDS_REVIEW: the pyramid's exact support pattern determines the coefficients of the bottom numbers.",
    hint: "Express the top cube as a weighted sum of the nine bottom values, then assign larger values to larger coefficients.",
    sourcePage: 3,
    optionContent: [
      {
        id: "28-0",
        type: "text",
        text: "112",
        imageAlt: "A option"
      },
      {
        id: "28-1",
        type: "text",
        text: "110",
        imageAlt: "B option"
      },
      {
        id: "28-2",
        type: "text",
        text: "50",
        imageAlt: "C option"
      },
      {
        id: "28-3",
        type: "text",
        text: "120",
        imageAlt: "D option"
      },
      {
        id: "28-4",
        type: "text",
        text: "118",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-28.png"
  },
  {
    number: 29,
    points: 5,
    prompt: "Five train carriages each have at least one passenger. Neighbours are in the same or adjacent carriage. Each passenger has exactly 5 or 10 neighbours. How many passengers are there?",
    options: [
      "13",
      "15",
      "17",
      "20",
      "This is impossible"
    ],
    answer: 2,
    explanation: "Let the carriage counts be a,b,c,d,e. The neighbour rules give a+b, a+b+c, b+c+d, c+d+e and d+e each in {6,11}. Since c>0, the first two sums force a+b=6 and c=5; comparing the last two gives d+e=6. Then b+c+d must be 11, so b+d=6. The total is (a+b)+c+(d+e)=6+5+6=17.",
    hint: "For a passenger in each carriage, count everyone in that carriage and the two adjacent carriages.",
    sourcePage: 3,
    optionContent: [
      {
        id: "29-0",
        type: "text",
        text: "13",
        imageAlt: "A option"
      },
      {
        id: "29-1",
        type: "text",
        text: "15",
        imageAlt: "B option"
      },
      {
        id: "29-2",
        type: "text",
        text: "17",
        imageAlt: "C option"
      },
      {
        id: "29-3",
        type: "text",
        text: "20",
        imageAlt: "D option"
      },
      {
        id: "29-4",
        type: "text",
        text: "This is impossible",
        imageAlt: "E option"
      }
    ]
  },
  {
    number: 30,
    points: 5,
    prompt: "A 3×3×3 cube has 15 black and 12 white unit cubes. Five face views are shown. Which pattern is the sixth face?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    answer: 0,
    explanation: "NEEDS_REVIEW: the five visible faces and candidate sixth faces are visual.",
    hint: "Use the total black and white cube counts together with the five known face projections.",
    sourcePage: 3,
    optionContent: [
      {
        id: "30-0",
        type: "text",
        text: "A",
        imageAlt: "A option"
      },
      {
        id: "30-1",
        type: "text",
        text: "B",
        imageAlt: "B option"
      },
      {
        id: "30-2",
        type: "text",
        text: "C",
        imageAlt: "C option"
      },
      {
        id: "30-3",
        type: "text",
        text: "D",
        imageAlt: "D option"
      },
      {
        id: "30-4",
        type: "text",
        text: "E",
        imageAlt: "E option"
      }
    ],
    image: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-30.png",
    imageExtra: "/assets/kangaroo/grades-7-8/kadett/2016/questions/editor-q-30-extra.png"
  }
];

const sections2016Kadett: Section[] = [
  {
    points: 3,
    label: "Section 1",
    range: "Questions 1–10",
    accent: "coral"
  },
  {
    points: 4,
    label: "Section 2",
    range: "Questions 11–20",
    accent: "blue"
  },
  {
    points: 5,
    label: "Section 3",
    range: "Questions 21–30",
    accent: "purple"
  }
];

export const edition2016Kadett: QuestionSet = {
  id: "kadett-2016",
  year: 2016,
  group: "Kadett",
  grades: "Grades 7-8",
  location: "Austria",
  date: "March 17, 2016",
  timeLimitMinutes: 75,
  sourceUrl: "https://www.matematica.pt/en/docs/kangaroo/enunciados/2016/2016_Kadett.pdf",
  questions: questions2016Kadett,
  sections: sections2016Kadett,
};
