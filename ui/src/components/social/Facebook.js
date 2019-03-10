import React from 'react';
import styles from './social.module.css';

const Facebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.facebook}>
      <defs >
          <linearGradient id="fbGradient" x2="0.6667" y1="0.2667" x1="0.4167" y2="0.75">
              <stop stopColor="#ff00cc"  offset="0"/>
              <stop stopColor="#00ccff"  offset="1"/>
          </linearGradient>
      </defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="url(#fbGradient)" id="Footer,-Hover" transform="translate(-1278.000000, -89.000000)" >{/* original fill color: #214cbd*/}
                <path d="M1278.66667,89 C1278.29778,89 1278,89.2977778 1278,89.6666667 L1278,104.333333 C1278,104.702222 1278.29778,105 1278.66667,105 L1286.5,105 L1286.5,99 L1284.5,99 L1284.5,96.5 L1286.5,96.5 L1286.5,94.5 C1286.5,92.4333333 1287.80889,91.4155556 1289.65111,91.4155556 C1290.53556,91.4155556 1291.29333,91.4822222 1291.51556,91.5111111 L1291.51556,93.6711111 L1290.23556,93.6711111 C1289.23333,93.6711111 1289,94.1488889 1289,94.8466667 L1289,96.5 L1291.5,96.5 L1291,99 L1289,99 L1289.04,105 L1293.33333,105 C1293.70222,105 1294,104.702222 1294,104.333333 L1294,89.6666667 C1294,89.2977778 1293.70222,89 1293.33333,89 L1278.66667,89 Z" id="facebook"></path>
            </g>
        </g>
    </svg>
);

export default Facebook;
