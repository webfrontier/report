import React from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import MarkdownEditor from '../../MarkdownEditor'
import WeeklyDatePicker from '../../editor/WeeklyDatePicker'
import WorkLocationSelect from '../../editor/WorkLocationSelect'
import TextEditor from '../../editor/TextEditor'
import {weeklyEdit} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    title: state.weeklyEdit.title,
    businessContact: state.weeklyEdit.businessContact,
    impression: state.weeklyEdit.impression,
    freeWord: state.weeklyEdit.freeWord
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
              <TextEditor controlId="vacation" label="休暇予定" placeholder="2020/5/11(月) 休暇予定"/>
              <TextEditor controlId="weeklyOperation" label="今週の稼働" placeholder="40H"/>
              <TextEditor controlId="monthlyOperation" label="今月の稼働" placeholder="160H"/>
              <MarkdownEditor key="businessContact" controlId="businessContact"
                label="業務連絡" data={{key: "businessContact", ...props.businessContact}} clickEvent={props.onClick}/>
              <MarkdownEditor key="impression" controlId="impression"
                label="所感" data={{key: "impression", ...props.impression}} clickEvent={props.onClick}/>
              <MarkdownEditor key="freeWord" controlId="freeWord"
                label="自由記述" data={{key: "freeWord",...props.freeWord}} clickEvent={props.onClick}/>
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