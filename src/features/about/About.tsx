import { motion } from 'framer-motion';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

function About() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" title={t.about.title}>
      <motion.div
        ref={ref}
        className="about__container bd-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="about__img" variants={fadeInLeft}>
          <motion.img
            src="img/about.jpg"
            alt={t.about.subtitle}
            whileHover={{ scale: 1.05, borderRadius: '1rem' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div variants={fadeInRight}>
          <h2 className="about__subtitle">{t.about.subtitle}</h2>
          <p className="about__text">{t.about.text}</p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

export default About;
