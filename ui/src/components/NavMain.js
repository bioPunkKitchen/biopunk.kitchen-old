import React from 'react';
import { Link } from 'gatsby';
import styles from './navMain.module.css';

const NavMain = ( props ) => {

    const toggle = props.closeOverlay || undefined;
    const style = props.style === undefined ? styles.navMain : props.style;

    return (
        <nav className={styles.navMain}>
            <ul>
                <Link to={'/equipment'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Equipment
                </Link>
                <Link to={'/projects'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              Projects
                </Link>
                <Link to={'/about'} className={styles.link} activeClassName={styles.active} onClick={toggle}>
              About
                </Link>
            </ul>
        </nav>
    );
};
export default NavMain;
