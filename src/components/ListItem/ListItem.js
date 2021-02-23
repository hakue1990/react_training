import React from "react";
import styles from "../ListItem/ListItem.module.scss";
import PropTypes from "prop-types";

const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        alt={name}
        className={image ? styles.image : styles.imageNone}
      />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <a href={twitterLink} target="blank" className={styles.button}>
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
