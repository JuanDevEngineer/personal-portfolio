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
    name: 'Juan Jose',
    roles: ['Web Developer', 'PHP Developer', 'React Developer'],
    cta: 'Contact',
  },
  about: {
    title: 'About',
    subtitle: "I'm Juan Jose",
    text: 'I am Juan Jose Restrepo Cuadros. I am a programmer analyst with over four years of experience. I currently work as a front-end developer, using languages such as AngularJS, React, vanilla JavaScript, jQuery, NodeJS, and PHP, as well as libraries such as Bootstrap and TailwindCSS.',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Professional Skills',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.',
  },
  work: {
    title: 'Work',
    viewDetails: 'View details',
    viewProject: 'View Project',
    technologies: 'Technologies',
    projects: [
      {
        name: 'Weather App',
        description: 'A weather forecasting application with interactive maps and location-based alerts.',
      },
      {
        name: 'Breaking Back React',
        description: 'A application that loads the characters from the series Breaking Bad.',
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
  },
  footer: {
    copy: 'All rights reserved',
  },
};
