// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/mikaelahlinder/Code/aptitud.se/src/pages/index.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mikaelahlinder/Code/aptitud.se/src/pages/404.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/mikaelahlinder/Code/aptitud.se/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "index.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/index.json"),
  "layout-index.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "404.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/404.json"),
  "layout-index.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/mikaelahlinder/Code/aptitud.se/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("/Users/mikaelahlinder/Code/aptitud.se/.cache/layouts/index.js"))
}