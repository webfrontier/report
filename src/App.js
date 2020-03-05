import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Top from './components/Top';
import Login from './components/Login';
import Monthly from './components/monthly/Top';
import PrivateRoute from './components/routes/PrivateRoute';
import {app} from './redux/actions';

const mapStateToProps = (state) => ({
  loginStatus: state.login.status,
  location: state.router.location
});

const App = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/" render = {() => ( <Top/> )} />
      <PrivateRoute path="/monthly/:id" render ={() => ( <Monthly/>)} />
      <Route path="/login" render ={() => props.app().login ? <Redirect to="/"/> : (<Login/>)} />
    </Switch>
  );
}

export default connect(mapStateToProps, {app})(App);