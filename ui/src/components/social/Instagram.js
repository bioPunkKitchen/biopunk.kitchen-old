import React from 'react';
import styles from './social.module.css';

const Instagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.07 130.02" className={styles.instagram}>
        {/* ORIGINAL GRADIENT
        <defs id="defs4">
            <radialGradient id="c" gradientUnits="userSpaceOnUse" cy="578" cx="158" gradientTransform="matrix(0 -1.98 1.84 0 -1.03e3 454)" r="65">
                <stop id="stop14" stop-color="#fd5" offset="0"/>
                <stop id="stop16" stop-color="#fd5" offset=".1"/>
                <stop id="stop18" stop-color="#ff543e" offset=".5"/>
                <stop id="stop20" stop-color="#c837ab" offset="1"/>
            </radialGradient>
            <radialGradient id="d" gradientUnits="userSpaceOnUse" cy="473" cx="148" gradientTransform="matrix(.174 .869 -3.58 .717 1.65e3 -458)" r="65">
                <stop id="stop7" stop-color="#3771c8" offset="0"/>
                <stop id="stop9" stop-color="#3771c8" offset=".128"/>
                <stop id="stop11" stop-color="#60f" stop-opacity="0" offset="1"/>
            </radialGradient>
        </defs>
        */}
        <defs >
            <linearGradient id="instaGradient" x2="0.6667" y1="0.2667" x1="0.4167" y2="0.75">
                <stop stopColor="#ff00cc"  offset="0"/>
                <stop stopColor="#00ccff"  offset="1"/>
            </linearGradient>
        </defs>
        <path id="path24" transform="translate(1 1)" d="m65 0c-27.1 0-35 0.028-36.6 0.156-5.57 0.463-9.04 1.34-12.8 3.22-2.91 1.44-5.2 3.12-7.47 5.47-4.1 4.25-6.6 9.55-7.5 15.8-0.44 3.04-0.568 3.66-0.594 19.2-0.01 5.18 0 12 0 21.1 0 27.1 0.03 35 0.16 36.6 0.45 5.42 1.3 8.83 3.1 12.6 3.44 7.14 10 12.5 17.8 14.5 2.68 0.69 5.64 1.07 9.44 1.25 1.61 0.07 18 0.12 34.4 0.12s32.8-0.02 34.4-0.1c4.4-0.207 6.96-0.55 9.78-1.28 7.79-2.01 14.2-7.29 17.8-14.5 1.76-3.64 2.66-7.18 3.06-12.3 0.088-1.12 0.125-19 0.125-36.8s-0.04-35.7-0.128-36.8c-0.41-5.22-1.3-8.73-3.13-12.4-1.5-3.04-3.16-5.3-5.56-7.62-4-4.2-9-6.7-16-7.6-3-0.443-3-0.573-18.8-0.6h-21.2z" fill="url(#instaGraient)"/>{/*original fill url(#c)*/}
        <path id="path26" transform="translate(1 1)" d="m65 0c-27.1 0-35 0.028-36.6 0.156-5.57 0.463-9.04 1.34-12.8 3.22-2.91 1.44-5.2 3.12-7.47 5.47-4.1 4.25-6.6 9.55-7.5 15.8-0.44 3.04-0.568 3.66-0.594 19.2-0.01 5.18 0 12 0 21.1 0 27.1 0.03 35 0.16 36.6 0.45 5.42 1.3 8.83 3.1 12.6 3.44 7.14 10 12.5 17.8 14.5 2.68 0.69 5.64 1.07 9.44 1.25 1.61 0.07 18 0.12 34.4 0.12s32.8-0.02 34.4-0.1c4.4-0.207 6.96-0.55 9.78-1.28 7.79-2.01 14.2-7.29 17.8-14.5 1.76-3.64 2.66-7.18 3.06-12.3 0.088-1.12 0.125-19 0.125-36.8s-0.04-35.7-0.128-36.8c-0.41-5.22-1.3-8.73-3.13-12.4-1.5-3.04-3.16-5.3-5.56-7.62-4-4.2-9-6.7-16-7.6-3-0.443-3-0.573-18.8-0.6h-21.2z" fill="url(#instaGradient)"/>{/*original fill url(#d)*/}
        <path id="path28" d="m66 18c-13 0-14.7 0.057-19.8 0.29-5.11 0.234-8.6 1.04-11.6 2.23-3.16 1.23-5.84 2.87-8.5 5.54-2.67 2.67-4.31 5.35-5.54 8.5-1.19 3.05-2 6.54-2.23 11.6-0.3 5.1-0.4 6.8-0.4 19.8s0.058 14.7 0.29 19.8c0.235 5.11 1.04 8.6 2.23 11.6 1.23 3.16 2.87 5.84 5.54 8.5 2.67 2.67 5.34 4.31 8.5 5.54 3.05 1.19 6.54 2 11.7 2.23 5.12 0.233 6.76 0.29 19.8 0.29s14.7-0.057 19.8-0.29c5.11-0.234 8.6-1.04 11.7-2.23 3.16-1.23 5.83-2.87 8.5-5.54s4.31-5.35 5.54-8.5c1.18-3.05 1.99-6.54 2.23-11.6 0.23-5.12 0.29-6.75 0.29-19.8s-0.06-14.7-0.29-19.8c-0.24-5.11-1.05-8.6-2.23-11.6-1.23-3.16-2.87-5.84-5.54-8.5-2.67-2.67-5.34-4.31-8.5-5.54-3.06-1.19-6.55-2-11.7-2.23-5.12-0.233-6.75-0.29-19.8-0.29zm-4.31 8.65c1.28-0.002 2.7 0 4.31 0 12.8 0 14.3 0.046 19.4 0.276 4.68 0.214 7.22 0.996 8.91 1.65 2.24 0.87 3.84 1.91 5.52 3.59s2.72 3.28 3.59 5.52c0.657 1.69 1.44 4.23 1.65 8.91 0.23 5.06 0.28 6.58 0.28 19.4s-0.05 14.3-0.28 19.4c-0.214 4.68-0.996 7.22-1.65 8.91-0.87 2.24-1.91 3.84-3.59 5.51-1.68 1.68-3.28 2.72-5.52 3.59-1.69 0.66-4.23 1.44-8.91 1.65-5.06 0.23-6.58 0.28-19.4 0.28s-14.3-0.05-19.4-0.28c-4.68-0.216-7.22-0.998-8.91-1.66-2.24-0.87-3.84-1.91-5.52-3.59s-2.72-3.28-3.59-5.52c-0.657-1.69-1.44-4.23-1.65-8.91-0.23-5.06-0.276-6.58-0.276-19.4s0.046-14.3 0.276-19.4c0.214-4.68 0.996-7.22 1.65-8.91 0.87-2.24 1.91-3.84 3.59-5.52s3.28-2.72 5.52-3.59c1.69-0.66 4.23-1.44 8.91-1.66 4.43-0.2 6.14-0.26 15.1-0.27zm29.9 7.97c-3.18 0-5.76 2.58-5.76 5.76s2.58 5.76 5.76 5.76 5.76-2.58 5.76-5.76-2.58-5.76-5.76-5.76zm-25.6 6.73c-13.6 0-24.6 11-24.6 24.6s11 24.6 24.6 24.6c13.6 0.1 24.6-10.9 24.6-24.5s-11-24.6-24.6-24.6zm0 8.65c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16z" />{/*original fill: white*/}
    </svg>
);

export default Instagram;
