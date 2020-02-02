import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Container } from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/brands.min.css';
import './css/solid.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import store from './redux/store'
import App from './App'
//import TodoApp from './TodoApp'

library.add(fas);
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Container fluid={true}>
      <App/>
    </Container>
  </Provider>,
  rootElement
)