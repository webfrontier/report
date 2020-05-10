import {WEEKLY_EDIT} from '../actionTypes'

const initialState = {
  title: "週報登録",
  businessContact: {isPreview: false, value: "Hello, **businessContact!**"},
  impression: {isPreview: false, value: "Hello, **impression!**"},
  freeWord: {isPreview: false, value: "Hello, **freeWord!**"},
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