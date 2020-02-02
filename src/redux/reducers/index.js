import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import login from './login';

export default combineReducers({ todos, visibilityFilter, login });