import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import configureStore from './redux/store';
import App from './App';

const store = configureStore(/* provide initial state if any */);

library.add(fas);
const rootElement = document.getElementById('root');
ReactDOM.render((
  <Provider store={store}>
    <Container fluid={true}>
      <App/>
    </Container>
  </Provider>),
  rootElement
);