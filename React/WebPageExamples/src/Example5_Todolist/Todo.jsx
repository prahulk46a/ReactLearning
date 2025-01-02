import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>
      <div className="flex items-center w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md mt-6 space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-md shadow-sm ${
              todo.completed
                ? "bg-green-100 line-through text-gray-500"
                : "bg-white"
            }`}
          >
            <span
              onClick={() => toggleComplete(index)}
              className="flex-grow cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(index);
              }}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
