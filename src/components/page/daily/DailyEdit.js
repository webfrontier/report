import React from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import MarkdownEditor from '../../MarkdownEditor'
import DailyDatePicker from '../../editor/DailyDatePicker'
import WorkLocationSelect from '../../editor/WorkLocationSelect'
import TextEditor from '../../editor/TextEditor'
import {dailyEdit} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    title: state.dailyEdit.title,
    businessContact: state.dailyEdit.businessContact,
    tobusinessContact: state.dailyEdit.tobusinessContact,
    impression: state.dailyEdit.impression,
    freeWord: state.dailyEdit.freeWord
  }
}

const mapDispatchToProps = (dispatch) => (
  {onClick: (key, isPreview, value) => dispatch(dailyEdit(key, isPreview, value))}
);

const TargetDay = () => (
 <Form.Group as={Row}>
    <Form.Label column sm={2}>対象日</Form.Label>
    <Col sm={10}>
      <DailyDatePicker />
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

const DailyEdit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="page-body">
        <Card>
          <Card.Body>
            <Form>
              <TargetDay />
              <WorkLocation/>
              <TextEditor controlId="dailyWorkinghours" label="今日の勤務時間" placeholder="10H-19H"/>
              <TextEditor controlId="dailyOperation" label="今日の稼働" placeholder="8H"/>
              <MarkdownEditor key="businessContact" controlId="businessContact"
                label="本日の業務内容" data={{key: "businessContact", ...props.businessContact}} clickEvent={props.onClick}/>
                <MarkdownEditor key="tobusinessContact" controlId="tobusinessContact"
                label="明日の業務内容" data={{key: "tobusinessContact", ...props.tobusinessContact}} clickEvent={props.onClick}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyEdit)