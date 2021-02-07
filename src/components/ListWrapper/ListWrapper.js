import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../../data/twitterAccounts";
import myComponent from "../myComponent/myComponent";

const ListWrapper = () => {
  return (
    <ul className="ListWrapper__wrrapper">
      {twitterAccounts.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
      <myComponent />
    </ul>
  );
};

export default ListWrapper;
