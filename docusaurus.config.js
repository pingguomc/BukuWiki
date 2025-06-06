// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BukuWiki',
  tagline: 'Minecraft玩家们的终极游玩指南',
  favicon: 'img/favicon.ico',

  future: {
      v4: true,
      experimental_faster: {
          rspackBundler: true, // required flag
          rspackPersistentCache: true, // new flag
      },
  },
  
  // Set the production url of your site here
  url: 'https://docs.buku.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  scripts: [
    {
      src: 'https://cdn.jsdmirror.cn/npm/pangu@4.0.7/dist/browser/pangu.min.js',
      async: false,
    },
    {
      src: './js/script.js',
      async: true,
    },
  ],

  plugins: [
      'docusaurus-plugin-image-zoom',
      [
        '@docusaurus/plugin-content-docs',
        {
            id: 'docs-pc',
            path: 'docs-pc',
            routeBasePath: 'PC',
            editUrl: 'https://github.com/Moralts/BukuWiki/tree/main/docs-pc',
            sidebarPath: './sidebars.js',
            editCurrentVersion: true,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
        }],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/Moralts/BukuWiki/tree/main/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // 插件配置文件
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(36 36 36 / 80%)',
          },
      },
      // 原生配置文件
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BukuWiki',
        logo: {
          alt: 'BukuWiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '通用',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'PC',
            docsPluginId: 'docs-pc'
          },
          {
            href: 'https://github.com/Moralts/BukuWiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '通用',
                to: '/intro',
              },
              {
                label: 'PC',
                to: '/PC/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ Group',
                href: 'https://qm.qq.com/q/lbNpVgNxza',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Moralts/BukuWiki',
              },
              {
                label: 'CloudFlare',
                href: 'https://cloudflare.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <b>BukuTeam And Github Contributors</b>. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
