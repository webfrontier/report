import React from 'react';
import {connect} from 'react-redux';
import {ListGroup, Badge} from 'react-bootstrap';
import {timeline} from '../redux/actions';

const mapStateToProps = (state) => {
  return {reports: state.timeline}
};

const Timeline = ({reports, timeline}) => {
  return (
    <div className='page-body'>
      <h3>最近投稿された月報</h3>
      <ListGroup>
        {
          reports.map((report) =>
            <ListGroup.Item action href="#" key={report.userName}>
              {report.userName} {report.targetDate}分　
              <small className="text-muted">投稿日: {report.date}  </small>
              <div className="float-right"><Badge variant="success">{report.tag}</Badge></div>
            </ListGroup.Item>
          )
        }
      </ListGroup>
      <a className="float-right" href="/monthly/100">月報一覧はこちら</a>
    </div>
  );
};

export default connect(mapStateToProps, timeline)(Timeline);