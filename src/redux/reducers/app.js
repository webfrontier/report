import {APP} from '../actionTypes';

const initialState = {login: false};

const app = (state=initialState, action) => {
  switch (action.type) {
    case APP: {
      return {
        ...state,
        login: action.login
      };
    }
    default: {
      return state;
    }
  }
}

export default app;