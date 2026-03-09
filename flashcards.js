// Faihma's NCLEX Flashcards Data
// This file contains all the flashcard questions organized by course chapters

        // Subject options for dropdowns
        const SubjectOptions = {
            course: {
                'course_ch34_diagnostic': 'Ch 34: Diagnostic Tests',
                'course_ch41_urinary': 'Ch 41: Urinary Elimination',
                'course_ch41_vocab': 'Ch 41: Vocab & Definitions',
                'course_ch40_bowel': 'Ch 40: Bowel Elimination',
                'course_ch35_medication': 'Ch 35: Medication Admin',
                'course_lecture_urinary': 'Lecture: Urinary',
                'ch40_bowel_elimination': 'Ch 40: Bowel (Comprehensive)',
                'course_ch30_nutrition': 'Ch 30: Nutrition'
            },
            general: {
                'fundamentals': 'Fundamentals',
                'pharmacology': 'Pharmacology',
                'med-surg': 'Med-Surg',
                'pediatric': 'Pediatrics',
                'maternal': 'OB/Maternal',
                'psychiatric': 'Psychiatric',
                'leadership': 'Leadership',
                'safety': 'Safety & Infection Control',
                'nutrition': 'Nutrition',
                'fluids': 'Fluids & Electrolytes'
            }
        };

        const QuestionBank = {
            // COURSE-SPECIFIC QUESTIONS FROM FAIHMA'S STUDY MATERIALS
            course_ch34_diagnostic: [
                {
                    question: "What are the most tested nursing responsibilities before any diagnostic test according to fundamentals?",
                    choices: [
                        "A. Check insurance authorization and obtain equipment",
                        "B. Verify patient with 2 identifiers, check consent, perform time-out",
                        "C. Review medical history and start IV access",
                        "D. Educate patient about procedure and discharge planning"
                    ],
                    correct: 1,
                    explanation: "Before any diagnostic test, fundamentals LOVES safety questions: verify patient using 2 identifiers, check for signed consent (before sedation), and perform time-out (correct patient, procedure, site). This is the most tested concept.",
                    hint: "✔️ Remember the safety triad: verify, consent, time-out - fundamentals loves these safety questions!"
                },
                {
                    question: "A patient is scheduled for a CT scan with contrast. What must the nurse check regarding kidney function?",
                    choices: [
                        "A. Blood glucose and hemoglobin levels",
                        "B. Blood urea nitrogen (BUN) and creatinine",
                        "C. Liver enzymes and bilirubin",
                        "D. Electrolytes and protein levels"
                    ],
                    correct: 1,
                    explanation: "Before CT with contrast, always check kidney function (BUN and creatinine) because contrast can cause kidney damage. This is a high-priority safety measure.",
                    hint: "🩸 Before contrast studies, always check kidney function - contrast can damage kidneys!"
                },
                {
                    question: "When collecting a clean-catch urine specimen, what is the correct technique?",
                    choices: [
                        "A. Collect the entire first voided specimen",
                        "B. Clean front to back, void first small amount, collect midstream",
                        "C. Use any urine that comes out first",
                        "D. Collect only after completing full urination"
                    ],
                    correct: 1,
                    explanation: "Clean-catch technique: clean front to back, void first small amount (to flush bacteria), then collect midstream portion. Don't let cup touch skin, and send to lab quickly.",
                    hint: "🚽 Clean-catch = clean, discard first bit, catch middle stream - this is very testable!"
                },
                {
                    question: "For a 24-hour urine collection, what should the nurse do with the first morning void?",
                    choices: [
                        "A. Save it as the first specimen",
                        "B. Discard the first morning void",
                        "C. Send it separately to the lab",
                        "D. Mix it with the other specimens"
                    ],
                    correct: 1,
                    explanation: "For 24-hour urine collection: discard the first morning void, then collect ALL urine for the next 24 hours, and keep specimens on ice.",
                    hint: "24-hour collection starts AFTER discarding the first void - then collect everything!"
                },
                {
                    question: "After a patient has barium studies, what is the expected finding and nursing action?",
                    choices: [
                        "A. Dark urine; increase fluid intake",
                        "B. White stool; increase fluids and may need laxatives",
                        "C. Decreased appetite; provide small frequent meals",
                        "D. Abdominal pain; administer analgesics"
                    ],
                    correct: 1,
                    explanation: "After barium studies: white stool is expected, increase fluids to help eliminate barium, and patient may need laxatives to prevent impaction.",
                    hint: "After barium: expect white stool and push fluids to prevent barium impaction!"
                },
                {
                    question: "A patient had a lumbar puncture. What is the priority nursing intervention?",
                    choices: [
                        "A. Monitor for infection at puncture site",
                        "B. Lay patient flat and monitor for headache",
                        "C. Encourage fluid intake immediately",
                        "D. Check vital signs every 15 minutes"
                    ],
                    correct: 1,
                    explanation: "After lumbar puncture: lay patient flat and monitor for headache (spinal headache from CSF leak). This is the key post-procedure intervention.",
                    hint: "After lumbar puncture: flat positioning prevents spinal headache!"
                },
                {
                    question: "When is it appropriate to check for hemolysis in blood specimens?",
                    choices: [
                        "A. When using a large-bore needle",
                        "B. When using too small a needle or tourniquet too long",
                        "C. When drawing from an IV site",
                        "D. When patient is dehydrated"
                    ],
                    correct: 1,
                    explanation: "Hemolysis (RBC breakdown) occurs with small needles or when tourniquet is left on too long (hemoconcentration). This invalidates many lab tests.",
                    hint: "⚠️ Small needles or prolonged tourniquets cause hemolysis - release tourniquet quickly!"
                },
                {
                    question: "What can cause false positives on stool occult blood tests?",
                    choices: [
                        "A. High-fiber foods and vegetables",
                        "B. Aspirin, NSAIDs, and red meat",
                        "C. Dairy products and refined sugars",
                        "D. Caffeine and artificial sweeteners"
                    ],
                    correct: 1,
                    explanation: "False positives on fecal occult blood can occur with aspirin, NSAIDs, and red meat. Blue color indicates positive blood.",
                    hint: "💩 Aspirin, NSAIDs, red meat can cause false positive occult blood tests!"
                },
                {
                    question: "Which diagnostic procedure requires checking the gag reflex before giving food or fluids?",
                    choices: [
                        "A. Colonoscopy",
                        "B. Upper endoscopy (EGD)",
                        "C. Cystoscopy", 
                        "D. Bronchoscopy"
                    ],
                    correct: 1,
                    explanation: "After endoscopy (EGD), check gag reflex before giving food or fluids because throat is numbed with local anesthetic.",
                    hint: "After throat procedures: always check gag reflex before food/fluids!"
                },
                {
                    question: "According to your notes, what basic lab values must nurses recognize for fundamentals (not diagnose)?",
                    choices: [
                        "A. Complex cardiac enzymes and tumor markers",
                        "B. Low hemoglobin→anemia, high WBC→infection, high glucose→diabetes",
                        "C. Detailed pathology interpretations and genetic markers",
                        "D. Advanced chemistry panels and hormone levels"
                    ],
                    correct: 1,
                    explanation: "For fundamentals, just recognize basics: low hemoglobin→anemia, high WBC→infection, high glucose→diabetes, high potassium→dangerous (heart risk), low platelets→bleeding risk. That's enough for fundamentals.",
                    hint: "🎯 Keep it simple for fundamentals - basic recognition, not complex diagnosis!"
                },
                {
                    question: "What can nurses delegate regarding diagnostic testing?",
                    choices: [
                        "A. Interpreting abnormal lab results and throat cultures",
                        "B. Blood glucose testing and urine collection (not catheter)",
                        "C. IV contrast administration and specimen interpretation",
                        "D. All diagnostic procedures and result analysis"
                    ],
                    correct: 1,
                    explanation: "Can delegate: blood glucose testing, urine collection (not catheter specimen), stool collection. Cannot delegate: throat culture, assessing results, interpreting abnormal labs.",
                    hint: "Delegate simple collection tasks, NOT assessment or interpretation!"
                },
                {
                    question: "For paracentesis/thoracentesis, what is the key nursing monitoring priority?",
                    choices: [
                        "A. Pain level and anxiety",
                        "B. Monitor vital signs and watch for shock, limit fluid removal to 1000 mL",
                        "C. Respiratory rate only",
                        "D. Temperature and infection"
                    ],
                    correct: 1,
                    explanation: "After paracentesis/thoracentesis: monitor vital signs, watch for shock, and limit fluid removal (usually 1000 mL max) to prevent circulatory complications.",
                    hint: "Monitor for shock and limit fluid removal - too much can cause circulatory problems!"
                },
                {
                    question: "A patient needs contrast media. What allergy must be assessed?",
                    choices: [
                        "A. Latex and environmental allergies",
                        "B. Iodine and shellfish allergies",
                        "C. Antibiotic and food allergies",
                        "D. Metal and medication allergies"
                    ],
                    correct: 1,
                    explanation: "Before contrast media, ask about iodine/shellfish allergies and monitor for anaphylaxis. This is a critical safety assessment.",
                    hint: "Contrast contains iodine - always ask about iodine/shellfish allergies!"
                },
                {
                    question: "What are the 2 main things to monitor AFTER any procedure according to your notes?",
                    choices: [
                        "A. Pain and mobility",
                        "B. Bleeding and allergic reaction",
                        "C. Nausea and fatigue",
                        "D. Anxiety and confusion"
                    ],
                    correct: 1,
                    explanation: "After procedures, always assess for: bleeding, infection, allergic reaction, respiratory distress, and changes in vital signs. Bleeding and allergic reactions are the top priorities.",
                    hint: "👉 Post-procedure priorities: bleeding and allergic reactions - that's priority thinking!"
                },
                {
                    question: "How long should pressure be applied after venipuncture in patients on anticoagulants?",
                    choices: [
                        "A. 1-2 minutes",
                        "B. 3-5 minutes",
                        "C. 10 minutes",
                        "D. Until bleeding stops completely"
                    ],
                    correct: 1,
                    explanation: "Apply pressure 3-5 minutes if patient is on warfarin, heparin, or aspirin due to increased bleeding risk from anticoagulation.",
                    hint: "🩸 Anticoagulants = increased bleeding risk = longer pressure (3-5 minutes)!"
                },
                {
                    question: "If your professor writes an exam question about diagnostic testing, it will likely test:",
                    choices: [
                        "A. Complex disease pathophysiology",
                        "B. Safety, priority, monitoring, what to assess, what to report",
                        "C. Detailed laboratory interpretation",
                        "D. Equipment specifications and costs"
                    ],
                    correct: 1,
                    explanation: "Professor exam questions focus on: safety, priority, monitoring, what to assess, what to report, what can be delegated - NOT 'what disease does this lab mean.'",
                    hint: "🎯 Professors test nursing actions: safety, priority, assessment, reporting - not medical diagnosis!"
                },
                {
                    question: "For stool collection, what causes invalid results?",
                    choices: [
                        "A. Using too large a specimen container",
                        "B. Urine contamination of the specimen",
                        "C. Collecting specimen too quickly",
                        "D. Using a wooden spatula"
                    ],
                    correct: 1,
                    explanation: "For stool collection: avoid urine contamination, need only small sample for occult blood. Blue color = positive blood result.",
                    hint: "🚽 Keep urine OUT of stool specimens - contamination ruins the test!"
                },
                {
                    question: "The nurse knows contrast media safety includes checking kidney function because:",
                    choices: [
                        "A. Kidneys process all medications",
                        "B. Contrast can cause kidney damage",
                        "C. Kidneys regulate blood pressure",
                        "D. Contrast affects electrolyte balance"
                    ],
                    correct: 1,
                    explanation: "Check kidney function (BUN, creatinine) before contrast because contrast media can cause kidney damage, especially in patients with existing kidney problems.",
                    hint: "Contrast can damage kidneys - always check kidney function first!"
                },
                {
                    question: "What indicates proper needle disposal after venipuncture?",
                    choices: [
                        "A. Recap needle and place in regular trash",
                        "B. Dispose needle in sharps container immediately",
                        "C. Break needle first, then dispose",
                        "D. Clean needle and reuse if sterile"
                    ],
                    correct: 1,
                    explanation: "Wear gloves during venipuncture and dispose needle in sharps container immediately - never recap needles due to needlestick injury risk.",
                    hint: "✔️ Sharps go in sharps containers - never recap needles!"
                }
            ],

            course_ch41_urinary: [
                {
                    question: "What is the normal adult urine output per day according to your fundamentals notes?",
                    choices: [
                        "A. 1000 mL per day",
                        "B. 1400 mL per day", 
                        "C. 1800 mL per day",
                        "D. 2000 mL per day"
                    ],
                    correct: 1,
                    explanation: "Healthy adults eliminate approximately 1400 mL of urine per day, depending on intake and losses. This is a key fundamentals value to remember.",
                    hint: "Remember 1400 mL/day - this specific number appears in your exam notes!"
                },
                {
                    question: "What is the minimum safe urine output per hour that requires reporting?",
                    choices: [
                        "A. Less than 20 mL/hr",
                        "B. Less than 30 mL/hr", 
                        "C. Less than 50 mL/hr",
                        "D. Less than 60 mL/hr"
                    ],
                    correct: 1,
                    explanation: "Less than 30 mL/hr indicates decreased renal perfusion and must be reported immediately. This is a critical safety value.",
                    hint: "⚠️ <30 mL/hr = decreased renal perfusion → report immediately!"
                },
                {
                    question: "Which definition describes anuria according to your study notes?",
                    choices: [
                        "A. Difficulty starting urination",
                        "B. Less than 50-100 mL in 24 hours",
                        "C. Excessive urination at night", 
                        "D. Painful urination"
                    ],
                    correct: 1,
                    explanation: "Anuria is failure of kidneys to produce urine, with less than 50-100 mL in 24 hours. This is a LIFE-THREATENING EMERGENCY requiring dialysis.",
                    hint: "⚠️ Anuria = kidney failure = LIFE-THREATENING EMERGENCY!"
                },
                {
                    question: "What is oliguria in adults according to your notes?",
                    choices: [
                        "A. Less than 300 mL/day",
                        "B. Less than 500 mL/day",
                        "C. Less than 700 mL/day",
                        "D. Less than 1000 mL/day"
                    ],
                    correct: 1,
                    explanation: "Oliguria in adults is less than 500 mL/day or less than 0.5 mL/kg/hr. This indicates reduced kidney function and requires intervention.",
                    hint: "Oliguria = <500 mL/day in adults - remember this specific value!"
                },
                {
                    question: "What is polyuria according to your fundamentals notes?",
                    choices: [
                        "A. ≥ 2000 mL/day",
                        "B. ≥ 2500 mL/day",
                        "C. ≥ 3000 mL/day",
                        "D. ≥ 3500 mL/day"
                    ],
                    correct: 1,
                    explanation: "Polyuria is excessive urine output ≥ 2500 mL/day. Can be caused by high fluid intake, diuretics, diabetes, or contrast dye.",
                    hint: "Polyuria = ≥2500 mL/day - excessive urine output!"
                },
                {
                    question: "In fundamentals, urinary elimination is affected by physical + what two other essential factors?",
                    choices: [
                        "A. Medical history + medications",
                        "B. Emotional + privacy needs",
                        "C. Diet + exercise",
                        "D. Age + gender"
                    ],
                    correct: 1,
                    explanation: "In fundamentals, always think: physical + emotional + privacy needs. This is emphasized throughout the urinary elimination content.",
                    hint: "⚠️ Key fundamentals concept: physical + emotional + privacy needs!"
                },
                {
                    question: "Normal urine characteristics include sterility and what average specific gravity range?",
                    choices: [
                        "A. 1.000-1.020",
                        "B. 1.005-1.030",
                        "C. 1.010-1.040", 
                        "D. 1.020-1.050"
                    ],
                    correct: 1,
                    explanation: "Normal urine specific gravity is 1.005-1.030. Low = overhydration or kidney unable to concentrate urine. High = dehydration.",
                    hint: "🔹 Specific gravity 1.005-1.030 - this exact range is testable!"
                },
                {
                    question: "What are the 3 processes of urine formation that nurses must know?",
                    choices: [
                        "A. Absorption, distribution, excretion",
                        "B. Filtration, reabsorption, secretion",
                        "C. Intake, processing, output",
                        "D. Collection, concentration, elimination"
                    ],
                    correct: 1,
                    explanation: "Urine formation occurs by 3 processes: filtration (in glomerulus), reabsorption (in renal tubule), secretion (waste and excess remain as urine).",
                    hint: "3 processes you MUST know: filtration, reabsorption, secretion!"
                },
                {
                    question: "Which nephron parts are involved in the 3 urine formation processes?",
                    choices: [
                        "A. Only the glomerulus",
                        "B. Renal corpuscle (glomerulus + Bowman capsule) and renal tubule",
                        "C. Only the collecting duct",
                        "D. Just the loop of Henle"
                    ],
                    correct: 1,
                    explanation: "Each nephron has: renal corpuscle (glomerulus + Bowman capsule) and renal tubule (proximal tubule, loop of Henle, distal convoluted tubule).",
                    hint: "Nephron = renal corpuscle + renal tubule working together!"
                },
                {
                    question: "What happens with micturition (urination) process when sequence is disrupted?",
                    choices: [
                        "A. Increased urine production",
                        "B. Retention or incontinence",
                        "C. Kidney stone formation",
                        "D. Urinary tract infection"
                    ],
                    correct: 1,
                    explanation: "Normal micturition: bladder stretches → nerve signals create urge → brain signals bladder to contract + sphincter to relax → urine exits. If disrupted → retention or incontinence.",
                    hint: "Disrupted micturition sequence = retention or incontinence!"
                },
                {
                    question: "What is a major risk with acute anuria?",
                    choices: [
                        "A. Dehydration only",
                        "B. Acute kidney injury, chronic kidney disease, coma, death",
                        "C. Urinary tract infection",
                        "D. Bladder distention"
                    ],
                    correct: 1,
                    explanation: "Acute anuria risks: acute kidney injury, chronic kidney disease, coma, death. This is why it's a LIFE-THREATENING EMERGENCY requiring immediate intervention.",
                    hint: "⚠️ Anuria can cause coma and death - true emergency!"
                },
                {
                    question: "What electrolyte must be monitored closely in oliguria patients?",
                    choices: [
                        "A. Sodium",
                        "B. Potassium must be < 5 mEq/L",
                        "C. Chloride",
                        "D. Magnesium"
                    ],
                    correct: 1,
                    explanation: "In oliguria, monitor potassium closely - it must be < 5 mEq/L. High potassium can cause dangerous heart rhythm changes.",
                    hint: "⚠️ Monitor K+ in renal patients - must stay <5 mEq/L for heart safety!"
                },
                {
                    question: "What is the most important nursing intervention for oliguria?",
                    choices: [
                        "A. Increase fluid intake immediately",
                        "B. Strict I&O monitoring",
                        "C. Administer diuretics",
                        "D. Encourage mobility"
                    ],
                    correct: 1,
                    explanation: "Strict I&O is essential in acute kidney injury, chronic kidney disease, and fluid restriction orders. This monitors kidney function closely.",
                    hint: "⚠️ SAFE PRACTICE: Strict I&O essential in kidney problems!"
                },
                {
                    question: "What causes stress incontinence?",
                    choices: [
                        "A. Bladder spasms",
                        "B. Leakage with coughing, sneezing, laughing",
                        "C. Inability to reach toilet",
                        "D. Neurologic damage"
                    ],
                    correct: 1,
                    explanation: "Stress incontinence = leakage with increased intra-abdominal pressure (coughing, sneezing, laughing, exercise) due to weak pelvic floor muscles.",
                    hint: "Stress incontinence = physical stress (cough, sneeze) causes leakage!"
                },
                {
                    question: "What is urge incontinence?",
                    choices: [
                        "A. Leakage with physical activity",
                        "B. Sudden strong urge, cannot reach toilet in time",
                        "C. Constant dribbling",
                        "D. No awareness of bladder fullness"
                    ],
                    correct: 1,
                    explanation: "Urge incontinence = sudden strong urge to urinate but cannot reach toilet in time. Different from stress incontinence.",
                    hint: "Urge = sudden overwhelming need but can't make it to toilet!"
                },
                {
                    question: "What characterizes overflow incontinence?",
                    choices: [
                        "A. Large volume loss with activity",
                        "B. Bladder cannot empty → constant dribbling",
                        "C. Sudden urgency with normal voiding",
                        "D. Complete loss of bladder control"
                    ],
                    correct: 1,
                    explanation: "Overflow incontinence = bladder cannot empty completely, so it constantly dribbles urine. The bladder is always full and overflowing.",
                    hint: "Overflow = bladder stays full and constantly dribbles!"
                },
                {
                    question: "What medications commonly cause urinary retention?",
                    choices: [
                        "A. Diuretics and laxatives",
                        "B. Antihistamines, anticholinergics, antispasmodics, tricyclic antidepressants",
                        "C. Antibiotics and vitamins",
                        "D. Pain medications only"
                    ],
                    correct: 1,
                    explanation: "Medications causing retention: antihistamines, anticholinergics, antispasmodics, tricyclic antidepressants. These interfere with bladder emptying.",
                    hint: "Anti-cholinergics and antihistamines = anti-urination (retention)!"
                },
                {
                    question: "What is the difference between acute and chronic urinary retention?",
                    choices: [
                        "A. No difference in symptoms",
                        "B. Acute: painful, cannot void, medical emergency; Chronic: weak stream, dribbling, incomplete emptying",
                        "C. Only duration is different",
                        "D. Chronic is always more serious"
                    ],
                    correct: 1,
                    explanation: "Acute retention: painful, cannot void, medical emergency. Chronic retention: weak stream, difficulty starting, dribbling, feeling of incomplete emptying.",
                    hint: "Acute retention = painful emergency; Chronic = ongoing weak stream!"
                },
                {
                    question: "What age group has the highest risk for complications from diarrhea?",
                    choices: [
                        "A. Young adults",
                        "B. Infants and elderly",
                        "C. Middle-aged adults",
                        "D. Teenagers"
                    ],
                    correct: 1,
                    explanation: "Infants and elderly have the highest risk for dehydration, electrolyte imbalance, and complications from diarrhea due to limited reserves.",
                    hint: "⚠️ Vulnerable populations: infants + elderly at highest risk!"
                },
                {
                    question: "Why is privacy essential for urinary elimination?",
                    choices: [
                        "A. It's just a preference",
                        "B. Lack of privacy → anxiety → muscle tightening → difficulty voiding",
                        "C. It only matters in hospitals",
                        "D. Privacy doesn't affect elimination"
                    ],
                    correct: 1,
                    explanation: "If privacy is not provided: anxiety increases, muscles tighten, difficulty initiating voiding. Suppressing urge increases risk of incontinence and UTI.",
                    hint: "⚠️ No privacy = anxiety = tight muscles = can't void!"
                }
            ],

            course_ch41_vocab: [
                {
                    question: "Define: Anuria",
                    choices: [
                        "A. Excessive urination at night",
                        "B. Failure of the kidneys to produce or excrete urine; life-threatening",
                        "C. Painful urination",
                        "D. Reduced urine output below 500 mL/day"
                    ],
                    correct: 1,
                    explanation: "Anuria is the failure of kidneys to produce or excrete urine. It is life-threatening because waste accumulates, putting the patient at risk for coma or death.",
                    hint: "An- (without) + -uria (urine) = no urine production"
                },
                {
                    question: "Define: Creatinine",
                    choices: [
                        "A. A hormone produced by the kidneys",
                        "B. A waste product of protein metabolism measured as BUN",
                        "C. A waste product of muscle metabolism filtered by the kidneys",
                        "D. A type of kidney stone"
                    ],
                    correct: 2,
                    explanation: "Creatinine is a waste product of muscle metabolism. Normal: 0.5-1.1 mg/dL (women), 0.6-1.3 mg/dL (men). Elevated levels indicate kidney damage.",
                    hint: "Creatinine = muscle waste. Not affected by diet — reliable kidney marker!"
                },
                {
                    question: "Define: Dialysis",
                    choices: [
                        "A. Surgical removal of the kidney",
                        "B. A technique where fluids and molecules pass through a semipermeable membrane to filter waste",
                        "C. Insertion of a catheter into the bladder",
                        "D. A diagnostic test using contrast dye"
                    ],
                    correct: 1,
                    explanation: "Dialysis filters waste products from the blood when kidneys can't. Two types: hemodialysis (blood filtered through machine) and peritoneal dialysis (abdomen used as filter).",
                    hint: "Dialysis = artificial kidney filtering through a membrane"
                },
                {
                    question: "Define: Dysuria",
                    choices: [
                        "A. Absence of urine",
                        "B. Blood in the urine",
                        "C. Painful or difficult urination",
                        "D. Excessive urine output"
                    ],
                    correct: 2,
                    explanation: "Dysuria is painful urination. Causes include UTIs, bladder infections, kidney/bladder stones, STDs, yeast infections, prostate enlargement, and malignancy.",
                    hint: "Dys- (painful/difficult) + -uria (urine) = painful urination"
                },
                {
                    question: "Define: Enuresis",
                    choices: [
                        "A. Involuntary urination, especially bedwetting in children",
                        "B. Painful urination in adults",
                        "C. Blood in the urine",
                        "D. Excessive nighttime urination"
                    ],
                    correct: 0,
                    explanation: "Enuresis is involuntary urination, commonly bedwetting. Nocturnal enuresis is common in children until age 5 and shouldn't be considered a problem until after that age.",
                    hint: "Enuresis = involuntary urination (think: bedwetting in kids)"
                },
                {
                    question: "Define: Functional incontinence",
                    choices: [
                        "A. Leakage with coughing or sneezing",
                        "B. Incontinence due to physical or cognitive limitations preventing reaching the toilet",
                        "C. Constant dribbling from an overfull bladder",
                        "D. Sudden uncontrollable urge to void"
                    ],
                    correct: 1,
                    explanation: "Functional incontinence occurs when the urinary system works normally but physical limitations (mobility issues) or cognitive impairment (dementia) prevent reaching the toilet in time.",
                    hint: "Functional = the bladder works fine, the PERSON can't get to the toilet"
                },
                {
                    question: "Define: Hematuria",
                    choices: [
                        "A. Protein in the urine",
                        "B. Glucose in the urine",
                        "C. Blood in the urine",
                        "D. Bacteria in the urine"
                    ],
                    correct: 2,
                    explanation: "Hematuria is blood in urine. Can be gross (visible) or microscopic. Causes: infection, trauma, kidney stones, tumors, malignancy. Color does NOT reflect degree of blood loss.",
                    hint: "Hemat- (blood) + -uria (urine) = blood in urine"
                },
                {
                    question: "Define: Hemodialysis",
                    choices: [
                        "A. Filtering blood through the peritoneal membrane",
                        "B. Filtering blood through a machine with vascular catheters",
                        "C. Inserting a catheter into the kidney",
                        "D. Surgical creation of a urinary stoma"
                    ],
                    correct: 1,
                    explanation: "Hemodialysis: blood flows from body through vascular catheters to dialysis machine, filtered through membrane, then returned. Usually 3+ times/week at outpatient facility.",
                    hint: "Hemo (blood) + dialysis = blood filtered through a machine"
                },
                {
                    question: "Define: Incontinence",
                    choices: [
                        "A. Inability to produce urine",
                        "B. Inability to control the passage of urine",
                        "C. Pain during urination",
                        "D. Frequent nighttime urination"
                    ],
                    correct: 1,
                    explanation: "Urinary incontinence is the inability to control urination. Affects up to 54% of adult women and 21% of men. Types: stress, urge, overflow, mixed, functional, temporary.",
                    hint: "Incontinence = can't control when urine comes out"
                },
                {
                    question: "Define: Irrigation (bladder)",
                    choices: [
                        "A. Removing a catheter from the bladder",
                        "B. Flushing the bladder or catheter with sterile solution",
                        "C. Testing urine for bacteria",
                        "D. Measuring urine output hourly"
                    ],
                    correct: 1,
                    explanation: "Bladder irrigation is flushing with sterile solution to maintain catheter patency, remove clots/debris, or instill medication. Can be intermittent or continuous. Triple-lumen catheter is best for closed continuous irrigation.",
                    hint: "Irrigation = flushing/washing out the bladder with sterile fluid"
                },
                {
                    question: "Define: Kegel exercises",
                    choices: [
                        "A. Abdominal strengthening exercises",
                        "B. Pelvic floor muscle exercises to strengthen bladder control",
                        "C. Leg exercises to improve circulation",
                        "D. Breathing exercises for relaxation"
                    ],
                    correct: 1,
                    explanation: "Kegel exercises strengthen pelvic floor muscles to reduce incontinence. Tighten muscles 3-4 seconds, relax 30 seconds, repeat. Improvement seen in 8-10 weeks.",
                    hint: "Kegels = squeeze pelvic floor muscles to improve bladder control"
                },
                {
                    question: "Define: Micturition",
                    choices: [
                        "A. The process of filtering blood in the kidneys",
                        "B. The process of urination (voiding)",
                        "C. The formation of kidney stones",
                        "D. The measurement of urine output"
                    ],
                    correct: 1,
                    explanation: "Micturition is the process of urination/voiding. Requires coordination: bladder stretches → nerve signals → brain signals bladder to contract + sphincter to relax → urine exits.",
                    hint: "Micturition = fancy word for peeing/voiding/urination"
                },
                {
                    question: "Define: Mixed incontinence",
                    choices: [
                        "A. Incontinence from multiple UTIs",
                        "B. Combination of stress and urge incontinence",
                        "C. Incontinence only at night",
                        "D. Overflow plus functional incontinence"
                    ],
                    correct: 1,
                    explanation: "Mixed incontinence is a combination of both stress and urge incontinence. The patient experiences leakage with physical activity AND sudden uncontrollable urges.",
                    hint: "Mixed = stress + urge combined in one patient"
                },
                {
                    question: "Define: Nephrons",
                    choices: [
                        "A. The tubes connecting kidneys to bladder",
                        "B. The functional filtering units of the kidney",
                        "C. Muscles that control urination",
                        "D. Nerves that signal the brain about bladder fullness"
                    ],
                    correct: 1,
                    explanation: "Nephrons are the tiny filtering units of the kidney (210,000 to 2 million per kidney). Each has a renal corpuscle (glomerulus + Bowman capsule) and a renal tubule.",
                    hint: "Nephrons = kidney's filtering units (millions of tiny filters!)"
                },
                {
                    question: "Define: Nocturia",
                    choices: [
                        "A. Inability to urinate",
                        "B. Excessive urination during the daytime",
                        "C. Excessive urination at night that disrupts sleep",
                        "D. Blood in the urine at night"
                    ],
                    correct: 2,
                    explanation: "Nocturia is excessive urination at night disrupting sleep. Common with BPH, postmenopausal women, CHF, diabetes. Normally urine decreases at night to half of daytime.",
                    hint: "Noct- (night) + -uria (urine) = waking up to pee at night"
                },
                {
                    question: "Define: Oliguria",
                    choices: [
                        "A. No urine production at all",
                        "B. Reduced urine volume: <500 mL/day in adults",
                        "C. Excessive urine production",
                        "D. Painful urination"
                    ],
                    correct: 1,
                    explanation: "Oliguria = reduced urine: <1 mL/kg/hr (infants), <0.5 mL/kg/hr (children), <500 mL/day (adults). Symptom of acute kidney injury or chronic kidney disease.",
                    hint: "Olig- (few/little) + -uria (urine) = too little urine"
                },
                {
                    question: "Define: Overflow incontinence",
                    choices: [
                        "A. Large volume loss during exercise",
                        "B. Constant dribbling because bladder cannot empty completely",
                        "C. Sudden urgent need to void",
                        "D. Leakage only when lying down"
                    ],
                    correct: 1,
                    explanation: "Overflow incontinence: bladder can't empty completely → constant dribbling of urine or increased frequency. Caused by weakened muscles or pathologic conditions of bladder.",
                    hint: "The bladder is always full and literally overflows — constant dribbling"
                },
                {
                    question: "Define: Peritoneal dialysis",
                    choices: [
                        "A. Dialysis using a machine to filter blood externally",
                        "B. Dialysis using the abdominal cavity as a natural filter",
                        "C. Surgical insertion of a kidney transplant",
                        "D. Removal of fluid from the lungs"
                    ],
                    correct: 1,
                    explanation: "Peritoneal dialysis: solution instilled into abdominal cavity through external catheter. The peritoneal membrane acts as the filter. Solution rests for prescribed period, then drained.",
                    hint: "Peritoneal = using the belly's own lining as a filter"
                },
                {
                    question: "Define: Polyuria",
                    choices: [
                        "A. Pain during urination",
                        "B. Blood in the urine",
                        "C. Excessive urine output (≥2500 mL/day)",
                        "D. Frequent small-volume urination"
                    ],
                    correct: 2,
                    explanation: "Polyuria is excessive urine ≥2500 mL/day. Caused by caffeine, alcohol, diuretics, diabetes, too much sugar/glucose, or contrast media dyes.",
                    hint: "Poly- (many/much) + -uria (urine) = too much urine"
                },
                {
                    question: "Define: Stress incontinence",
                    choices: [
                        "A. Incontinence caused by emotional stress",
                        "B. Loss of urine control during activities that increase intra-abdominal pressure",
                        "C. Constant dribbling of urine",
                        "D. Inability to reach the toilet in time"
                    ],
                    correct: 1,
                    explanation: "Stress incontinence = loss of urine with coughing, sneezing, laughing, exercise — activities that increase pressure on the bladder. NOT related to emotional stress.",
                    hint: "Physical STRESS on bladder (cough, sneeze) = leakage. Not emotional stress!"
                },
                {
                    question: "Define: Urea",
                    choices: [
                        "A. A muscle waste product",
                        "B. The end product of protein metabolism, measured as BUN",
                        "C. A hormone that controls urine output",
                        "D. A type of kidney enzyme"
                    ],
                    correct: 1,
                    explanation: "Urea is the end product of protein metabolism. Measured as Blood Urea Nitrogen (BUN). Normal BUN: 10-20 mg/dL. Elevated in dehydration, kidney disease, high-protein diet.",
                    hint: "Urea = protein waste → measured as BUN (10-20 mg/dL normal)"
                },
                {
                    question: "Define: Urge incontinence",
                    choices: [
                        "A. Leakage when coughing or sneezing",
                        "B. Inability to empty the bladder",
                        "C. Sudden strong urge to void followed by involuntary loss of urine",
                        "D. Incontinence due to physical limitation"
                    ],
                    correct: 2,
                    explanation: "Urge incontinence: sudden strong urge to void followed by rapid involuntary bladder contraction. Person cannot reach toilet in time. Different from stress incontinence.",
                    hint: "Urge = sudden overwhelming URGE and you can't hold it"
                },
                {
                    question: "Define: Urinary diversion",
                    choices: [
                        "A. A catheter inserted through the urethra",
                        "B. Surgical rerouting of urine away from the bladder to exit through a stoma",
                        "C. A bladder training exercise program",
                        "D. Medication to increase urine output"
                    ],
                    correct: 1,
                    explanation: "Urinary diversion: surgical procedure to reroute urine when bladder is diseased/removed. Types: ileal conduit (most common), neobladder, continent diversion (Kock/Indiana pouch).",
                    hint: "Diversion = diverting/rerouting urine to exit through the abdomen"
                },
                {
                    question: "Define: Urinary retention",
                    choices: [
                        "A. Producing too much urine",
                        "B. Inability to empty the bladder fully",
                        "C. Blood in the urine",
                        "D. Frequent urination in small amounts"
                    ],
                    correct: 1,
                    explanation: "Urinary retention is the inability to empty the bladder. Caused by obstruction (enlarged prostate) or neurologic disorder. Acute retention is painful and a medical emergency.",
                    hint: "Retention = urine is RETAINED (stuck) in the bladder, can't get it out"
                },
                {
                    question: "Define: Urinary tract infection (UTI)",
                    choices: [
                        "A. A viral infection of the kidneys only",
                        "B. Bacterial infection in any part of the urinary tract, most commonly E. coli",
                        "C. A fungal infection of the bladder",
                        "D. Inflammation without infection"
                    ],
                    correct: 1,
                    explanation: "UTIs are bacterial infections (usually E. coli) in the urinary tract. Most common health care-associated infection. ~80% of hospital UTIs are catheter-associated (CAUTIs).",
                    hint: "UTI = bacteria (usually E. coli) in the urinary system. #1 hospital infection!"
                },
                {
                    question: "Define: Temporary incontinence",
                    choices: [
                        "A. Permanent loss of bladder control",
                        "B. Incontinence associated with reversible conditions like constipation, infections, or medications",
                        "C. Incontinence only during pregnancy",
                        "D. Age-related permanent incontinence"
                    ],
                    correct: 1,
                    explanation: "Temporary incontinence is associated with reversible conditions: severe constipation, urinary infections, or medication side effects. Resolves when the underlying cause is treated.",
                    hint: "Temporary = fix the cause (constipation, infection, med) and it goes away!"
                }
            ],

            course_ch40_bowel: [
                {
                    question: "What are the 3 main functions of the large intestine related to bowel elimination?",
                    choices: [
                        "A. Digestion, absorption, metabolism",
                        "B. Absorbs water, absorbs electrolytes, forms feces",
                        "C. Produces enzymes, filters blood, stores bile",
                        "D. Breaks down proteins, processes vitamins, eliminates toxins"
                    ],
                    correct: 1,
                    explanation: "Large intestine functions: absorbs water, absorbs electrolytes (Na, Cl), secretes bicarbonate, excretes potassium (4-9 mEq/day), and forms feces.",
                    hint: "Large intestine: absorb water + electrolytes, form feces!"
                },
                {
                    question: "What is the normal frequency range for bowel movements?",
                    choices: [
                        "A. Once daily only",
                        "B. 2-3 times per week to several times per day",
                        "C. Every other day maximum",
                        "D. At least twice daily"
                    ],
                    correct: 1,
                    explanation: "Normal bowel movement frequency varies widely: 2-3 times per week to several times per day. Stool consistency can be hard, formed, soft, or liquid.",
                    hint: "Wide range is normal: 2-3 times/week to several times/day!"
                },
                {
                    question: "What is the definition of constipation according to your notes?",
                    choices: [
                        "A. Fewer than 2 bowel movements per week",
                        "B. Fewer than 3 bowel movements per week",
                        "C. No bowel movement for 2 days",
                        "D. Hard stool regardless of frequency"
                    ],
                    correct: 1,
                    explanation: "Constipation is defined as fewer than 3 bowel movements per week, with difficult or infrequent bowel movements and hard stool.",
                    hint: "Constipation = <3 BMs per week - specific number to remember!"
                },
                {
                    question: "What is the cardinal sign of fecal impaction?",
                    choices: [
                        "A. Severe abdominal pain",
                        "B. Continuous oozing of liquid stool",
                        "C. Complete absence of bowel sounds",
                        "D. Fever and elevated white blood cells"
                    ],
                    correct: 1,
                    explanation: "Cardinal sign of impaction: continuous oozing of liquid stool around the hardened fecal mass. This leakage is often mistaken for diarrhea.",
                    hint: "Impaction paradox: liquid stool leaks around hard mass!"
                },
                {
                    question: "What can increase the risk for fecal impaction after diagnostic tests?",
                    choices: [
                        "A. IV contrast agents",
                        "B. Barium from radiologic exams",
                        "C. Iodine preparations",
                        "D. Antibiotic preparations"
                    ],
                    correct: 1,
                    explanation: "Barium from radiologic exams increases impaction risk. Encourage fluids after barium studies and may need laxatives or enemas to prevent impaction.",
                    hint: "Barium hardens stool → impaction risk → push fluids after!"
                },
                {
                    question: "What is the Valsalva maneuver and why is it dangerous?",
                    choices: [
                        "A. Deep breathing technique for relaxation",
                        "B. Bearing down while holding breath - causes rapid BP changes",
                        "C. Muscle exercises for bowel training",
                        "D. Positioning technique for comfort"
                    ],
                    correct: 1,
                    explanation: "Valsalva maneuver = bearing down while holding breath. Causes increased intrathoracic pressure, rapid BP rise then drop, leading to dizziness, blurred vision, fainting. High risk in cardiac patients.",
                    hint: "⚠️ Valsalva = dangerous BP swings, especially in cardiac patients!"
                },
                {
                    question: "Where does most medication metabolism occur in the body?",
                    choices: [
                        "A. Kidneys",
                        "B. Liver",
                        "C. Lungs",
                        "D. Small intestine"
                    ],
                    correct: 1,
                    explanation: "Most drug metabolism occurs in the liver. Metabolism may be slowed in elderly individuals and those with impaired liver function, risking toxic drug levels.",
                    hint: "Liver = main drug metabolism site - watch for toxicity in liver disease!"
                },
                {
                    question: "What is the most common organism causing UTIs according to your notes?",
                    choices: [
                        "A. Staphylococcus aureus",
                        "B. Escherichia coli (E. coli)",
                        "C. Pseudomonas aeruginosa",
                        "D. Klebsiella pneumoniae"
                    ],
                    correct: 1,
                    explanation: "Most common UTI organism: Escherichia coli (E. coli). Females have higher UTI risk due to shorter urethra and proximity to anus.",
                    hint: "🔟 E. coli = #1 UTI bug - remember this for exams!"
                },
                {
                    question: "What should stool consistency be like for different colostomy locations?",
                    choices: [
                        "A. All colostomies produce the same consistency",
                        "B. Ileostomy → very liquid; Descending colostomy → formed stool",
                        "C. Location doesn't affect consistency",
                        "D. Ascending produces most formed stool"
                    ],
                    correct: 1,
                    explanation: "Stool consistency depends on location: ileostomy → very liquid stool; descending colostomy → formed stool. This is because water reabsorption varies by bowel location.",
                    hint: "Higher in GI tract = more liquid; Lower = more formed stool!"
                },
                {
                    question: "What indicates a healthy stoma appearance?",
                    choices: [
                        "A. Pale pink and dry",
                        "B. Dark pink to red, warm, moist, similar to lips",
                        "C. Dark purple and swollen",
                        "D. Light brown and firm"
                    ],
                    correct: 1,
                    explanation: "Healthy stoma should be: dark pink to red, warm, moist, similar to lips. Changes in color or temperature may indicate circulation problems.",
                    hint: "Healthy stoma = like healthy lips (pink, warm, moist)!"
                },
                {
                    question: "What are gas-producing foods that can cause intestinal distention?",
                    choices: [
                        "A. Rice, toast, bananas",
                        "B. Onions, cauliflower, beans",
                        "C. Chicken, fish, potatoes",
                        "D. Pasta, bread, cereals"
                    ],
                    correct: 1,
                    explanation: "Gas-producing foods: onions, cauliflower, beans. These cause intestinal distention, increased colon motility, and flatulence.",
                    hint: "Remember the gassy foods: onions, cauliflower, beans!"
                },
                {
                    question: "What happens physiologically with diarrhea?",
                    choices: [
                        "A. Increased absorption time in intestines",
                        "B. Increased intestinal motility → stool moves too fast → decreased time for fluid/nutrient absorption",
                        "C. Decreased peristalsis and slow transit",
                        "D. Normal intestinal function with excess water"
                    ],
                    correct: 1,
                    explanation: "Diarrhea pathophysiology: increased intestinal motility → stool moves too fast → decreased time for fluid absorption and nutrient absorption → fluid & electrolyte loss.",
                    hint: "Diarrhea = too fast transit = no time to absorb water!"
                },
                {
                    question: "What is C. difficile and who is at highest risk?",
                    choices: [
                        "A. Normal gut bacteria in healthy people",
                        "B. Bacterium causing diarrhea; high risk: older adults, hospitalized patients, after antibiotics",
                        "C. Viral infection in children only",
                        "D. Fungal infection in immunocompromised"
                    ],
                    correct: 1,
                    explanation: "C. difficile causes diarrhea and life-threatening colitis. High risk: older adults, hospitalized patients, long-term care residents, after antibiotic use. Easily transmitted by contact.",
                    hint: "⚠️ C. diff = dangerous, contagious, antibiotic-related diarrhea!"
                },
                {
                    question: "What foods help with constipation according to dietary recommendations?",
                    choices: [
                        "A. Low-fiber foods and dairy products",
                        "B. 20-35 g fiber daily, 6-8 glasses fluid daily, fruits, vegetables, bran",
                        "C. High-protein, low-carbohydrate foods",
                        "D. Processed foods and refined grains"
                    ],
                    correct: 1,
                    explanation: "For constipation: 20-35 g fiber daily, 6-8 glasses fluid daily, eat fruits, vegetables, bran, beans. Fiber adds bulk and keeps stool soft.",
                    hint: "Constipation fix: fiber + fluids (20-35g fiber, 6-8 glasses water)!"
                },
                {
                    question: "What dietary modifications help with diarrhea?",
                    choices: [
                        "A. High-fiber and spicy foods",
                        "B. Bland, small meals; avoid milk, caffeine, spices, gas-producing foods",
                        "C. Large meals with cold beverages",
                        "D. High-fat and high-sugar foods"
                    ],
                    correct: 1,
                    explanation: "For diarrhea: bland, small meals; avoid milk, caffeine, spices, gas-producing foods, hot/cold liquids. Use tepid liquids to prevent dehydration.",
                    hint: "Diarrhea diet: bland + small meals, avoid irritants (milk, caffeine, spice)!"
                },
                {
                    question: "What should the nurse monitor when a fecal management system is used?",
                    choices: [
                        "A. Only the collection amount",
                        "B. Skin integrity around the device",
                        "C. Patient comfort only",
                        "D. Device color changes"
                    ],
                    correct: 1,
                    explanation: "Fecal management systems are used in immobile incontinent patients to protect skin. Monitor skin integrity carefully to prevent breakdown from device or stool contact.",
                    hint: "Fecal management = protect skin, so monitor skin integrity!"
                },
                {
                    question: "When should colorectal screening begin according to current recommendations?",
                    choices: [
                        "A. Age 40",
                        "B. Age 45",
                        "C. Age 50", 
                        "D. Age 55"
                    ],
                    correct: 1,
                    explanation: "Colorectal screening: FOBT yearly starting at age 45, colonoscopy begins at 45 (earlier if high risk). This represents updated guidelines.",
                    hint: "Updated screening age: starts at 45 now (used to be 50)!"
                },
                {
                    question: "What indicates that a patient needs help with toileting urgently?",
                    choices: [
                        "A. Patient requests bathroom in 30 minutes",
                        "B. Patient expresses urgent need to defecate",
                        "C. Patient wants to walk to bathroom later",
                        "D. Patient asks about meal timing"
                    ],
                    correct: 1,
                    explanation: "Respond quickly to defecation urge - ignoring urge leads to increased water absorption, hard stool, constipation, and possible impaction.",
                    hint: "Urgency = respond immediately - don't let them wait and get constipated!"
                },
                {
                    question: "How long should a patient remain on a bedpan to prevent complications?",
                    choices: [
                        "A. 5 minutes maximum",
                        "B. Limit time ≤ 10 minutes to prevent pressure injury",
                        "C. 15 minutes for complete elimination",
                        "D. As long as needed for comfort"
                    ],
                    correct: 1,
                    explanation: "Limit bedpan time ≤ 10 minutes to prevent pressure injury. Provide privacy, maintain patient dignity, and ensure proper positioning.",
                    hint: "Bedpan time limit: ≤10 minutes to prevent pressure injury!"
                },
                {
                    question: "What should the nurse do if irrigation fluid is used with ostomy or catheter care?",
                    choices: [
                        "A. Add irrigation amount to total output",
                        "B. Subtract irrigation amount from total output to get true output",
                        "C. Record irrigation and output separately",
                        "D. Ignore irrigation amount in calculations"
                    ],
                    correct: 1,
                    explanation: "Irrigation rule: subtract irrigation amount from total output. Example: 1000 mL drained - 300 mL irrigation = 700 mL true output. This is an exam favorite!",
                    hint: "Irrigation rule: Total output - irrigation = TRUE output (exam favorite!)!"
                }
            ],

            course_ch35_medication: [
                {
                    question: "What are the 10 rights of medication administration according to your fundamentals notes?",
                    choices: [
                        "A. Only 5 rights are recognized in nursing",
                        "B. 6 rights: right drug, dose, time, route, patient, documentation",
                        "C. 8 rights including right reason and right response",
                        "D. 12 rights covering all aspects of care"
                    ],
                    correct: 1,
                    explanation: "The Six Rights of Medication Administration: right drug, right dose, right time, right route, right patient, right documentation. These are the core safety principles for medication administration.",
                    hint: "Remember the 6 Rights - these are fundamental safety checks!"
                },
                {
                    question: "What is the correct way to write a metric dose to prevent errors?",
                    choices: [
                        "A. Always use trailing zeros (5.0 mL)",
                        "B. Always place a zero in front of decimal point (0.5 mL), never use trailing zero (5 mL)",
                        "C. Decimals are not necessary",
                        "D. Use either format as they're equivalent"
                    ],
                    correct: 1,
                    explanation: "SAFE PRACTICE ALERT: Always place a zero before decimal point (0.5 mL not .5 mL), never use trailing zero (5 mL not 5.0 mL). This prevents dosing errors.",
                    hint: "⚠️ SAFE PRACTICE: Leading zero YES (0.5), trailing zero NO (not 5.0)!"
                },
                {
                    question: "Which medications should NEVER be crushed according to your notes?",
                    choices: [
                        "A. Only tablets over 10mg",
                        "B. Enteric-coated, time-release, sublingual, buccal, special-coated medications",
                        "C. All liquid medications",
                        "D. Only controlled substances"
                    ],
                    correct: 1,
                    explanation: "SAFE PRACTICE ALERT: Do NOT crush enteric-coated, time-release, sublingual, buccal, or special-coated medications. Contact PCP for alternate route if needed.",
                    hint: "⚠️ Never crush special coatings - they protect drug or patient!"
                },
                {
                    question: "What is the most specific laboratory marker for cardiac muscle damage?",
                    choices: [
                        "A. CK-MB",
                        "B. Troponin I",
                        "C. LDH",
                        "D. AST"
                    ],
                    correct: 1,
                    explanation: "Troponin I is the most specific marker for cardiac muscle damage and remains elevated longer than other cardiac enzymes, making it the 'gold standard' for diagnosing heart attacks.",
                    hint: "Troponin I = gold standard for heart attack diagnosis!"
                },
                {
                    question: "What are the 4 processes that medication actions depend on?",
                    choices: [
                        "A. Ingestion, digestion, circulation, elimination",
                        "B. Absorption, distribution, metabolism, excretion",
                        "C. Reception, processing, action, clearance", 
                        "D. Intake, binding, activation, removal"
                    ],
                    correct: 1,
                    explanation: "Pharmacokinetics involves 4 processes: absorption (entry into bloodstream), distribution (delivery to tissues), metabolism (breakdown, mostly in liver), excretion (removal, mostly by kidneys).",
                    hint: "4 key processes: Absorption, Distribution, Metabolism, Excretion (ADME)!"
                },
                {
                    question: "What is the rate of absorption from fastest to slowest?",
                    choices: [
                        "A. Oral → IM → SubQ → IV",
                        "B. IV → IM → SubQ → Oral (PO)",
                        "C. SubQ → IV → IM → Oral",
                        "D. IM → IV → Oral → SubQ"
                    ],
                    correct: 1,
                    explanation: "Absorption rate (fastest to slowest): IV (immediate) → IM → SubQ → Oral (PO). IV bypasses absorption completely by going directly into bloodstream.",
                    hint: "IV fastest (direct to blood), Oral slowest (must be absorbed)!"
                },
                {
                    question: "Where does most drug excretion occur?",
                    choices: [
                        "A. Liver",
                        "B. Kidneys",
                        "C. Lungs",
                        "D. Skin"
                    ],
                    correct: 1,
                    explanation: "Most drug excretion occurs through the kidneys. Other routes include feces, breath, saliva, sweat, and breast milk. Elderly and those with kidney problems may need dose adjustments.",
                    hint: "Kidneys = main drug elimination route - adjust doses in kidney disease!"
                },
                {
                    question: "What is a medication's half-life?",
                    choices: [
                        "A. Time until drug stops working",
                        "B. Time it takes for blood concentration to decrease to one-half due to metabolism and excretion",
                        "C. Duration of drug action",
                        "D. Time to reach peak effect"
                    ],
                    correct: 1,
                    explanation: "Half-life = time for blood concentration to decrease to 50% of original dose due to metabolism and excretion. Example: if half-life is 12 hours, 50% remains after 12 hours.",
                    hint: "Half-life = time to reach 50% of original drug concentration!"
                },
                {
                    question: "When should peak and trough levels be drawn?",
                    choices: [
                        "A. Peak and trough both before next dose",
                        "B. Peak at specific time after administration, trough just before next dose",
                        "C. Both at random times during therapy",
                        "D. Only when toxicity is suspected"
                    ],
                    correct: 1,
                    explanation: "Peak plasma level (highest concentration) is drawn at specific time after administration based on half-life. Trough level (lowest concentration) is drawn just before next scheduled dose.",
                    hint: "Peak = after giving drug, Trough = before next dose!"
                },
                {
                    question: "What characterizes an anaphylactic reaction?",
                    choices: [
                        "A. Mild skin rash that resolves quickly",
                        "B. Severe allergic reaction, medical emergency, can occur immediately and be fatal",
                        "C. Delayed reaction occurring days later",
                        "D. Local reaction at injection site only"
                    ],
                    correct: 1,
                    explanation: "Anaphylactic reaction = severe allergic reaction, medical emergency, can occur immediately and be fatal. Treatment: stop medication, epinephrine, IV fluids, steroids, antihistamines, respiratory support.",
                    hint: "Anaphylaxis = EMERGENCY! Stop drug, give epi, support breathing!"
                },
                {
                    question: "What is the difference between side effects and adverse effects?",
                    choices: [
                        "A. No difference - terms are interchangeable",
                        "B. Side effects are predictable but unwanted; Adverse effects are severe, unintended, often unpredictable",
                        "C. Side effects are dangerous, adverse effects are mild",
                        "D. Only timing differs between them"
                    ],
                    correct: 1,
                    explanation: "Side effects = predictable but unwanted, sometimes unavoidable. Adverse effects = severe, unintended, unwanted, often unpredictable, may require stopping medication immediately.",
                    hint: "Side effects = expected nuisances; Adverse effects = serious problems!"
                },
                {
                    question: "How are controlled substances categorized in the United States?",
                    choices: [
                        "A. Three categories based on addiction potential",
                        "B. Five categories (schedules) of controlled substances established by CSA",
                        "C. Two categories: prescription and non-prescription",
                        "D. Seven categories covering all medication types"
                    ],
                    correct: 1,
                    explanation: "The Controlled Substances Act (CSA) established five categories of scheduled drugs referred to as controlled substances, based on abuse potential and medical use.",
                    hint: "CSA = 5 schedules of controlled substances by abuse potential!"
                },
                {
                    question: "What documentation is required when controlled substances must be wasted?",
                    choices: [
                        "A. Only the administering nurse needs to document",
                        "B. Two licensed clinical staff must witness disposal and document",
                        "C. Documentation is optional for small amounts",
                        "D. Only pharmacy needs to be notified"
                    ],
                    correct: 1,
                    explanation: "If controlled drug must be wasted: two licensed clinical staff must witness disposal and disposal must be documented. This prevents drug diversion.",
                    hint: "Controlled drug waste = 2 licensed witnesses + documentation!"
                },
                {
                    question: "What are fat-soluble vitamins and why must they be used with caution?",
                    choices: [
                        "A. B complex and C vitamins",
                        "B. Vitamins A, D, E, K - stored in body, excess can build up in liver",
                        "C. All vitamins are fat-soluble",
                        "D. Only synthetic vitamins"
                    ],
                    correct: 1,
                    explanation: "Fat-soluble vitamins (A, D, E, K) are stored in the body and excess can build up in the liver, requiring caution. Water-soluble vitamins (B complex, C) are excreted through kidneys.",
                    hint: "Fat vitamins (A,D,E,K) = stored in body = can build up = use caution!"
                },
                {
                    question: "What percentage of U.S. adults reported using herbal supplements in 2020?",
                    choices: [
                        "A. About 25%",
                        "B. About 73%",
                        "C. About 50%",
                        "D. About 90%"
                    ],
                    correct: 1,
                    explanation: "2020 survey showed ~73% of U.S. adults reported using an herb or supplement. This highlights the importance of assessing herbal use in medication histories.",
                    hint: "73% use herbs - always assess herbal use in medication history!"
                },
                {
                    question: "What must be included in a legally valid medication prescription?",
                    choices: [
                        "A. Patient name and drug name only",
                        "B. Patient name, date/time, drug name, dosage, route, frequency, prescriber signature",
                        "C. Just the drug name and dose",
                        "D. Patient name and prescriber signature only"
                    ],
                    correct: 1,
                    explanation: "Legal prescription requirements: patient's name, date/time written, drug name, dosage, route, frequency, prescriber signature. All components must be present.",
                    hint: "7 required elements for legal prescriptions - missing any = invalid!"
                },
                {
                    question: "What does 'q 6 hr' mean for medication timing?",
                    choices: [
                        "A. Four times daily during waking hours only",
                        "B. Given every 6 hours around the clock to maintain constant blood level",
                        "C. Given 6 times per day",
                        "D. Given every 6 days"
                    ],
                    correct: 1,
                    explanation: "q 6 hr = every 6 hours around the clock (example: 6 AM, 12 PM, 6 PM, midnight) to maintain constant blood level. Different from qid (four times daily during waking hours).",
                    hint: "q 6 hr = around the clock every 6 hours (maintains drug levels)!"
                },
                {
                    question: "What route of administration is abbreviated PO and what does it mean?",
                    choices: [
                        "A. Parenteral - by injection",
                        "B. Per os - by mouth (oral administration)",
                        "C. Post-operative - after surgery",
                        "D. Per ointment - topical application"
                    ],
                    correct: 1,
                    explanation: "PO = per os (by mouth), the most common, safest, most convenient, and least expensive route. Has slower onset than parenteral route.",
                    hint: "PO = per os = by mouth = safest, cheapest, most common!"
                },
                {
                    question: "What needle gauge principle should nurses remember?",
                    choices: [
                        "A. Larger number = larger diameter needle",
                        "B. Smaller number = larger diameter needle (18 gauge larger than 25 gauge)",
                        "C. Numbers don't relate to needle size",
                        "D. All needles are the same diameter"
                    ],
                    correct: 1,
                    explanation: "Needle gauge: smaller number = larger diameter. Example: 18 gauge is larger than 25 gauge. Oil-based medications need larger gauge needles.",
                    hint: "Needle gauge: smaller number = BIGGER needle (18 > 25)!"
                },
                {
                    question: "According to NCCMERP, what is a medication error?",
                    choices: [
                        "A. Only errors that cause patient harm",
                        "B. Any preventable event that may cause or lead to inappropriate medication use or patient harm",
                        "C. Only errors made by nurses",
                        "D. Only overdoses or underdoses"
                    ],
                    correct: 1,
                    explanation: "NCCMERP defines medication error as any preventable event that may cause or lead to inappropriate medication use or patient harm while medication is under control of healthcare professional, patient, or consumer.",
                    hint: "Med error = ANY preventable event that may cause inappropriate use or harm!"
                }
            ],

            course_lecture_urinary: [
                {
                    question: "According to NSG 3100 lecture, normal urine output should equal fluid intake and be approximately:",
                    choices: [
                        "A. 30 mL/hr",
                        "B. 60 mL/hr with minimum 30 mL/hr or 0.5 mL/kg per hour",
                        "C. 100 mL/hr",
                        "D. 20 mL/hr minimum"
                    ],
                    correct: 1,
                    explanation: "According to the NSG 3100 lecture, normal urine output should equal fluid intake, approximately 60mL/hr, with minimum 30mL/hr or 0.5mL/Kg per hour.",
                    hint: "NSG 3100 lecture: 60 mL/hr normal, 30 mL/hr minimum!"
                },
                {
                    question: "What are the normal values for Blood Urea Nitrogen (BUN) according to the lecture?",
                    choices: [
                        "A. 5-15 mg/dL",
                        "B. 10-20 mg/dL",
                        "C. 15-25 mg/dL", 
                        "D. 20-30 mg/dL"
                    ],
                    correct: 1,
                    explanation: "BUN normal range: 10-20 mg/dL. <10 = low protein diet, malnutrition, liver damage, excessive fluids. >20 = kidney injury, diabetes, high BP, blockage, high-protein diet, burns, GI bleeding, dehydration, heart failure.",
                    hint: "BUN normal: 10-20 mg/dL - classic lab value to memorize!"
                },
                {
                    question: "What are the normal creatinine ranges by gender from the lecture?",
                    choices: [
                        "A. Same for both genders: 0.5-1.2 mg/dL",
                        "B. Male: 0.6-1.2 mg/dL, Female: 0.5-1.1 mg/dL",
                        "C. Male: 0.8-1.4 mg/dL, Female: 0.6-1.2 mg/dL",
                        "D. Male: 1.0-1.5 mg/dL, Female: 0.8-1.3 mg/dL"
                    ],
                    correct: 1,
                    explanation: "Normal creatinine ranges: Male 0.6-1.2 mg/dL, Female 0.5-1.1 mg/dL. These gender-specific ranges are important for kidney function assessment.",
                    hint: "Creatinine: Males slightly higher range than females!"
                },
                {
                    question: "According to the urinalysis lecture content, normal urine pH range is:",
                    choices: [
                        "A. 6.0-7.0",
                        "B. 4.6-8.0",
                        "C. 5.0-7.5",
                        "D. 7.0-8.5"
                    ],
                    correct: 1,
                    explanation: "Normal urine pH range is 4.6-8.0, with typical urine being around 6 (slightly acidic). pH can indicate metabolic acidosis or alkalosis.",
                    hint: "Urine pH: 4.6-8.0 (usually around 6, slightly acidic)!"
                },
                {
                    question: "What should be present in normal urine according to the lecture slides?",
                    choices: [
                        "A. Small amounts of protein and glucose",
                        "B. Protein: none, Glucose: few to none, Ketones: none",
                        "C. Trace amounts of all substances",
                        "D. Only water and electrolytes"
                    ],
                    correct: 1,
                    explanation: "Normal urine should have: Protein - none, Glucose - few to none, Ketones - none. Presence of these substances indicates various pathological conditions.",
                    hint: "Normal urine: NO protein, NO glucose, NO ketones!"
                },
                {
                    question: "The lecture mentions that 24-hour urine collection measures what and how should it be collected?",
                    choices: [
                        "A. Protein levels, keep at room temperature",
                        "B. Creatinine clearance, collect all urine and keep on ice",
                        "C. Glucose levels, first morning specimen only",
                        "D. Electrolytes, random collection times"
                    ],
                    correct: 1,
                    explanation: "24-hour urine collection measures creatinine clearance (how well kidneys filter). Must collect ALL urine for 24 hours and keep specimens on ice for accurate results.",
                    hint: "24-hour urine: measures creatinine clearance, collect ALL, keep on ice!"
                },
                {
                    question: "According to NSG 3100 lecture, which diagnostic exam directly visualizes the bladder?",
                    choices: [
                        "A. KUB (Kidney-Ureter-Bladder X-ray)",
                        "B. Cystoscopy",
                        "C. Ultrasound",
                        "D. CT scan"
                    ],
                    correct: 1,
                    explanation: "Cystoscopy provides direct visualization of the bladder using a scope inserted through the urethra. This allows for direct examination of bladder interior.",
                    hint: "Cystoscopy = direct look inside the bladder with a scope!"
                },
                {
                    question: "The lecture emphasizes that urine formation occurs by which three processes?",
                    choices: [
                        "A. Collection, concentration, elimination",
                        "B. Filtration, reabsorption, secretion",
                        "C. Absorption, distribution, excretion",
                        "D. Intake, processing, output"
                    ],
                    correct: 1,
                    explanation: "Urine is formed by nephrons through three processes: Filtration (in glomerulus), Reabsorption (in renal tubule), Secretion (waste and excess remain as urine).",
                    hint: "3 processes of urine formation: Filtration, Reabsorption, Secretion!"
                },
                {
                    question: "According to the developmental factors in the lecture, what is normal regarding bedwetting?",
                    choices: [
                        "A. Should stop by age 3",
                        "B. Normal until age 5, then investigate causes",
                        "C. Never normal after toilet training",
                        "D. Only normal in infants"
                    ],
                    correct: 1,
                    explanation: "Nocturnal enuresis (bedwetting) is normal until age 5. After age 5, causes may include high nighttime urine production, small bladder capacity, or sleep arousal problems.",
                    hint: "Bedwetting normal until age 5 - don't worry before then!"
                },
                {
                    question: "The lecture identifies that indwelling catheters cause what percentage of healthcare-associated UTIs?",
                    choices: [
                        "A. 60%",
                        "B. 80%",
                        "C. 90%",
                        "D. 95%"
                    ],
                    correct: 1,
                    explanation: "The most frequent healthcare-associated infection is UTI, and indwelling catheters cause 80% of these. This is why CAUTI prevention is so important.",
                    hint: "Catheters cause 80% of hospital UTIs - huge prevention opportunity!"
                },
                {
                    question: "According to the lecture, what must always stay below the level of the bladder?",
                    choices: [
                        "A. The catheter insertion site",
                        "B. The drainage bag",
                        "C. The tubing connections",
                        "D. The bed linens"
                    ],
                    correct: 1,
                    explanation: "The drainage bag needs to stay below the level of the bladder ALWAYS to prevent backflow of urine and reduce infection risk. Never elevate bag above bladder level.",
                    hint: "Gravity drainage: bag ALWAYS below bladder level!"
                },
                {
                    question: "For external catheters, the lecture emphasizes leaving how much space between penis tip and connecting tube?",
                    choices: [
                        "A. 0.5 inch",
                        "B. 1 inch",
                        "C. 1.5 inches",
                        "D. 2 inches"
                    ],
                    correct: 1,
                    explanation: "When applying external (condom) catheter, leave 1 inch between the end of the penis and the rubber or plastic connecting tube to prevent tissue damage.",
                    hint: "External catheter: 1 inch space prevents tissue damage!"
                },
                {
                    question: "What beverages should be avoided according to the lecture for bladder health?",
                    choices: [
                        "A. Water and herbal teas only",
                        "B. Spicy foods, carbonated beverages, acidic drinks, caffeine, alcohol",
                        "C. All dairy products",
                        "D. Hot beverages only"
                    ],
                    correct: 1,
                    explanation: "Avoid bladder irritants: spicy foods, carbonated beverages, acidic food and drinks, caffeine, alcoholic beverages. These can worsen incontinence and bladder problems.",
                    hint: "Bladder irritants: spicy, carbonated, acidic, caffeine, alcohol - avoid these!"
                },
                {
                    question: "The lecture mentions that Medicare/Medicaid will not reimburse hospitals for:",
                    choices: [
                        "A. All catheter-related care",
                        "B. CAUTI (catheter-associated UTIs)",
                        "C. Any urinary tract procedures",
                        "D. Extended hospital stays"
                    ],
                    correct: 1,
                    explanation: "Hospitals will not be reimbursed for CAUTI (catheter-associated UTIs) by Medicare or Medicaid, creating financial incentive for prevention.",
                    hint: "CAUTI = no payment from Medicare/Medicaid - strong prevention incentive!"
                },
                {
                    question: "For catheter maintenance, what system must be maintained according to the lecture?",
                    choices: [
                        "A. Open drainage system for monitoring",
                        "B. Closed system - never disconnect tubing",
                        "C. Semi-open system for cleaning",
                        "D. Intermittently open system"
                    ],
                    correct: 1,
                    explanation: "Maintain closed system and never disconnect tubing to prevent contamination and reduce CAUTI risk. Breaking the closed system introduces bacteria.",
                    hint: "Closed system = key CAUTI prevention - never disconnect!"
                },
                {
                    question: "What are the recommended catheter sizes for adults according to the lecture?",
                    choices: [
                        "A. 10, 12, 14 French",
                        "B. 14, 16, 18 French",
                        "C. 16, 18, 20 French",
                        "D. 18, 20, 22 French"
                    ],
                    correct: 1,
                    explanation: "Adult catheter sizes are typically 14, 16, 18 French. Balloon sizes are commonly 5-10ml (most common) or 20ml after prostate surgery.",
                    hint: "Adult catheters: 14, 16, 18 French with 5-10ml balloons!"
                },
                {
                    question: "According to the lecture, urinary retention can lead to what serious complication?",
                    choices: [
                        "A. Kidney stones only",
                        "B. Fluid volume overload",
                        "C. Dehydration",
                        "D. Electrolyte depletion"
                    ],
                    correct: 1,
                    explanation: "The lecture asks: 'How can urinary retention lead to fluid volume overload?' When kidneys can't empty, fluid backs up in the system causing fluid overload.",
                    hint: "Retention → can't empty → fluid backs up → volume overload!"
                },
                {
                    question: "The lecture recommends avoiding fluid intake after what time to prevent nocturia?",
                    choices: [
                        "A. 1600 (4 PM)",
                        "B. 1800 (6 PM)",
                        "C. 2000 (8 PM)",
                        "D. 2200 (10 PM)"
                    ],
                    correct: 1,
                    explanation: "For bladder retraining, avoid significant fluid intake during evening hours (none after 1800/6 PM) to prevent need to void during night. Encourage fluids between 6am-6pm.",
                    hint: "No fluids after 1800 (6 PM) to prevent nighttime urination!"
                },
                {
                    question: "What should be done with diuretics like Lasix according to bladder retraining principles?",
                    choices: [
                        "A. Give at bedtime for best effect",
                        "B. Give in the morning, never at night",
                        "C. Give with meals only",
                        "D. Timing doesn't matter"
                    ],
                    correct: 1,
                    explanation: "If client is taking diuretics (like Lasix), give in the morning, never at night. This prevents nighttime urination and sleep disruption.",
                    hint: "Diuretics = morning dosing to avoid nighttime bathroom trips!"
                },
                {
                    question: "According to the lecture's 3-2-1 summary format, what are 3 things you already knew about urinary elimination?",
                    choices: [
                        "A. This question asks for personal reflection",
                        "B. Kidneys filter blood, bladder stores urine, normal output varies",
                        "C. Only textbook knowledge matters",
                        "D. Previous knowledge isn't relevant"
                    ],
                    correct: 0,
                    explanation: "This is a reflective question from the lecture asking students to identify 3 things they already knew, 2 things they learned, and 1 question they still have.",
                    hint: "This is a personal reflection question - think about your prior knowledge!"
                }
            ],

            // CHAPTER 30 - NUTRITION
            course_ch30_nutrition: [
                // --- Nutrition Basics ---
                {
                    question: "What is the definition of nutrition?",
                    choices: [
                        "A. The process of eliminating waste from the body",
                        "B. The body's intake and use of adequate amounts of necessary nutrients for tissue growth and energy production",
                        "C. The chemical breakdown of food in the stomach only",
                        "D. The absorption of water through the intestinal walls"
                    ],
                    correct: 1,
                    explanation: "Nutrition is the body's intake and use of adequate amounts of necessary nutrients for tissue growth and energy production.",
                    hint: "Think about what nutrition provides — growth + energy."
                },
                {
                    question: "Which of the following best describes the function of nutrients?",
                    choices: [
                        "A. Substances that only provide energy",
                        "B. Necessary substances from food that supply energy, build/maintain tissues, aid growth, and support body systems",
                        "C. Chemicals produced by the liver for digestion",
                        "D. Hormones that regulate metabolism"
                    ],
                    correct: 1,
                    explanation: "Nutrients are necessary substances obtained from ingested food that supply energy, build and maintain bones/muscles/skin, aid normal growth, and support function of each body system.",
                    hint: "Nutrients do it ALL — energy, building, growth, and function."
                },
                {
                    question: "A patient who is overweight but lacks important nutrients due to poor food choices is an example of:",
                    choices: [
                        "A. Obesity only",
                        "B. Malnutrition",
                        "C. Anorexia",
                        "D. Normal nutritional status"
                    ],
                    correct: 1,
                    explanation: "Malnutrition is an imbalance between nutrient intake and the body's needs. It can occur in individuals who are overweight OR undernourished — both may lack important nutrients because of poor food choices.",
                    hint: "Malnutrition isn't just about being thin — it's about nutrient IMBALANCE."
                },
                {
                    question: "Poor nutrition, lack of exercise, obesity, and stress contribute to all of the following EXCEPT:",
                    choices: [
                        "A. Heart disease and stroke",
                        "B. Hypertension and diabetes",
                        "C. Kidney disease",
                        "D. Appendicitis"
                    ],
                    correct: 3,
                    explanation: "Poor nutrition contributes to heart disease, some cancers, stroke, hypertension, diabetes, and kidney disease. Appendicitis is not typically caused by poor nutrition.",
                    hint: "Think chronic diseases — which one doesn't fit?"
                },
                // --- Metabolism ---
                {
                    question: "What is metabolism?",
                    choices: [
                        "A. The process of chewing and swallowing food",
                        "B. The process of chemically changing nutrients into end products that meet energy needs or are stored for future use",
                        "C. The elimination of waste products",
                        "D. The transport of oxygen through the bloodstream"
                    ],
                    correct: 1,
                    explanation: "Metabolism is the process of chemically changing nutrients (such as fats and proteins) into end products that meet the energy needs of the body, are stored for future use, and help maintain homeostasis.",
                    hint: "Metabolism = chemical changes to nutrients for energy + storage."
                },
                {
                    question: "What is Basal Metabolic Rate (BMR)?",
                    choices: [
                        "A. The maximum energy used during intense exercise",
                        "B. The minimum amount of energy required to maintain body functions while resting and awake",
                        "C. The total calories consumed in a day",
                        "D. The rate at which food moves through the GI tract"
                    ],
                    correct: 1,
                    explanation: "BMR is the minimum amount of energy required to maintain body functions when the body is resting and awake. Even during rest or sleep, the body requires calories for cardiac function and breathing.",
                    hint: "BMR = MINIMUM energy at REST — your body still needs fuel even sleeping."
                },
                {
                    question: "Which metabolic process uses energy to build complex body substances from simple materials?",
                    choices: [
                        "A. Catabolism",
                        "B. Anabolism",
                        "C. Glycolysis",
                        "D. Peristalsis"
                    ],
                    correct: 1,
                    explanation: "Anabolism uses energy to change simple materials into complex body substances and tissues. It supports cell growth and builds body tissues (e.g., bone mineralization, muscle development).",
                    hint: "Ana-BOLISM = BUILDS up. Think 'anabolic steroids build muscle.'"
                },
                {
                    question: "Catabolism is best described as:",
                    choices: [
                        "A. Building complex tissues from simple nutrients",
                        "B. Breaking down complex substances into simpler ones, releasing energy",
                        "C. Storing excess glucose as glycogen",
                        "D. Absorbing nutrients through intestinal walls"
                    ],
                    correct: 1,
                    explanation: "Catabolism is the process of breaking down complex substances into simpler ones, which releases energy. Example: proteins broken down into amino acids.",
                    hint: "Cata-BOLISM = CRASHES things down. Breaking apart releases energy."
                },
                // --- Macronutrients ---
                {
                    question: "Which nutrients are classified as macronutrients?",
                    choices: [
                        "A. Vitamins and minerals",
                        "B. Carbohydrates, fats, proteins, and water",
                        "C. Antioxidants and electrolytes",
                        "D. Iron, calcium, and potassium"
                    ],
                    correct: 1,
                    explanation: "Macronutrients are nutrients needed in large amounts: carbohydrates (energy), fats (energy + vitamin absorption), proteins (build/maintain/repair), and water (metabolism + body function).",
                    hint: "MACRO = large amounts. The big 4: carbs, fats, protein, water."
                },
                {
                    question: "Micronutrients include:",
                    choices: [
                        "A. Carbohydrates and proteins",
                        "B. Fats and water",
                        "C. Minerals and vitamins",
                        "D. Glucose and glycogen"
                    ],
                    correct: 2,
                    explanation: "Micronutrients are nutrients needed in small amounts. They include minerals (energy, muscle building, nerve conduction, blood clotting, immunity) and vitamins (regulate body processes, reproduction, growth).",
                    hint: "MICRO = small amounts. Vitamins + minerals."
                },
                // --- Carbohydrates ---
                {
                    question: "How many kilocalories per gram do carbohydrates provide?",
                    choices: [
                        "A. 2 kcal/g",
                        "B. 4 kcal/g",
                        "C. 7 kcal/g",
                        "D. 9 kcal/g"
                    ],
                    correct: 1,
                    explanation: "Carbohydrates provide 4 kcal per gram. They are the body's major energy source and also prevent the body from using protein for energy and prevent ketosis.",
                    hint: "Carbs and protein both = 4 kcal/g. Fat = 9 kcal/g. Remember 4-4-9!"
                },
                {
                    question: "Which of the following is a function of carbohydrates?",
                    choices: [
                        "A. Transport fat-soluble vitamins",
                        "B. Build and repair muscle tissue",
                        "C. Prevent ketosis and support memory and learning",
                        "D. Produce prothrombin for blood clotting"
                    ],
                    correct: 2,
                    explanation: "Carbohydrates provide energy, prevent the body from using protein for energy, prevent ketosis, and support memory and learning.",
                    hint: "Carbs protect protein + prevent ketosis + fuel the brain!"
                },
                {
                    question: "Fructose, sucrose, lactose, and glucose are all examples of:",
                    choices: [
                        "A. Complex carbohydrates",
                        "B. Simple carbohydrates",
                        "C. Essential fatty acids",
                        "D. Amino acids"
                    ],
                    correct: 1,
                    explanation: "Simple carbohydrates are broken down quickly and provide quick energy. Examples: fructose (fruit), sucrose (table sugar), lactose (milk), glucose (blood sugar).",
                    hint: "Simple sugars = quick energy. Fruit, table sugar, milk sugar, blood sugar."
                },
                {
                    question: "A patient reports extreme fatigue during exercise. Which of the following could be a contributing factor?",
                    choices: [
                        "A. High protein intake",
                        "B. Low glycogen stores from insufficient complex carbohydrates",
                        "C. Excessive water intake",
                        "D. Too much dietary fiber"
                    ],
                    correct: 1,
                    explanation: "Muscles store glycogen for exercise, and the brain and tissues need carbohydrates as glycogen. Low glycogen can cause extreme fatigue. Complex carbohydrates break down slower and provide longer energy supply.",
                    hint: "Muscles store glycogen from complex carbs — low glycogen = fatigue!"
                },
                {
                    question: "Adults should consume approximately what percentage of daily calories from carbohydrates?",
                    choices: [
                        "A. 25%",
                        "B. 35%",
                        "C. 50%",
                        "D. 70%"
                    ],
                    correct: 2,
                    explanation: "Adults should consume about 50% of calories from carbohydrates. Complex carbohydrate sources include bread, rice, pasta, legumes, and starchy vegetables.",
                    hint: "Half your calories from carbs — 50%!"
                },
                // --- Fiber ---
                {
                    question: "Which type of fiber mixes with water and forms a gel-like substance that slows digestion?",
                    choices: [
                        "A. Insoluble fiber",
                        "B. Soluble fiber",
                        "C. Cellulose",
                        "D. Glycogen"
                    ],
                    correct: 1,
                    explanation: "Soluble fiber mixes with water and forms a gel-like substance that slows digestion. Insoluble fiber does not retain water — it adds bulk to stool and helps move waste through intestines.",
                    hint: "SOLUBLE = dissolves in water → gel → slows digestion."
                },
                {
                    question: "A high-fiber diet helps with all of the following EXCEPT:",
                    choices: [
                        "A. Lowering cholesterol and blood pressure",
                        "B. Improving blood glucose control in diabetes",
                        "C. Increasing fat absorption",
                        "D. Improving bowel regularity"
                    ],
                    correct: 2,
                    explanation: "High-fiber diets help lower cholesterol and blood pressure, improve weight control, blood glucose control, bowel regularity, enhance immune function, and decrease inflammation. Fiber does NOT increase fat absorption.",
                    hint: "Fiber is great for cholesterol, BP, glucose, bowels — but NOT fat absorption."
                },
                {
                    question: "What are diverticula?",
                    choices: [
                        "A. Ulcers in the stomach lining",
                        "B. Protrusions of the intestinal membrane",
                        "C. Blockages in the bile duct",
                        "D. Inflammation of the esophagus"
                    ],
                    correct: 1,
                    explanation: "Diverticula are protrusions of the intestinal membrane. The presence of diverticula is called diverticulosis. Lack of fiber can cause constipation, hemorrhoids, and diverticula.",
                    hint: "Diverticula = pouches poking out of intestinal wall. Low fiber → higher risk."
                },
                {
                    question: "The recommended daily fiber intake for older children, adolescents, and adults is:",
                    choices: [
                        "A. 5–10 g/day",
                        "B. 10–15 g/day",
                        "C. 20–35 g/day",
                        "D. 50–60 g/day"
                    ],
                    correct: 2,
                    explanation: "Recommended fiber intake is 20–35 g/day. Sources include whole grains, wheat bran, cereals, fruits, vegetables, and legumes.",
                    hint: "20–35 grams daily — whole grains, fruits, veggies, legumes."
                },
                // --- Fats ---
                {
                    question: "How many kilocalories per gram do fats provide?",
                    choices: [
                        "A. 4 kcal/g",
                        "B. 7 kcal/g",
                        "C. 9 kcal/g",
                        "D. 12 kcal/g"
                    ],
                    correct: 2,
                    explanation: "Fats provide 9 kcal per gram — more than double what carbohydrates and protein provide (4 kcal/g each). This is why fats are such a concentrated energy source.",
                    hint: "Fat = 9 kcal/g. The 4-4-9 rule: carbs 4, protein 4, fat 9."
                },
                {
                    question: "Which fat-soluble vitamins require dietary fat for absorption?",
                    choices: [
                        "A. B complex and C",
                        "B. A, D, E, K",
                        "C. B1, B2, B3",
                        "D. Folic acid and biotin"
                    ],
                    correct: 1,
                    explanation: "Fat transports fat-soluble vitamins A, D, E, and K. Without adequate fat intake, these vitamins cannot be properly absorbed.",
                    hint: "Fat-soluble = A, D, E, K. No fat → can't absorb them!"
                },
                {
                    question: "What is the recommended total fat intake as a percentage of daily calories?",
                    choices: [
                        "A. 10–15%",
                        "B. 20–35%",
                        "C. 40–50%",
                        "D. 50–60%"
                    ],
                    correct: 1,
                    explanation: "Total fat intake should be 20–35% of daily calories, with saturated fat less than 5–6% of daily calories.",
                    hint: "20–35% total fat. Saturated fat < 5–6%."
                },
                {
                    question: "Which type of fat raises cholesterol and is found in butter, cheese, and red meat?",
                    choices: [
                        "A. Monounsaturated fat",
                        "B. Polyunsaturated fat",
                        "C. Saturated fat",
                        "D. Omega-3 fatty acids"
                    ],
                    correct: 2,
                    explanation: "Saturated fat raises cholesterol. Found in butter, cheese, ice cream, processed foods, and red meat.",
                    hint: "Saturated = solid at room temp = bad cholesterol. Butter, cheese, red meat."
                },
                {
                    question: "Trans fats are found in:",
                    choices: [
                        "A. Olive oil and avocados",
                        "B. Partially hydrogenated oils",
                        "C. Fatty fish and flaxseed",
                        "D. Nuts and seeds"
                    ],
                    correct: 1,
                    explanation: "Trans fats raise cholesterol and are found in partially hydrogenated oils. They are considered the worst type of dietary fat.",
                    hint: "Trans fat = partially HYDROGENATED oils. Raises cholesterol."
                },
                {
                    question: "Omega-3 fatty acids are essential for all of the following EXCEPT:",
                    choices: [
                        "A. Brain and nervous system function",
                        "B. Blood clotting regulation",
                        "C. Raising LDL cholesterol",
                        "D. Lowering triglycerides"
                    ],
                    correct: 2,
                    explanation: "Omega-3s support brain and nervous system function, blood clotting, prevent atherosclerosis, and lower triglycerides. They do NOT raise LDL cholesterol — they're heart-protective.",
                    hint: "Omega-3 = good for brain, heart, blood. Found in fatty fish, nuts, seeds."
                },
                // --- Protein ---
                {
                    question: "How many kilocalories per gram does protein provide?",
                    choices: [
                        "A. 2 kcal/g",
                        "B. 4 kcal/g",
                        "C. 7 kcal/g",
                        "D. 9 kcal/g"
                    ],
                    correct: 1,
                    explanation: "Protein provides 4 kcal per gram, the same as carbohydrates. In a 2000-calorie diet, 5.5 ounces of protein per day is recommended.",
                    hint: "4-4-9 rule: carbs = 4, protein = 4, fat = 9."
                },
                {
                    question: "Which statement about amino acids is correct?",
                    choices: [
                        "A. The body stores excess amino acids for later use",
                        "B. Amino acids must be consumed daily because the body does not store them",
                        "C. Only animal sources contain amino acids",
                        "D. Amino acids are only needed for energy production"
                    ],
                    correct: 1,
                    explanation: "Amino acids must be consumed daily because the body does not store excess amino acids. If fat and carbohydrates are insufficient, protein may be used for energy, leading to protein deficiency.",
                    hint: "No storage for amino acids — eat them DAILY!"
                },
                {
                    question: "Which of the following is a complete protein source?",
                    choices: [
                        "A. Beans and peas",
                        "B. Nuts and seeds",
                        "C. Soybeans",
                        "D. Bread products"
                    ],
                    correct: 2,
                    explanation: "Complete proteins contain all essential amino acids. Sources: milk, eggs, cheese, fish, meat, poultry, and soybeans. Incomplete proteins (beans, peas, nuts, seeds) lack one or more essential amino acids.",
                    hint: "Complete protein = ALL essential amino acids. Animal sources + soybeans."
                },
                {
                    question: "Which food combination creates a complete protein from incomplete sources?",
                    choices: [
                        "A. Chicken and fish",
                        "B. Rice and beans",
                        "C. Eggs and cheese",
                        "D. Milk and yogurt"
                    ],
                    correct: 1,
                    explanation: "Combining incomplete proteins can form complete proteins. Examples: rice + beans, peanut butter + whole wheat bread, pasta + broccoli.",
                    hint: "Combine incomplete proteins to get all amino acids — rice + beans is classic!"
                },
                // --- Water ---
                {
                    question: "Water makes up approximately what percentage of adult body weight?",
                    choices: [
                        "A. 30%",
                        "B. 45%",
                        "C. 60%",
                        "D. 75%"
                    ],
                    correct: 2,
                    explanation: "Water makes up about 60% of adult body weight. Older adults have about 50%, which puts them at higher risk for dehydration.",
                    hint: "60% adults, ~50% older adults → elderly = higher dehydration risk."
                },
                {
                    question: "How is body fluid distributed?",
                    choices: [
                        "A. 1/3 intracellular, 2/3 extracellular",
                        "B. 2/3 intracellular, 1/3 extracellular",
                        "C. Equal amounts intracellular and extracellular",
                        "D. 3/4 intracellular, 1/4 extracellular"
                    ],
                    correct: 1,
                    explanation: "Body fluid: 2/3 intracellular fluid, 1/3 extracellular fluid. Extracellular fluids include blood and interstitial fluid.",
                    hint: "2/3 INSIDE cells, 1/3 OUTSIDE (blood + interstitial)."
                },
                {
                    question: "Too much water intake can cause:",
                    choices: [
                        "A. Hypernatremia",
                        "B. Hyponatremia",
                        "C. Hyperkalemia",
                        "D. Metabolic acidosis"
                    ],
                    correct: 1,
                    explanation: "Water intoxication can cause hyponatremia (low sodium). Fluid intake must be monitored in patients with fluid overload, congestive heart failure, and renal disease.",
                    hint: "Too much water DILUTES sodium → hypoNAtremia. Watch CHF and renal patients!"
                },
                // --- Fat-Soluble Vitamins ---
                {
                    question: "Which vitamins are fat-soluble?",
                    choices: [
                        "A. B complex and C",
                        "B. A, D, E, K",
                        "C. B1, B6, B12",
                        "D. Folic acid and biotin"
                    ],
                    correct: 1,
                    explanation: "Fat-soluble vitamins: A, D, E, K. They require fat for absorption, are stored in the liver and fat tissue, are NOT excreted by kidneys, and can cause toxicity (especially A and D).",
                    hint: "Fat-soluble = A, D, E, K. Stored → can become TOXIC!"
                },
                {
                    question: "Why can fat-soluble vitamins cause toxicity?",
                    choices: [
                        "A. They are excreted in urine quickly",
                        "B. They are stored in liver and fat tissue and not excreted by kidneys",
                        "C. They dissolve in water and accumulate",
                        "D. They interfere with protein metabolism"
                    ],
                    correct: 1,
                    explanation: "Fat-soluble vitamins are stored in liver and fat tissue and are NOT excreted by kidneys. Because they accumulate, toxicity may occur — especially with vitamins A and D.",
                    hint: "Stored + not excreted = BUILDS UP → toxicity risk. Especially A and D!"
                },
                {
                    question: "Vitamin A deficiency can cause:",
                    choices: [
                        "A. Scurvy",
                        "B. Rickets",
                        "C. Night blindness and decreased immunity",
                        "D. Bleeding and bruising"
                    ],
                    correct: 2,
                    explanation: "Vitamin A deficiency causes night blindness, poor appetite, decreased immunity, and impaired growth. Vitamin A promotes night vision, maintains epithelial tissue, and increases resistance to infection.",
                    hint: "Vitamin A = vision (especially NIGHT vision) + immunity + skin."
                },
                {
                    question: "Vitamin D is called the 'sunshine vitamin' because:",
                    choices: [
                        "A. It is found in yellow-colored foods",
                        "B. It is produced when skin is exposed to sunlight",
                        "C. It makes patients feel happier",
                        "D. It is only available during summer months"
                    ],
                    correct: 1,
                    explanation: "Vitamin D is produced when skin is exposed to sunlight. It works with calcium and phosphorus to develop and strengthen bones. Recommended sun exposure: about 15 minutes several times per week.",
                    hint: "Sunshine → skin makes vitamin D → strong bones. 15 min, several times/week."
                },
                {
                    question: "Which vitamin is necessary for blood clotting and production of prothrombin?",
                    choices: [
                        "A. Vitamin A",
                        "B. Vitamin C",
                        "C. Vitamin E",
                        "D. Vitamin K"
                    ],
                    correct: 3,
                    explanation: "Vitamin K is necessary for blood clotting and production of prothrombin in the liver. Deficiency causes bruising and bleeding. Found in dark green leafy vegetables (broccoli, spinach, Brussels sprouts, cabbage).",
                    hint: "K = Klotting! Prothrombin needs vitamin K. Dark leafy greens."
                },
                {
                    question: "Vitamin E functions primarily as:",
                    choices: [
                        "A. A blood clotting factor",
                        "B. An antioxidant that protects cells from free radical damage",
                        "C. A hormone regulator",
                        "D. A calcium transporter"
                    ],
                    correct: 1,
                    explanation: "Vitamin E is an antioxidant that protects cells from damage caused by free radicals. Free radicals form when the body converts food into energy or is exposed to cigarette smoke, sun, and air pollution. Vitamin E also supports the immune system.",
                    hint: "Vitamin E = antioxidant. Protects cells from free radicals."
                },
                // --- Water-Soluble Vitamins ---
                {
                    question: "Which statement about water-soluble vitamins is correct?",
                    choices: [
                        "A. They are stored in the liver and can cause toxicity",
                        "B. They dissolve in water, are excreted in urine, and must be consumed daily",
                        "C. They require fat for absorption",
                        "D. They are not affected by heat or light"
                    ],
                    correct: 1,
                    explanation: "Water-soluble vitamins dissolve in water, are excreted in urine, are NOT stored in the body, and must be consumed daily. They are easily destroyed by heat, light, and air.",
                    hint: "Water-soluble = NOT stored → need them DAILY. Heat/light destroys them."
                },
                {
                    question: "Vitamin C (ascorbic acid) is important for:",
                    choices: [
                        "A. Blood clotting",
                        "B. Collagen production, wound healing, and immune function",
                        "C. Night vision",
                        "D. Red blood cell production"
                    ],
                    correct: 1,
                    explanation: "Vitamin C produces collagen, supports connective tissue, promotes wound healing, maintains cartilage/bones/teeth, acts as an antioxidant, and strengthens the immune system.",
                    hint: "Vitamin C = Collagen + wound healing + immune boost. Citrus fruits!"
                },
                {
                    question: "Vitamin B12 (cyanocobalamin) is essential for:",
                    choices: [
                        "A. Blood clotting and bone formation",
                        "B. Red blood cell production, maintaining myelin sheath, and DNA formation",
                        "C. Fat absorption and vision",
                        "D. Collagen production and wound healing"
                    ],
                    correct: 1,
                    explanation: "Vitamin B12 is essential for red blood cell production, maintaining the myelin sheath of nerves, and DNA formation. Sources: meat, eggs, dairy products.",
                    hint: "B12 = RBCs + myelin sheath + DNA. Animal products only!"
                },
                {
                    question: "Why is folic acid (vitamin B9) especially important during pregnancy?",
                    choices: [
                        "A. It prevents gestational diabetes",
                        "B. It prevents neural tube defects",
                        "C. It prevents preeclampsia",
                        "D. It prevents postpartum depression"
                    ],
                    correct: 1,
                    explanation: "Folic acid is important during pregnancy to prevent neural tube defects. It is essential for DNA synthesis, red blood cell formation, and supports rapidly growing cells. Sources: leafy greens, oranges, beans, fortified grains.",
                    hint: "Folic acid + pregnancy = prevents NEURAL TUBE DEFECTS. Super testable!"
                },
                {
                    question: "Vitamin B1 (thiamine) supports all of the following EXCEPT:",
                    choices: [
                        "A. Metabolism of carbohydrates, protein, and fat",
                        "B. Heart, muscle, and nervous system function",
                        "C. Production of hydrochloric acid for digestion",
                        "D. Blood clotting and prothrombin production"
                    ],
                    correct: 3,
                    explanation: "Vitamin B1 (thiamine) supports metabolism of carbs/protein/fat, heart/muscle/nervous system function, and helps produce hydrochloric acid for digestion. Blood clotting is vitamin K's job.",
                    hint: "B1 = metabolism + heart + muscles + nerves + HCl. NOT clotting!"
                },
                // --- Minerals ---
                {
                    question: "Which electrolyte minerals maintain fluid balance, nerve conduction, and muscle contraction?",
                    choices: [
                        "A. Calcium, phosphorus, magnesium",
                        "B. Potassium, sodium, chloride",
                        "C. Iron, zinc, copper",
                        "D. Selenium, iodine, chromium"
                    ],
                    correct: 1,
                    explanation: "Potassium, sodium, and chloride are electrolyte minerals that maintain fluid balance, nerve conduction, and muscle contraction.",
                    hint: "The fluid/nerve/muscle trio: potassium, sodium, chloride."
                },
                {
                    question: "Calcium is important for all of the following EXCEPT:",
                    choices: [
                        "A. Bone and teeth formation",
                        "B. Nerve conduction and muscle contraction",
                        "C. Hormone secretion",
                        "D. Red blood cell production"
                    ],
                    correct: 3,
                    explanation: "Calcium functions include bone and teeth formation, nerve conduction, muscle contraction, and hormone secretion. Red blood cell production is related to B12 and folic acid, not calcium.",
                    hint: "Calcium = bones + teeth + nerves + muscles + hormones. NOT RBCs!"
                },
                {
                    question: "Magnesium helps produce which neurotransmitters?",
                    choices: [
                        "A. Serotonin and melatonin",
                        "B. Dopamine, norepinephrine, and epinephrine",
                        "C. Acetylcholine and GABA",
                        "D. Histamine and glutamate"
                    ],
                    correct: 1,
                    explanation: "Magnesium helps produce neurotransmitters such as dopamine, norepinephrine, and epinephrine. It also supports bone structure, energy production, blood pressure regulation, and nerve/muscle function.",
                    hint: "Magnesium → dopamine, norepi, epi. Plus bones, energy, BP, nerves."
                },
                // --- Antioxidants ---
                {
                    question: "Antioxidants protect cells from damage caused by:",
                    choices: [
                        "A. Excess water intake",
                        "B. Free radicals",
                        "C. Amino acid deficiency",
                        "D. Low sodium levels"
                    ],
                    correct: 1,
                    explanation: "Antioxidants protect cells from free radical damage. Free radicals form when the body breaks down food or is exposed to toxins (tobacco smoke, radiation). Antioxidants may reduce risk of heart disease, cancer, and diabetes.",
                    hint: "Antioxidants fight FREE RADICALS. Examples: vitamins A, C, E + selenium."
                },
                // --- Digestion ---
                {
                    question: "Digestion begins in the:",
                    choices: [
                        "A. Stomach",
                        "B. Small intestine",
                        "C. Mouth",
                        "D. Esophagus"
                    ],
                    correct: 2,
                    explanation: "Digestion begins in the mouth with chewing and salivary enzymes. Salivary amylase (ptyalin) breaks down carbohydrates (starch) into maltose.",
                    hint: "Mouth = first stop! Salivary amylase breaks down starch → maltose."
                },
                {
                    question: "Salivary amylase (ptyalin) breaks down:",
                    choices: [
                        "A. Proteins into amino acids",
                        "B. Fats into fatty acids",
                        "C. Carbohydrates (starch) into maltose",
                        "D. Vitamins into coenzymes"
                    ],
                    correct: 2,
                    explanation: "Salivary amylase (ptyalin) is released by salivary glands in the mouth and breaks down carbohydrates (starch) into maltose. Further digestion in the small intestine breaks maltose into glucose.",
                    hint: "Amylase = starch enzyme. Mouth: starch → maltose. Small intestine: maltose → glucose."
                },
                {
                    question: "What is chyme?",
                    choices: [
                        "A. A digestive enzyme",
                        "B. A semiliquid mass of food as it moves through the digestive tract",
                        "C. A type of fiber",
                        "D. A hormone that stimulates digestion"
                    ],
                    correct: 1,
                    explanation: "Chyme is the semiliquid mass that food becomes as it moves through the digestive tract. It forms when food mixes with gastric juices in the stomach.",
                    hint: "Chyme = food + gastric juices = semiliquid mush moving through GI tract."
                },
                {
                    question: "Peristalsis is:",
                    choices: [
                        "A. The chemical breakdown of food by enzymes",
                        "B. Wavelike muscular movements that move food through the digestive tract",
                        "C. The absorption of nutrients into the blood",
                        "D. The production of digestive enzymes"
                    ],
                    correct: 1,
                    explanation: "Peristalsis refers to wavelike muscular movements that move food through the digestive tract and waste toward elimination.",
                    hint: "Peristalsis = WAVES pushing food along. Like squeezing a tube of toothpaste."
                },
                {
                    question: "The four primary functions of the GI system are:",
                    choices: [
                        "A. Chewing, swallowing, digesting, excreting",
                        "B. Ingestion, digestion, absorption, elimination",
                        "C. Metabolism, catabolism, anabolism, homeostasis",
                        "D. Secretion, motility, absorption, defecation"
                    ],
                    correct: 1,
                    explanation: "The four primary GI functions are: ingestion, digestion, absorption, and elimination.",
                    hint: "GI tract: take it IN → break it DOWN → ABSORB it → get rid of WASTE."
                },
                {
                    question: "If carbohydrates are too low, fat is broken down rapidly producing:",
                    choices: [
                        "A. Glucose",
                        "B. Glycogen",
                        "C. Ketones",
                        "D. Amino acids"
                    ],
                    correct: 2,
                    explanation: "If carbohydrates are too low, fat is broken down rapidly, producing ketones. This occurs during incomplete fat metabolism. The body needs carbohydrates for fat to be used properly.",
                    hint: "Low carbs → rapid fat breakdown → KETONES. That's why carbs matter!"
                },
                // --- Dietary Guidelines ---
                {
                    question: "According to the Dietary Guidelines, daily sodium intake should be less than:",
                    choices: [
                        "A. 1000 mg",
                        "B. 1500 mg",
                        "C. 2300 mg",
                        "D. 3000 mg"
                    ],
                    correct: 2,
                    explanation: "Sodium intake should be less than 2300 mg per day. Other limits: less than 10% of calories from added sugars, and less than 10% from saturated fats.",
                    hint: "Sodium < 2300 mg/day. Added sugar < 10%. Saturated fat < 10%."
                },
                {
                    question: "According to MyPlate, what should cover half of your plate?",
                    choices: [
                        "A. Grains and protein",
                        "B. Fruits and vegetables",
                        "C. Dairy and protein",
                        "D. Grains and dairy"
                    ],
                    correct: 1,
                    explanation: "The MyPlate guide recommends fruits and vegetables should cover half of the plate. Important: MyPlate is designed for healthy individuals, not patients on special or prescribed diets.",
                    hint: "HALF the plate = fruits + veggies. MyPlate = healthy people only, not special diets."
                },
                // --- Altered Nutrition ---
                {
                    question: "Osteomalacia is caused by a deficiency of:",
                    choices: [
                        "A. Vitamin A",
                        "B. Vitamin C",
                        "C. Vitamin D",
                        "D. Vitamin K"
                    ],
                    correct: 2,
                    explanation: "Osteomalacia (softening of bones) is caused by vitamin D deficiency. Poor calcium absorption may lead to osteopenia (decreased bone density) and osteoporosis (bone deterioration with increased fracture risk).",
                    hint: "Vitamin D deficiency → soft bones (osteomalacia) in adults, rickets in kids."
                },
                {
                    question: "High sodium intake increases the risk for:",
                    choices: [
                        "A. Osteoporosis",
                        "B. Hypertension, which increases risk for stroke",
                        "C. Night blindness",
                        "D. Scurvy"
                    ],
                    correct: 1,
                    explanation: "High sodium intake can cause hypertension, which increases risk for stroke (CVA). Stroke is a major cause of death in the United States.",
                    hint: "Too much sodium → high BP → STROKE risk. Major cause of death in US."
                },
                {
                    question: "Folate deficiency may cause:",
                    choices: [
                        "A. Night blindness",
                        "B. Scurvy",
                        "C. Macrocytic (megaloblastic) anemia",
                        "D. Osteomalacia"
                    ],
                    correct: 2,
                    explanation: "Low folate levels may cause macrocytic (megaloblastic) anemia. Symptoms may include depression, mental confusion, glossitis (inflamed tongue), loose stools, and decreased nerve function.",
                    hint: "Low folate → big RBCs that don't work right = megaloblastic anemia."
                },
                {
                    question: "Atherosclerosis is:",
                    choices: [
                        "A. Inflammation of the joints",
                        "B. Plaque buildup in artery walls containing cholesterol and lipids",
                        "C. Softening of the bones",
                        "D. Inflammation of the stomach lining"
                    ],
                    correct: 1,
                    explanation: "Atherosclerosis is plaque buildup in artery walls. Plaque contains cholesterol, lipids, and other substances, causing reduced blood flow. If blood flow to the heart becomes blocked, acute myocardial infarction may occur.",
                    hint: "Athero = plaque in arteries. Blocked heart artery → heart attack (MI)."
                },
                {
                    question: "Dysphagia means:",
                    choices: [
                        "A. Difficulty breathing",
                        "B. Difficulty swallowing",
                        "C. Difficulty speaking",
                        "D. Difficulty urinating"
                    ],
                    correct: 1,
                    explanation: "Dysphagia is difficulty swallowing. Possible causes include tumor or obstruction, stroke (CVA), neurologic damage, and psychological disorders.",
                    hint: "Dys = difficult, phagia = swallowing. Causes: stroke, tumors, neuro damage."
                },
                {
                    question: "Scurvy is caused by deficiency of:",
                    choices: [
                        "A. Vitamin A",
                        "B. Vitamin C",
                        "C. Vitamin D",
                        "D. Vitamin K"
                    ],
                    correct: 1,
                    explanation: "Vitamin C deficiency causes scurvy. Effects include gingivitis, bleeding gums, loose teeth, and joint pain. Vitamin D deficiency causes rickets.",
                    hint: "Vitamin C deficiency = Scurvy (bleeding gums, loose teeth). Vitamin D = Rickets."
                },
                {
                    question: "Kwashiorkor is characterized by:",
                    choices: [
                        "A. Protein and calorie deficiency",
                        "B. Protein deficiency with fluid retention",
                        "C. Excess vitamin intake",
                        "D. Iron deficiency anemia"
                    ],
                    correct: 1,
                    explanation: "Kwashiorkor is protein deficiency with fluid retention. Marasmus is protein AND calorie deficiency. Both are severe malnutrition disorders most common in children.",
                    hint: "Kwashiorkor = protein deficiency + edema. Marasmus = protein + calorie deficiency."
                },
                {
                    question: "Phenylketonuria (PKU) is:",
                    choices: [
                        "A. A food allergy to peanuts",
                        "B. An inherited metabolic disorder where the body cannot metabolize phenylalanine",
                        "C. A vitamin D deficiency in children",
                        "D. A type of eating disorder"
                    ],
                    correct: 1,
                    explanation: "PKU is an inherited metabolic disorder where the body cannot metabolize phenylalanine. Effects include impaired brain development, cognitive delays, and permanent neurologic damage.",
                    hint: "PKU = can't break down phenylalanine → brain damage if not caught early."
                },
                // --- Diabetes ---
                {
                    question: "What happens in diabetes mellitus?",
                    choices: [
                        "A. The liver produces too much bile",
                        "B. The pancreas does not produce enough insulin, so glucose accumulates in the blood",
                        "C. The kidneys cannot filter sodium",
                        "D. The stomach cannot produce digestive enzymes"
                    ],
                    correct: 1,
                    explanation: "In diabetes mellitus, the pancreas does not produce enough insulin. Glucose accumulates in the bloodstream and cannot enter cells. Glucose is the end product of carbohydrate metabolism.",
                    hint: "No insulin → glucose stuck in blood → can't get into cells = diabetes."
                },
                {
                    question: "Type 1 diabetes differs from Type 2 in that Type 1:",
                    choices: [
                        "A. Can be controlled with diet and exercise alone",
                        "B. The body does not produce insulin and requires insulin injections",
                        "C. Is caused by obesity",
                        "D. Only occurs in older adults"
                    ],
                    correct: 1,
                    explanation: "Type 1 diabetes: body does NOT produce insulin → requires insulin injections. Type 2: often controlled with diet, exercise, and oral antiglycemic medications.",
                    hint: "Type 1 = NO insulin made → must inject. Type 2 = diet + exercise + oral meds."
                },
                {
                    question: "Complications of diabetes include all of the following EXCEPT:",
                    choices: [
                        "A. Blindness from retinal damage",
                        "B. Neuropathy with loss of sensation",
                        "C. Improved wound healing",
                        "D. Renal failure"
                    ],
                    correct: 2,
                    explanation: "Diabetes complications include blindness (retinal damage), renal failure, neuropathy (loss of sensation in lower extremities), and POOR wound healing — not improved.",
                    hint: "Diabetes = eyes, kidneys, nerves, wounds. Healing gets WORSE, not better."
                },
                // --- Food Allergies & Intolerance ---
                {
                    question: "What is the difference between a food allergy and food intolerance?",
                    choices: [
                        "A. Food allergy is a digestive response; food intolerance is an immune response",
                        "B. Food allergy is an immune system reaction; food intolerance is a digestive system response",
                        "C. They are the same thing",
                        "D. Food allergy only affects children; food intolerance affects adults"
                    ],
                    correct: 1,
                    explanation: "Food allergy = immune system reaction (can be life-threatening). Food intolerance = digestive system response (causes discomfort but usually not life-threatening). Example of intolerance: lactose intolerance.",
                    hint: "Allergy = IMMUNE (dangerous!). Intolerance = DIGESTIVE (uncomfortable)."
                },
                // --- Obesity ---
                {
                    question: "Obesity is defined as a BMI of:",
                    choices: [
                        "A. ≥ 25",
                        "B. ≥ 30",
                        "C. ≥ 35",
                        "D. ≥ 40"
                    ],
                    correct: 1,
                    explanation: "Obesity = BMI ≥ 30. Morbid obesity = BMI > 40 (or 50% above ideal body weight), which interferes with activities of daily living.",
                    hint: "Obesity starts at BMI 30. Morbid obesity = BMI > 40."
                },
                {
                    question: "As BMI increases, which of the following occurs?",
                    choices: [
                        "A. HDL increases and blood pressure decreases",
                        "B. Blood pressure increases, cholesterol increases, HDL decreases",
                        "C. All lab values remain normal",
                        "D. Only triglycerides are affected"
                    ],
                    correct: 1,
                    explanation: "As BMI increases: blood pressure increases, cholesterol increases, and HDL ('good cholesterol') decreases. This increases risk for diabetes, hypertension, and heart disease.",
                    hint: "Higher BMI = higher BP + higher cholesterol + LOWER HDL. Bad combo!"
                },
                // --- Eating Disorders ---
                {
                    question: "Anorexia nervosa is characterized by:",
                    choices: [
                        "A. Binge eating followed by purging",
                        "B. Severe food restriction, distorted body image, and intense fear of weight gain",
                        "C. Loss of appetite due to illness",
                        "D. Overeating due to emotional stress"
                    ],
                    correct: 1,
                    explanation: "Anorexia nervosa involves life-threatening food restriction, distorted body image, and intense fear of gaining weight. Complications include circulatory collapse, organ failure, cachexia (extreme weight loss/muscle wasting), and suicide risk.",
                    hint: "Anorexia nervosa = won't eat + thinks they're fat even when underweight. DANGEROUS."
                },
                {
                    question: "What is the difference between anorexia and anorexia nervosa?",
                    choices: [
                        "A. They are the same condition",
                        "B. Anorexia is loss of appetite (from illness/meds); anorexia nervosa is a psychological eating disorder",
                        "C. Anorexia nervosa is less severe than anorexia",
                        "D. Anorexia only occurs in children"
                    ],
                    correct: 1,
                    explanation: "Anorexia = loss of appetite, often from illness, medications, or treatments like chemotherapy — usually resolves. Anorexia nervosa = serious psychological eating disorder with intentional food restriction and distorted body image.",
                    hint: "Anorexia = no appetite (medical). Anorexia NERVOSA = psychological disorder."
                },
                {
                    question: "Bulimia nervosa involves:",
                    choices: [
                        "A. Severe food restriction only",
                        "B. Binge eating followed by purging behaviors",
                        "C. Excessive water intake",
                        "D. Only excessive exercise"
                    ],
                    correct: 1,
                    explanation: "Bulimia nervosa involves binge eating (2000–3000 calories at one time) followed by purging (self-induced vomiting, excessive exercise, laxatives, diuretics).",
                    hint: "Bulimia = BINGE then PURGE. Eat a ton → try to get rid of it."
                },
                {
                    question: "Complications of bulimia nervosa include all of the following EXCEPT:",
                    choices: [
                        "A. Tooth decay and GI problems",
                        "B. Electrolyte imbalance",
                        "C. Improved cardiac function",
                        "D. Cardiac dysrhythmias and heart failure"
                    ],
                    correct: 2,
                    explanation: "Bulimia complications: tooth decay, GI problems, electrolyte imbalance, cardiac dysrhythmias, heart failure, and death. Cardiac function is IMPAIRED, not improved.",
                    hint: "Purging → electrolyte imbalance → heart problems. Very dangerous!"
                },
                {
                    question: "Management of eating disorders requires:",
                    choices: [
                        "A. Only medication management",
                        "B. A collaborative health care team including physician, psychologist, dietitian, and family",
                        "C. Only individual therapy",
                        "D. Hospitalization in all cases"
                    ],
                    correct: 1,
                    explanation: "Eating disorders require an interdisciplinary team: physician, psychologist, family therapist, registered dietitian, and family members. Early detection is critical to prevent long-term complications.",
                    hint: "Team approach: MD + psych + dietitian + family therapist + family. Early intervention = key!"
                }
            ],

            // GENERAL NCLEX QUESTIONS (existing ones)
            fundamentals: [
                {
                    question: "A client is scheduled for a cystoscopy. What should the nurse include in the pre-procedure teaching?",
                    choices: ["A. The procedure requires general anesthesia", "B. Clear liquids only for 24 hours before the procedure", "C. A full bladder is required before the procedure", "D. The client will experience burning during urination post-procedure"],
                    correct: 3,
                    explanation: "After a cystoscopy, clients commonly experience burning during urination due to irritation of the urethral lining from the scope insertion.",
                    hint: "Think about what happens when a scope is inserted through the urethra."
                },
                {
                    question: "Which nursing action takes priority when admitting a client to the hospital?",
                    choices: ["A. Orienting the client to the room", "B. Applying the identification band", "C. Obtaining a complete health history", "D. Documenting the client's belongings"],
                    correct: 1,
                    explanation: "Patient identification is the first priority for safety. All subsequent care depends on correctly identifying the patient.",
                    hint: "Safety first — what must happen before any care can be given?"
                },
                {
                    question: "A nurse is providing discharge teaching to a client taking digoxin. Which statement by the client indicates understanding?",
                    choices: ["A. 'I will take my pulse before each dose and call if it's below 60'", "B. 'I should double my dose if I miss one'", "C. 'I can eat as much licorice as I want'", "D. 'I only need to check my pulse once a week'"],
                    correct: 0,
                    explanation: "Clients taking digoxin should check their pulse before each dose. A pulse below 60 bpm may indicate toxicity and the dose should be held.",
                    hint: "Digoxin slows the heart — what pulse rate is the danger threshold?"
                },
                {
                    question: "A client's arterial blood gas results show pH 7.32, PaCO2 50, HCO3 24. Which acid-base imbalance is present?",
                    choices: ["A. Metabolic acidosis", "B. Respiratory acidosis", "C. Metabolic alkalosis", "D. Respiratory alkalosis"],
                    correct: 1,
                    explanation: "pH is low (acidosis), PaCO2 is high (respiratory cause), and HCO3 is normal (no compensation yet). This is uncompensated respiratory acidosis.",
                    hint: "Low pH + high CO2 = which body system is causing the problem?"
                },
                {
                    question: "When performing a sterile dressing change, which action contaminates the sterile field?",
                    choices: ["A. Pouring solution from 6 inches above the field", "B. Opening a sterile package away from the body", "C. Reaching across the sterile field", "D. Placing sterile items in the center of the field"],
                    correct: 2,
                    explanation: "Reaching across a sterile field contaminates it because the arm passes over the sterile area. Always add items from the side or edges.",
                    hint: "What happens when a non-sterile object passes over the sterile area?"
                },
                {
                    question: "A client with a nasogastric tube reports nausea. What should the nurse assess first?",
                    choices: ["A. Tube placement and patency", "B. Client's pain level", "C. Bowel sounds in all four quadrants", "D. The client's oral intake"],
                    correct: 0,
                    explanation: "Nausea with an NG tube often indicates the tube is displaced or clogged. Verifying placement and patency is the priority assessment.",
                    hint: "If the NG tube isn't working properly, what symptom would the client experience?"
                },
                {
                    question: "A client is receiving a continuous IV infusion. The nurse notes redness, swelling, and warmth at the insertion site. What should the nurse do first?",
                    choices: ["A. Slow the infusion rate", "B. Apply a warm compress over the site", "C. Discontinue the IV and restart at a new site", "D. Elevate the extremity"],
                    correct: 2,
                    explanation: "Redness, swelling, and warmth indicate phlebitis or infiltration. The IV must be discontinued immediately and restarted at a new site to prevent further tissue damage.",
                    hint: "These signs mean the IV site is compromised — can you keep using it?"
                },
                {
                    question: "A nurse is preparing to administer a medication via a metered-dose inhaler (MDI). Which instruction is correct?",
                    choices: ["A. Inhale quickly and deeply, then hold breath for 2 seconds", "B. Shake the inhaler, exhale fully, press canister while inhaling slowly, hold breath 10 seconds", "C. Breathe normally while pressing the canister", "D. Exhale into the inhaler before pressing the canister"],
                    correct: 1,
                    explanation: "Proper MDI technique: shake, exhale fully, press canister while inhaling slowly and deeply, hold breath for 10 seconds to allow medication to deposit in the lungs.",
                    hint: "Slow inhalation + breath hold = medication reaches deep into the lungs."
                },
                {
                    question: "Which nursing intervention is most important to prevent hospital-acquired pressure injuries?",
                    choices: ["A. Massage bony prominences vigorously every shift", "B. Reposition the client at least every 2 hours and assess skin", "C. Keep the head of bed elevated at 90 degrees at all times", "D. Apply lotion to reddened areas and cover with gauze"],
                    correct: 1,
                    explanation: "Repositioning every 2 hours relieves pressure on bony prominences. Never massage reddened areas — this can cause further tissue damage. Keep HOB ≤30° when possible.",
                    hint: "Pressure injuries are caused by sustained pressure — how do you relieve it?"
                },
                {
                    question: "A nurse is performing a focused respiratory assessment. Which finding is most concerning and requires immediate intervention?",
                    choices: ["A. Respiratory rate of 18/min", "B. Tracheal deviation to one side", "C. Mild expiratory wheeze in a client with asthma", "D. Oxygen saturation of 94% on room air"],
                    correct: 1,
                    explanation: "Tracheal deviation indicates a tension pneumothorax or massive mediastinal shift — a life-threatening emergency. The trachea deviates AWAY from the affected side. Immediate intervention required.",
                    hint: "The trachea should be midline — deviation means something is pushing or pulling it."
                },
                {
                    question: "A client is confused and the nurse suspects delirium. Which finding best differentiates delirium from dementia?",
                    choices: ["A. The client is forgetful", "B. Sudden acute onset with fluctuating consciousness", "C. The client denies memory problems", "D. The client is unable to perform ADLs"],
                    correct: 1,
                    explanation: "Delirium has an ACUTE onset (hours to days) with fluctuating levels of consciousness. Dementia is gradual (months to years) with stable, progressive decline. Delirium often has an identifiable cause (infection, medication).",
                    hint: "DELIRIUM = Acute & Fluctuating. DEMENTIA = Gradual & Stable. When did symptoms start?"
                },
                {
                    question: "A nurse is documenting client care. Which entry is most appropriate?",
                    choices: ["A. 'Client seems like he's in pain — medicated at 1400'", "B. 'Client reported pain 8/10 at 1400. Morphine 2 mg IV administered. Reassessed at 1430: pain 3/10, client resting comfortably.'", "C. 'Pain medicated per protocol. Client better.'", "D. 'Client complaining again — gave pain meds'"],
                    correct: 1,
                    explanation: "Good nursing documentation is objective, specific, uses quotes for client statements, includes time, medication name/dose/route, and follow-up reassessment. Never use subjective terms like 'seems' or 'complaining again.'",
                    hint: "SBAR and objective language: What did the client say? What did you give? What happened after?"
                },
                {
                    question: "During a blood transfusion, a client develops sudden dyspnea, hypoxia, and bilateral pulmonary infiltrates (not due to circulatory overload). What complication should the nurse suspect?",
                    choices: ["A. Transfusion-associated circulatory overload (TACO)", "B. Transfusion-related acute lung injury (TRALI)", "C. Febrile non-hemolytic reaction", "D. Delayed hemolytic reaction"],
                    correct: 1,
                    explanation: "TRALI (within 6 hours of transfusion) presents as acute lung injury — sudden dyspnea, hypoxia, non-cardiogenic pulmonary edema (bilateral infiltrates without elevated filling pressures). It's a leading cause of transfusion-related death. Stop transfusion immediately.",
                    hint: "TRALI = Lung Injury within 6 hrs. TACO = fluid overload with elevated filling pressures."
                },
                {
                    question: "A client is being discharged on a new anticoagulant. Which statement by the client indicates a need for further teaching?",
                    choices: ["A. 'I should use an electric razor instead of a straight blade.'", "B. 'I'll take ibuprofen for my arthritis pain since it's over-the-counter.'", "C. 'I should report any unusual bruising or prolonged bleeding.'", "D. 'I should wear a medical alert bracelet.'"],
                    correct: 1,
                    explanation: "NSAIDs (ibuprofen, naproxen) significantly increase bleeding risk when combined with anticoagulants. Clients should use acetaminophen (Tylenol) for pain relief instead.",
                    hint: "NSAIDs affect platelet function — dangerous when combined with blood thinners."
                }
            ],
            
            "med-surg": [
                {
                    question: "A client is admitted with acute myocardial infarction. Which laboratory value is most specific for cardiac muscle damage?",
                    choices: ["A. CK-MB", "B. Troponin I", "C. LDH", "D. AST"],
                    correct: 1,
                    explanation: "Troponin I is the most specific marker for cardiac muscle damage and remains elevated longer than other cardiac enzymes.",
                    hint: "Which cardiac enzyme is considered the 'gold standard' for diagnosing heart attacks?"
                },
                {
                    question: "A client with COPD is receiving oxygen. Which finding requires immediate intervention?",
                    choices: ["A. SpO2 of 90%", "B. Oxygen flow rate of 6 L/min via simple mask", "C. Pursed-lip breathing during exertion", "D. Use of incentive spirometer every 2 hours"],
                    correct: 1,
                    explanation: "COPD clients rely on hypoxic drive to breathe. High-flow oxygen (>2-3 L/min via nasal cannula) can suppress their respiratory drive and cause CO2 retention.",
                    hint: "COPD clients have a unique breathing trigger — what happens with too much O2?"
                },
                {
                    question: "A client 2 days post-thyroidectomy reports tingling around the mouth and fingertips. What should the nurse suspect?",
                    choices: ["A. Thyroid storm", "B. Hypocalcemia", "C. Laryngeal nerve damage", "D. Wound infection"],
                    correct: 1,
                    explanation: "Tingling (paresthesia) around the mouth and fingers after thyroidectomy suggests hypocalcemia from accidental removal or damage to the parathyroid glands.",
                    hint: "The parathyroid glands sit on the thyroid — what electrolyte do they regulate?"
                },
                {
                    question: "A client with cirrhosis has a distended abdomen. Which position best facilitates breathing?",
                    choices: ["A. Supine with legs elevated", "B. High Fowler's position", "C. Left lateral recumbent", "D. Trendelenburg position"],
                    correct: 1,
                    explanation: "High Fowler's position (head of bed elevated 60-90°) allows the diaphragm to descend, relieving pressure from ascites on the lungs.",
                    hint: "Ascites pushes up on the diaphragm — what position moves fluid down?"
                },
                {
                    question: "A client with type 1 diabetes has a blood glucose of 40 mg/dL and is conscious. What is the priority intervention?",
                    choices: ["A. Administer IV dextrose 50%", "B. Give 15g of fast-acting carbohydrate", "C. Administer glucagon IM", "D. Recheck blood glucose in 15 minutes"],
                    correct: 1,
                    explanation: "For a conscious hypoglycemic client, the rule of 15 applies: give 15g of fast-acting carbs (juice, glucose tabs), wait 15 minutes, recheck. IV and IM routes are for unconscious clients.",
                    hint: "The client is conscious and can swallow — what's the simplest, fastest treatment?"
                },
                {
                    question: "A client has a chest tube connected to a water-seal drainage system. Continuous bubbling is observed in the water-seal chamber. What does this indicate?",
                    choices: ["A. Normal function", "B. An air leak in the system", "C. The lung has fully re-expanded", "D. The chest tube needs to be clamped"],
                    correct: 1,
                    explanation: "Continuous bubbling in the water-seal chamber indicates an air leak. Intermittent bubbling with respiration is normal, but continuous bubbling is not.",
                    hint: "Intermittent bubbling = normal. Continuous bubbling = ?"
                },
                {
                    question: "A client with a new colostomy asks why the stoma is dark red and moist. What is the best nursing response?",
                    choices: ["A. 'The stoma should be pale — I'll notify the surgeon'", "B. 'A beefy red, moist stoma indicates healthy tissue with good blood supply'", "C. 'The color will fade to pink within 24 hours'", "D. 'We need to apply pressure to reduce the swelling'"],
                    correct: 1,
                    explanation: "A healthy stoma should be beefy red and moist, similar to the inside of the mouth (buccal mucosa). A pale, dusky, or black stoma indicates ischemia and must be reported immediately.",
                    hint: "Think of what healthy mucous membranes look like — the inside of your cheek."
                },
                {
                    question: "A client with heart failure is prescribed furosemide (Lasix). Which electrolyte imbalance should the nurse monitor for?",
                    choices: ["A. Hyperkalemia", "B. Hypokalemia", "C. Hypernatremia", "D. Hypercalcemia"],
                    correct: 1,
                    explanation: "Loop diuretics like furosemide waste potassium. Monitor serum K+ levels and watch for signs of hypokalemia: muscle weakness, leg cramps, irregular pulse, and U waves on ECG.",
                    hint: "Loop diuretics are potent — they flush out water AND a critical electrolyte."
                },
                {
                    question: "A client with Addison's disease is admitted in crisis. Which finding does the nurse expect?",
                    choices: ["A. Hypertension and moon face", "B. Hypotension, hyperkalemia, and bronze skin pigmentation", "C. Weight gain and buffalo hump", "D. Hyperglycemia and polyuria"],
                    correct: 1,
                    explanation: "Addison's disease (adrenal insufficiency) causes low cortisol and aldosterone: hypotension, hyperkalemia, hyponatremia, hypoglycemia, and bronze hyperpigmentation. This is the opposite of Cushing's.",
                    hint: "Addison's = ADDing pigmentation, LOSing blood pressure. Opposite of Cushing's."
                },
                {
                    question: "A client with acute pancreatitis is admitted. Which position provides the most pain relief?",
                    choices: ["A. Supine with legs extended", "B. Prone position", "C. Fetal position (knees to chest, side-lying)", "D. Semi-Fowler's with legs flat"],
                    correct: 2,
                    explanation: "The fetal position (knees drawn to the chest) relieves pressure on the inflamed pancreas by reducing tension on the abdominal muscles. Pain worsens in the supine position (classic sign of pancreatitis).",
                    hint: "Lying flat makes pancreatitis pain worse — what position takes pressure off the abdomen?"
                },
                {
                    question: "A client with end-stage renal disease reports intense leg cramps and muscle weakness. Lab results show potassium 6.8 mEq/L. The nurse should prepare for which PRIORITY intervention?",
                    choices: ["A. Administer sodium polystyrene sulfonate (Kayexalate)", "B. Prepare for emergency dialysis", "C. Administer IV calcium gluconate to protect the heart", "D. Restrict dietary potassium immediately"],
                    correct: 2,
                    explanation: "At K+ 6.8, cardiac toxicity is the immediate danger. IV calcium gluconate is given FIRST to stabilize the myocardium (membrane protection), then drive potassium into cells (insulin/glucose, sodium bicarbonate), then remove it (Kayexalate, dialysis).",
                    hint: "Severe hyperkalemia threatens the heart FIRST — what protects the cardiac membrane?"
                },
                {
                    question: "A client with a deep vein thrombosis (DVT) in the left leg is on heparin infusion. The nurse is teaching about DVT. Which statement by the client is INCORRECT?",
                    choices: ["A. 'I should avoid standing or sitting for long periods without moving.'", "B. 'I need to massage my leg to break up the clot.'", "C. 'I should wear compression stockings as prescribed.'", "D. 'I should report any chest pain or shortness of breath immediately.'"],
                    correct: 1,
                    explanation: "Never massage a DVT! The clot can dislodge and travel to the lungs (pulmonary embolism), which can be fatal. The leg should be elevated and the client should avoid vigorous activity.",
                    hint: "A DVT is a clot that can travel — what happens if you massage it loose?"
                },
                {
                    question: "A client with type 2 diabetes has a fasting blood glucose of 280 mg/dL and fruity breath. Urine ketones are negative. The nurse suspects:",
                    choices: ["A. Diabetic ketoacidosis (DKA)", "B. Hyperosmolar hyperglycemic state (HHS)", "C. Hypoglycemia", "D. Somogyi effect"],
                    correct: 1,
                    explanation: "HHS (formerly HHNS) occurs in type 2 diabetes: extreme hyperglycemia (>600 mg/dL typically), NO ketones (residual insulin prevents ketosis), profound dehydration, and altered mental status. DKA has ketones and is more common in type 1.",
                    hint: "Type 2, very high glucose, NO ketones = HHS. Type 1, high glucose, WITH ketones = DKA."
                },
                {
                    question: "A client returns from a thyroidectomy. Which assessment finding requires the nurse's IMMEDIATE attention?",
                    choices: ["A. Mild sore throat and hoarse voice", "B. Tingling in the fingertips and positive Chvostek's sign", "C. Pain at the incision site rated 5/10", "D. Drowsiness from anesthesia"],
                    correct: 1,
                    explanation: "Tingling extremities and Chvostek's sign indicate hypocalcemia from accidental removal of parathyroid glands (parathyroid controls calcium). This can lead to tetany and laryngospasm — have calcium gluconate at bedside!",
                    hint: "The parathyroid glands sit on the thyroid — what happens to calcium if they're accidentally removed?"
                }                ,
                {
                    question: "A client with COPD is receiving supplemental oxygen. The nurse notes the respiratory rate has decreased from 22 to 10/min and the client is difficult to arouse. What is the priority action?",
                    choices: ["A. Increase oxygen flow rate to 6 L/min", "B. Reduce the oxygen to 1-2 L/min and notify provider", "C. Continue monitoring — decreased rate means the client is resting", "D. Administer a bronchodilator via nebulizer"],
                    correct: 1,
                    explanation: "COPD clients rely on hypoxic drive (low O2) to breathe — their respiratory drive is triggered by low oxygen, not high CO2. Too much oxygen removes this drive and causes respiratory depression. Reduce O2 to 1-2 L/min (keep SpO2 88-92%) and notify the provider immediately.",
                    hint: "COPD = hypoxic drive. Too much O2 = stops breathing! Keep SpO2 at 88-92%, not 100%."
                },
                {
                    question: "A client with acute myocardial infarction (MI) is prescribed MONA therapy. Which medications does MONA represent?",
                    choices: ["A. Metoprolol, Oxygen, Nitroglycerin, Aspirin", "B. Morphine, Oxygen, Nitroglycerin, Aspirin", "C. Morphine, Ondansetron, Nitroglycerin, Anticoagulants", "D. Metformin, Oxygen, Nifedipine, Anticoagulants"],
                    correct: 1,
                    explanation: "MONA for acute MI: Morphine (relieves pain, reduces preload), Oxygen (if SpO2 < 94%), Nitroglycerin (vasodilates, reduces preload), Aspirin (antiplatelet — chew immediately). These are given in the first minutes of suspected MI.",
                    hint: "MONA: Morphine, Oxygen, Nitroglycerin, Aspirin — memorize this for NCLEX! Given in first minutes of MI."
                },
                {
                    question: "A client with heart failure has dependent pitting edema and an S3 heart sound. What does the S3 (ventricular gallop) indicate?",
                    choices: ["A. Normal heart rhythm in adults over 40", "B. Fluid overload and ventricular failure", "C. Aortic stenosis and increased afterload", "D. Mitral valve regurgitation"],
                    correct: 1,
                    explanation: "S3 heart sound (ventricular gallop) is abnormal in adults > 40 and indicates FLUID OVERLOAD and ventricular failure — blood rushing into a stiff, overloaded ventricle. It sounds like 'Ken-TUCK-y.' It's an early sign of decompensated heart failure.",
                    hint: "S3 = 'Ken-TUCK-y' gallop = fluid overload = bad in adults. Report to provider!"
                },
                {
                    question: "A client with renal failure has a serum potassium of 6.8 mEq/L and is showing peaked T-waves on the ECG. What is the PRIORITY intervention?",
                    choices: ["A. Administer sodium polystyrene sulfonate (Kayexalate) by mouth", "B. Administer IV calcium gluconate immediately", "C. Start a low-potassium diet", "D. Prepare for dialysis"],
                    correct: 1,
                    explanation: "In SEVERE hyperkalemia with EKG changes (peaked T-waves → widened QRS → fatal arrhythmia), the PRIORITY is IV calcium gluconate — it stabilizes the cardiac membrane IMMEDIATELY (within minutes) while other treatments lower potassium. Kayexalate and diet changes are too slow for EKG changes.",
                    hint: "Peaked T-waves + high K+ = cardiac emergency! Calcium gluconate FIRST — it protects the heart immediately."
                },
                {
                    question: "A nurse is assessing a client 24 hours after abdominal surgery. Which finding is MOST concerning?",
                    choices: ["A. Absent bowel sounds in all four quadrants", "B. Pain level of 5/10 at the incision site", "C. Temperature of 101.5°F (38.6°C)", "D. Small amount of serosanguineous drainage at the incision"],
                    correct: 2,
                    explanation: "Fever (>100.4°F/38°C) within 24 hours of surgery suggests WIND (pulmonary complications like atelectasis or pneumonia), which is the most common early post-op complication. Although absent bowel sounds are expected post-abdominal surgery, fever is the MOST concerning finding requiring immediate assessment.",
                    hint: "Post-op days 1-2 fever = WIND (pulmonary). Remember the 5 W's: Wind, Water, Wound, Walking (DVT), Wonder drugs."
                },
                {
                    question: "A client with pneumonia has a respiratory rate of 28/min, SpO2 of 88% on 2L NC, and confusion. What is the priority nursing action?",
                    choices: ["A. Obtain sputum culture before starting antibiotics", "B. Apply a non-rebreather mask at 10-15 L/min and notify provider", "C. Position the client in supine to improve circulation", "D. Administer scheduled antibiotics and monitor closely"],
                    correct: 1,
                    explanation: "SpO2 of 88% with confusion indicates severe hypoxemia — this is a respiratory emergency. Apply high-flow oxygen via non-rebreather mask (10-15 L/min) first, then notify provider. Position: high Fowler's (not supine). Supine worsens breathing. Antibiotics are important but oxygenation is THE priority.",
                    hint: "SpO2 < 90% + confusion = emergency. High-flow O2 FIRST, then notify provider. Never put them flat!"
                },
                {
                    question: "A client with a new colostomy is being discharged. Which statement by the client indicates understanding of colostomy care?",
                    choices: ["A. 'I will change my pouch every day whether it's full or not'", "B. 'I should empty the pouch when it's 1/3 to 1/2 full'", "C. 'I need to avoid all high-fiber foods permanently'", "D. 'I should apply the pouch directly to moist, irritated skin'"],
                    correct: 1,
                    explanation: "Empty the ostomy pouch when it's 1/3 to 1/2 full — waiting until it's completely full increases the risk of leakage and skin breakdown. The skin must be clean and DRY before applying the pouch. Diet restrictions depend on the type of ostomy and individual tolerance.",
                    hint: "1/3 to 1/2 full = time to empty the ostomy pouch. Don't wait until it's full — it'll leak!"
                },
                {
                    question: "A client has a new stroke (CVA) affecting the left hemisphere. Which deficit is the nurse MOST likely to find?",
                    choices: ["A. Left-sided weakness and neglect of the left visual field", "B. Right-sided weakness and expressive or receptive aphasia", "C. Cerebellar ataxia and nystagmus", "D. Homonymous hemianopia on the right side only"],
                    correct: 1,
                    explanation: "The brain is contralateral (opposite side controls movement): left hemisphere stroke → RIGHT-SIDED weakness/paralysis. The left hemisphere also controls language/speech → aphasia (Broca's = expressive, Wernicke's = receptive). Right hemisphere stroke → left-sided weakness and neglect.",
                    hint: "Left brain → right body, right brain → left body. Left brain also = language. So left stroke = right weakness + aphasia!"
                },
                {
                    question: "A client with a pulmonary embolism is started on anticoagulation. Which finding indicates the therapy is adequate but also a serious complication to watch for?",
                    choices: ["A. Increased respiratory rate and new pleuritic chest pain", "B. Blood in urine (hematuria) or black tarry stools (melena)", "C. Elevated D-dimer levels", "D. Tachycardia and low SpO2"],
                    correct: 1,
                    explanation: "Hematuria (blood in urine) and melena (black tarry stools = GI bleed) are signs of bleeding — the most serious complication of anticoagulation therapy. While anticoagulation is necessary to treat PE, bleeding complications can be life-threatening. Monitor closely and have antidotes available (protamine for heparin, vitamin K for warfarin).",
                    hint: "Anticoagulation risk = BLEEDING. Watch for hematuria, melena, unusual bruising, and gum bleeding."
                },
                {
                    question: "A client is admitted with diabetic ketoacidosis (DKA). What is the PRIORITY nursing intervention?",
                    choices: ["A. Administer IV regular insulin bolus immediately", "B. Establish IV access and begin aggressive IV fluid replacement (0.9% NS)", "C. Correct acidosis by administering sodium bicarbonate", "D. Monitor blood glucose every 4 hours"],
                    correct: 1,
                    explanation: "In DKA, the PRIORITY is IV FLUID replacement — clients are severely dehydrated (3-5 liters deficit) from osmotic diuresis. Start with 0.9% NS. Insulin comes AFTER fluids are started (insulin drives K+ into cells, and if K+ is already low from diuresis, giving insulin first can cause fatal hypokalemia). Bicarb is rarely needed.",
                    hint: "DKA treatment order: FLUIDS first, check K+, THEN insulin. Giving insulin without fixing fluids/K+ can be fatal!"
                }
            ],
            
            pharmacology: [
                {
                    question: "A client is taking warfarin (Coumadin). Which laboratory value should the nurse monitor?",
                    choices: ["A. PT/INR", "B. aPTT", "C. Platelet count", "D. Hemoglobin"],
                    correct: 0,
                    explanation: "PT/INR is monitored for warfarin therapy. Therapeutic INR is typically 2-3 (2.5-3.5 for mechanical heart valves).",
                    hint: "Warfarin affects the extrinsic pathway — which lab measures that?"
                },
                {
                    question: "A client taking metformin (Glucophage) is scheduled for a CT scan with contrast dye. What should the nurse do?",
                    choices: ["A. Administer the metformin with extra water", "B. Hold metformin for 48 hours before and after the procedure", "C. Give metformin only after the scan", "D. No changes are needed"],
                    correct: 1,
                    explanation: "Metformin must be held 48 hours before and after contrast dye procedures due to the risk of lactic acidosis from the combination's effect on kidney function.",
                    hint: "Contrast dye + metformin = risk of a dangerous metabolic condition."
                },
                {
                    question: "Which medication requires the nurse to check the apical pulse for 1 full minute before administration?",
                    choices: ["A. Lisinopril", "B. Metoprolol", "C. Digoxin", "D. Amlodipine"],
                    correct: 2,
                    explanation: "Digoxin requires a full 60-second apical pulse check. Hold if pulse is <60 bpm in adults or <70 bpm in children due to risk of toxicity.",
                    hint: "This cardiac glycoside has a narrow therapeutic range and directly affects heart rate."
                },
                {
                    question: "A client is receiving IV vancomycin. Which adverse effect should the nurse monitor for during infusion?",
                    choices: ["A. Hypotension and flushing (Red Man Syndrome)", "B. Hyperglycemia", "C. Constipation", "D. Weight gain"],
                    correct: 0,
                    explanation: "Red Man Syndrome (flushing, hypotension, rash on face/neck/trunk) occurs when vancomycin is infused too rapidly. Infuse over at least 60 minutes.",
                    hint: "This syndrome is named after the characteristic skin color change during rapid infusion."
                },
                {
                    question: "A client on lithium therapy has a serum level of 2.0 mEq/L. What should the nurse do first?",
                    choices: ["A. Administer the next scheduled dose", "B. Hold the medication and notify the provider", "C. Encourage fluid intake", "D. Recheck the level in 4 hours"],
                    correct: 1,
                    explanation: "Therapeutic lithium level is 0.6-1.2 mEq/L. A level of 2.0 is toxic. Hold the medication immediately and notify the provider. Signs of toxicity include tremors, vomiting, and confusion.",
                    hint: "The therapeutic range is very narrow (0.6-1.2). What is 2.0?"
                },
                {
                    question: "Which antidote should the nurse have available when administering heparin?",
                    choices: ["A. Vitamin K", "B. Protamine sulfate", "C. Naloxone", "D. Flumazenil"],
                    correct: 1,
                    explanation: "Protamine sulfate is the antidote for heparin. Vitamin K is the antidote for warfarin. Know your antidote pairs!",
                    hint: "Heparin → protamine. Warfarin → ?"
                },
                {
                    question: "A client is started on an ACE inhibitor (lisinopril). Which side effect should the nurse teach the client to report?",
                    choices: ["A. Persistent dry cough", "B. Weight gain", "C. Increased appetite", "D. Drowsiness"],
                    correct: 0,
                    explanation: "ACE inhibitors commonly cause a persistent dry cough due to accumulation of bradykinin. If intolerable, the client may be switched to an ARB (e.g., losartan) which doesn't cause cough.",
                    hint: "ACE inhibitors prevent breakdown of a substance that irritates the airways."
                },
                {
                    question: "A client taking phenytoin (Dilantin) for seizures has a serum level of 25 mcg/mL. The nurse should:",
                    choices: ["A. Administer the next dose as scheduled", "B. Hold the medication and notify the provider", "C. Give an additional loading dose", "D. Recheck the level in 1 hour"],
                    correct: 1,
                    explanation: "Therapeutic range for phenytoin is 10-20 mcg/mL. A level of 25 is toxic. Signs of toxicity include nystagmus, ataxia, slurred speech, and confusion. Hold and notify.",
                    hint: "10-20 is therapeutic. Where does 25 fall?"
                },
                {
                    question: "Which medication class requires the nurse to monitor for signs of serotonin syndrome?",
                    choices: ["A. Beta-blockers", "B. SSRIs (selective serotonin reuptake inhibitors)", "C. Calcium channel blockers", "D. Proton pump inhibitors"],
                    correct: 1,
                    explanation: "SSRIs (fluoxetine, sertraline, etc.) can cause serotonin syndrome, especially when combined with MAOIs or other serotonergic drugs. Signs: hyperthermia, agitation, myoclonus, hyperreflexia, diaphoresis.",
                    hint: "Too much serotonin = a dangerous syndrome. Which drug class increases serotonin?"
                },
                {
                    question: "A client is receiving gentamicin (an aminoglycoside). Which two toxicities must the nurse monitor for throughout therapy?",
                    choices: ["A. Hepatotoxicity and photosensitivity", "B. Nephrotoxicity and ototoxicity", "C. Pulmonary fibrosis and myelosuppression", "D. Cardiotoxicity and bone marrow suppression"],
                    correct: 1,
                    explanation: "Aminoglycosides (gentamicin, tobramycin, amikacin) are notorious for nephrotoxicity (monitor creatinine/BUN) and ototoxicity (hearing loss, tinnitus, vertigo). Trough levels should be monitored to prevent toxicity.",
                    hint: "Aminoglycosides damage two organs that end in '-tox': KIDney and EAR."
                },
                {
                    question: "A client is prescribed nitroglycerin SL for angina. Which teaching point is most important?",
                    choices: ["A. Take with a full glass of water for best absorption", "B. If one dose doesn't relieve pain in 5 minutes, call 911 after the 3rd dose", "C. Store in a clear plastic bag in your purse or pocket for quick access", "D. You can take up to 10 tablets before seeking medical attention"],
                    correct: 1,
                    explanation: "NTG protocol: take 1 tablet SL every 5 minutes, up to 3 doses. If pain is unrelieved after 3 doses, call 911 — this may be an MI. Store NTG in original dark glass bottle away from heat/light.",
                    hint: "3 tablets, 5 minutes apart, then 911. Dark glass bottle."
                },
                {
                    question: "A client receiving IV morphine becomes lethargic with respirations of 6/min and pinpoint pupils. What is the priority action?",
                    choices: ["A. Stimulate the client by calling their name loudly", "B. Administer naloxone (Narcan) per protocol", "C. Stop the morphine infusion and reassess in 30 minutes", "D. Administer flumazenil (Romazicon)"],
                    correct: 1,
                    explanation: "Classic opioid overdose: lethargy/unconsciousness, respiratory depression, and miosis (pinpoint pupils). Naloxone (Narcan) is the opioid antagonist. Administer immediately. Note: naloxone has a shorter half-life than most opioids — the client may need repeat dosing.",
                    hint: "Opioid overdose triad: respiratory depression + pinpoint pupils + unconsciousness. What's the reversal agent?"
                },
                {
                    question: "A client taking corticosteroids (prednisone) long-term should be monitored for which complications?",
                    choices: ["A. Hypoglycemia and weight loss", "B. Hyperglycemia, osteoporosis, and increased infection risk", "C. Hypotension and bradycardia", "D. Hypothyroidism and hair loss"],
                    correct: 1,
                    explanation: "Long-term corticosteroids cause: hyperglycemia (steroid diabetes), bone loss/osteoporosis (inhibit calcium), immune suppression (infection risk), weight gain, moon face, buffalo hump, fluid retention, and poor wound healing.",
                    hint: "Think Cushing's syndrome — steroids mimic excess cortisol. What does excess cortisol do?"
                },
                {
                    question: "A nurse is administering IV potassium chloride. Which is most important to remember?",
                    choices: ["A. IV potassium can be given via IV push for severe hypokalemia", "B. IV potassium must always be diluted and given slowly via IV pump", "C. Maximum infusion rate is 100 mEq/hour", "D. Potassium can be mixed in a concentrated solution for faster effect"],
                    correct: 1,
                    explanation: "IV potassium MUST be diluted (never give concentrated) and infused slowly — maximum 10-20 mEq/hour (never exceed 40 mEq/hour). IV push potassium can cause immediate cardiac arrest. Always use an infusion pump.",
                    hint: "IV potassium pushed too fast causes cardiac arrest. It MUST be diluted and pumped slowly."
                }                ,
                {
                    question: "A client is prescribed metformin (Glucophage) for type 2 diabetes. Which instruction is MOST important?",
                    choices: ["A. Take on an empty stomach to maximize absorption", "B. Hold metformin before surgery or IV contrast dye procedures", "C. Monitor for hypoglycemia — it is common with metformin", "D. Expect significant weight gain as a side effect"],
                    correct: 1,
                    explanation: "Metformin must be HELD before IV contrast and surgery (risk of lactic acidosis when kidneys are stressed). It rarely causes hypoglycemia alone (it lowers glucose without stimulating insulin). GI upset is common — take with food. It typically causes weight neutral or slight weight loss.",
                    hint: "Metformin + contrast = lactic acidosis risk. Always HOLD before imaging with contrast!"
                },
                {
                    question: "The nurse is caring for a client on heparin infusion. aPTT is 140 seconds (therapeutic range: 60-100 sec). What is the priority action?",
                    choices: ["A. Continue current infusion — this is therapeutic", "B. Decrease the heparin infusion rate per protocol", "C. Administer protamine sulfate immediately", "D. Obtain platelet count and draw another aPTT in 6 hours"],
                    correct: 1,
                    explanation: "aPTT of 140 seconds is supratherapeutic (> 100 sec = too anticoagulated). The nurse should DECREASE the infusion rate per protocol. Protamine sulfate is the antidote for heparin overdose, but it's only given for serious bleeding — not just high aPTT.",
                    hint: "aPTT above 100 = too anticoagulated → slow down heparin. Protamine = antidote (for bleeding, not just high aPTT)."
                },
                {
                    question: "A client is taking digoxin (Lanoxin) 0.25 mg daily. Which finding should the nurse report to the provider IMMEDIATELY?",
                    choices: ["A. Heart rate of 62 bpm", "B. Serum potassium of 2.9 mEq/L", "C. Serum digoxin level of 1.5 ng/mL", "D. Mild ankle edema"],
                    correct: 1,
                    explanation: "Hypokalemia (K+ < 3.5) POTENTIATES digoxin toxicity — low potassium makes the heart more sensitive to digoxin. This is a dangerous combination that can cause life-threatening dysrhythmias. Report immediately! Therapeutic digoxin level is 0.5-2.0 ng/mL.",
                    hint: "Low K+ + digoxin = TOXIC combo. Potassium protects the heart from digoxin toxicity."
                },
                {
                    question: "A client is prescribed furosemide (Lasix) 40 mg IV. Which assessment finding indicates the medication is effective?",
                    choices: ["A. Blood pressure decreased by 30 mmHg", "B. Urine output increased to 200 mL/hour", "C. Respiratory rate decreased from 28 to 18/min", "D. Heart rate decreased from 110 to 88 bpm"],
                    correct: 2,
                    explanation: "Furosemide is a loop diuretic used for fluid overload/pulmonary edema. Effectiveness = reduced fluid overload signs. Decreased respiratory rate (from 28 → 18) shows the pulmonary congestion is resolving. Increased urine output shows the diuresis is working. Both B and C are correct; however, decreased respiratory rate is the best sign that the PURPOSE (treating pulmonary edema/HF) is being achieved.",
                    hint: "Lasix treats fluid overload — look for signs that CONGESTION is improving, not just that urine is coming out."
                },
                {
                    question: "Which medication requires the nurse to assess the client's apical pulse for 1 full minute BEFORE administration?",
                    choices: ["A. Metoprolol (Lopressor) oral 25 mg", "B. Digoxin (Lanoxin) 0.125 mg oral", "C. Atorvastatin (Lipitor) 40 mg oral", "D. Lisinopril (Zestril) 10 mg oral"],
                    correct: 1,
                    explanation: "Digoxin requires assessing the APICAL pulse for 1 FULL MINUTE before administration. Hold if pulse < 60 bpm (adult). Digoxin slows the heart rate and excessive bradycardia is a sign of toxicity. Metoprolol also requires pulse check but the '1 full minute apical' rule is classically associated with digoxin.",
                    hint: "Digoxin = count apical pulse for 60 full seconds. Hold if HR < 60. This is a classic NCLEX rule!"
                },
                {
                    question: "A client is receiving gentamicin (an aminoglycoside antibiotic). The nurse should monitor for which priority adverse effects? (Select all that apply)",
                    choices: ["A. Ototoxicity (hearing loss/tinnitus)", "B. Nephrotoxicity (rising BUN/creatinine)", "C. Hepatotoxicity (elevated liver enzymes)", "D. Peripheral neuropathy (tingling extremities)", "E. Hypertension"],
                    correct: 0,
                    explanation: "Aminoglycosides (gentamicin, tobramycin, amikacin) cause: OTOTOXICITY (damage to 8th cranial nerve → hearing loss, tinnitus, vertigo) and NEPHROTOXICITY (kidney damage). Monitor serum drug levels (peak/trough), BUN, creatinine, and hearing. This is a SATA — both A and B are correct.",
                    hint: "Aminoglycosides: oto (ears) + nephro (kidneys). 'OtoNephro' — remember the two toxicities!"
                },
                {
                    question: "A client with hypothyroidism is prescribed levothyroxine (Synthroid). Which teaching point is MOST important?",
                    choices: ["A. Take with milk or antacids to prevent GI upset", "B. Expect improvement within 24-48 hours of starting", "C. Take on an empty stomach 30-60 minutes before breakfast", "D. Double the dose if a dose is missed"],
                    correct: 2,
                    explanation: "Levothyroxine must be taken on an EMPTY STOMACH 30-60 minutes BEFORE breakfast for optimal absorption. Food, calcium, iron, and antacids all reduce absorption. Full therapeutic effects take 4-6 weeks. NEVER double a missed dose.",
                    hint: "Synthroid = empty stomach, morning, wait 30-60 min before eating. Many things (iron, calcium) block its absorption."
                },
                {
                    question: "A client taking lithium carbonate for bipolar disorder has a lithium level of 1.9 mEq/L. Which action is priority?",
                    choices: ["A. Continue current dose — this is within therapeutic range", "B. Hold the next dose and notify the provider immediately", "C. Administer activated charcoal", "D. Encourage increased sodium intake"],
                    correct: 1,
                    explanation: "Therapeutic lithium range is 0.6-1.2 mEq/L (maintenance). A level of 1.9 is TOXIC (toxicity > 1.5). Early toxicity signs: tremors, nausea, diarrhea, confusion. Hold the dose and notify provider immediately. Encourage fluids (dehydration raises lithium levels), but sodium shouldn't be drastically altered.",
                    hint: "Lithium therapeutic range: 0.6-1.2 mEq/L. Above 1.5 = toxicity. Above 2.0 = severe toxicity. HOLD and call MD!"
                },
                {
                    question: "The nurse is preparing to give a subcutaneous injection of insulin NPH and Regular insulin together. What is the correct order of preparation?",
                    choices: ["A. Draw up NPH first, then Regular insulin", "B. Draw up Regular insulin first, then NPH", "C. The order doesn't matter for subcutaneous insulin", "D. They cannot be mixed — administer in separate syringes"],
                    correct: 1,
                    explanation: "When mixing insulins: draw up CLEAR (Regular) first, then CLOUDY (NPH). Mnemonic: 'Clear before Cloudy' or 'RN rule' — Regular first, NPH second. This prevents contaminating the Regular insulin vial with NPH.",
                    hint: "Clear before Cloudy! Draw up Regular (clear) FIRST, then NPH (cloudy). Never contaminate the clear with cloudy!"
                },
                {
                    question: "A client on long-term phenytoin (Dilantin) therapy has gum overgrowth. What is this called and what is the priority nursing action?",
                    choices: ["A. Xerostomia — increase fluid intake and use sugar-free candy", "B. Gingival hyperplasia — teach meticulous oral hygiene and regular dental visits", "C. Stomatitis — apply topical antifungal to the gums", "D. Candidiasis — swish and swallow nystatin solution"],
                    correct: 1,
                    explanation: "Gingival hyperplasia (gum overgrowth) is a classic side effect of phenytoin. Teach the client meticulous oral hygiene (soft toothbrush, gentle brushing 3x/day) and regular dental visits. This condition can be minimized but not always reversed. It does not indicate toxicity.",
                    hint: "Phenytoin causes gum overgrowth (gingival hyperplasia) → teach good dental hygiene! Classic NCLEX phenytoin side effect."
                }
            ],
            
            pediatric: [
                {
                    question: "A 2-year-old has epiglottitis. Which intervention is contraindicated?",
                    choices: ["A. Positioning upright", "B. Providing humidified oxygen", "C. Examining the throat", "D. Monitoring respiratory status"],
                    correct: 2,
                    explanation: "Examining the throat (using a tongue depressor) can precipitate complete airway obstruction in a child with epiglottitis. Never inspect the throat!",
                    hint: "The inflamed epiglottis can completely block the airway if disturbed."
                },
                {
                    question: "A parent asks when their infant should receive the first MMR vaccine. What is the correct response?",
                    choices: ["A. At birth", "B. At 6 months", "C. At 12 months", "D. At 18 months"],
                    correct: 2,
                    explanation: "The first MMR (measles, mumps, rubella) vaccine is given at 12-15 months. The second dose is given at 4-6 years.",
                    hint: "This live vaccine is given after maternal antibodies have waned — around the first birthday."
                },
                {
                    question: "A 4-year-old is admitted with suspected Wilms tumor. Which nursing action is contraindicated?",
                    choices: ["A. Monitoring blood pressure", "B. Palpating the abdomen", "C. Measuring abdominal girth", "D. Maintaining strict I&O"],
                    correct: 1,
                    explanation: "Never palpate the abdomen of a child with Wilms tumor (nephroblastoma). Palpation can cause the tumor to rupture and seed cancer cells.",
                    hint: "This kidney tumor is fragile — what physical action could cause it to rupture?"
                },
                {
                    question: "An infant with pyloric stenosis would most likely present with which type of vomiting?",
                    choices: ["A. Bile-stained vomiting", "B. Projectile, non-bilious vomiting", "C. Bloody emesis", "D. Intermittent regurgitation"],
                    correct: 1,
                    explanation: "Pyloric stenosis causes projectile, non-bilious vomiting because the obstruction is proximal to the bile duct. The classic presentation is a hungry infant who vomits forcefully after feeding.",
                    hint: "The blockage is at the pylorus (before bile enters) — so the vomit won't contain bile."
                },
                {
                    question: "A child with sickle cell disease presents with severe joint pain and swelling. What is the priority nursing intervention?",
                    choices: ["A. Apply cold compresses to the joints", "B. Administer IV fluids and pain management", "C. Encourage ambulation", "D. Apply a tourniquet above the affected area"],
                    correct: 1,
                    explanation: "During a sickle cell crisis (vaso-occlusive), the priority is aggressive IV hydration to reduce blood viscosity and pain management. Cold worsens sickling — use warm compresses instead.",
                    hint: "Sickled cells are sticky and dehydrated — what two things does the body need most?"
                },
                {
                    question: "A child is diagnosed with croup. Which assessment finding is most characteristic?",
                    choices: ["A. Expiratory wheezing", "B. Barking cough and inspiratory stridor", "C. Productive cough with green sputum", "D. High-pitched expiratory crackles"],
                    correct: 1,
                    explanation: "Croup (laryngotracheobronchitis) causes swelling of the subglottic area, producing a distinctive seal-like barking cough, inspiratory stridor, and hoarseness. Worse at night.",
                    hint: "The swelling is in the upper airway — the cough sounds like a seal barking."
                },
                {
                    question: "A 6-month-old infant is brought to the ED with a bulging fontanel, high-pitched cry, and fever. The nurse should suspect:",
                    choices: ["A. Otitis media", "B. Bacterial meningitis", "C. Dehydration", "D. Pyloric stenosis"],
                    correct: 1,
                    explanation: "Bulging fontanel + high-pitched cry + fever in an infant are classic signs of increased intracranial pressure from meningitis. Nuchal rigidity may also be present in older infants.",
                    hint: "A bulging fontanel means increased pressure inside the skull — what infection causes this?"
                },
                {
                    question: "A child with type 1 diabetes is found unconscious at school. The school nurse should:",
                    choices: ["A. Give orange juice orally", "B. Administer glucagon injection", "C. Check blood glucose and wait for results", "D. Administer regular insulin"],
                    correct: 1,
                    explanation: "An unconscious diabetic child should receive glucagon IM/SubQ — never give anything orally to an unconscious person (aspiration risk). Glucagon stimulates the liver to release stored glucose.",
                    hint: "The child can't swallow safely — what injectable medication raises blood sugar?"
                },
                {
                    question: "A nurse is educating parents about Reye syndrome. Which over-the-counter medication should be avoided in children under 18 with viral illness?",
                    choices: ["A. Acetaminophen (Tylenol)", "B. Aspirin (salicylates)", "C. Ibuprofen (Advil)", "D. Diphenhydramine (Benadryl)"],
                    correct: 1,
                    explanation: "Aspirin given to children with viral illness (flu, chickenpox) is associated with Reye syndrome — a rare but serious condition causing liver failure and encephalopathy. Use acetaminophen or ibuprofen instead.",
                    hint: "Reye syndrome = aspirin + viral illness in children. What's the safe alternative?"
                },
                {
                    question: "A 3-year-old is admitted with burns covering the face and hands. What is the most important initial assessment?",
                    choices: ["A. Wound depth and percentage of body surface area", "B. Airway, breathing, and signs of inhalation injury", "C. Pain level using FACES scale", "D. Fluid intake over the last 24 hours"],
                    correct: 1,
                    explanation: "Facial burns with singed nasal hairs, hoarseness, or carbonaceous sputum indicate inhalation injury — a life-threatening airway emergency. The airway can swell and close rapidly. Secure the airway FIRST.",
                    hint: "Burns to the face = risk of inhalation injury. What's your first priority with any trauma?"
                },
                {
                    question: "Which developmental milestone should a nurse expect a typical 12-month-old infant to have achieved?",
                    choices: ["A. Speaking in 3-word sentences", "B. Walking independently, saying 1-2 words, and using pincer grasp", "C. Running, jumping, and drawing circles", "D. Riding a tricycle and copying squares"],
                    correct: 1,
                    explanation: "By 12 months: walks holding furniture or independently, says 'mama/dada' meaningfully + 1-2 other words, uses pincer grasp to pick up small objects, waves bye-bye. 3-word sentences = 24 months.",
                    hint: "12 months = 1 year — first steps, first words, fine motor with fingers."
                },
                {
                    question: "A child with nephrotic syndrome presents with massive edema and decreased urinary output. Which dietary modification is expected?",
                    choices: ["A. High-sodium, high-protein diet", "B. Sodium restriction and moderate protein intake", "C. High-fluid intake to flush the kidneys", "D. Fat-free, low-carbohydrate diet"],
                    correct: 1,
                    explanation: "Nephrotic syndrome causes massive protein loss in urine (proteinuria), leading to low oncotic pressure and edema. Management includes sodium restriction (reduce edema), moderate protein (replace losses without overloading), and diuretics.",
                    hint: "Low albumin → edema. Restrict sodium to reduce fluid retention."
                },
                {
                    question: "An 18-month-old is brought to the ER with a bulging anterior fontanel, photophobia, and stiff neck. What is the nurse's priority action?",
                    choices: ["A. Perform a lumbar puncture immediately", "B. Initiate isolation precautions and notify the provider immediately", "C. Place the child in bright light to assess pupillary response", "D. Encourage oral fluids"],
                    correct: 1,
                    explanation: "These signs suggest bacterial meningitis. Initiate droplet precautions immediately (until infection is ruled out) and notify the provider urgently. IV antibiotics should be started within 1 hour — every minute counts. Lumbar puncture confirms the diagnosis but treatment is not delayed.",
                    hint: "Suspected meningitis = droplet precautions first, then notify, then lumbar puncture."
                }
            ],
            
            maternal: [
                {
                    question: "A primigravida at 38 weeks experiences regular contractions every 3 minutes. What is the priority assessment?",
                    choices: ["A. Fetal heart rate", "B. Blood pressure", "C. Cervical dilation", "D. Pain level"],
                    correct: 0,
                    explanation: "Fetal heart rate assessment is priority to ensure fetal well-being during active labor.",
                    hint: "In labor, what assessment ensures the baby is tolerating the stress of contractions?"
                },
                {
                    question: "A pregnant client at 32 weeks reports a sudden gush of fluid from the vagina. What should the nurse do first?",
                    choices: ["A. Perform a vaginal exam", "B. Test the fluid with Nitrazine paper", "C. Prepare for immediate delivery", "D. Administer oxytocin"],
                    correct: 1,
                    explanation: "Nitrazine paper tests for amniotic fluid (turns dark blue with pH 7.0-7.5). This confirms premature rupture of membranes (PROM). Avoid vaginal exam to reduce infection risk.",
                    hint: "Before any other action, you need to confirm whether this is amniotic fluid."
                },
                {
                    question: "A client receiving magnesium sulfate for preeclampsia becomes lethargic with respirations of 10/min. What is the priority action?",
                    choices: ["A. Continue the infusion and monitor", "B. Stop the infusion and administer calcium gluconate", "C. Increase IV fluids", "D. Position the client on her left side"],
                    correct: 1,
                    explanation: "Respiratory depression (<12/min), lethargy, and absent DTRs are signs of magnesium toxicity. Stop the infusion immediately and give the antidote: calcium gluconate.",
                    hint: "Mag sulfate toxicity: first lose reflexes, then respirations, then cardiac arrest. What's the antidote?"
                },
                {
                    question: "During the first stage of labor, the fetal heart rate monitor shows late decelerations. What does this indicate?",
                    choices: ["A. Head compression — normal finding", "B. Umbilical cord compression", "C. Uteroplacental insufficiency", "D. Fetal sleep cycle"],
                    correct: 2,
                    explanation: "Late decelerations (FHR drops after contraction peak and recovers after contraction ends) indicate uteroplacental insufficiency — the placenta can't deliver enough oxygen. This is ominous.",
                    hint: "Early = head compression (benign). Variable = cord compression. Late = ?"
                },
                {
                    question: "A postpartum client is saturating a perineal pad in 15 minutes. What should the nurse do first?",
                    choices: ["A. Document and continue monitoring", "B. Massage the uterine fundus", "C. Administer oxytocin", "D. Prepare for surgical intervention"],
                    correct: 1,
                    explanation: "Soaking a pad in <1 hour indicates postpartum hemorrhage. The first action is fundal massage to stimulate uterine contraction. A boggy uterus is the #1 cause of postpartum hemorrhage.",
                    hint: "The most common cause of PPH is uterine atony — what's the first hands-on intervention?"
                },
                {
                    question: "A nurse is assessing a newborn at 1 minute of life. The infant has a heart rate of 110, slow respirations, some flexion, grimace with stimulation, and blue extremities. What is the APGAR score?",
                    choices: ["A. 5", "B. 6", "C. 7", "D. 8"],
                    correct: 1,
                    explanation: "APGAR: Heart rate >100 = 2, Slow/irregular respirations = 1, Some flexion = 1, Grimace = 1, Acrocyanosis (blue extremities) = 1. Total = 6. Score of 7-10 is normal; 4-6 needs intervention.",
                    hint: "APGAR: Appearance, Pulse, Grimace, Activity, Respiration — each scored 0, 1, or 2."
                },
                {
                    question: "A pregnant client at 28 weeks has a negative Rh blood type and a positive indirect Coombs test. What does this indicate?",
                    choices: ["A. The mother has not been sensitized to Rh-positive blood", "B. The mother has developed antibodies against Rh-positive blood", "C. The fetus is Rh-negative", "D. RhoGAM was administered successfully"],
                    correct: 1,
                    explanation: "A positive indirect Coombs test means the Rh-negative mother has developed antibodies against Rh-positive fetal red blood cells (sensitization). RhoGAM is given to prevent this, but it's too late once positive.",
                    hint: "Indirect Coombs detects antibodies in the mother's blood — positive means she's already sensitized."
                },
                {
                    question: "A laboring client's membranes rupture spontaneously. The nurse notes the amniotic fluid is green-tinged. What does this indicate?",
                    choices: ["A. Normal amniotic fluid", "B. Meconium-stained fluid indicating possible fetal distress", "C. Infection", "D. Placental abruption"],
                    correct: 1,
                    explanation: "Green-tinged amniotic fluid indicates meconium passage, which can occur with fetal distress (hypoxia). The fetus may aspirate meconium, causing meconium aspiration syndrome. Alert the provider and prepare for suctioning.",
                    hint: "Meconium (fetal stool) is greenish — its presence in amniotic fluid suggests the fetus was stressed."
                },
                {
                    question: "A client with preeclampsia is admitted. Which assessment finding would indicate progression to eclampsia?",
                    choices: ["A. Blood pressure of 150/95 mmHg", "B. Protein in urine of 2+", "C. Grand mal seizure", "D. Edema in the hands and face"],
                    correct: 2,
                    explanation: "Eclampsia = preeclampsia + seizures. The seizure is the defining feature that converts preeclampsia to eclampsia. Nursing priority: protect from injury, turn to side, administer magnesium sulfate, notify provider.",
                    hint: "Pre-eclampsia + what neurological event = eclampsia?"
                },
                {
                    question: "A nurse is caring for a client in active labor when the fetal heart monitor shows a variable deceleration. What is the priority nursing intervention?",
                    choices: ["A. Prepare for emergency cesarean section", "B. Change the maternal position and administer oxygen via face mask", "C. Increase the oxytocin infusion rate", "D. Perform an amnioinfusion immediately"],
                    correct: 1,
                    explanation: "Variable decelerations = umbilical cord compression. First action: reposition the mother (side to side, knee-chest), administer O2 at 8-10 L/min via face mask. These measures often resolve variable decels. If persistent, provider is notified.",
                    hint: "Variable decel = cord compression. First intervention: change position to take pressure off the cord."
                },
                {
                    question: "A postpartum client on day 3 reports breast engorgement. She is bottle-feeding. What is the most appropriate nursing intervention?",
                    choices: ["A. Apply warm compresses and encourage breastfeeding", "B. Apply ice packs and a supportive bra, and avoid breast stimulation", "C. Pump the breasts every 4 hours to relieve pressure", "D. Administer bromocriptine to suppress lactation"],
                    correct: 1,
                    explanation: "For non-breastfeeding clients, suppress lactation by: wearing a tight-fitting bra, applying ice packs (cold reduces blood flow), and avoiding any breast stimulation or pumping (which signals the body to produce more milk).",
                    hint: "For bottle-feeding moms, warmth and pumping stimulate more milk — you want the opposite."
                },
                {
                    question: "A nurse assesses a newborn immediately after birth. Which finding requires immediate intervention?",
                    choices: ["A. Acrocyanosis (blue hands and feet)", "B. Vernix caseosa covering the body", "C. Central cyanosis (blue lips and trunk)", "D. Molding of the skull bones"],
                    correct: 2,
                    explanation: "Central cyanosis (blue lips, tongue, trunk) in a newborn indicates hypoxia and requires immediate respiratory support. Acrocyanosis (blue extremities only) is normal in the first 24-48 hours. Vernix and molding are expected findings.",
                    hint: "Blue hands/feet = normal for newborns. Blue lips/trunk = emergency."
                },
                {
                    question: "A gestational diabetic client is having her blood glucose monitored. During labor, her glucose is 190 mg/dL. Which nursing action is correct?",
                    choices: ["A. Give the client orange juice to stabilize glucose", "B. Administer insulin per protocol and continue monitoring", "C. This level is normal during labor — no action needed", "D. Withhold all IV fluids to reduce glucose level"],
                    correct: 1,
                    explanation: "Maternal hyperglycemia during labor causes fetal hyperinsulinemia. After delivery, the baby will be at risk for neonatal hypoglycemia (rebound). Target maternal glucose during labor is 70-110 mg/dL. Insulin is given per protocol.",
                    hint: "High maternal glucose → baby produces extra insulin → baby's glucose crashes after birth."
                }                ,
                {
                    question: "A client is 38 weeks pregnant and reports decreased fetal movement. After counting only 3 movements in 2 hours, what should the nurse instruct her to do?",
                    choices: ["A. Continue monitoring at home — 3 movements is normal", "B. Come to the hospital immediately for fetal monitoring (NST/BPP)", "C. Lie on the right side and count again in 4 more hours", "D. Drink ice cold water and recount movements"],
                    correct: 1,
                    explanation: "Kick counts (fetal movement counting) should show at least 10 movements in 2 hours. Only 3 movements is BELOW the threshold and requires immediate evaluation — non-stress test (NST) or biophysical profile (BPP). Decreased fetal movement can indicate fetal distress.",
                    hint: "Fetal movement < 10 in 2 hours = go to hospital NOW for fetal monitoring. Never wait."
                },
                {
                    question: "A client is in active labor and the nurse notices variable decelerations on the fetal monitor. What is the PRIORITY nursing action?",
                    choices: ["A. Notify the physician and prepare for immediate cesarean section", "B. Reposition the client to relieve cord compression (left lateral or knee-chest)", "C. Increase the oxytocin infusion to speed delivery", "D. Administer oxygen at 2 L/min via nasal cannula"],
                    correct: 1,
                    explanation: "Variable decelerations indicate umbilical cord compression. PRIORITY is repositioning: left lateral, right lateral, or knee-chest position to relieve pressure on the cord. Also give O2 at 8-10 L/min via face mask and stop oxytocin if running. Notify provider after initial interventions.",
                    hint: "Variable decels = cord compression → REPOSITION first! Stop Pitocin, give O2, call MD if not resolved."
                },
                {
                    question: "A postpartum client has a fundus that is displaced to the right of the midline. What is the MOST likely cause?",
                    choices: ["A. Retained placental fragments", "B. Full bladder", "C. Normal postpartum finding", "D. Uterine atony"],
                    correct: 1,
                    explanation: "A displaced (deviated) uterine fundus — usually to the RIGHT — indicates a FULL BLADDER. The distended bladder pushes the uterus to the side and prevents proper uterine contraction, which can cause postpartum hemorrhage. Intervention: have the client void or catheterize. Then reassess fundus.",
                    hint: "Fundus displaced to the right = FULL BLADDER! Have client void first, then reassess."
                },
                {
                    question: "A client delivered 30 minutes ago. The nurse assesses heavy vaginal bleeding, a soft 'boggy' uterus, and a fundus 2 cm above the umbilicus. What is the PRIORITY action?",
                    choices: ["A. Apply ice packs to the fundus", "B. Perform uterine fundal massage and notify provider", "C. Increase IV fluid rate immediately", "D. Check vital signs every 15 minutes"],
                    correct: 1,
                    explanation: "A boggy uterus with heavy bleeding = UTERINE ATONY (most common cause of postpartum hemorrhage). PRIORITY: perform fundal massage immediately to stimulate uterine contractions. If this doesn't work, provider may order oxytocin or other uterotonics. This is a life-threatening emergency.",
                    hint: "Boggy uterus + heavy bleeding = uterine atony = PPH! Fundal massage FIRST, then notify provider."
                },
                {
                    question: "A client at 10 weeks gestation has a positive Group B Streptococcus (GBS) culture. What is the appropriate management?",
                    choices: ["A. Treat with oral antibiotics for 10 days immediately", "B. Administer IV penicillin G during labor, not during pregnancy", "C. Perform a cesarean section to prevent neonatal infection", "D. No treatment needed — GBS clears on its own by delivery"],
                    correct: 1,
                    explanation: "GBS colonization is treated with IV penicillin G (or ampicillin) DURING LABOR — not during pregnancy (it would just recolonize). Treatment during labor prevents neonatal GBS disease. A C-section is NOT routinely indicated for GBS alone.",
                    hint: "GBS positive: treat with IV penicillin during LABOR, not during pregnancy. Time the antibiotics right!"
                },
                {
                    question: "A nurse is assessing a newborn at 1 minute after birth. Heart rate is 110 bpm, breathing is irregular with slow gasps, actively moving all extremities, cries when stimulated, and entire body is pink except for blue hands/feet. What is the APGAR score?",
                    choices: ["A. 5", "B. 7", "C. 8", "D. 9"],
                    correct: 1,
                    explanation: "APGAR: Appearance (body pink, extremities blue = 1), Pulse (HR 110 ≥ 100 = 2), Grimace (cries = 2), Activity (active movement = 2), Respiration (irregular gasps = 1). Total = 1+2+2+2+1 = 8. Wait — Grimace: cries when stimulated = 2. Respiration irregular = 1. Total = 8. Score ≥ 7 = reassuring.",
                    hint: "APGAR: Appearance(0-2) + Pulse(0-2) + Grimace(0-2) + Activity(0-2) + Respirations(0-2). ≥7 = good!"
                },
                {
                    question: "A client at 34 weeks gestation presents with sudden onset severe headache, visual disturbances, and blood pressure of 162/110 mmHg. What condition do these signs indicate?",
                    choices: ["A. Gestational hypertension (PIH)", "B. Severe preeclampsia / HELLP syndrome", "C. Eclampsia", "D. Placenta previa"],
                    correct: 1,
                    explanation: "BP ≥ 160/110 + severe headache + visual changes = SEVERE PREECLAMPSIA. If the client were to seize, it would become eclampsia. HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets) is a complication of severe preeclampsia. Priority: seizure precautions, magnesium sulfate, antihypertensives, notify provider.",
                    hint: "BP ≥ 160/110 + headache + visual changes = severe preeclampsia. Mag sulfate for seizure prevention!"
                },
                {
                    question: "A nurse is caring for a client on magnesium sulfate for preeclampsia. Which assessment finding requires the nurse to STOP the infusion?",
                    choices: ["A. Flushing and warmth at the infusion site", "B. Respiratory rate of 10/min and absent deep tendon reflexes", "C. Urine output of 35 mL/hour", "D. Mild sedation and drowsiness"],
                    correct: 1,
                    explanation: "Magnesium toxicity signs: respiratory rate < 12/min, loss of deep tendon reflexes (DTRs), urine output < 25-30 mL/hr, lethargy. RR of 10 + absent DTRs = STOP magnesium and notify provider. Antidote: calcium gluconate at bedside. Therapeutic Mg range: 4-7 mEq/L.",
                    hint: "Mag sulfate toxicity: RR < 12, absent DTRs, oliguria. Stop immediately! Antidote = calcium gluconate."
                }
            ],
            
            psychiatric: [
                {
                    question: "A client with bipolar disorder is in a manic episode. What is the priority nursing intervention?",
                    choices: ["A. Encourage group therapy participation", "B. Set consistent limits and boundaries", "C. Provide detailed explanations for procedures", "D. Allow unlimited visiting hours"],
                    correct: 1,
                    explanation: "Setting consistent limits helps provide structure and safety for clients in manic episodes who have impaired judgment and impulsivity.",
                    hint: "Manic clients need structure and safety — what intervention provides this?"
                },
                {
                    question: "A client states, 'I have a plan to end my life tonight.' What is the nurse's priority response?",
                    choices: ["A. Ask the client to describe the plan", "B. Leave to notify the provider immediately", "C. Stay with the client and ensure safety", "D. Administer PRN anxiolytic medication"],
                    correct: 2,
                    explanation: "When a client expresses suicidal intent with a plan, the priority is to stay with the client (never leave them alone) and ensure their immediate safety. Then notify the provider.",
                    hint: "Safety first — what's the most dangerous thing you could do right now?"
                },
                {
                    question: "A client with schizophrenia says, 'The TV is sending me secret messages.' This is an example of:",
                    choices: ["A. Delusion of grandeur", "B. Idea of reference", "C. Hallucination", "D. Loose association"],
                    correct: 1,
                    explanation: "Ideas of reference are false beliefs that events or objects in the environment have special personal significance (e.g., the TV is sending them messages).",
                    hint: "The client believes something external is directed specifically at them — what's the term?"
                },
                {
                    question: "A client is admitted after a sexual assault. Which nursing action takes priority?",
                    choices: ["A. Collecting forensic evidence", "B. Ensuring the client's physical safety and emotional support", "C. Obtaining a detailed history of the assault", "D. Contacting law enforcement"],
                    correct: 1,
                    explanation: "The client's physical safety and emotional support are the priority. Treat injuries, provide a safe environment, and offer a support person before forensic collection.",
                    hint: "Maslow's hierarchy — what comes first, physical/emotional needs or forensic needs?"
                },
                {
                    question: "Which therapeutic communication technique is the nurse using when saying, 'Tell me more about what you're feeling'?",
                    choices: ["A. Reflection", "B. Exploring", "C. Restating", "D. Offering general leads"],
                    correct: 1,
                    explanation: "Exploring encourages the client to describe their experience in more depth. It's an open-ended invitation to share without leading the client.",
                    hint: "The nurse is asking the client to go deeper into their feelings — not repeating or reflecting."
                },
                {
                    question: "A client with anorexia nervosa is on a refeeding protocol. Which complication should the nurse monitor for?",
                    choices: ["A. Hyperkalemia", "B. Refeeding syndrome (hypophosphatemia)", "C. Hyperglycemia", "D. Metabolic alkalosis"],
                    correct: 1,
                    explanation: "Refeeding syndrome occurs when malnourished clients are fed too rapidly. Insulin surge drives phosphate, potassium, and magnesium into cells, causing dangerous hypophosphatemia, cardiac arrhythmias, and potentially death.",
                    hint: "When starved cells suddenly get glucose, a critical electrolyte crashes — which one?"
                },
                {
                    question: "A client with PTSD avoids crowded places and has recurrent nightmares about combat. Which nursing intervention is most therapeutic?",
                    choices: ["A. Encourage the client to avoid discussing traumatic events", "B. Create a safe environment and use trauma-informed care principles", "C. Administer benzodiazepines as the primary treatment", "D. Insist the client attend group therapy immediately"],
                    correct: 1,
                    explanation: "Trauma-informed care prioritizes safety, trustworthiness, peer support, and empowerment. Forcing exposure or avoiding the topic entirely are both counterproductive. Build trust first.",
                    hint: "The foundation of trauma care is safety — physical AND emotional."
                },
                {
                    question: "A nurse is caring for a client experiencing alcohol withdrawal. Which finding indicates the most serious complication?",
                    choices: ["A. Mild hand tremors", "B. Nausea and insomnia", "C. Grand mal seizures and visual hallucinations", "D. Elevated heart rate of 100 bpm"],
                    correct: 2,
                    explanation: "Delirium tremens (DTs) is the most dangerous complication of alcohol withdrawal, occurring 48-72 hours after last drink. Symptoms: seizures, hallucinations, severe agitation, hyperthermia. Mortality can be 5-15% without treatment.",
                    hint: "The most severe form of alcohol withdrawal can be fatal — what are its hallmark signs?"
                },
                {
                    question: "A nurse is using the CIWA-Ar scale. What is it used to assess?",
                    choices: ["A. Severity of depression in inpatient settings", "B. Alcohol withdrawal severity to guide treatment decisions", "C. Cognitive function in elderly patients", "D. Pain level in non-verbal patients"],
                    correct: 1,
                    explanation: "The CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) measures 10 symptoms of alcohol withdrawal (tremor, sweating, anxiety, agitation, perceptual disturbances). Scores guide medication dosing (usually benzodiazepines).",
                    hint: "CIWA = tool to monitor alcohol withdrawal symptoms and guide treatment."
                },
                {
                    question: "A client with schizophrenia stops taking antipsychotic medication because of troublesome side effects. Which side effect is most commonly associated with non-adherence?",
                    choices: ["A. Dry mouth", "B. Extrapyramidal symptoms (EPS) including stiffness, akathisia, and tardive dyskinesia", "C. Mild sedation", "D. Headache"],
                    correct: 1,
                    explanation: "Extrapyramidal symptoms (EPS) — including muscle rigidity, tremors, akathisia (restless legs), and tardive dyskinesia (involuntary facial movements) — are the most distressing side effects of typical antipsychotics and the #1 reason for non-adherence.",
                    hint: "EPS = the movement-related side effects of antipsychotics. Which side effects are most bothersome?"
                },
                {
                    question: "A nurse is caring for a client who is actively hallucinating. Which nursing response is most therapeutic?",
                    choices: ["A. Agree with the hallucination to avoid agitating the client", "B. Firmly tell the client the voices are not real", "C. Acknowledge the client's experience without reinforcing the hallucination", "D. Ignore the behavior and redirect to a group activity"],
                    correct: 2,
                    explanation: "Best approach: acknowledge the client's distress ('I understand you're hearing something frightening') without agreeing that the voices are real. Don't argue or reinforce the hallucination. Build trust.",
                    hint: "Don't confirm OR deny the hallucination — acknowledge the FEELINGS."
                },
                {
                    question: "A client with borderline personality disorder threatens to harm herself if the nurse leaves the room. What is the most therapeutic response?",
                    choices: ["A. Stay in the room indefinitely to prevent harm", "B. Set consistent limits while ensuring safety and maintaining therapeutic boundaries", "C. Call security immediately", "D. Agree to stay all shift to build trust"],
                    correct: 1,
                    explanation: "BPD clients often use threats to avoid abandonment. The therapeutic response maintains clear, consistent limits while ensuring safety. Giving in reinforces manipulative behavior; abandoning the client escalates the crisis.",
                    hint: "BPD: maintain therapeutic LIMITS while validating feelings. Don't give in, don't abandon."
                },
                {
                    question: "A nurse is preparing to administer lithium. The client reports nausea, vomiting, and coarse hand tremors. The morning lithium level is 1.8 mEq/L. What is the priority action?",
                    choices: ["A. Administer the lithium with food to reduce GI upset", "B. Hold the lithium, notify the provider, and prepare to treat toxicity", "C. Reduce the dose by half and recheck in 4 hours", "D. Encourage fluid intake and give the scheduled dose"],
                    correct: 1,
                    explanation: "Lithium toxicity (>1.5 mEq/L): early signs include coarse tremors, GI distress, confusion. Therapeutic range: 0.6-1.2 mEq/L. At 1.8, HOLD the medication, notify provider, monitor for seizures. Treatment is supportive — no antidote.",
                    hint: "Lithium therapeutic: 0.6-1.2. Level 1.8 with symptoms = toxicity. What do you do?"
                }                ,
                {
                    question: "A client with schizophrenia says 'The government put a chip in my brain to track me.' How should the nurse respond therapeutically?",
                    choices: ["A. 'I understand why you believe that. I would be scared too.'", "B. 'That's not possible. No one can put chips in brains.'", "C. 'You seem frightened. Can you tell me more about what you're experiencing?'", "D. 'Let me explain why that's a hallucination, not a delusion.'"],
                    correct: 2,
                    explanation: "When a client states a delusion, the nurse should NEITHER reinforce it (option A implies agreement) NOR directly challenge/argue it (option B). The therapeutic response focuses on the client's FEELINGS and emotions, not the content of the delusion. Option C is empathetic and opens communication without reinforcing the false belief.",
                    hint: "Delusions: Don't reinforce, don't argue. Focus on the FEELING behind it: 'You seem frightened…'"
                },
                {
                    question: "A client on haloperidol (Haldol) develops sudden muscle rigidity, high fever (104°F), altered consciousness, and tachycardia. The nurse should suspect:",
                    choices: ["A. Tardive dyskinesia", "B. Akathisia", "C. Neuroleptic malignant syndrome (NMS)", "D. Extrapyramidal symptoms (EPS)"],
                    correct: 2,
                    explanation: "Neuroleptic Malignant Syndrome (NMS) is a life-threatening emergency: FEVER (hyperthermia), muscle RIGIDITY, altered CONSCIOUSNESS, autonomic instability (tachycardia, diaphoresis, labile BP). Stop the antipsychotic immediately and get emergency treatment. NMS has high mortality if untreated.",
                    hint: "NMS = FEVER + RIGIDITY + altered consciousness on antipsychotics. STOP the drug — it's a medical emergency!"
                },
                {
                    question: "A client who attempted suicide is admitted to the psychiatric unit. Which nursing action is the HIGHEST priority?",
                    choices: ["A. Assess the client's social support system", "B. Ensure a safe environment by removing all potentially harmful items", "C. Explore the reason for the suicide attempt", "D. Notify the client's family immediately"],
                    correct: 1,
                    explanation: "SAFETY is the highest priority — Maslow's hierarchy: physiological and safety needs first. Remove all potentially harmful items (sharp objects, cords, belts, medications). The environment must be safe BEFORE therapeutic communication, family notification, or exploring reasons.",
                    hint: "Suicidal client = SAFETY FIRST. Clear the environment of anything that could cause harm."
                },
                {
                    question: "A client with alcohol use disorder is admitted for detoxification. The nurse should anticipate which priority intervention within 24-72 hours of last drink?",
                    choices: ["A. Administering disulfiram (Antabuse) to deter drinking", "B. Monitoring for and treating alcohol withdrawal seizures with benzodiazepines", "C. Starting naltrexone therapy for alcohol cravings", "D. Providing nutritional supplements only"],
                    correct: 1,
                    explanation: "Alcohol withdrawal syndrome peaks at 24-72 hours and can be life-threatening — delirium tremens (DT's) can cause seizures, hallucinations, and death. Benzodiazepines (lorazepam, diazepam) are first-line to PREVENT and TREAT withdrawal seizures. Disulfiram is given AFTER detox for relapse prevention.",
                    hint: "Alcohol withdrawal peaks 24-72h. Danger = DTs and seizures. Benzos prevent/treat withdrawal seizures."
                },
                {
                    question: "A client with major depression is started on fluoxetine (Prozac). The nurse teaches the client that therapeutic effects will be seen in:",
                    choices: ["A. 2-4 hours after the first dose", "B. 24-48 hours of daily dosing", "C. 2-6 weeks of consistent daily dosing", "D. 3-6 months of consistent daily dosing"],
                    correct: 2,
                    explanation: "SSRIs like fluoxetine take 2-6 WEEKS to show full therapeutic effects. CRITICAL teaching point: clients must continue taking the medication even if they feel no benefit initially. The danger period is 2-4 weeks — enough energy returns before mood improves, increasing suicide risk. Monitor closely during this time.",
                    hint: "SSRIs take 2-6 WEEKS to work. Danger: client has energy to act before mood improves — watch for suicide!"
                },
                {
                    question: "A client with anorexia nervosa is in medical stabilization. Which nursing intervention is the PRIORITY on admission?",
                    choices: ["A. Weigh the client daily and record intake/output", "B. Monitor for cardiac dysrhythmias and electrolyte imbalances", "C. Begin a behavioral contract for weight gain", "D. Provide education about healthy body image"],
                    correct: 1,
                    explanation: "In anorexia, MEDICAL STABILITY is the priority. Severe malnutrition and electrolyte imbalances (especially hypokalemia and hypophosphatemia in refeeding syndrome) can cause FATAL cardiac dysrhythmias. Monitor ECG and electrolytes continuously. Behavioral therapy and education are important but secondary to preventing cardiac death.",
                    hint: "Anorexia emergency = electrolyte imbalances → cardiac arrest. Monitor K+, phosphorus, and ECG first!"
                },
                {
                    question: "A client states, 'I've decided to give all my belongings to my children and say goodbye to everyone.' How should the nurse interpret this?",
                    choices: ["A. The client is being generous and has good family relationships", "B. This is a possible sign of giving away possessions — a warning sign of suicide", "C. The client is planning to move and reorganize", "D. This behavior is normal in depressed clients"],
                    correct: 1,
                    explanation: "Giving away possessions is a CLASSIC warning sign of suicidal intent — it suggests the person is making final arrangements. Other warning signs: sudden calmness after depression (may have made a decision), saying goodbyes, researching methods. This requires immediate safety assessment and psychiatric evaluation.",
                    hint: "Giving away belongings + saying goodbyes = SUICIDE WARNING SIGN. Perform immediate safety assessment!"
                },
                {
                    question: "Which communication technique is MOST therapeutic when a client with depression says 'Nothing ever goes right for me'?",
                    choices: ["A. 'I'm sure things will get better soon. Try to stay positive!'", "B. 'You shouldn't say that. Many people have it much worse.'", "C. 'It sounds like you're feeling really hopeless right now. Tell me more.'", "D. 'Have you tried exercise and a healthy diet? It really helps.'"],
                    correct: 2,
                    explanation: "The therapeutic response uses EMPATHY and REFLECTION (mirroring feelings) and OPEN-ENDED questioning to encourage the client to express more. Options A and D give false reassurance. Option B dismisses feelings (deflection). Option C validates the emotion and invites therapeutic dialogue.",
                    hint: "Therapeutic communication: Reflect feelings, use open-ended questions. NEVER give false reassurance or compare suffering!"
                }
            ],
            
            leadership: [
                {
                    question: "A nurse manager notices that medication errors have increased on the unit. What is the priority action?",
                    choices: ["A. Discipline the nurses making errors", "B. Analyze the errors for system-based causes", "C. Increase supervision during medication administration", "D. Implement a punitive reporting system"],
                    correct: 1,
                    explanation: "A systems approach (root cause analysis) identifies underlying causes rather than blaming individuals. This is the foundation of a just culture.",
                    hint: "Modern safety culture focuses on systems, not individuals."
                },
                {
                    question: "Which task can the RN delegate to unlicensed assistive personnel (UAP)?",
                    choices: ["A. Administering oral medications", "B. Initial assessment of a new admission", "C. Recording vital signs on a stable client", "D. Teaching a client about a new medication"],
                    correct: 2,
                    explanation: "UAPs can perform routine tasks like vital signs on stable clients. Assessment, teaching, and medication administration require RN licensure.",
                    hint: "The 5 Rights of Delegation: Right task, circumstance, person, direction, supervision."
                },
                {
                    question: "A nurse receives report on 4 clients. Which client should be assessed first?",
                    choices: ["A. Client with a blood glucose of 180 mg/dL", "B. Client with a new onset of chest pain", "C. Client requesting pain medication", "D. Client due for a scheduled dressing change"],
                    correct: 1,
                    explanation: "New onset chest pain could indicate MI or PE — a life-threatening emergency. Use the ABCs (Airway, Breathing, Circulation) to prioritize.",
                    hint: "Which situation is potentially life-threatening and needs immediate assessment?"
                },
                {
                    question: "A nurse witnesses a coworker diverting narcotics. What is the appropriate action?",
                    choices: ["A. Confront the coworker privately", "B. Report to the charge nurse or supervisor immediately", "C. Document the observation in the client's chart", "D. Verify by checking the medication count at shift end"],
                    correct: 1,
                    explanation: "Drug diversion must be reported immediately to a supervisor. The nurse has a legal and ethical obligation to report. Do not confront or delay.",
                    hint: "This is a legal issue — what's the chain of command?"
                },
                {
                    question: "In disaster triage, a victim is not breathing after repositioning the airway. What color tag is assigned?",
                    choices: ["A. Red (immediate)", "B. Yellow (delayed)", "C. Green (minor)", "D. Black (expectant/deceased)"],
                    correct: 3,
                    explanation: "In disaster triage (START), if a victim is not breathing even after opening the airway, they are tagged black (expectant/deceased). Resources go to salvageable victims.",
                    hint: "In mass casualty, no breathing after airway repositioning = no further intervention."
                },
                {
                    question: "A charge nurse must assign 4 clients. Which client is most appropriate for a float nurse from the medical unit?",
                    choices: ["A. Post-op craniotomy requiring neuro checks every hour", "B. Stable client with pneumonia on IV antibiotics", "C. Client returning from cardiac catheterization", "D. Newly diagnosed diabetic requiring insulin drip titration"],
                    correct: 1,
                    explanation: "Float nurses should receive the most stable clients with predictable care needs. A stable pneumonia client on IV antibiotics is routine. The others require specialized knowledge or frequent assessment changes.",
                    hint: "Float nurses aren't specialized — give them the most stable, predictable client."
                },
                {
                    question: "An RN delegates blood glucose monitoring to a UAP. The UAP reports a result of 42 mg/dL. What should the RN do?",
                    choices: ["A. Ask the UAP to recheck the glucose", "B. Ask the UAP to give the client orange juice", "C. Assess the client personally and intervene", "D. Document the result and continue with other tasks"],
                    correct: 2,
                    explanation: "The RN cannot delegate assessment or clinical decision-making. A glucose of 42 is critically low — the RN must personally assess the client and implement the hypoglycemia protocol. UAPs can collect data, but the RN interprets and acts.",
                    hint: "UAPs collect data, but who must assess and make clinical decisions?"
                },
                {
                    question: "A nurse makes a medication error that does not harm the client. What is the appropriate action?",
                    choices: ["A. Do not report since no harm occurred", "B. Report the error to the charge nurse and complete an incident report", "C. Document the error in the client's medical record as a nursing note", "D. Inform only the client's family"],
                    correct: 1,
                    explanation: "All medication errors must be reported regardless of whether harm occurred. Complete an incident report (not in the medical chart), notify the provider, and document the client's assessment. Near-misses help improve systems.",
                    hint: "Even 'no harm' errors need reporting — it's about system improvement, not punishment."
                },
                {
                    question: "A nurse is using SBAR to communicate a change in client status. What does SBAR stand for?",
                    choices: ["A. Safety, Brevity, Assessment, Rationale", "B. Situation, Background, Assessment, Recommendation", "C. Symptoms, Baseline, Action, Response", "D. Status, Brief, Assess, Report"],
                    correct: 1,
                    explanation: "SBAR (Situation-Background-Assessment-Recommendation) is a structured communication tool used for handoffs and urgent provider notifications. It ensures critical information is communicated clearly and reduces miscommunication errors.",
                    hint: "SBAR = what's happening, what's the history, what I think, what I need."
                },
                {
                    question: "A nurse is triaging multiple victims arriving at the emergency department after a bus accident. Using the START triage system, which client is tagged RED (immediate)?",
                    choices: ["A. A conscious client with a fractured arm and stable vitals", "B. An apneic client who remains apneic after airway repositioning", "C. A client with respiratory rate of 28/min and no radial pulse", "D. A client with minor lacerations, walking and talking"],
                    correct: 2,
                    explanation: "START triage: RED = immediate life threat, salvageable. No radial pulse + RR >30 = hemodynamic instability = RED. Breathing >30 alone = RED. Walking wounded = GREEN. Apneic after repositioning = BLACK.",
                    hint: "RED = immediate but salvageable. RR >30 or absent pulse = RED tag."
                },
                {
                    question: "The nurse is planning care for 5 clients. Using Maslow's hierarchy, which client has the highest priority need?",
                    choices: ["A. A client asking about discharge medications", "B. A client who feels unsafe and fears their roommate", "C. A client with an oxygen saturation of 85% on room air", "D. A client requesting a second blanket"],
                    correct: 2,
                    explanation: "Maslow's hierarchy: Physiological → Safety → Love/Belonging → Esteem → Self-Actualization. An SpO2 of 85% is a critical physiological emergency (oxygenation) — the highest priority. Safety, warmth, and education come after.",
                    hint: "Maslow: Physiological needs are ALWAYS first. What threatens survival most immediately?"
                },
                {
                    question: "A newly graduated nurse is experiencing burnout. Which strategy is most effective in preventing nursing burnout?",
                    choices: ["A. Working extra shifts to feel more competent", "B. Seeking social support, self-care, and speaking with a mentor or EAP", "C. Transferring to a different department immediately", "D. Avoiding difficult patients to reduce stress"],
                    correct: 1,
                    explanation: "Burnout prevention requires self-care strategies (sleep, exercise, nutrition), social support (colleagues, friends, family), mentorship, and use of Employee Assistance Programs (EAP). Avoidance and overworking worsen burnout.",
                    hint: "Burnout requires rest, connection, and support — not more work or avoidance."
                },
                {
                    question: "A client refuses a blood transfusion based on religious beliefs (Jehovah's Witness). The client is alert and competent. What is the nurse's ethical obligation?",
                    choices: ["A. Administer the transfusion anyway since it's medically necessary", "B. Respect the client's decision and document accordingly", "C. Call the client's family to override the decision", "D. Request a court order to proceed with the transfusion"],
                    correct: 1,
                    explanation: "An alert, competent adult has the legal and ethical right to refuse any treatment, including life-saving treatment. Autonomy is the foundation. Document the refusal, ensure informed consent was given, notify the provider, and respect the decision.",
                    hint: "Autonomy = the right to refuse treatment. What must you do when a competent adult refuses care?"
                }                ,
                {
                    question: "The RN is caring for 4 clients. Which task is APPROPRIATE to delegate to the unlicensed assistive personnel (UAP)?",
                    choices: ["A. Assess a newly admitted client's pain and vital signs", "B. Provide teaching to a diabetic client about insulin injection technique", "C. Assist a stable post-op day 2 client with ambulation to the hallway", "D. Change a wound dressing on a client with a stage 3 pressure injury"],
                    correct: 2,
                    explanation: "UAP CAN assist stable clients with ambulation (mobility assistance is within their scope). UAP CANNOT: assess (assessment requires RN), teach (education requires RN or LPN), or perform wound care for complex wounds. The RN must delegate tasks within the UAP's scope of practice.",
                    hint: "UAP can do: ADLs, ambulation assistance, vitals (stable), bathing. Cannot: assess, teach, complex wound care."
                },
                {
                    question: "A nurse receives shift report on 5 clients. Which client should the nurse assess FIRST?",
                    choices: ["A. A client 1 day post-op hip replacement who needs pain medication (6/10)", "B. A client with chronic kidney disease awaiting afternoon dialysis", "C. A client with COPD whose SpO2 dropped from 94% to 84% in the last hour", "D. A client with diabetes awaiting breakfast tray who hasn't received insulin yet"],
                    correct: 2,
                    explanation: "SpO2 of 84% = severe hypoxemia = LIFE-THREATENING emergency. Oxygenation is always the top priority (Maslow: physiological needs). COPD client with rapidly dropping SpO2 must be assessed first. Pain medication and insulin are important but not immediately life-threatening.",
                    hint: "Priority: ALWAYS oxygenation first! SpO2 84% = respiratory emergency. ABC's always win."
                },
                {
                    question: "An RN suspects a co-worker is diverting narcotics (stealing patient medications). What is the appropriate action?",
                    choices: ["A. Confront the co-worker privately and give them a chance to explain", "B. Document observations and report to the charge nurse/supervisor immediately", "C. Continue monitoring and wait for more evidence before reporting", "D. Report directly to the State Board of Nursing"],
                    correct: 1,
                    explanation: "Diversion of controlled substances is a serious patient safety issue and a crime. The nurse must DOCUMENT observations and report to the charge nurse/supervisor through proper chain of command immediately. Waiting for more evidence puts patients at risk. The facility then decides whether to report to BON or law enforcement.",
                    hint: "Suspected diversion = patient safety risk. Document → report to charge nurse immediately. Don't confront alone."
                },
                {
                    question: "The nurse is completing a medication error report (incident report). The charge nurse reminds the nurse NOT to document in the client's medical record that an incident report was filed. This is because:",
                    choices: ["A. Incident reports are privileged quality improvement documents and not part of the medical record", "B. The incident report will be automatically linked to the medical record by the hospital system", "C. Incident reports are only filed if the client is harmed", "D. Documentation of the error itself is not required in the medical record"],
                    correct: 0,
                    explanation: "Incident reports (occurrence reports) are internal quality improvement/risk management documents that are SEPARATE from the medical record. Mentioning the incident report IN the chart can make it discoverable in lawsuits and defeat its privileged status. The nurse DOES document the actual event/facts in the chart, but NOT the existence of the incident report.",
                    hint: "Never mention 'incident report filed' in the chart — it's a separate QI document. Document facts of event, not the report."
                }
            ],
            
            safety: [
                {
                    question: "Which action demonstrates proper use of standard precautions?",
                    choices: ["A. Wearing gloves only when visible blood is present", "B. Using PPE based on anticipated exposure to body fluids", "C. Washing hands only after removing gloves", "D. Applying precautions only for diagnosed infections"],
                    correct: 1,
                    explanation: "Standard precautions require using PPE based on the anticipated exposure to blood, body fluids, secretions, and excretions — for ALL patients.",
                    hint: "Standard precautions apply to ALL patients based on exposure risk, not diagnosis."
                },
                {
                    question: "A nurse enters a client's room and finds the client unresponsive on the floor. What is the first action?",
                    choices: ["A. Call a code blue", "B. Check for responsiveness and call for help", "C. Begin chest compressions", "D. Retrieve the AED"],
                    correct: 1,
                    explanation: "Per BLS guidelines: first check responsiveness (tap and shout), then call for help/activate emergency response. Don't assume cardiac arrest.",
                    hint: "BLS sequence: Check → Call → Compress → Defibrillate."
                },
                {
                    question: "Which client requires airborne precautions?",
                    choices: ["A. Client with MRSA wound infection", "B. Client with active pulmonary tuberculosis", "C. Client with C. difficile", "D. Client with RSV"],
                    correct: 1,
                    explanation: "Airborne precautions (N95 respirator, negative pressure room) are required for TB, measles, varicella, and disseminated herpes zoster. Remember: 'My Chicken Hez TB' (Measles, Chickenpox, Herpes zoster, TB).",
                    hint: "Which diseases spread via tiny droplet nuclei that float in the air?"
                },
                {
                    question: "A client is restrained. How often should the nurse assess circulation, sensation, and movement?",
                    choices: ["A. Every 4 hours", "B. Every 2 hours", "C. Every 15-30 minutes per policy", "D. Once per shift"],
                    correct: 2,
                    explanation: "Restraint checks should occur every 15-30 minutes (per facility policy) to assess circulation, sensation, movement, skin integrity, and need for toileting/fluids.",
                    hint: "Restraints can compromise circulation quickly — how often is frequent enough?"
                },
                {
                    question: "A nurse accidentally sustains a needlestick injury. What is the first action?",
                    choices: ["A. Report to the supervisor", "B. Wash the site immediately with soap and water", "C. Complete an incident report", "D. Have blood drawn for baseline labs"],
                    correct: 1,
                    explanation: "The first action after a needlestick is to wash the site immediately with soap and water. Then report, get baseline labs, and complete an incident report.",
                    hint: "Before paperwork or reporting — what physically reduces infection risk right now?"
                },
                {
                    question: "A client with C. difficile infection requires which type of isolation precautions?",
                    choices: ["A. Airborne precautions", "B. Droplet precautions", "C. Contact precautions with soap and water hand hygiene", "D. Standard precautions only"],
                    correct: 2,
                    explanation: "C. difficile requires contact precautions (gown + gloves). Critically, alcohol-based hand sanitizer does NOT kill C. diff spores — use soap and water. Private room preferred.",
                    hint: "C. diff spores are resistant to alcohol gel — what must you use instead?"
                },
                {
                    question: "Which client is at highest risk for falls and requires additional safety interventions?",
                    choices: ["A. 35-year-old post-appendectomy, ambulating independently", "B. 78-year-old on multiple antihypertensives with a history of falls", "C. 50-year-old with a fractured wrist, alert and oriented", "D. 28-year-old postpartum client, day 1"],
                    correct: 1,
                    explanation: "Age >65, polypharmacy (especially antihypertensives causing orthostatic hypotension), and fall history are the strongest risk factors. This client needs bed alarm, non-skid socks, and frequent rounding.",
                    hint: "Age + BP medications + previous falls = a trifecta of fall risk factors."
                },
                {
                    question: "A nurse is caring for a client in droplet precautions. Which PPE is required when entering the room?",
                    choices: ["A. N95 respirator and gown", "B. Surgical mask within 3 feet (or upon room entry per policy)", "C. Full face shield only", "D. Gloves and gown only"],
                    correct: 1,
                    explanation: "Droplet precautions (influenza, pertussis, meningococcal disease) require a surgical mask. Many facilities require masking upon room entry. N95 is for airborne precautions (TB, measles, varicella).",
                    hint: "Droplets are larger than airborne particles — a regular surgical mask is sufficient."
                },
                {
                    question: "A nurse is preparing to give medications through an NG tube. Which action is the priority before instilling any medication?",
                    choices: ["A. Check medication compatibility", "B. Verify tube placement by aspirating gastric contents and checking pH", "C. Flush the tube with 60 mL of water", "D. Elevate the head of bed to 90 degrees"],
                    correct: 1,
                    explanation: "Verifying NG tube placement before every use is essential — aspiration of gastric contents with pH <5.5 confirms placement in the stomach. Instilling medications into a displaced tube (e.g., in the lungs) is a potentially fatal error.",
                    hint: "Tube displacement = medication goes into the wrong place. What do you check FIRST?"
                },
                {
                    question: "A nurse is preparing a sterile field for a procedure. The outer edge (1-inch border) of the sterile drape is considered:",
                    choices: ["A. Sterile and safe for all items", "B. Non-sterile — considered contaminated", "C. Only contaminated if touched by gloved hands", "D. Sterile if covered with a sterile towel"],
                    correct: 1,
                    explanation: "The 1-inch border around a sterile drape is considered non-sterile (contaminated) because it hangs over the edge and may contact non-sterile surfaces. All sterile items must be placed within the sterile field, away from the border.",
                    hint: "The edges of the sterile field = contaminated. Stay within the interior."
                },
                {
                    question: "Which client is most appropriate to place in a room with another client (cohorting)?",
                    choices: ["A. A client with MRSA and a client with active influenza", "B. Two clients diagnosed with the same strain of MRSA", "C. A client with VRE and an immunosuppressed client", "D. A client with active TB and a client with bronchitis"],
                    correct: 1,
                    explanation: "Cohorting (placing clients with the same infection together) is acceptable and reduces the need for single rooms. Two clients with the same organism (same MRSA strain) can share a room safely.",
                    hint: "Cohort = same bug together. Never mix infections or place with immunosuppressed clients."
                },
                {
                    question: "A nurse is giving a medication to a client and realizes the patient's name on the MAR doesn't match the wristband. What should the nurse do?",
                    choices: ["A. Ask the client to verbally confirm their name and give the medication", "B. Withhold the medication and clarify the discrepancy before proceeding", "C. Give the medication since the dose and drug name are correct", "D. Ask the family to confirm identity"],
                    correct: 1,
                    explanation: "Any discrepancy in patient identification must be resolved BEFORE giving any medication. This is a critical safety moment — wrong-patient errors kill people. Use 2 identifiers (name + date of birth or MRN) every time.",
                    hint: "Discrepancy in ID = STOP. Never give medication until identity is confirmed."
                },
                {
                    question: "Which hand hygiene method is most effective against Clostridioides difficile (C. diff) spores?",
                    choices: ["A. Alcohol-based hand sanitizer (ABHR)", "B. Soap and water with vigorous scrubbing for at least 20 seconds", "C. Chlorhexidine gluconate foam", "D. Antiseptic wipes"],
                    correct: 1,
                    explanation: "C. diff forms spores that are resistant to alcohol. Soap and water (physical removal through friction and rinsing) is the ONLY effective hand hygiene method for C. diff. This is a critical concept tested frequently on NCLEX.",
                    hint: "Alcohol kills most germs — but C. diff spores laugh at alcohol. What removes them physically?"
                }
            ],
            
            nutrition: [
                {
                    question: "A client with diabetes asks about alcohol consumption. What should the nurse include in the teaching?",
                    choices: ["A. Alcohol is prohibited for all diabetic clients", "B. Alcohol can cause delayed hypoglycemia and should be consumed with food", "C. Only wine is acceptable for diabetic clients", "D. Alcohol has no effect on blood glucose levels"],
                    correct: 1,
                    explanation: "Alcohol inhibits gluconeogenesis in the liver, causing delayed hypoglycemia. Diabetic clients should always eat when drinking alcohol.",
                    hint: "Alcohol affects the liver's glucose production — what could happen hours later?"
                },
                {
                    question: "A client with chronic kidney disease should limit intake of which nutrients?",
                    choices: ["A. Carbohydrates and fiber", "B. Sodium, potassium, and phosphorus", "C. Vitamins A and C", "D. Iron and calcium"],
                    correct: 1,
                    explanation: "CKD clients must restrict sodium (fluid retention), potassium (hyperkalemia risk), and phosphorus (bone disease). These electrolytes accumulate when kidneys can't excrete them.",
                    hint: "Damaged kidneys can't excrete these three electrolytes — which ones?"
                },
                {
                    question: "A client taking an MAO inhibitor should avoid which food?",
                    choices: ["A. Fresh fruits and vegetables", "B. Aged cheese and cured meats", "C. Whole grain bread", "D. Low-fat dairy products"],
                    correct: 1,
                    explanation: "MAOIs + tyramine-rich foods (aged cheese, cured meats, red wine, soy sauce) can cause a hypertensive crisis. Teach clients to avoid these foods strictly.",
                    hint: "Tyramine-rich foods + MAOIs = dangerously high blood pressure."
                },
                {
                    question: "Which diet is appropriate for a client with celiac disease?",
                    choices: ["A. Low-residue diet", "B. Gluten-free diet", "C. DASH diet", "D. High-protein diet"],
                    correct: 1,
                    explanation: "Celiac disease is an autoimmune reaction to gluten (found in wheat, barley, rye). A strict gluten-free diet is the only treatment.",
                    hint: "Celiac disease damages the small intestine when a specific protein is consumed."
                },
                {
                    question: "A client is receiving total parenteral nutrition (TPN). Which lab value should the nurse monitor most frequently?",
                    choices: ["A. Hemoglobin", "B. Blood glucose", "C. Serum albumin", "D. BUN"],
                    correct: 1,
                    explanation: "TPN contains high concentrations of dextrose, which can cause hyperglycemia. Blood glucose should be monitored every 4-6 hours initially.",
                    hint: "TPN is basically sugar water + nutrients delivered IV — what goes up?"
                },
                {
                    question: "A client with iron-deficiency anemia is prescribed ferrous sulfate. Which teaching is correct?",
                    choices: ["A. Take with milk to prevent stomach upset", "B. Take on an empty stomach with vitamin C to enhance absorption", "C. Take with antacids for better absorption", "D. Expect light-colored stools"],
                    correct: 1,
                    explanation: "Iron is best absorbed on an empty stomach. Vitamin C (orange juice) enhances absorption. Avoid taking with dairy, antacids, or tea (they decrease absorption). Stools will turn dark/black — this is normal.",
                    hint: "Vitamin C + empty stomach = best iron absorption. What color will stools turn?"
                },
                {
                    question: "A client on a sodium-restricted diet asks which food to avoid. The nurse should recommend avoiding:",
                    choices: ["A. Fresh fruits and vegetables", "B. Canned soups and processed meats", "C. Grilled chicken breast", "D. Brown rice and oatmeal"],
                    correct: 1,
                    explanation: "Canned soups, processed meats (bacon, deli meats, hot dogs), pickles, and soy sauce are extremely high in sodium. Fresh, unprocessed foods are naturally low in sodium.",
                    hint: "Processed and canned foods are loaded with sodium for preservation."
                },
                {
                    question: "A client with hepatic encephalopathy should have which dietary modification?",
                    choices: ["A. High-protein diet to promote healing", "B. Low-protein diet to reduce ammonia production", "C. High-fat diet for energy", "D. No dietary restrictions needed"],
                    correct: 1,
                    explanation: "In hepatic encephalopathy, the damaged liver can't convert ammonia to urea. Protein metabolism produces ammonia, so protein intake must be restricted to reduce ammonia levels and neurological symptoms.",
                    hint: "The liver can't process ammonia — what macronutrient produces ammonia when metabolized?"
                },
                {
                    question: "A client with phenylketonuria (PKU) should avoid which food?",
                    choices: ["A. Rice and corn", "B. High-phenylalanine foods: meat, fish, eggs, dairy, nuts, and products containing aspartame", "C. All citrus fruits", "D. Complex carbohydrates"],
                    correct: 1,
                    explanation: "PKU is an inability to metabolize phenylalanine (amino acid). Accumulation causes brain damage. Avoid high-protein foods and aspartame (contains phenylalanine — the 'PKU warning' on diet soda). Low-phenylalanine formula is used.",
                    hint: "PKU = can't break down phenylalanine. What foods are high in amino acids?"
                },
                {
                    question: "A post-surgical client has a poor appetite. Which intervention best promotes wound healing through nutrition?",
                    choices: ["A. Increase carbohydrate intake for energy", "B. Ensure adequate protein, vitamin C, and zinc intake", "C. Restrict fats to reduce inflammation", "D. Encourage high-sodium foods to improve fluid balance"],
                    correct: 1,
                    explanation: "Wound healing requires: protein (collagen formation), vitamin C (collagen synthesis), zinc (immune function and cell division). Deficiency in any delays healing. Protein is the most critical macronutrient.",
                    hint: "Collagen = protein backbone of wound healing. What nutrients build collagen?"
                },
                {
                    question: "A client with gout is counseled about dietary modifications. Which foods should the client limit?",
                    choices: ["A. Complex carbohydrates and fiber", "B. Low-fat dairy products", "C. Organ meats, shellfish, and alcohol (especially beer)", "D. Fresh fruits and vegetables"],
                    correct: 2,
                    explanation: "Gout is caused by uric acid crystal deposits. Purine-rich foods (organ meats, anchovies, shellfish) and alcohol (beer especially) increase uric acid. Encourage fluids, low-fat dairy, and limit high-purine foods.",
                    hint: "Gout = uric acid crystals. Purines → uric acid. What foods are high in purines?"
                },
                {
                    question: "A nurse is caring for a client with anorexia who refuses to eat. Which nursing action best addresses this in the short term?",
                    choices: ["A. Force-feed the client to prevent malnutrition", "B. Establish a structured meal plan with consistent times, sit with the client, and provide small frequent meals", "C. Leave trays in the room and allow the client to eat whenever they want", "D. Offer high-calorie snacks only at night when the client is less anxious"],
                    correct: 1,
                    explanation: "Structured meal times, sitting with the client (supervision to prevent hiding food), and small frequent offerings are evidence-based strategies for anorexia nervosa. A multidisciplinary team approach with consistent, supportive, non-pressuring presence is key.",
                    hint: "Anorexia requires structure, supervision, and a therapeutic approach — not force or avoidance."
                },
                {
                    question: "A client with chronic liver failure is placed on a low-sodium diet of 2,000 mg/day. Which food choice by the client shows understanding?",
                    choices: ["A. 'I'll have canned chicken noodle soup for lunch.'", "B. 'I'll cook chicken breast with herbs and lemon juice.'", "C. 'I'll eat dill pickles and a hot dog for dinner.'", "D. 'I'll use soy sauce instead of salt to season my food.'"],
                    correct: 1,
                    explanation: "Fresh chicken with herbs is low-sodium. Canned soups (~800-900 mg/serving), hot dogs (~500-600 mg), pickles (~700-900 mg), and soy sauce (~900 mg/Tbsp) are all extremely high in sodium and should be avoided.",
                    hint: "Fresh, unprocessed, home-cooked food = low sodium. Canned/processed = high sodium."
                }
            ],
            
            fluids: [
                {
                    question: "A client has hypernatremia. Which IV fluid would the nurse expect to be prescribed?",
                    choices: ["A. Normal saline (0.9% NaCl)", "B. Hypotonic solution (0.45% NaCl)", "C. Hypertonic saline (3% NaCl)", "D. Lactated Ringer's solution"],
                    correct: 1,
                    explanation: "Hypotonic solutions provide free water to dilute serum sodium in hypernatremia.",
                    hint: "High sodium needs dilution — what type of solution provides free water?"
                },
                {
                    question: "A client's potassium level is 6.2 mEq/L. Which ECG change should the nurse expect?",
                    choices: ["A. Flattened T waves", "B. Tall, peaked T waves", "C. Prolonged QT interval", "D. ST elevation"],
                    correct: 1,
                    explanation: "Hyperkalemia (>5.0) causes tall, peaked T waves on ECG. Severe hyperkalemia can lead to widened QRS, absent P waves, and cardiac arrest.",
                    hint: "High K+ = tall T waves. Low K+ = flat T waves + U waves."
                },
                {
                    question: "A client has a serum calcium of 7.0 mg/dL. Which assessment finding would the nurse expect?",
                    choices: ["A. Decreased deep tendon reflexes", "B. Positive Trousseau's and Chvostek's signs", "C. Constipation", "D. Shortened QT interval"],
                    correct: 1,
                    explanation: "Hypocalcemia (<8.5) causes neuromuscular irritability. Trousseau's sign (carpal spasm with BP cuff) and Chvostek's sign (facial twitching when tapping facial nerve) are classic indicators.",
                    hint: "Low calcium = muscles get twitchy. What are the two classic bedside tests?"
                },
                {
                    question: "A client is receiving a blood transfusion and develops fever, chills, and back pain 15 minutes into the infusion. What should the nurse do first?",
                    choices: ["A. Slow the infusion rate", "B. Stop the transfusion immediately", "C. Administer diphenhydramine", "D. Obtain a urine specimen"],
                    correct: 1,
                    explanation: "These are signs of a hemolytic transfusion reaction — a medical emergency. Stop the transfusion immediately, keep the IV open with NS, and notify the provider.",
                    hint: "Fever + chills + back pain during transfusion = the most dangerous reaction."
                },
                {
                    question: "A client in heart failure has 3+ pitting edema and crackles in the lungs. Which type of fluid imbalance is present?",
                    choices: ["A. Fluid volume deficit (dehydration)", "B. Fluid volume excess (hypervolemia)", "C. Third-spacing", "D. Isotonic dehydration"],
                    correct: 1,
                    explanation: "Edema + crackles (pulmonary congestion) = fluid volume excess. The heart can't pump effectively, causing fluid to back up into the lungs and periphery.",
                    hint: "The heart is failing as a pump — where does the fluid go?"
                },
                {
                    question: "A client has a magnesium level of 1.0 mEq/L. Which assessment finding does the nurse expect?",
                    choices: ["A. Bradycardia and hypertension", "B. Tremors, hyperreflexia, and cardiac arrhythmias", "C. Decreased deep tendon reflexes", "D. Constipation and polyuria"],
                    correct: 1,
                    explanation: "Hypomagnesemia (<1.5 mEq/L) causes neuromuscular excitability: tremors, hyperactive DTRs, seizures, and cardiac arrhythmias (especially torsades de pointes). Often occurs with hypokalemia and hypocalcemia.",
                    hint: "Low magnesium = excitable nerves and muscles, just like low calcium."
                },
                {
                    question: "A nurse is administering packed red blood cells. Within the first 15 minutes, the client reports itching and develops hives. What should the nurse do?",
                    choices: ["A. Stop the transfusion — this is a hemolytic reaction", "B. Stop the transfusion, keep IV open, notify provider — this is an allergic reaction", "C. Slow the rate and continue monitoring", "D. Administer epinephrine immediately"],
                    correct: 1,
                    explanation: "Urticaria (hives) and itching without fever or hemodynamic instability indicate a mild allergic reaction. Stop the transfusion, maintain IV access with NS, notify the provider. Diphenhydramine may be ordered. If anaphylaxis develops, epinephrine is needed.",
                    hint: "Hives + itching (no fever/back pain) = allergic reaction, not hemolytic."
                },
                {
                    question: "A client with metabolic alkalosis (pH 7.50, HCO3 32) would most likely have which history?",
                    choices: ["A. Diabetic ketoacidosis", "B. Prolonged nasogastric suctioning or vomiting", "C. COPD with CO2 retention", "D. Renal failure"],
                    correct: 1,
                    explanation: "Prolonged vomiting or NG suctioning removes hydrochloric acid (HCl) from the stomach, causing metabolic alkalosis (high pH, high HCO3). Also caused by excessive antacid use or hypokalemia.",
                    hint: "Losing stomach acid (HCl) shifts the body toward alkalosis — what causes acid loss?"
                },
                {
                    question: "A client's ABG results are: pH 7.48, PaCO2 32, HCO3 24. What is the acid-base disorder?",
                    choices: ["A. Respiratory acidosis", "B. Metabolic alkalosis", "C. Respiratory alkalosis (uncompensated)", "D. Metabolic acidosis"],
                    correct: 2,
                    explanation: "pH high (alkalosis) + low CO2 (blown off CO2 = respiratory cause) + normal HCO3 (no metabolic compensation) = uncompensated respiratory alkalosis. Common causes: hyperventilation, anxiety, pain, mechanical ventilation.",
                    hint: "High pH + low CO2 = alkalosis from the respiratory system. HCO3 normal = uncompensated."
                },
                {
                    question: "A client is receiving 3% hypertonic saline for severe hyponatremia. What is the most critical nursing assessment?",
                    choices: ["A. Urine output and color", "B. Neurological status and serum sodium levels hourly", "C. Daily weight only", "D. Skin turgor and mucous membranes"],
                    correct: 1,
                    explanation: "Hypertonic saline must be infused slowly. Correcting sodium too rapidly causes osmotic demyelination syndrome (ODS/central pontine myelinolysis) — permanent brain damage. Monitor neuro status and sodium hourly. Max correction: 8-12 mEq/L per 24 hours.",
                    hint: "Too-fast sodium correction = ODS (brain damage). Monitor neurological status and sodium closely."
                },
                {
                    question: "A client is prescribed IV potassium to treat hypokalemia. The nurse knows IV potassium should never be given as a bolus because it can cause:",
                    choices: ["A. Severe hypotension", "B. Cardiac arrest from rapid depolarization", "C. Metabolic alkalosis", "D. Renal failure"],
                    correct: 1,
                    explanation: "Rapid IV potassium causes fatal cardiac dysrhythmias. It must always be diluted in IV solution and infused at a controlled rate (max 10-20 mEq/hr via peripheral line). Never give undiluted or by IV push.",
                    hint: "Potassium and the heart: too fast = lethal arrhythmia."
                },
                {
                    question: "A client with heart failure is on a fluid restriction of 1,500 mL/day. Which approach best helps manage thirst?",
                    choices: ["A. Allow extra fluid in the morning to prevent afternoon thirst", "B. Offer hard candy, ice chips (counted as fluid), and space fluids throughout the day", "C. Encourage the client to drink as much as needed since fluid restriction is rarely enforced", "D. Limit all fluids to meals only to make restriction easier"],
                    correct: 1,
                    explanation: "To manage thirst on fluid restriction: offer small amounts frequently, use ice chips (counted — 1 cup ice = ½ cup fluid), hard candy or lemon swabs stimulate saliva. Space fluids throughout the day: 800 mL days, 400 mL evenings, 300 mL nights.",
                    hint: "Ice chips count as fluid (half volume). Space fluids to avoid thirst spikes."
                },
                {
                    question: "A client develops sudden confusion, seizures, and hyponatremia (Na+ 118 mEq/L) after a transurethral resection of the prostate (TURP). The nurse suspects:",
                    choices: ["A. Hypertensive crisis", "B. TURP syndrome (dilutional hyponatremia from absorption of irrigating fluid)", "C. Anesthesia-related encephalopathy", "D. Urinary tract infection with sepsis"],
                    correct: 1,
                    explanation: "TURP syndrome occurs when large amounts of hypotonic irrigating fluid are absorbed through open venous sinuses during the procedure, causing dilutional hyponatremia, water intoxication, and cerebral edema. Symptoms: confusion, seizures, bradycardia, hypertension.",
                    hint: "TURP procedure + confusion + very low sodium = irrigating fluid absorbed into bloodstream."
                }
            ],
            
            ch40_bowel_elimination: [
                {
                    question: "Name the parts of the large intestine in order:",
                    choices: [
                        "A. Cecum → Sigmoid → Transverse → Descending → Ascending → Rectum",
                        "B. Cecum → Ascending → Transverse → Descending → Sigmoid → Rectum",
                        "C. Rectum → Sigmoid → Descending → Transverse → Ascending → Cecum",
                        "D. Ascending → Cecum → Transverse → Sigmoid → Descending → Rectum"
                    ],
                    correct: 1,
                    explanation: "The large intestine flows: Cecum → Ascending colon → Transverse colon → Descending colon → Sigmoid colon → Rectum → Anal canal. Remember: 'Can't Always Tell Doctors Seriously Refuse'",
                    hint: "💭 Think of it as going up, across, down: Cecum → up → across → down → S-curve → exit"
                },
                {
                    question: "What is the primary function of the large intestine?",
                    choices: [
                        "A. Digestion of proteins and carbohydrates",
                        "B. Absorption of nutrients and vitamins",
                        "C. Absorption of water and electrolytes, formation of feces",
                        "D. Production of digestive enzymes"
                    ],
                    correct: 2,
                    explanation: "The large intestine's main job is absorbing water and electrolytes from the remaining intestinal contents and forming/storing feces for elimination. Small intestine does most nutrient absorption.",
                    hint: "🌊 Large intestine = the body's water recycling center + waste storage"
                },
                {
                    question: "What stimulates the defecation reflex?",
                    choices: [
                        "A. Hormonal changes in blood glucose",
                        "B. Distention of the rectum by feces",
                        "C. Increased peristalsis in the stomach",
                        "D. Changes in body temperature"
                    ],
                    correct: 1,
                    explanation: "When feces enters and stretches the rectum, stretch receptors send signals to the spinal cord and brain, triggering the urge to defecate. This is the normal defecation reflex.",
                    hint: "📏 Think stretch receptors - when the rectum gets full, it sends a message!"
                },
                {
                    question: "Define constipation and list its major causes:",
                    choices: [
                        "A. Less than 5 BMs per day; caused by too much fiber",
                        "B. Less than 3 BMs per week, hard dry stools; caused by inadequate fiber/fluids, immobility, medications",
                        "C. Liquid stools more than 3 times daily; caused by infections",
                        "D. Normal formed stools; caused by stress"
                    ],
                    correct: 1,
                    explanation: "Constipation = fewer than 3 bowel movements per week with hard, dry stools and straining. Major causes: inadequate fiber/fluids, lack of exercise, opioids, antacids.",
                    hint: "🚽 Less than 3 per week + hard & dry = constipation. Think: fiber, fluids, movement!"
                },
                {
                    question: "What is the difference between acute and chronic diarrhea?",
                    choices: [
                        "A. Acute lasts >4 weeks, chronic lasts <2 weeks",
                        "B. Acute is always bloody, chronic is never bloody",
                        "C. Acute lasts <2 weeks (often infectious), chronic lasts >4 weeks (underlying disease)",
                        "D. No difference - both are the same condition"
                    ],
                    correct: 2,
                    explanation: "Acute diarrhea: sudden onset, lasts <2 weeks, often infectious. Chronic diarrhea: persistent >4 weeks, may indicate underlying disease like IBD, IBS, or malabsorption.",
                    hint: "⏰ Acute = short & sudden (think infection). Chronic = long-term (think disease)"
                },
                {
                    question: "Define fecal impaction and describe its classic signs:",
                    choices: [
                        "A. Normal stool formation; signs include regular bowel movements",
                        "B. Soft liquid stool; signs include frequent watery diarrhea",
                        "C. Hard, dry stool mass that cannot be expelled; signs include no BM for days, cramping, liquid seepage",
                        "D. Gas accumulation; signs include belching and hiccups"
                    ],
                    correct: 2,
                    explanation: "Fecal impaction = hard, dry stool mass stuck in rectum that can't be expelled. Classic signs: no BM for days, cramping, rectal fullness, paradoxical liquid stool seepage around the impaction.",
                    hint: "🧱 Think of it like a cork in a bottle - liquid can seep around the hard blockage"
                },
                {
                    question: "What are the characteristics of different colostomy locations?",
                    choices: [
                        "A. All colostomies produce the same consistency of stool",
                        "B. Ascending (liquid), Transverse (mushy), Descending/Sigmoid (formed)",
                        "C. Ascending (formed), Transverse (liquid), Descending (mushy)",
                        "D. Location doesn't affect stool consistency"
                    ],
                    correct: 1,
                    explanation: "The further along the colon, the more water is absorbed: Ascending colostomy = liquid drainage, Transverse = semi-formed/mushy, Descending/Sigmoid = formed stool.",
                    hint: "💧 Water absorption increases as you go along the colon: liquid → mushy → formed"
                },
                {
                    question: "List 5 important questions for bowel elimination assessment:",
                    choices: [
                        "A. Only ask about pain and nausea",
                        "B. Usual pattern/frequency, recent changes, stool characteristics, symptoms, current medications",
                        "C. Only focus on current bowel movements",
                        "D. Ask about diet but nothing else"
                    ],
                    correct: 1,
                    explanation: "Comprehensive bowel assessment includes: 1) Normal pattern/frequency 2) Recent changes 3) Stool characteristics (color, consistency) 4) Associated symptoms 5) Current medications affecting elimination.",
                    hint: "📋 Think holistic: normal vs. now, what it looks like, what hurts, what drugs they take"
                },
                {
                    question: "What are normal stool characteristics?",
                    choices: [
                        "A. Green color, liquid consistency, 10 times daily",
                        "B. Brown color, soft formed consistency, 1-3 times daily to 3 times weekly",
                        "C. White color, hard consistency, once monthly",
                        "D. Red color, watery consistency, constantly"
                    ],
                    correct: 1,
                    explanation: "Normal stool: brown color (from bile), soft but formed consistency, tubular shape, frequency ranges from 3 times daily to 3 times weekly. Wide variation in 'normal' is acceptable.",
                    hint: "💩 Normal = brown, soft & formed, somewhere between 3/day to 3/week"
                },
                {
                    question: "What stool characteristics should be reported immediately?",
                    choices: [
                        "A. Brown color and formed consistency",
                        "B. Blood (bright red or black/tarry), very pale/clay-colored, severe consistency changes",
                        "C. Slight variations in daily frequency",
                        "D. Mild changes in shape"
                    ],
                    correct: 1,
                    explanation: "REPORT IMMEDIATELY: Blood (red = lower GI bleed, black/tarry = upper GI bleed), clay-colored (liver/bile issues), mucus, parasites, severe consistency changes.",
                    hint: "🚨 Blood, weird colors, or drastic changes = call the provider NOW!"
                },
                {
                    question: "How does diet affect bowel elimination?",
                    choices: [
                        "A. Diet has no effect on bowel movements",
                        "B. Only protein affects elimination",
                        "C. Fiber promotes normal elimination, fluids prevent hard stool, gas-producing foods cause flatulence",
                        "D. Carbohydrates always cause diarrhea"
                    ],
                    correct: 2,
                    explanation: "Diet directly affects elimination: Fiber adds bulk and promotes regularity, adequate fluids prevent hard stools, gas-producing foods (beans, cabbage) can cause flatulence/cramping.",
                    hint: "🥬 Fiber = bulk, Fluids = soft, Gas foods = toots! Remember the fiber-fluid connection"
                },
                {
                    question: "List 3 medications that commonly cause constipation:",
                    choices: [
                        "A. Antibiotics, vitamins, aspirin",
                        "B. Opioid analgesics, antacids with aluminum/calcium, anticholinergics",
                        "C. Laxatives, stool softeners, fiber supplements",
                        "D. Antidiarrheals only"
                    ],
                    correct: 1,
                    explanation: "Major constipating medications: Opioids (morphine, oxycodone), antacids containing aluminum or calcium, anticholinergics, iron supplements, some antidepressants.",
                    hint: "💊 Remember: Opioids plug you up, antacids with metals bind things up"
                },
                {
                    question: "How does immobility affect bowel function?",
                    choices: [
                        "A. Increases bowel motility and prevents constipation",
                        "B. Has no effect on elimination patterns",
                        "C. Decreases peristalsis, weakens abdominal muscles, increases constipation risk",
                        "D. Only affects urination, not defecation"
                    ],
                    correct: 2,
                    explanation: "Immobility decreases peristalsis (less stimulation), weakens abdominal muscles needed for effective defecation, and increases constipation risk. Movement stimulates bowel motility.",
                    hint: "🏃‍♂️ Movement = motility. No movement = no motility = constipation"
                },
                {
                    question: "List 3 dietary interventions to prevent constipation:",
                    choices: [
                        "A. Decrease fiber, limit fluids, avoid exercise",
                        "B. Increase fiber (25-30g daily), adequate fluids (8-10 glasses daily), include prunes",
                        "C. Only eat processed foods and drink soda",
                        "D. Take laxatives daily instead of dietary changes"
                    ],
                    correct: 1,
                    explanation: "Constipation prevention: Increase fiber intake to 25-30g daily, drink 8-10 glasses of water daily, include natural laxatives like prunes/prune juice. Add fiber gradually to prevent gas.",
                    hint: "🍎 Fiber + Fluids + movement = happy bowels. Prunes are nature's laxative!"
                },
                {
                    question: "What is the proper positioning for defecation?",
                    choices: [
                        "A. Lying flat on back with legs extended",
                        "B. Standing upright without support",
                        "C. Sitting upright with feet flat, leaning slightly forward",
                        "D. Side-lying position only"
                    ],
                    correct: 2,
                    explanation: "Optimal position: sitting upright with feet flat on floor (or footstool), leaning slightly forward. This increases intra-abdominal pressure and straightens the anorectal angle for easier elimination.",
                    hint: "🚽 Think squatty potty - feet up, lean forward = nature's way to poop!"
                },
                {
                    question: "What is the purpose of a cleansing enema?",
                    choices: [
                        "A. To deliver medications directly to the colon",
                        "B. To empty the bowel and remove feces for procedures or constipation relief",
                        "C. To add nutrients to the body",
                        "D. To test for allergic reactions"
                    ],
                    correct: 1,
                    explanation: "Cleansing enemas empty the bowel by stimulating peristalsis and removing feces. Used for preparation before diagnostic procedures, surgery, or to relieve severe constipation/impaction.",
                    hint: "🧹 Cleansing enema = cleaning out the pipes! Think prep for colonoscopy"
                },
                {
                    question: "What is the typical volume for an adult cleansing enema?",
                    choices: [
                        "A. 50-100 mL",
                        "B. 200-300 mL", 
                        "C. 750-1000 mL",
                        "D. 1500-2000 mL"
                    ],
                    correct: 2,
                    explanation: "Adult cleansing enema volume: 750-1000 mL (about 1 liter) of solution. Pediatric doses are much smaller. Too much volume can cause complications.",
                    hint: "💧 Think about a liter bottle - that's roughly the right amount for adults"
                },
                {
                    question: "Describe the proper position for enema administration:",
                    choices: [
                        "A. Supine with legs straight",
                        "B. Right side-lying with knees extended",
                        "C. Left side-lying (Sims position) with knees flexed toward chest",
                        "D. Standing upright"
                    ],
                    correct: 2,
                    explanation: "Sims position (left side-lying with knees flexed) follows the natural S-curve of the sigmoid colon and rectum, making insertion easier and more comfortable.",
                    hint: "⬅️ Left side = Sims position. Knees up = follows the natural curve!"
                },
                {
                    question: "How far should the rectal tube be inserted for an enema?",
                    choices: [
                        "A. 1-2 inches (2.5-5 cm)",
                        "B. 3-4 inches (7.5-10 cm) directed toward umbilicus", 
                        "C. 6-8 inches (15-20 cm)",
                        "D. As far as it will go"
                    ],
                    correct: 1,
                    explanation: "Insert rectal tube 3-4 inches (7.5-10 cm) in adults, directed toward the umbilicus (not straight up). This reaches the rectum without perforating tissue.",
                    hint: "👆 3-4 inches toward the belly button - not too deep, not too shallow!"
                },
                {
                    question: "What are contraindications for enema administration?",
                    choices: [
                        "A. Mild constipation only",
                        "B. Recent rectal surgery, cardiac conditions, increased ICP, severe hemorrhoids",
                        "C. All elderly patients",
                        "D. Patients who can walk"
                    ],
                    correct: 1,
                    explanation: "CONTRAINDICATIONS: Recent rectal/abdominal surgery, severe cardiac disease (vagal stimulation), increased intracranial pressure, severe hemorrhoids, bowel obstruction.",
                    hint: "⚠️ Don't give enemas when there's surgical sites, heart problems, or pressure issues!"
                },
                {
                    question: "What is the normal appearance of a healthy stoma?",
                    choices: [
                        "A. Purple or black color, dry texture",
                        "B. White or pale pink, flat against skin",
                        "C. Reddish-pink color, moist, slightly raised above skin level",
                        "D. Dark brown, hard texture"
                    ],
                    correct: 2,
                    explanation: "Healthy stoma: reddish-pink (like inside of mouth), moist, slightly protruding above skin level, no pain when gently touched. Purple/black color indicates circulation problems.",
                    hint: "👄 Think of the inside of your mouth - that's what a healthy stoma looks like!"
                },
                {
                    question: "What stoma characteristics require immediate attention?",
                    choices: [
                        "A. Reddish-pink color and moist appearance",
                        "B. Purple/black color, excessive bleeding, severe swelling",
                        "C. Slight protrusion above skin level",
                        "D. Normal moisture and pink color"
                    ],
                    correct: 1,
                    explanation: "CALL PROVIDER for: Purple/black color (necrosis), excessive bleeding, severe swelling, complete retraction, or severe skin breakdown around stoma.",
                    hint: "🚨 Purple/black = no blood flow = emergency! Also watch for too much bleeding"
                },
                {
                    question: "How often should an ostomy pouch be changed?",
                    choices: [
                        "A. Every day without exception",
                        "B. Every 3-7 days or when leaking, depending on type",
                        "C. Once a week only",
                        "D. Only when completely full"
                    ],
                    correct: 1,
                    explanation: "Ostomy pouches: change every 3-7 days or when leaking, depending on stoma type, skin condition, and individual factors. Don't change unnecessarily (wastes supplies, irritates skin).",
                    hint: "📅 3-7 days is the sweet spot - not too often (skin damage) not too long (leaking)"
                },
                {
                    question: "What is the recommended daily fiber intake for adults?",
                    choices: [
                        "A. 5-10 grams per day",
                        "B. 15-20 grams per day",
                        "C. 25-30 grams per day",
                        "D. 50-60 grams per day"
                    ],
                    correct: 2,
                    explanation: "Adults should consume 25-30 grams of fiber daily for optimal bowel health. Increase fiber gradually to prevent gas/bloating. Include both soluble and insoluble fiber.",
                    hint: "🌾 25-30g = about 5-6 servings of fruits/veggies + whole grains. Gradual increase!"
                },
                {
                    question: "How much fluid should adults consume daily for bowel health?",
                    choices: [
                        "A. 2-4 glasses (16-32 oz) daily",
                        "B. 4-6 glasses (32-48 oz) daily", 
                        "C. 8-10 glasses (64-80 oz) daily",
                        "D. 15-20 glasses (120-160 oz) daily"
                    ],
                    correct: 2,
                    explanation: "Adults need at least 8-10 glasses (64-80 oz) of water daily for proper bowel function. More needed in hot weather, illness, or high fiber intake. Fluids soften stool.",
                    hint: "💧 8x8 rule: 8 glasses of 8 oz each = 64 oz minimum. More fiber = need more fluids!"
                },
                {
                    question: "Name 3 types of laxatives and how they work:",
                    choices: [
                        "A. All laxatives work the same way",
                        "B. Bulk-forming (absorb water), Stimulant (increase peristalsis), Osmotic (draw water into colon)",
                        "C. Only stimulant laxatives exist",
                        "D. Laxatives don't actually work"
                    ],
                    correct: 1,
                    explanation: "Laxative types: 1) Bulk-forming (psyllium) - absorb water, add bulk 2) Stimulant (senna) - stimulate peristalsis 3) Osmotic (MiraLAX) - draw water into colon 4) Emollient (docusate) - soften stool.",
                    hint: "💊 Bulk = sponge, Stimulant = motor, Osmotic = water magnet, Emollient = oil"
                },
                {
                    question: "What are common side effects of stimulant laxatives?",
                    choices: [
                        "A. No side effects ever occur",
                        "B. Only cause beneficial effects",
                        "C. Cramping, electrolyte imbalance with overuse, dependency risk",
                        "D. Always cause severe complications"
                    ],
                    correct: 2,
                    explanation: "Stimulant laxatives can cause: cramping/abdominal pain, electrolyte imbalances with overuse, and physical dependency if used long-term. Should be temporary use only.",
                    hint: "⚡ Stimulants stimulate = cramping. Overuse = electrolyte problems & dependency"
                },
                {
                    question: "List 3 antidiarrheal medications and their mechanisms:",
                    choices: [
                        "A. All antidiarrheals work identically",
                        "B. Loperamide (slows motility), Bismuth subsalicylate (antimicrobial), Diphenoxylate (reduces motility)",
                        "C. Only antibiotics work for diarrhea",
                        "D. Antidiarrheals don't actually exist"
                    ],
                    correct: 1,
                    explanation: "Antidiarrheals: 1) Loperamide (Imodium) - slows intestinal motility 2) Bismuth subsalicylate (Pepto-Bismol) - antimicrobial/anti-inflammatory 3) Diphenoxylate (Lomotil) - reduces motility.",
                    hint: "🛑 Different mechanisms: slow the gut, kill bugs, or reduce contractions"
                },
                {
                    question: "What is the priority assessment for severe diarrhea?",
                    choices: [
                        "A. Comfort level only",
                        "B. Dietary preferences",
                        "C. Fluid and electrolyte balance, skin integrity, vital signs",
                        "D. Social history"
                    ],
                    correct: 2,
                    explanation: "PRIORITY for severe diarrhea: fluid/electrolyte balance (dehydration risk), skin integrity (breakdown from frequent stool), vital signs (shock from volume loss), I&O monitoring.",
                    hint: "🌊 Severe diarrhea = losing fluid & electrolytes fast! Check hydration status first"
                },
                {
                    question: "What are signs of bowel obstruction?",
                    choices: [
                        "A. Normal bowel movements and comfort",
                        "B. Mild bloating only",
                        "C. Severe abdominal pain, vomiting, distention, absence of flatus/stool",
                        "D. Soft formed stools"
                    ],
                    correct: 2,
                    explanation: "Bowel obstruction signs: severe cramping abdominal pain, nausea/vomiting, abdominal distention, absence of flatus and stool, high-pitched bowel sounds (early) then absent sounds (late).",
                    hint: "🚫 Nothing getting through = pain, puke, puffed up belly, no gas/poop"
                },
                {
                    question: "When is fecal impaction a medical emergency?",
                    choices: [
                        "A. Never - it's always routine",
                        "B. Only if patient complains",
                        "C. When accompanied by complete obstruction, severe pain, or perforation signs",
                        "D. Only in elderly patients"
                    ],
                    correct: 2,
                    explanation: "Fecal impaction becomes emergent with: complete bowel obstruction, severe abdominal pain, signs of perforation (rigid abdomen), or systemic symptoms (fever, tachycardia).",
                    hint: "⚠️ Impaction + obstruction or perforation signs = get help NOW!"
                }
            ]
        };

