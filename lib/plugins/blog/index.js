const path = require('path')
const format = require('date-fns/format')

module.exports = ({
                    postsDir = '_posts',
                    postsLayout = 'Post',
                    lang,
                    base,
                  }) => {
  const permalink = base + '/posts/:year/:month/:day/:slug.html'
  const ensureBothSlash = str => str.replace(/^\/?(.*)\/?$/, '/$1/')

  return {
    name: '@theme-meteorlxy/vuepress-plugin-blog',

    plugins: [
      [require('../blog-vuepress'), {
        categoryIndexPageUrl: base + '/posts/categories/',
        tagIndexPageUrl: base + '/posts/tags/',
        postsDir,
        lang,
      }],
    ],

    extendPageData ($page) {
      // Test the page if is a post according to the postsDir
      if ($page.path.startsWith(ensureBothSlash(postsDir))) {
        // Set the meta data of the page
        $page.frontmatter.layout = $page.frontmatter.layout || postsLayout
        $page.frontmatter.permalink = $page.frontmatter.permalink || permalink
        $page.type = 'post'
        $page.top = $page.frontmatter.top || false
        $page.tags = $page.frontmatter.tags || []
        $page.category = $page.frontmatter.category
        $page.createdAt = $page.frontmatter.date ? format($page.frontmatter.date, 'YYYY-MM-DD') : null
        $page.updatedAt = $page.lastUpdated ? format($page.lastUpdated, 'YYYY-MM-DD') : null
      }
    },

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
  }
}
