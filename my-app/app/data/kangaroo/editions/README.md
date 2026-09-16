# Kangaroo editions

Edition files are grouped by grade band and competition group before the year:

```text
editions/
├─ grades-1-2/felix/2014.ts
├─ grades-1-2/felix/2015.ts
├─ grades-3-4/ecolier/2010.ts
└─ ...
```

The grade and group names follow the Kangaroo competition bands:

| Grade band | Group |
| --- | --- |
| Grades 1-2 | Felix |
| Grades 3-4 | Ecolier |
| Grades 5-6 | Benjamin |
| Grades 7-8 | Kadett |
| Grades 9-10 | Junior |
| Grades 11-12 | Student |

When a new edition is added, place it in the matching `grades-*/group/` directory and register it in `../index.ts`.

For question content, keep the prompt and text choices in TypeScript. Only add PDF-derived assets when the question needs them:

- `image`: the diagram or illustration used by the question;
- `imageExtra`: a separate visual answer strip when the choices are pictures;
- `optionImages`: individual picture choices;
- `visual-assets.ts` records which `q-XX-diagram.png` and `q-XX-option-a~e.png` assets are available;
- `sourcePage` is provenance only; it never causes a full-page or full-question PDF crop to render.
