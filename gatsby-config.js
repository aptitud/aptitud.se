require('dotenv').config()
const path = require(`path`)

module.exports = {
    siteMetadata: {
        title: 'Aptitud.se',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'kqhdnxbobtly',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `aptigram`,
                path: path.join(__dirname, `aptigram`),
            },
        },
        'gatsby-transformer-json',
    ],
}
