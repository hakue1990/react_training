import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({ imie, ileOsob, data, tekst }) => {
  return (
    <li className={styles.wrapper}>
      {/* {image && (
        <ImageTag
          src={image}
          className={image ? styles.image : styles.imageNone}
          alt={imie}
        />
        
      )}
      <div>
        <Title>{imie}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link}>visit twitter page</Button>}
      </div> */}

      <Title>{imie}</Title>
      <p>{data}</p>
    </li>
  );
};

ListItem.propTypes = {
  imie: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
  data: PropTypes.string,
  ileOsob: PropTypes.string,
};

ListItem.defaultProps = {
  image: null,
  link: null,
};

export default ListItem;
