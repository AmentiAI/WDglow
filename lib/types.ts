export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  result: string;
  summary: string;
  description: string;
  headline: string;
  lede: string;
  paragraphs: string[];
  includes: string[];
  suitedTo: string[];
  faqs: Faq[];
};

export type PlaceTier = "home" | "primary" | "extended";

export type Place = {
  slug: string;
  name: string;
  state: "Rhode Island" | "Connecticut";
  stateCode: "RI" | "CT";
  county: string;
  region: string;
  tier: PlaceTier;
  description: string;
  lede: string;
  paragraphs: string[];
  neighborhoods?: string[];
  considerations: string[];
  faqs: Faq[];
  nearby: string[];
  featuredServices?: string[];
};
