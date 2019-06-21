import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import session from './session/reducer';
import thunk from 'redux-thunk';

const reducers = {
  form: formReducer,
  session
}

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(thunk))
  );
