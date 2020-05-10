import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import app from './app';
import login from './login';
import notice from './notice';
import timeline from './timeline';
import monthlyUserList from './monthlyUserList';
import monthlyEdit from './monthlyEdit';
import weeklyEdit from './weeklyEdit';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  login,
  notice,
  timeline,
  monthlyUserList,
  monthlyEdit,
  weeklyEdit,
})
export default createRootReducer;