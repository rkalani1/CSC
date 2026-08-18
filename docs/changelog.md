# Changelog

Versioning is a **calendar / SemVer hybrid**:

- `YYYY.MM` — monthly currency drop (example: `2026.08`).
- `YYYY.MM.n` — same-month correction (example: `2026.08.1`).
- There is no separate marketing major version. The year is the major. The month is the minor. The patch is only for in-month fixes.

See [Living Document & Monthly Update Protocol](living-document.md) for how a version is cut. See [Evidence Register](evidence-register.md) for the claims that must move with the version.

---

## 2026.08.2 — accuracy + comprehensiveness pass

**Released:** 18 August 2026
**Register last verified:** 2026-08-18

Same-month accuracy and comprehensiveness pass after 2026.08.1. No invented volume requirements. No author names, licenses, or disclaimers added.

### Accuracy

- AIS fever locked at **>37.5 °C** (2026 AIS §4.4). Retired the ≥38.0 AIS cut. ICH INTERACT3 remains **≤37.5 °C**. Operationally both mean treat at >37.5 — same number, different order-set.
- Glucose: treat hypoglycemia **<60 mg/dL**; persistent hyperglycemia **140–180 mg/dL** is still reasonable; intensive **80–130 is not recommended**.
- Post-reperfusion BP tables locked: pre-IVT **<185/110**; post-IVT 24 h **<180/105**; intensive SBP **<140 after IVT is not recommended**; after successful EVT, intensive SBP **<140 is harmful and not recommended**.
- BAO EVT: strong recommendation within **24 hours** if **NIHSS ≥10**. Do not apply DAWN/DEFUSE perfusion maps. Effectiveness not well established for NIHSS 6–9.
- CSTK-03 / CSTK-04 / CSTK-06 specification lock: Hunt and Hess for SAH and ICH Score for ICH (prior to surgery or within 6 hours of arrival if no surgery); CSTK-04 initiation **≥90%** internal (100% eligible tracked is a different metric); first nimodipine **within 24 hours of arrival**, enteral only, never IV.
- Door-to-device ≠ puncture: Advanced Therapy door-to-device is arrival to **first pass with the thrombectomy device**; CSTK-09 is arrival to **skin puncture**.
- EMTALA recipient-hospital posture locked for transfer and load-share language.
- 2021 secondary prevention: revascularization **within 2 weeks** (Class 2a); LDL-C **<70** statin ± ezetimibe (Class 1); clinic BP **<130/80** (Class 1) unless ICH/aSAH/maternal tables apply.
- Honor Roll / Elite / Elite Plus / Advanced Therapy remain **published award criteria**, not CSC certification floors. Award cuts sit in an Award column; internal stretch sits in Internal. Elite may be a labeled internal aim.
- Operating-rhythm lock residual cleanup: daily huddle → weekly ops → monthly quality → quarterly stroke executive.

### Comprehensiveness

- Four new chapters: [43 In-Hospital and Perioperative Stroke](clinical/43-in-hospital-stroke.md); [44 Goals of Care, Palliative Pathways, and Death by Neurologic Criteria](clinical/44-goals-of-care.md); [45 TIA and Minor-Stroke Clinic](clinical/45-tia-minor-stroke.md); [46 Elective Cerebrovascular Program](clinical/46-elective-cerebrovascular.md).
- TNK 0.4 / cardiac-card refuse checkbox added to the paper code-stroke packet, after-action AGENT line, survey posters, DTN audit, and late-DTN worksheet.
- Advanced Therapy **50%** qualifier restored on the EVT SOP. aSAH SOP expanded to the securing-clock steps. KPI library reserves P-14–P-17 and P-19 (P-18 unused; ICH temperature in P-36). Code-stroke SOP points in-house steps to Chapter 43.

### Design

- Caption and overflow fixes on operating pictures and mermaid.

### Register IDs touched

ER-AIS-2026-09, ER-AIS-2026-GLU, ER-AIS-2026-BP, ER-AIS-2026-BAO, ER-CSTK-03T, ER-CSTK-04D, ER-CSTK-06T, ER-TS-AT-DEF, ER-SP-2021-CEA, ER-SP-2021-LDL, ER-SP-2021-BP, ER-EMTALA-01, ER-SAH-2023-NIM.

---

## 2026.08.1 — accuracy, special populations, and design pass

**Released:** 18 August 2026
**Register last verified:** 2026-08-18

Same-month correction after a multi-swarm review of the initial public release. No invented volume requirements. No author names, licenses, or disclaimers added.

