import {MONTHLY_EDIT} from '../actionTypes'

const initialState = {
  title: "月報登録",
  projectOutline: {isPreview: false, value: "Hello, **project!**"},
  businessContent: {isPreview: false, value: "Hello, **business!**"},
  check: {isPreview: false, value: "Hello, **check!**"},
  target: {isPreview: false, value: "Hello, **target!**"},
}

const monthlyEdit = (
  (state = initialState, action) => {
    switch (action.type) {
      case MONTHLY_EDIT: {
        let {type, ...obj} = action;
        return {
          ...state,
          ...obj
        }
      }
      default:
        return state
    }
  }
);

export default monthlyEdit;