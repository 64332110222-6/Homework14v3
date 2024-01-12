import DashBoard from './components/Dashboard'
import FormAddTodo from './components/FormAddTodo'
import TodoContainer from './components/TodoContainer'
import useTodo from './hooks/useTodo'

function TodoApp() {
    const { isLoading } = useTodo();
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div class="todo-app">
                <DashBoard />
                <FormAddTodo />
                <TodoContainer />
            </div>
            <div className="git-repo">
                <a href="https://github.com/64332110222-6/Homework14" target="_blank">My repo...</a>
            </div>
        </>
    );
}

export default TodoApp;