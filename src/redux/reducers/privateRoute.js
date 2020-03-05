import {PRIVATE_ROUTE} from '../actionTypes';

const initialState = {login: false};

const privateRoute = (state=initialState, action) => {
  switch (action.type) {
    case PRIVATE_ROUTE: {
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

export default privateRoute;
