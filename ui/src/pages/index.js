import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Instagram from '../components/social/Instagram';
import Facebook from '../components/social/Facebook';
import Discourse from '../components/social/Discourse';
import Logo from '../../static/media/biopunkkitchen-noBg-centered.svg';
import Hero from '../components/Hero';
import Sticky from '../components/Sticky';
import Button from '../components/Button';
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
                <Sticky/>
            </section>

            <section className={styles.section}>
                <Hero image={image} title="kitchen" color='pink'/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
                <Button label="Donate"/>
            </section>

            <section className={styles.section}>
                <Hero image="/media/microscopes.jpg" title="equipment" color='blue'/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
                <a > All our equipment </a>
            </section>

            <section className={styles.section}>
                <Hero image="/media/kitchen.jpg" title="Projects" color='orange'/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
                <a > All projects </a>
            </section>

            <section className={styles.section}>
                <Hero image="/media/openingtalk.jpg" title="Community" color='darkBlue'/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
                <Button label="Newsletter"/>
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
