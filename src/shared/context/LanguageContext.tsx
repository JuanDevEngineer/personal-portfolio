import { createContext, useContext, useState, useCallback } from 'react';
import type { Language, LanguageContextType, Translations } from '../types/language';
import { en, es } from '../i18n';

const translations: Record<Language, Translations> = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('portfolio-language') as Language | null;
    if (stored) return stored;
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'es') return 'es';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-language', next);
      return next;
    });
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
