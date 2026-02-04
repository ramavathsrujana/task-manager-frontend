// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // // function App(){
// // //   return(
// // //     <div>
// // //       <h2> TASK MANAGER</h2>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import { useEffect, useState } from "react";
// // import API from "./api";

// // function App() {
// //   const [tasks, setTasks] = useState([]);
// //   const [title, setTitle] = useState("");

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const fetchTasks = async () => {
// //     const res = await API.get("/tasks/");
// //     setTasks(res.data);
// //   };

// //   const addTask = async () => {
// //     if (!title) return;
// //     await API.post("/tasks/", { title });
// //     setTitle("");
// //     fetchTasks();
// //   };

// //   const toggleTask = async (task) => {
// //     await API.put(`/tasks/${task.id}/`, {
// //       ...task,
// //       completed: !task.completed,
// //     });
// //     fetchTasks();
// //   };

// //   const deleteTask = async (id) => {
// //     await API.delete(`/tasks/${id}/`);
// //     fetchTasks();
// //   };

// //   return (
// //     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
// //       <h2>Task Manager</h2>

// //       <input
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         placeholder="Enter task"
// //       />
// //       <button onClick={addTask}>Add</button>

// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task.id}>
// //             {task.completed ? "✔ " : ""}
// //             {task.title}
// //             <button onClick={() => toggleTask(task)}>Done</button>
// //             <button onClick={() => deleteTask(task.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
//


// import { useEffect, useState } from "react";
// import API from "./api";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const res = await API.get("tasks/");
//     setTasks(res.data);
//   };

//   const addTask = async () => {
//     if (!title.trim()) return;
//     await API.post("tasks/", { title });
//     setTitle("");
//     fetchTasks();
//   };

//   const toggleTask = async (task) => {
//     await API.put(`tasks/${task.id}/`, {
//       ...task,
//       completed: !task.completed,
//     });
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await API.delete(`tasks/${id}/`);
//     fetchTasks();
//   };

//   return (
//     <div className="container">
//       <h2>Task Manager</h2>

//       <div className="input-group">
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter task"
//         />
//         <button onClick={addTask}>Add</button>
//       </div>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <span
//               className={`task-title ${
//                 task.completed ? "completed" : ""
//               }`}
//             >
//               {task.title}
//             </span>

//             <div className="actions">
//               <button onClick={() => toggleTask(task)}>Done</button>
//               <button onClick={() => deleteTask(task.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
//
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/api/tasks/"; 
// (later replace with Render URL)

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title, completed: false });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`${API_URL}${task.id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchTasks();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">📝 Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-text">No tasks yet. Add one 👆</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "task completed" : "task"}
            >
              <span onClick={() => toggleTask(task)}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