// Schema validation function
function validateFlashcards() {
    const warnings = [];
    const usedIds = new Set();
    
    for (const [category, cards] of Object.entries(QuestionBank)) {
        if (!Array.isArray(cards)) {
            warnings.push(`Category ${category}: Expected array, got ${typeof cards}`);
            continue;
        }
        
        cards.forEach((card, index) => {
            const cardRef = `${category}[${index}]`;
            
            // Check required fields
            if (!card.question || card.question.trim() === '') {
                warnings.push(`${cardRef}: Missing or empty question`);
            }
            
            if (!Array.isArray(card.choices) || card.choices.length !== 4) {
                warnings.push(`${cardRef}: Must have exactly 4 choices`);
            }
            
            if (typeof card.correct !== 'number' || card.correct < 0 || card.correct > 3) {
                warnings.push(`${cardRef}: Correct answer must be 0-3`);
            }
            
            if (!card.explanation || card.explanation.trim() === '') {
                warnings.push(`${cardRef}: Missing or empty explanation`);
            }
            
            if (!card.hint || card.hint.trim() === '') {
                warnings.push(`${cardRef}: Missing or empty hint`);
            }
            
            // Check for duplicate questions (first 50 chars)
            const questionKey = card.question ? card.question.substring(0, 50) : '';
            const duplicateId = `${category}_${questionKey}`;
            if (usedIds.has(duplicateId)) {
                warnings.push(`${cardRef}: Duplicate question detected`);
            }
            usedIds.add(duplicateId);
        });
    }
    
    if (warnings.length > 0) {
        console.warn('Flashcards validation warnings:');
        warnings.forEach(warning => console.warn('⚠️', warning));
    }
    
    return warnings.length === 0;
}

// Run validation when loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        validateFlashcards();
    });
}
