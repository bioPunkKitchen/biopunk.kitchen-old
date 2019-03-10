import React from 'react';
import { Link } from 'gatsby';
import Hero from './Hero';
import styles from './preview.module.css';

const Preview = ( props ) => (
    <div className={styles.preview}>
        {

            props.projects.map(( project, index ) =>
                <article key={index}>
                    <Hero image={project.node.frontmatter.image} title={project.node.frontmatter.title} color={props.color} />
                    <div style={{ backgroundImage: `url(${project.node.frontmatter.image})` }}></div>
                    <div></div>
                    <p>{project.node.frontmatter.summary}</p>
                    <Link to={project.node.fields.slug} > ... more </Link>
                </article> )}

    </div>
);

export default Preview;
