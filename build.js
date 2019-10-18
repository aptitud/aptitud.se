const fs = require('fs')

if (!process.env.NETLIFY) {
  return
}

const app = require('./public/bundle.js').render()
let index = fs.readFileSync('./public/index.html').toString('utf-8')
index = index.replace('<head>', `<head>${app.head}`)
index = index.replace("<link rel='stylesheet' href='/bundle.css'>", `<style>${app.css.code}</style>`)
index = index.replace("<script defer src='/bundle.js'></script>", ``)
index = index.replace('<body></body>', `<body>${app.html}</body>`)
fs.writeFileSync('./public/index.html', index)
