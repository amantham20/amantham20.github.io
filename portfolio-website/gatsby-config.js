/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aman Dhruva Thamminana Portfolio`,
    siteUrl: `https://amantham.com/`,
    description: `Student by day, Developer by night.`,
    type: `website`,
    // image: 'https://www.amantham.com/static/media/Aman%20Logo.6515b02fc765e7a376f9.png'
    image: './src/favicon.svg'

  },
  plugins: ["gatsby-plugin-postcss", `gatsby-plugin-anchor-links`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      // other options...
      icon: `src/favicon.svg`, // path to your favicon.svg file
    },
  }

  ],

};