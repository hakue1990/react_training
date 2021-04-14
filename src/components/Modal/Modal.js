import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import ModalButton from "../ModalButton/ModalButton";

const Modal = ({ openModalFn, closeModalFn }) => {
  return (
    <div className={styles.wrapper}>
      <ModalButton onClick={closeModalFn} />
      <Form />
    </div>
  );
};

export default Modal;
