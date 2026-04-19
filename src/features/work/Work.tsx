import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SectionWrapper } from '../../shared/components/SectionWrapper';
import { ProjectModal } from '../../shared/components/ProjectModal';
import type { Project } from '../../shared/components/ProjectModal';
import { scaleIn, staggerContainer } from '../../shared/animations/variants';
import { useScrollAnimation } from '../../shared/hooks/useScrollAnimation';
import { useLanguage } from '../../shared/context/LanguageContext';

const projectsBase: Omit<Project, 'name' | 'description'>[] = [
  {
    img: 'img/work1.jpg',
    technologies: [
      { name: 'React', icon: 'devicon:react' },
      { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
    ],
    href: 'https://github.com/JuanDevEngineer/weather-app',
  },
  {
    img: 'img/work2.jpg',
    technologies: [
      { name: 'TypeScript', icon: 'devicon:react' },
      { name: 'Bootstrap', icon: 'devicon:bootstrap' },
    ],
    href: 'https://github.com/JuanDevEngineer/breaking-back-react',
  },
  {
    img: 'img/work3.jpg',
    technologies: [
      { name: 'TypeScript', icon: 'devicon:react' },
      { name: 'Bootstrap', icon: 'devicon:tailwindcss' },
      { name: 'Next.js', icon: 'devicon:nextjs' },
      { name: 'Prisma', icon: 'devicon:prisma' },
      { name: 'PostgreSQL', icon: 'devicon:postgresql' },
    ],
    href: 'https://github.com/JuanDevEngineer/ecommerce-nextjs',
  },
];

function Work() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: Project[] = projectsBase.map((p, i) => ({
    ...p,
    name: t.work.projects[i]?.name ?? '',
    description: t.work.projects[i]?.description ?? '',
  }));

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <SectionWrapper id="work" title={t.work.title}>
        <motion.div
          ref={ref}
          className="work__container bd-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="work__card"
              variants={scaleIn}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 60px var(--shadow-color-hover)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(project)}
            >
              <div className="work__img">
                <motion.img
                  src={project.img}
                  alt={project.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="work__card-info">
                <h3 className="work__card-title">{project.name}</h3>
                <div className="work__card-tech">
                  {project.technologies.map((tech) => (
                    <Icon key={tech.name} icon={tech.icon} width="16" height="16" />
                  ))}
                </div>
                <span className="work__card-cta">
                  {t.work.viewDetails}
                  <Icon icon="material-symbols:arrow-forward-rounded" width="16" height="16" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Work;
