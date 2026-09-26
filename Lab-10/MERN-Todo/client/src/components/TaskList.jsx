import TaskItem from "./TaskItem";

function TaskList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TaskItem
                    key={todo._id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

export default TaskList;