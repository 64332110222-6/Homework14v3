import useTodo from '../hooks/useTodo'

function DashBoard() {
  const { task } = useTodo();

  return (
    <div className="dashboard">
      <h3>{new Date().toDateString()}</h3>
      {task > 1 ? <p> {task} Tasks </p> : <p> {task} Task </p>}
    </div>
  )
}

export default DashBoard;