export interface Pillar {
  id: string;
  index: number;
  name: string;
  description: string;
  bullets: string[];
}

export interface PillarDeepDiveContent {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  image: {
    width: number;
    height: number;
    caption: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  citation: string;
}

export interface Differentiator {
  index: number;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  tag: "Women's Health" | "Occupational Health" | "Accreditation";
  title: string;
  excerpt: string;
  image: {
    width: number;
    height: number;
    caption: string;
  };
}

export interface FaqItem {
  index: number;
  question: string;
  answer: string;
}

export interface TrustFact {
  index: number;
  stat: string;
  context: string;
}
