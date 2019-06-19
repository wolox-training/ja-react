import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import session from './session/reducer';

const reducers = {
  form: formReducer,
  session
}

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, composeEnhancers());
