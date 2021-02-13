import React from "react";
import "../ListItem/ListItem.css";
import PropTypes from "prop-types";

const ListItem = ({ image, name, description, twitterLink }) => {
  return (
    <li className="listItem__wrapper">
      <img src={image} alt={name} className="listItem__image" />
      <div>
        <h2 className="listItem__name">{name}</h2>
        <p className="listItem__description">{description}</p>
        <a href={twitterLink} target="blank" className="listItem__button">
          visit twitter page
        </a>
      </div>
    </li>

  );
};

export default ListItem;

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
  description: "one of React creators",
};
