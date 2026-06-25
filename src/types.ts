export type Language = 'en' | 'zh' | 'hans';

export interface OutputMode {
  id: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  rawInput: Record<Language, string>;
  formattedOutput: Record<Language, string>;
}

export interface Feature {
  id: string;
  number: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  badge?: Record<Language, string>;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  role: Record<Language, string>;
  content: Record<Language, string>;
}
