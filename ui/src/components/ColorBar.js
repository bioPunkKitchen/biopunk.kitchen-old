import React from 'react';
import { Link } from 'gatsby';
import Map from '../../static/media/map.png';
import styles from './colorBar.module.css';

const colors = {
    blue: '#00ccff',
    darkBlue: '#0055d4',
    orange: '#ff6600',
    pink: '#ff00cc'
};

const ColorBar = ( props ) => (
    <div className={styles.colorBar} style={{ backgroundColor: `${colors[ props.color ]}` }} >
    </div>
);

export default ColorBar;
