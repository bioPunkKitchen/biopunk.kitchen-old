import React from 'react';
import styles from './social.module.css';

const Github = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className={styles.github}>
      <defs >
        <linearGradient id="ghGradient" x2="0.6667" y1="0.2667" x1="0.4167" y2="0.75">
          <stop stopColor="#ff00cc"  offset="0"/>
          <stop stopColor="#00ccff"  offset="1"/>
        </linearGradient>
      </defs>
      <g fill="url(#ghGradient)" id="Footer,-Hover" >
        <path id="path4" d="m8 0c-4.42 0-8 3.58-8 8 0 3.5 2.29 6.5 5.47 7.6 0.4 0.1 0.55-0.2 0.55-0.4s-0.01-0.8-0.01-1.5c-2.01 0.4-2.53-0.5-2.69-0.9-0.09-0.2-0.48-1-0.82-1.2-0.28-0.1-0.68-0.5-0.01-0.5 0.63 0 1.08 0.6 1.23 0.8 0.72 1.3 1.87 0.9 2.33 0.7 0.07-0.5 0.28-0.9 0.51-1.1-1.78-0.2-3.64-0.9-3.64-3.92 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27s1.36 0.09 1.98 0.27c1.6-1.04 2.2-0.82 2.2-0.82 0.5 1.1 0.2 1.92 0.1 2.12 0.5 0.56 0.8 1.27 0.8 2.15 0 3.02-1.9 3.72-3.63 3.92 0.29 0.3 0.53 0.8 0.53 1.5v2.2c0 0.2 0.2 0.5 0.6 0.4 3.1-1.1 5.4-4.1 5.4-7.6 0-4.42-3.6-8-8-8z" transform="scale(64)"/>
      </g>
    </svg>
);

export default Github;
