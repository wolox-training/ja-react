import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      rest.isLogged
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

const mapStateToProps = (state) => 
   ({ isLogged: !!state.session.token })


export default connect(mapStateToProps)(PrivateRoute);
