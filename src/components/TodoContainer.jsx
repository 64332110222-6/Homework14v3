import TodoItem from "./TodoItem"
import TodoEditForm from './TodoEditForm'
import useTodo from '../hooks/useTodo'
import { useState } from "react";

function TodoContainer() {
  const { todos } = useTodo();
  const [editId, setEditId] = useState(-1);

  return (
    <div className="todo-container">
      {todos.map(el => ((el.id === editId)
        ? <TodoEditForm
          key={el.id}
          data={el}
          completed={() => setEditId(-1)}
        />
        : <TodoItem
          key={el.id}
          data={el}
          setEditId={setEditId}
        />))}
    </div>
  )
}

export default TodoContainer