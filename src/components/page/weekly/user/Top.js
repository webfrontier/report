import React from 'react';
import {connect} from 'react-redux';
import WeeklyUserList from '../../weekly/WeeklyUserList';
import {weekly} from '../../../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const WeeklyUserTop = (mapStateProps) => {
  return (
    <div>
      <h1>mapStateProps.name</h1>
      <WeeklyUserList/>
    </div>
  );
};

export default connect(
  mapStateProps,
  weekly
)(WeeklyUserTop);
