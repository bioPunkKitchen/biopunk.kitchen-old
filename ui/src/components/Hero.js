import React from 'react';
import ColorBar from './ColorBar';
import styles from './hero.module.css';

const Hero = ( props ) => (
    <div>
        <div className={styles.hero} style={{ backgroundImage: `url(${props.image})` }}>
            {props.title && <h1>{props.title} </h1>}
        </div>
        <ColorBar color={props.color}/>
    </div>
);

export default Hero;
