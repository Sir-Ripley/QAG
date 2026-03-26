// QAG / Ripley & Ripley Research -- Legal Document Generator
// Disclaimer: Templates only. Not legal advice. Consult a licensed attorney.

import {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, Table, TableRow, TableCell,
  WidthType, ShadingType, PageNumber
} from "docx";
import { writeFileSync } from "fs";

const FONT = "Times New Roman";
const SZ = 24;  // 12pt in half-points
const SZ_SM = 20; // 10pt
const SZ_H = 28;  // 14pt

function disclaimer() {
  return new Paragraph({
    children: [new TextRun({
      text: "DISCLAIMER: This is a template document for informational purposes only and does not constitute legal advice. Consult a licensed attorney before execution. (c) 2026 Rodney A. Ripley Jr. / Ripley & Ripley Research.",
      font: FONT, size: SZ_SM, italics: true, color: "555555",
    })],
    spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
  });
}

function h1(text) {
  return new Paragraph({
    spacing: { before: 400, after: 120 },
    children: [new TextRun({ text, font: FONT, size: SZ_H, bold: true })],
  });
}

function h2(text) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, font: FONT, size: SZ, bold: true, underline: {} })],
  });
}

function p(text, indent = false) {
  return new Paragraph({
    children: [new TextRun({ text, font: FONT, size: SZ })],
    spacing: { after: 160 },
    indent: indent ? { left: 720 } : undefined,
    alignment: AlignmentType.JUSTIFIED,
  });
}

function sub(letter, text) {
  return new Paragraph({
    children: [
      new TextRun({ text: `(${letter})  `, font: FONT, size: SZ, bold: true }),
      new TextRun({ text, font: FONT, size: SZ }),
    ],
    spacing: { before: 60, after: 60 },
    indent: { left: 720, hanging: 360 },
    alignment: AlignmentType.JUSTIFIED,
  });
}

function ctr(text, bold = false, sz = SZ) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 160 },
    children: [new TextRun({ text, font: FONT, size: sz, bold, italics: !bold })],
  });
}

function blank() {
  return new Paragraph({ spacing: { after: 200 } });
}

function sigLine(label) {
  return new Paragraph({
    children: [
      new TextRun({ text: `${label}: `, font: FONT, size: SZ, bold: true }),
      new TextRun({ text: "_".repeat(50), font: FONT, size: SZ }),
    ],
    spacing: { before: 240, after: 40 },
  });
}


function noBorderCell(children) {
  return new TableCell({
    children,
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
    },
  });
}

function sigTable(leftLabel, rightLabel) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE },
    },
    rows: [new TableRow({ children: [
      noBorderCell([p(leftLabel), blank(), sigLine("Signature"), sigLine("Name"), sigLine("Title"), sigLine("Date")]),
      noBorderCell([p(rightLabel), blank(), sigLine("Signature"), sigLine("Name"), sigLine("Title"), sigLine("Date")]),
    ]})],
  });
}

