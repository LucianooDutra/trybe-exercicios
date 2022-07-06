import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
