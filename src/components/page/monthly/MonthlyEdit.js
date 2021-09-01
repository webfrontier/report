import React from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Button, Card} from 'react-bootstrap'
import MarkdownEditor from '../../MarkdownEditor'
import MonthlyDatePicker from '../../editor/MonthlyDatePicker'
import TextEditor from '../../editor/TextEditor'
import TagEditor from '../../editor/TagEditor'
import {monthlyEdit, monthlyEditDeleteTag, monthlyEditInputTag} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    title: state.monthlyEdit.title,
    projectOutline: state.monthlyEdit.projectOutline,
    businessContent: state.monthlyEdit.businessContent,
    check: state.monthlyEdit.check,
    target: state.monthlyEdit.target,
    registTags: state.monthlyEdit.registTags,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (key, isPreview, value) => dispatch(monthlyEdit(key, isPreview, value)),
    deleteTag: (tags, index) => dispatch(monthlyEditDeleteTag(tags, index)),
    inputTagEvent: (tags, e) => dispatch(monthlyEditInputTag(tags, e)),
  }

);

const TargetMonth = () => (
 <Form.Group as={Row}>
    <Form.Label column sm={2}>対象月</Form.Label>
    <Col sm={10}>
      <MonthlyDatePicker />
    </Col>
  </Form.Group>
);

const MonthlyEdit = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="page-body">
        <Card>
          <Card.Body>
            <Form>
              <TargetMonth />
              <TagEditor controlId="tags" label="タグ" placeholder="Git" registTags={props.registTags} clickEvent={props.deleteTag} inputEvent={props.inputTagEvent}/>
              <TextEditor controlId="members" label="チーム体制" placeholder="10名（プロパ: 5名、パートナー:5名(自社:3名))"/>
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