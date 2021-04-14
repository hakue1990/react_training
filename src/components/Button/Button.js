import React from "react";
import styles from "./Button.module.scss";

const Button = ({ href, children, openModalFn, secondary, ...props }) => (
  <React.Fragment>
    {href ? (
      <a href={href} target="blank" className={styles.button}>
        {children}
      </a>
    ) : (
      <button
        {...props}
        className={secondary ? styles.secondary : styles.button}
      >
        {children}
      </button>
    )}
  </React.Fragment>
);

export default Button;
