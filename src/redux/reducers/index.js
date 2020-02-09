import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import login from './login';
import notice from './notice';
import timeline from './timeline';

export default combineReducers({ todos, visibilityFilter, login, notice , timeline});