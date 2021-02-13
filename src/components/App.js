import "./App.css";
import React from "react";
import ListWrapper from "../components/ListWrapper/ListWrapper";


const InitialItems = [
  {
    image: 'https://breakbrunch.com/wp-content/uploads/2019/10/triss-merigold-witcher-cosplay-by-lyumos-100219-3.jpg',
    name: "Dan Abramov",
    // description: "Working on react.js - demo guy",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image: 'https://breakbrunch.com/wp-content/uploads/2019/10/triss-merigold-witcher-cosplay-by-lyumos-100219-3.jpg',
    name: "Ryan Florence",
    description:
      "Making React assccesible for users and developers : Online learning, workshops, OSS, and consulting ",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image: 'https://breakbrunch.com/wp-content/uploads/2019/10/triss-merigold-witcher-cosplay-by-lyumos-100219-3.jpg',
    name: "Michael Jackson",
    description: "Maker - CO author of React Router  ",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image: 'https://breakbrunch.com/wp-content/uploads/2019/10/triss-merigold-witcher-cosplay-by-lyumos-100219-3.jpg',
    name: "Kent C. Dodds",
    description: "Making software development more accessible ",
    twitterLink: "https://twitter.com/kentcdodds",
  },
]


class App extends React.Component {
  state = {
    items: [...InitialItems]
  }
  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
      </div>

    );
  }

};

export default App;
