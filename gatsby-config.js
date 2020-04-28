module.exports = {
  siteMetadata: {
    title: 'Fyli - Find your tribe, tell your story.',
    description: `Fyli is a free end-to-end platform for influencers, artists and content creators for
            selling their products and merch online. All you have to do is BE AWESOME. Leave the
            rest to us.`,
    siteUrl: 'https://www.fyli.me',
    twitter: '@abhishekbisht97',
    icon: 'assets/logo/favicon.ico'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `mockups`, path: `./assets/mockups/` }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
