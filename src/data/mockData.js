// Realistic Fictional Mock Data for CASEVAULT Hackathon Prototype

export const INITIAL_USERS = [
  {
    id: 'usr_1',
    officerId: 'POL-WB-7842',
    name: 'SI Rahul Das',
    role: 'police_officer',
    roleLabel: 'Police Officer',
    badge: 'Sub-Inspector',
    policeStation: 'Siliguri Police Station',
    district: 'Darjeeling District',
    email: 'rahul.das@police.wb.gov.in',
    status: 'Active',
    lastLogin: '2026-08-30 09:15 AM',
    avatar: '👮'
  },
  {
    id: 'usr_2',
    officerId: 'SEN-WB-1092',
    name: 'Inspector Sharma',
    role: 'senior_officer',
    roleLabel: 'Senior Officer',
    badge: 'Station House Officer (SHO)',
    policeStation: 'Siliguri Police Station',
    district: 'Darjeeling District',
    email: 'k.sharma@police.wb.gov.in',
    status: 'Active',
    lastLogin: '2026-08-30 08:30 AM',
    avatar: '👨‍✈️'
  },
  {
    id: 'usr_3',
    officerId: 'LEG-WB-3341',
    name: 'Adv. Ananya Roy',
    role: 'legal_officer',
    roleLabel: 'Legal Officer',
    badge: 'Public Prosecutor',
    policeStation: 'District Legal Cell',
    district: 'Siliguri Sessions Court',
    email: 'ananya.roy@legal.wb.gov.in',
    status: 'Active',
    lastLogin: '2026-08-29 04:45 PM',
    avatar: '⚖️'
  },
  {
    id: 'usr_4',
    officerId: 'ADM-DEL-001',
    name: 'Rajesh Verma, IPS',
    role: 'administrator',
    roleLabel: 'Administrator',
    badge: 'Nodal Officer / System Admin',
    policeStation: 'HQ - National Crime Records Bureau',
    district: 'New Delhi HQ',
    email: 'admin.ncrb@nic.in',
    status: 'Active',
    lastLogin: '2026-08-30 10:00 AM',
    avatar: '🛡️'
  }
];

export const INITIAL_CASES = [
  {
    id: 'CASE-1024',
    firNumber: 'FIR-2026-1024',
    title: 'Theft of Gold Jewellery at Sevoke Road',
    caseType: 'Theft',
    policeStation: 'Siliguri Police Station',
    investigatingOfficer: 'Inspector Sharma',
    assistingOfficer: 'SI Rahul Das',
    status: 'Investigation', // Active, Investigation, Under Review, Closed
    priority: 'High',
    dateOpened: '2026-08-12',
    lastUpdated: '2026-08-30',
    sections: 'IPC 379 / BNS 303 (Theft), IPC 411 / BNS 317 (Receiving Stolen Property)',
    complainant: 'Shri Manoj Agrawal (Jewellery Store Owner)',
    accused: 'Ramesh @ Kallu (Arrested), Vicky Poddar (Absconding)',
    summary: 'Break-in at Agrawal Jewellers Sevoke Road on the night of 11 Aug 2026. 240g gold ornaments recovered. Key CCTV footage and forensic fingerprints processed.',
    documentCount: 6
  },
  {
    id: 'CASE-1023',
    firNumber: 'FIR-2026-1023',
    title: 'Missing Student Report - Rohit Roy (Age 19)',
    caseType: 'Missing Person',
    policeStation: 'Siliguri Police Station',
    investigatingOfficer: 'SI Rahul Das',
    assistingOfficer: 'ASI B. Paul',
    status: 'Active',
    priority: 'Urgent',
    dateOpened: '2026-08-14',
    lastUpdated: '2026-08-29',
    sections: 'General Diary Entry No. 892 / Missing Persons Register',
    complainant: 'Mrs. Sunita Roy (Mother)',
    accused: 'Unknown / Under Tracing',
    summary: '2nd-year college student missing from Hill Cart Road transit area. Mobile tower CDR location traced towards NJP Railway Station. Look-out notices issued.',
    documentCount: 4
  },
  {
    id: 'CASE-1022',
    firNumber: 'FIR-2026-1022',
    title: 'Online Banking KYC Phishing Fraud (₹4.8 Lakhs)',
    caseType: 'Fraud',
    policeStation: 'Matigara Police Station',
    investigatingOfficer: 'Inspector Sharma',
    assistingOfficer: 'SI Megha Sen (Cyber Cell)',
    status: 'Active',
    priority: 'Medium',
    dateOpened: '2026-08-16',
    lastUpdated: '2026-08-28',
    sections: 'Section 66D IT Act 2000, IPC 420 / BNS 318 (Cheating)',
    complainant: 'Dr. Debabrata Sen (Retired Professor)',
    accused: 'Mule Account Operators in Jamtara & Deoghar',
    summary: 'Victim deceived by fake SMS claiming electricity disconnection unless KYC updated via APK link. Bank accounts frozen under 102 CrPC.',
    documentCount: 5
  },
  {
    id: 'CASE-1021',
    firNumber: 'FIR-2026-1021',
    title: 'Public Market Altercation & Grievous Hurt',
    caseType: 'Assault',
    policeStation: 'Bagdogra Police Station',
    investigatingOfficer: 'SI Aniket Ghosh',
    assistingOfficer: 'Constable S. Roy',
    status: 'Closed',
    priority: 'Low',
    dateOpened: '2026-08-05',
    lastUpdated: '2026-08-25',
    sections: 'IPC 323, 325, 34 / BNS 115, 117 (Voluntarily Causing Grievous Hurt)',
    complainant: 'Biplab Mondal (Vendor)',
    accused: 'Suraj Chettri and 2 others',
    summary: 'Scuffle during municipal market allocation. Charge sheet filed in ACJM Siliguri court. Both parties settled minor damages.',
    documentCount: 4
  },
  {
    id: 'CASE-1020',
    firNumber: 'FIR-2026-1020',
    title: 'Hospital Management Server Ransomware Attack',
    caseType: 'Cybercrime',
    policeStation: 'Cyber Crime Police Station',
    investigatingOfficer: 'SI Rahul Das',
    assistingOfficer: 'Inspector V. Saxena',
    status: 'Under Review',
    priority: 'High',
    dateOpened: '2026-08-01',
    lastUpdated: '2026-08-27',
    sections: 'Section 43, 66, 66F IT Act 2000 (Cyber Terrorism), IPC 384 (Extortion)',
    complainant: 'Medical Superintendent, North Bengal Medical Institute',
    accused: 'Anonymous Threat Actor Group (DarkWeb signature #49)',
    summary: 'Database server encrypted with LockBit 3.0 variant. Off-site cold backups restored without paying ransom. Forensic image submitted to CERT-In.',
    documentCount: 5
  }
];

