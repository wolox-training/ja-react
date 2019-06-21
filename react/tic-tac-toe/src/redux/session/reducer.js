import { actions } from '~redux/session/actions';

const initialState = {
  token: null,
  loginError: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };
      case actions.LOGIN_FAILURE:
      return {
        ...state,
        loginError: true
      };
    default:
      return state;
  }
}

export default reducer;
