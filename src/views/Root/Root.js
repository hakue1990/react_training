import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";

class Root extends React.Component {
  state = {
    items: {
      twitters: [],
      articles: [],
      notes: [],
    },
    isModalOpen: true,
  };
  addItem = (e) => {
    e.preventDefault();

    console.log("it works!");
    // const newItem = {
    //   name: e.target[0].value,
    //   link: e.target[1].value,
    //   image: e.target[2].value,
    //   description: e.target[3].value,
    // };
    // this.setState((prevState) => ({
    //   items: [...prevState.items, newItem],
    // }));
    // e.target.reset();
  };

  openModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  closeModal = () => {
    this.setState((prevState) => ({
      isModalOpen: false,
    }));
  };
  render() {
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {this.state.isModalOpen && (
            <Modal
              closeModalFn={this.closeModal}
              openModalFn={this.openModal}
            />
          )}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
