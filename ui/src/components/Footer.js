import React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.css';

const Footer = () => (
    <div className={styles.footer}>
        <Link to={'/legal'} > Imprint & Privacy </Link>
    </div>
);

export default Footer;
