import React from 'react';
import {connect} from 'react-redux';
import {Jumbotron, Form, ToggleButtonGroup, ToggleButton, Button, Row, Col} from 'react-bootstrap';
import {monthlySearch} from '../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const MonthlySearch = ({mapStateProps}) => {
  return (
    <div className='page-body'>
      <Jumbotron>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>グループ</Form.Label>
            <Col sm={10}><Form.Control as="select">
              <option>A グループ</option>
              <option>B グループ</option>
              <option>C グループ</option>
              <option>D グループ</option>
            </Form.Control></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>氏名</Form.Label>
            <Col sm={10}><Form.Control type="text" placeholder="Name" /></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>対象月</Form.Label>
            <Col sm={10}><Form.Control as="select">
              <option>2019年10月</option>
              <option>2019年11月</option>
              <option>2019年12月</option>
              <option>2020年1月</option>
              <option>2020年2月</option>
            </Form.Control></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>使用した技術</Form.Label>
            <Col sm={10}><Form.Control type="text" placeholder="Git" /></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>担当した工程</Form.Label>
            <Col sm={10}><ToggleButtonGroup type="checkbox" className="mb-2">
              <ToggleButton value={1}>要件定義</ToggleButton>
              <ToggleButton value={2}>設計</ToggleButton>
              <ToggleButton value={3}>実装</ToggleButton>
              <ToggleButton value={4}>テスト</ToggleButton>
              <ToggleButton value={5}>運用保守</ToggleButton>
              <ToggleButton value={6}>分析</ToggleButton>
              <ToggleButton value={7}>研修</ToggleButton>
              <ToggleButton value={8}>構築</ToggleButton>
              <ToggleButton value={9}>障害対応</ToggleButton>
            </ToggleButtonGroup></Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            検索
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default connect(
  mapStateProps,
  monthlySearch
)(MonthlySearch);