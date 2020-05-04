import {WEEKLY_EDIT} from '../actionTypes'

const initialState = {
  title: "週報登録",
  projectOutline: {isPreview: false, value: "Hello, **project!**"},
  businessContent: {isPreview: false, value: "Hello, **business!**"},
  check: {isPreview: false, value: "Hello, **check!**"},
  target: {isPreview: false, value: "Hello, **target!**"},
}

const weeklyEdit = (
  (state = initialState, action) => {
    switch (action.type) {
      case WEEKLY_EDIT: {
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

export default weeklyEdit;