### Accuracy

- Named tenecteplase **0.4 mg/kg as Class 3 – No Benefit** (2026 AIS) in the IVT chapter, TNK SOP, ready-room check, glossary, and ER-AIS-2026-02b. Cardiac-strength cards are a stop-the-line event.
- Separated DAWN (6–24 h) from DEFUSE 3 (6–16 h). Restored the **50%** qualifier on Advanced Therapy door-to-device in the hyperacute opening.
- Split STK-6 (discharged on statin) from GWTG achievement #7 (intensive statin) in the KPI library (P-29 / P-29b).
- Unified AIS unit fever at **≥38.0 °C** and reserved INTERACT3 **≤37.5 °C** for ICH, labeled as trial-bundle. Superseded the same day by 2026.08.2 (>37.5 °C for AIS).
- Locked one 90-day mRS clock: enroll at discharge, first attempt day 60, second day 75, close the spec window.
- Corrected the CSTK v2026B posting date (02/06/2026, not 08/08/2025) and retargeted CSTK-01/10/11 MIF links to v2026B.
- Updated the January 2026 FDA CDS guidance: time-critical is a Criterion 4 factor, not an automatic Criterion 3 device trigger (ER-FDA-CDS-2026).
- Locked operating-rhythm names: daily huddle → weekly ops → monthly quality → quarterly stroke executive. Retired the competing “stroke operations committee.”
- Honor Roll / Elite / Elite Plus / Advanced Therapy labeled as **published award criteria**, not CSC certification floors.

### Comprehensiveness

- New [Chapter 42 — Special Populations](clinical/42-special-populations.md): CVT (2024 AHA statement), maternal stroke (2026 AHA statement), pediatric receiving compact, plus dated LVAD/ECMO and sickle-cell pointers. No invented doses or exchange thresholds.
- Pediatric AIS night card in the IVT chapter. PFO and carotid revascularization rows in transitions. Fillable large-core EVT card. Time-banded ICH first-hour mermaid. aSAH nimodipine + securing SOP (SOP-CSC-SAH-001).
- New KPIs P-36–P-39 (ICH bundle, nimodipine clock, securing clock, large-core review). Morning huddle map so 07:00 unit charge and 08:00 OS huddle are not two competing standups.
- Glossary expanded (CVT, PFO, ESUS, TIA, BAO, DCI, EVD, CEA/CAS/TCAR, just culture, teach-back, stroke program manager vs ACGME PD, drip-and-drive, CDS/SaMD, StrokeNet National Coordinating Center).

### Design

- Part landing pages for all eight parts. Version bar (2026.08.1). Favicon. Custom 404. Print CSS for tools and mermaid. Mermaid no longer clipped at 390px. Copy-table control. Figure captions on operating pictures. Pinned mermaid 11.4.1. Mobile prev/next. Dark-mode mermaid retheme.

### Register IDs touched

ER-AIS-2026-02b, ER-AIS-2026-09, ER-CVT-2024-01, ER-MAT-2026-01, ER-FDA-CDS-2026, ER-NET-02, ER-TR-DAWN-DEF3 (clocks specified), ER-CSTK-01/10/11 (v2026B URLs).

---

## 2026.08 — initial public release

**Released:** August 2026
**Register last verified:** 2026-08-18

Initial public release of *Comprehensive Stroke Center Management*, an operational handbook for Medical Directors and Associate Medical Directors of U.S. academic Comprehensive Stroke Centers.

### What shipped

**Site and navigation**

- MkDocs Material handbook with eight parts plus a reference section.
- Home, how-to-use, and role-based reading paths.
- Search, light/dark theme, and mermaid diagrams as operating pictures.

**Part I — Foundations** (nav targets)

- What an academic CSC must be; certification landscape; systems of care; day-one briefing.

**Part II — Leadership and governance** (nav targets)

- Medical Director role; Associate Medical Director and succession; governance and decision rights; organizational design and FTE; culture and psychological safety.

**Part III — Clinical enterprise** (nav targets)

- EMS through post-acute continuum: hyperacute pathways, imaging, IVT, EVT, neurocritical care, stroke unit, transitions, rehabilitation, telestroke, mobile stroke units, hemorrhagic and complex cerebrovascular programs.

**Part IV — Quality, safety, and data** (nav targets)

- Data infrastructure; GWTG / STK / CSTK core metrics; continuous improvement and high reliability; certification readiness; equity.

**Part V — Education** (nav targets)

