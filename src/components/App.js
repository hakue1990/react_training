import "./App.css";
import React from "react";
import ListWrapper from "../components/ListWrapper/ListWrapper";
import Form from './Form/Form'


const initialItems = [
  {
    image: 'https://avatars.githubusercontent.com/u/810438?s=460&u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4',
    name: "Dan Abramov",
    // description: "Working on react.js - demo guy",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image: 'https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h.jpg',
    name: "Ryan Florence",
    description:
      "Making React assccesible for users and developers : Online learning, workshops, OSS, and consulting ",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/92839?s=400&u=2727b5ab382f6b2f3be84a257c2dcdc50243d78f&v=4',
    name: "Michael Jackson",
    description: "Maker - CO author of React Router  ",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
    name: "Kent C. Dodds",
    description: "Making software development more accessible ",
    twitterLink: "https://twitter.com/kentcdodds",
  },
]


class App extends React.Component {
  state = {
    items: [...initialItems]
  }
  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      mage: e.target[0].value,
      name: e.target[1].value,
      description: e.target[2].value,
      twitterLink: e.target[3].value,
    }
    this.setState({
      items: [...this.state.items, newItem]
    })

  }
  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>

    );
  }

};

export default App;
