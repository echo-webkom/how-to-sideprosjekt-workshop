//This ToDO List was created based on this tutorial: https://www.youtube.com/watch?v=Rh3tobg7hEof

//use client is necessary for NextJS to not throw a hissy fit
"use client"

import { useState } from "react"
import { NewToDoForm } from "./NewToDoForm"
import { ToDoList } from "./ToDoList"


export default function ToDoListPage() {


  //HOOKS IN REACT HAVE TO BE CALLED AT THE TOP OF THE FUNCTION

  //syntax of useState: const [state, setState] = useState(initialState);

  //state is the current state value 

  //when this function is called, React schedules a re-render of the component, applying the new state

  //initialState is the initial value of the state
  //without the types: useState([]) shows that the useState initalizes with an empty array which will be used to store the elements


  //reads through local storage and finds ITEMS and if it is not empty it returns it
  const [todos, setTodos] = useState<{ id: string; title: string; completed: boolean; }[]>([])
  //this updates the state of the todo list
  //currentTodos are retrieved from the useState hook declared above
  //When you call setTodos with a function, React will automatically pass the current state as an argument to that function. 
  //This is why you see currentTodos as a parameter in the function you provide to setTodos.
  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(toggleId: string, isCompleted: boolean) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === toggleId) {
          return { ...todo, completed:isCompleted }
        }

        return todo
      })
    })
  }

 

  function deleteTodo(idToDelete: string) {
    setTodos(currentTodos => {
      //filter returns everything that fulfills the condition
      //in this case, return everything that does not have the idToDelete value
      return currentTodos.filter(todo => todo.id !== idToDelete)
    })
  }

  console.log(todos)

  return (
    //upon clicking the button, the onSubmit event listener triggers the handleSubmit method
    <div>

      <NewToDoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>

      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

    </div>
    
  )
}
