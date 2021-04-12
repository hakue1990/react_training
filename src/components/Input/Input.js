import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, label, maxLength }) => {
  return (
    <div className={styles.formItem}>
      <Tag
        className={styles.input}
        type='text'
        name={name}
        id={name}
        placeholder=' '
        required
        maxLength={maxLength}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.formItemBar} />
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};

export default Input;
