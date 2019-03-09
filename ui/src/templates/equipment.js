import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import styles from './post.module.css';


export default ({ data }) => {

    const { title, image } = data.thisPage.frontmatter;


    return (
        <Layout>
            <Hero image={image}/>
            <div className={styles.post}>
                <h1>{title}</h1>
                {
                    data.equipment.edges.map(( equipment, index ) => {
                        return (
                            <Link to={equipment.node.fields.slug}>
                                <article key={index}>
                                    <h1>{equipment.node.frontmatter.title}</h1>
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
        image
      }
    }
    equipment: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/equipment\//"}}) {
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
