import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import styles from './index.module.css';


export default ({ data }) => {

    const { logo, subline, image } = data.markdownRemark.frontmatter;

    return (
        <Layout type="home">
            <section className={styles.topSection}>
                <img src={logo} />
                <p>{subline}</p>
            </section>
            <Hero image={image}/>
        </Layout>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        logo
        subline
        image
      }
      html
    }
   }
`;
