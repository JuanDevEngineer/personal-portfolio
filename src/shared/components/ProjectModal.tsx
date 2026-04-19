import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export interface Project {
  img: string;
  name: string;
  description: string;
  technologies: { name: string; icon: string }[];
  href: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: { duration: 0.2 },
  },
};

const techBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 + i * 0.08, duration: 0.3 },
  }),
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal__backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="modal__content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="modal__close"
              onClick={onClose}
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <Icon icon="material-symbols:close-rounded" width="24" height="24" />
            </motion.button>

            <div className="modal__image-wrapper">
              <motion.img
                src={project.img}
                alt={project.name}
                className="modal__image"
                layoutId={`project-img-${project.name}`}
              />
              <div className="modal__image-overlay" />
            </div>

            <div className="modal__body">
              <motion.h3
                className="modal__title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                {project.name}
              </motion.h3>

              <motion.p
                className="modal__description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="modal__tech-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t.work.technologies}
              </motion.div>
              <div className="modal__technologies">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    className="modal__tech-badge"
                    custom={i}
                    variants={techBadgeVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon icon={tech.icon} width="18" height="18" />
                    {tech.name}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={project.href}
                className="button modal__link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon icon="material-symbols:open-in-new" width="18" height="18" />
                {t.work.viewProject}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
