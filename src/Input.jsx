import { useState } from "react";
function Input(){
    let [input,setInput]=useState("");
    let [task,setTask]=useState("Sample state");

    const handleInput=(e)=>{
        let data=e.target.value
        setTask(data);
    }
    return(
       <form>
        <h1>To-Do List</h1>
        <input placeholder="Enter your tasks" name={input} type="text" onChange={handleInput}></input>

        <ul>
          
        </ul>
       </form>
    )
}
export default Input;