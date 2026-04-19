import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

const skillsData = [
  { icon: 'vscode-icons:file-type-html', name: 'HTML5', percentage: 95 },
  { icon: 'devicon:css3', name: 'CSS3', percentage: 80 },
  { icon: 'ri:javascript-fill', name: 'JavaScript', percentage: 85 },
  { icon: 'devicon:react', name: 'React', percentage: 80 },
  { icon: 'devicon:nextjs', name: 'Next.js', percentage: 50 },
  { icon: 'devicon:reactnative', name: 'ReactNative', percentage: 50 },
  { icon: 'devicon:php', name: 'PHP', percentage: 85 },
  { icon: 'devicon:nodejs', name: 'Node.js', percentage: 75 },
  { icon: 'devicon:mysql', name: 'MySQL', percentage: 75 },
  {
    icon: 'devicon-plain:microsoftsqlserver',
    name: 'Microsoft SQL Server',
    percentage: 75,
  },
  { icon: 'devicon:angularjs-wordmark', name: 'AngularJS', percentage: 60 },
];

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skillsData)[0];
  index: number;
}) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="skills__data"
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 8px 30px rgba(13, 148, 136, 0.15)',
      }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="skills__names">
        <Icon icon={skill.icon} width="32" height="32" />
        <span className="skills__name">{skill.name}</span>
      </div>
      <div className="skills__bar-container">
        <motion.div
          className="skills__bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
        />
      </div>
      <div>
        <span className="skills__percentage">{skill.percentage}%</span>
      </div>
    </motion.div>
  );
}

function Skills() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="skills" title={t.skills.title}>
      <motion.div
        ref={ref}
        className="skills__container bd-grid"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <div>
          <h2 className="skills__subtitle">{t.skills.subtitle}</h2>
          <p className="skills__text">{t.skills.text}</p>
          <div className="skills__box">
            {skillsData.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        <motion.div variants={fadeInUp}>
          <img
            src="img/work3.jpg"
            alt="Skills showcase"
            className="skills__img"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Skills;
