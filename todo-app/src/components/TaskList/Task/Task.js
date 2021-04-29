//libraries imports
import React from 'react';

// local imports
import './Task.css';

function Task({ task, onTaskRemove, onTaskStore }) {

    const [done, setDone] = React.useState(false);

    const handleDone = () => {
        setDone(true);
    };

    const handleRemove = event => {
        onTaskRemove(event.target.name);
    }

    const handleStore = event => {
        onTaskStore(event.target.name);
    }

    return (
        <div className="card">
            <div className="card-content">
                {done ? 
                    <p className="title doit">
                    {task}
                    </p> :
                    <p className="title">
                    {task}
                    </p>
                }
            </div>
            <footer className="card-footer">
                <button className="card-footer-item button is-primary" onClick={handleDone}>
                <span>
                    Done!
                </span>
                </button>
                <button className="card-footer-item button is-danger" onClick={handleRemove} name={task}>
                <span>
                    Remove
                </span>
                </button>
                {done && 
                    <button className="card-footer-item button is-info" onClick={handleStore} name={task}>
                    <span>
                        Store
                    </span>
                    </button>
                }
            </footer>
        </div>
    );
}

export default Task;