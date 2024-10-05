import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number, newText: string) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, text: newText } : todo));
    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return false;
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white rounded shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Todo List App</h1>

        <div className="flex mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button onClick={addTodo} className="px-4 py-2 ml-4 text-white bg-blue-500 rounded hover:bg-blue-600">
            Add
          </button>
        </div>

        {/* Todo List */}
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />

        {/* Filters */}
        <div className="flex justify-between mt-6">
          <div>
            <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setFilter('Active')} className={`ml-2 px-3 py-1 rounded ${filter === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              Active
            </button>
            <button onClick={() => setFilter('Completed')} className={`ml-2 px-3 py-1 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              Completed
            </button>
          </div>
          <button onClick={clearCompletedTodos} className="px-4 py-2 text-white bg-red-500 rounded">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
