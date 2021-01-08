const fs = require('fs')
const request = require('request-promise-native')
require('dotenv').config()

request
  .get('https://graph.instagram.com/me/media', {
    qs: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, fields: 'id,caption,media_url,thumbnail_url,permalink,timestamp', limit: process.env.APTIGRAM_IMAGES_LIMIT },
    json: true
  })
  .then(({ data }) =>
    Promise.all(
      data.map(async ({ media_url, thumbnail_url, caption='', permalink, timestamp }) => {
        const imageUrl = thumbnail_url ?? media_url;
        return {
          url: await request(imageUrl, { encoding: null }).then(img => {
            const [, filename] = /(?:.*\/)(.*)\?/.exec(imageUrl)
            fs.writeFileSync(`./public/aptigram/${filename}`, img)
            return `./aptigram/${filename}`
          }),
          caption,
          permalink,
          date: new Date(timestamp).toISOString().slice(0,10)
        };
      })
    )
  )
  .then(json => {
    fs.writeFileSync('src/aptigram.json', JSON.stringify(json, null, 2))
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })

  request.get('https://graph.instagram.com/refresh_access_token', {
    qs: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, grant_type: 'ig_refresh_token' }
  }).catch(error => {
    console.log(error.message)
  })

  