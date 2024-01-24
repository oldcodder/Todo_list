import React from 'react';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul className="list-disc ml-4">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2 flex items-center">
          <span className="flex-grow">{todo.task}</span>
          <button className="ml-2 px-3 py-2 rounded-md bg-gradient-to-r from-red-400 to-red-700 text-white" onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button className="ml-2 px-3 py-2 rounded-md bg-gradient-to-r from-green-400 to-green-700 text-white"
            onClick={() => {
              const newTask = prompt('Edit task:', todo.task);
              if (newTask !== null) {
                updateTodo(todo.id, newTask);
              }
            }}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
