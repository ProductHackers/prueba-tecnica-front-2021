import React, {useState} from 'react';
import Navigation from './layout/Navigation';
import MainContainer from './components/MainContainer';
import FormComponent from './components/FormComponent'
import './App.css';

const App = () => {

  const [allTask, updateAllTask] = useState([]);

  const addTask = task => {
    updateAllTask(task)
  }

  return (
  <>
      <Navigation />
      <MainContainer />
      <FormComponent
        addTask={addTask}
      />
  </>   
  
  );
}
 
export default App;

