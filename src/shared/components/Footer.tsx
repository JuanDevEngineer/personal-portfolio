import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  { icon: 'logos:facebook', href: '#', label: 'Facebook' },
  { icon: 'skill-icons:instagram', href: '#', label: 'Instagram' },
  { icon: 'logos:twitter', href: '#', label: 'Twitter' },
];

export function Footer() {
  const { ref, controls } = useScrollAnimation(0.3);
  const { t } = useLanguage();

  return (
    <motion.footer
      ref={ref}
      className="footer"
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
    >
      <motion.p className="footer__title" variants={fadeInUp}>
        Juan Jose Cuadros
      </motion.p>
      <motion.div className="footer__social" variants={fadeInUp}>
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="footer__icon"
            whileHover={{ scale: 1.3, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={link.label}
          >
            <Icon icon={link.icon} width="32" height="32" />
          </motion.a>
        ))}
      </motion.div>
      <motion.p className="footer__copy" variants={fadeInUp}>
        &#169; Juan Jose. {t.footer.copy} - {new Date().getFullYear()}
      </motion.p>
    </motion.footer>
  );
}
