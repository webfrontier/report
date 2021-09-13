import React from 'react';
import {connect} from 'react-redux';
import MonthlySearch from '../../monthly/MonthlyUserList';
import {monthly} from '../../../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const MonthlyUserTop = (mapStateProps) => {
  return (
    <div>
      <h1>mapStateProps.name</h1>
      <MonthlyUserList/>
    </div>
  );
};

export default connect(
  mapStateProps,
  monthly
)(monthly);
