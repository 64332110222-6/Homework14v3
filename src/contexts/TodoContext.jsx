import { createContext, useEffect, useState } from 'react';

const apiUrl = 'https://json-api-pcih.onrender.com/todos';
const TodoContext = createContext();

function TodoContextProvider(props) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false);
                console.log(data);
            });
    }, [trigger])

    const handleAdd = (newItem) => {
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => setTrigger(prv => !prv))
    }

    const handleEdit = (id, updatedData) => {
        fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => setTrigger(prv => !prv))
    }

    const handleDel = (id) => {
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => setTrigger(prv => !prv))
    }

    return (
        <TodoContext.Provider value={{
            todos: data, isLoading, handleAdd, handleEdit, handleDel,
            task: data?.length
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider };
export default TodoContext;