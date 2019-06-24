import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import session from './session/reducer';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware  } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { fetchMiddleware } from 'redux-recompose';

export const history = createBrowserHistory();

const reducers = {
  form: formReducer,
  router: connectRouter(history),
  session
}

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(thunk,routerMiddleware(history), fetchMiddleware))
  );
