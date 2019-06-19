import { actions } from '~redux/session/actions';

const initialState = {
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN:
      return {
        ...state,
        token: 'TODO' //TODO
      };
    default:
      return state;
  }
}

export default reducer;
