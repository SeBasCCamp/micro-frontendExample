import React from 'react';

const TaskList = () => {
  const tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;