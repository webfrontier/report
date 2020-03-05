import {LOGIN} from '../actionTypes';

const initialState = {status: false};

const login = (
  (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        return {
          ...state,
          status: action.login
        };
      }
      default:
        return state;
    }
  }
);

export default login;