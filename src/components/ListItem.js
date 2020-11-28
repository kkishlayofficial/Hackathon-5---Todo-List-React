import React, { useState } from "react";

import "./../styles/App.css";

function ListItem(props) {
  var update="";
  const [editVal, setEditVal] = useState(true);
  const edit=()=>{
    setEditVal(false);
  };
  const deleteTask=()=>{
    props.removeItem(props.index);
  };
  const updateTask=(evt)=>{
    update = evt.target.value;
  };
  const saveTask=()=>{
    props.updateItem(props.index,update);
    setEditVal(true);
    update="";
  };
  return (
    <div className="list">
      {props.item}
      {editVal ?
      <><button className="edit" onClick={edit}>
        Edit
      </button>
      <button className="delete" onClick={deleteTask}>
        Delete
      </button></>
      :
      <><textarea  className="editTask" onChange={updateTask}></textarea>
      <button className="saveTask" onClick={saveTask}>
        Save
      </button></>
}
    </div>
  );
}

export default ListItem;
