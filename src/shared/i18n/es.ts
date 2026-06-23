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
    name: 'Soy Juan José',
    roles: [
      'Analista Programador',
      'Desarrollador Full Stack',
      'Desarrollador React',
      'Desarrollador React Native',
      'Desarrollador PHP',
      'Desarrollador Nodejs',
    ],
    cta: 'Contáctame',
  },
  about: {
    title: 'Sobre mí',
    subtitle: 'Analista Programador & Full Stack Developer',
    text: 'Soy Juan José Restrepo Cuadros, analista programador con más de 3 años de experiencia en desarrollo web. Me especializo en soluciones para sistemas contables y financieros, trabajando con PHP, Node.js, React, Angular y múltiples bases de datos. Soy autodidacta, apasionado por la tecnología y comprometido con la entrega de soluciones de calidad.',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Habilidades Profesionales',
    text: 'A lo largo de mi experiencia he trabajado con un amplio stack tecnológico, desde frontend hasta backend y bases de datos, siempre en entornos ágiles con metodología SCRUM.',
  },
  work: {
    title: 'Proyectos',
    viewDetails: 'Ver detalles',
    viewProject: 'Ver Proyecto',
    technologies: 'Tecnologías',
    projects: [
      {
        name: 'Aplicacion del clima',
        description:
          'Una aplicación de pronóstico del clima con mapas interactivos y alertas basadas en ubicación.',
      },
      {
        name: 'Breaking Back React',
        description:
          'Una aplicacion que carga los personajes de la serie Breaking Bad.',
      },
      {
        name: 'Ecommerce-nextjs',
        description:
          'Una aplicación de comercio electrónico construida con Next.js y React.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    send: 'Enviar',
    sending: 'Enviando...',
    success: '¡Mensaje enviado exitosamente!',
    error: 'Error al enviar el mensaje.',
  },
  footer: {
    copy: 'Todos los derechos reservados',
  },
};
