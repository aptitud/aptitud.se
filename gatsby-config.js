require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Aptitud.se`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kqhdnxbobtly`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
