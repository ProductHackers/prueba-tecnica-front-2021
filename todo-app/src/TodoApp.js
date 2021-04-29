import React, { useState } from "react";
import TodoAppItem from "./components/TodoAppItem";

const TodoApp = () => {
  const [titleTask, setTitleTask] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  const handleAddTask = () => {
    if (titleTask === "") {
      return;
    }

    setTodoList([...todoList, { title: titleTask }]);
    localStorage.setItem(
      "todolist",
      JSON.stringify([...todoList, { title: titleTask }])
    );
    setTitleTask("");
  };

  const handleDeleteTask = (index) => {
    let alltaks = todoList;

    alltaks.splice(index, 1);

    setTodoList([...alltaks]);
    localStorage.setItem("todolist", JSON.stringify([...alltaks]));
  };

  const handleFinishTask = (index) => {
    let alltaks = todoList;

    alltaks[index].finish = true;
    localStorage.setItem("todolist", JSON.stringify([...alltaks]));
    setTodoList([...alltaks]);
  };

  const handleLikeTask = (index) => {
    let alltaks = todoList;
    if (alltaks[index].like === true) {
      alltaks[index].like = false;
    } else {
      alltaks[index].like = true;
    }

    localStorage.setItem("todolist", JSON.stringify([...alltaks]));
    setTodoList([...alltaks]);
  };

  return (
    <main>
      <div className="c-todoapp">
        <h1 className="c-todoapp__title">Todo App</h1>
        <div className="c-todoapp__container">
          <div className="c-todoapp__box-input">
            <input
              className="c-todoapp__input"
              type="text"
              value={titleTask}
              placeholder="Title task.."
              onChange={(e) => setTitleTask(e.currentTarget.value)}
            />
            <button
              className="c-todoapp__button"
              onClick={() => handleAddTask()}
            >
              Create Task
            </button>
          </div>
          <TodoAppItem
            todoList={todoList}
            handleDeleteTask={(index) => handleDeleteTask(index)}
            handleLikeTask={(index) => handleLikeTask(index)}
            handleFinishTask={(index) => handleFinishTask(index)}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoApp;
