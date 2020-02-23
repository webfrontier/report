// ActionCreatorを定義
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, LOGIN, NOTICE, TIMELINE, APP, MONTHLY, MONTHLY_SEARCH} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
 type: SET_FILTER,
 payload: { filter }
});

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

