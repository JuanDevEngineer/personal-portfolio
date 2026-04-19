import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { TypingEffect } from '../../shared/components/TypingEffect';
import { ParticlesBackground } from '../../shared/components/ParticlesBackground';
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  floatingAnimation,
} from '../../shared/animations/variants';
import { useLanguage } from '../../shared/context/LanguageContext';

const socialLinks = [
  { icon: 'uil:linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'mdi:github', href: '#', label: 'GitHub' },
  { icon: 'lineicons:behance', href: '#', label: 'Behance' },
];

function Home() {
  const { t } = useLanguage();

  return (
    <section className="home bd-grid" id="home">
      <ParticlesBackground />

      <motion.div
        className="home__data"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="home__title" variants={fadeInLeft}>
          {t.home.greeting}
          <br />
          I&apos;m <span className="home__title-color">{t.home.name}</span>
          <br />
          <TypingEffect words={t.home.roles} className="home__title-color" />
        </motion.h1>

        <motion.a
          href="#contact"
          className="button"
          variants={fadeInLeft}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 40px rgba(13, 148, 136, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t.home.cta}
        </motion.a>
      </motion.div>

      <motion.div
        className="home__social"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="home__social-icon"
            variants={fadeInLeft}
            whileHover={{ scale: 1.3, y: -5, color: 'var(--first-color)' }}
            whileTap={{ scale: 0.9 }}
            aria-label={link.label}
          >
            <Icon icon={link.icon} width="32" height="32" />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="home__img"
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
      >
        <motion.svg
          className="home__blob"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          animate={floatingAnimation}
        >
          <mask id="mask0">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image
              className="home__blob-img"
              x="50"
              y="0"
              href="img/perfil.png"
            />
          </g>
        </motion.svg>
      </motion.div>
    </section>
  );
}

export default Home;
