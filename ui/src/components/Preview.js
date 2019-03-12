import React from 'react';
import { Link } from 'gatsby';
import Hero from './Hero';
import styles from './preview.module.css';

const Preview = ( props ) => (
    <div className={styles.preview}>
        {

            props.projects.map(( project, index ) =>
                <article key={index}>
                    <Link to={project.node.fields.slug}>
                        <Hero image={project.node.frontmatter.image} title={project.node.frontmatter.title} color={props.color} style="preview"/>
                    </Link>
                    <div></div>
                    <p>{project.node.frontmatter.summary}</p>
                    <Link to={project.node.fields.slug} > ... more </Link>
                </article> )}

    </div>
);

export default Preview;
