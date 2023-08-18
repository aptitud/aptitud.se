const { schedule } = require('@netlify/functions')
const request = require('request-promise-native')

module.exports.handler = function (event, context) {
  console.log('Starting fetching instagram token')
  request
    .get('https://graph.instagram.com/refresh_access_token', {
      qs: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        grant_type: 'ig_refresh_token',
      },
    })
    .catch((error) => {
      console.error('Error fetching instagram token', error)
      return {
        statusCode: 500,
      }
    })
    .then((res) => {
      console.log({ res })
      return {
        statusCode: 200,
      }
    })
}
