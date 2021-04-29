import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// local imports
import storage from '../src/utils/storage.js';

const tasks = storage.get('tasks') || [];

ReactDOM.render(
  <React.StrictMode>
    <App initialTasks={tasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
