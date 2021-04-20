import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./Radio/Radio";

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
        <Title>add new twitter asdgitaccount</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.radio__wrapper}>
            <Radio
              id={types.twitter}
              checked={this.state.activeOption === types.twitter}
              changeFn={() => this.handleRadioInputChange(types.twitter)}
            >
              Twitter
            </Radio>
            <Radio
              id={types.articles}
              checked={this.state.activeOption === types.articles}
              changeFn={() => this.handleRadioInputChange(types.articles)}
            >
              Articles
            </Radio>
            <Radio
              id={types.notes}
              checked={this.state.activeOption === types.notes}
              changeFn={() => this.handleRadioInputChange(types.notes)}
            >
              Notes
            </Radio>
          </div>

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
