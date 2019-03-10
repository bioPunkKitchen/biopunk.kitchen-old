import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Preview from '../components/Preview';
import styles from './projects.module.css';


export default ({ data }) => {

    const { title, image } = data.thisPage.frontmatter;
    const colorBand = 'orange';

    return (
        <Layout>
            <Hero image={image} title={title} color={colorBand}/>
            <div className={styles.page}>
                <Preview projects={data.equipment.edges} color={colorBand} />
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
            image
            summary
          }
        }
      }
    }
  }
`;
