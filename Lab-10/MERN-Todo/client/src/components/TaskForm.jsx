function TaskForm({ newTodo, setNewTodo, addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() === "") {
            return;
        }

        addTodo();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a task"
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;