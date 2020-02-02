import {LOGIN} from '../actionTypes';

const initialState = false;

const login = (
  (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        return {
        ...state,
          login: !action.login
        };
      }
      default:
        return state;
    }
  }
);

export default login;