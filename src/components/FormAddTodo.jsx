import useTodo from '../hooks/useTodo'
import { useState } from "react";

function FormAddTodo() {
  const { handleAdd } = useTodo();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      todo: input.trim() != '' ? input.trim() : "(Empty!)",
      completed: false,
      userId: null
    };
    handleAdd(newItem);
  }

  return (
    <form className="form-add-todo" onSubmit={handleSubmit} >
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default FormAddTodo