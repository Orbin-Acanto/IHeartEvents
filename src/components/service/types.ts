export interface SectionItem {
  logo?: string;
  name?: string;
  logo_text?: string;
  logoHeight?: string;
  description: string;
  images: string[];
  buttonText: string;
  buttonLink: string;
  pillLabel?: string;
}

export interface ServiceData {
  logo?: string;
  name?: string;
  logo_text?: string;
  logoHeight?: string;
  maintext: string;
  ctaText: string;
  ctaButtonText: string;
  buttonLink: string;
  section: SectionItem[];
}

export interface ServiceSectionProps {
  items: ServiceData[];
}
