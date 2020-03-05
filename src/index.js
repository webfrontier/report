import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
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
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Container>
  </Provider>),
  rootElement
);