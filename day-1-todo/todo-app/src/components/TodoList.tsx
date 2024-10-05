import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newText: string) => void; // Include the editTodo prop
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass editTodo to each item
        />
      ))}
    </div>
  );
};

export default TodoList;
