const { schedule } = require('@netlify/functions')
const request = require('request-promise-native')

const handler = async function (event, context) {
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
}

exports.handler = schedule('*/10 * * * *', handler)
