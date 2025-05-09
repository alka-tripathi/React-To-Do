import { useState } from "react";
import './toDoList.css' 
function Input(){
    let [input,setInput]=useState("");  //input task 
    let [task,setTask]=useState([]);     //input array

    const handleInput=(e)=>{
        let data=e.target.value
        setInput(data);
    }

    const addTasks=(e)=>{
        // e.preventDefault();
        e.preventDefault();
        if(input.trim()){
            setTask([...task,input]);
            setInput("");

        }

    }

    const deleteTask=(idx)=>{
        const updateTask=task.filter((_,index)=>index !==idx);
        setTask(updateTask);
    }
    return(
       <form onSubmit={addTasks}>
        <h1>To-Do List</h1>
       
       <input placeholder="Enter your tasks" name={input} type="text" onChange={handleInput} ></input>
       <button onClick={addTasks} id="inputBtn">Add Tasks</button>
       
        {/* <ul className="lists"> */}
            {/* mapping task  */}
            {task.map((item,index)=>{
               return(
              <li key={index}>{index+1}.{item} <button className="delbtn" onClick={()=>deleteTask(index)}> Delete Task</button></li>
            
               )
            })}
          
        {/* </ul> */}
       </form>
    )
}
export default Input;