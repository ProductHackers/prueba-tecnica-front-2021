import React from "react";

const TodoAppItem = (props) => {
  return (
    <ul className="c-todoapp__list">
      {props.todoList !== null &&
        props.todoList.length > 0 &&
        props.todoList.map((item, index) => {
          return (
            <li key={index} className="c-todoapp__list-item">
              <p
                className={
                  item.finish
                    ? "c-todoapp__list-item-text c-todoapp__list-item-text--line"
                    : "c-todoapp__list-item-text"
                }
              >
                {item.title}
              </p>
              <button
                className="c-todoapp__list-item-button"
                onClick={() => props.handleDeleteTask(index)}
              >
                <i className="fas fa-trash-alt c-todoapp__icon"></i>
              </button>
              <button
                className="c-todoapp__list-item-button"
                onClick={() => props.handleLikeTask(index)}
                disabled={item.finish}
              >
                <i
                  className={
                    item.like
                      ? "fas fa-heart c-todoapp__icon c-todoapp__icon--red"
                      : "fas fa-heart c-todoapp__icon"
                  }
                ></i>
              </button>
              <button
                className="c-todoapp__list-item-button"
                onClick={() => props.handleFinishTask(index)}
                disabled={item.finish}
              >
                <i className="far fa-check-circle c-todoapp__icon"></i>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoAppItem;
