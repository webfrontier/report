import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import login from './login';
import notice from './notice';
import timeline from './timeline';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  todos,
  visibilityFilter,
  login,
  notice,
  timeline
})
export default createRootReducer;