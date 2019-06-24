import { actions } from '~redux/session/actions';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

const stateDescription = {
  token: window.localStorage.getItem('token')
}

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOGOUT]: (state, action) => ({ ...state, token: null })
  }
}

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
