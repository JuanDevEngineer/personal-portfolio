import type { Translations } from '../types/language';

export const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    work: 'Proyectos',
    contact: 'Contacto',
  },
  home: {
    greeting: 'Hola,',
    name: 'Juan Jose',
    roles: ['Desarrollador Web', 'Desarrollador React', 'Desarrollador php'],
    cta: 'Contacto',
  },
  about: {
    title: 'Sobre mí',
    subtitle: 'Soy Juan Jose',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Habilidades Profesionales',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.',
  },
  work: {
    title: 'Proyectos',
    viewDetails: 'Ver detalles',
    viewProject: 'Ver Proyecto',
    technologies: 'Tecnologías',
    projects: [
      {
        name: 'Aplicacion del clima',
        description: 'Una aplicación de pronóstico del clima con mapas interactivos y alertas basadas en ubicación.',
      },
      {
        name: 'Breaking Back React',
        description: 'Una aplicacion que carga los personajes de la serie Breaking Bad.',
      },
      {
        name: 'Ecommerce-nextjs',
        description: 'Una aplicación de comercio electrónico construida con Next.js y React.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    send: 'Enviar',
  },
  footer: {
    copy: 'Todos los derechos reservados',
  },
};
