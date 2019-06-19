import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './styles.module.scss';
import { required, minLength, mailValidation } from '../../../validation';
import FormInput from '../../components/formInput'

let Login = (props) => {
  return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field
          component={FormInput}
          label="Mail"
          name="mail"
          type="text"
          validations={[ mailValidation, required]}
        />
        <Field
          component={FormInput}
          label="Password"
          name="password"
          type="password"
          validations={[required, minLength]}
        />
        <button
          className={styles.button}
          type="submit"
          disabled={props.invalid|| props.submitting || props.pristine}
        > Login
        </button>
      </form>
  )
};

Login = reduxForm({
  form: 'login'
})(Login);

const submit = values => {
  console.log(values);
}

const LoginFormContainer = () => {
  return <Login onSubmit={submit}></Login>
}

export default LoginFormContainer;
