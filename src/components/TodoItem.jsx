import useTodo from "../hooks/useTodo";

function TodoItem(props) {
  const { data, setEditId } = props;
  const { handleDel } = useTodo();

  const onDelete = () => {
    confirm('คุณต้องการลบหรือไม่') ? handleDel(data.id) : null;
  }

  return (
    <div className="todo-item">
      <p className={data.completed ? 'data-completed' : null}>{data.todo}</p>
      <div className="btn-edit-delete">
        <a className="btn-edit" onClick={() => { setEditId(data.id) }}>Edit</a>
        <a className="btn-delete" onClick={onDelete}>Delete</a>
      </div>
    </div>
  )
}

export default TodoItem;
