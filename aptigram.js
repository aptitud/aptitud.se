const fs = require('fs')
const request = require('request-promise-native')
require('dotenv').config()

request
  .get('https://api.instagram.com/v1/users/self/media/recent', {
    qs: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN, count: 24 },
    json: true
  })
  .then(({ data }) =>
    Promise.all(
      data.map(async ({ images, caption, location }) => ({
        url: await request(images.low_resolution.url, { encoding: null }).then(img => {
          const [, filename] = /(?:.*\/)(.*)\?/.exec(images.low_resolution.url)
          fs.writeFileSync(`./public/aptigram/${filename}`, img)
          return `./aptigram/${filename}`
        }),
        caption: caption && caption.text,
        location: location && location.name
      }))
    )
  )
  .then(json => {
    fs.writeFileSync('src/aptigram.json', JSON.stringify(json, null, 2))
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
