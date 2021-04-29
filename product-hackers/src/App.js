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

  const [allTasks, updateAllTasks] = useState(initialTasks);

  useEffect(() => {

    let initialTasks = JSON.parse(localStorage.getItem('tasks'));

    if (initialTasks) {
      localStorage.setItem('tasks', JSON.stringify(allTasks))
    }
    else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [allTasks])


  //Adding new Tasks
  const addTask = task => {
    updateAllTasks([
      ...allTasks,
      task
    ])
  };

  //Delete Tasks
  function deleteTask(id) {
    const newTasksList = allTasks.filter(task => task.id !== id)
    updateAllTasks(newTasksList)
  }

  //Update Completed Tasks
  const completedTask = id => {

    let completed
    const taskDone = allTasks.map(elm => {
      completed = !elm.completed
      return elm.id === id ? { ...elm, completed: completed} : elm
    })
    updateAllTasks(taskDone)
  }

  //Favorites Tasks
  const favoritesTasks = id => {

    let favorite
    const favTask = allTasks.map(elm => {
      favorite = !elm.favorite
      return elm.id === id ? { ...elm, favorite: favorite } : elm
    })
    updateAllTasks(favTask)
  }

 
  return (
  <>
      <Navigation />
      <MainContainer />
      <FormComponent
        addTask={addTask}
      />
      {allTasks.map(taskList => (
        <Tasks
          taskList={taskList}
          deleteTask={deleteTask}
          completedTask={completedTask}
          favoritesTasks={favoritesTasks}
        />
      ))}
  </>   
  
  );
}
 
export default App;

