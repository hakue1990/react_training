import React from "react";
import styles from "./../Radio/Radio.module.scss";

const Radio = ({ id, checked, changeFn, children }) => {
  return (
    <label className={styles.radio}>
      <input id={id} type="radio" onChange={changeFn} checked={checked} />
      {children}
      <div className={styles.radioDiv}></div>
    </label>
  );
};

export default Radio;