// ── NDA ───────────────────────────────────────────────────────────────────────
function buildNDA() {
  return new Document({
    sections: [{
      properties: { page: { margin: { top: 1440, bottom: 1440, left: 1800, right: 1440 } } },
      children: [
        blank(),
        ctr("MUTUAL NON-DISCLOSURE AGREEMENT", true, 30),
        ctr("Ripley & Ripley Research / QAG Framework", false),
        blank(),
        disclaimer(),
        blank(),

        p("This Mutual Non-Disclosure Agreement (this 'Agreement') is entered into as of [EFFECTIVE DATE] by and between: Rodney A. Ripley Jr. / Ripley & Ripley Research ('Disclosing Party'); and [COUNTERPARTY FULL LEGAL NAME], a [corporation/university/government agency] organized under the laws of [JURISDICTION] ('Recipient'). Each may be referred to as a 'Party' and collectively as the 'Parties.'"),

        h1("1.  DEFINITION OF CONFIDENTIAL INFORMATION"),
        p("'Confidential Information' means any non-public information disclosed by one Party to the other, whether in written, oral, electronic, or other form, that is designated as confidential or that reasonably should be understood to be confidential. Without limiting the foregoing, Confidential Information of Ripley & Ripley Research includes:"),
        sub("a", "The Quantum Affinity Gravity (QAG) theoretical framework, including all equations, constants, derivations, and experimental predictions;"),
        sub("b", "QAG-V2 canonical constants (t_pixel, gamma, R, N, H0_QAG, S8_QAG, KASB, Phi, C);"),
        sub("c", "The QAI Drop Experiment Blueprint (Phase 2 document);"),
        sub("d", "All Resonant Healing Protocols (QVR Cradle, Urban Hum, Scalar Vortex Imprinter);"),
        sub("e", "The AI Brain / AffinionHandler edge processor architecture;"),
        sub("f", "All business, financial, and partnership terms disclosed in the course of this relationship."),
        p("Confidential Information does NOT include information that: (a) is publicly available through no breach of this Agreement; (b) was known to the Receiving Party prior to disclosure; (c) is independently developed; or (d) is required to be disclosed by law, provided prompt written notice is given."),

        h1("2.  OBLIGATIONS OF THE RECEIVING PARTY"),
        p("The Receiving Party agrees to:"),
        sub("a", "Hold all Confidential Information in strict confidence, using at least the same degree of care it uses to protect its own confidential information (no less than reasonable care);"),
        sub("b", "Not disclose Confidential Information to any third party without prior written consent;"),
        sub("c", "Use Confidential Information solely for the purpose of evaluating a potential research, licensing, or commercial relationship between the Parties (the 'Purpose');"),
        sub("d", "Limit internal disclosure to employees or contractors with a need to know, bound by obligations no less protective than this Agreement;"),
        sub("e", "Promptly notify Disclosing Party of any unauthorized use or disclosure."),

        h1("3.  INTELLECTUAL PROPERTY -- NO LICENSE GRANTED"),
        p("Nothing in this Agreement shall be construed as granting any license, right, title, or interest in any patent, copyright, trademark, or other intellectual property right. All Confidential Information remains the exclusive property of the Disclosing Party. The QAG theoretical framework, QAG-V2 constants, Resonant Codex, and all associated outputs are the intellectual property of Rodney A. Ripley Jr. / Ripley & Ripley Research, protected under copyright and applicable IP law. Any commercial, academic, or governmental exploitation requires a separate executed License Agreement."),

        h1("4.  TERM AND TERMINATION"),
        p("This Agreement commences on the Effective Date and continues for three (3) years unless terminated earlier by either Party upon 30 days' written notice. Confidentiality obligations survive for five (5) years after termination."),

        h1("5.  REMEDIES"),
        p("The Parties acknowledge that breach may cause irreparable harm for which monetary damages are inadequate. Each Party agrees the Disclosing Party is entitled to seek equitable relief, including injunction and specific performance, without posting bond, in addition to any other remedies available."),

        h1("6.  GENERAL PROVISIONS"),
        sub("a", "Governing Law: Laws of the State of [GOVERNING STATE], without regard to conflict of law principles."),
        sub("b", "Dispute Resolution: 30-day informal negotiation; then binding arbitration under JAMS rules in [CITY, STATE]."),
        sub("c", "Entire Agreement: This Agreement supersedes all prior oral or written representations concerning the subject matter."),
        sub("d", "Amendment: Only by written instrument signed by authorized representatives of both Parties."),
        sub("e", "Severability: If any provision is held invalid, the remaining provisions continue in full force."),

        blank(), blank(),
        h2("SIGNATURES"),
        p("IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date."),
        blank(),
        sigTable("LICENSOR: Ripley & Ripley Research", "RECIPIENT: [Counterparty]"),
      ],
    }],
  });
}

