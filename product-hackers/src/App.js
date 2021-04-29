import React, {useState, useEffect} from 'react';
import Navigation from './layout/Navigation';
import MainContainer from './components/MainContainer';
import FormComponent from './components/FormComponent'
import Tasks from './components/Tasks';
import './App.css';

const App = () => {


  let initialTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!initialTasks) {
    initialTasks = [];
  };

  const [allTask, updateAllTasks] = useState(initialTasks);

  useEffect(() => {

    let initialTasks = JSON.parse(localStorage.getItem('tasks'));

    if (initialTasks) {
      localStorage.setItem('tasks', JSON.stringify(allTask))
    }
    else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [allTask])

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

