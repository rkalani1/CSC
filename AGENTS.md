# Handbook maintenance agents

This file is the operating brief for future update sessions. The published site must remain a standalone, anonymous, institutional-grade handbook.

## Hard constraints

- Repository name: `CSC`
- Title: Comprehensive Stroke Center Management
- Scope: U.S. academic Comprehensive Stroke Centers only
- No personal names, author by-lines, institutional affiliations of individuals, LICENSE files, license statements, educational disclaimers, “not medical advice” language, or companion-series references
- No proprietary data from a named center
- Every changed numeric or standards claim must update `docs/evidence-register.md` with a last-verified date
- `mkdocs build --strict` must pass before merge

## Monthly evidence-refresh prompt

Copy this prompt into a new session on the first of the month:

```
Refresh Comprehensive Stroke Center Management (repo CSC).

Constraints: keep absolute anonymity. Do not add licenses, disclaimers, personal names, or institutional affiliations of individuals.

1. Re-verify these primary sources and record last-verified dates in docs/evidence-register.md:
   - Joint Commission DSC / CSC standards and the current CSTK and STK specification manuals (as of 2026-08: v2026B for 3Q–4Q 2026 discharges; v2027A posted for 1Q–2Q 2027)
   - AHA/ASA AIS, ICH, aSAH, secondary prevention, and systems-of-care guidelines
   - GWTG-Stroke recognition criteria and Target: Stroke / Advanced Therapy thresholds
   - CMS hospital quality programs touching stroke
   - NIH StrokeNet and major trial results that change operations
2. Patch only the chapters whose claims changed. Prefer precise edits over rewrites.
3. Add a dated entry to docs/changelog.md and bump the calendar version (YYYY.MM).
4. Run mkdocs build --strict.
5. Hard-filter the diff for forbidden strings: LICENSE, not medical advice, educational only, companion series, personal names of handbook authors.
```

## Targeted re-swarm prompts

### Clinical operations

```
Update Part III clinical chapters against the current AHA/ASA AIS, ICH, and aSAH guidelines and current CSTK time measures. Recheck tenecteplase/alteplase dosing, EVT windows, MSU language, and ICH reversal/aSAH nimodipine operations. Keep templates generic.
```

### Quality and certification

```
Update Part IV against the current Joint Commission stroke measure manuals and GWTG-Stroke recognition criteria. Recheck CSTK IDs, STK IDs, Honor Roll/Elite/Elite Plus/Advanced Therapy thresholds, and survey process language. Confirm any volume eligibility changes in the live DSC / E-App tables.
```

### Education and research

```
Update Parts V–VI for current ACGME vascular neurology program requirements, NIH StrokeNet structure, and governed AI/CDS practice. Do not name vendors as mandatory.
```

### Strategy and elite performance

```
Update Part VII for current recognition pathways, network models, and surge/continuity practices. Keep financial content at principle level with no invented dollar figures.
```

### Visual and template polish

```
Improve Mermaid diagrams, tables, and Part VIII templates only. Do not dilute evidence. Maintain light/dark readability and the existing teal handbook aesthetic.
```

## Local build

```bash
python3 -m pip install -r requirements.txt
mkdocs serve
mkdocs build --strict
```

## Versioning

Use calendar versions: `YYYY.MM` for monthly currency drops, with a patch suffix (`2026.08.1`) only when a same-month correction ships.