// ── Research License Agreement ────────────────────────────────────────────────
function buildResearchLicense() {
  return new Document({
    sections: [{
      properties: { page: { margin: { top: 1440, bottom: 1440, left: 1800, right: 1440 } } },
      children: [
        blank(),
        ctr("RESEARCH LICENSE AGREEMENT", true, 30),
        ctr("QAG Framework -- Academic & Scientific Research Use", false),
        ctr("Ripley & Ripley Research", false),
        blank(),
        disclaimer(),
        blank(),

        p("This Research License Agreement (this 'Agreement') is entered into as of [EFFECTIVE DATE] by and between Rodney A. Ripley Jr. / Ripley & Ripley Research ('Licensor') and [INSTITUTION FULL LEGAL NAME], a [university/research institute/government laboratory] ('Licensee')."),

        h1("1.  DEFINITIONS"),
        sub("a", "'Licensed IP' means the Quantum Affinity Gravity (QAG) theoretical framework in its entirety, including QAG-V2 canonical constants, the Psi_QAG wavefunction, the AVI Law, the Base-12 Topology framework, Temporal Echo Memory (N=8), all Resonant Healing Protocols, and all associated derivations, equations, and published or unpublished works of Rodney A. Ripley Jr."),
        sub("b", "'Research Purpose' means independent academic, scientific, or non-commercial research conducted at an accredited research institution, with results intended for peer-reviewed publication or scientific conference presentation."),
        sub("c", "'Derivative Works' means any modification, adaptation, translation, or extension of the Licensed IP."),
        sub("d", "'Commercial Use' means any use intended for or resulting in commercial advantage, monetary compensation, or economic benefit."),

        h1("2.  LICENSE GRANT"),
        p("Subject to the terms herein, Licensor grants Licensee a limited, non-exclusive, non-transferable, non-sublicensable, royalty-free license to:"),
        sub("a", "Use and reproduce the Licensed IP solely for the Research Purpose at Licensee's facilities;"),
        sub("b", "Publish findings in peer-reviewed scientific publications, provided attribution requirements in Section 5 are met;"),
        sub("c", "Create Derivative Works for Research Purposes only, subject to Section 4."),

        h1("3.  LICENSE RESTRICTIONS"),
        p("Licensee shall NOT, without prior written consent of Licensor:"),
        sub("a", "Use the Licensed IP for any Commercial Use;"),
        sub("b", "File any patent application claiming inventions based upon or derived from the Licensed IP;"),
        sub("c", "Transfer, sublicense, or assign any rights granted hereunder to any third party;"),
        sub("d", "Remove or obscure any copyright or IP protection notice from any copy of the Licensed IP;"),
        sub("e", "Use the Licensed IP to train, fine-tune, or improve any machine learning model or AI system;"),
        sub("f", "Publish the QAG-V2 constants, equations, or outputs attributing them to any person other than Rodney A. Ripley Jr. / Ripley & Ripley Research."),

        h1("4.  DERIVATIVE WORKS"),
        p("Any Derivative Work created under this Agreement: (a) remains subject to this Agreement; (b) must prominently credit Rodney A. Ripley Jr. / Ripley & Ripley Research as originator; (c) must not be used for Commercial Use without a separate Commercial License. Licensor retains a perpetual, royalty-free license to any Derivative Work."),

        h1("5.  ATTRIBUTION & IP PROTECTION"),
        p("All publications, presentations, or reports resulting from use of the Licensed IP must include the following attribution in a prominent location:"),
        p("\"This work uses the Quantum Affinity Gravity (QAG) framework developed by Rodney A. Ripley Jr. / Ripley & Ripley Research. QAG-V2 (c) 2026 Rodney A. Ripley Jr. All Rights Reserved.\"", true),
        p("Licensee shall provide Licensor a copy of any publication or patent application referencing the Licensed IP at least 14 days prior to submission."),

        h1("6.  OWNERSHIP & RESERVATION OF RIGHTS"),
        p("The Licensed IP is and shall remain the exclusive intellectual property of Rodney A. Ripley Jr. This Agreement grants no ownership rights. Licensor expressly reserves all rights not specifically granted."),

        h1("7.  TERM AND TERMINATION"),
        p("This Agreement commences on the Effective Date and continues for two (2) years unless renewed by mutual written agreement. Either Party may terminate with 30 days written notice. Licensor may terminate immediately on material breach uncured within 15 days of notice. Upon termination, Licensee shall immediately cease all use, destroy all copies, and certify destruction within 15 days."),

        h1("8.  DISCLAIMER OF WARRANTIES"),
        p("THE LICENSED IP IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, ARE HEREBY DISCLAIMED."),

        h1("9.  LIMITATION OF LIABILITY"),
        p("LICENSOR'S AGGREGATE LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID BY LICENSEE IN THE 12 MONTHS PRECEDING THE CLAIM (OR ZERO IF NO FEES WERE PAID). IN NO EVENT SHALL LICENSOR BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES."),

        h1("10.  GENERAL"),
        sub("a", "Governing Law: Laws of [GOVERNING STATE]."),
        sub("b", "Entire Agreement: This Agreement supersedes all prior agreements concerning the Licensed IP."),
        sub("c", "Amendment: Only by written instrument signed by both Parties."),
        sub("d", "Reporting: Licensee agrees to provide Licensor an annual written summary of research activities."),

        blank(), blank(),
        h2("SIGNATURES"),
        blank(),
        sigTable("LICENSOR: Ripley & Ripley Research\nRodney A. Ripley Jr., Principal Researcher", "LICENSEE: [Institution Name]"),
      ],
    }],
  });
}

