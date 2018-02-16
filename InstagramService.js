const get = require('axios').get
const fs = require(`fs`)
const path = require('path')
require('dotenv').config()

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
            path.join('./aptigram.json'),
            JSON.stringify(images, null, 2),
        )
    } catch (ex) {
        console.log(ex)
    }
}

LoadRecent({ accessToken: process.env.INSTAGRAM_ACCESS_TOKEN, itemsCount: 12 })
