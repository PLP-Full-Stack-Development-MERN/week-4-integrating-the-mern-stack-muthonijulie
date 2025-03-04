import React from 'react'

function TaskItem({ task, toggleComplete, deleteTask }) {
      if (!task) {
    return <p className="text-red-500">Error: Task data is missing.</p>; 
  }
  
  return (
    <li className={`flex flex-col p-3 bg-gray-100 rounded-md ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{task.title || "Untitled Task"}</h3>
          <p className="text-sm text-white-900">{task.description || "No description"}</p>
          <p className="text-xs text-white-900">Due: {task.dueDate || 'No due date'}</p>
          <p className={`text-xs ${task.status === 'completed' ? 'text-black-600' : 'text-gray-600'}`}>{task.status || 'Pending'}</p>
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={task.completed || false} 
            onChange={() => toggleComplete(task.id)} 
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <button 
            onClick={() => deleteTask(task.id)} 
            aria-label="Delete Task"
            className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
export default TaskItem
