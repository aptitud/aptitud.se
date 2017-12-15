// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/mikaelahlinder/Code/aptitud.se/src/pages/index.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/mikaelahlinder/Code/aptitud.se/src/pages/404.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/mikaelahlinder/Code/aptitud.se/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/index.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/404.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/page-2.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/layout-index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/mikaelahlinder/Code/aptitud.se/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/mikaelahlinder/Code/aptitud.se/.cache/layouts/index.js")
}