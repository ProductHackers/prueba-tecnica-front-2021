// local imports
import Task from '../Task';
import './TaskList.css';

function TaskList({ tasks, onTaskRemove, onTaskStore }) {

    return (
        <div className='task-list'>
            {tasks.map(task => {
                return (
                    <Task task={task} onTaskRemove={onTaskRemove} onTaskStore={onTaskStore}/>
                );
            })}
        </div>
    );
}

export default TaskList;