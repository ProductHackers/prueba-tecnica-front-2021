import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './assets/styles/application.scss'

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

