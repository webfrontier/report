import React from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import MarkdownEditor from '../../MarkdownEditor'
import {monthlyEdit} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    title: state.monthlyEdit.title,
    projectOutline: state.monthlyEdit.projectOutline,
    businessContent: state.monthlyEdit.businessContent,
    check: state.monthlyEdit.check,
    target: state.monthlyEdit.target
  }
}

const mapDispatchToProps = (dispatch) => (
  {onClick: (key, isPreview, value) => dispatch(monthlyEdit(key, isPreview, value))}
);

const MonthlyEdit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="page-body">
        <Card>
          <Card.Body>
            <Form>
              <Form.Group as={Row} controlId="targetMonth">
                <Form.Label column sm="2">対象月</Form.Label>
                <Col sm="10">
                  <Form.Control as="select">
                    <option>2019年01月</option>
                    <option>2019年02月</option>
                    <option>2019年03月</option>
                    <option>2019年04月</option>
                    <option>2019年05月</option>
                    <option>2019年06月</option>
                    <option>2019年07月</option>
                    <option>2019年08月</option>
                    <option>2019年09月</option>
                    <option>2019年10月</option>
                    <option>2019年11月</option>
                    <option>2019年12月</option>
                    <option>2020年01月</option>
                    <option>2020年02月</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <MarkdownEditor key="ProjectOutline" controlId="ProjectOutline"
                label="プロジェクト概要" data={{key: "projectOutline", ...props.projectOutline}} clickEvent={props.onClick}/>
              <MarkdownEditor key="businessContent" controlId="businessContent"
                label="業務内容" data={{key: "businessContent", ...props.businessContent}} clickEvent={props.onClick}/>
              <MarkdownEditor key="check" controlId="check"
                label="今月の振り返り" data={{key: "check",...props.check}} clickEvent={props.onClick}/>
              <MarkdownEditor key="target" controlId="target"
                label="来月の目標" data={{key: "target", ...props.target}} clickEvent={props.onClick}/>
              <Button variant="secondary" size="lg" block>
                下書き保存
              </Button>
              <Button variant="primary" size="lg" block>
                登録
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyEdit)