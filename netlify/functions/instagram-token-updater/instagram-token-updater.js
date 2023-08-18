const { schedule } = require('@netlify/functions')
const request = require('request-promise-native')

module.exports.handler = schedule('0 * * * *', async (event) => {
  request
    .get('https://graph.instagram.com/refresh_access_token', {
      qs: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        grant_type: 'ig_refresh_token',
      },
    })
    .catch((error) => {
      console.log(error.message)
      return {
        statusCode: 500,
      }
    })
    .then(() => {
      return {
        statusCode: 200,
      }
    })
})
