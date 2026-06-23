export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    resume: string;
    skills: string;
    work: string;
    contact: string;
  };
  resume: {
    title: string;
    subtitle: string;
    text: string;
    download: string;
    preview: string;
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
    sending: string;
    success: string;
    error: string;
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
