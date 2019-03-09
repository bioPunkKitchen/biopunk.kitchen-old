import React from 'react';
import { Link } from 'gatsby';
import Hamburger from './Hamburger';
import Punk from '../../static/media/punk.svg';
import styles from './header.module.css';


export const Header = ( props ) => {

    const style = props.background ? styles.homeHeader : styles.header;
    console.log( ' header props', props );

    return (
        <header className={style}>
            <Link to={'/'}> <img src={Punk} className={styles.logo}/> </Link>
            <Hamburger/>
        </header>
    );
};
