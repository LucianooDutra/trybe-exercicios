import { useState } from 'react';
import TodoContext from '../context/TodoContext';

// const INITIAL_STATE = {
//   name: "Arthur",
// };

function TodoProvider({ children }) {
  // [state, setState]
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
    // setTodos((oldState) => [...oldState, newTodo]);
  };

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
      </TodoContext.Provider>
    </main>
  )
}
export default TodoProvider;
