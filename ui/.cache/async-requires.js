// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/src/pages/index.js"),
  "component---src-templates-blog-js": require("gatsby-module-loader?name=component---src-templates-blog-js!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/src/templates/blog.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/src/pages/404.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/index.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/blog.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/404.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/jenn/n3xtcoder/jenns-gatsby-starter/ui/.cache/layouts/index.js")
}