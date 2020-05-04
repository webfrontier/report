import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Top from './components/page/Top';
import Login from './components/page/Login';
import Monthly from './components/page/monthly/Top';
import MonthlyUserList from './components/page/monthly/MonthlyUserList';
import MonthlyEdit from './components/page/monthly/MonthlyEdit';
import WeeklyEdit from './components/page/weekly/WeeklyEdit';
import PrivateRoute from './components/routes/PrivateRoute';
import {app} from './redux/actions';

const mapStateToProps = (state) => ({
  loginStatus: state.login.status,
  location: state.router.location
});

const App = (props) => {
  let user = "レポート太郎";
  return (
    <Switch>
      <PrivateRoute exact path="/" render = {() => ( <Top/> )} user={user} />
      <PrivateRoute exact path="/monthly/:id" render ={() => ( <Monthly/>)} user={user} />
      <PrivateRoute path="/monthly/user/:id" render ={() => ( <MonthlyUserList/>)} user={user} />
      <PrivateRoute path="/monthly/new/:id" render ={() => ( <MonthlyEdit/>)} user={user} />
      <PrivateRoute path="/weekly/new/:id" render ={() => ( <WeeklyEdit/>)} user={user} />
      <Route path="/login" render ={() => props.app().login ? <Redirect to="/"/> : (<Login/>)} />
    </Switch>
  );
}

export default connect(mapStateToProps, {app})(App);