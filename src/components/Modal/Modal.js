import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import ModalButton from "../ModalButton/ModalButton";

const Modal = ({ openModalFn }) => {
  return (
    <div className={styles.wrapper}>
      <ModalButton />
      <Form />
    </div>
  );
};

export default Modal;
