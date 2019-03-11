import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import styles from './post.module.css';

export default ({ data }) => {

    const { title, image } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <Hero image={image}/>
            <div className={styles.post}>
                <h1>{title}</h1>
                <img src={image}/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        image
      }
      html
    }
   }
`;
