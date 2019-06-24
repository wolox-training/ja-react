import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { required, minLength, mailValidation } from '../../../validation';
import FormInput from '../../components/formInput'
import sessionActions from '../../../redux/session/actions'

class Login extends Component{

render() {
  const props = this.props;
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field
          component={FormInput}
          label="Mail"
          name="email"
          type="text"
          validate={[ mailValidation, required]}
          />
        <Field
          component={FormInput}
          label="Password"
          name="password"
          type="password"
          validate={[required, minLength]}
          />
        <button
          className={styles.button}
          type="submit"
          disabled={props.invalid|| props.submitting || props.pristine}
          > Login
        </button>
      </form>
    )
  }
};

Login = reduxForm({
  form: 'login'
})(Login);

class LoginFormContainer extends Component {
  submit = values => {
    this.props.dispatch(sessionActions.login(values.email, values.password));
  }

  render() {
    return <Login onSubmit={this.submit}></Login>
  }
}
export default connect()(LoginFormContainer);
