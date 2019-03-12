import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import styles from './post.module.css';

export default ({ data }) => {

    const { title, image } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <Hero image={image} color="pink" title={title} />
            <div className={styles.post}>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        image
      }
      html
    }
   }
`;
