const { schedule } = require('@netlify/functions')
const request = require('request-promise-native')

module.exports.handler = schedule('*/15 * * * *', async (event) => {
  console.log('Starting fetching instagram token')
  request
    .get('https://graph.instagram.com/refresh_access_token', {
      qs: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        grant_type: 'ig_refresh_token',
      },
      json: true,
    })
    .catch((error) => {
      console.error('Error fetching instagram token', error)
      return {
        statusCode: 500,
      }
    })
    .then((data) => {
      console.log(
        `Instagram token refreshed, new expiration ${data.expires_in}`,
      )
      return {
        statusCode: 200,
      }
    })
})
