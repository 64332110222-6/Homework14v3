/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'http://localhost:8000/todos'

  useEffect(() => {
    setIsLoading(true)
    fetch(apiUrl).then(res => res.json())
      .then(dat => {
        console.log(dat)
        setData(dat)
        setIsLoading(false)
      })
  }, [trigger])

  const hdlAdd = (newJob) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    }).then(res => res.json())
      .then(rs => {
        console.log(rs[0])
        setTrigger(prv => !prv)
      })
  }

  if (isLoading) {
    return (<h1>Loading...</h1>)
  }

  return (
    <div className="todo-app">
      <Dashboard task={data} />
      <FormAddTodo hdlAdd={hdlAdd} />
      <TodoContainer todos={data} />
    </div>
  )
}

export default TodoApp