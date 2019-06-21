import userService from '../../services/userService';

export const actions = {
  LOGIN: '@@SESSION/LOGIN',
  LOGIN_FAILURE: '@@SESSION/LOGIN_FAILURE',
  LOGIN_SUCCESS: '@@SESSION/LOGIN_SUCCESS'
};

const actionsCreators = {
  login: data => async dispatch => {
    const response = await userService.login(data);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
     });
    } else {
       dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
     });
    }
  },
};

export default actionsCreators;
