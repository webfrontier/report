import React from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import MarkdownEditor from '../../MarkdownEditor'
import WeeklyDatePicker from '../../editor/WeeklyDatePicker'
import WorkLocationSelect from '../../editor/WorkLocationSelect'
import {weeklyEdit} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    title: state.weeklyEdit.title,
    projectOutline: state.weeklyEdit.projectOutline,
    businessContent: state.weeklyEdit.businessContent,
    check: state.weeklyEdit.check,
    target: state.weeklyEdit.target
  }
}

const mapDispatchToProps = (dispatch) => (
  {onClick: (key, isPreview, value) => dispatch(weeklyEdit(key, isPreview, value))}
);

const TargetWeek = () => (
 <Form.Group as={Row}>
    <Form.Label column sm={2}>対象週</Form.Label>
    <Col sm={10}>
      <WeeklyDatePicker />
    </Col>
  </Form.Group>
);

const WorkLocation = () => (
  <Form.Group as={Row}>
    <Form.Label column sm={2}>勤務地</Form.Label>
    <Col sm={10}>
      <WorkLocationSelect/>
    </Col>
  </Form.Group>
);

const WeeklyEdit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="page-body">
        <Card>
          <Card.Body>
            <Form>
              <TargetWeek />
              <WorkLocation/>
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

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEdit)