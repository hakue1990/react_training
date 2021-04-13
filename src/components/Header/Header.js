import styles from "./Header.module.scss";
import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button";

const Header = ({ openModalFn }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TableBook</div>
      <HeaderNavigation />
      <Button children="add new item" onClick={openModalFn}>
        Add new item
      </Button>
    </header>
  );
};

export default Header;
