import {NOTICE} from '../actionTypes';

const initialState = [
  {date: "2020/01/26", title:　"Non voluptatem voluptatibus aut dolore."},
  {date: "2020/01/25", title: "Tempora iste quibusdam ea et reprehenderit qui illo fugit."},
  {date: "2020/01/24", title: "Quidem quas reiciendis exercitationem aut dolorem est asperiores distinctio."},
  {date: "2020/01/23", title: "Est numquam velit asperiores et exercitationem quod voluptatibus hic."}
];

const notice = (
  (state=initialState, action) => {
    switch (action.Type) {
      case NOTICE: {
        return {
          ...state,
          notices: action.notices
        };
      }
      default:
       return state
    }
  }
);

export default notice;