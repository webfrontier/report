import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

import Header from './components/Header';
import Top from './components/Top';
import Login from './components/Login';
import Monthly from './components/Monthly';
import {app} from './redux/actions';
import './css/bootstrap.min.css';
import './css/brands.min.css';
import './css/solid.min.css';
import './css/page.css';

const mapStateToProps = state => {
  return {loginState: state.login};
};

const App = ({loginState}) => {
  return (
    <div>
      {
        loginState ? Layout : <Login/>
      }
    </div>
  );
};

const Layout = (
  <ConnectedRouter history={history}>
    <Row>
      <Col sm={2} className="bg-danger">
        <Header/>
      </Col>
      <Col sm={{span: 8, offset: 1}}>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/monthly" render ={() => ( <Monthly/>)} />
        </Switch>
      </Col>
    </Row>
  </ConnectedRouter>
);

export default connect(
  mapStateToProps,
  {app}
)(App)