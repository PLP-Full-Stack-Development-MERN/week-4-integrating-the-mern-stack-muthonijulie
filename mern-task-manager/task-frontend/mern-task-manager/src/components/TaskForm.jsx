import React,{useState} from 'react'

function TaskForm(addTask) {

  const [task, setTask] = useState({})
  

  function handleSubmit(e){
    e.preventDefault()
    if (task.title.trim()) {
      addTask([ { 
        title: task.title, 
        description: task.description, 
        status: task.status, 
        dueDate: task.dueDate, 
      }])
      setTask({ title: '', description: '', status: 'pending', dueDate: '' })
    }
  }


  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-blue shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task Title"
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Task Description"
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

 

export default TaskForm
