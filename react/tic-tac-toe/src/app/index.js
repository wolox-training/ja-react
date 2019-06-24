import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'

import Login from './screens/Login';
import Game from './screens/Game';

import '../scss/application.scss';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/game" component={Game} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App;
