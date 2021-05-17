import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  rezerwacje: "rezerwacje",
  zamowienia: "zamowienia",
  zadania: "zadania",
};

const descriptions = {
  rezerwacje: "zarezerwuj stolik",
  zamowienia: "dodaj zamowienie",
  zadania: "dodaj zadanie",
};

class Form extends React.Component {
  state = {
    type: types.rezerwacje,
    imie: "",
    ileOsob: "",
    data: "",
    godzina: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title> {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.rezerwacje}
                  checked={type === types.rezerwacje}
                  changeFn={() =>
                    this.handleRadioButtonChange(types.rezerwacje)
                  }
                >
                  rezerwacja
                </Radio>
                <Radio
                  id={types.zamowienia}
                  checked={type === types.zamowienia}
                  changeFn={() =>
                    this.handleRadioButtonChange(types.zamowienia)
                  }
                >
                  zamówienie
                </Radio>
                <Radio
                  id={types.zadania}
                  checked={type === types.zadania}
                  changeFn={() => this.handleRadioButtonChange(types.zadania)}
                >
                  zadanie
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.imie}
                name="imie"
                label="Imię i Nazwisko"
              />
              {type !== types.zadania ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.ileOsob}
                  name="ileOsob"
                  label="ile osób"
                />
              ) : null}

              {type === types.rezerwacje ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.data}
                  name="data"
                  label="data"
                />
              ) : null}

              <Input
                onChange={this.handleInputChange}
                value={this.state.godzina}
                tag="textarea"
                name="godzina"
                label="godzina"
              />
              <Button>Dodaj</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
