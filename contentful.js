const fs = require('fs')
const marked = require('marked')
const request = require('request-promise-native')
require('dotenv').config()

marked.setOptions({
  gfm: true,
  breaks: true
})

const markdownFields = {
  page: ['content'],
  fellow: ['description'],
  contact: ['postalAddress', 'visitingAddress']
}

const imageQueryString = {
  'image/jpeg': '?fm=jpg&fl=progressive&q=80',
  'image/png': '?fm=png&fl=png8'
}

request
  .get('https://cdn.contentful.com/spaces/kqhdnxbobtly/environments/master/entries', {
    qs: { access_token: process.env.CONTENTFUL_ACCESS_TOKEN, limit: 1000, include: 2 },
    json: true
  })
  .then(json => {
    const resolveEntry = value => resolveObject(value, json)
    return json.items.reduce((p, item) => {
      const type = item.sys.contentType.sys.id
      if (type === 'service') {
        return p
      }
      const entry = flattenEntry(item, resolveEntry)
      const transformed = transformMarkdown(entry, type)
      return { ...p, [type]: [...(p[type] || []), transformed] }
    }, {})
  })
  .then(json => fs.writeFileSync('./src/ctf.json', JSON.stringify(json, null, 2)))
  .catch(error => {
    console.log(error)
    process.exit(1)
  })

function flattenEntry(item, resolveObject) {
  return Object.entries(item.fields).reduce((p, [key, value]) => {
    if (Array.isArray(value)) {
      const resolved = value.map(resolveObject)
      return { ...p, [key]: resolved }
    }
    if (value.sys) {
      return { ...p, [key]: resolveObject(value) }
    }
    return { ...p, [key]: value }
  }, {})
}

function transformMarkdown(entry, type) {
  const markdownSpec = markdownFields[type] || []
  return Object.entries(entry).reduce((p, [key, value]) => {
    const isMarkdown = markdownSpec.includes(key)
    const transformed = isMarkdown ? marked(value) : value
    return { ...p, [key]: transformed }
  }, {})
}

function resolveObject(obj, everything) {
  if (obj.sys.linkType === 'Asset') {
    const asset = everything.includes.Asset.find(y => y.sys.id === obj.sys.id).fields

    if (asset.file) {
      const qs = imageQueryString[asset.file.contentType]
      return { ...asset, file: { ...asset.file, url: asset.file.url + qs } }
    }

    return asset
  }
  if (obj.sys.linkType === 'Entry') {
    return everything.items.find(y => y.sys.id === obj.sys.id).fields
  }
  return obj
}
