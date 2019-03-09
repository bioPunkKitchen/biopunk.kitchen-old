import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import styles from './post.module.css';


export default ({ data }) => {

    return (
        <Layout>
            <div className={styles.post}>
                <h1>{data.thisPage.frontmatter.title}</h1>
                {
                    data.projects.edges.map(( project, index ) => {
                        return (
                            <Link to={project.node.fields.slug}>
                                <article key={index}>
                                    <h1>{project.node.frontmatter.title}</h1>
                                </article>
                            </Link>
                        );
                    })
                }
            </div>
        </Layout>
    );

};

export const projectsQuery = graphql`
  query ($path: String!) {
    thisPage: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
    }
    projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/projects\//"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
