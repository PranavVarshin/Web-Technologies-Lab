function TaskItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li>
            <span
                onClick={() => toggleTodo(todo)}
                style={{
                    textDecoration: todo.completed
                        ? "line-through"
                        : "none",
                    cursor: "pointer"
                }}
            >
                {todo.task}
            </span>

            <button onClick={() => deleteTodo(todo._id)}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;