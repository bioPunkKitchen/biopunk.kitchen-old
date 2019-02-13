// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/index.js")),
  "component---src-templates-blog-js": preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/templates/blog.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/layout-index.json"),
  "index.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/index.json"),
  "blog.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/blog.json"),
  "dev-404-page.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/dev-404-page.json"),
  "404.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/404.json"),
  "404-html.json": require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/json/404-html.json")
}