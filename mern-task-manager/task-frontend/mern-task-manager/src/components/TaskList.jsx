import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-600 text-center">No tasks available. Add some tasks!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

