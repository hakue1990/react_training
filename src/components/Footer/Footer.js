import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/*column1*/}
          <div className={styles.col}>
            <h4>TableBook inc.</h4>
            <ul className={styles.list}>
              <li>736 082 373</li>
              <li>Poznań, Poland</li>
            </ul>
          </div>
          {/*column2*/}
          <div className={styles.col}>
            <h4>CEO's</h4>
            <ul className={styles.list}>
              <li>Adam Hałdaś</li>
              <li>Mateusz Kokot</li>
              <li>Michał Kolanowski</li>
              <li>Michał Sowiński</li>
            </ul>
          </div>
          {/*column3*/}
          <div className={styles.col}>
            <h4>Well another column xD</h4>
            <ul className={styles.list}>
              <li>I don't know yet</li>
              <li>What</li>
              <li>to write</li>
              <li>here</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles.rowSecond}>
          <p>
            &copy;{new Date().getFullYear()} TABLEBOOK INC | All right reserved
            | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
