import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { id: '1', task: 'Walk the dog' },
    { id: '2', task: 'Water the plants' },
    { id: '3', task: 'Wash the dishes' },
  ]);

  const [input, setInput] = useState('');
  const createTodo = () => {
    if (!input) {
      alert('please input a value!');
    }

    const createdTodd = {
      id: todos.length + 1,
      task: input,
    };

    setTodos((todos) => [...todos, createdTodd]);
    setInput('');
  };

  const removeTodo = (targetTodoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== targetTodoId);
    setTodos(() => [...filteredTodos]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <button onClick={createTodo}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
