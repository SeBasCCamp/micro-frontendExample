import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = () => {
  return (
    <div className="App">
      <TaskList />
      <AddTask onTaskAdded={handleTaskAdded} />
    </div>
  );
};

const handleTaskAdded = (task) => {
  console.log(`Nueva tarea agregada: ${task}`);
};

export default App;