import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'

import Login from './screens/Login';
import Game from './screens/Game';

import '../scss/application.scss';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/game" component={Game} />
      </div>
    </ConnectedRouter>
  )
}

export default App;
