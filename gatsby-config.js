module.exports = {
  siteMetadata: {
    title: 'Fyli - Find your tribe, tell your story.',
    description: 'Fyli is a free end-to-end platform for selling your products and merch online.',
    siteUrl: 'https://www.fyli.me',
    twitter: '@abhishekbisht97',
    icon: 'assets/logo/icon.png'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-160780389-1',
        head: true,
        pageTransitionDelay: 0
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
              lastmod: Date(),
              priority: 0.9,
              changefreq: `daily`
            };
          })
      }
    },
    `gatsby-plugin-robots-txt`
  ]
};
