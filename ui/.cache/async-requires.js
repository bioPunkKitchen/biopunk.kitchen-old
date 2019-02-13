// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("/home/jenn/coding/jenns-gatsby-starter/ui/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-pages-index-js": () => import("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---cache-dev-404-page-js": () => import("/home/jenn/coding/jenns-gatsby-starter/ui/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/jenn/coding/jenns-gatsby-starter/ui/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/jenn/coding/jenns-gatsby-starter/ui/.cache/data.json")

