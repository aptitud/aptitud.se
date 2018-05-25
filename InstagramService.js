const get = require('axios').get
const fs = require(`fs`)
const path = require('path')
require('dotenv').config()

// this module will download information about the 12 lasts posts from instagram and save that to a file '/aptigram/instagram.json'
// gatsby will pick that up via the file-system source plugin and the json transformer and thus make it available for us to query for
// allInstagramJson which is the contents of the json file, e.g. an array of posts from instagram

const LoadRecent = async ({ accessToken, itemsCount }) => {
  try {
    const response = await get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}&count=${itemsCount}`,
    )

    const { data } = response.data

    const images = data.map(item => ({
      url: item.images.low_resolution.url,
      caption: item.caption && item.caption.text && item.caption.text,
      location: item.location && item.location.name,
      id: item.id,
    }))

    fs.writeFileSync(
      path.join('./aptigram', 'instagram.json'),
      JSON.stringify(images, null, 2),
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

fs.mkdirSync('./aptigram')
const token = process.env.INSTAGRAM_ACCESS_TOKEN

if (token) {
  LoadRecent({ accessToken: token, itemsCount: process.env.APTIGRAM_IMAGES || 12 })
} else {
  console.log(
    `
    You didn't supply an Instagram access token
    add INSTAGRAM_ACCESS_TOKEN='token' to ./.env or add it to process.env
        `,
  )
  process.exit(1)
}
