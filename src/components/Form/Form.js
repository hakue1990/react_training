import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./Radio/Radio";
import AppContext from "../../context";

const types = {
  twitter: "twitter",
  articles: "articles",
  notes: "notes",
};

const descriptions = {
  twitter: "twitter account",
  articles: "article",
  notes: "note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleRadioInputChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { activeOption } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>add new {descriptions[activeOption]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={context.addItem}
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

              <Input
                name="title"
                label="Name"
                maxLength={30}
                onChange={this.handleInputChange}
                value={this.state.title}
              />
              {activeOption === types.notes ? null : (
                <Input
                  name="twitterLink"
                  label={
                    activeOption === types.twitter ? "Twitter Link" : "Link"
                  }
                  maxLength={30}
                  onChange={this.handleInputChange}
                  value={this.state.link}
                />
              )}

              {activeOption === types.twitter ? (
                <Input
                  name="image"
                  label="Image"
                  maxLength={30}
                  onChange={this.handleInputChange}
                  value={this.state.image}
                />
              ) : null}
              <Input
                tag="textarea"
                name="description"
                label="Description"
                maxLength={200}
                onChange={this.handleInputChange}
                value={this.state.descriptions}
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
