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
                'ch40_bowel_elimination': 'Ch 40: Bowel (Comprehensive)'
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
