import { useState } from "react";
import useTodo from "../hooks/useTodo";

function TodoEditForm(props) {
    const { data, completed } = props;
    const { handleEdit } = useTodo();
    const [input, setInput] = useState(data.todo);
    const [check, setCheck] = useState(data.completed);

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedData = { todo: input, completed: check }
        handleEdit(data.id, updatedData);
        completed();
    }

    return (
        <form className="todo-edit-form" onSubmit={handleSubmit}>
            <div className="input-check">
                <input type="checkbox" value={check} checked={check}
                    onChange={() => setCheck(prv => !prv)} />
                <input className="input-input" type="text" value={input}
                    onChange={e => setInput(e.target.value)} />
            </div>
            <div className="btn-save-cancle">
                <button className="btn-save" type="submit">Save</button>
                <button className="btn-cancle" type="reset" onClick={completed}>Cancle</button>
            </div>
        </form>
    )
}

export default TodoEditForm;