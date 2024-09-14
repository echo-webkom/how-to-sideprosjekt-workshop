export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
        <label>
            <input
                type="checkbox"
                checked={completed}
                //onChange combined with toggleToDo allows for the list to be checked and the boolean value to be flipped
                //item.target.checked returns a boolean value true if checked, false if unchecked.
                onChange={item => toggleTodo(id, item.target.checked)} />
            {title}
        </label>
        <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger">
            Delete</button>
    </li>

    )
}