import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';

import styles from './blog.module.css';

export default ({ data }) => {

    return (
        <Layout>
            <div>
                <h1>{data.thisPage.frontmatter.title}</h1>
                {
                    data.posts.edges.map(( post, index ) => {
                        return (
                            <Link to={post.node.fields.slug}>
                                <article key={index}>
                                    <h1>{post.node.frontmatter.title}</h1>
                                    <p>{post.node.frontmatter.excerpt}</p>
                                </article>
                            </Link>
                        );
                    })
                }
            </div>
        </Layout>
    );

};


export const blogQuery = graphql`
  query ($path: String!) {
    thisPage: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
    }
    posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/blog\//"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`;
