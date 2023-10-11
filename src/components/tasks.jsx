import React from "react";
import Task from "./task";
const Tasks = (props)=>{
    const list = props.tasks
    return(
        <div className="lists m-5 p-5">
    
            <div style={{backgroundColor:'green'}}>
                <ul>
                    <li>
                        {
                           list.map((val,index)=>{
                            return(
                                <li>
                                    <Task task={val} deleteTask = {props.fun}/>
                                    
                                </li>
                                
                            )
                           })
                        
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tasks;