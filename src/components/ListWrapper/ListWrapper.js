import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../../data/twitterAccounts";

const ListWrapper = () => {
  return (
    <ul className="ListWrapper__wrrapper">
      {twitterAccounts.map((item) => (
        <ListItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default ListWrapper;
