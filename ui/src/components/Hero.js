import React from 'react';
import styles from './hero.module.css';

const Hero = ( props ) => (
    <div className={styles.hero} style={{ backgroundImage: `url(${props.image})` }}></div>
);

export default Hero;
