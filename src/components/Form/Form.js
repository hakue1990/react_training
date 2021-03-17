import React from "react";
import styles from "./Form.module.scss";
import Button from '../Button/Button';

const Form = (props) => {
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={props.submitFn}
        className={styles.wrapper}>
        <h2 className={styles.h2}>add new twitter account</h2>
        <input required placeholder="name" name="name" className={styles.input} />
        <input required placeholder="link" link="link" className={styles.input} />
        <input placeholder="image" image="image" className={styles.input} />
        <textarea
          required
          placeholder="description"
          description="description"
          className={styles.textarea}
        />
        <Button>add new item</Button>
      </form>
    </>
  );
};

export default Form;

