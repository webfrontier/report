// ActionCreatorを定義
import { LOGIN, NOTICE, TIMELINE, APP, MONTHLY, MONTHLY_SEARCH} from "./actionTypes";

export const login = login => ({
  type: LOGIN,
  login
});

export const notice = notice => ({
  type: NOTICE,
  notice: { notice }
});

export const timeline = timeline => ({
  type: TIMELINE,
  timeline: { timeline }
});

export const app = app => ({
  type: APP
});

export const monthlySearch = monthlySearch => ({
  type: MONTHLY_SEARCH,
  monthlySearch: { monthlySearch }
});

export const monthly = monthly => ({
  type: MONTHLY,
  monthly: { monthly}
});

