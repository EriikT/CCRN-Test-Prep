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
    explanation:
      "HHS typically causes elevated BUN and creatinine levels as a result of hypovolemia. Serum osmolality is also elevated, and a level greater than 320 mOsm/kg helps distinguish HHS from DKA. Therefore, HHS is associated with elevated BUN, creatinine, and serum osmolality.",
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
    explanation:
      "This patient has findings consistent with SIADH. Fluid restriction is the initial treatment because it limits further water retention and helps improve the dilutional hyponatremia. Hypertonic 3% saline is generally reserved for severe symptomatic hyponatremia, and sodium must not be corrected too rapidly because rapid correction can cause serious neurologic injury.",
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
    explanation:
      "Psychotropic medications increase the risk of alcohol-related problems in older adults because alcohol can intensify their sedative effects. Older adults also metabolize alcohol more slowly and generally have less total body water and lean body tissue, which can increase alcohol concentrations and effects.",
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
    explanation:
      "Normal oxygen consumption is approximately 250 mL/min, making this an appropriate endpoint of volume resuscitation. A low CVP, a cardiac index below the normal range, or an elevated base deficit would not indicate that adequate volume resuscitation has been achieved.",
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
    explanation:
      "An inferior-wall myocardial infarction is associated with ECG changes in leads II, III, and aVF. ST elevation in V4-V6, I, and aVL is associated with anterolateral involvement, while ST depression generally suggests ischemia or an NSTEMI.",
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
    explanation:
      "ARDS causes decreased lung compliance because inflammatory injury increases pulmonary capillary permeability and produces interstitial and alveolar edema. Surfactant is also impaired, contributing to alveolar collapse and reduced functional residual capacity.",
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
    explanation:
      "With atrial fibrillation and an acceptable blood pressure, treatment is directed at controlling the ventricular rate. Cardiac glycosides such as digoxin and calcium-channel blockers can slow AV conduction, whereas beta-agonists would increase the heart rate and vasopressors are not indicated when blood pressure is adequate.",
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
    explanation:
      "Heart failure, especially with reduced ejection fraction, increases ventricular stretch and electrical instability. Electrolyte abnormalities and myocardial disease can further increase the risk of ventricular tachycardia, which is a life-threatening dysrhythmia.",
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
    correctAnswer: "B",
    explanation:
      "This patient has systolic heart failure related to severe coronary artery disease. Carvedilol, a beta-blocker, and lisinopril, an ACE inhibitor, help reduce cardiac workload, decrease afterload, and limit harmful ventricular remodeling. These effects make this combination beneficial in heart failure. Calcium-channel blockers such as verapamil and diltiazem are generally not preferred in systolic heart failure because of their negative effects on cardiac contractility.",
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
    explanation:
      "Status epilepticus can occur when antiseizure medications are stopped abruptly. It involves continuous or recurrent seizure activity without full recovery between episodes, and prolonged seizure activity can cause severe cerebral metabolic stress and systemic complications.",
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
    explanation:
      "The sudden hypotension, tachycardia, oliguria, and back pain after AAA repair suggest postoperative bleeding and hypovolemic shock. Nitroprusside should be stopped because it can worsen the hypotension, and the patient should be prepared for urgent surgical evaluation and possible return to the operating room.",
  },
  {
    id: 12,
    question:
      "A patient with head trauma is experiencing increased intracranial pressure. The ideal level at which to maintain the arterial pCO2 is between",
    answers: ["15 and 20.", "35 and 45.", "25 and 30.", "45 and 50."],
    correctAnswer: "B",
    explanation:
      "Carbon dioxide strongly affects cerebral blood flow. A PaCO2 in the normal range of about 35-45 mm Hg is generally maintained because low CO2 causes cerebral vasoconstriction and reduced cerebral blood flow, while high CO2 causes vasodilation and can increase intracranial pressure.",
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
    explanation:
      "Chronic emphysema can cause pulmonary hypertension and eventually cor pulmonale, or right-sided heart failure. As right-sided filling pressures rise, CVP increases. Increased pulmonary vascular resistance can also reduce forward blood flow.",
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
    explanation:
      "A patient is tolerating activity when vital signs remain reasonably close to resting values. A heart rate increase of no more than about 20 beats/minute is acceptable; the other findings show excessive changes in blood pressure, respiratory rate, or mixed venous oxygen saturation.",
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
    explanation:
      "Distributive shock is characterized by loss of vascular tone and peripheral vasodilation, producing a very low systemic vascular resistance. Venous return and filling pressures such as CVP and PAOP are often low, while cardiac output may initially be normal or elevated.",
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
    explanation:
      "Pressure support assists each spontaneous breath and helps overcome the resistance created by the endotracheal tube. This reduces the patient's work of breathing, improves comfort and synchrony, and can help during ventilator weaning.",
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
    explanation:
      "Guillain-Barré syndrome can weaken the diaphragm and other respiratory muscles as demyelination progresses. Vital capacity is a key measure because a falling vital capacity can identify impending ventilatory failure before oxygen saturation drops significantly.",
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
    correctAnswer: "B",
    explanation:
      "Marked hypotension together with new ST-segment changes shortly after PCI should raise concern for abrupt reclosure of the treated coronary artery. Acute vessel closure can rapidly reduce myocardial blood flow and cause recurrent ischemia, producing ECG changes and hemodynamic instability.",
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
    explanation:
      "The patient has dry skin, poor turgor, lethargy, and an acute illness, all of which point to significant volume depletion. Both DKA and severe infection can produce dehydration, making hypovolemia the most likely immediate cause of the patient's condition.",
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
    explanation:
      "Diabetes insipidus results from inadequate ADH activity. The kidneys lose large amounts of free water, causing increased serum osmolality and hypernatremia while ADH levels are decreased in central DI.",
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
    explanation:
      "A multidisciplinary care conference allows the healthcare team to address the patient's wishes, visitation, communication, and family conflict in a coordinated way. This approach supports advocacy, caring practices, and shared decision-making without placing the patient in the middle of the conflict.",
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
    explanation:
      "Severe pain and decreased sensation after a long-bone fracture suggest compartment syndrome. The orthopedic surgeon should be notified immediately because increased compartment pressure can rapidly compromise circulation and nerve function and may require urgent fasciotomy.",
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
    explanation:
      "This patient has multiple risk factors for a severe postoperative soft-tissue infection such as necrotizing fasciitis. The highest priority is complete surgical exploration and debridement of necrotic tissue, which usually requires a return to the operating room before definitive wound closure.",
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
    explanation:
      "An anterior MI involving the LAD can severely impair left ventricular function and produce cardiogenic shock. The expected profile includes hypotension, reduced cardiac output, increased systemic vascular resistance from compensatory vasoconstriction, and elevated pulmonary artery pressures from left-sided congestion.",
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
    explanation:
      "A high PAOP, an S3, shortness of breath, and bibasilar crackles indicate elevated left ventricular filling pressure and pulmonary congestion. These findings are most consistent with left ventricular decompensation following an anterior-wall acute coronary syndrome.",
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
    explanation:
      "The frothy sputum, severe dyspnea, tachypnea, anxiety, edema, and history of ischemic cardiomyopathy are classic for acute decompensated heart failure with pulmonary edema. Fluid backs up into the pulmonary circulation and enters the alveoli, producing respiratory distress and frothy secretions.",
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
    explanation:
      "An upper GI bleed can increase BUN because digested blood proteins are absorbed and metabolized, while fluid loss and vomiting can cause hypernatremia from dehydration. Significant bleeding may also cause hypotension and tissue hypoperfusion.",
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
    explanation:
      "When a confused patient is at risk for injury, the least restrictive intervention should be tried first. Increasing observation allows closer supervision and safety monitoring without immediately resorting to physical restraints or sedating medication.",
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
    explanation:
      "The oliguria, rapid weight gain, crackles, markedly elevated BUN and creatinine, and hyperkalemia indicate acute kidney injury with fluid retention. Reduced renal perfusion after major trauma can lead to impaired filtration and accumulation of fluid and potassium.",
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
    explanation:
      "Thoracic aortic aneurysms are often asymptomatic. The rationale identifies a diameter of about 5.5 cm or greater as an indication for surgical repair because the risk of complications increases as the aneurysm enlarges.",
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
    explanation:
      "ARDS causes surfactant dysfunction and interstitial or alveolar fluid accumulation. Loss of surfactant increases surface tension and promotes alveolar collapse, while edema further decreases lung compliance and contributes to atelectasis.",
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
    explanation:
      "Morbid obesity decreases functional residual capacity because increased abdominal pressure pushes the diaphragm upward and decreases chest wall and lung compliance. This makes postoperative patients prone to small-airway closure and rapid oxygen desaturation.",
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
    explanation:
      "Status asthmaticus causes marked tachypnea and increased work of breathing, which increase insensible fluid loss and can lead to dehydration. As severe obstruction progresses, carbon dioxide may begin to rise, which is an ominous sign of worsening ventilatory failure.",
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
    explanation:
      "Adults learn best when they recognize a need for the information and see how it applies to an immediate goal. Teaching is more effective when it is relevant, appropriately timed, and connected to care the family member expects to provide.",
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
    explanation:
      "With a major open pelvic fracture, maintaining perfusion is the priority. Fluid and blood or blood-product replacement are essential because pelvic fractures can cause substantial blood loss even when the patient initially appears hemodynamically stable.",
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
    explanation:
      "The patient's tidal volume is 600 mL at a body weight of 60 kg, or about 10 mL/kg. Lung-protective ventilation generally uses a lower tidal volume, so decreasing the tidal volume is the most appropriate adjustment when oxygenation and ventilation are otherwise acceptable.",
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
    explanation:
      "Hypercalcemia can be associated with hypokalemia and other electrolyte disturbances. The nurse should monitor potassium closely because changes in potassium can increase the risk of cardiac and neuromuscular complications.",
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
    explanation:
      "The anterior cerebral artery supplies medial portions of the frontal and parietal lobes that are involved in voluntary motor function, especially of the lower extremities. An embolus in this artery can therefore produce major motor weakness or hemiplegia.",
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
    explanation:
      "Before specific home services can be planned, the patient's home environment and family resources need to be assessed. A social worker can evaluate the home, available support, equipment needs, and barriers so the discharge team can build an appropriate plan.",
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
    explanation:
      "The combination of leukocytosis and marked tachycardia is consistent with the systemic inflammatory response associated with sepsis. Sepsis commonly produces abnormal temperature, tachycardia, tachypnea, and white-blood-cell abnormalities.",
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
    explanation:
      "The nurse should encourage the adolescent to express these feelings to the family. The patient's thoughts and preferences are important and should be included in the decision-making process, even when parental consent may be required. Encouraging open communication gives the patient an opportunity to have concerns heard and explored rather than dismissing those concerns or responding with fear.",
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
    explanation:
      "The P waves have no consistent relationship with the QRS complexes, indicating AV dissociation. No atrial impulses are conducting through the AV node to produce ventricular depolarization, so the atria and ventricles are firing independently. These findings are characteristic of third-degree AV block.",
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
    explanation:
      "A hydrofiber dressing is appropriate for a stage III pressure injury with substantial exudate because it absorbs drainage while maintaining a moist wound-healing environment. It also supports autolytic debridement and can be removed with less trauma than wet-to-dry dressings.",
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
    explanation:
      "Benzodiazepines are the treatment of choice for significant alcohol withdrawal because they reduce agitation and help prevent or treat withdrawal seizures. Vitamins and nutritional support may also be needed, but they do not control the acute withdrawal syndrome.",
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
    explanation:
      "When a family requests organ donation, the organ procurement organization should be contacted so trained personnel can determine eligibility and guide the donation process. Hepatitis C does not automatically exclude donation, and other care changes should follow the appropriate team and provider process.",
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
    explanation:
      "Maintaining the integrity of the family system is important during the transplant process. Expressions of frustration and hopelessness should be acknowledged and addressed in a supportive environment rather than ignored or suppressed.",
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
    explanation:
      "The best first response is to clarify exactly which monitor numbers are causing concern. Asking the family what they are worried about allows the nurse to provide focused education without making assumptions or increasing their anxiety.",
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
    explanation:
      "A recurring problem related to a hospital policy should be approached systematically. Forming a committee or workgroup allows staff to review the evidence, examine the pattern of blood-pressure instability, and recommend a safe policy change rather than ignoring the policy or using an unsafe workaround.",
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
    explanation:
      "The spouse's concern is most appropriately addressed by explaining the improvements in the patient's condition that make transfer safe. This helps the patient and spouse understand that transfer reflects clinical progress rather than simply bed availability or staffing differences.",
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
    explanation:
      "A patient who deliberately ingested a toxic substance requires both medical stabilization and therapeutic assessment of the circumstances surrounding the attempt. Discussing the event helps assess risk and needs; routine isolation, mandatory locked admission, or restraints are not automatically required.",
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
    explanation:
      "When a family member arrives after a patient's death, explaining the care that was provided can help with understanding, coping, and the grieving process. The wife should be supported and prepared rather than simply left waiting or immediately taken to the morgue.",
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
    explanation:
      "Using one shared teaching flow sheet allows all disciplines to see what education has already been completed, what the patient understands, and what still needs reinforcement. This improves collaboration and reduces duplication or gaps in discharge teaching.",
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
    explanation:
      "Hypothermia can cause pupils to become fixed and poorly reactive. Opiates usually cause pinpoint pupils, while hypoxia can produce dilated or fixed pupils depending on severity.",
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
    explanation:
      "When a family member is threatening, the nurse should use a nonthreatening posture, acknowledge the person's distress, and move the conversation to a private setting if it is safe to do so. Touching an agitated person or confronting the person directly can escalate the situation.",
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
    explanation:
      "For a postoperative patient who cannot speak or understand English, gestures and a picture board provide a simple way to communicate immediate needs such as pain or breathing difficulty. A letter board or English yes-no questions may not work because of the language barrier.",
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
    explanation:
      "A workgroup should review the 4 a.m. chest x-ray policy using a collaborative and systematic problem-solving process. This allows the hospital to evaluate why the policy exists, its effect on patients, and whether evidence supports a change.",
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
    explanation:
      "The most important information before fibrinolytic treatment for suspected stroke is the exact time symptoms began or the last known well time. Eligibility for fibrinolytic therapy depends heavily on the treatment window, so symptom onset must be established immediately.",
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
    explanation:
      "Administrators are more likely to support an educational program when its financial value is supported by evidence. Research showing that education can reduce length of stay directly connects the proposal to improved outcomes and lower costs.",
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
    explanation:
      "Transfer criteria differ among rehabilitation facilities, so the nurse should collaborate directly with rehabilitation staff. This ensures that the patient meets the receiving facility's actual requirements instead of assuming that complete independence or bowel and bladder control are mandatory.",
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
    explanation:
      "A trained interpreter who speaks the family's language is the most useful resource even if the parents appear proficient in English. Professional interpretation improves accuracy, allows culturally appropriate communication, and helps ensure that important medical information is understood.",
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
    explanation:
      "When many family members are requesting information, identifying one family spokesperson helps provide consistent updates and reduces conflicting or repeated communication. Other supportive services can be offered afterward as needed.",
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
    explanation:
      "Cardiogenic shock is caused by severe pump failure, so the cardiac index is typically low, often below 2 L/min/m2. Systemic vascular resistance usually rises as the body compensates, and mixed venous oxygen saturation tends to fall because tissues extract more oxygen from the reduced blood flow.",
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
    explanation:
      "Aortic valve insufficiency is a contraindication to intra-aortic balloon counterpulsation. Balloon inflation during diastole increases aortic diastolic pressure and can worsen regurgitant flow back through an incompetent aortic valve.",
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
    explanation:
      "Patients receiving a lung transplant for emphysema are often able to be liberated from mechanical ventilation relatively quickly compared with patients with pulmonary hypertension. The transplanted lung is denervated, so the normal cough reflex is absent rather than preserved.",
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
    explanation:
      "Dobutamine is primarily a beta-1 agonist that increases myocardial contractility and cardiac output. This can improve perfusion in cardiogenic shock, although the increase in cardiac work may also increase myocardial oxygen demand.",
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
    explanation:
      "Diabetes insipidus causes excessive dilute urine because inadequate ADH prevents normal water reabsorption in the collecting ducts. The resulting free-water loss produces hypernatremia and an elevated serum osmolality, while urine sodium and concentration are relatively low.",
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
    explanation:
      "Sudden restlessness, dyspnea, chest pain, tachycardia, and an accentuated pulmonic component of S2 after surgery are classic warning signs of pulmonary embolism. Acute obstruction of pulmonary blood flow increases right-sided pressure and can intensify P2.",
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
    explanation:
      "Procainamide can prolong repolarization and the QT interval, which increases the risk of torsades de pointes. The rhythm shown is consistent with this type of polymorphic ventricular tachycardia.",
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
    explanation:
      "Dilated cardiomyopathy causes systolic pump failure. Treatment is aimed at decreasing both preload and afterload so the failing ventricle has less volume and resistance to work against, improving forward cardiac output and reducing congestion.",
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
    explanation:
      "Abdominal distention, tympany, cramping, and high-pitched tinkling bowel sounds are characteristic of intestinal obstruction. The high-pitched sounds occur as the bowel increases peristaltic activity in an attempt to move contents past the blockage.",
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
    explanation:
      "Severe acute pancreatitis commonly causes elevated amylase and can produce hypocalcemia when calcium binds with fatty acids during fat necrosis, a process called saponification. Total protein may also decrease because of systemic inflammation and fluid shifts.",
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
    explanation:
      "The patient has cellulitis with fever, hypotension, tachycardia, and tachypnea, which is concerning for sepsis with poor perfusion. Initial treatment should include blood cultures, prompt broad-spectrum antibiotics, and rapid IV fluid resuscitation.",
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
    explanation:
      "Pulmonary edema with cardiogenic shock reflects severe pump failure. Mechanical circulatory support such as an intra-aortic balloon pump can improve coronary perfusion and reduce ventricular workload when medication alone is insufficient.",
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
    explanation:
      "A carpal spasm when a blood-pressure cuff is inflated is Trousseau's sign, which indicates hypocalcemia. Acute pancreatitis can lower serum calcium because calcium binds to fatty acids in areas of pancreatic fat necrosis.",
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
    explanation:
      "Positive-pressure ventilation can remove carbon dioxide faster than it is produced if ventilation is excessive. This can lower PaCO2 and lead to respiratory alkalosis.",
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
    explanation:
      "When using an interpreter, the nurse should remain positioned so communication is directed toward the patient rather than toward the interpreter. Standing next to the interpreter and close to the patient helps maintain direct therapeutic interaction, and medical jargon should be avoided.",
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
    explanation:
      "In hepatic failure with encephalopathy and severe dehydration, electrolyte abnormalities such as hypokalemia should be corrected. Lactated Ringer's may be less desirable in severe liver dysfunction because hepatic metabolism of lactate is impaired, and benzodiazepines can worsen encephalopathy.",
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
    explanation:
      "When skin breakdown increases under an existing protocol, the first step is to evaluate the current protocol and whether it is being followed correctly. A systematic assessment helps identify the true cause before changing techniques or treatments.",
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
    explanation:
      "Sepsis causes release of inflammatory mediators that produce profound peripheral vasodilation and increased capillary permeability. The resulting fall in systemic vascular resistance and circulating volume contributes directly to hypotension.",
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
    explanation:
      "Nitroprusside and nitroglycerin are both potent vasodilators. Their combined effects can produce significant hypotension, and if arterial pressure falls too far, coronary artery perfusion may decrease despite nitroglycerin's intended anti-ischemic effect.",
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
    explanation:
      "Heparin enhances the activity of antithrombin III and prevents extension of existing thrombi and formation of new clots. It does not directly dissolve an established pulmonary embolus; fibrinolytic agents are responsible for breaking down clot.",
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
    explanation:
      "A patient with receptive aphasia and dementia may be unable to provide valid informed consent independently. The patient's legal guardian or legally authorized representative should therefore be involved to protect the patient's rights and participate in the consent process.",
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
    explanation:
      "The acute confusion, bizarre behavior, visual misinterpretation, and restlessness are consistent with delirium. Delirium often causes an inability to maintain attention or carry on a coherent conversation and typically develops over a short period of time.",
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
    explanation:
      "A groin rash or fungal infection may reflect inadequate hygiene or neglect and should prompt further assessment for possible elder abuse. Depression and injuries may also be warning signs, but the other examples provide plausible explanations for those findings.",
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
    explanation:
      "The patient has a hemothorax with hypovolemic shock, shown by hypotension, tachycardia, cool clammy skin, and a low CVP. Initial management includes a chest tube to drain blood, supplemental oxygen for respiratory compromise, and rapid volume resuscitation with appropriate IV fluids or blood.",
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
    explanation:
      "During alcohol withdrawal hallucinations, the nurse should use clear, concrete, reality-based communication. Calmly discussing what is actually happening can help the patient distinguish hallucinations from reality, whereas whispering, excessive touch, or arguing about the hallucination may increase distress.",
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
    explanation:
      "A patient with a subarachnoid hemorrhage should avoid activities that increase intracranial pressure, including breath holding and the Valsalva maneuver. If airway compromise is anticipated, intubation should occur before respiratory arrest rather than waiting for an emergency.",
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
    explanation:
      "Acute tubular necrosis impairs potassium and acid excretion and reduces clearance of nitrogenous wastes. The expected consequences include hyperkalemia, metabolic acidosis, and azotemia; anemia and hypocalcemia may also develop.",
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
    explanation:
      "Kehr's sign is referred pain to the left shoulder caused by irritation of the diaphragm. In trauma, it is classically associated with blood or other material irritating the diaphragm, such as from a splenic injury.",
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
    explanation:
      "DIC consumes platelets and clotting factors while widespread fibrin formation and breakdown increase fibrin split products. Therefore platelet counts fall, fibrin degradation products rise, and both PT and PTT may become prolonged.",
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
    explanation:
      "After a thoracotomy, the chest has been opened and negative intrapleural pressure must be reestablished so the remaining lung can re-expand. Chest tubes attached to a closed drainage system remove air or fluid and help restore this pressure.",
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
    explanation:
      "PEEP keeps alveoli open at the end of expiration and recruits collapsed alveoli. This improves gas exchange and reduces intrapulmonary shunting, but its primary purpose is alveolar recruitment rather than directly healing the alveolar-capillary membrane.",
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
    explanation:
      "A large V wave on the PAOP tracing reflects a rise in left atrial pressure during ventricular systole. With a new loud pansystolic murmur at the apex and pulmonary congestion, this strongly suggests mitral regurgitation with backward flow into the left atrium.",
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
    explanation:
      "Cigarette smoke is a common asthma trigger, and smoke exposure can continue even when a caregiver does not smoke directly in front of the patient. Providing smoking-cessation resources addresses the likely ongoing source of exposure more directly than simply repeating general trigger education.",
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
    explanation:
      "Sodium nitroprusside is a potent arterial and venous vasodilator. By reducing systemic vascular resistance, it decreases afterload and can increase stroke volume while also reducing venous return.",
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
    explanation:
      "Nitrates dilate veins and decrease venous return, which lowers preload. Reducing ventricular filling and wall tension decreases myocardial oxygen demand and helps relieve ischemic chest pain.",
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
    explanation:
      "In hemorrhagic shock, reduced circulating volume activates compensatory mechanisms such as the renin-angiotensin-aldosterone system. Aldosterone promotes sodium and water retention, helping expand intravascular volume, while sympathetic stimulation causes vasoconstriction.",
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
    explanation:
      "Vital capacity reflects the maximum amount of air that can be exhaled after a maximal inhalation and is one measure used when assessing readiness to discontinue mechanical ventilation. A vital capacity well above the minimum needed to sustain ventilation suggests adequate respiratory reserve.",
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
    explanation:
      "The rise and fall of water in the water-seal chamber with breathing is called tidaling and reflects normal changes in pleural pressure. Continuous bubbling, rather than tidaling, is more suggestive of an air leak.",
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
    explanation:
      "Methamphetamine overdose can cause hyperthermia, dehydration, severe agitation, and rhabdomyolysis. Early management includes aggressive IV crystalloid volume replacement and cooling when hyperthermia is present; airway control may be needed in severe cases.",
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
    explanation:
      "A statement about wanting to end one's life must be explored directly. Asking about the patient's intent is essential for assessing suicide risk and protecting the patient from harm; a potentially suicidal patient should not be left unsupervised.",
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
    explanation:
      "Hypomagnesemia is common in chronic alcoholism and may be present at admission. Hypophosphatemia can also occur, but it often becomes more pronounced after the first 12-36 hours, particularly with nutritional replacement.",
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
    explanation:
      "Acute respiratory failure is generally associated with severe hypoxemia and/or acute hypercapnia. A PaO2 below 60 mm Hg together with a PaCO2 above 45 mm Hg and acidemia strongly supports acute ventilatory and oxygenation failure.",
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
    explanation:
      "A massive hemothorax fills the pleural space with blood, producing dullness to percussion and markedly decreased or absent breath sounds on the affected side. If the collection is large enough, increased pressure can shift the trachea and mediastinum away from the affected side.",
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
    explanation:
      "An epidural hematoma is classically caused by laceration of the middle meningeal artery, often after a temporal bone fracture. Rapid arterial bleeding can create a rapidly expanding epidural collection and neurologic deterioration.",
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
    explanation:
      "DIC causes both widespread clotting and severe bleeding. Preventing constipation and straining is important because a Valsalva maneuver can raise intracranial pressure and increase the risk of intracranial hemorrhage in a patient whose clotting ability is already impaired.",
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
    explanation:
      "Right ventricular failure raises right-sided filling pressures, including CVP. Successful treatment should reduce right ventricular congestion, so a decreasing CVP indicates improvement.",
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
    explanation:
      "A compartment pressure within about 20 mm Hg of the diastolic blood pressure suggests dangerous impairment of tissue perfusion. With severe pain and numbness, the patient should be prepared for urgent fasciotomy to relieve the pressure and prevent ischemic injury.",
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
    explanation:
      "After cardiac surgery, mediastinal chest tubes remove blood and serosanguineous fluid from the operative mediastinal space. This helps prevent fluid accumulation and cardiac tamponade; these tubes are not primarily used to re-expand the lung.",
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
    explanation:
      "Diuretics commonly cause potassium loss, and alkalosis shifts potassium into cells, both of which can produce hypokalemia. Crush injury, hemolysis, and transfusion are more often associated with increased serum potassium.",
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
    explanation:
      "DKA requires controlled intravenous insulin therapy because dehydration and poor peripheral perfusion can make subcutaneous absorption unreliable. A continuous IV insulin infusion allows the glucose to fall gradually and predictably while the acute metabolic disturbance is treated.",
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
    explanation:
      "After chest trauma, markedly diminished breath sounds and hyperresonance on one side are classic findings of pneumothorax. Air in the pleural space reduces transmission of breath sounds and produces a hyperresonant percussion note.",
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
    explanation:
      "Pain from a dissecting aortic aneurysm is typically sudden, severe, sharp, and described as tearing or ripping. This differs from the pressure or squeezing sensation more commonly associated with acute myocardial infarction.",
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
    explanation:
      "An acute rise in left ventricular filling pressure forces fluid into the pulmonary interstitium and alveoli. Bibasilar crackles are therefore a classic finding of acute left-sided heart failure and pulmonary congestion.",
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
    explanation:
      "The immediate priority in status asthmaticus is to reverse severe bronchoconstriction. Short-acting bronchodilators are therefore the most important emergency medications, with corticosteroids commonly added to reduce the underlying airway inflammation.",
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
    explanation:
      "Sepsis requires prompt antimicrobial treatment directed at the suspected infection. Blood cultures should be obtained first when possible, but antibiotics should not be significantly delayed; fluid resuscitation and support of perfusion and oxygenation are also essential.",
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
    explanation:
      "The statement suggests anxiety or concern about leaving the intensive care environment. Reflecting that concern back to the patient is therapeutic because it acknowledges the emotion and invites the patient to explain what is worrying them.",
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
    explanation:
      "Aspiration can cause pneumonitis or pneumonia, decreasing lung compliance and increasing airway resistance. On a ventilator, this commonly appears as an increase in peak inspiratory pressure and may also reduce delivered or exhaled tidal volume.",
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
    explanation:
      "Serum osmolality is the preferred laboratory value for distinguishing HHS from DKA. HHS causes marked hyperosmolality, while DKA generally has less severe increases in serum osmolality even though both conditions cause hyperglycemia.",
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
    explanation:
      "Acute pancreatitis releases inflammatory mediators that increase capillary permeability and cause major third-spacing of fluid. Plasma volume is lost into tissues, so close monitoring and replacement of fluid and electrolytes are important.",
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
    explanation:
      "A pulmonary embolus blocks perfusion to areas of lung that may still be ventilated. This creates a ventilation-perfusion mismatch, resulting in impaired gas exchange, hypoxemia, and an increased A-a oxygen gradient.",
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
    explanation:
      "An unresponsive patient with severe hypotension and ventricular tachycardia is hemodynamically unstable. Unstable VT with a pulse is treated with synchronized cardioversion so the shock is timed with the QRS complex and does not fall on the vulnerable T wave.",
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
    explanation:
      "A severe traumatic brain injury can cause cerebral edema, hematoma formation, and breakdown of the blood-brain barrier. Rising intracranial pressure can reduce cerebral perfusion and oxygen delivery, making cerebral edema a high-priority concern.",
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
    explanation:
      "Cardiac dysrhythmias after blunt chest trauma should raise strong suspicion for myocardial contusion. Inflammation and injury to the myocardium can create electrical instability, with atrial or ventricular dysrhythmias depending on the area injured.",
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
    explanation:
      "Placental abruption places the patient at risk for disseminated intravascular coagulation. Prothrombin time and D-dimer help evaluate the coagulation and fibrinolytic systems and can support the diagnosis when abnormal bleeding develops.",
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
    explanation:
      "CT pulmonary angiography is the preferred definitive imaging study for most patients with suspected pulmonary embolism. ABGs, chest x-rays, and nuclear lung scans may provide supportive information but are less specific for confirming the diagnosis.",
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
    explanation:
      "The ABG shows respiratory acidosis with an elevated PaCO2, indicating inadequate minute ventilation. Increasing the ventilator rate increases minute ventilation and promotes carbon dioxide elimination, whereas lowering tidal volume would worsen CO2 retention.",
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
    explanation:
      "Delirium develops acutely and commonly causes impaired attention, disorganized thinking, and incoherent or rambling speech. Long-standing confusion is more consistent with dementia, while delirium typically appears over hours to days.",
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
    explanation:
      "Cor pulmonale is right ventricular enlargement and failure caused by pulmonary disease or pulmonary hypertension. It is commonly associated with chronic lung disease such as COPD and reflects pressure overload of the right side of the heart.",
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
    explanation:
      "Daily interruption or reduction of sedation allows neurologic assessment and helps determine whether continued sedation is necessary. For patients with ARDS, other evidence-based measures include maintaining the head of the bed around 30-45 degrees and using appropriate positioning and resuscitation strategies.",
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
    explanation:
      "PCP intoxication can produce severe sympathetic stimulation with hypertension, tachycardia, seizures, agitation, and characteristic abnormal eye movements such as nystagmus. These findings fit PCP better than heroin or the typical presentation of LSD.",
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
    explanation:
      "An open pelvic fracture with hypotension and tachycardia should be assumed to involve significant blood loss until proven otherwise. The initial priority is to assess for and control bleeding before definitive orthopedic repair or longer-term monitoring for complications.",
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
    explanation:
      "Acute kidney injury is a recognized complication after AAA repair. Aortic cross-clamping and perioperative embolic or perfusion problems can reduce renal blood flow, leading to decreased urine output and a rising serum creatinine.",
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
    explanation:
      "ARDS usually follows a major direct or indirect lung insult and is characterized by acute tachypnea, dyspnea, bilateral infiltrates, decreased compliance, and hypoxemia that may be difficult to correct. Filling pressures such as PAOP are typically normal or low rather than markedly elevated.",
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
    explanation:
      "The patient has euvolemic hyponatremia with low serum osmolality, which is typical of SIADH. Volume expansion in SIADH can lower BUN and creatinine, while potassium is usually normal or may rise slightly and glucose is not directly affected.",
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
    explanation:
      "A temporal skull fracture followed by a brief lucid interval and rapid neurologic deterioration strongly suggests an epidural hematoma. Because arterial bleeding can expand quickly, urgent surgical decompression with burr holes and clot evacuation is required.",
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
    explanation:
      "With severe rhabdomyolysis and a creatine kinase level above about 6000 units/L, aggressive fluid therapy is essential and urinary alkalinization with sodium bicarbonate may be used to reduce renal injury from myoglobin. Urine output should be maintained at a high level.",
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
    explanation:
      "Aortic regurgitation creates left ventricular volume overload, while systemic hypertension increases afterload. Both conditions increase the workload of the left ventricle and can ultimately lead to left ventricular failure.",
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
    explanation:
      "Requiring a patient to participate in every treatment can undermine autonomy and self-esteem. Patients should be invited and supported in decision-making according to their abilities, preferences, culture, and values rather than being forced to participate.",
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
    explanation:
      "The patient has severe hyperkalemia with a dangerous ventricular rhythm. IV calcium is used first to stabilize the cardiac membrane and reduce the immediate risk of degeneration into ventricular fibrillation while therapies that actually lower serum potassium are started.",
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
    explanation:
      "Acute respiratory failure is supported by a PaO2 below 60 mm Hg together with a PaCO2 above 45 mm Hg. The values showing both severe hypoxemia and hypercapnia with acidemia are most consistent with acute respiratory failure.",
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
    explanation:
      "Continuous venovenous hemofiltration is particularly useful for slow, controlled fluid removal in critically ill patients who may not tolerate rapid shifts. Its primary purpose is optimizing fluid balance rather than rapidly correcting potassium or serum osmolality.",
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
    explanation:
      "A hypertensive crisis can damage cerebral vessels and lead to intracerebral hemorrhage, subarachnoid hemorrhage, thrombosis, or cerebral infarction. Acute neurologic injury is therefore an important complication to monitor for.",
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
    explanation:
      "Hypotension and tachycardia after a motor vehicle collision are most consistent with hypovolemic shock from associated traumatic blood loss. Increased intracranial pressure more commonly produces bradycardia as part of Cushing's response rather than tachycardia.",
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
    explanation:
      "Leads I, aVL, V5, and V6 represent the lateral wall of the left ventricle. New pathologic Q waves in these leads are therefore most consistent with a lateral myocardial infarction.",
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
    explanation:
      "Positive Kernig's and Brudzinski's signs indicate meningeal irritation and are classic findings of meningitis. In a patient with a recently replaced VP shunt, they raise concern for a central nervous system infection.",
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
    explanation:
      "When cardiac output falls, oxygen delivery to tissues decreases. The body compensates by extracting a greater percentage of oxygen from the blood, and if delivery becomes inadequate, anaerobic metabolism increases and serum lactate rises.",
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
    explanation:
      "Prolonged bed rest reduces circulating blood volume, which can lower CVP. It can also cause reflex tachycardia, a negative nitrogen balance from muscle breakdown, and a reduction in functional residual capacity.",
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
    explanation:
      "Guillain-Barré syndrome causes acute demyelination of peripheral nerves and progressive muscle weakness. When the nerves supplying the diaphragm and intercostal muscles are affected, acute respiratory failure can develop.",
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
    explanation:
      "Sepsis causes systemic vasodilation and capillary leak, producing low systemic vascular resistance and reduced venous return or filling pressure. Mixed venous oxygen saturation may be elevated because tissues are unable to extract or use oxygen normally and some tissue beds are poorly perfused.",
  },
];

export default questions;