export const INITIAL_DOCUMENTS = [
  // CASE-1024 (Theft)
  {
    id: 'DOC-1024-1',
    caseId: 'CASE-1024',
    name: 'FIR_1024_Theft_Sevoke_Road.pdf',
    docType: 'FIR',
    docTypeLabel: 'First Information Report (FIR)',
    version: 2,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-20',
    uploadTime: '10:30 AM',
    classification: 'Confidential', // Internal, Confidential, Highly Confidential
    status: 'Verified',
    sha256: '8f23a1d9c7e4b520489aa81f234901bc7721894d01fa382904bca819208491b2',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '420 KB',
    pageCount: 3,
    description: 'First Information Report registered under Section 154 CrPC for gold theft at Sevoke Road jewellery store.',
    content: `GOVERNMENT OF WEST BENGAL
POLICE DEPARTMENT - SILIGURI POLICE COMMISSIONERATE
FIRST INFORMATION REPORT (Under Section 154 Cr.P.C.)

1. District: Darjeeling | P.S.: Siliguri | Year: 2026 | FIR No: 1024/2026 | Date: 12/08/2026
2. Acts & Sections:
   (i) IPC Section 379 (Theft)
   (ii) IPC Section 411 (Dishonestly receiving stolen property)
3. Occurrence of Offence:
   Date From: 11/08/2026 at 23:45 hrs | Date To: 12/08/2026 at 04:15 hrs
   Place of Occurrence: M/s Agrawal Jewellers, Shop No. 14, Sevoke Road, Siliguri.
4. Complainant / Informant:
   Name: Shri Manoj Agrawal, S/o Late O.P. Agrawal
   Address: 42 Vivekananda Road, Ward No. 11, Siliguri.
5. Details of Known / Suspected / Unknown Accused:
   (i) Ramesh @ Kallu (Arrested from Junction Railway Colony)
   (ii) Vicky Poddar (Absconding)
6. Particulars of Properties Stolen:
   - 4 Gold Necklaces (Approx. 160 grams, Hallmarked 22K)
   - 6 Gold Bangles (Approx. 80 grams)
   - Total Estimated Value: ₹18,50,000/-
7. Brief Description of Offence:
   Complainant stated that shutter locks were cut using hydraulic bolt cutter. CCTV DVR was seized and subjected to forensic timeline reconstruction. Accused #1 intercepted during routine naka checking at Mahananda Bridge with 140g stolen articles in his possession.

Investigating Officer: Inspector Sharma (SHO Siliguri PS)
Assisting Officer: SI Rahul Das (Belt No. WB-7842)`,
    previousVersions: [
      {
        version: 1,
        uploadedBy: 'Inspector Sharma',
        uploadDate: '2026-08-12',
        uploadTime: '02:15 PM',
        sha256: '3d91ca8e49104fa2890bb7841029471abef1983049102847102948172940182a',
        changeNotes: 'Initial draft registered immediately following complainant statement.',
        content: `GOVERNMENT OF WEST BENGAL
POLICE DEPARTMENT - SILIGURI POLICE COMMISSIONERATE
FIRST INFORMATION REPORT (DRAFT VERSION 1)

1. District: Darjeeling | P.S.: Siliguri | Year: 2026 | FIR No: 1024/2026 | Date: 12/08/2026
2. Acts: IPC Section 379 (Theft)
3. Complainant: Manoj Agrawal
4. Brief: Unidentified individuals broke into Agrawal Jewellers on Sevoke Road and looted jewellery. Initial investigation commenced.`
      }
    ]
  },
  {
    id: 'DOC-1024-2',
    caseId: 'CASE-1024',
    name: 'Investigation_Report_Progress_Diary.pdf',
    docType: 'Investigation Report',
    docTypeLabel: 'Investigation Progress Diary',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-22',
    uploadTime: '11:45 AM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '4a7b98f2104928174092bba40192847190284102948719203847109283471092',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '512 KB',
    pageCount: 4,
    description: 'Case Diary entries 1 to 8 documenting search warrants, accused interrogation, and recovery memos.',
    content: `CASE DIARY / INVESTIGATION PROGRESS REPORT
Case: CASE-1024 / FIR No: 1024/2026 | Siliguri Police Station

ENTRY DATE: 22nd August 2026
Investigating Officer: Inspector K. Sharma

1. RECOVERY MEMO: Under Section 27 of the Indian Evidence Act, based on confessional statement of accused Ramesh @ Kallu, police team raided rented room at Shaktigarh. Recovered 4 gold bangles concealed inside false ceiling.
2. WITNESS EXAMINATION: Statement of night guard Brijesh Singh recorded under Sec 161 CrPC. Confirmed sighting of black motorcycle without registration plate at 03:20 AM.
3. CCTV ANALYSIS: Video evidence extracted from adjacent SBI Bank ATM. Accused posture matches biometric database profile.
4. PENDING ACTION: Notice under Section 41A CrPC dispatched to associate goldsmith in Khalpara market.`
  },
  {
    id: 'DOC-1024-3',
    caseId: 'CASE-1024',
    name: 'Witness_Statement_Manoj_Agrawal.pdf',
    docType: 'Witness Statement',
    docTypeLabel: 'Witness / Complainant Statement (Sec 161 CrPC)',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-15',
    uploadTime: '04:00 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: '9928174ab0192837419208374102938471029384710928374102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '290 KB',
    pageCount: 2,
    description: 'Deposition of shop owner Manoj Agrawal detailing inventory loss and stock invoices.',
    content: `STATEMENT OF WITNESS RECORDED UNDER SECTION 161 Cr.P.C.

Statement of: Shri Manoj Agrawal, Aged 48 Years
Occupation: Proprietor, Agrawal Jewellers, Sevoke Road

"I arrived at my establishment on the morning of 12th August 2026 at 09:15 AM as per routine. Upon arrival, I noticed the shutter padlock had been severed with heavy mechanical shears. The glass counter containing 22K bridal collection had been ransacked. I immediately preserved the scene and dialed 112. I have handed over authentic GST purchase invoices for all stolen hallmarked ornaments to Sub-Inspector Rahul Das."

Verified by: SI Rahul Das | Signed: Manoj Agrawal`
  },
  {
    id: 'DOC-1024-4',
    caseId: 'CASE-1024',
    name: 'Evidence_Record_Seizure_Memo.pdf',
    docType: 'Evidence Record',
    docTypeLabel: 'Seizure Memo & Chain of Custody',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-18',
    uploadTime: '06:10 PM',
    classification: 'Highly Confidential',
    status: 'Verified',
    sha256: 'c391029837410293847102938471029384710293847102938471029384710293',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '340 KB',
    pageCount: 2,
    description: 'Malkhana evidence entry voucher for seized gold articles, bolt cutter, and motorcycle.',
    content: `SEIZURE LIST / MALKHANA CUSTODY FORM (Rule 234 Police Regulations)

Seizure Location: Near Sevoke Road Railway Siding, Siliguri
Witnesses:
1. Pradip Paul, S/o K. Paul, Sevoke Road
2. Subhash Roy, S/o D. Roy, Siliguri

ITEMS SEIZED:
Item 1: One heavy duty iron bolt cutter (Yellow handle, 24-inch) bearing rust and lubricant traces.
Item 2: Four (4) hallmarked gold bangles sealed in tamper-evident envelope #EV-9921.
Item 3: One black Hero Splendor motorcycle without rear number plate (Chassis No: MD2AA41...).

All items transferred to Malkhana Custody under entry number MK-2026-441.`
  },
  {
    id: 'DOC-1024-5',
    caseId: 'CASE-1024',
    name: 'Forensic_Fingerprint_Analysis_Report.pdf',
    docType: 'Forensic Report',
    docTypeLabel: 'State Forensic Science Laboratory (SFSL) Report',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-25',
    uploadTime: '03:30 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '7192837410293847102938471029384710293847102938471029384710293847',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '680 KB',
    pageCount: 3,
    description: 'Latent fingerprint match certificate from SFSL Kolkata identifying accused Ramesh.',
    content: `STATE FORENSIC SCIENCE LABORATORY, GOVERNMENT OF WEST BENGAL
REPORT OF FINGERPRINT EXPERT (Under Section 293 Cr.P.C.)

Laboratory Reference No: SFSL/FP/2026/8841
Forwarded by: Inspector In-Charge, Siliguri P.S.

EXAMINATION & FINDINGS:
Latent print Q-1 lifted from the glass display showcase was subjected to automated AFIS scanning against National Crime Records Bureau database.
Result: 14 distinct ridge characteristics (bifurcations, ridge endings, and islands) showed 100% concordance with known right index print of arrested individual Ramesh @ Kallu (NCRB ID: WB-2019-CR-8821).

Conclusion: Print Q-1 was made by the right index finger of suspect Ramesh.`
  },
  {
    id: 'DOC-1024-6',
    caseId: 'CASE-1024',
    name: 'Draft_Charge_Sheet_Section_173.pdf',
    docType: 'Charge Sheet',
    docTypeLabel: 'Final Police Report / Charge Sheet (Sec 173 CrPC)',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-29',
    uploadTime: '05:00 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '5510293847102938471029384710293847102938471029384710293847102938',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '820 KB',
    pageCount: 6,
    description: 'Final investigation report submitted to Chief Judicial Magistrate (CJM) Siliguri.',
    content: `POLICE FINAL REPORT / CHARGE SHEET (Section 173 Cr.P.C.)
In the Court of the Learned Chief Judicial Magistrate, Siliguri

1. Charge Sheet No: 412/2026 | Date: 29/08/2026
2. FIR No: 1024/2026 dated 12/08/2026, Siliguri P.S.
3. Name of Accused Persons Forwarded:
   (i) Ramesh @ Kallu (In Judicial Custody)
4. Charges Framed:
   - Section 379 IPC (Theft)
   - Section 411 IPC (Possession of Stolen Property)
   - Section 457 IPC (Lurking house-trespass by night)
5. List of Witnesses for Prosecution: PW1 Manoj Agrawal, PW2 SI Rahul Das, PW3 Fingerprint Expert SFSL.
6. Prayer: Learned Court is prayed to take cognizance and issue process against the accused.`
  },

  // CASE-1023 (Missing Person)
  {
    id: 'DOC-1023-1',
    caseId: 'CASE-1023',
    name: 'General_Diary_Missing_Entry_892.pdf',
    docType: 'FIR',
    docTypeLabel: 'General Diary Report (GD No. 892)',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-14',
    uploadTime: '01:20 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: 'a102938471029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '210 KB',
    pageCount: 1,
    description: 'Missing person complaint filed by Sunita Roy.',
    content: `GENERAL DIARY ENTRY (SILIGURI POLICE STATION)
GD Entry No: 892 | Date: 14/08/2026 at 13:10 hrs

Complainant Sunita Roy appeared at PS and stated her son Rohit Roy (Age 19, Height 5ft 8in, wearing blue jeans and white polo shirt) left for college at 08:30 AM and has not returned. Phone switched off since 11:45 AM near Hill Cart Road junction.`
  },
  {
    id: 'DOC-1023-2',
    caseId: 'CASE-1023',
    name: 'Telecom_CDR_Tower_Dump_Analysis.pdf',
    docType: 'Investigation Report',
    docTypeLabel: 'Telecom CDR & Tower Location Log',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-16',
    uploadTime: '03:15 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: 'b203948571029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '450 KB',
    pageCount: 3,
    description: 'Call Data Record (CDR) tower triangulation log provided by Airtel Nodal Officer.',
    content: `TELECOM CYBER CELL - TOWER DUMP REPORT
Target MSISDN: 98320XXXXX (Rohit Roy)
Cell Tower ID: SIL-T-491 (New Jalpaiguri Railway Station South East Sector)
Last Active Handshake: 14/08/2026 at 11:44:12 AM`
  },
  {
    id: 'DOC-1023-3',
    caseId: 'CASE-1023',
    name: 'Railway_Station_CCTV_Footage_Log.pdf',
    docType: 'Evidence Record',
    docTypeLabel: 'CCTV Surveillance Timeline Log',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-20',
    uploadTime: '10:00 AM',
    classification: 'Internal',
    status: 'Verified',
    sha256: 'c304958671029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '310 KB',
    pageCount: 2,
    description: 'NJP Railway Platform 2 footage analysis showing missing youth boarding train.',
    content: `RPF & GRP JOINT SURVEILLANCE LOG
Location: Platform No. 2, NJP Railway Station
Camera ID: CAM-04-NORTH
Timestamp: 14/08/2026 12:15:30 hrs
Subject identified purchasing general ticket for Guwahati bound express.`
  },
  {
    id: 'DOC-1023-4',
    caseId: 'CASE-1023',
    name: 'All_India_Police_Lookout_Circular.pdf',
    docType: 'Police Report',
    docTypeLabel: 'NCRB Missing Person Look-out Notice',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-22',
    uploadTime: '02:00 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: 'd405968771029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '520 KB',
    pageCount: 2,
    description: 'Circulated to Northeast Frontier Railway Police and Assam Police Headquarters.',
    content: `NATIONAL CRIME RECORDS BUREAU (NCRB) LOOKOUT CIRCULAR
Subject: Missing Youth - Rohit Roy
Alert sent to: Assam State Police, RPF Guwahati Division, Social Media Bulletin.`
  },

  // CASE-1022 (Fraud)
  {
    id: 'DOC-1022-1',
    caseId: 'CASE-1022',
    name: 'FIR_1022_Cyber_KYC_Phishing.pdf',
    docType: 'FIR',
    docTypeLabel: 'First Information Report (FIR 1022)',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-16',
    uploadTime: '02:30 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: 'e506978871029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '390 KB',
    pageCount: 3,
    description: 'FIR under Sec 66D IT Act regarding ₹4.8 Lakhs siphoned from SBI Savings account.',
    content: `MATIGARA POLICE STATION - FIR NO. 1022/2026
Under Section 66D IT Act 2000 and Section 420 IPC.
Complainant Dr. Debabrata Sen was defrauded of ₹4,80,000/- after clicking an SMS link purporting to be WBSEDCL Electricity KYC update.`
  },
  {
    id: 'DOC-1022-2',
    caseId: 'CASE-1022',
    name: 'Bank_Section_102_CrPC_Freezing_Order.pdf',
    docType: 'Court Filing',
    docTypeLabel: 'Bank Account Freezing Notice (Sec 102 CrPC)',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-17',
    uploadTime: '11:00 AM',
    classification: 'Highly Confidential',
    status: 'Verified',
    sha256: 'f607988971029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '410 KB',
    pageCount: 2,
    description: 'Statutory freezing order served to beneficiary bank branches in Jharkhand.',
    content: `NOTICE UNDER SECTION 102 Cr.P.C. TO SBI, ICICI & PAYTM PAYMENTS BANK
To Branch Managers: Freeze beneficiary account numbers A/C 33499201948 immediately. ₹3.2 Lakhs successfully lien-marked.`
  },
  {
    id: 'DOC-1022-3',
    caseId: 'CASE-1022',
    name: 'APK_Reverse_Engineering_Malware_Report.pdf',
    docType: 'Forensic Report',
    docTypeLabel: 'Cyber Forensics APK Analysis Report',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-24',
    uploadTime: '04:15 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '0708999071029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '620 KB',
    pageCount: 4,
    description: 'Static and dynamic analysis of "WBSEDCL_Update.apk" trojan used to intercept OTPs.',
    content: `CYBER CRIME FORENSICS DIVISION
Analysis of malicious APK: Discovered SMS forwarding permissions and command & control server in Russia (IP: 185.220.101.5).`
  },
  {
    id: 'DOC-1022-4',
    caseId: 'CASE-1022',
    name: 'Legal_Prosecution_Brief_Cyber_Cell.pdf',
    docType: 'Legal Notice',
    docTypeLabel: 'Public Prosecutor Case Brief',
    version: 1,
    uploadedBy: 'Adv. Ananya Roy',
    uploadedByRole: 'Legal Officer',
    uploadDate: '2026-08-28',
    uploadTime: '01:45 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '1809000171029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '360 KB',
    pageCount: 3,
    description: 'Legal opinion on multi-jurisdictional cyber extradition and asset forfeiture.',
    content: `LEGAL CELL PROSECUTION BRIEF
Subject: Requisition for interstate non-bailable warrants under Section 73 CrPC for arrest of syndicate ringleaders in Jamtara.`
  },
  {
    id: 'DOC-1022-5',
    caseId: 'CASE-1022',
    name: 'Victim_Transaction_Statement_SBI.pdf',
    docType: 'Evidence Record',
    docTypeLabel: 'Certified Bank Ledger & Gateway Logs',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-18',
    uploadTime: '09:30 AM',
    classification: 'Internal',
    status: 'Verified',
    sha256: '2910111271029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '280 KB',
    pageCount: 2,
    description: 'Section 65B Indian Evidence Act certified bank logs.',
    content: `STATE BANK OF INDIA - CERTIFICATE UNDER SECTION 65B INDIAN EVIDENCE ACT
System logs confirming 3 unauthorized IMPS transfers totaling ₹4,80,000 on 16/08/2026.`
  },

  // CASE-1021 (Assault - Closed)
  {
    id: 'DOC-1021-1',
    caseId: 'CASE-1021',
    name: 'FIR_1021_Assault_Bagdogra.pdf',
    docType: 'FIR',
    docTypeLabel: 'FIR 1021/2026',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-05',
    uploadTime: '06:00 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: '3021222371029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '310 KB',
    pageCount: 2,
    description: 'Assault case registered at Bagdogra market.',
    content: `BAGDOGRA PS - FIR NO. 1021/2026
Under Section 323, 325, 34 IPC. Dispute between stall owners over vendor boundary.`
  },
  {
    id: 'DOC-1021-2',
    caseId: 'CASE-1021',
    name: 'Medical_Injury_Report_Civil_Hospital.pdf',
    docType: 'Forensic Report',
    docTypeLabel: 'Medicolegal Injury Report (MLC)',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-06',
    uploadTime: '10:15 AM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '4132333471029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '400 KB',
    pageCount: 2,
    description: 'North Bengal Sub-divisional Hospital MLC certificate.',
    content: `MEDICOLEGAL CERTIFICATE (MLC No: 882/2026)
Injured Person: Biplab Mondal. Findings: Minor contusions on left forearm. Simple nature of injury caused by blunt impact.`
  },
  {
    id: 'DOC-1021-3',
    caseId: 'CASE-1021',
    name: 'Compromise_Petition_ACJM_Court.pdf',
    docType: 'Court Filing',
    docTypeLabel: 'Compounding / Settlement Petition (Sec 320 CrPC)',
    version: 1,
    uploadedBy: 'Adv. Ananya Roy',
    uploadedByRole: 'Legal Officer',
    uploadDate: '2026-08-20',
    uploadTime: '03:45 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: '5243444571029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '260 KB',
    pageCount: 2,
    description: 'Mutual settlement filed before Lok Adalat / ACJM Court.',
    content: `BEFORE THE HON'BLE ACJM COURT, SILIGURI
Application for compounding of compoundable offences under Section 320 CrPC. Both parties arrived at amicable reconciliation without coercion.`
  },
  {
    id: 'DOC-1021-4',
    caseId: 'CASE-1021',
    name: 'Final_Closure_Order_Case_1021.pdf',
    docType: 'Charge Sheet',
    docTypeLabel: 'Final Police Closure Report (FRT)',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-25',
    uploadTime: '04:30 PM',
    classification: 'Internal',
    status: 'Verified',
    sha256: '6354555671029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '350 KB',
    pageCount: 2,
    description: 'Final closure acceptance by Magistrate.',
    content: `COURT DISPOSAL ORDER - CASE CLOSED
Hon'ble Court accepted Final Report True (Compounded). Case record consigned to Record Room.`
  },

  // CASE-1020 (Cybercrime)
  {
    id: 'DOC-1020-1',
    caseId: 'CASE-1020',
    name: 'FIR_1020_Hospital_Ransomware.pdf',
    docType: 'FIR',
    docTypeLabel: 'Cyber Terrorism FIR 1020/2026',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-01',
    uploadTime: '11:00 AM',
    classification: 'Highly Confidential',
    status: 'Verified',
    sha256: '7465666771029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '480 KB',
    pageCount: 3,
    description: 'Complaint regarding ransomware payload deployed against hospital radiology databases.',
    content: `CYBER CRIME PS - FIR NO. 1020/2026
Under Section 66F IT Act (Cyber Terrorism) and Section 384 IPC. Hospital HIS server attacked with LockBit 3.0.`
  },
  {
    id: 'DOC-1020-2',
    caseId: 'CASE-1020',
    name: 'CERT_In_Incident_Response_Report.pdf',
    docType: 'Forensic Report',
    docTypeLabel: 'CERT-In Incident Advisory & Forensic Image Log',
    version: 1,
    uploadedBy: 'Inspector Sharma',
    uploadedByRole: 'Senior Officer',
    uploadDate: '2026-08-08',
    uploadTime: '02:15 PM',
    classification: 'Highly Confidential',
    status: 'Verified',
    sha256: '8576777871029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '750 KB',
    pageCount: 5,
    description: 'Indian Computer Emergency Response Team technical assessment and IOC indicators.',
    content: `INDIAN COMPUTER EMERGENCY RESPONSE TEAM (CERT-In)
Technical Investigation Report: Threat actor gained entry through unpatched VPN gateway (CVE-2024-21887). Data exfiltration prevented by air-gapped backup protocol.`
  },
  {
    id: 'DOC-1020-3',
    caseId: 'CASE-1020',
    name: 'Server_Memory_Dump_Hash_Verification.pdf',
    docType: 'Evidence Record',
    docTypeLabel: 'Cryptographic Memory Image Chain of Custody',
    version: 1,
    uploadedBy: 'SI Rahul Das',
    uploadedByRole: 'Police Officer',
    uploadDate: '2026-08-12',
    uploadTime: '05:30 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: '9687888971029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '540 KB',
    pageCount: 3,
    description: 'Bit-by-bit physical RAM capture SHA-256 integrity seal.',
    content: `DIGITAL EVIDENCE CUSTODY PROTOCOL
Evidence Item: 128GB DDR4 RAM raw physical image (.E01 format)
Hardware SHA-256: 9687888971029384710293847102938471029384710293847102938471029384
Verified intact in forensic write-blocker.`
  },
  {
    id: 'DOC-1020-4',
    caseId: 'CASE-1020',
    name: 'Interpol_Red_Notice_Requisition.pdf',
    docType: 'Legal Notice',
    docTypeLabel: 'Interpol Purple/Red Notice Proposal',
    version: 1,
    uploadedBy: 'Adv. Ananya Roy',
    uploadedByRole: 'Legal Officer',
    uploadDate: '2026-08-20',
    uploadTime: '12:00 PM',
    classification: 'Highly Confidential',
    status: 'Verified',
    sha256: 'a798999071029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '380 KB',
    pageCount: 3,
    description: 'Requisition sent through CBI Interpol NCB New Delhi.',
    content: `CENTRAL BUREAU OF INVESTIGATION - INTERPOL WING
Requisition for international threat telemetry sharing regarding cryptocurrency ransom wallet address.`
  },
  {
    id: 'DOC-1020-5',
    caseId: 'CASE-1020',
    name: 'Supervisory_Review_Note_Senior_SP.pdf',
    docType: 'Police Report',
    docTypeLabel: 'Supervisory Inspection Note',
    version: 1,
    uploadedBy: 'Rajesh Verma, IPS',
    uploadedByRole: 'Administrator',
    uploadDate: '2026-08-27',
    uploadTime: '04:00 PM',
    classification: 'Confidential',
    status: 'Verified',
    sha256: 'b809000171029384710293847102938471029384710293847102938471029384',
    lastVerified: '2026-08-30 08:45 AM',
    fileSize: '290 KB',
    pageCount: 2,
    description: 'Senior leadership review recommending charge sheet filing against domestic accomplices.',
    content: `SUPERVISORY INSPECTION MEMORANDUM
From: Rajesh Verma, IPS, Nodal Officer
To: IO Cyber Cell
Directing completion of investigation within 60 days.`
  }
];

