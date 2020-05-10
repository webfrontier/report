import React from 'react';
import {connect} from 'react-redux';
import {weeklySearch} from '../../redux/actions';
import Search from "../Search"

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const WeeklySearch = ({mapStateProps}) => {
  return <Search isTarget="week" {...mapStateProps}/>
};

export default connect(
  mapStateProps,
  weeklySearch
)(WeeklySearch);