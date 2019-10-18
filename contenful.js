const fs = require('fs')
const request = require('request-promise-native')
require('dotenv').config()

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
      return { ...p, [type]: [...(p[type] || []), entry] }
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

function resolveObject(obj, everything) {
  if (obj.sys.linkType === 'Asset') {
    return everything.includes.Asset.find(y => y.sys.id === obj.sys.id).fields
  }
  if (obj.sys.linkType === 'Entry') {
    return everything.items.find(y => y.sys.id === obj.sys.id).fields
  }
  return obj
}
