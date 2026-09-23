# Kangaroo edition reference

## Current app contract

The app's QuestionSet model supports these grade bands and groups. Confirm the current unions in app/data/kangaroo/types.ts before adding a category.

| Grade band | Group |
| --- | --- |
| Grades 1-2 | Felix |
| Grades 3-4 | Ecolier |
| Grades 5-6 | Benjamin |
| Grades 7-8 | Kadett |
| Grades 9-10 | Junior |
| Grades 11-12 | Student |

Difficulty currently permits point values 3, 4, and 5. The paper determines how many questions there are, how many choices each has, the answer labels/order, scoring bands, section boundaries, and time limit. Do not copy those values from an example or another category.

## Data shape

Question.answer is a zero-based index into options. For standard A-E choices, A maps to 0, B to 1, C to 2, D to 3, and E to 4. Build the mapping from the source's actual choice order and check that the answer index is less than the number of choices.

Use optionContent only when a choice needs both text and an image or when the existing editor format requires it. For ordinary text choices, options is the source of truth. If individual visual choices are used, keep optionImages in the same order as options, with one image per choice.

Edition files belong under app/data/kangaroo/editions/grades-x-y/group-slug/year.ts. Public assets belong under public/assets/kangaroo/grades-x-y/group-slug/year/questions/. Use the nearest edition in the same category and app/data/kangaroo/editions/README.md for conventions.

Use the values read from the selected paper for year, group, grades, date, location, timeLimitMinutes, sourceUrl, questions, and sections. The number of question objects and section ranges must match that paper. A question may have an empty text prompt only when a verified question-level visual preserves the necessary source content; uncertainty in OCR or image interpretation is NEEDS_REVIEW.

## Visual decision guide

Choose the smallest representation that preserves meaning:

- Use image for a map, graph, diagram, reference object, or puzzle board shown in the prompt.
- Use imageExtra for a source strip containing visual choices when their relative scale or arrangement matters.
- Use optionImages for separately displayed visual choices. Confirm the renderer adds choice labels; if it does, crop those labels out of the individual files.
- Use both image and optionImages when the question has a prompt diagram plus separate visual choices.

Do not use a full PDF page as image. Do not make a crop that contains a neighboring question. Keep enough white margin to avoid clipping thin lines, but remove unrelated page content.

## Source verification record

While working, keep a temporary record outside the app source tree unless the user asks otherwise:

    year
    grade_band
    group
    paper_pdf_url
    answer_pdf_url
    answer_key_section
    language_or_version
    paper_pdf_sha256 (optional)
    page_count
    question_count
    choice_count_by_question
    point_bands_and_sections
    visual_asset_map
    answer_key_entries
    independent_answers
    review_flags

This record can be discarded after the final report. It is useful when the answer PDF covers multiple categories, is image-only, or a crop needs to be regenerated.

## Common failure modes

- A year row has several Test links. Follow the column for the requested grade band/group, not the first link.
- An Answers PDF may contain multiple groups. Verify the selected group's answer-key section and paper version before mapping answers.
- Some year/category cells may be blank. Discover available editions from the index; do not infer missing PDFs from a URL pattern.
- PDF text extraction may drop symbols, diagrams, superscripts, currency signs, or negative signs. Compare the rendered page before finalizing.
- An image can exist but be mapped to the wrong question or category. Check its source page, question number, and folder.
- A visual choice strip can look valid when split into individual files but lose scale, labels, or orientation. Keep it combined when those properties matter.
- answer: 1 means the second source choice; for A-E labels that is B.
- A successful TypeScript build proves syntax and asset paths, not that the transcription, diagram, or mathematics is correct.
