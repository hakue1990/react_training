import React from "react";
import styles from "./Button.module.scss";

const Button = ({ href, children, openModalFn, ...props }) => (
  <React.Fragment>
    {href ? (
      <a href={href} target="blank" className={styles.button}>
        {children}
      </a>
    ) : (
      <button {...props} className={styles.button}>
        {children}
      </button>
    )}
  </React.Fragment>
);

export default Button;
