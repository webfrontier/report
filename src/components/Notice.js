import React from 'react';
import {connect} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {notice} from '../redux/actions';

const mapStateToProps = state => ({
  notices: state.notice,
  location: state.router.location
});

const Notice = ({notices, notice}) => {
  return (
    <div className="page-body">
      <h3>お知らせ</h3>
      <ListGroup>
        {
          notices.map((data) =>
            <ListGroup.Item key={data.title}>{data.date}  {data.title}</ListGroup.Item>
          )
        }
      </ListGroup>
      <a className="float-right" href="#">お知らせ一覧はこちら</a>
    </div>
  );
};

export default connect(mapStateToProps, notice)(Notice);