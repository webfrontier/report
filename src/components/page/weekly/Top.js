import React from 'react';
import WeeklySearch from '../../weekly/Search';
import Timeline from '../../Timeline';

const Weekly = () => {
  return (
    <div>
      <h1>週報トップ</h1>
      <WeeklySearch/>
      <Timeline/>
    </div>
  );
};

export default Weekly;