import React from 'react';
import {connect} from 'react-redux';
import { Form, Col, Row, Button } from 'react-bootstrap';
import '../css/text.css';
import '../css/login.css';
import {login} from '../redux/actions'

const mapStateToProps = state => {
  return {stateProps: state.login};
};

const Login = ({stateProps, login}) => {
  return (
    <div id="login-form">
      <h1 className="text-center">Report</h1>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={() => login(stateProps)}>Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { login })(Login);