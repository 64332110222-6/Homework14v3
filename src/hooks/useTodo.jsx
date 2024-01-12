import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

function useTodo() {
    return useContext(TodoContext);
}

export default useTodo;