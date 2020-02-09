import React from 'react';
import {connect} from 'react-redux';
import Notice from './Notice';
import Timeline from './Timeline';

export default function Top() {
  return (
    <div>
      <Notice/>
      <Timeline/>
    </div>
  );
}

