import React from 'react';
import Layout from '../layouts/Layout';
import styles from './index.module.css';

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

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
   }
`;
