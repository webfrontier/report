import React from 'react';
import {connect} from 'react-redux';
import {monthlySearch} from '../../redux/actions';
import Search from "../Search"

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const MonthlySearch = ({mapStateProps}) => {
  return <Search isTarget="month" {...mapStateProps}/>
};

export default connect(
  mapStateProps,
  monthlySearch
)(MonthlySearch);