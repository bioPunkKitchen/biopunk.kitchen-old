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



const Link = ( props ) => {
    return (
        props.button ? <Button label={props.label} url={props.url}/> : <a href={props.url}>{props.label}</a>
    );
};



const Section = ( props ) => {
    return ( <section className={styles.section} key={props.index}>
        <Hero image={props.image} title={props.title} color={props.color}/>
        <p>{props.text}</p>
        { props.button && <Button label={props.link.label}/>}
        { props.link && <Link button={props.link.button} label={props.link.label} url={props.link.url}/>}
    </section>
    );
};



export default ({ data }) => {

    const { tagline, image, sectionList } = data.markdownRemark.frontmatter;
    console.log( sectionList );

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

            { sectionList.map(( section, index ) => (
                <Section
                    index={index}
                    title={section.title}
                    color={section.color}
                    image={section.image}
                    text={section.text}
                    link={section.link}/>
            ))}

        </Layout>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        tagline
        sectionList {
          title
          image
          text
          link {
            label
            url
            button
          }
          color
        }
      }
      html
    }
   }
`;
