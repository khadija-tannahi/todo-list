import { useState } from 'react'; // Importing useState hook from React
import './App.css';
import TodoList from './TodoList'; // Importing TodoList component
import TodoForm from './TodoForm'; // Importing TodoForm component

function App() {
  const [newTodo, setNewTodo] = useState('example todo'); // State to manage new todo input
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
