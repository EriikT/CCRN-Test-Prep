const questions = [
  {
    id: 1,
    question:
      "A patient in a HHS is being admitted with dehydration and a serum glucose level of 836 mg/dL. Which additional laboratory findings should the nurse anticipate?",
    answers: [
      "decreased BUN, decreased creatinine, elevated serum osmolality",
      "elevated BUN, decreased creatinine, decreased serum osmolality",
      "decreased BUN, elevated creatinine, decreased serum osmolality",
      "elevated BUN, elevated creatinine, elevated serum osmolality",
    ],
    correctAnswer: "D",
  },
  {
    id: 2,
    question:
      "A patient with a history of bronchogenic carcinoma is admitted with respiratory failure. The patient is intubated and on mechanical ventilation. The patient develops lethargy, headache, slight confusion and abdominal cramping. Urinary output is decreasing. Significant lab data include:",
    clinicalData: [
      "Serum Na+ 127 mEq/L",
      "Serum Osmolality 270 mOsm/kg",
      "Urine specific gravity elevated",
    ],
    followUp: "Which INITIAL intervention should the nurse anticipate?",
    answers: [
      "collaboration with the oncologist for emergent chemotherapy",
      "administration of 3% saline",
      "observation for central pontine myelinolysis",
      "initiation of fluid restriction",
    ],
    correctAnswer: "D",
  },
  {
    id: 3,
    question:
      "Which places the older adult at greater risk for alcohol-induced disease?",
    answers: [
      "more rapid metabolism of alcohol",
      "larger volume of body water",
      "increase in lean body tissue",
      "use of psychotropic drugs",
    ],
    correctAnswer: "D",
  },
  {
    id: 4,
    question: "Which is an endpoint of volume resuscitation?",
    answers: [
      "CVP 3 mm Hg",
      "CI 2.4 L/min/m2",
      "oxygen consumption 250 mL/min",
      "base deficit 4 mmol/L",
    ],
    correctAnswer: "C",
  },
  {
    id: 5,
    question:
      "Which 12-lead ECG changes should be expected in a patient with ACS involving the inferior wall?",
    answers: [
      "ST segment elevation and deeply inverted T waves in leads V4 - V6, I and aVL",
      "ST segment elevation in leads II, III and all the precordial leads",
      "ST segment elevation and deeply inverted T waves in leads II, III and aVF",
      "ST segment depression and T wave elevation in leads II, III and aVL",
    ],
    correctAnswer: "C",
  },
  {
    id: 6,
    question: "The major effect of ARDS on lung tissue is",
    answers: [
      "decreased capillary permeability.",
      "increased functional residual capacity.",
      "decreased compliance.",
      "decreased alveolar surface tension.",
    ],
    correctAnswer: "C",
  },
  {
    id: 7,
    question:
      "A patient with mitral regurgitation suddenly develops atrial fibrillation. BP is 118/74 and HR is 156. The nurse should anticipate orders for",
    answers: [
      "beta-blockers and vasopressors.",
      "warfarin (Coumadin) and alpha-agonists.",
      "beta-agonists and calcium-channel blockers.",
      "cardiac glycosides and calcium-channel blockers.",
    ],
    correctAnswer: "D",
  },
  {
    id: 8,
    question:
      "Which life-threatening dysrhythmia is MOST FREQUENTLY associated with heart failure?",
    answers: [
      "bigeminy premature atrial contractions",
      "ventricular tachycardia",
      "second-degree AV block, Type II",
      "junctional tachycardia",
    ],
    correctAnswer: "B",
  },
  {
    id: 9,
    question:
      "A patient has heart failure secondary to ischemic cardiomyopathy and end-stage coronary artery disease. Which agents would be the MOST beneficial?",
    answers: [
      "digoxin (Lanoxin) and diltiazem (Cardizem)",
      "carvedilol (Coreg) and lisinopril (Zestril)",
      "verapamil (Calan) and spironolactone (Aldactone)",
      "flecainide (Tambocor) and hydralazine (Apresoline)",
    ],
    correctAnswer: "C",
  },
  {
    id: 10,
    question:
      "When providing care to a patient with status epilepticus, the nurse should recognize that usually",
    answers: [
      "it is a state of continuous seizures lasting more than 2 minutes.",
      "the patient comes out of the post ictal state between seizures.",
      "it results from abrupt discontinuation of anti-seizure medications.",
      "the cause of death is due to cerebral hemorrhage.",
    ],
    correctAnswer: "C",
  },
  {
    id: 11,
    question:
      "A patient with a history of angina is admitted to the unit after surgical repair of an abdominal aortic aneurysm (AAA). The patient is receiving a sodium nitroprusside (Nipride) drip for severe postoperative hypertension. Twelve hours later, the patient complains of back pain. Assessment at this time reveals:",
    clinicalData: [
      "BP 80/60",
      "HR 120",
      "UO 20 mL/hr",
      "+1 left dorsalis pedis pulse",
      "+1 right dorsalis pedis pulse",
    ],
    followUp:
      "After notifying the provider of the change in the patient's condition, the nurse should anticipate which IMMEDIATE intervention?",
    answers: [
      "administration of normal saline 200 mL/hr and preparation for Doppler studies",
      "spiral chest CT and emergent pericardiocentesis",
      "procedural sedation and IABP insertion",
      "discontinuation of Nipride and preparation for surgery",
    ],
    correctAnswer: "D",
  },
  {
    id: 12,
    question:
      "A patient with head trauma is experiencing increased intracranial pressure. The ideal level at which to maintain the arterial pCO2 is between",
    answers: ["15 and 20.", "35 and 45.", "25 and 30.", "45 and 50."],
    correctAnswer: "B",
  },
  {
    id: 13,
    question:
      "Which PA catheter finding should be anticipated in a patient with chronic emphysema?",
    answers: [
      "increased CVP",
      "decreased CI",
      "increased stroke volume",
      "decreased PAOP",
    ],
    correctAnswer: "A",
  },
  {
    id: 14,
    question:
      "A patient who has been on prolonged bed rest is now allowed to have physical therapy. Which is an indication of tolerance after 2 days of therapy?",
    answers: [
      "SBP 140 mm Hg (resting SBP 118 mm Hg)",
      "RR 24",
      "SvO2 58%",
      "HR 84 (resting HR 68)",
    ],
    correctAnswer: "D",
  },
  {
    id: 15,
    question:
      "Which hemodynamic profile is MOST consistent with distributive shock?",
    answers: [
      "BP 88/44, CVP 15, PAOP 24, CI 1.5, SVR 1200, SvO2 47%",
      "BP 85/40, CVP 12, PAOP 20, CI 2.0, SVR 1445, SvO2 50%",
      "BP 84/42, CVP 3, PAOP 8, CI 2.5, SVR 475, SvO2 52%",
      "BP 75/50, CVP 8, PAOP 8, CI 2.5, SVR 1500, SvO2 68%",
    ],
    correctAnswer: "C",
  },
  {
    id: 16,
    question: "Which is an advantage of pressure support ventilation?",
    answers: [
      "decreased work of breathing",
      "decreased inspiratory flow",
      "decreased muscular endurance",
      "decreased FiO2",
    ],
    correctAnswer: "A",
  },
  {
    id: 17,
    question:
      "The MOST IMPORTANT indicator to be used in monitoring the respiratory status of a patient with Guillain-Barré syndrome is",
    answers: [
      "vital capacity.",
      "O2 saturation.",
      "negative inspiratory force (NIF).",
      "A-a gradient.",
    ],
    correctAnswer: "A",
  },
  {
    id: 18,
    question:
      "A patient is admitted after a PCI to the RCA. Four hours later, the patient's data are:",
    clinicalData: [
      "BP 76/48",
      "HR 120",
      "RR 32",
      "SpO2 95%",
      "ST segment changes are noted",
    ],
    followUp: "The nurse should suspect",
    answers: [
      "pulmonary embolism.",
      "abrupt reclosure.",
      "coronary artery dissection.",
      "restenosis of the right coronary artery.",
    ],
    correctAnswer: "C",
  },
  {
    id: 19,
    question:
      "A patient with a 4-year history of type I diabetes is admitted with influenza. The patient is lethargic, responds to name and follows simple commands. Skin is dry with poor turgor. Which is the MOST LIKELY cause of the patient's condition?",
    answers: [
      "hyponatremia",
      "hypoglycemia",
      "ketosis",
      "hypovolemia",
    ],
    correctAnswer: "D",
  },
  {
    id: 20,
    question:
      "Which set of lab data is consistent with a diagnosis of diabetes insipidus?",
    answers: [
      "increased serum ADH, increased serum osmolality, serum Na+ 130 mEq/L",
      "increased serum ADH, decreased serum osmolality, serum Na+ 140 mEq/L",
      "decreased serum ADH, increased serum osmolality, serum Na+ 150 mEq/L",
      "decreased serum ADH, decreased serum osmolality, serum Na+ 160 mEq/L",
    ],
    correctAnswer: "C",
  },
  {
    id: 21,
    question:
      "A patient with an AMI is in critical condition. His significant other has been at the bedside providing reassurance and support since his admission. His estranged wife arrives and demands that the significant other not be allowed to visit or be given condition updates. The nurse should",
    answers: [
      "ask the provider to write an order to allow the significant other to have visitation privileges.",
      "request a multidisciplinary care conference to discuss visitation and communication of patient status.",
      "contact the hospital's medical-legal department and request that the hospital attorney speak to the wife.",
      "encourage the patient to speak with his wife regarding his desire to spend time with his significant other.",
    ],
    correctAnswer: "B",
  },
  {
    id: 22,
    question:
      "A patient is admitted with a long bone fracture to the lower leg. Decreased sensation and severe pain are reported. The nurse should INITIALLY",
    answers: [
      "elevate the affected extremity.",
      "call the orthopedic surgeon.",
      "anticipate initiation of a heparin infusion.",
      "obtain an order for pain medication.",
    ],
    correctAnswer: "B",
  },
  {
    id: 23,
    question:
      "Following hip replacement surgery, an elderly patient with a history of diabetes, hepatic insufficiency and alcohol abuse has a postoperative course complicated by the development of a Staphylococcus infection at the surgical site. Which intervention has the HIGHEST priority?",
    answers: [
      "Place the patient on strict isolation.",
      "Anticipate a return to the operating room.",
      "Apply negative-pressure wound therapy.",
      "Prepare the patient for wound closure.",
    ],
    correctAnswer: "B",
  },
  {
    id: 24,
    question:
      "A patient is admitted complaining of crushing chest pain, which began 2 hours ago. An ECG shows ST elevation in leads V2-V4, which is treated with a PCI procedure to the LAD. Following the procedure the patient develops oliguria and bilateral, diffuse crackles. Which hemodynamic findings should be expected at this point?",
    answers: [
      "BP 80/50, CO 3.8, SVR 2200, PA Pressure 40/24",
      "BP 86/50, CO 5.0, SVR 1000, PA Pressure 30/10",
      "BP 85/56, CO 2.9, SVR 660, PA Pressure 20/14",
      "BP 90/60, CO 6.8, SVR 500, PA Pressure 18/4",
    ],
    correctAnswer: "A",
  },
  {
    id: 25,
    question:
      "Following ACS affecting the anterior wall, a patient develops shortness of breath. Assessment reveals moist bibasilar crackles and a moderately loud S3. A PA catheter is inserted, and a PAOP of 22 mm Hg is obtained. These findings are MOST indicative of",
    answers: [
      "impending cardiac tamponade.",
      "venous distention.",
      "tricuspid valve dysfunction.",
      "left ventricular decompensation.",
    ],
    correctAnswer: "D",
  },
  {
    id: 26,
    question:
      "A patient with a history of ischemic cardiomyopathy is admitted with a BP of 102/74, HR of 122 with occasional irregular beats, RR of 42, productive cough with frothy sputum, and pitting edema in the lower extremities. The patient is anxious, restless and short of breath. This patient's primary problem is MOST LIKELY",
    answers: [
      "pulmonary edema.",
      "pulmonary embolism.",
      "acute coronary syndrome.",
      "acute papillary muscle rupture.",
    ],
    correctAnswer: "A",
  },
  {
    id: 27,
    question:
      "A post-abdominal surgery patient has an immediate change in LOC and is hypotensive and tachycardic. Which lab results indicate an upper GI bleed in this patient?",
    answers: [
      "metabolic alkalosis and decreased PT",
      "elevated PTT and decreased BUN: creatinine ratio",
      "decreased WBC and elevated PLT count",
      "elevated serum sodium and BUN",
    ],
    correctAnswer: "D",
  },
  {
    id: 28,
    question:
      "A patient is confused about time and place, despite frequent reorientation. For the patient's safety, the nurse should INITIALLY",
    answers: [
      "put a vest restraint on the patient.",
      "ask a family member to stay with the patient.",
      "administer a mild sedative.",
      "increase the frequency of observation of the patient.",
    ],
    correctAnswer: "D",
  },
  {
    id: 29,
    question:
      "A patient is admitted after sustaining fractures of the pelvis and left femur in an MVC. Vital signs are BP 90/60, HR 120, RR 28. The next day, the patient is oliguric and a 2-kg weight increase is noted. Bilateral crackles are auscultated. The following values are obtained:",
    clinicalData: [
      "BP 200/90",
      "HR 124",
      "RR 30",
      "BUN 100 mg/dL (elevated)",
      "Serum creatinine 3.2 mg/dL (elevated)",
      "Serum K+ 6 mEq/L (elevated)",
    ],
    followUp: "Which SHOULD the nurse suspect?",
    answers: [
      "hypertensive crisis",
      "right-sided heart failure",
      "fat embolism",
      "acute kidney injury",
    ],
    correctAnswer: "D",
  },
  {
    id: 30,
    question: "Which is true regarding thoracic aortic aneurysms?",
    answers: [
      "Minimally invasive endovascular repair is preferred for ascending aortic aneurysms.",
      "Aneurysms are typically symptomatic and identified by palpation.",
      "Surgical repair is indicated if the aneurysm diameter is 5.5 cm or more.",
      "Major risk factors for rupture include cardiac tamponade and AMI.",
    ],
    correctAnswer: "C",
  },
  {
    id: 31,
    question:
      "In a patient with ARDS, which contributes to the development of atelectasis?",
    answers: [
      "decreased pulmonary vascular resistance and hypoxemia",
      "increased pulmonary compliance and hypoxemia",
      "loss of surfactant and interstitial fluid accumulation",
      "mucosal edema and mucous plugging",
    ],
    correctAnswer: "C",
  },
  {
    id: 32,
    question:
      "Which physiologic change should a nurse anticipate when caring for a postoperative patient with morbid obesity?",
    answers: [
      "decreased functional residual capacity",
      "increased chest wall compliance",
      "increased dynamic lung volumes",
      "decreased abdominal pressure",
    ],
    correctAnswer: "A",
  },
  {
    id: 33,
    question:
      "Which is an anticipated finding of a patient with status asthmaticus?",
    answers: [
      "decreased pCO2",
      "dehydration",
      "bradycardia",
      "tension pneumothorax",
    ],
    correctAnswer: "B",
  },
  {
    id: 34,
    question:
      "When teaching a family member to perform an aspect of patient care, the nurse should understand that family members",
    answers: [
      "are unaffected by the timing of teaching.",
      "learn best if they perceive a need to learn.",
      "learn best if shown a complex procedure all at once.",
      "learn unrelated tasks first.",
    ],
    correctAnswer: "B",
  },
  {
    id: 35,
    question:
      "A patient involved in a vehicle-pedestrian collision sustained a pelvic fracture with an open injury. The patient is hemodynamically stable, and there is no indication of internal organ damage. Which is the highest priority intervention?",
    answers: [
      "application of a pelvic binder or external fixator",
      "surgical repair of the pelvis",
      "initiation of antibiotic prophylaxis and tetanus booster",
      "administration of fluid and blood/blood products",
    ],
    correctAnswer: "D",
  },
  {
    id: 36,
    question:
      "The ABG results on a 60-kg patient being mechanically ventilated during an episode of acute respiratory failure are:",
    clinicalData: [
      "pH 7.43",
      "pCO2 34 mm Hg",
      "pO2 84 mm Hg",
      "HCO3 25 mEq/L",
      "Rate 12 breaths/min",
      "VT 600 mL",
      "FiO2 60%",
      "PEEP 5 cm H2O",
    ],
    followUp: "The MOST APPROPRIATE action should be to",
    answers: [
      "increase the FiO2.",
      "decrease the rate.",
      "decrease the tidal volume.",
      "increase the PEEP.",
    ],
    correctAnswer: "C",
  },
  {
    id: 37,
    question:
      "The nurse is caring for a patient with hypercalcemia. For which imbalance should the nurse observe?",
    answers: [
      "hypokalemia",
      "hypoalbuminemia",
      "hypermagnesemia",
      "hyperphosphatemia",
    ],
    correctAnswer: "A",
  },
  {
    id: 38,
    question:
      "A patient with an anterior cerebral arterial embolism will MOST LIKELY develop",
    answers: [
      "visual loss.",
      "aphasia.",
      "hemiplegia.",
      "motor loss.",
    ],
    correctAnswer: "C",
  },
  {
    id: 39,
    question:
      "A patient who is ventilator-dependent has been hospitalized. The provider has indicated that the patient will be discharged home in one week with a tracheostomy and gastrostomy. In order to determine the discharge needs of the patient, the nurse should arrange for",
    answers: [
      "home nursing care for the first few days following discharge.",
      "a social worker to meet with the family and assess adequacy of the home environment.",
      "an outreach educator to determine the learning needs of the family.",
      "a multidisciplinary care conference prior to discharge.",
    ],
    correctAnswer: "B",
  },
  {
    id: 40,
    question:
      "In planning care for a patient who is suspected to have developed sepsis, a nurse should monitor for",
    answers: [
      "WBC of 14,000 cu/mm3 and HR 123.",
      "pCO2 of 44 mm Hg and a temperature of 102°F (39° C).",
      "hyperglycemia and nosocomial pneumonia.",
      "platelet count of 54,000 cu/mm3 and positive d-dimer.",
    ],
    correctAnswer: "A",
  },
    {
    id: 41,
    question:
      'An adolescent patient with acute leukemia has undergone multiple rounds of chemotherapy. One night, the patient tells the nurse, "I’m tired of all the chemo and I want to stop, but no one is listening to me." The nurse should',
    answers: [
      "explain that adolescent patients cannot legally make healthcare decisions.",
      'encourage the patient to "express these feelings to your family."',
      "arrange for the patient to discuss the treatment plan with the providers.",
      'ask the patient, "Do you realize you could die if you stop chemotherapy?"',
    ],
    correctAnswer: "B",
  },
  {
    id: 42,
    question: "The ECG strip below is MOST INDICATIVE of",
    image: "/ecg/q42-ecg.png",
    answers: [
      "second-degree AV heart block, Type I (Wenckebach).",
      "second-degree heart block, Type II.",
      "first-degree AV heart block.",
      "third-degree AV heart block.",
    ],
    correctAnswer: "D",
  },
  {
    id: 43,
    question:
      "A critically ill patient has a stage III pressure ulcer involving a large amount of tissue loss and exudate. The nurse should anticipate management to include",
    answers: [
      "use of calcium alginates on the surrounding tissue.",
      "application of a hydrofiber dressing in the wound bed.",
      "application of a wet-to-dry dressing.",
      "use of a topical antibiotic ointment.",
    ],
    correctAnswer: "B",
  },
  {
    id: 44,
    question:
      "Which strategy should a nurse anticipate when caring for a patient who is increasingly agitated and argumentative from alcohol withdrawal?",
    answers: [
      "benzodiazepines",
      "vitamins",
      "narcotics",
      "anticonvulsants",
    ],
    correctAnswer: "A",
  },
  {
    id: 45,
    question:
      "A patient with end-stage liver failure secondary to hepatitis C virus has been declared brain dead. The parents decide to discontinue feedings and donate their daughter’s organs. In response to the parents’ request, the MOST APPROPRIATE action by the nurse should be to",
    answers: [
      "contact the organ procurement agency.",
      "convene a multidisciplinary care conference.",
      "discuss that their daughter’s condition precludes organ donation.",
      "discontinue feedings per the parents’ request.",
    ],
    correctAnswer: "A",
  },
  {
    id: 46,
    question:
      'A patient has been waiting 2 months for a heart transplant. A family member angrily tells the nurse, "This is hopeless!" The nurse’s actions should be based on the knowledge that',
    answers: [
      "expressions of frustration are normal and usually require no nursing intervention.",
      "because expressions of hopelessness may be harmful to the patient, the family member should be encouraged to keep these statements out of the patient care area.",
      "maintaining the integrity of the family system is crucial in the transplant process.",
      "encouraging discussion of negative emotions can impede their resolution.",
    ],
    correctAnswer: "C",
  },
  {
    id: 47,
    question:
      "A patient’s family expresses anxiety regarding the meaning of numbers on the patient’s monitor and asks the nurse for clarification. The nurse’s MOST APPROPRIATE response should be,",
    answers: [
      '"The numbers indicate when the patient is having problems."',
      '"The numbers help us determine the best treatment."',
      '"Which numbers on the monitor concern you?"',
      '"What don’t you understand about the monitor?"',
    ],
    correctAnswer: "C",
  },
  {
    id: 48,
    question:
      "A hospital’s current policy states that medication drips should be changed within 24 hours after surgery. Nurses note that many postoperative cardiac patients develop BP instability after inotrope syringes are changed. The BEST approach to solving this problem is to",
    answers: [
      "notify the provider of a patient’s BP instability.",
      "disregard the policy and wait for syringes to empty.",
      "suggest the nurse manager form a committee to examine the problem.",
      "give a bolus of inotrope immediately prior to changing a drip.",
    ],
    correctAnswer: "C",
  },
  {
    id: 49,
    question:
      'A patient who is stable after an AMI is to be transferred. The patient’s spouse says, "I don’t want my spouse moved; it’s too soon." Discussion with the patient and spouse should focus on',
    answers: [
      "improvements in the patient’s condition.",
      "reviewing the acuity of the other patients.",
      "the spouse’s ability to act as caregiver.",
      "the contrasting staffing ratios of the units.",
    ],
    correctAnswer: "A",
  },
  {
    id: 50,
    question:
      "A patient deliberately ingested a toxic substance. While treating the patient, a nurse should anticipate",
    answers: [
      "discussing the circumstances of the attempt with the patient.",
      "separating the patient from friends and family.",
      "that admission to a 72-hour locked mental health unit is mandatory.",
      "applying vest and wrist restraints to the patient.",
    ],
    correctAnswer: "A",
  },
  {
    id: 51,
    question:
      "A major trauma victim is transported from a rural hospital. The patient died prior to the wife’s arrival to the unit. The nurse should best prepare for the wife’s arrival by",
    answers: [
      "arranging for a provider to speak with her when she enters the unit.",
      "planning to escort her to the waiting room to await the provider’s arrival.",
      "preparing to give her information about the care her husband received prior to death.",
      "planning to escort her to the morgue to see her husband.",
    ],
    correctAnswer: "C",
  },
  {
    id: 52,
    question:
      "Respiratory therapists, physical therapists, occupational therapists and nurses are all responsible for discharge teaching, with each discipline currently documenting on its own flow sheet. The BEST way to coordinate teaching is to have",
    answers: [
      "daily care conferences to review and discuss patient teaching and the flow sheets.",
      "each discipline distribute copies of its flow sheet to each team member.",
      "nurses review the flow sheets of all disciplines during shift change.",
      "all disciplines document patient teaching on the same flow sheet.",
    ],
    correctAnswer: "D",
  },
  {
    id: 53,
    question: "Which may cause development of fixed pupils?",
    answers: [
      "hyperoxia",
      "opiates",
      "hypothermia",
      "olfactory damage",
    ],
    correctAnswer: "C",
  },
  {
    id: 54,
    question:
      "A patient involved in an MVC sustained severe head trauma. Her father threatens to hurt someone if the staff does not save his daughter. Your BEST response is to",
    answers: [
      'stand at right angles to the father and say, "I can see you are upset about your daughter’s condition. Can we go to the conference room and talk?"',
      'stand facing the father and say, "I understand why you are upset. It is very hard to lose a child."',
      'stand in the doorway and tell the father, "You are upsetting the other patients. You must leave the unit now until you calm down, and then we will talk."',
      'approach the father cautiously, touch his arm and say, "I can understand why you are upset. Can we go into my office and talk?"',
    ],
    correctAnswer: "A",
  },
  {
    id: 55,
    question:
      "A patient who does not speak or understand English has just undergone aortic valve replacement. The patient is increasingly restless and splinting the chest with both hands. An effective means of communication with this patient should be",
    answers: [
      "using a letterboard.",
      "contacting the patient’s family.",
      "using gestures and a picture board.",
      'asking "yes" and "no" questions.',
    ],
    correctAnswer: "C",
  },
  {
    id: 56,
    question:
      "A survey reveals that all of the hospital’s nurses feel the routine 4 a.m. chest x-rays cause an interruption in patients’ sleep patterns. The BEST strategy for addressing this issue is to",
    answers: [
      "assemble a workgroup to discuss the current hospital policy.",
      "reschedule all nonemergent 4 a.m. chest x-rays during daytime hours.",
      "request an in-service for the radiology department about the effects of sleep deprivation.",
      "send the results of the survey to the hospital administrator.",
    ],
    correctAnswer: "A",
  },
  {
    id: 57,
    question:
      "The MOST IMPORTANT factor in caring for a patient referred for fibrinolytic therapy for a suspected stroke is to",
    answers: [
      "begin the therapy within 60 minutes of the patient’s arrival.",
      "obtain an allergy history.",
      "establish onset of symptoms.",
      "start an IV line.",
    ],
    correctAnswer: "C",
  },
  {
    id: 58,
    question:
      "A nurse is interested in including other disciplines in educational processes for the unit. The BEST way to convince administration that this venture is financially worthwhile is to",
    answers: [
      "present a report summarizing research relating to education decreases length of stay.",
      "request that the provider presents the plan.",
      "present case studies demonstrating favorable patient outcomes.",
      "invite members of administration to attend the classes.",
    ],
    correctAnswer: "A",
  },
  {
    id: 59,
    question:
      "A nurse is caring for a patient with a T5 spinal cord injury. To facilitate the patient’s safe transfer to a rehabilitation facility, the nurse should",
    answers: [
      "ensure the patient is functionally independent prior to transfer.",
      "ensure the patient has bowel and bladder control.",
      "consult with the rehabilitation staff regarding transfer criteria.",
      "request a psychiatric evaluation of the patient’s coping skills.",
    ],
    correctAnswer: "C",
  },
  {
    id: 60,
    question:
      "An acutely ill patient of Vietnamese decent is admitted. The father asks few questions about the patient’s condition, and the mother asks none. Both parents appear to be proficient in English. Which is the MOST useful resource for a nurse caring for this patient?",
    answers: [
      "classes conducted by the primary nurse as the need arises",
      "an interpreter who is proficient in the parents’ language",
      "information about the cultural backgrounds represented in the community",
      "ongoing classes addressing the cultural needs of the community",
    ],
    correctAnswer: "B",
  },
  {
    id: 61,
    question:
      "Six members of a trauma patient’s family arrive asking questions about their loved one’s condition. The nurse’s most appropriate INITIAL response should be to",
    answers: [
      "ensure the chaplain is available.",
      "include the family in the patient’s care.",
      "offer the family a tour of the unit.",
      "ask the family to identify a family spokesperson.",
    ],
    correctAnswer: "D",
  },
  {
    id: 62,
    question: "Which findings is MOST INDICATIVE of cardiogenic shock?",
    answers: [
      "SvO2 greater than 70%",
      "CI less than 2 L/min/m2",
      "SVR less than 1000 dynes/sec/cm-5",
      "MAP greater than 70 mm Hg",
    ],
    correctAnswer: "B",
  },
  {
    id: 63,
    question:
      "Which is a contraindication to the use of intra-aortic balloon counterpulsation?",
    answers: [
      "aortic valve insufficiency",
      "mitral valve regurgitation",
      "ventricular aneurysm",
      "ventricular septal defect",
    ],
    correctAnswer: "A",
  },
  {
    id: 64,
    question:
      "Which patient is MOST LIKELY to be liberated from mechanical ventilation more quickly following a lung transplant? A patient with",
    answers: [
      "a cough reflex.",
      "pulmonary hypertension.",
      "emphysema.",
      "a double-lung transplant.",
    ],
    correctAnswer: "C",
  },
  {
    id: 65,
    question:
      "The rationale for using dobutamine (Dobutrex) at an infusion rate of 10-12 mcg/kg/min for cardiogenic shock is to",
    answers: [
      "decrease myocardial ischemia.",
      "improve urinary output.",
      "improve myocardial contraction.",
      "decrease oxygen consumption.",
    ],
    correctAnswer: "C",
  },
  {
    id: 66,
    question: "Which signs are characteristic of diabetes insipidus?",
    answers: [
      "low urine output, low serum osmolality, hyponatremia, and low urine sodium",
      "increased urine output, low serum osmolality, hyponatremia, and low urine sodium",
      "low urine output, low serum osmolality, hypernatremia, and elevated urine sodium",
      "increased urine output, elevated serum osmolality, hypernatremia, and low urine sodium",
    ],
    correctAnswer: "D",
  },
  {
    id: 67,
    question:
      "A patient is one-day post-gastroplasty and has a sudden onset of restlessness, dyspnea and chest pain. HR is 122, and auscultation of heart sounds reveals an increased intensity of a pulmonary S2. These findings should lead the nurse to suspect the patient has developed",
    answers: [
      "aspiration pneumonia.",
      "a spontaneous pneumothorax.",
      "a pleural effusion.",
      "a pulmonary embolus.",
    ],
    correctAnswer: "D",
  },
  {
    id: 68,
    question: "The rhythm below MAY be associated with",
    image: "/ecg/q68-ecg.png",
    answers: [
      "cardiogenic shock.",
      "atropine administration.",
      "procainamide administration.",
      "left ventricular aneurysm.",
    ],
    correctAnswer: "C",
  },
  {
    id: 69,
    question:
      "In the treatment of dilated cardiomyopathy, appropriate drug therapy should be aimed at",
    answers: [
      "increasing afterload and increasing preload.",
      "increasing afterload and decreasing preload.",
      "decreasing afterload and decreasing preload.",
      "decreasing afterload and increasing preload.",
    ],
    correctAnswer: "C",
  },
  {
    id: 70,
    question:
      "Abdominal distention, a tympanic percussion note, and rushes of high-pitched tinkling sounds that coincide with abdominal cramping indicate",
    answers: [
      "rapid GI transit time.",
      "intestinal obstruction.",
      "celiac artery infarction.",
      "superior mesenteric artery occlusion.",
    ],
    correctAnswer: "B",
  },
    {
    id: 71,
    question:
      "Which laboratory results should be expected in a patient with severe acute pancreatitis?",
    answers: [
      "decreased serum amylase, elevated serum calcium, and elevated serum glucose",
      "elevated serum amylase, decreased serum calcium, and decreased total protein",
      "elevated total protein, decreased serum calcium, and decreased PT",
      "elevated alkaline phosphatase, elevated bilirubin, and decreased serum glucose",
    ],
    correctAnswer: "B",
  },
  {
    id: 72,
    question:
      "A patient with a history of heroin and alcohol abuse is admitted for treatment of cellulitis. The patient has flushed, slightly moist skin and is slow to respond to verbal stimuli. The affected arm is edematous, hard to the touch and has yellow exudate from skin puncture wounds. Vital signs are:",
    clinicalData: [
      "BP 88/45",
      "HR 124",
      "RR 26",
      "T 102°F (38.9°C)",
    ],
    followUp: "The nurse should anticipate initial orders for",
    answers: [
      "antipyretics and dopamine (Intropin) administration.",
      "a CT scan of the head and a drug screen.",
      "blood cultures, antibiotics and rapid administration of IV fluids.",
      "monitoring for signs of withdrawal, antipyretics and IV fluids with vitamins.",
    ],
    correctAnswer: "C",
  },
  {
    id: 73,
    question:
      "Which therapy is indicated for a patient with pulmonary edema and cardiogenic shock?",
    answers: [
      "alpha-adrenergic drugs to increase coronary perfusion",
      "nitrates to decrease afterload",
      "beta-receptor blockade agents to increase cardiac contractility",
      "mechanical circulatory assist devices to increase coronary perfusion",
    ],
    correctAnswer: "D",
  },
  {
    id: 74,
    question:
      "During the initial assessment of a patient with pancreatitis, a nurse notices a spasm in the patient’s hand when a BP cuff is inflated. This finding reflects which electrolyte disturbance?",
    answers: [
      "high serum potassium",
      "high serum magnesium",
      "low serum calcium",
      "low serum phosphate",
    ],
    correctAnswer: "C",
  },
  {
    id: 75,
    question: "Which can be an effect of positive-pressure ventilation?",
    answers: [
      "decrease in carbon dioxide",
      "decrease in bronchial secretions",
      "decrease in inspiratory pressure",
      "decrease in plateau pressure",
    ],
    correctAnswer: "A",
  },
  {
    id: 76,
    question:
      "A patient who does not speak or understand English is admitted to the unit. Guidelines for using a translator may include",
    answers: [
      "having the translator ask questions that you don’t feel comfortable asking.",
      "standing next to the translator and as close to the patient as possible.",
      "providing all of the information, then allowing translation and asking of questions.",
      "allowing time for the translator to decode the medical jargon used in the teaching.",
    ],
    correctAnswer: "B",
  },
  {
    id: 77,
    question:
      "A patient was admitted with hepatic failure and severe dehydration. The patient is encephalopathic. Which treatment should the nurse anticipate?",
    answers: [
      "potassium replacement",
      "volume repletion with lactated Ringer’s",
      "broad-spectrum IV antibiotics",
      "benzodiazepines",
    ],
    correctAnswer: "A",
  },
  {
    id: 78,
    question:
      "A nurse has noticed an increased incidence of skin breakdown under the standard wound dressing protocol. The nurse should",
    answers: [
      "experiment with dressing wounds using a different technique.",
      "perform a literature search to identify current trends in dressing protocols.",
      "recommend an evaluation of the present dressing protocol.",
      "apply an antibiotic ointment to wounds when changing the dressing.",
    ],
    correctAnswer: "C",
  },
  {
    id: 79,
    question: "Which mechanism contributes to hypotension in sepsis?",
    answers: [
      "elevated afterload",
      "increased cardiac contractility",
      "peripheral vasodilation",
      "decreased vascular permeability",
    ],
    correctAnswer: "C",
  },
  {
    id: 80,
    question:
      "A patient is on a regimen of nitroprusside (Nipride) and nitroglycerin (Tridil). Because of the combined effects of these drugs, the nurse should be alert to the possible development of",
    answers: [
      "atrial dysrhythmias, particularly paroxysmal atrial tachycardia.",
      "prolonged PR interval and bundle branch block.",
      "reduced coronary artery perfusion secondary to hypotension.",
      "increased peripheral vascular resistance.",
    ],
    correctAnswer: "C",
  },
  {
    id: 81,
    question:
      "Heparin should be used in treating a patient with an acute pulmonary embolus because it",
    answers: [
      "activates plasminogen, which dissolves the embolus.",
      "potentiates the conversion of fibrinogen to fibrin.",
      "prevents platelet aggregation on an embolus.",
      "reacts with plasminogen to form plasmin.",
    ],
    correctAnswer: "C",
  },
  {
    id: 82,
    question:
      "A patient with receptive aphasia and dementia is to be enrolled in a clinical trial. How should the nurse proceed to ensure that informed consent is properly obtained?",
    answers: [
      "Involve the patient’s legal guardian in the consent process.",
      "Ensure that the investigator is aware of the patient’s condition.",
      "Inform the institutional review board (IRB) of the potential risk to the patient.",
      "Obtain a copy of the consent form to place in the patient’s chart.",
    ],
    correctAnswer: "A",
  },
  {
    id: 83,
    question:
      "Three days after admission from the PACU, a patient becomes restless and is attempting to climb out of bed and chew the IV lines, thinking they are pasta. The nurse should assess for",
    answers: [
      "ability to carry on a coherent conversation.",
      "overdose of medication.",
      "difficulty recalling recent events.",
      "delirium tremens.",
    ],
    correctAnswer: "A",
  },
  {
    id: 84,
    question:
      "Which statement by a family member should be a trigger for the nurse to investigate possible elder abuse?",
    answers: [
      '"Can you look at the rash my mother has in her groin area?"',
      '"I think my father is getting depressed since my mother passed away."',
      '"My mother has become so fastidious; she sometimes showers twice a day."',
      '"My father hurt his buttocks when he fell off a ladder while changing a light bulb."',
    ],
    correctAnswer: "A",
  },
  {
    id: 85,
    question:
      "A patient is admitted after an MVC. The patient is restless with cool, clammy skin and complains of chest and back pain. Breath sounds are diminished over the left side. An upright chest x-ray reveals fractures of the left fifth through seventh ribs and a 25% left hemothorax. Pertinent data are:",
    clinicalData: [
      "BP 80/50",
      "HR 125",
      "RR 28 and slightly labored",
      "CVP 2 mm Hg",
    ],
    followUp:
      "Which measures are MOST LIKELY to be included in this patient’s initial care?",
    answers: [
      "immediate thoracotomy, endotracheal intubation, and dopamine (Intropin)",
      "chest tube insertion, oxygen, and fluid bolus",
      "thoracentesis, IV D5W at a keep vein open (KVO) rate, and digoxin (Lanoxin)",
      "pericardiocentesis, fluid bolus, and oxygen",
    ],
    correctAnswer: "B",
  },
  {
    id: 86,
    question:
      "A patient in alcohol withdrawal is hallucinating about puppies biting his toes. The nurse should",
    answers: [
      "control external noise by whispering to fellow staff members.",
      "comfort the patient with therapeutic touch.",
      "provide logical justification to explain that hallucinations are not real.",
      "talk concretely about actual circumstances.",
    ],
    correctAnswer: "D",
  },
  {
    id: 87,
    question:
      "A patient is admitted with a subarachnoid hemorrhage. The nurse should anticipate",
    answers: [
      "intubation at the time of respiratory arrest.",
      "administration of antibiotics to prevent pneumonia.",
      "initiation of parenteral nutrition.",
      "avoiding breath holding during procedures.",
    ],
    correctAnswer: "D",
  },
  {
    id: 88,
    question:
      "In a patient with acute tubular necrosis (ATN), which sequelae should be expected?",
    answers: [
      "hypercalcemia, hypertension and acidosis",
      "hypokalemia, anemia and hypertension",
      "hyperkalemia, acidosis and azotemia",
      "hypocalcemia, anemia and alkalosis",
    ],
    correctAnswer: "C",
  },
  {
    id: 89,
    question:
      "Kehr’s sign in a patient with blunt abdominal trauma MOST LIKELY indicates",
    answers: [
      "bowel injury.",
      "diaphragm irritation.",
      "ruptured kidney.",
      "ruptured bladder.",
    ],
    correctAnswer: "B",
  },
  {
    id: 90,
    question: "Which laboratory data are consistent with DIC?",
    answers: [
      "decreased PLT, increased FSP",
      "increased PTT, decreased FSP",
      "decreased PT, increased PLT",
      "decreased fibrinogen, decreased PTT",
    ],
    correctAnswer: "A",
  },
  {
    id: 91,
    question:
      "After a right thoracotomy for removal of the middle and lower lobes, two chest tubes are attached to a chest drainage system to",
    answers: [
      "reestablish negative pleural pressure.",
      "drain pleural fluid.",
      "evacuate mediastinal air and fluid.",
      "decrease lung compliance.",
    ],
    correctAnswer: "A",
  },
  {
    id: 92,
    question:
      "The purpose of using PEEP in the treatment of ARDS and pneumonia is to",
    answers: [
      "allow for the lowest possible ventilatory rate.",
      "promote healing of alveolar and capillary membranes.",
      "increase alveolar recruitment.",
      "decrease pulmonary shunting.",
    ],
    correctAnswer: "C",
  },
  {
    id: 93,
    question:
      "A patient is admitted to the unit with dyspnea, tachypnea and pulmonary congestion. A loud pansystolic murmur at the apex with a thrill develops. Prominent large V waves appear when a PA occlusive pressure reading is taken. The nurse should suspect the patient has developed",
    answers: [
      "mitral regurgitation.",
      "mitral stenosis.",
      "aortic regurgitation.",
      "aortic stenosis.",
    ],
    correctAnswer: "A",
  },
  {
    id: 94,
    question:
      "A patient has been admitted twice in the past six months for status asthmaticus. The caregivers smell of smoke when they come to the hospital but state they don’t smoke in the house. The most appropriate discharge planning intervention is to",
    answers: [
      "discuss with the caregivers how to avoid asthma triggers at home.",
      "give the caregivers literature about smoking cessation treatment and support groups.",
      "call Adult Protective Services to report a medically unsafe home environment.",
      "remind the caregivers they shouldn’t smoke around the patient.",
    ],
    correctAnswer: "B",
  },
  {
    id: 95,
    question: "A direct effect of sodium nitroprusside (Nipride) is to",
    answers: [
      "decrease stroke volume.",
      "increase venous return.",
      "decrease afterload.",
      "increase pulmonary vascular resistance.",
    ],
    correctAnswer: "C",
  },
  {
    id: 96,
    question:
      "Nitrate therapy is indicated for the treatment of unstable angina because it",
    answers: [
      "increases preload and increases myocardial O2 demand.",
      "decreases preload and increases myocardial O2 demand.",
      "decreases preload and decreases myocardial O2 demand.",
      "increases preload and decreases myocardial O2 demand.",
    ],
    correctAnswer: "C",
  },
  {
    id: 97,
    question: "Which is a compensatory mechanism of hemorrhagic shock?",
    answers: [
      "peripheral vasodilation",
      "parasympathetic stimulation",
      "increased reabsorption of sodium and water",
      "increased fluid shift from the capillaries to the interstitial space",
    ],
    correctAnswer: "C",
  },
  {
    id: 98,
    question:
      "Which parameter can be used to predict the likelihood of removing the patient from mechanical ventilation?",
    answers: [
      "PaO2/FiO2 greater than or equal to 175",
      "minute ventilation equal to 12 L/min",
      "vital capacity equal to 60 mL/kg",
      "tidal volume equal to 4 mL/kg",
    ],
    correctAnswer: "C",
  },
  {
    id: 99,
    question:
      "When assessing a patient who has a chest tube, the nurse notices that fluid in the water seal chamber rises during inspiration and falls during expiration. These movements indicate",
    answers: [
      "tension pneumothorax.",
      "normal pleural pressure changes.",
      "increased intrathoracic pressure.",
      "a pleural air leak.",
    ],
    correctAnswer: "B",
  },
  {
    id: 100,
    question:
      "A patient is admitted following an overdose of methamphetamine. The nurse should anticipate",
    answers: [
      "providing volume repletion and beginning cooling.",
      "administering naloxone (Narcan) and preparing for intubation.",
      "providing a companion and protecting the patient from self-harm.",
      "observing for development of rhabdomyolysis and monitoring renal function.",
    ],
    correctAnswer: "A",
  },
    {
    id: 101,
    question:
      'A patient experiencing a fourth episode of heart failure states, "I cannot take it anymore. I wish I could end all of this." A priority when caring for this patient’s response to stress is to',
    answers: [
      "place the patient in a hospital gown or pajamas.",
      "explore the intent of the comment with the patient.",
      "manage the patient in a restrictive environment for the first 48 hours.",
      "allow the patient to have only short periods alone once in a safe environment.",
    ],
    correctAnswer: "B",
  },
  {
    id: 102,
    question:
      "Which electrolyte abnormality should the nurse anticipate in a patient newly admitted with chronic alcoholism?",
    answers: [
      "hypomagnesemia",
      "hypophosphatemia",
      "hyponatremia",
      "hyperkalemia",
    ],
    correctAnswer: "A",
  },
  {
    id: 103,
    question:
      "Which ABG values is MOST INDICATIVE of a diagnosis of acute respiratory failure?",
    answers: [
      "pH 7.18, pCO2 70, pO2 54, HCO3 26",
      "pH 7.18, pCO2 80, pO2 63, HCO3 42",
      "pH 7.26, pCO2 55, pO2 80, HCO3 24",
      "pH 7.34, pCO2 45, pO2 65, HCO3 23",
    ],
    correctAnswer: "A",
  },
  {
    id: 104,
    question:
      "Which findings are consistent with a diagnosis of a massive hemothorax?",
    answers: [
      "hyperresonance to percussion and decreased excursion on affected side, tracheal deviation toward the affected side",
      "hyperresonance to percussion and absent breath sounds on affected side, tracheal deviation toward the unaffected side",
      "dullness to percussion and decreased excursion on affected side, tracheal deviation toward the affected side",
      "dullness to percussion and absent breath sounds on affected side, tracheal deviation toward the unaffected side",
    ],
    correctAnswer: "D",
  },
  {
    id: 105,
    question:
      "Which cerebral artery is most commonly involved in an epidural bleed?",
    answers: [
      "anterior meningeal",
      "middle meningeal",
      "anterior cerebral",
      "middle cerebral",
    ],
    correctAnswer: "B",
  },
  {
    id: 106,
    question:
      "The purpose of implementing a bowel regimen in a patient with DIC is to decrease the risk for",
    answers: [
      "small-bowel obstruction.",
      "hemorrhage.",
      "intracranial hemorrhage.",
      "fluid and electrolyte disturbances.",
    ],
    correctAnswer: "C",
  },
  {
    id: 107,
    question:
      "Which parameter indicates successful management of right ventricular (RV) failure?",
    answers: [
      "decreased CVP",
      "decreased PAOP",
      "increased PAD",
      "increased RV pressure",
    ],
    correctAnswer: "A",
  },
  {
    id: 108,
    question:
      "A patient is admitted with long bone fracture of the forearm. The patient reports severe pain and numbness to the extremity. Compartment pressure is 35 mm Hg. BP is 100/55. Which intervention should the nurse anticipate?",
    answers: [
      "administration of medication to increase systolic BP",
      "elevation of the arm on a pillow",
      "placement of a warm soak to the painful area",
      "prepare patient for fasciotomy",
    ],
    correctAnswer: "D",
  },
  {
    id: 109,
    question: "Mediastinal chest tubes are used to",
    answers: [
      "promote lung re-expansion.",
      "remove serosanguineous fluid from the operative site.",
      "remove air, blood or serous fluid from the pleural space.",
      "improve air exchange at the alveolar level.",
    ],
    correctAnswer: "B",
  },
  {
    id: 110,
    question: "Hypokalemia can be caused by",
    answers: [
      "crush injuries and nasogastric suctioning.",
      "blood transfusions and hemolysis.",
      "diuretics and alkalosis.",
      "diarrhea and acidosis.",
    ],
    correctAnswer: "C",
  },
  {
    id: 111,
    question:
      "A patient with DKA is admitted. Since admission, the patient’s glucose levels have been 400-500 mg/dL, and regular insulin has been administered on a sliding dosage scale. Given these findings, the most appropriate INITIAL nursing intervention is to",
    answers: [
      "consult with the provider about changing the regimen to regular insulin via continuous drip.",
      "arrange for nutritional consult to enhance adherence to an ADA diet.",
      "consult with the provider about increasing the maximum dosage of regular insulin on a sliding scale.",
      "request evaluation by a diabetes educator.",
    ],
    correctAnswer: "A",
  },
  {
    id: 112,
    question:
      "A patient is admitted following an MVC. The patient is dyspneic, with a RR of 40. Breath sounds are greatly diminished on the right, with hyperresonance. On the basis of these findings, the nurse should MOST LIKELY suspect",
    answers: [
      "flail chest.",
      "pneumothorax.",
      "pulmonary embolus.",
      "hemothorax.",
    ],
    correctAnswer: "B",
  },
  {
    id: 113,
    question:
      "The chest pain associated with a dissecting aortic aneurysm differs from the chest pain associated with an AMI in that aneurysm pain is USUALLY",
    answers: [
      "a squeezing tight pressure.",
      "relieved by rest.",
      "an intermittent dull aching pain.",
      "a sudden sharp stabbing, tearing pain.",
    ],
    correctAnswer: "D",
  },
  {
    id: 114,
    question:
      "Which finding is MOST CONSISTENT with an acute elevation in left ventricular filling pressure?",
    answers: [
      "sinus bradycardia",
      "diastolic murmur",
      "peripheral edema",
      "bibasilar crackles",
    ],
    correctAnswer: "D",
  },
  {
    id: 115,
    question:
      "Which medications are MOST IMPORTANT in the emergency treatment of status asthmaticus?",
    answers: [
      "corticosteroids",
      "diuretics",
      "bronchodilators",
      "anxiolytics",
    ],
    correctAnswer: "C",
  },
  {
    id: 116,
    question:
      "Primary pharmacological management of the patient with sepsis includes administration of",
    answers: [
      "antibiotics.",
      "vasodilators.",
      "diuretics.",
      "analgesics.",
    ],
    correctAnswer: "A",
  },
  {
    id: 117,
    question:
      'A patient transferring out of the unit says, "Why can’t I just stay a few days longer? I don’t feel strong enough." Which is the MOST APPROPRIATE response?',
    answers: [
      '"There’s a very sick patient who needs this bed."',
      '"You sound concerned about leaving the unit."',
      '"Most people do just fine after transfer."',
      '"Your insurance limits the time you can stay in the unit."',
    ],
    correctAnswer: "B",
  },
  {
    id: 118,
    question:
      "A ventilated patient is receiving tube feedings and has suspected aspiration. Which pulmonary parameter should the nurse expect to observe?",
    answers: [
      "an increase in peak inspiratory pressure",
      "an increase in expired tidal volume",
      "a decrease in respiratory rate",
      "a decrease in negative inspiratory force",
    ],
    correctAnswer: "A",
  },
  {
    id: 119,
    question:
      "Which laboratory determination is the PREFERRED indicator in distinguishing between DKA and HHS?",
    answers: [
      "serum glucose",
      "serum sodium",
      "serum potassium",
      "serum osmolality",
    ],
    correctAnswer: "D",
  },
  {
    id: 120,
    question:
      "A primary concern when caring for a patient diagnosed with pancreatitis is to closely monitor fluid and electrolyte levels, because",
    answers: [
      "hypercalcemia is common.",
      "plasma volume is lost as pancreatic enzymes increase capillary permeability.",
      "hypoglycemia occurs secondary to glucagon release.",
      "dehydration is common due to the diuretic effect of pancreatic enzymes in the blood.",
    ],
    correctAnswer: "B",
  },
  {
    id: 121,
    question:
      "In a patient with a pulmonary embolism, arterial hypoxemia may be due to a(n)",
    answers: [
      "diffusion defect.",
      "anatomic shunt.",
      "ventilation-perfusion mismatch.",
      "narrowed A-a gradient.",
    ],
    correctAnswer: "C",
  },
  {
    id: 122,
    question:
      "An unresponsive patient is admitted with a BP of 72/50 and the following rhythm. The MOST APPROPRIATE therapy in this situation is",
    image: "/ecg/q122-ecg.png",
    answers: [
      "cardioversion.",
      "defibrillation.",
      "lidocaine 1 mg/kg IV.",
      "verapamil 5 mg IV.",
    ],
    correctAnswer: "A",
  },
  {
    id: 123,
    question:
      "In a patient who has just sustained a severe head injury in a high-speed MVC, which should be a high-priority concern?",
    answers: [
      "myocardial contusion",
      "cerebral edema",
      "diabetes",
      "status epilepticus",
    ],
    correctAnswer: "B",
  },
  {
    id: 124,
    question:
      "In the presence of blunt cardiac trauma, which finding supports a diagnosis of myocardial contusion?",
    answers: [
      "cardiac dysrhythmias",
      "PMI shifted to the right",
      "increased myoglobin",
      "bounding pulses",
    ],
    correctAnswer: "A",
  },
  {
    id: 125,
    question:
      "Two hours after a complicated premature delivery with placenta abruption, the nurse notes that the puncture wound from the patient’s recent venipuncture is continuously bleeding. Which laboratory tests should the nurse anticipate obtaining?",
    answers: [
      "ionized calcium and pitocin levels",
      "prothromin time and D-dimer",
      "fibrin split product and magnesium",
      "D-dimer and factor IX assay",
    ],
    correctAnswer: "B",
  },
  {
    id: 126,
    question:
      "Which one of the following is the definitive procedure for diagnosing pulmonary emboli?",
    answers: [
      "ABG measurement",
      "radioisotope lung scan",
      "pulmonary angiography",
      "chest x-ray",
    ],
    correctAnswer: "C",
  },
  {
    id: 127,
    question:
      "A 70-kg patient with acute respiratory failure is being mechanically ventilated on the following settings:",
    clinicalData: [
      "FiO2 40%",
      "Rate 6 breaths/min",
      "VT 600 mL",
      "pH 7.28",
      "pCO2 51 mm Hg",
      "pO2 68 mm Hg",
      "HCO3 27 mEq/L",
    ],
    followUp: "Which ventilator adjustment should be implemented?",
    answers: [
      "Increase the rate.",
      "Decrease the tidal volume.",
      "Decrease the peak flow.",
      "Increase the I:E ratio.",
    ],
    correctAnswer: "A",
  },
  {
    id: 128,
    question:
      "Following an abdominal aortic aneurysm (AAA) repair, a patient is confused and combative. After speaking with the family, the nurse determines that the patient has delirium, because",
    answers: [
      "the patient pays attention when you are speaking to him.",
      "the confusion has been present for the last six months.",
      "some days the patient is more oriented than other days.",
      "the patient’s speech is incoherent and rambling.",
    ],
    correctAnswer: "D",
  },
  {
    id: 129,
    question: "Cor pulmonale is characterized by",
    answers: [
      "degeneration of the myocardium.",
      "pulmonary edema resulting from LV failure.",
      "enlargement of the RV secondary to pulmonary disease.",
      "failure of the LV to pump adequately.",
    ],
    correctAnswer: "C",
  },
  {
    id: 130,
    question:
      "A patient becomes restless, dyspneic, tachypneic and tachycardia. New patchy infiltrates are noted on chest radiograph. The patient is intubated, and mechanical ventilation is initiated. The patient is sedated with propofol (Diprivan). The nurse SHOULD",
    answers: [
      "maintain head of bed elevation at 20 to 25 degrees.",
      "attempt trial withholding of sedation daily.",
      "position patient in lateral recumbent position.",
      "use IV fluids conservatively.",
    ],
    correctAnswer: "B",
  },
  {
    id: 131,
    question:
      "A patient overdosed on an unknown substance and had a seizure upon arrival in the unit. Vital signs are:",
    clinicalData: [
      "BP 190/110",
      "HR 124",
      "RR 10",
      "T 98.6°F (37°C)",
    ],
    followUp:
      "The patient has flushed dry skin, and eyes are flickering up and down. Pupils are 3 mm dilated and equally reactive to light. While waiting for the toxicology results, the nurse should suspect that the patient overdosed on",
    answers: [
      "LSD.",
      "PCP.",
      "methamphetamine.",
      "heroin.",
    ],
    correctAnswer: "B",
  },
  {
    id: 132,
    question:
      "A patient is admitted with an open pelvic fracture following an MVC. Vital signs are:",
    clinicalData: [
      "BP 80/50 (60)",
      "HR 124",
      "RR 24",
      "T 98.6°F (37°C)",
    ],
    followUp: "INITIAL nursing management should include",
    answers: [
      "checking for bleeding.",
      "preparing for orthopedic surgery.",
      "applying a pelvic binder.",
      "performing ongoing monitoring for fat emboli.",
    ],
    correctAnswer: "A",
  },
  {
    id: 133,
    question:
      "A patient is admitted postoperatively following repair of an abdominal aortic aneurysm (AAA) with a Dacron graft. The next day, the patient’s urine output decreases and serum creatinine increases. The nurse should suspect",
    answers: [
      "acute kidney injury.",
      "septic shock.",
      "acute rejection of graft.",
      "glomerulonephritis.",
    ],
    correctAnswer: "A",
  },
  {
    id: 134,
    question: "ARDS is characterized by",
    answers: [
      "chest x-ray with dulled costophrenic angles, refractory hypoxemia, and labored respirations.",
      "PAOP of 18 mm Hg, pO2 less than 60 mm Hg, and restlessness.",
      "decreased compliance, increased functional residual capacity (FRC), and dyspnea.",
      "an antecedent event, refractory hypoxemia, and tachypnea.",
    ],
    correctAnswer: "D",
  },
  {
    id: 135,
    question:
      "A patient with respiratory failure secondary to pneumonia appears confused and lethargic. The patient takes NSAIDs for arthritis. At present, BP and CVP are within acceptable ranges, mucous membranes are moist and skin turgor is normal. The serum sodium is 129 mEq/L, and serum osmolality is low. Which additional laboratory findings should the nurse anticipate?",
    answers: [
      "decreased serum bicarbonate and potassium levels",
      "elevated serum glucose and creatinine levels",
      "elevated uric acid and normal magnesium levels",
      "decreased BUN and normal serum potassium levels",
    ],
    correctAnswer: "D",
  },
  {
    id: 136,
    question:
      "A patient is admitted after an MVC. The patient is currently alert and oriented but had sustained a momentary loss of consciousness at the accident scene. The only significant injury is a linear temporal skull fracture. Within 2 hours of admission, the patient’s neurological status deteriorates. The nurse should now anticipate",
    answers: [
      "arteriography and silicone rubber bead embolization.",
      "ventriculostomy and cerebrospinal fluid drainage.",
      "osmotic diuretic and corticosteroid therapy.",
      "burr holes and clot evacuation.",
    ],
    correctAnswer: "D",
  },
  {
    id: 137,
    question:
      "A patient is admitted with rhabdomyolysis. Serum creatine kinase is 6500 units/L. Which should the nurse anticipate?",
    answers: [
      "administration of sodium bicarbonate",
      "maintenance of urinary output at 0.5 to 1 mL/kg/hour",
      "performance of a 12-lead ECG",
      "initiation of 0.9% sodium chloride at 10 mL/hr",
    ],
    correctAnswer: "A",
  },
  {
    id: 138,
    question: "Left ventricular failure can be caused by",
    answers: [
      "aortic regurgitation and hypertension.",
      "aortic stenosis and COPD.",
      "mitral regurgitation and pulmonary embolus.",
      "mitral stenosis and AMI.",
    ],
    correctAnswer: "A",
  },
  {
    id: 139,
    question:
      "Which nursing action might DECREASE a patient’s self-esteem?",
    answers: [
      "discussing the negative consequences of the patient’s condition",
      "requiring the patient to participate in all treatments",
      "providing opportunities to discuss issues important to the patient",
      "indicating acceptance of the patient’s condition",
    ],
    correctAnswer: "B",
  },
  {
    id: 140,
    question:
      "A patient presents with a chief complaint of lethargy. Lab data reveal a K+ of 7.2. BP is 100/60. An ECG reveals the rhythm shown below. On the basis of this information, the nurse should anticipate",
    image: "/ecg/q140-ecg.png",
    answers: [
      "cardioversion.",
      "1 ampule of 50% dextrose in water and 20 units of regular insulin subcutaneously stat.",
      "defibrillation.",
      "calcium to stabilize cardiac membranes.",
    ],
    correctAnswer: "D",
  },
  {
    id: 141,
    question: "Which ABG results indicate acute respiratory failure?",
    answers: [
      "pH 7.22, pCO2 48, pO2 82, HCO3 12, SPO2 92",
      "pH 7.24, pCO2 54, pO2 55, HCO3 22, SPO2 76",
      "pH 7.52, pCO2 28, pO2 76, HCO3 30, SPO2 82",
      "pH 7.36, pCO2 24, pO2 55, HCO3 16, SPO2 70",
    ],
    correctAnswer: "B",
  },
  {
    id: 142,
    question:
      "The primary purpose of continuous venovenous hemofiltration (CVVH) is to",
    answers: [
      "decrease serum osmolality.",
      "eliminate cytokines.",
      "optimize fluid balance.",
      "allow for rapid removal of potassium.",
    ],
    correctAnswer: "C",
  },
  {
    id: 143,
    question: "Which is a complication of a hypertensive crisis?",
    answers: [
      "left ventricular hypertrophy",
      "cerebral infarction",
      "aortic dissection",
      "left ventricular failure",
    ],
    correctAnswer: "B",
  },
  {
    id: 144,
    question:
      "A victim of an MVC is admitted with an acute intracranial bleed. The patient has hypotension and tachycardia. These findings are MOST LIKELY the result of",
    answers: [
      "shock from multiple trauma.",
      "extensive bleeding into the intracranial vault.",
      "neurogenic shock.",
      "increased intracranial pressure.",
    ],
    correctAnswer: "A",
  },
  {
    id: 145,
    question:
      "A patient is admitted with chest pain and nausea. The ECG shows new deep Q waves in leads I, aVL, V5 and V6. The patient’s ECG pattern is MOST CONSISTENT with a diagnosis of",
    answers: [
      "subendocardial infarction.",
      "anterior MI.",
      "inferior MI.",
      "lateral MI.",
    ],
    correctAnswer: "D",
  },
  {
    id: 146,
    question:
      "One month after VP shunt replacement, a patient is admitted with a positive Kernig’s sign and positive Brudzinski’s sign. These signs indicate",
    answers: [
      "a CNS infection.",
      "blockage in the shunt.",
      "peritonitis.",
      "noncommunicating hydrocephalus.",
    ],
    correctAnswer: "A",
  },
  {
    id: 147,
    question:
      "Which is a normal compensatory response to a decrease in cardiac output?",
    answers: [
      "increased oxygen delivery",
      "decreased oxygen consumption",
      "increased oxygen extraction",
      "decreased serum lactate",
    ],
    correctAnswer: "C",
  },
  {
    id: 148,
    question:
      "A patient with prolonged immobility should be monitored for",
    answers: [
      "decreased CVP",
      "decreased HR",
      "positive nitrogen state",
      "increased functional residual capacity",
    ],
    correctAnswer: "A",
  },
  {
    id: 149,
    question:
      "Which is MOST LIKELY a complication of Guillain-Barré syndrome?",
    answers: [
      "acute respiratory failure",
      "acute pulmonary edema",
      "acute lung injury",
      "acute pulmonary fibrosis",
    ],
    correctAnswer: "A",
  },
  {
    id: 150,
    question:
      "Which one of the following sets of hemodynamic data is associated with sepsis?",
    answers: [
      "PAOP greater than 8, SVR less than 800, SvO2 greater than 75%",
      "PAOP greater than 8, SVR greater than 1200, SvO2 less than 75%",
      "PAOP less than 8, SVR greater than 1200, SvO2 less than 75%",
      "PAOP less than 8, SVR less than 800, SvO2 greater than 75%",
    ],
    correctAnswer: "D",
  },
];

export default questions;