# Student Edition Follow-up

All Student editions from 2009 through 2025 are transcribed, registered, and structurally checked. The annual Student answer rows were visually compared with the stored answer indices. `NEEDS_REVIEW` on each question remains the source of truth for individual unresolved wording, solution, or visual checks.

## Source and metadata follow-up

- [ ] Review the `NEEDS_REVIEW` questions below against the cached paper and answer key. Do not call the set review-ready until the markers are resolved.
- [ ] Extract and visually inspect required question diagrams/choice images. Student currently has no derived visual assets; several prompts explicitly depend on figures, graphs, tables, or picture choices.
- [ ] Confirm the missing/unclear date and duration metadata for the 2020 Brazilian KSF Student Second Application and 2021 Brazilian Student paper; current `date` and 75-minute fields follow the catalog/year convention where the paper did not expose them clearly.
- [ ] Resolve the 2022 date/version conflict: cover identifies 17 March 2022, while the question-page header reads Austria, 18 March 2021.
- [ ] Verify 2023 Q6's unusual "twoprime" definition and 2023 Q25's polynomial source data; both are retained with keyed answers but still need independent source/solution confirmation.

## Question Reviews

- 2009, page(s) 1-4: Q4, Q5, Q7-Q11, Q13-Q14, Q16-Q17, Q19-Q20, Q26, Q29.
- 2010, page(s) 1-3: Q6-Q7, Q10-Q11, Q14-Q16, Q18, Q20-Q23, Q25, Q27-Q28, Q30.
- 2011, page(s) 2-4: Q1, Q4, Q6-Q8, Q11, Q14-Q17, Q19, Q22, Q24, Q27-Q30. Q22's answer key includes a parenthetical alternate and needs review.
- 2012, page(s) 1-3: Q1-Q2, Q5-Q7, Q11, Q16-Q21, Q25-Q26.
- 2013, page(s) 1-3: Q1, Q3, Q7-Q9, Q11-Q12, Q14-Q17, Q19-Q30.
- 2014, page(s) 1-3: Q1, Q3, Q10, Q12-Q13, Q16, Q19-Q22, Q24, Q26-Q27, Q29-Q30.
- 2015, page(s) 1-3: Q3-Q4, Q6, Q8, Q10, Q12-Q14, Q16, Q20-Q22, Q25-Q30.
- 2016, page(s) 1-3: Q3, Q5, Q7-Q8, Q10, Q12-Q17, Q19-Q25, Q27-Q30.
- 2017, page(s) 1-3: Q1, Q3, Q5-Q7, Q10, Q12, Q15, Q18, Q20-Q23, Q26-Q30.
- 2018, page(s) 1-3: Q1, Q3, Q5, Q12, Q16-Q17, Q19-Q23, Q25-Q26, Q28-Q30.
- 2019, page(s) 1-3: Q1, Q3-Q6, Q9, Q13, Q15, Q18, Q20, Q22-Q24, Q27-Q30.
- 2020, page(s) 1-5: Q2-Q6, Q8, Q10-Q11, Q13-Q14, Q16-Q24, Q26, Q28-Q29.
- 2021, page(s) 1-4: Q1, Q4-Q5, Q10, Q13-Q15, Q17-Q22, Q24-Q29.
- 2022, page(s) 2-4: Q1, Q5, Q7, Q11-Q18, Q21-Q30.
- 2023, page(s) 2-4: Q1, Q3, Q7-Q9, Q11-Q12, Q14-Q15, Q16-Q17, Q19-Q30.
- 2024, page(s) 2-4: Q2, Q5, Q9-Q30.
- 2025, page(s) 2-4: Q4-Q7, Q9-Q14, Q16-Q19, Q22-Q24, Q27-Q30.

## Validation

- Structural audit: 2009-2025 each has 30 sequential questions, point bands 3/4/5, answer indices 0-4, a matching import and registry entry, and no missing referenced asset paths.
- Student key comparison: all 17 answer-index arrays match their visually read Student answer rows.
- Student-slice ESLint: passed.
- Production build: passed, with existing Turbopack dynamic-filesystem tracing warnings in `app/api/editor/save/route.ts`.
- Full `npm run lint`: blocked by four existing `react-hooks/refs` errors in `app/edit/page.tsx`; no Student-edition lint errors were reported.
