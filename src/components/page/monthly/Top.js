import React from 'react';
import {connect} from 'react-redux';
import MonthlySearch from '../../monthly/Search';
import Timeline from '../../Timeline';
import {monthly} from '../../../redux/actions';

const mapStateProps = (state) => {
  return ({
    active: state.active
  });
};

const Monthly = () => {
  return (
    <div>
      <h1>月報トップ</h1>
      <MonthlySearch/>
      <Timeline/>
    </div>
  );
};

export default Monthly;
// export default connect(
//   mapStateProps,
//   monthly
// )(Monthly);