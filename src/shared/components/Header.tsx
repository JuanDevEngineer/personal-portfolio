import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      className="l-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Juan Jose Cuadros
          </a>
        </div>

        <div className={`nav__menu ${isOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navItems.map((item, i) => (
              <motion.li
                key={item.href}
                className="nav__item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  className="nav__link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="nav__actions">
          <LanguageToggle />
          <ThemeToggle />
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  icon={isOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'}
                  width="24"
                  height="24"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
