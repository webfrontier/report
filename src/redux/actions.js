// ActionCreatorを定義
import { LOGIN, NOTICE, TIMELINE, APP, MONTHLY, MONTHLY_SEARCH, MONTHLY_EDIT, WEEKLY_SEARCH, WEEKLY_EDIT, MONTHLY_USER_LIST } from "./actionTypes";

let auth = false;

export const login = status => {
  auth = !status
  return {
    type: LOGIN,
    login: auth
  }
};

export const notice = notice => ({
  type: NOTICE,
  notice: { notice }
});

export const timeline = timeline => ({
  type: TIMELINE,
  timeline: { timeline }
});

export const app = app => ({
  type: APP,
  login: auth
});

export const monthlySearch = monthlySearch => ({
  type: MONTHLY_SEARCH,
  monthlySearch: { monthlySearch }
});

export const monthly = monthly => ({
  type: MONTHLY,
  monthly: monthly
});

export const monthlyUserList = monthlies => ({
  type: MONTHLY_USER_LIST,
  monthlyUserList: monthlies
});

export const monthlyEdit = (key, isPreview, value) => {
  let obj = {}
  obj[key] = {isPreview: isPreview, value: value}
  return ({
    type: MONTHLY_EDIT,
    ...obj
  });
};

export const monthlyEditInputTag = (e, tags) => {
  const splitValues = e.target.value.split(',');
  const addTags = splitValues.length > 1 ? splitValues.slice(0,-1).map((v) => ({name: v})) : [];
  const newTags = [...tags, ...addTags];
  e.target.value = splitValues.slice(-1)[0];
  return ({
    type: MONTHLY_EDIT,
    registTags: newTags,
  });
};

export const monthlyEditDeleteTag = (tags, deleteIndex) => {
  let newTags = tags.filter((tag, index) => index != deleteIndex);
  return ({
    type: MONTHLY_EDIT,
    registTags: newTags,
  });
};

export const weeklySearch = weeklySearch => ({
  type: WEEKLY_SEARCH,
  weeklySearch: { weeklySearch }
});

export const weeklyEdit = (key, isPreview, value) => {
  let obj = {}
  obj[key] = {isPreview: isPreview, value: value}
  return ({
    type: WEEKLY_EDIT,
    ...obj
  });
};

export const fetchMonthly = () => {
  return (dispatch) => {
    //dispatch(loadComments(true));

    fetch('http://localhost:8000/monthly/', {mode: 'cors'})
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        //dispatch(loadComments(false));

        return response;
      })
      .then((response) =>  response.json())
      .then((body) => {
        dispatch(monthlyUserList(body))
      })
      //.catch(() => dispatch(getCommentsError(true)));
  }
}