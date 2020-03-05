import React from 'react';
import { Redirect, Switch } from "react-router-dom";
import Layout from '../Layout';
import { connect } from 'react-redux';
import {app} from '../../redux/actions'

const mapStateToProps = (state) => ({
  loginStatus: state.login.status,
  location: state.router.location,
});

const PrivateRoute = (props) => {
  console.log(props);
  console.log(props.app());
  return (
    <Switch>
      {
        // props.loginStatus ? <Layout {...props} /> : <Redirect to="/login" render={() => (<Login/>)}/>
        props.loginStatus || props.computedMatch.params.id != null ? <Layout {...props} /> : <Redirect to="/login"/>
      }
    </Switch>
  );
};

export default connect(
  mapStateToProps,
  {app}
)(PrivateRoute)
