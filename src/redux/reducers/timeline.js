import {TIMELINE} from '../actionTypes';

const initialState = [
  {userName: '山田 太郎', targetDate: '2020年01月', date: '2020/01/02', tag: 'java'},
  {userName: '鈴木 一郎', targetDate: '2020年01月', date: '2020/01/02', tag: 'java'},
  {userName: '斎藤 隆', targetDate: '2020年01月', date: '2020/01/02', tag: 'java'},
  {userName: 'マイケル', targetDate: '2020年01月', date: '2020/01/02', tag: 'java'}
];

const timeline = (
  (state=initialState, action) => {
    switch (action.Type) {
      case TIMELINE: {
        return {
          ...state,
          timeline: action.timeline
        };
      }
      default:
        return state
    }
  }
);

export default timeline;