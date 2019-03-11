import React from 'react';

import styles from './button.module.css';

const Button = ( props ) => (
    <a href={props.url} target="_blank" className={styles.button}> {props.label} </a>
);

export default Button;
