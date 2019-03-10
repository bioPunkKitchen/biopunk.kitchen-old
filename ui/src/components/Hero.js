import React from 'react';
import styles from './hero.module.css';

const Hero = ( props ) => (
    <div>
        <div className={styles.hero} style={{ backgroundImage: `url(${props.image})` }}>
            {props.title && <h1>{props.title} </h1>}
        </div>
        <div></div>
    </div>
);

export default Hero;
