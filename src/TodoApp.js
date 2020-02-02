import React from 'react';
import { Col, Row } from 'react-bootstrap'
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import './styles.css'

export default function TodoApp() {
  return (
    <Row>
      <Col sm={2} className="bg-danger">
        <Header/>
      </Col>
      <Col sm={10}>
        <div className="todo-app">
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </Col>
    </Row>
  );
}