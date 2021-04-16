import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

class Form extends React.Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>add new twitter account</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <Input name="Name" label="Name" maxLength={30} />
          <Input name="twitterLink" label="Twitter Link" maxLength={30} />
          <Input name="image" label="Image" maxLength={30} />
          <Input
            tag="textarea"
            name="description"
            label="Description"
            maxLength={200}
          />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
