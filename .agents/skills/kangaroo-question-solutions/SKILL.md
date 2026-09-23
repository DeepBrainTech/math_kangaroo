---
name: kangaroo-question-solutions
description: Write individualized hints and worked explanations for finalized Kangaroo question sets using each question's current wording, visuals, choices, and confirmed answer. Use after manual question correction; also remove image files proven unused within the requested edition scope.
---

# Kangaroo question solutions

Use this workflow after the user has manually corrected the target edition's prompts, visuals, choices, and answers. The Grades 1-2 Felix and Grades 3-4 Ecolier editions in this repository are completed style examples. Read representative questions from both before writing so the new text matches their language, age level, and level of detail. Do not copy their wording or force a repeated structure onto new questions.

This skill adds or revises only `hint` and `explanation` for the editions the user names. It does not import or re-transcribe PDFs, change confirmed prompts, choices, answers, metadata, or visual crops. If the user asks to verify or rebuild source content, use the edition-import workflow instead.

## Inspect the project and examples

1. Follow repository instructions and confirm the app root. Read `app/data/kangaroo/types.ts`, `app/data/kangaroo/editions/README.md`, and the target edition files.
2. Read representative completed questions from both `app/data/kangaroo/editions/grades-1-2/felix/` and `app/data/kangaroo/editions/grades-3-4/ecolier/`. Use them to learn the established student-facing voice, not as templates or sources of mathematical reasoning for unrelated questions.
3. Confirm the requested year, grade band, group, and target question range. Do not rewrite already-completed editions unless the user names them.
4. Inspect every target question's prompt, all answer choices, stored answer index, and every referenced question or option image. Open the images when they contain information needed to solve the problem; do not infer their contents from filenames or alt text alone.

## Write each hint and explanation

Treat the current, manually checked question data and images as the working source. For each question, independently solve or reason through it before writing. Map `answer` as a zero-based index into `options`, and check the corresponding text or visual choice. Consider `optionContent` and `optionImages` as well as `options`; the displayed choices may be visual or mixed.

Write the two fields for that question's actual reasoning:

- `hint` gives a useful next step, observation, or representation that helps the student begin. It should guide without giving away the final answer or simply restating the explanation.
- `explanation` shows enough of the reasoning to understand why the stored answer is correct. Include the relevant counting, calculation, comparison, or diagram logic, and connect the result to the selected option when useful.

Keep language appropriate to the question's grade band and consistent with the edition's language. Make the explanation clear to a student encountering the idea for the first time. Use the shortest explanation that still shows the reasoning; do not settle for only naming the answer when the question needs a derivation.

Make every hint and explanation specific to its question. Do not fill fields with generic advice, boilerplate, canned openings or endings, or a shared sentence template. Vary the reasoning because the mathematical idea calls for it, not merely to make wording look different. Reuse ordinary mathematical terms when they are accurate.

If the stored answer conflicts with the question, choices, or independent reasoning; if a needed image is missing or unclear; or if the question does not contain enough information, do not alter the confirmed answer or invent a rationale. Leave that question's content unchanged and report it as `NEEDS_REVIEW`, with its edition, question number, and the specific issue.

Edit only the `hint` and `explanation` values for the requested questions. Preserve all other fields and unrelated working-tree changes. Keep source files UTF-8 and use `apply_patch` for edits to files containing Chinese or mixed-language text.

## Remove unused images safely

After editing, check for unused image files in the asset directories for the requested edition(s). Interpret “unused” across the whole project, not just the selected edition file: an asset must have no remaining reference in question data, `optionContent`, editor or registry data, manifests, or application code.

Before deciding an image is unused, inspect the current image-loading and path-generation code. This project has `app/data/kangaroo/visual-assets.ts` and `app/data/kangaroo/shared.ts`, which can construct image paths from edition metadata rather than listing every filename in an edition file. Account for these and any other dynamic or persisted references. Do not delete an image solely because a text search of one edition file did not find its filename. If a reference cannot be ruled out, retain the file and report it for review.

Limit deletion to image files inside the user-requested edition asset directories. Do not delete assets elsewhere, PDFs, source documents, or whole directories. Build an exact list of confirmed unreferenced image paths, delete only those files, then re-scan the project and confirm that every remaining referenced image exists. Report how many images were removed and identify any uncertain candidates left in place.

## Final review and report

For every requested question, confirm that both fields are non-empty, the hint does not reveal the solution, and the explanation supports the existing answer using the actual prompt and visuals. Confirm no other question fields changed. Run an available structural edition validator for the touched edition when appropriate; it does not verify mathematical reasoning, so do not treat it as a substitute for reviewing each solution. Do not run broad lint/build checks unless the user requests them.

Report the editions and question ranges handled, any `NEEDS_REVIEW` items, whether structural validation ran and its result, and the exact count/scope of images removed. Mention any candidate images retained because a dynamic reference could not be ruled out.
