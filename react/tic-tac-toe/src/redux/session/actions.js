import userService from '../../services/userService';
import { push } from 'connected-react-router';
import api from '../../config/api';

export const actions = {
  LOGIN: '@@SESSION/LOGIN',
  LOGIN_FAILURE: '@@SESSION/LOGIN_FAILURE',
  LOGIN_SUCCESS: '@@SESSION/LOGIN_SUCCESS',
  LOGOUT: '@@SESSION/LOGOUT'
};

const actionsCreators = {
  login: data => async dispatch => {
    const response = await userService.login(data);
    if (response.ok) {
      window.localStorage.setItem('token', response.data.token);
      api.setHeader('Authorization', response.data.token);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
     });
     dispatch(push('/game'));
    } else {
       dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
     });
    }
  },
  logout: () => dispatch => {
    window.localStorage.removeItem('token');
    dispatch({type: actions.LOGOUT});
    dispatch(push('/'));
  }
};

export default actionsCreators;
