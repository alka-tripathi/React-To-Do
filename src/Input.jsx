import { useState } from "react";
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
            setInput(" ");

        }

    }
    return(
       <form>
        <h1>To-Do List</h1>
        <input placeholder="Enter your tasks" name={input} type="text" onChange={handleInput}></input>
        <button onClick={addTasks}>Add Tasks</button>

        <ul>
            {task.map((item,index)=>{
               return(
                <li key={index}>{item}     <button> Delete Task</button></li>
            
               )
            })}
          
        </ul>
       </form>
    )
}
export default Input;