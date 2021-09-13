import React from 'react';
import {connect} from 'react-redux';
import {dailySearch} from '../../redux/actions';
import Search from "../Search"

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const DailySearch = ({mapStateProps}) => {
  return <Search isTarget="day" {...mapStateProps}/>
};

export default connect(
  mapStateProps,
  dailySearch
)(DailySearch);