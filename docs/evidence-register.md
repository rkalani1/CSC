# Evidence Register

This register is the handbook’s source-of-truth file for high-consequence claims. Every numeric threshold, measure ID, dose, volume criterion, and trial result used in operations chapters is listed here with a primary source, a verified extraction, a last-verified date, and a status.

Do not update a chapter number without updating the matching row. Do not introduce a new numeric claim in any chapter without adding a row.

## How to read a row

| Column | Meaning |
| --- | --- |
| ID | Stable handbook identifier. Do not reuse a retired ID. |
| Claim | The operational statement the handbook is allowed to make. |
| Chapter | Primary chapters that depend on the claim. |
| Primary source | Full citation plus URL and/or DOI. |
| Verified extraction | The exact fact pulled from the source — not a paraphrase that drifts. |
| Last verified | Date the source was opened and the extraction confirmed. |
| Status | `active` (use), `confirm live` (re-open the primary before quoting), `historical` (do not treat as current requirement), `retired` (do not use). |

## Currency protocol

1. On the first business day of each month, run the checklist in [Living Document & Monthly Update Protocol](living-document.md).
2. Re-open every source marked `confirm live` and every source whose issuing body published in the prior 90 days.
3. If an extraction still matches, update **Last verified** only.
4. If an extraction changed, patch the listed chapters, change the claim and extraction, set status, and add a [changelog](changelog.md) entry.
5. If a measure ID is removed by the issuer (example: CSTK-07 is not in v2026B or v2027A), mark the row `retired` and purge the ID from agendas, dashboards, and posters the same week.
6. Version the handbook as `YYYY.MM` after the monthly pass. Use `YYYY.MM.1` only for a same-month correction.
7. Use the repository-root `AGENTS.md` monthly evidence-refresh prompt to run the pass.

Current handbook version: **2026.08**. Register-wide last-verified date for the initial public release: **2026-08-18**.

---

