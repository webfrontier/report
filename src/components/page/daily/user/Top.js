import React from 'react';
import {connect} from 'react-redux';
import DailySearch from '../../daily/DailyUserList';
import {daily} from '../../../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const DailyUserTop = (mapStateProps) => {
  return (
    <div>
      <h1>mapStateProps.name</h1>
      <DailyUserList/>
    </div>
  );
};

export default connect(
  mapStateProps,
  daily
)(Daily);