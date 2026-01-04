import { useState } from 'react'; // Importing useState hook from React
import './App.css';
import TodoList from './TodoList'; // Importing TodoList component
import TodoForm from './TodoForm'; // Importing TodoForm component

function App() {
  const [todoList, setTodoList] = useState([]); // State to hold the list of todos

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
