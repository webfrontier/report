import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import Top from './components/Top';
import Login from './components/Login';

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
  <Row>
    <Col sm={2} className="bg-danger">
      <Header/>
    </Col>
    <Col sm={10}>
      <Top/>
    </Col>
  </Row>
)

export default connect(
  mapStateToProps
)(App)