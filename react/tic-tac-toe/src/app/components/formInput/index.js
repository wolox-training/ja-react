
import React from 'react';
import styles from './styles.module.scss';

const formInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className={styles.column}>
      <label>{label}</label>
      <input
        {...input}
        type={type}
        className={styles.input}
      />
      {touched && ((error && <span className={styles.error}>{error}</span>)) }
    </div>
  );
}

export default formInput;
