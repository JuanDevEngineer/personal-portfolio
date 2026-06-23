import type { Translations } from '../types/language';

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    contact: 'Contact',
  },
  home: {
    greeting: 'Hi,',
    name: 'I am Juan José',
    roles: [
      'Programmer Analyst',
      'Full Stack Developer',
      'React Developer',
      'PHP Developer',
    ],
    cta: 'Contact me',
  },
  about: {
    title: 'About me',
    subtitle: 'Programmer Analyst & Full Stack Developer',
    text: 'I am Juan José Restrepo Cuadros, a programmer analyst with over 3 years of experience in web development. I specialize in accounting and financial systems, working with PHP, Node.js, React, Angular, and multiple databases. Self-taught, passionate about technology, and committed to delivering quality solutions.',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Professional Skills',
    text: 'Throughout my experience I have worked with a broad tech stack — from frontend to backend and databases — always in agile environments using SCRUM methodology.',
  },

  work: {
    title: 'Work',
    viewDetails: 'View details',
    viewProject: 'View Project',
    technologies: 'Technologies',
    projects: [
      {
        name: 'Weather App',
        description:
          'A weather forecasting application with interactive maps and location-based alerts.',
      },
      {
        name: 'Breaking Back React',
        description:
          'A application that loads the characters from the series Breaking Bad.',
      },
      {
        name: 'Ecommerce-nextjs',
        description: 'A e-commerce application built with Next.js and React.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    send: 'Send',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Failed to send message.',
  },
  footer: {
    copy: 'All rights reserved',
  },
};
