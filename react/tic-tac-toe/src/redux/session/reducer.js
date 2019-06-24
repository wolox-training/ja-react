import { actions } from '~redux/session/actions';

const initialState = {
  token: window.localStorage.getItem('token'),
  loginError: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loginError: false
      };
      case actions.LOGIN_FAILURE:
        return {
          ...state,
          loginError: true
        };
      case actions.LOGOUT:
        return {
          ...state,
          token: null
        }
    default:
      return state;
  }
}

export default reducer;
