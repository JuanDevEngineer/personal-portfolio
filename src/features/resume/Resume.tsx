import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

function Resume() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="resume" title={t.resume.title}>
      <motion.div
        ref={ref}
        className="resume__container bd-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Icon / visual */}
        <motion.div className="resume__visual" variants={fadeInLeft}>
          <motion.div
            className="resume__icon-wrapper"
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon icon="ph:file-pdf-duotone" width="80" height="80" />
          </motion.div>
          <p className="resume__filename">CV_JuanJose_Restrepo.pdf</p>
        </motion.div>

        {/* Info + button */}
        <motion.div className="resume__info" variants={fadeInRight}>
          <h3 className="resume__subtitle">{t.resume.subtitle}</h3>
          <p className="resume__text">{t.resume.text}</p>

          <motion.a
            href="cv/CV_JuanJose_Restrepo.pdf"
            download
            className="button resume__button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(13, 148, 136, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon="material-symbols:download-rounded" width="20" height="20" />
            {t.resume.download}
          </motion.a>

          <motion.a
            href="cv/CV_JuanJose_Restrepo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume__preview-link"
            variants={fadeInUp}
            whileHover={{ x: 5 }}
          >
            <Icon icon="material-symbols:open-in-new" width="16" height="16" />
            {t.resume.preview}
          </motion.a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Resume;
