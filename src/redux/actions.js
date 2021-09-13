// ActionCreatorを定義
import { LOGIN, NOTICE, TIMELINE, APP, MONTHLY, MONTHLY_SEARCH, MONTHLY_EDIT, WEEKLY_SEARCH, WEEKLY_EDIT, DAILY_SEARCH, DAILY_EDIT } from "./actionTypes";

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
  monthly: { monthly }
});

export const monthlyEdit = (key, isPreview, value) => {
  let obj = {}
  obj[key] = {isPreview: isPreview, value: value}
  return ({
    type: MONTHLY_EDIT,
    ...obj
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

export const dailySearch = dailySearch => ({
  type: DAILY_SEARCH,
  dailySearch: { dailySearch }
});

export const dailyEdit = (key, isPreview, value) => {
  let obj = {}
  obj[key] = {isPreview: isPreview, value: value}
  return ({
    type: DAILY_EDIT,
    ...obj
  });
};