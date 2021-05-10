import React from "react";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RezerwacjeView from "../RezerwacjeView/RezerwacjeView";
import ZamowieniaView from "../ZamowieniaView/ZamowieniaView";
import ZadaniaView from "../ZadaniaView/ZadaniaView";
import PolitykaPrywatnosciView from "../PolitykaPrywatnosci/PolitykaPrywatnosciView";

import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  state = {
    rezerwacje: [],
    zamowienia: [],
    zadania: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={RezerwacjeView} />
            <Route path="/zamowienia" component={ZamowieniaView} />

            <Route path="/zadania" component={ZadaniaView} />
            <Route
              path="/politykaprywatnosci"
              component={PolitykaPrywatnosciView}
            />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

// 3. Dopasować Form.js do nowych potrzeb
// 4. Przystosować widoki podstron do nowych itemów
// 5. Wyświetlać odpowiednie notatki na podstronach
