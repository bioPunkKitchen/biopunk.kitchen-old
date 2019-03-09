import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Instagram from '../components/social/Instagram';
import Facebook from '../components/social/Facebook';
import Email from '../components/social/Email';
import Mailchimp from '../components/social/Mailchimp';
import Telegram from '../components/social/Telegram';
import Twitter from '../components/social/Twitter';
import Youtube from '../components/social/Youtube';
import Logo from '../../static/media/biopunkkitchen-noBg-centered.svg';
import styles from './index.module.css';


export default ({ data }) => {

    const { subline, image } = data.markdownRemark.frontmatter;

    return (
        <Layout type="home">
            <section className={styles.topSection}>
                <img src={Logo} />
                <p>{subline}</p>
                <div className={styles.social}>
                    <Instagram/>
                    <Email/>
                    <Facebook/>
                    <Telegram/>
                    <Mailchimp/>
                    <Twitter/>
                    <Youtube/>
                </div>

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
