import React, { useState, useEffect, useRef } from "react";
import Task from "./Task";
import { AiFillCloseCircle } from "react-icons/ai";
import "./todo.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/taskSlice";

export default function Todo({ setTasks }) {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([{ task: "", date: "" }]);

  useEffect(() => {
    setTodos([]);
    let app = document.querySelector(".todo-app");
    let header = document.querySelector(".todo-app .todo-header");

    function onDrag({ movementX, movementY }) {
      let style = window.getComputedStyle(app);
      let left = parseInt(style.left);
      let top = parseInt(style.top);
      app.style.top = `${top + movementY}px`;
      app.style.left = `${left + movementX}px`;
    }

    header.addEventListener("mousedown", () => {
      header.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
      header.removeEventListener("mousemove", onDrag);
    });

    return () => {
      header.removeEventListener("mousedown", () => {
        header.addEventListener("mousemove", onDrag);
      });
      document.removeEventListener("mouseup", () => {
        header.addEventListener("mousemove", onDrag);
      });
    };
  }, []);

  function handleNewTask() {
    if (newTask.length !== 0) {
      setTodos([{ task: newTask, date: Date().toLocaleString() }, ...todos]);
      setNewTask("");
    }
  }

  return (
    <div className="todo-app" style={{ zIndex: tasks.indexOf("todo") + 1 }}>
      <div className="todo-header">
        <span>TodoList App</span>
        <div className="close-btn" onClick={() => dispatch(removeTask("todo"))}>
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="new-task">
        <input
          placeholder="New Task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          onKeyDown={(e) => {
            e.code == "Enter" && handleNewTask();
          }}
        />
        <button onClick={handleNewTask}>Add Todo</button>
      </div>
      <div className="list">
        {todos.map((todo, i) => (
          <Task task={todo} key={i} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
