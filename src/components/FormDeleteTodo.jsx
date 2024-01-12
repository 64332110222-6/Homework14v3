
const FormDeleteTodo = (props) => {
  const { hdlDelete, jobID } = props;

  const hdlDelSubmit = (e) => {
    e.preventDefault();
    console.log('ID', jobID)
    hdlDelete(jobID);
  };

  return (
    <form className="form-del-todo" onSubmit={hdlDelSubmit}>
      <button type="submit">Delete</button>
    </form>
  );
};

export default FormDeleteTodo;

