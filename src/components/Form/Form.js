import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  twitter: "twitter",
  articles: "articles",
  notes: "notes",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  };

  handleRadioInputChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Title>add new twitter account</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <input
            id={types.twitter}
            type="radio"
            onChange={() => this.handleRadioInputChange(types.twitter)}
            checked={this.state.activeOption === types.twitter}
          />
          <label htmlFor={types.twitter}>Twitter</label>
          <input
            id={types.articles}
            type="radio"
            onChange={() => this.handleRadioInputChange(types.articles)}
            checked={this.state.activeOption === types.articles}
          />
          <label htmlFor={types.articles}>Articles</label>
          <input
            id={types.notes}
            type="radio"
            onChange={() => this.handleRadioInputChange(types.notes)}
            checked={this.state.activeOption === types.notes}
          />
          <label htmlFor={types.notes}>Notes</label>
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
