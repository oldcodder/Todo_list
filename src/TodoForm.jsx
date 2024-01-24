import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
        className="p-2 w-full md:w-80 lg:w-60 rounded-md md:my-2 lg:my-2 my-4"
      />
      <button type="submit" className=" px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-md bg-gradient-to-r from-purple-400 to-pink-600 text-white">Add Todo</button>
    </form>
  );
};

export default TodoForm;
