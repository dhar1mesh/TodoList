import React, { useState } from 'react';
import TodoList from "./TodoList"
const App=()=>{
  const [additem,Additem]=useState("");
  const [add,Add]=useState([]);
  const Items=(prevalue)=>{
    Add((olditem)=>{
      if(additem!="")
      return [...olditem,additem];
      else {
        alert("enter item");
        return [...olditem];
      }
    })
    Additem("");
  };
  const deleteitem=(id)=>{
    // alert("this item will delete");
    Add((olditem)=>{
      return olditem.filter((arrElem,index)=>{
        return index!==id;
      })
    
    })
}
  const addItems=(event)=>{
    Additem(event.target.value)
  };

  return (
<>
    <h1>ToDoList</h1>
    <input
    type ="text"
    placeholder="enter item"
    onChange={addItems}
    value={additem}
    />
    <button onClick={Items}>add item </button>
    <ol>
      
      {add.map((item,index)=>{
        return <TodoList 
        text={item} 
        key={index}
        id={index}
        onSelect={deleteitem}
        />
       
      })}
    </ol>
    </>
  );
}
export default App; 