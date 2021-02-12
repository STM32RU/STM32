// @ts-check

/** @type {import('saber').SaberConfig} */
const config = {
    siteConfig: {
      title: 'Saber',
      description: 'A framework for building modern static websites.',
      lang: 'en'
    },
    theme: './src',
    markdown: {
      headings: {
        permalink: true
      },
      plugins: [{ resolve: 'markdown-it-footnote' }]
    },
    build: { lazy: true, extractCSS: true },
    permalinks: { post: '/blog/:slug.html' },
    themeConfig: {
      sidebarMenu: [
        {
          title: 'Основное',
          children: [
            { title: 'Руководства', link: '/docs/manuals.html' },
          ]
        }
      ]
    },
    plugins: [
      { resolve: 'saber-plugin-query-posts' },
      { resolve: 'saber-plugin-prismjs' },
      {
        resolve: 'saber-plugin-pwa',
        options: {
          generateSWOptions: {
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/css/,
                handler: 'StaleWhileRevalidate'
              },
              {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/s\//,
                handler: 'StaleWhileRevalidate'
              }
            ]
          }
        }
      },
      {
        resolve: 'saber-plugin-search'
      },
      {
        resolve: 'saber-plugin-image'
      },
      {
        resolve: 'saber-plugin-code-copy',
        options: {
          buttonStyle: {
            border: 'none'
          }
        }
      }
    ],
    template: {
      openLinkInNewTab: true
    }
  }
  
  module.exports = config