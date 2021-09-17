import React from 'react';
import {connect} from 'react-redux';
import DailySearch from '../../daily/Search';
import Timeline from '../../Timeline';
import {daily} from '../../../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const Daily = (mapStateProps) => {
  return (
    <div>
      <h1>月報トップ</h1>
      <DailySearch/>
      <Timeline/>
    </div>
  );
};

export default connect(
  mapStateProps,
  daily
)(Daily);