export const INITIAL_AUDIT_LOGS = [
  {
    id: 'LOG-881',
    timestamp: '2026-08-30 09:30 AM',
    user: 'Inspector Sharma',
    role: 'Senior Officer',
    action: 'Viewed',
    actionBadge: 'view',
    documentId: 'DOC-1024-1',
    documentName: 'FIR_1024_Theft_Sevoke_Road.pdf',
    caseId: 'CASE-1024',
    details: 'Viewed document content and verified cryptographic hash status.',
    ip: '10.24.112.4 (Siliguri PS Intranet)'
  },
  {
    id: 'LOG-880',
    timestamp: '2026-08-30 08:45 AM',
    user: 'SI Rahul Das',
    role: 'Police Officer',
    action: 'Verified',
    actionBadge: 'verify',
    documentId: 'DOC-1024-1',
    documentName: 'FIR_1024_Theft_Sevoke_Road.pdf',
    caseId: 'CASE-1024',
    details: 'SHA-256 integrity verification succeeded. Checksum matched registered registry.',
    ip: '10.24.112.9 (Siliguri PS Intranet)'
  },
  {
    id: 'LOG-879',
    timestamp: '2026-08-29 05:00 PM',
    user: 'Inspector Sharma',
    role: 'Senior Officer',
    action: 'Uploaded',
    actionBadge: 'upload',
    documentId: 'DOC-1024-6',
    documentName: 'Draft_Charge_Sheet_Section_173.pdf',
    caseId: 'CASE-1024',
    details: 'Uploaded Version 1 of Draft Charge Sheet (820 KB) with SHA-256 calculation.',
    ip: '10.24.112.4 (Siliguri PS Intranet)'
  },
  {
    id: 'LOG-878',
    timestamp: '2026-08-29 04:50 PM',
    user: 'Adv. Ananya Roy',
    role: 'Legal Officer',
    action: 'Downloaded',
    actionBadge: 'download',
    documentId: 'DOC-1024-5',
    documentName: 'Forensic_Fingerprint_Analysis_Report.pdf',
    caseId: 'CASE-1024',
    details: 'Downloaded copy for preparing prosecution submission in ACJM Court.',
    ip: '10.88.42.19 (District Legal Cell)'
  },
  {
    id: 'LOG-877',
    timestamp: '2026-08-28 01:45 PM',
    user: 'Adv. Ananya Roy',
    role: 'Legal Officer',
    action: 'Uploaded',
    actionBadge: 'upload',
    documentId: 'DOC-1022-4',
    documentName: 'Legal_Prosecution_Brief_Cyber_Cell.pdf',
    caseId: 'CASE-1022',
    details: 'Uploaded Legal opinion for interstate cyber warrant requisition.',
    ip: '10.88.42.19 (District Legal Cell)'
  },
  {
    id: 'LOG-876',
    timestamp: '2026-08-27 04:00 PM',
    user: 'Rajesh Verma, IPS',
    role: 'Administrator',
    action: 'Approved',
    actionBadge: 'approve',
    documentId: 'DOC-1020-5',
    documentName: 'Supervisory_Review_Note_Senior_SP.pdf',
    caseId: 'CASE-1020',
    details: 'Approved supervisory memo and updated case status to Under Review.',
    ip: '10.1.10.88 (NCRB HQ Gateway)'
  },
  {
    id: 'LOG-875',
    timestamp: '2026-08-20 10:30 AM',
    user: 'SI Rahul Das',
    role: 'Police Officer',
    action: 'Updated',
    actionBadge: 'update',
    documentId: 'DOC-1024-1',
    documentName: 'FIR_1024_Theft_Sevoke_Road.pdf',
    caseId: 'CASE-1024',
    details: 'Uploaded Version 2 with updated recovery memo and arrested accused details.',
    ip: '10.24.112.9 (Siliguri PS Intranet)'
  },
  {
    id: 'LOG-874',
    timestamp: '2026-08-12 02:00 PM',
    user: 'Inspector Sharma',
    role: 'Senior Officer',
    action: 'Created',
    actionBadge: 'create',
    documentId: 'CASE-1024',
    documentName: 'CASE-1024 Record Initialized',
    caseId: 'CASE-1024',
    details: 'New case opened: Theft of Gold Jewellery at Sevoke Road.',
    ip: '10.24.112.4 (Siliguri PS Intranet)'
  }
];

export const POLICE_STATIONS = [
  'Siliguri Police Station',
  'Matigara Police Station',
  'Bagdogra Police Station',
  'Pradhannagar Police Station',
  'Cyber Crime Police Station',
  'District Legal Cell',
  'HQ - National Crime Records Bureau'
];

export const DOCUMENT_TYPES = [
  'FIR',
  'Police Report',
  'Investigation Report',
  'Witness Statement',
  'Evidence Record',
  'Forensic Report',
  'Charge Sheet',
  'Court Filing',
  'Legal Notice',
  'Other'
];
