/* eslint-disable @typescript-eslint/camelcase */

const path = require('path')

module.exports = {
  plugins: [
    {
      options: {
        minify: /production/.test(process.env.NODE_ENV),
        pure: /production/.test(process.env.NODE_ENV),
        transpileTemplateLiterals: /production/.test(process.env.NODE_ENV),
      },
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      options: {
        name: 'blog',
        path: path.resolve('content/blog'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'work',
        path: path.resolve('content/work'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'assets',
        path: path.resolve('content/assets'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        excerpt_separator: '<!-- end -->',
        plugins: [
          {
            options: {
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
            },
            resolve: 'gatsby-remark-images',
          },
          {
            options: {
              related: false,
            },
            resolve: 'gatsby-remark-embed-video',
          },
          'gatsby-remark-responsive-iframe',
          {
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.524 190.109l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109h-89.045l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L298.192 152h-111.24l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L138.192 152H44.86a12 12 0 0 0-11.813 9.891l-4.286 24C27.448 193.246 33.103 200 40.575 200h89.045l-20 112H16.289a12 12 0 0 0-11.813 9.891l-4.286 24C-1.123 353.246 4.532 360 12.003 360h89.045L82.139 465.891C80.826 473.246 86.481 480 93.953 480h24.38a12 12 0 0 0 11.813-9.891L149.808 360h111.24l-18.909 105.891c-1.313 7.355 4.342 14.109 11.813 14.109h24.38a12 12 0 0 0 11.813-9.891L309.808 360h93.331a12 12 0 0 0 11.813-9.891l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109H318.38l20-112h93.331a12 12 0 0 0 11.813-9.891zM269.62 312H158.38l20-112h111.24l-20 112z"/></svg>`,
              removeAccents: true,
            },
            resolve: 'gatsby-remark-autolink-headers',
          },
          'gatsby-remark-external-links',
          {
            options: {
              directory: path.resolve('content/examples'),
            },
            resolve: 'gatsby-remark-embed-snippet',
          },
          {
            options: {
              name: 'vendor-assets',
              path: path.resolve('vendor/assets'),
            },
            resolve: 'gatsby-source-filesystem',
          },
          {
            options: {
              excerpt_separator: '<!-- end -->',
              plugins: [
                {
                  options: {
                    linkImagesToOriginal: false,
                    showCaptions: true,
                    withWebp: true,
                  },
                  resolve: 'gatsby-remark-images',
                },
                {
                  options: {
                    related: false,
                  },
                  resolve: 'gatsby-remark-embed-video',
                },
                'gatsby-remark-responsive-iframe',
                {
                  options: {
                    icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'/></svg>`,
                    removeAccents: true,
                  },
                  resolve: 'gatsby-remark-autolink-headers',
                },
                'gatsby-remark-external-links',
                {
                  options: {
                    directory: path.resolve('content/examples'),
                  },
                  resolve: 'gatsby-remark-embed-snippet',
                },
                {
                  options: {
                    inlineCodeMarker: '›',
                  },
                  resolve: 'gatsby-remark-prismjs',
                },
                {
                  options: {
                    blocks: {
                      danger: {
                        classes: 'danger',
                        title: 'optional',
                      },
                      info: {
                        classes: 'info',
                        title: 'optional',
                      },
                      note: {
                        classes: 'note',
                        title: 'optional',
                      },
                      warning: {
                        classes: 'warning',
                        title: 'optional',
                      },
                    },
                  },
                  resolve: 'gatsby-remark-custom-blocks',
                },
                'gatsby-remark-emojis',
                'gatsby-remark-unwrap-images',
                {
                  options: {
                    dashes: 'oldschool',
                  },
                  resolve: 'gatsby-remark-smartypants',
                },
                'gatsby-remark-reading-time',
              ],
              tableOfContents: {
                maxDepth: 2,
              },
            },
            resolve: 'gatsby-remark-prismjs',
          },
          {
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                  title: 'optional',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                note: {
                  classes: 'note',
                  title: 'optional',
                },
                warning: {
                  classes: 'warning',
                  title: 'optional',
                },
              },
            },
            resolve: 'gatsby-remark-custom-blocks',
          },
          'gatsby-remark-emojis',
          'gatsby-remark-unwrap-images',
          {
            options: {
              dashes: 'oldschool',
            },
            resolve: 'gatsby-remark-smartypants',
          },
          'gatsby-remark-reading-time',
        ],
        tableOfContents: {
          maxDepth: 2,
        },
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      options: {
        env: {
          development: {
            policy: [{ disallow: '/', userAgent: '*' }],
          },
          production: {
            policy: [{ allow: '/', userAgent: '*' }],
          },
        },
      },
      resolve: 'gatsby-plugin-robots-txt',
    },
    {
      options: {
        color: 'hsl(332, 40%, 44%)',
        easing: 'ease-out',
      },
      resolve: 'gatsby-plugin-nprogress',
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      options: {
        background_color: '#7e57c2',
        display: 'standalone',
        icon: './content/assets/images/avatar.jpg',
        name: 'daniel.sh',
        scope: '/',
        short_name: 'daniel.sh',
        start_url: '/',
        theme_color: '#b39ddb',
      },
      resolve: 'gatsby-plugin-manifest',
    },
  ],
  siteMetadata: {
    author: 'Daniel Shannon',
    description: 'Personal blog and portfolio for Daniel Shannon, software engineer and essayist.', // FIXME: Boring.
    keywords: [
      'engineer',
      'full stack engineer',
      'software architecture',
      'software developer',
      'web developer',
    ],
    siteUrl: 'https://daniel.sh',
    social: {
      twitter: 'phyllisstein',
    },
    title: 'Daniel Shannon—Engineer, Essayist, Esthete',
  },
}
