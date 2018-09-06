import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavMain from './NavMain';
import Hamburger from './Hamburger';
import styles from './header.module.css';


export const Header = ( props ) => (
    <header className={styles.header}>
      <Link to={'/'}> SiteName </Link>
      <NavMain/>
      <Hamburger/>
    </header>
);
