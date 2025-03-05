import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import axios from "axios";
import "./styles/app.css";

const API_URL = "http://localhost:3000/task"; 

function App() {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchTasks();
  }, []);


  async function addTask(newTask) {
    if (!newTask||!newTask.title?.trim()){
      console.error("Error:Task title is missing!");
    return;
    }
    try {
      const response = await axios.post(API_URL, newTask, {
        headers: { "Content-Type": "application/json" },
      });
      setTasks((prevTasks) => [...prevTasks, response.data]); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

const deleteTask = async (id) => {
    console.log("Task ID to delete:", id); 

    if (!id) {
        console.error("Error: Task ID is undefined!");
        return;
    }

    try {
        await axios.delete(`http://localhost:3000/task/${id}`);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};

  const  toggleComplete=async(task)=>{
    
    if (!task||!task._id) return;

    const updatedTask = { ...task, completed: !task.completed, status: !task.completed ? "completed" : "pending" };

    try {
      const response = await axios.put(`${API_URL}/${task._id}`, updatedTask, {
        headers: { "Content-Type": "application/json" },
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === task._id ? response.data : task)) 
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  return (
    <div className="w-396 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Task Manager</h1>
      <TaskForm addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No tasks available.</p>
      ) : (
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
