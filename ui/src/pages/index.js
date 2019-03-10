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
import Discourse from '../components/social/Discourse';
import Github from '../components/social/Github';
import Meetup from '../components/social/Meetup';
import Logo from '../../static/media/biopunkkitchen-noBg-centered.svg';
import MeetupLarge from '../../static/media/Meetup_Large_white.svg';
import styles from './index.module.css';


export default ({ data }) => {

    const { tagline, image } = data.markdownRemark.frontmatter;

    return (
        <Layout type="home">
            <section className={styles.topSection}>
                <img src={Logo} />
                <p>{tagline}</p>
                <div className={styles.social}>
                    <Instagram/>
                    <Facebook/>
                    <Discourse/>
                </div>
                <a href="https://www.meetup.com/BiopunX" target="_blank" className={styles.sticky}><img src={MeetupLarge}/></a>

            </section>
            <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
            </section>
            <section>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </section>
        </Layout>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        tagline
        image
      }
      html
    }
   }
`;
