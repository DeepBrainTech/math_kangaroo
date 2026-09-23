---
name: kangaroo-edition-import
description: Import, complete, rebuild, or audit Kangaroo Math papers for any grade band and competition group supported by this question-bank project. Use the Matematica.pt index to find paper and answer-key PDFs, verify content and visuals against those sources, register editions, and check the app schema and assets.
---

# Kangaroo edition import

Use this workflow for a requested year and grade band/group. The goal is a review-ready edition: every question, answer choice, answer, explanation, hint, and visual must agree with the linked paper and its matching answer key. Never claim that an edition is verified when a source, answer-key, or image check was skipped.

## Project contract

The app currently lives at the repository root. Confirm the app root by checking for app/data/kangaroo/ and package.json; do not assume a my-app/ subdirectory.

- Edition source: app/data/kangaroo/editions/grades-x-y/group-slug/year.ts
- Assets: public/assets/kangaroo/grades-x-y/group-slug/year/questions/
- Registry: app/data/kangaroo/index.ts
- Shared types: app/data/kangaroo/types.ts
- Edition conventions: app/data/kangaroo/editions/README.md
- PDF discovery index: https://www.matematica.pt/en/useful/kangaroo-questions.php

The source index currently lists these grade bands and groups; confirm the requested row and the app types each time because available years can differ by group:

| Grade band | Group |
| --- | --- |
| Grades 1-2 | Felix |
| Grades 3-4 | Ecolier |
| Grades 5-6 | Benjamin |
| Grades 7-8 | Kadett |
| Grades 9-10 | Junior |
| Grades 11-12 | Student |

Directory slugs use the grade band in lowercase (grades-1-2, etc.) and the group name in lowercase (felix, etc.). Use the exact GradeBand and KangarooGroup values from types.ts. If the requested source group is not represented in the app types, stop and report the incompatibility before changing shared types.

Difficulty currently permits point values 3, 4, and 5. Read the selected paper for its actual scoring bands, question count, choice count, duration, and sections. Do not reuse Ecolier's values for another group or assume they stay constant between years. If the paper uses a point value the app cannot represent, report the schema mismatch rather than coercing it.

Respect repository instructions: do not run git add; keep all source files UTF-8; use apply_patch for edits to files containing Chinese or mixed-language text; do not overwrite unrelated user changes.

## End-to-end workflow

### 1. Discover the selected grade band's source files

1. Open the Matematica.pt index and identify the requested grade/category column. The current table uses Felix, Ecolier, Benjamin, Kadett, Junior, and Student; do not select the first Test link by position.
2. For the requested year, follow that category's Test link and the row's Answers link. An answer PDF may contain keys for several categories; find the section that matches the selected group, year, and paper version.
3. Verify the PDFs themselves: confirm year, group/grade band, language or national version, and any printed date/location. Record the exact final paper URL, answer PDF URL, and answer-key section. The Matematica.pt page is a discovery index; describe the linked PDF's source accurately and do not assume the index itself is the contest organizer.
4. Discover available years separately for the selected category. Blank cells mean that a paper is not listed for that category/year; do not invent a year or URL.
5. Compare discovered papers with files in that category's edition directory and the registry in app/data/kangaroo/index.ts. Process missing editions unless the user explicitly asks to rebuild or audit existing ones.
6. Cache source PDFs outside the app source tree when practical. Keep only derived question assets and TypeScript edition data in the app unless the user asks to retain source PDFs.

### 2. Extract and cross-check the paper

Use the selected category's question PDF and its matching answer key.

1. Read the paper to establish its actual question count, numbering, answer-choice count/order, point bands, section boundaries, and time limit. Do not infer these from another group or year.
2. Extract PDF text with a real PDF tool. If text extraction is incomplete, render pages at high resolution and use OCR only as a draft; visually verify notation, words, labels, and choices against the PDF.
3. Transcribe each question faithfully. Preserve numbers, units, names, comparisons, qualifiers such as “exactly”, “at least”, and “cannot”, and the source order of all answer choices. Minor whitespace and obvious line-break cleanup is allowed; changing mathematical meaning is not.
4. Store choices in options in the exact source order. Use text for textual choices and the existing visual fields for picture choices. The app stores answer as a zero-based index into options; for A-E choices, A=0 through E=4. If the source uses another label scheme, map by source order and confirm the matching key entry.
5. Read the answer key independently of the transcription. If a key covers multiple groups, use only the selected category's answers. Independently solve or logically check each question; if the solution and key disagree, mark that question NEEDS_REVIEW instead of silently changing the key.
6. Write an accurate explanation and useful hint only after establishing the answer. Both must agree with the selected answer key and must not add assumptions absent from the paper.
7. Transcribe prompt text whenever it can be read. If essential wording is inseparable from a source visual, retain that visual as a question-level image and verify it visually. Do not leave a prompt blank because OCR failed; mark uncertain content NEEDS_REVIEW.

