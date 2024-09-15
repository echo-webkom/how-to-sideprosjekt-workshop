import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos, toggleTodo, deleteTodo}) {

    return (
        <ul className="list">
            {todos.length === 0 && ""}
            {todos.map(todo => {
                //map loops through this code and returns the checkbox
                //retrieves elements from the state and returns it on the page
                //the key is unnecessary for the page to run but it is important to keep track of elements
                return (
                    <ToDoItem 
                    id = {todo.id} 
                    completed = {todo.completed} 
                    title = {todo.title} 
                    key = {todo.id}
                    toggleTodo = {toggleTodo}
                    deleteTodo = {deleteTodo}
                    />
                )
            })}
        </ul>
    )
}