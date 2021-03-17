import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children }) => {
    return (
        <button type="submit" className={styles.button}>{children}</button>
    );
}

export default Button;