import React, { useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  index: number;
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newText: string) => void;
}

interface Todo {
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-1 border rounded"
        />
      ) : (
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
      )}
      <div className="space-x-2">
        {isEditing ? (
          <button
            className="px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded"
            onClick={() => {
              editTodo(index, editText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="px-2 py-1 text-sm font-semibold text-white bg-yellow-400 rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className={`px-2 py-1 text-sm font-semibold rounded ${todo.completed ? 'bg-yellow-400' : 'bg-green-500 text-white'}`}
          onClick={() => toggleComplete(index)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