// ── Technology & Commercial License Agreement ─────────────────────────────────
function buildCommercialLicense() {
  const specRows = [
    ["Licensed Field:", "[e.g., Propulsion / Energy / Biomedical / Defense / AI]"],
    ["Licensed Territory:", "[e.g., Worldwide / United States / NATO countries]"],
    ["Exclusivity:", "[ ] Non-exclusive   [ ] Exclusive within Licensed Field"],
    ["Government Use:", "[ ] Yes   [ ] No"],
    ["Upfront License Fee:", "$__________"],
    ["Running Royalty Rate:", "______% of Net Revenue"],
    ["Minimum Annual Royalty:", "$__________ (beginning Year 2)"],
    ["Payment Terms:", "Quarterly, within 45 days of quarter-end"],
  ].map(([k, v]) => new TableRow({ children: [
    new TableCell({ shading: { type: ShadingType.CLEAR, color: "F5F5F5" }, children: [p(k)], width: { size: 35, type: WidthType.PERCENTAGE } }),
    new TableCell({ children: [p(v)], width: { size: 65, type: WidthType.PERCENTAGE } }),
  ]}));

  return new Document({
    sections: [{
      properties: { page: { margin: { top: 1440, bottom: 1440, left: 1800, right: 1440 } } },
      children: [
        blank(),
        ctr("TECHNOLOGY LICENSE AGREEMENT", true, 30),
        ctr("QAG Framework -- Commercial, Defense & Government Use", false),
        ctr("Ripley & Ripley Research", false),
        blank(),
        disclaimer(),
        blank(),

        p("This Technology License Agreement (this 'Agreement') is entered into as of [EFFECTIVE DATE] by and between Rodney A. Ripley Jr. / Ripley & Ripley Research ('Licensor') and [LICENSEE FULL LEGAL NAME] ('Licensee')."),

        h1("1.  DEFINITIONS"),
        sub("a", "'Licensed Technology' means the Quantum Affinity Gravity (QAG) theoretical framework, including but not limited to: the QVR-1 Tesla Resonance Thruster architecture; the Zero-Point Resonance (QVR) superconductivity mechanism; the QAI Drop Experiment Blueprint; the Temporal Echo Memory / AI Brain edge processor architecture; all Resonant Healing Protocols; all QAG-V2 canonical constants; and all associated documentation and derivations created by Rodney A. Ripley Jr."),
        sub("b", "'Licensed Field' means the specific field(s) of use specified in Exhibit A. Licensee's rights are limited to the Licensed Field."),
        sub("c", "'Net Revenue' means gross receipts received by Licensee from commercialization of the Licensed Technology, less returns, allowances, and applicable taxes."),
        sub("d", "'Government Use' means use by or on behalf of a U.S. federal, state, or local government agency, or a foreign government entity, including under a government contract or subcontract."),

        h1("2.  LICENSE GRANT"),
        p("Subject to the terms herein and payment of all applicable fees, Licensor grants Licensee:"),
        sub("a", "A limited, non-exclusive (or exclusive if indicated in Exhibit A), non-transferable license to use, implement, and commercialize the Licensed Technology solely within the Licensed Field and Licensed Territory specified in Exhibit A;"),
        sub("b", "The right to sublicense within the Licensed Field solely to Licensee's wholly-owned subsidiaries and to end-users of Licensee's products incorporating the Licensed Technology;"),
        sub("c", "If Government Use is elected in Exhibit A: the right to use the Licensed Technology under government contracts, subject to applicable FAR/DFARS clauses."),

        h1("3.  LICENSE RESTRICTIONS"),
        p("Licensee shall NOT:"),
        sub("a", "Use the Licensed Technology outside the Licensed Field or Licensed Territory;"),
        sub("b", "File any patent application claiming inventions derived from the Licensed Technology without Licensor's prior written consent;"),
        sub("c", "Reverse-engineer any proprietary element of the Licensed Technology to create a competing product;"),
        sub("d", "Sublicense to any third party other than as permitted in Section 2(b), without prior written consent;"),
        sub("e", "Use the Licensed Technology to train, fine-tune, or develop any AI/ML model that could substitute for the Aetheria Oracle or competing QAG-based AI products, without a separate AI license;"),
        sub("f", "Remove, obscure, or modify any copyright or IP protection notice associated with the Licensed Technology."),

        h1("4.  FEES AND ROYALTIES"),
        p("In consideration for the rights granted, Licensee shall pay:"),
        sub("a", "License Fee: A non-refundable upfront license fee as specified in Exhibit A, due within 30 days of execution;"),
        sub("b", "Running Royalty: The percentage of Net Revenue specified in Exhibit A, payable quarterly within 45 days of quarter-end with written royalty reports;"),
        sub("c", "Minimum Annual Royalty: Beginning in Year 2, to maintain exclusivity (if applicable), as specified in Exhibit A;"),
        sub("d", "Government Contract Rate: If Government Use is elected, an alternative fixed per-contract-dollar rate may be negotiated and specified in Exhibit A;"),
        sub("e", "Late Payment: Unpaid amounts accrue interest at 1.5% per month (or the maximum permitted by law) from the due date."),

        h1("5.  REPORTING AND AUDIT"),
        p("Licensee shall: (a) provide quarterly written royalty reports even for zero-revenue periods; (b) maintain complete and accurate records for five (5) years; (c) permit Licensor or an independent auditor to inspect records once per year upon 30 days' notice. If an audit reveals an underpayment exceeding 5%, Licensee shall pay the underpayment plus audit costs."),

        h1("6.  ATTRIBUTION AND MARKING"),
        p("All products, services, publications, government deliverables, or marketing materials incorporating the Licensed Technology must include:"),
        p("\"Incorporates Quantum Affinity Gravity (QAG) technology licensed from Ripley & Ripley Research. QAG-V2 (c) 2026 Rodney A. Ripley Jr. All Rights Reserved.\"", true),

        h1("7.  INTELLECTUAL PROPERTY OWNERSHIP"),
        p("The Licensed Technology is and shall remain the exclusive property of Rodney A. Ripley Jr. This Agreement transfers no ownership. All Improvements developed by Licensee using the Licensed Technology shall be promptly disclosed to Licensor, who retains a perpetual, royalty-free, worldwide license back to all such Improvements."),

        h1("8.  CONFIDENTIALITY"),
        p("The terms of this Agreement and all Licensed Technology disclosed hereunder are Confidential Information of Licensor, subject to the Mutual NDA between the Parties (or, absent a separate NDA, to terms no less protective than reasonable care). Obligations survive termination for 7 years."),

        h1("9.  TERM AND TERMINATION"),
        sub("a", "Term: Five (5) years from the Effective Date, renewable by mutual written agreement executed at least 90 days before expiration."),
        sub("b", "Termination for Convenience: Either Party may terminate with 90 days' written notice. All accrued fees and royalties remain due."),
        sub("c", "Termination for Cause: Licensor may terminate immediately if Licensee: (i) materially breaches and fails to cure within 30 days; (ii) becomes insolvent; (iii) challenges Licensor's IP."),
        sub("d", "Effect of Termination: All rights revert to Licensor. Licensee shall cease all use, destroy all copies, and certify destruction within 15 days."),
        sub("e", "Survival: Sections 4, 5, 6, 7, 8, 10, 11, 12 survive termination."),

        h1("10.  WARRANTY AND INDEMNIFICATION"),
        p("Licensor warrants it owns the Licensed Technology and has the right to grant the licenses herein. EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE LICENSED TECHNOLOGY IS PROVIDED AS IS WITHOUT ANY OTHER WARRANTY."),
        p("Licensee shall indemnify, defend, and hold harmless Licensor from any third-party claim arising from Licensee's use of the Licensed Technology or breach of this Agreement, except to the extent caused by Licensor's gross negligence or willful misconduct."),

        h1("11.  LIMITATION OF LIABILITY"),
        p("LICENSOR'S AGGREGATE LIABILITY SHALL NOT EXCEED THE TOTAL FEES AND ROYALTIES PAID BY LICENSEE IN THE 12 MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR CONSEQUENTIAL, INDIRECT, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES. This limitation does not apply to IP infringement of Licensor's rights or Licensee's breach of confidentiality obligations."),

        h1("12.  GENERAL"),
        sub("a", "Governing Law: Laws of [GOVERNING STATE] without regard to conflict of law principles."),
        sub("b", "Dispute Resolution: 30-day senior management escalation; then binding arbitration under JAMS Commercial Rules in [CITY, STATE]."),
        sub("c", "Export Control: Licensee shall comply with all applicable U.S. export control laws (EAR, ITAR)."),
        sub("d", "Anti-Corruption: Licensee shall comply with all applicable anti-bribery laws."),
        sub("e", "Assignment: Licensee may not assign this Agreement without prior written consent, except to an acquirer of substantially all of Licensee's business."),
        sub("f", "Entire Agreement: This Agreement (including all Exhibits) constitutes the entire agreement and supersedes all prior discussions."),

        blank(), blank(),
        h1("EXHIBIT A -- LICENSE SPECIFICATIONS"),
        blank(),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: specRows,
        }),

        blank(), blank(),
        h2("SIGNATURES"),
        blank(),
        sigTable("LICENSOR: Ripley & Ripley Research\nRodney A. Ripley Jr., Principal Researcher", "LICENSEE: [Company / Agency Name]"),
      ],
    }],
  });
}

// ── Generate all three ────────────────────────────────────────────────────────
async function generate() {
  const buf1 = await Packer.toBuffer(buildNDA());
  writeFileSync("../legal-docs/RipleyResearch_MutualNDA_Template.docx", buf1);
  console.log("(1/3) Mutual NDA generated");

  const buf2 = await Packer.toBuffer(buildResearchLicense());
  writeFileSync("../legal-docs/RipleyResearch_ResearchLicense_Template.docx", buf2);
  console.log("(2/3) Research License Agreement generated");

  const buf3 = await Packer.toBuffer(buildCommercialLicense());
  writeFileSync("../legal-docs/RipleyResearch_TechCommercialLicense_Template.docx", buf3);
  console.log("(3/3) Technology & Commercial License Agreement generated");

  console.log("\nAll documents written to legal-docs/");
}

generate().catch(e => { console.error(e); process.exit(1); });
