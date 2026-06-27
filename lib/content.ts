import type {
  Article,
  Differentiator,
  FaqItem,
  Pillar,
  PillarDeepDiveContent,
  Testimonial,
  TrustFact,
} from "@/types/content";

export const trustFacts: TrustFact[] = [
  {
    index: 1,
    stat: "3 audiences",
    context: "Individuals, businesses, and healthcare providers — one consistent standard of care.",
  },
  {
    index: 2,
    stat: "Confidential by default",
    context: "Every engagement is handled with the same discretion as a clinical record.",
  },
  {
    index: 3,
    stat: "Compliance-first",
    context: "Recommendations are built to hold up under audit, not just to sound reassuring.",
  },
];

export const pillars: Pillar[] = [
  {
    id: "womens-health",
    index: 1,
    name: "Women's Health",
    description: "Confidential, evidence-based health guidance for individuals.",
    bullets: ["Private consultations", "Screening guidance", "Ongoing care plans"],
  },
  {
    id: "occupational-health",
    index: 2,
    name: "Occupational Health",
    description: "Workplace health assessments and compliance support for businesses.",
    bullets: ["On-site assessments", "Risk & policy review", "Staff health programs"],
  },
  {
    id: "accreditation",
    index: 3,
    name: "Accreditation",
    description: "Accreditation and quality systems support for healthcare organisations.",
    bullets: ["Audit preparation", "Documentation review", "Standards alignment"],
  },
];

export const pillarDeepDives: PillarDeepDiveContent[] = [
  {
    id: "womens-health",
    index: 3,
    eyebrow: "Pillar 01",
    title: "Women's Health",
    problem:
      "Most women's health guidance is generic, rushed, or detached from the person receiving it — leaving real questions unanswered.",
    approach:
      "We run private, unhurried consultations grounded in current evidence, building a plan around your history rather than a checklist.",
    outcome:
      "Clear next steps, a documented care plan, and a standing relationship you can return to as things change.",
    tags: ["Confidential", "Evidence-based", "Individual care"],
    image: {
      width: 1100,
      height: 880,
      caption:
        "A calm, well-lit consultation room moment — practitioner and client in conversation, candid rather than posed.",
    },
  },
  {
    id: "occupational-health",
    index: 4,
    eyebrow: "Pillar 02",
    title: "Occupational Health",
    problem:
      "Workplace health risk is usually discovered after an incident, when the cost of fixing it is highest.",
    approach:
      "We assess sites directly, review existing policy against current regulation, and build staff health programs that fit how the business actually operates.",
    outcome:
      "A documented risk position, a compliant policy set, and a workforce health program your team will actually use.",
    tags: ["On-site assessment", "Policy review", "Risk reduction"],
    image: {
      width: 1100,
      height: 880,
      caption:
        "An on-site workplace assessment in progress — consultant walking a work floor with a clipboard or tablet, natural working environment.",
    },
  },
  {
    id: "accreditation",
    index: 5,
    eyebrow: "Pillar 03",
    title: "Accreditation",
    problem:
      "Accreditation reviews are treated as a paperwork exercise until an auditor finds the gap that was always there.",
    approach:
      "We review documentation and systems against the relevant standard before the auditor does, closing gaps while there's still time.",
    outcome:
      "A clear pass position going into review, with the underlying documentation actually able to support it.",
    tags: ["Audit-ready", "Standards alignment", "Documentation"],
    image: {
      width: 1100,
      height: 880,
      caption:
        "A documentation/quality review moment — two people at a table reviewing binders or a laptop screen of audit material.",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They treated a sensitive health question like the serious thing it was, not a box to tick.",
    name: "R. Adeyemi",
    role: "Private Client",
    citation: "Women's Health Client · 2025",
  },
  {
    quote:
      "Our last audit found nothing they hadn't already flagged for us three months earlier.",
    name: "J. Patel",
    role: "Practice Manager",
    citation: "Accreditation Client · 2025",
  },
  {
    quote:
      "The site assessment gave us a real action list, not a generic report we'd never open again.",
    name: "M. Okafor",
    role: "Operations Director",
    citation: "Occupational Health Client · 2024",
  },
];

export const differentiators: Differentiator[] = [
  {
    index: 1,
    title: "Expert Guidance",
    description: "Recommendations grounded in current clinical and regulatory standards, not guesswork.",
  },
  {
    index: 2,
    title: "Tailored Solutions",
    description: "Every plan is built around your specific context — not a templated checklist.",
  },
  {
    index: 3,
    title: "Professional Service",
    description: "Confidential, plain-spoken, and accountable at every stage of the engagement.",
  },
  {
    index: 4,
    title: "Ongoing Support",
    description: "The relationship continues after the report is delivered, not just up to sign-off.",
  },
];

export const articles: Article[] = [
  {
    id: "screening-basics",
    tag: "Women's Health",
    title: "What Routine Screening Actually Covers",
    excerpt: "A plain breakdown of what's checked, why, and how often — without the jargon.",
    image: { width: 1100, height: 688, caption: "Editorial photo of a screening appointment, calm and clinical-light." },
  },
  {
    id: "private-consult-prep",
    tag: "Women's Health",
    title: "Getting the Most From a Private Consultation",
    excerpt: "How to prepare questions and history so your first session counts.",
    image: { width: 1100, height: 688, caption: "Person reviewing notes before an appointment, warm natural light." },
  },
  {
    id: "workplace-risk-101",
    tag: "Occupational Health",
    title: "Workplace Risk Assessments, Demystified",
    excerpt: "What an assessor actually looks for on-site, and how to prepare your team.",
    image: { width: 1100, height: 688, caption: "Workplace safety walk-through, consultant and staff member in discussion." },
  },
  {
    id: "policy-review-checklist",
    tag: "Occupational Health",
    title: "Five Gaps Most Health Policies Have",
    excerpt: "The recurring issues we find before they become incidents.",
    image: { width: 1100, height: 688, caption: "Close-up of a policy document being reviewed with a pen, desk setting." },
  },
  {
    id: "audit-readiness",
    tag: "Accreditation",
    title: "What 'Audit-Ready' Actually Means",
    excerpt: "The difference between having documentation and having defensible documentation.",
    image: { width: 1100, height: 688, caption: "Two professionals reviewing accreditation binders at a table." },
  },
  {
    id: "standards-alignment",
    tag: "Accreditation",
    title: "Aligning to a New Standard Without Starting Over",
    excerpt: "How to map existing systems to updated accreditation requirements efficiently.",
    image: { width: 1100, height: 688, caption: "Laptop screen showing a standards checklist, hands typing, office setting." },
  },
];

export const faqItems: FaqItem[] = [
  {
    index: 1,
    question: "Isn't compliance just paperwork?",
    answer:
      "Paperwork is the artifact, not the point. The point is whether your systems actually hold up under scrutiny — we focus on that, and the documentation follows naturally.",
  },
  {
    index: 2,
    question: "How confidential is a women's health consultation, really?",
    answer:
      "Treated the same as a clinical record: private by default, never shared without explicit consent, and never used for any purpose beyond your care.",
  },
  {
    index: 3,
    question: "We already passed our last audit — why would we need this?",
    answer:
      "Standards shift and staff turn over between audits. Most gaps we find didn't exist at the last review — they opened up afterward.",
  },
  {
    index: 4,
    question: "How long does a typical engagement take?",
    answer:
      "Individual consultations are usually a single session with a follow-up plan. Business and accreditation engagements vary by scope — we confirm a timeline before work begins, not after.",
  },
];
