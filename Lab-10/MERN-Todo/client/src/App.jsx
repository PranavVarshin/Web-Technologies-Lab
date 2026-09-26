import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const fetchTodos = async () => {
        const response = await fetch("http://localhost:5000/api/todos");
        const data = await response.json();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (newTodo.trim() === "") return;

        const response = await fetch(
            "http://localhost:5000/api/todos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task: newTodo
                })
            }
        );

        const data = await response.json();

        setTodos([...todos, data]);
        setNewTodo("");
    };

    const toggleTodo = async (todo) => {
        const response = await fetch(
            `http://localhost:5000/api/todos/${todo._id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            }
        );

        const updatedTodo = await response.json();

        setTodos(
            todos.map((item) =>
                item._id === updatedTodo._id
                    ? updatedTodo
                    : item
            )
        );
    };

    const deleteTodo = async (id) => {
        await fetch(
            `http://localhost:5000/api/todos/${id}`,
            {
                method: "DELETE"
            }
        );

        setTodos(
            todos.filter((todo) => todo._id !== id)
        );
    };

    return (
        <div className="container">
            <h1>MERN Todo Application</h1>

            <p className="subtitle">
                React + Express + MongoDB
            </p>

            <TaskForm
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTodo={addTodo}
            />

            <TaskList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;