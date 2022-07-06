import { useContext, useState } from "react";
import TodoContext from '../context/TodoContext';

function TodoInput() {
  const { addTodo } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState("");

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  };

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };

  return (
    <div>
      <label htmlFor="newTodo">
        Insira uma tarefa:
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          name="newTodo"
          id="newTodo"
        ></input>
      </label>
      <button onClick={handleClick}>Adicionar Tarefa</button>
    </div>
  );
}

export default TodoInput;