## AHA/ASA guidelines

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-AIS-2026-01 | The current AHA/ASA AIS early-management guideline is the 2026 document; it replaces the 2018 guideline and the 2019 update. | Clinical hyperacute; playbooks 37–41 | 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. *Stroke*. 2026;57(8):e316–e436. Published online 26 January 2026. DOI [10.1161/STR.0000000000000513](https://doi.org/10.1161/STR.0000000000000513). [AHA journals](https://www.ahajournals.org/doi/10.1161/STR.0000000000000513) | Guideline published online 26 January 2026; journal citation *Stroke* 2026;57(8):e316–e436; replaces 2018 AIS guideline and 2019 update. | 2026-08-18 | active |
| ER-AIS-2026-02 | In the 4.5-hour window, IVT is tenecteplase 0.25 mg/kg IV push, max 25 mg, **or** alteplase 0.9 mg/kg, max 90 mg (10% bolus, remainder over 60 min). | Clinical IVT; SOP TNK; playbooks 38–41 | Same as ER-AIS-2026-01 | IVT agents and doses as stated for the 4.5-hour window. | 2026-08-18 | active |
| ER-AIS-2026-03 | Treat eligible **disabling** deficits rapidly within 4.5 hours **regardless of NIHSS**, without delaying for advanced imaging selection. | Clinical hyperacute; DTN audits | Same as ER-AIS-2026-01 | Eligible disabling deficits are treated rapidly within 4.5 h regardless of NIHSS; do not delay for advanced imaging selection. | 2026-08-18 | active |
| ER-AIS-2026-04 | Extended-window IVT is appropriate for selected unknown-onset or 4.5–9 hour patients using DWI-FLAIR or perfusion mismatch. | Clinical IVT; telestroke SOP | Same as ER-AIS-2026-01 | Extended-window IVT for selected unknown-onset or 4.5–9 h patients using DWI-FLAIR or perfusion mismatch. | 2026-08-18 | active |
| ER-AIS-2026-05 | Patients eligible for both IVT and EVT should receive both rapidly, without delaying thrombectomy. | Clinical EVT; integrating pillars; EVT SOP | Same as ER-AIS-2026-01 | Dual-eligible patients receive both IVT and EVT rapidly; do not delay thrombectomy. | 2026-08-18 | active |
| ER-AIS-2026-06 | Mobile stroke units are endorsed; EMS triage is refined. | Clinical MSU; prehospital; strategy | Same as ER-AIS-2026-01 | MSUs endorsed; EMS triage refined in the 2026 guideline. | 2026-08-18 | active |
| ER-AIS-2026-07 | The 2026 AIS guideline includes the first pediatric AIS recommendations. | Clinical; education | Same as ER-AIS-2026-01 | First pediatric AIS recommendations are included. | 2026-08-18 | active |
| ER-AIS-2026-08 | Glucose and dysphagia management are updated in the 2026 AIS guideline. | Clinical unit ops; swallow audit | Same as ER-AIS-2026-01 | Glucose and dysphagia management updated. | 2026-08-18 | active |
| ER-ICH-2022-01 | The current AHA/ASA ICH guideline is the 2022 document. | Clinical hemorrhage; ICH SOP; CSTK-04 audits | 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage. *Stroke*. DOI [10.1161/STR.0000000000000407](https://doi.org/10.1161/STR.0000000000000407) | 2022 ICH guideline is the operational AHA/ASA ICH source. | 2026-08-18 | active |
| ER-ICH-2024-PQM | 2024 AHA/ASA performance and quality measures for spontaneous ICH are based on the 2022 ICH guideline. | Quality; ICH SOP | 2024 AHA/ASA Performance and Quality Measures for Spontaneous ICH (based on 2022 ICH guideline). Locate via [AHA/ASA guidelines hub](https://www.ahajournals.org/) | 2024 ICH performance and quality measures exist and are based on the 2022 ICH guideline. | 2026-08-18 | active |
| ER-SAH-2023-01 | The current AHA/ASA aSAH guideline is the 2023 document; it replaces the 2012 guideline. | Clinical hemorrhage; CSTK-06 | 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. *Stroke*. 2023;54:e314–e370. DOI [10.1161/STR.0000000000000436](https://doi.org/10.1161/STR.0000000000000436) | 2023 aSAH guideline, *Stroke* 2023;54:e314–e370, replaces 2012. | 2026-08-18 | active |
| ER-SAH-2023-02 | Nimodipine remains standard aSAH care; the 2023 aSAH guideline is the operational source (not isolated trial fashion). | Clinical hemorrhage; CSTK-06 audit | Same as ER-SAH-2023-01; ULTRA and related nimodipine literature are subordinate | Nimodipine remains standard; 2023 guideline is the operational source. | 2026-08-18 | active |
| ER-SP-2021-01 | The 2021 AHA/ASA secondary-prevention guideline remains the major secondary-prevention reference unless a later AHA update is cited. | Transitions; 90-day SOP | 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack. *Stroke*. Locate via [AHA journals](https://www.ahajournals.org/) | 2021 secondary-prevention guideline remains the major reference unless a later AHA update is cited. | 2026-08-18 | active |

## Joint Commission stroke certification

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-TJC-PROG-01 | Advanced stroke programs are ASRH, PSC, TSC, and CSC; CSC is the most demanding. | Foundations; certification | Joint Commission Disease-Specific Care stroke certification program materials; 2026 Stroke Certification Standards (SCS26). [Joint Commission](https://www.jointcommission.org/) | Advanced programs: ASRH, PSC, TSC, CSC. CSC is the most demanding. | 2026-08-18 | active |
| ER-TJC-DSC-01 | DSC certification has three components: standards, clinical practice guidelines, and performance measurement. | Certification; survey week | Joint Commission DSC certification framework | Three components: standards, CPGs, performance measurement. | 2026-08-18 | active |
| ER-TJC-SCS26 | A 2026 Stroke Certification Standards book exists (SCS26). | Certification; living document | Joint Commission 2026 Stroke Certification Standards (SCS26) | SCS26 exists as the 2026 standards book. | 2026-08-18 | confirm live |
| ER-TJC-ASAH-10 | The April 2, 2025 Joint Commission announcement reduced the annual aSAH volume criterion to 10. Official manual update January 2026. | Strategy; 90-day; quality; playbooks | Joint Commission announcement 2 April 2025 (with AHA/ASA); manual update January 2026. Confirm the live E-App / CSC eligibility table. | Phrase exactly: “The April 2, 2025 Joint Commission announcement reduced the annual aSAH volume criterion to 10.” Prior operational figure was 20. | 2026-08-18 | confirm live |
| ER-TJC-CAP-01 | Historical CSC capability expectations still used operationally: 24/7 vascular neurology, neurosurgery, neurointervention, neuroradiology; dedicated neuro ICU; advanced imaging; peer review; research participation; performance-measure reporting. | Foundations; leadership; 90-day do-not-break | BAC 2005 CSC consensus and subsequent TJC CSC operational practice; confirm each element against the active DSC manual | These capability expectations remain the operational checklist; they are not a substitute for the current manual’s eligibility table. | 2026-08-18 | active |
| ER-TJC-VOL-HIST | Do not invent current numeric volume requirements for EVT or IVT if not verified. Commonly cited historical figure of 25 IV thrombolysis cases is historical — confirm current. | Strategy; KPI S-02/S-03; 90-day | Active DSC manual and E-App / CSC eligibility table (confirm live). Older public summaries historically cited 25 IV thrombolysis cases. | Current EVT/IVT numeric volume requirements must be confirmed in the live E-App / CSC eligibility table. “25 IV thrombolysis cases” = historical / confirm current. | 2026-08-18 | historical / confirm live |

## CSTK — current operational manual is v2026B

Population families (unchanged across v2026A / v2026B / v2027A): ischemic without reperfusion; ischemic with IV/IA/MER; hemorrhagic.

Primary source for ER-CSTK-* operational rows: Specifications Manual for Joint Commission National Quality Measures (**v2026B**), Comprehensive Stroke (CSTK) set. Posted 02/06/2026. Discharges 07-01-2026 (3Q26) through 12-31-2026 (4Q26) — **this is the active window as of 2026-08-18**. [CSTK v2026B index](https://manual.jointcommission.org/releases/TJC2026B/ComprehensiveStroke.html).

Prior window: [v2026A](https://manual.jointcommission.org/releases/TJC2026A/ComprehensiveStroke.html), posted 08/08/2025, discharges 01-01-26 (1Q26) through 06-30-26 (2Q26). Next window: [v2027A](https://manual.jointcommission.org/releases/TJC2027A/ComprehensiveStroke.html), posted 08/07/2026, discharges 01-01-2027 (1Q27) through 06-30-2027 (2Q27). Measure IDs 01–06 and 08–12 are unchanged; CSTK-07 is absent in all three.

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-CSTK-MAN-01 | Operational CSTK specifications for current discharges (August 2026) are **v2026B**. v2026A covered 1Q–2Q 2026. v2027A is posted for 1Q–2Q 2027. Measure IDs 01–06 and 08–12 are unchanged; CSTK-07 remains absent. | Quality; all playbooks | [v2026B CSTK](https://manual.jointcommission.org/releases/TJC2026B/ComprehensiveStroke.html); [v2026A](https://manual.jointcommission.org/releases/TJC2026A/ComprehensiveStroke.html); [v2027A](https://manual.jointcommission.org/releases/TJC2027A/ComprehensiveStroke.html) | v2026B posted 02/06/2026, discharges 3Q26–4Q26. v2027A posted 08/07/2026, discharges 1Q27–2Q27. IDs unchanged. | 2026-08-18 | active (confirm successor each quarter) |
| ER-CSTK-01 | CSTK-01: NIHSS performed for ischemic stroke (before recanalization, or within 12 h if no recanalization). | Quality; KPI P-11 | [CSTK-01 MIF](https://manual.jointcommission.org/releases/TJC2026A/MIF0285.html) | NIHSS performed for ischemic stroke before recanalization, or within 12 h if no recanalization. | 2026-08-18 | active |
| ER-CSTK-01X | CSTK-01 exclusions include age <18, LOS >120 days, comfort measures day of/after arrival, elective carotid intervention, and non-recanalization patients discharged within 12 h. | Quality; audits | Same as ER-CSTK-01 | Exclusions: age <18; LOS >120 days; comfort measures day of/after arrival; elective carotid intervention; non-recanalization patients discharged within 12 h. | 2026-08-18 | active |
| ER-CSTK-02 | CSTK-02: mRS at 90 days. | Quality; 90-day SOP | v2026B CSTK set | mRS at 90 days. | 2026-08-18 | active |
| ER-CSTK-03 | CSTK-03: severity measurement for SAH and ICH (overall). | Quality; ICH bundle | v2026B CSTK set | Severity measurement for SAH and ICH (overall). | 2026-08-18 | active |
| ER-CSTK-04 | CSTK-04: procoagulant reversal agent initiation for ICH. | Quality; ICH SOP; AUD-04 | v2026B CSTK set | Procoagulant reversal agent initiation for ICH. | 2026-08-18 | active |
| ER-CSTK-05 | CSTK-05: hemorrhagic transformation (overall). | Quality; outcomes | v2026B CSTK set | Hemorrhagic transformation (overall). | 2026-08-18 | active |
| ER-CSTK-06 | CSTK-06: nimodipine treatment administered. | Quality; AUD-06 | v2026B CSTK set | Nimodipine treatment administered. | 2026-08-18 | active |
| ER-CSTK-07 | CSTK-07 is not in the current set. Do not list it as active. | All dashboards and agendas | v2026B CSTK set (no CSTK-07 MIF; also absent in v2026A and v2027A) | CSTK-07 is not in the current set. | 2026-08-18 | retired |
| ER-CSTK-08 | CSTK-08: TICI post-treatment reperfusion grade. | Quality; EVT SOP | v2026B CSTK set | TICI post-treatment reperfusion grade. | 2026-08-18 | active |
| ER-CSTK-09 | CSTK-09: arrival time to skin puncture (overall). | Quality; EVT; KPI P-07 | v2026B CSTK set | Arrival time to skin puncture (overall). | 2026-08-18 | active |
| ER-CSTK-10 | CSTK-10: mRS at 90 days — favorable outcome. | Quality; 90-day SOP | [CSTK-10](https://manual.jointcommission.org/releases/TJC2026A/MIF0388.html) | mRS at 90 days: favorable outcome. | 2026-08-18 | active |
| ER-CSTK-11 | CSTK-11: rate of rapid effective reperfusion from hospital arrival (TICI ≥2B within 120 min of arrival). | Quality; AUD-1112; KPI P-08 | [CSTK-11](https://manual.jointcommission.org/releases/TJC2026A/MIF0389.html) | TICI ≥2B within 120 min of hospital arrival. | 2026-08-18 | active |
| ER-CSTK-12 | CSTK-12: rate of rapid effective reperfusion from skin puncture (TICI ≥2B within 60 min of puncture). | Quality; AUD-1112; KPI P-09 | v2026B CSTK set | TICI ≥2B within 60 min of skin puncture. | 2026-08-18 | active |

## STK and outpatient stroke measures

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-STK-SET | The longstanding inpatient STK core set is STK-1 VTE prophylaxis; STK-2 discharged on antithrombotic; STK-3 anticoagulation for AF/flutter; STK-4 thrombolytic therapy; STK-5 antithrombotic by end of hospital day 2; STK-6 discharged on statin; STK-8 stroke education; STK-10 assessed for rehabilitation. | Quality; KPI library | Specifications Manual for Joint Commission National Quality Measures (v2026B), STK set. [TJC v2026B TOC](https://manual.jointcommission.org/releases/TJC2026B/TableOfContentsTJC.html) | STK-1, STK-2, STK-3, STK-4, STK-5, STK-6, STK-8, STK-10 as named. | 2026-08-18 | active |
| ER-STK-OP | STK-OP exists for outpatient/ED stroke in v2026B. | Quality | v2026B STK-OP | STK-OP exists for outpatient/ED stroke (v2026B). | 2026-08-18 | confirm live |
| ER-CMS-OP23 | CMS OP-23 historically tracked head CT/MRI results for stroke; confirm the current OQR set rather than asserting it is still mandatory. | Quality; monthly quality agenda | CMS Hospital Outpatient Quality Reporting program specifications (confirm live). Historical OP-23: head CT or MRI scan results for acute stroke. [CMS quality programs](https://www.cms.gov/) | OP-23 is historical as a mandatory assumption; confirm current OQR set. | 2026-08-18 | confirm live |

## GWTG-Stroke and Target: Stroke

Primary source for ER-GWTG-* and ER-TS-* rows: Get With The Guidelines–Stroke Recognition Criteria, American Heart Association public page, last reviewed 9 September 2022 (still the public criteria as of last verification). [Recognition criteria](https://www.heart.org/en/professional/quality-improvement/get-with-the-guidelines/get-with-the-guidelines-stroke/get-with-the-guidelines-stroke-recognition-criteria).

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-GWTG-85 | Achievement awards require **85%** on each of 7 achievement measures. | Quality; KPI library; 90-day scorecard | AHA GWTG-Stroke recognition criteria (last reviewed 9 Sep 2022) | 85% on each of 7 achievement measures. | 2026-08-18 | active |
| ER-GWTG-METAL | Bronze = 90 consecutive days; Silver = 12 months; Gold = 24 months. | Quality; strategy | Same | Bronze 90 consecutive days; Silver 12 months; Gold 24 months. | 2026-08-18 | active |
| ER-GWTG-AM1 | Achievement measure 1: IV thrombolysis arrive by 3.5 h / treat by 4.5 h. | Quality | Same | Arrive by 3.5 h / treat by 4.5 h. | 2026-08-18 | active |
| ER-GWTG-AM2 | Achievement measure 2: early antithrombotics by end of hospital day 2. | Quality | Same | Early antithrombotics by end of hospital day 2. | 2026-08-18 | active |
| ER-GWTG-AM3 | Achievement measure 3: VTE prophylaxis. | Quality | Same | VTE prophylaxis. | 2026-08-18 | active |
| ER-GWTG-AM4 | Achievement measure 4: antithrombotics at discharge. | Quality | Same | Antithrombotics at discharge. | 2026-08-18 | active |
| ER-GWTG-AM5 | Achievement measure 5: anticoagulation for AF/flutter. | Quality; AUD-AF | Same | Anticoagulation for AF/flutter. | 2026-08-18 | active |
| ER-GWTG-AM6 | Achievement measure 6: smoking cessation. | Quality | Same | Smoking cessation. | 2026-08-18 | active |
| ER-GWTG-AM7 | Achievement measure 7: intensive statin at discharge. | Quality | Same | Intensive statin at discharge. | 2026-08-18 | active |
| ER-GWTG-PLUS | Plus awards add quality-measure compliance beyond the 7 achievement measures. | Quality; strategy | Same | Plus awards add quality-measure compliance. | 2026-08-18 | active |
| ER-TS-N | Target: Stroke recognition requires a minimum of 6 patients. | Quality | Same; [Target: Stroke Honor Roll](https://www.heart.org/en/professional/quality-improvement/target-stroke/target-stroke-honor-roll) | Minimum 6 patients for eligibility. | 2026-08-18 | active |
| ER-TS-HR | Honor Roll: **75% DTN ≤60 min**. | Quality; KPI P-01 | Same | 75% of applicable patients with door-to-needle ≤60 minutes. | 2026-08-18 | active |
| ER-TS-ELITE | Elite: **85% DTN ≤60 min**. | Quality; KPI P-01 | Same | 85% of applicable patients with door-to-needle ≤60 minutes. | 2026-08-18 | active |
| ER-TS-EP | Elite Plus: **75% DTN ≤45 min AND 50% DTN ≤30 min**. | Quality; KPI P-02/P-03 | Same | 75% DTN ≤45 min **and** 50% DTN ≤30 min. | 2026-08-18 | active |
| ER-TS-AT | Advanced Therapy: **50% door-to-device ≤90 min direct / ≤60 min transfer**. | Quality; KPI P-05/P-06 | AHA Target: Stroke Advanced Therapy public criteria (same recognition-criteria family) | 50% door-to-device ≤90 min for direct arrivals and ≤60 min for transfers. | 2026-08-18 | active |
| ER-TS-T2D | Target: Type 2 Diabetes composite ≥80% for 12 months. | Quality; monthly agenda | AHA GWTG-Stroke recognition criteria | Target: Type 2 Diabetes composite ≥80% for 12 months. | 2026-08-18 | active |
| ER-TS-P3 | Target: Stroke Phase III national goals match Elite / Advanced Therapy primary goals. | Quality; strategy | AHA Target: Stroke Phase III materials (align to Elite and Advanced Therapy primary goals) | Phase III national goals match Elite / Advanced Therapy primary goals. | 2026-08-18 | active |

## Brain Attack Coalition (foundational)

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-BAC-2000 | 2000 BAC PSC recommendations are foundational, not a substitute for current TJC PSC standards. | Foundations | Alberts et al., BAC primary stroke center recommendations, 2000. *JAMA* / BAC series | 2000 PSC recommendations exist and are foundational only. | 2026-08-18 | historical (foundational) |
| ER-BAC-2005 | 2005 BAC CSC consensus statement is foundational, not a substitute for current TJC CSC standards. | Foundations | Alberts et al., 2005 CSC consensus statement. *Stroke* | 2005 CSC consensus is foundational only. | 2026-08-18 | historical (foundational) |

## Landmark trials used for operations (not as the only evidence)

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-TR-NINDS | NINDS tPA 1995 established IV alteplase benefit in the original window. | Clinical IVT; education | National Institute of Neurological Disorders and Stroke rt-PA Stroke Study Group. *N Engl J Med*. 1995. | NINDS 1995 IV tPA trial. | 2026-08-18 | active (landmark) |
| ER-TR-ECASS3 | ECASS III 2008 supported the 3–4.5 hour alteplase window. | Clinical IVT; education | Hacke et al., ECASS III. *N Engl J Med*. 2008. | ECASS III 2008, 3–4.5 h window. | 2026-08-18 | active (landmark) |
| ER-TR-EVT2015 | MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, and REVASCAT established EVT benefit in 2015. | Clinical EVT; education | Individual 2015 *NEJM* trial publications | Five pivotal EVT trials, 2015. | 2026-08-18 | active (landmark) |
| ER-TR-HERMES | HERMES 2016 pooled EVT benefit: mRS 0–2 46.0% vs 26.5%; NNT 2.6 for ≥1-point mRS shift. | Clinical EVT; strategy; audits (education only) | Goyal et al., HERMES collaboration. *Lancet*. 2016. | mRS 0–2 46.0% vs 26.5%; NNT 2.6 for ≥1-point mRS shift. | 2026-08-18 | active |
| ER-TR-DAWN-DEF3 | DAWN and DEFUSE 3 established late-window EVT in selected imaging-eligible patients. | Clinical EVT | Nogueira et al., DAWN, *NEJM* 2018; Albers et al., DEFUSE 3, *NEJM* 2018 | Late-window EVT benefit in selected patients. | 2026-08-18 | active (landmark) |
| ER-TR-LARGECORE | SELECT2, ANGEL-ASPECT, and RESCUE-Japan LIMIT support EVT in selected large-core patients. | Clinical EVT | SELECT2 *NEJM* 2023; ANGEL-ASPECT *NEJM* 2023; RESCUE-Japan LIMIT *NEJM* 2022 | Large-core EVT trials as named. | 2026-08-18 | active (landmark) |
| ER-TR-EXTIA-TNK | EXTEND-IA TNK compared TNK 0.25 mg/kg vs alteplase before EVT. | Clinical IVT; TNK SOP | Campbell et al., EXTEND-IA TNK. *NEJM*. 2018. | TNK 0.25 mg/kg vs alteplase before EVT. | 2026-08-18 | active |
| ER-TR-DAPT | CHANCE and POINT support DAPT for minor non-disabling stroke/TIA in selected patients. | Secondary prevention | CHANCE *NEJM* 2013; POINT *NEJM* 2018 | DAPT for minor non-disabling stroke/TIA as trial-defined. | 2026-08-18 | active (landmark) |
| ER-TR-ICH-BUN | INTERACT2, ENCHANTED2, and INTERACT3 inform ICH care-bundle operations. | Clinical ICH | INTERACT2 *Lancet* 2013; ENCHANTED2 *NEJM* 2023; INTERACT3 *Lancet* 2023 | ICH care-bundle trials as named. | 2026-08-18 | active (landmark) |

## NIH StrokeNet

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-NET-01 | NIH StrokeNet is the national infrastructure for multicenter stroke trials (acute, prevention, recovery). Academic CSCs should treat participation as a strategic capability: site PI pipeline, coordinator FTE, 24/7 screening, central IRB familiarity. | Research; strategy; FTE worksheet | [NIH StrokeNet](https://www.nihstrokenet.org/) | National multicenter infrastructure spanning acute, prevention, and recovery. Treat as strategic capability with PI pipeline, coordinator FTE, 24/7 screening, central IRB familiarity. | 2026-08-18 | active |

## Improvement and high-reliability methods

| ID | Claim | Chapter | Primary source | Verified extraction | Last verified | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ER-QI-IHI | IHI Model for Improvement and PDSA are the default small-cycle method in this handbook. | Quality; PDSA playbook | Institute for Healthcare Improvement, Model for Improvement. [IHI](https://www.ihi.org/) | Aim, measures, changes, PDSA cycles. | 2026-08-18 | active |
| ER-QI-LEAN-DMAIC | Lean and Six Sigma DMAIC are compatible methods; they do not replace a finished PDSA. | Quality; audits | Standard QI method references | Lean and DMAIC are listed as compatible. | 2026-08-18 | active |
| ER-QI-CUSP | AHRQ CUSP is an appropriate unit-level safety method. | Quality; culture | Agency for Healthcare Research and Quality, Comprehensive Unit-based Safety Program. [AHRQ CUSP](https://www.ahrq.gov/hai/cusp/index.html) | CUSP is an AHRQ unit-based safety program. | 2026-08-18 | active |
| ER-QI-HRO | High-reliability organizing uses five principles: preoccupation with failure, reluctance to simplify, sensitivity to operations, commitment to resilience, deference to expertise. Joint Commission patient-safety / high-reliability framing is appropriate. | Leadership; integrating pillars; cadence | Weick & Sutcliffe HRO principles; Joint Commission high-reliability / patient-safety framing | Five HRO principles as named; TJC patient-safety / high-reliability framing is appropriate. | 2026-08-18 | active |

## Register maintenance log

| Date | Action |
| --- | --- |
| 2026-08-18 | Initial public release. All rows verified against primary URLs/DOIs. Operational CSTK/STK window set to v2026B (3Q–4Q 2026); v2026A retained as prior-window citation; v2027A noted for 1Q–2Q 2027. Handbook version 2026.08. |
