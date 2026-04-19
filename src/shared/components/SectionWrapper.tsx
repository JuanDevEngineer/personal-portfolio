import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../animations/variants';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title?: string;
  className?: string;
}

export function SectionWrapper({ children, id, title, className = '' }: SectionWrapperProps) {
  const { ref, controls } = useScrollAnimation(0.15);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </motion.section>
  );
}
