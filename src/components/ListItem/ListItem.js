import React from "react";
import styles from "../ListItem/ListItem.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const ListItem = ({ image, title, description, link }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      {image && (
        <ImageTag
          src={image}
          alt={title}
          className={image ? styles.image : styles.imageNone}
        />
      )}
      <div>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link}>visit twitter page</Button>}
      </div>
    </li>
  );
};

export default ListItem;

ListItem.prototypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
};
ListItem.defaultProps = {
  image: null,
  link: null,
};
