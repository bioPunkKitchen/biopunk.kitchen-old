import React from 'react';
import MeetupLarge from '../../static/media/Meetup_Large_white.svg';
import styles from './sticky.module.css';

const Sticky = () => (
    <a href="https://www.meetup.com/BiopunX" target="_blank" className={styles.sticky}><img src={MeetupLarge}/></a>
);

export default Sticky;
