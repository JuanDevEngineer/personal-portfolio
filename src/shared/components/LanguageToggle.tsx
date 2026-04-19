import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Español' : 'English'}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="language-toggle__label"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
