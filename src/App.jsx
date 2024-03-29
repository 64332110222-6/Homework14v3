import TodoApp from "./TodoApp"
import { TodoContextProvider } from "./contexts/TodoContext"

function App() {

  return (
    <div className="app">
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  )
}

export default App
