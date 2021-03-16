import React from 'react';
import {connect} from 'react-redux';
import {monthly} from '../../../../redux/actions';
import MonthlyUserList from '../MonthlyUserList';

const mapStateProps = (state) => {
  return ({
    active: state.active,
    name: state.monthlyUserList.userName
  });
};

const MonthlyUserTop = (mapStateProps) => {
  return (
    <div>
      <h1>{mapStateProps.name}</h1>
      <MonthlyUserList/>
    </div>
  );
};

export default connect(
  mapStateProps,
  monthly
)(MonthlyUserTop);
