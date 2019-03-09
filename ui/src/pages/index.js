import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Logo from '../../static/media/biopunkkitchen-noBg-centered.svg';
import styles from './index.module.css';


export default ({ data }) => {

    const { logo, subline, image } = data.markdownRemark.frontmatter;

    return (
        <Layout type="home">
            <section className={styles.topSection}>
                <img src={Logo} />
                <p>{subline}</p>
            </section>
            <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
            </section>
        </Layout>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        subline
        image
      }
      html
    }
   }
`;
