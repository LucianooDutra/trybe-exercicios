import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoProvider from './components/TodoProvider';

function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodo = (newTodo) => {
  //   setTodos(todos.concat(newTodo))
  // };

  return (
    <TodoProvider>
      <div>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
