import { useState } from "react";
import "./App.css";
import { Task } from "./Task";
import "./User.js";
//import { Person1 } from "./User.js";
function App() {
  const [toDolist, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      id: toDolist.length === 0 ? 1 : toDolist[toDolist.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setToDoList([...toDolist, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDolist.filter((task) => task.id !== id));
  };
  const CompleteTask = (id) => {
    const completed = toDolist.map((task) => {
      return task.id === id ? { ...task, complete: !task.complete } : task;
    });
    setToDoList([...completed]);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {toDolist.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              key={key}
              id={task.id}
              complete={task.complete}
              deleteTask={deleteTask}
              CompleteTask={CompleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
