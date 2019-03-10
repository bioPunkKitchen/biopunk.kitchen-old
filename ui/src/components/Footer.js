import React from 'react';
import { Link } from 'gatsby';
import Map from '../../static/media/map.png';
import styles from './footer.module.css';

const Footer = () => (
    <div className={styles.footer}>
        <a href="https://www.openstreetmap.de/karte.html?zoom=15&lat=52.38885&lon=13.07688&layers=B000" target="_black" style={{ backgroundImage: `url(${Map})` }}></a>
        <div>
            <Link to={'/legal'} > Imprint & Privacy </Link>
        </div>
    </div>
);

export default Footer;
