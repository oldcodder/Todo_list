import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600 text-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8">Todo App</h1>
      <div className="bg-white p-4 md:p-6 lg:p-8 rounded-md shadow-md w-full md:w-96 lg:w-120">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default App;
