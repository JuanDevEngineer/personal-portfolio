import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Juan Jose Cuadros | Portfolio',
    meta: {
      description: 'Personal portfolio of Juan Jose Cuadros - Web Developer',
      viewport: 'width=device-width, initial-scale=1.0',
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
        },
      },
    ],
  },
  server: {
    publicDir: {
      name: 'public',
    },
  },
});
