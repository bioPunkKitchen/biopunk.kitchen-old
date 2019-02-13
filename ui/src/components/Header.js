import React from 'react';
import { Link } from 'gatsby';
import NavMain from './NavMain';
import Hamburger from './Hamburger';
import styles from './header.module.css';


export const Header = () => (
    <header className={styles.header}>
        <Link to={'/'}> SiteName </Link>
        <NavMain/>
        <Hamburger/>
    </header>
);
