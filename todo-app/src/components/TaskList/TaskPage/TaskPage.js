// libraries imports
import React from 'react';

// local imports
import TaskList from '../TaskList';
import { Layout } from '../../Layout';
import storage from '../../../utils/storage.js';
import './TaskPage.css';

function TaskPage({ initialTasks }) {

    const [tasks, setTasks] = React.useState(initialTasks);
    const [newTask, setNewTask] = React.useState([]);
    const [storedTask, setStoredTask] = React.useState([]);

    const onTaskRemove = task => {
        const index = tasks.indexOf(task);        
        tasks.splice(index, 1);
        setTasks(tasks => {
            return [
                ...tasks
            ];
        });
        storage.set('tasks', tasks);
    };

    const onNewTask = event => {
        event.preventDefault();
        setTasks(tasks => {
            return [
                ...tasks,
                newTask
            ];
        });
        setNewTask('');
        storage.set('tasks', [...tasks, newTask]);
    };

    const onTaskStore = task => {
        setStoredTask(tasks);
        onTaskRemove(task);
    };

    const handleChange = event => {
        setNewTask(event.target.value);
    };

    return (
        <div>
            <Layout>
                <TaskList tasks={tasks} onTaskRemove={onTaskRemove} onTaskStore={onTaskStore}/>
                <form className='new-task' onSubmit={onNewTask}>
                    <input className='input' name='task' value={newTask} onChange={handleChange}></input>
                    <button className='button is-primary'>New Task</button>
                </form>
                
            </Layout>
        </div>
    );
}

export default TaskPage;