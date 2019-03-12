import React from 'react';
import ColorBar from './ColorBar';
import styles from './hero.module.css';

const Hero = ( props ) => {

    const imageStyle = props.style == 'home' ? styles.homeHeroImage :
        props.style === 'preview' ? styles.previewHeroImage :
            styles.pageHeroImage;
    const titleStyle = props.style == 'home' ? styles.homeHeroTitle :
        props.style === 'preview' ? styles.previewHeroTitle :
            styles.pageHeroTitle;

    return (
        <div className={styles.hero}>
            <div className={imageStyle} style={{ backgroundImage: `url(${props.image})` }}>
                {props.title && <h1 className={titleStyle} >{props.title} </h1>}
            </div>
            <ColorBar color={props.color}/>
        </div>
    );
};

export default Hero;
