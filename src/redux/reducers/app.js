import {APP} from '../actionTypes';

const initialState = {login: false};

const app = (state=initialState, action) => {
  switch (action.type) {
    case APP: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}

export default app;