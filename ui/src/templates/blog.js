import React from 'react';
import Layout from '../layouts/Layout';

import styles from './blog.module.css';

export default ({ data }) => {

    return (
        <Layout>
            <div>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const singleQuery = graphql`
  query singleQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
      html
    }
   }
`;
