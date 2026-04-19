import { motion } from 'framer-motion';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

function Contact() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="contact" title={t.contact.title}>
      <motion.div
        ref={ref}
        className="contact__container bd-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.form action="" className="contact__form" variants={fadeInUp}>
          <motion.input
            type="text"
            placeholder={t.contact.namePlaceholder}
            className="contact__input"
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
          />
          <motion.input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            className="contact__input"
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
          />
          <motion.textarea
            cols={0}
            rows={10}
            placeholder={t.contact.messagePlaceholder}
            className="contact__input"
            whileFocus={{ scale: 1.02, borderColor: 'var(--first-color)' }}
          />
          <motion.button
            type="submit"
            className="contact__button button"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(13, 148, 136, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            {t.contact.send}
          </motion.button>
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
}

export default Contact;
