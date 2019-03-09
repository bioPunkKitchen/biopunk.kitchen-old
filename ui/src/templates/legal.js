import React from 'react';
import Layout from '../layouts/Layout';
import styles from './legal.module.css';


export default ({ data }) => (
    <Layout>
        <div className={styles.legal}>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
        </div>
    </Layout>
);

export const legalQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
   }
`;
