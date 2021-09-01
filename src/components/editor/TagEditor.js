import React from 'react'
import {Col, Row, Form, Button, Badge, ButtonToolbar, ButtonGroup, InputGroup} from 'react-bootstrap'

const TextEditor = (props) => {
  console.log(props);
  return (
    <Form.Group as={Row} controlId={props.controlId}>
      <Form.Label column sm="2">{props.label}</Form.Label>
      <Col sm="10">
        <ButtonToolbar>
          <ButtonGroup>
            {
              props.registTags.map((registTag, index) => 
                <Button  className="mr-2" key={`registTag${index}`} variant="primary" onClick={() => props.clickEvent(props.registTags, index)}><span className="mr-1">{registTag.name}</span><Badge variant="light">&times;</Badge></Button>
              )
            }
          </ButtonGroup>
          <InputGroup>
            <Form.Control type='text' placeholder={props.placeholder} onKeyUp={(e) => props.inputEvent(e,props.registTags)} onClick={(e) => props.inputEvent(e,props.registTags)}></Form.Control>
          </InputGroup>
        </ButtonToolbar>
      </Col>
    </Form.Group>
  );
};

export default TextEditor;
