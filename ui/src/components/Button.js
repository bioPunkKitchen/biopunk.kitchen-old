import React from 'react';

import styles from './button.module.css';

const Button = ( props ) => (
    <div className={styles.button}> {props.label} </div>
);

export default Button;
