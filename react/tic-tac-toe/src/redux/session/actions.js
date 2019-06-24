import userService from '../../services/userService';
import { push } from 'connected-react-router';
import api from '../../config/api';
import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';


const completedTypes = completeTypes(['LOGIN'], ['LOGOUT']);
export const actions = createTypes(completedTypes, '@@AUTH');


const actionsCreators = {
  login: (email, password) => ({
    type: actions.LOGIN,
    service: userService.login,
    payload: { email, password },
    target: 'token',
    injections: [
      withPostSuccess((dispatch, response) => {
        window.localStorage.setItem('token', response.data.token);
        api.setHeader('Authorization', response.data.token);
        dispatch(push('/game'));
      })
    ],
    successSelector: response => response.data.token,
    failureSelector: response => response.data.error.message
  }),
  logout: () => dispatch => {
    window.localStorage.removeItem('token');
    dispatch({type: actions.LOGOUT});
    dispatch(push('/'));
  }
};

export default actionsCreators;
