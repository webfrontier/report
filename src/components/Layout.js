import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import Header from './Header';
import '../css/bootstrap.min.css';
import '../css/brands.min.css';
import '../css/solid.min.css';
import '../css/page.css';

const Layout = (props) => {
  return (
    <Row>
      <Col sm={2} className="bg-danger">
        <Header/>
      </Col>
      <Col sm={{span: 8, offset: 1}}>
        <Route {...props} />
      </Col>
    </Row>
  );
}

export default Layout;