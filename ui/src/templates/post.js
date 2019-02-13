import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';

import styles from './post.module.css';

export default ({ data }) => {

    return (
        <Layout>
            <div className={styles.post}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <img src={data.markdownRemark.frontmatter.image}/>
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
