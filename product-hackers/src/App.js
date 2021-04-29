import React, {useState} from 'react';
import Navigation from './layout/Navigation';
import MainContainer from './components/MainContainer';
import FormComponent from './components/FormComponent'
import Tasks from './components/Tasks';
import './App.css';

const App = () => {

  const [allTask, updateAllTasks] = useState([]);

  const addTask = task => {
    updateAllTasks([
      ...allTask,
      task
    ])
  }

  return (
  <>
      <Navigation />
      <MainContainer />
      <FormComponent
        addTask={addTask}
      />
      {allTask.map(taskList => (
        <Tasks
          taskList={taskList}
        />
      ))}
  </>   
  
  );
}
 
export default App;

