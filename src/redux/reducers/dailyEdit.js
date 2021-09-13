import {DAILY_EDIT} from '../actionTypes'

const initialState = {
  title: "日報登録",
  businessContact: {isPreview: false, value: "Hello, **businessContact!**"},
  impression: {isPreview: false, value: "Hello, **impression!**"},
  freeWord: {isPreview: false, value: "Hello, **freeWord!**"},
}

const dailyEdit = (
  (state = initialState, action) => {
    switch (action.type) {
      case DAILY_EDIT: {
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

export default dailyEdit;