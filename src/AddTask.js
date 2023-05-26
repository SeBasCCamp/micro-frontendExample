import React, { useState } from 'react';

const AddTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onTaskAdded(task);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Ingrese una tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
};

export default AddTask;