- Vascular neurology fellowship and GME; interprofessional education, simulation, and community teaching.

**Part VI — Research and innovation** (nav targets)

- Trials, registries, and research operations; faculty development and scholarly productivity; innovation and decision-support governance.

**Part VII — Strategy and elite performance** (nav targets)

- Growth and complexity; network leadership; financial stewardship; disaster and surge; remaining elite.

**Part VIII — Playbooks and toolkits** (this drop)

- [37 Integrating the Pillars](playbooks/37-integrating-pillars.md) — one-page operating system, integrated calendar, late-DTN five-pillar routing, operating-rhythm mermaid.
- [38 First 90 Days and Year One](playbooks/38-ninety-days-year-one.md) — week-by-week 90-day plan, quarters 2–4, first-year scorecard, stakeholder map, do-not-break list, survey year vs build year.
- [39 Checklists, Agendas, and Cadence](playbooks/39-checklists-agendas.md) — paste-ready huddle, weekly ops, monthly quality, quarterly executive, annual offsite, after-action, transfer intake, survey week, escalation card.
- [40 KPIs, Dashboards, FTE, and SOP Templates](playbooks/40-kpis-dashboards-sops.md) — process/outcome/balancing/equity/academic KPI library, dashboard wireframe, FTE worksheet, SOP skeletons (code stroke, TNK, ICH reversal, EVT, 90-day mRS, telestroke).
- [41 Audits, PDSA, Roadmaps, and Workflows](playbooks/41-audits-pdsa-roadmaps.md) — chart-audit tools (DTN, CSTK-04, CSTK-06, CSTK-11/12, swallow, AF anticoagulation), PDSA one-pager, SWOT, 3-year roadmap, mermaid workflow library.

**Reference**

- [Evidence Register](evidence-register.md) — sourced claims for the 2026 AIS guideline, CSTK v2026B (including CSTK-07 retired), STK/STK-OP, GWTG and Target: Stroke tiers, April 2, 2025 aSAH volume announcement (20 → 10), 2022 ICH and 2023 aSAH guidelines, HERMES numbers, TNK dose, StrokeNet, and QI/HRO methods. Last-verified date 2026-08-18.
- [Glossary](glossary.md) — 80+ CSC operating terms with operational definitions.
- [Living Document Protocol](living-document.md) — first-of-month checklist, sources to re-open, chapter-patch rules, register-row rules, `YYYY.MM` versioning, pointer to repository-root `AGENTS.md` prompts.
- This changelog.

### Evidence locked in 2026.08

- 2026 AHA/ASA AIS guideline (*Stroke* 2026;57(8):e316–e436; DOI 10.1161/STR.0000000000000513): TNK 0.25 mg/kg max 25 mg or alteplase 0.9 mg/kg max 90 mg; treat disabling deficits within 4.5 h regardless of NIHSS; dual-eligible IVT plus EVT without delaying thrombectomy; MSU endorsed; first pediatric AIS recommendations; glucose and dysphagia updates.
- CSTK Specifications Manual v2026B (posted 02/06/2026; 3Q–4Q 2026 discharges): IDs 01–06 and 08–12 active; CSTK-07 not in the current set; CSTK-01 exclusions as registered.
- GWTG-Stroke public criteria (last reviewed 9 September 2022): 85% on each of seven achievement measures; Bronze 90 days / Silver 12 months / Gold 24 months; Target: Stroke Honor Roll 75% DTN ≤60, Elite 85% DTN ≤60, Elite Plus 75% DTN ≤45 and 50% DTN ≤30; Advanced Therapy 50% door-to-device ≤90 direct / ≤60 transfer; Target: Type 2 Diabetes composite ≥80% for 12 months.
- The April 2, 2025 Joint Commission announcement reduced the annual aSAH volume criterion to 10. Other volume numbers remain `confirm live` against the E-App / CSC eligibility table. Historical “25 IV thrombolysis cases” is labeled historical.
- HERMES: mRS 0–2 46.0% vs 26.5%; NNT 2.6 for ≥1-point mRS shift.

### Intentional absences

- No author by-lines, personal names of handbook creators, or institutional affiliations of individuals.
- No authorship headers, legal-header files, or disclaimer language in the published pages.
- No proprietary data from a named hospital or health system.
- No invented current EVT or IVT volume requirements.

---

## Unreleased

Future monthly passes will append dated `YYYY.MM` headings above this line, naming register IDs touched and files patched. Same-month corrections will use `YYYY.MM.n`.
