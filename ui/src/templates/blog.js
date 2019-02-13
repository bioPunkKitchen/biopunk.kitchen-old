import React from 'react';

import styles from './blog.module.css';

export default ({ data }) => {

    return (
        <div className={styles.main}>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
        </div>
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
