// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // function App(){
// //   return(
// //     <div>
// //       <h2> TASK MANAGER</h2>
// //     </div>
// //   );
// // }

// // export default App;


// import { useEffect, useState } from "react";
// import API from "./api";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const res = await API.get("/tasks/");
//     setTasks(res.data);
//   };

//   const addTask = async () => {
//     if (!title) return;
//     await API.post("/tasks/", { title });
//     setTitle("");
//     fetchTasks();
//   };

//   const toggleTask = async (task) => {
//     await API.put(`/tasks/${task.id}/`, {
//       ...task,
//       completed: !task.completed,
//     });
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await API.delete(`/tasks/${id}/`);
//     fetchTasks();
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>Task Manager</h2>

//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter task"
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.completed ? "✔ " : ""}
//             {task.title}
//             <button onClick={() => toggleTask(task)}>Done</button>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("tasks/");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("tasks/", { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await API.put(`tasks/${task.id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`tasks/${id}/`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>

      <div className="input-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={`task-title ${
                task.completed ? "completed" : ""
              }`}
            >
              {task.title}
            </span>

            <div className="actions">
              <button onClick={() => toggleTask(task)}>Done</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
