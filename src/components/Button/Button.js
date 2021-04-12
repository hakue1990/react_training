import React from 'react';
import styles from './Button.module.scss';

const Button = ({ href, children }) => (
  <React.Fragment>
    {href ? (
      <a href={href} target='blank' className={styles.button}>
        {children}
      </a>
    ) : (
      <button className={styles.button}>{children}</button>
    )}
  </React.Fragment>
);

export default Button;
