export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    work: string;
    contact: string;
  };
  home: {
    greeting: string;
    name: string;
    roles: string[];
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    text: string;
  };
  skills: {
    title: string;
    subtitle: string;
    text: string;
  };
  work: {
    title: string;
    viewDetails: string;
    viewProject: string;
    technologies: string;
    projects: {
      name: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  footer: {
    copy: string;
  };
}

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}
