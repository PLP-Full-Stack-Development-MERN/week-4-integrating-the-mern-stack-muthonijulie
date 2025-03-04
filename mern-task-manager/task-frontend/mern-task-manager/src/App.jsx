import React,{useState,useEffect} from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import "./styles/app.css";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (Array.isArray(savedTasks)) {
        setTasks(savedTasks);
      } else {
        setTasks([]); 
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  function addTask(text) {
    if (!text.trim()) return; 
    const newTask = { 
      id: Date.now(), 
      text, 
      completed: false, 
      createdAt: new Date().toLocaleString(),
      status: "pending" // Ensure a status is set
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }


  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, status: task.completed ? "pending" : "completed" } : task
      )
    );
  }

  return (
<div className="w-396 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 p-6">
  <div className="bg-black shadow-xl rounded-lg p-8 w-full max-w-lg">
    <h1 className="text-3xl font-bold text-white-900 text-center mb-6">Task Manager</h1>
    <TaskForm addTask={addTask} />
    {tasks.length === 0 ? (
      <p className="text-gray-500 text-center mt-4">No tasks available.</p>
    ) : (
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    )}
  </div>
</div>
  )
}

export default App
