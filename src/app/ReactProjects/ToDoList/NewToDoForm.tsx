import { useState } from "react"

interface NewToDoFormProps {
  onSubmit: (newItem: string) => void;
}

export function NewToDoForm(props: NewToDoFormProps) {

  //setState is a function that lets you update the state.
  const [newItem, setNewItem] = useState("")

  function handleSubmit(item: React.FormEvent<HTMLFormElement>) {
    //prevents refreshing the page after clicking the button
    item.preventDefault();
    if (newItem === "") return

    props.onSubmit(newItem)

    //blanks the input field after item is add is clicked
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form card">
      <p>Based on {" "}
        <a href="https://www.youtube.com/watch?v=Rh3tobg7hEo" target="_blank" rel="noopener noreferrer" className="link">this</a> tutorial 🙌</p>
      <div className="form-row">

        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          //this allows the text field to be updated 
          onChange={item => setNewItem(item.target.value)}
          type="text"
          id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}