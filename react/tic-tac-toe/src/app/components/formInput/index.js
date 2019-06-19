
import React from 'react';
import styles from './styles.module.scss';

const formInput = ({ label, type, meta: { touched, error } }) => {
  console.log(touched, error)
  return (
    <div className={styles.column}>
      <label>{label}</label>
      <input
        type={type}
        className={styles.input}
      />
      {touched && ((error && <span>{error}</span>)) }
    </div>
  );
}

export default formInput;
