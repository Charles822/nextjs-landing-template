export interface ProjectConfig {
  slug: string;
  name: string;
  brandColor: string;
  hero: {
    image?: string;
    imageAlt: string;
    heroVariant?: "image" | "gradient";
    headline: {
      line1: string;
      line2: string;
      line3: string;
    };
    subheadline: string;
    subheadlineBold?: string;
    ctaText: string;
    badge1: string;
    badge2: string;
    cardTitle?: string;
    cardSubtitle?: string;
    caption?: string;
    quote?: string;
    quoteAuthor?: string;
  };
  navigation: {
    logoText: string;
    logoImage?: string;
    /** Logo for light backgrounds (header). Colored graphic + black text. Falls back to logoImage + brightness-0 if absent. */
    logoImageLight?: string;
    navLinks: { label: string; href: string }[];
    ctaText: string;
  };
  services: {
    sectionLabel: string;
    headline: string;
    headlineHighlight: string;
    benefitsTitle: string;
    benefits: { title: string; description: string }[];
    items: {
      id: string;
      icon: string;
      image?: string;
      title: string;
      description: string;
      cta: string;
    }[];
  };
  valueProposition: {
    headline: string;
    subheadline: string;
    features: { icon: string; title: string; description: string }[];
  };
  methodology: {
    sectionLabel: string;
    headline: string;
    variant?: "standard" | "checklist";
    steps: {
      number: string;
      icon: string;
      title: string;
      description: string;
    }[];
    checklistItems?: string[];
  };
  partnersMarquee: string[];
  /** Partners with logos (upgrade from text-only partnersMarquee). Rendered in dedicated Partners section. */
  partners?: {
    sectionLabel?: string;
    headline?: string;
    items: { name: string; logo?: string; url?: string; description?: string }[];
  };
  /** Testimonials section */
  testimonials?: {
    sectionLabel?: string;
    headline?: string;
    items: { quote: string; author: string; company?: string; role?: string }[];
  };
  /** Offers section (distinct from services) */
  offers?: {
    sectionLabel?: string;
    headline?: string;
    items: { id: string; title: string; description: string; cta: string; href?: string }[];
  };
  /** Blog teasers section */
  blog?: {
    sectionLabel?: string;
    headline?: string;
    items: { id: string; title: string; excerpt: string; image?: string; href?: string; date?: string }[];
  };
  contact: {
    sectionLabel: string;
    headline: string;
    intro: string;
    introBold?: string;
    email?: string;
    phone?: string;
  };
  footer: {
    description: string;
    copyright: string;
  };
}
