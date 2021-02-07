import React from "react";
import "../ListItem/ListItem.css";
import danAbramovImage from "../../assets/images/danabramov.jpg";

const ListItem = () => {
  return (
    <li className="listItem__wrapper">
      <img
        src={danAbramovImage}
        alt="dam abramov"
        className="listItem__image"
      />
      <div>
        <h2 className="listItem__name">dan abramov</h2>
        <p className="listItem__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus
          fuga illum minima at rem eum sed iusto sunt aperiam.
        </p>
        <button className="listItem__button">visit twitter page</button>
      </div>
    </li>
  );
};

export default ListItem;
