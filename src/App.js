import React from 'react';
import { connect } from 'react-redux';

import TodoApp from './TodoApp';
import Login from './components/Login';
//import {login} from './redux/actions';

const mapStateToProps = state => {
  return {loginState: state.login};
};

const App = ({loginState}) => {
  return (
    <div>
      {
        loginState ? <TodoApp/> : <Login/>
      }
    </div>
  );
};

export default connect(
  mapStateToProps
)(App)