### 3. Extract visual assets correctly

Inspect the original PDF page before cropping. Prefer extracting an embedded image or a high-resolution page crop over a low-resolution screenshot. Use PNG for line art/diagrams, SVG when the source is clean vector art, and JPEG only when appropriate for a photographic/raster source.

Use the existing fields as follows:

- image: a diagram/reference visual belonging to the question.
- imageExtra: one combined strip of answer choices when the source layout, labels, or relative sizes matter.
- optionImages: one image per visual choice, in the source's exact choice order.
- imageChoices: true only when required by the existing renderer for a combined visual choice strip; inspect nearby edition files before adding it.

Rules for every visual question:

1. Do not crop prompt text as the question image when it can be transcribed. Preserve integrated labels or wording that are essential to understanding the visual.
2. Do not cut off arrows, labels, choice markers, borders, units, endpoints, or any part of a shape. Include the full visual context needed to distinguish the choices.
3. When using imageExtra, keep every source choice in its original order and arrangement. When using optionImages, create one file for each source choice and keep the same order; do not rely on a label that the renderer will not display.
4. Open every new asset with an image viewer and check it against the PDF. Check that the file is non-empty, readable, correctly oriented, and mapped to the right question/choice.
5. Use predictable names such as q-01-diagram.png. For choice images, use source labels where available (for example, q-01-option-a.png for A-E) or numbered suffixes for unlabelled choices. Preserve a legacy name only when an existing edition already uses that convention.
6. Add imageAlt for each question-level visual. Keep image paths rooted at /assets/...; do not use a filesystem path in TypeScript.

### 4. Write and register the edition

Read app/data/kangaroo/editions/README.md and a nearby edition in the same grade/group folder. Use the existing Question[], QuestionSet, and Section types; do not introduce a new data abstraction for one import.

Each question should contain its source question number, source point value, faithful prompt (or a verified question-level visual carrying essential source wording), choices in source order, zero-based answer index, explanation, and hint. Add visual fields only where the source requires them. Match the actual question and choice counts in the selected PDF.

The exported set must use the source-matching group and grades, verified year and available date/location, source-derived time limit, paper PDF sourceUrl, questions, and sections. Derive section ranges and point values from that paper; do not assume a 24-question paper, a 60-minute limit, or fixed ranges. If a required metadata value is absent from the source, follow an established project convention or report the gap instead of guessing.

Place the file under the matching grades-x-y/group-slug/ directory and assets under the matching public asset directory. Add the edition import and a unique rawQuestionSets entry in index.ts, following nearby naming and ordering conventions.

Do not edit the UI or shared types just to make a data import fit. If the requested group, scoring, or source data shape is unsupported by the current types or renderer, stop and report the incompatibility before changing the contract.

### 5. Run the verification gates

From the repository root, run the structural validator for each new or touched edition. Pass the values verified from the paper:

    python .agents/skills/kangaroo-edition-import/scripts/validate_edition.py --year <year> --grade-band "<grade band>" --group <group> --expected-questions <count> --require-source-url

Then run from the repository root:

    npm run lint
    npm run build

The validator and app checks are mechanical; they do not replace source and visual review. Before declaring completion, confirm:

- The source index, selected paper PDF, and matching answer key/section were opened successfully.
- The grade band, group, language/version, year, and key section match.
- The edition contains the same number of uniquely numbered questions as the paper.
- Every question has a faithful prompt or a verified question-level image for essential integrated wording, the source's full choice set, an answer index within that choice list, a hint, and an explanation.
- Point values, section boundaries, time limit, and metadata match the selected paper and answer key.
- Every visual referenced by TypeScript exists under public/, is non-empty, and was visually inspected against the PDF.
- Every source visual needed to solve a question is represented by the appropriate image, imageExtra, or optionImages; absence of an image field alone does not prove the source question has no visual.
- The answer key and independent solution check agree with the stored answer index.
- The edition is imported and registered in index.ts, and lint/build pass.

If any source or visual comparison is uncertain, leave the affected question in NEEDS_REVIEW, report its exact group/year/question and reason, and continue with independent editions. The user can then make the final manual edits.

## Completion report

At the end, report compactly:

1. Grade band/group and years added or audited.
2. Files/assets changed.
3. Validation commands and results.
4. Any `NEEDS_REVIEW` questions, with source page and reason.
5. A manual review list for visual crops and answer-key conflicts.

Do not run `git add`, commit, or delete source material unless the user explicitly requests it.

For the detailed data and visual contract, read [reference.md](reference.md).
