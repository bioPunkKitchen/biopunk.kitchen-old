const path = require( 'path' );
const { createFilePath } = require( 'gatsby-source-filesystem' );

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if ( node.internal.type === 'MarkdownRemark' ) {
        const slug = createFilePath({ node, getNode, trailingSlash: false });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    return graphql( `
    {
      allMarkdownRemark  {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  ` ).then( result => {
        if ( result.errors ) {
            result.errors.forEach( e => console.error( e.toString()));
            return Promise.reject( result.errors );
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {

            const slug = node.fields.slug;

            createPage({
                path: slug,
                slug: slug,
                component: node.frontmatter.templateKey ? path.resolve( `src/templates/${String( node.frontmatter.templateKey )}.js` ) : path.resolve( 'src/pages/index.js' ),
                context: {
                    slug: slug
                }
            });
        });
    });
};
