import React from 'react'
import TaskItem from './TaskItem';

function TaskList({tasks,toggleComplete,deleteTask}) {
  if (!tasks){
    return <p>No tasks available </p>
  }
    return (
     <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  )
}

export default TaskList
