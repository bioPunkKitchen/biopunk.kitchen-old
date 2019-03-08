import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import styles from './index.module.css';


export default ({ data }) => {

    const { logo, subline } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className={styles.topSection}>
                <img src={logo} />
                <p>{subline}</p>
            </div>
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
      }
      html
    }
   }
`;
