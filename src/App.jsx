import './App.css';
import TodoList from './TodoList'; // Importing TodoList component
import TodoForm from './TodoForm'; // Importing TodoForm component

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
