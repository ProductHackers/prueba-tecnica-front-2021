// local imports
import { TaskPage } from './components/TaskList';
import './App.css';

function App({ initialTasks }) {
  return (
    <div className="App">
      <TaskPage initialTasks={initialTasks}/>
    </div>
  );
}

export default App;
