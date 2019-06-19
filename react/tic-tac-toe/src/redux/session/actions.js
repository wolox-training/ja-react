export const actions = {
  GET_TOKEN: '@@SESSION/GET_TOKEN',
};

const actionsCreators = {
  getToken: data => ({
    type: actions.GET_TOKEN,
    payload: data
  })
};

export default actionsCreators;
