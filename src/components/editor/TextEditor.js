import React from 'react'
import {Col, Row, Form} from 'react-bootstrap'

const TextEditor = (props) => {
  return (
    <Form.Group as={Row} controlId={props.controlId}>
      <Form.Label column sm="2">{props.label}</Form.Label>
      <Col sm="10">
        <Form.Control type='text' placeholder={props.placeholder} />
      </Col>
    </Form.Group>
  );
};

export default TextEditor;