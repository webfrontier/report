import {MONTHLY_USER_LIST} from '../actionTypes';

const initialState = {
  userName: "レポート太郎",
  year: 2020,
  monthlies:　[
    {
      id: "1",
      state: {
        class: "warning",
        name: "未登録"
      },
      actions: [
        "登録"
      ]
    },
    {
      id: "2",
      state: {
        class: "success",
        name: "登録済"
      },
      actions: [
        "編集"
      ]
    },
  ]
};

const monthlyUserList = (
  (state=initialState, action) => {
    switch (action.Type) {
      case MONTHLY_USER_LIST: {
        return {
          ...state,
          ...action.monthlyUserList
        };
      }
      default:
       return state
    }
  }
);

export default monthlyUserList;
