const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/templates/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/404.js")))
}

