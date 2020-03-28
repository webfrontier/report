import React from 'react'
import {Card, Nav, Col, Row, Form} from 'react-bootstrap'

import {Remarkable} from 'remarkable'

const MarkdownEditor = (props) => {
  let value = props.data.value;
  let myRef = React.createRef();
  let md = new Remarkable();
  return (
    <Form.Group as={Row} controlId={props.controlId}>
      <Form.Label column sm="2">{props.label}</Form.Label>
      <Col sm="10">
        <Card>
          <Card.Header>
            <Nav fill variant="tabs" defaultActiveKey="edit">
              <Nav.Item>
                <Nav.Link eventKey="edit" onClick={() => props.clickEvent(props.data.key, false, value)}>編集</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="preview" onClick={() => props.clickEvent(props.data.key, true, myRef.current.value)}>プレビュー</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            {
              props.data.isPreview ? (
                <blockquote>
                  <p className="content" dangerouslySetInnerHTML={{__html: md.render(value)}}/>
                </blockquote>
              ) : (
                <Form.Control as="textarea" rows="5"
                 defaultValue={value} ref={myRef}/>
              )
            }
          </Card.Body>
        </Card>
      </Col>
    </Form.Group>
  );
};

export default MarkdownEditor;
