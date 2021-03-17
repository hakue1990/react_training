import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialItems = [
  {
    image:
      "https://avatars.githubusercontent.com/u/810438?s=460&u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4",
    name: "Dan Abramov",
    // description: "Working on react.js - demo guy",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h.jpg",
    name: "Ryan Florence",
    description:
      "Making React assccesible for users and developers : Online learning, workshops, OSS, and consulting ",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image:
      "https://avatars.githubusercontent.com/u/92839?s=400&u=2727b5ab382f6b2f3be84a257c2dcdc50243d78f&v=4",
    name: "Michael Jackson",
    description: "Maker - CO author of React Router  ",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg",
    name: "Kent C. Dodds",
    description: "Making software development more accessible ",
    twitterLink: "https://twitter.com/kentcdodds",
  },
];

class Root extends React.Component {
  state = {
    items: [...initialItems],
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: e.target[0].value,
      link: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
    e.target.reset();
  };
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          <Modal />
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
