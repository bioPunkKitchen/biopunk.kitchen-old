import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Instagram from '../components/social/Instagram';
import Facebook from '../components/social/Facebook';
import Github from '../components/social/Github';
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
        <Hero image={props.image} title={props.title} color={props.color} style="home"/>
        <p>{props.text}</p>
        { props.button && <Button label={props.link.label}/>}
        { props.link && <Link button={props.link.button} label={props.link.label} url={props.link.url}/>}
    </section>
    );
};



export default ({ data }) => {

    const { tagline, sections } = data.markdownRemark.frontmatter;

    return (
        <Layout type="home">
            <section className={styles.topSection}>
                <img src={Logo} />
                <p>{tagline}</p>
                <div className={styles.social}>
                    <a href="https://www.instagram.com/biopunx" target="_blank"><Instagram/></a>
                    <a href="https://www.facebook.com/biopunx" target="_blank"><Facebook/></a>
                    <a href="https://forum.wilap.de/c/kitchen" target="_blank"><Discourse/></a>
                    <a href="https://github.com/bioPunkKitchen" target="_blank"><Github/></a>
                </div>
                <Sticky/>
            </section>

            { sections.map(( section, index ) => (
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
        sections {
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
