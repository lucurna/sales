// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LucUrna',
  tagline: 'una fuente de luz en los momentos en que se necesita un poco de claridad.',
  favicon: 'img/lucurna.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // CAMBIO IMPORTANTE: Tu dominio personalizado
  url: 'https://sales.lucurna.com',
  // CAMBIO IMPORTANTE: Para dominio personalizado usa '/'
  baseUrl: '/',

  // CAMBIO IMPORTANTE: GitHub pages deployment config para tu cuenta
  organizationName: 'lucurna', // Tu GitHub username
  projectName: 'sales', // Tu repositorio
  
  // Configuración para deployment
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // CAMBIO: Apunta a tu repositorio
          editUrl: 'https://github.com/lucurna/sales/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // CAMBIO: Apunta a tu repositorio
          editUrl: 'https://github.com/lucurna/sales/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LucUrna',
        logo: {
          alt: 'My Site Logo',
          src: 'img/lucurna.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guía',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},//
          //Suspendí la presentación del blog//
          /*
          {
            // CAMBIO: Apunta a tu GitHub
            href: 'https://github.com/lucurna/sales',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                // CAMBIO: Apunta a tu GitHub
                label: 'GitHub',
                href: 'https://github.com/lucurna/sales',
              },
            ],
          },
        ],
        // CAMBIO: Actualiza el copyright
        copyright: `Copyright © ${new Date().getFullYear()} LucUrna. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;