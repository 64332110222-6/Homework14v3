import React, { useState } from "react";

const FormEditTodo = (props) => {
  const { hdlEdit, jobID } = props;
  const [input, setInput] = useState('');

  const hdlEditClick = () => {
    return (
      <form className="form-edit-todo" onSubmit={hdlEditSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    );
  };


  const hdlEditSubmit = (e) => {
    e.preventDefault();
    let editJob = { todo: input, completed: false, user: 1 };
    hdlEdit(editJob, jobID);
  };

  return (
    <form className="form-edit-todo" onSubmit={hdlEditClick}>
      <button type="submit">Edit</button>
    </form>
  );
};

export default FormEditTodo;
