import React, { useState } from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const newTask = (evt) => {
    setNewItem(evt.target.value);
  };
  const saveItem = () => {
    items.push(newItem);
    setItems([...items]);
	setNewItem("");
	console.log(items);
  };
  const removeItem = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };
  const updateItem=(idx,value)=>{
	  items[idx] = value;
	  setItems([...items]);
	  console.log(items);
  }
  return (
    <div id="main">
      <h1>To-do List</h1>
      <textarea
        id="task"
        type="text"
        placeholder="New Item"
        value={newItem}
        onChange={newTask}
      ></textarea>
      <button id="btn" onClick={saveItem}>
        Add Task
      </button>
      {items.map((item, idx) => (
		<ListItem
		 item={item}
		 key={idx} index={idx}
		 removeItem={removeItem}
		 updateItem={updateItem} />
      ))}
    </div>
  );
}

export default App;
