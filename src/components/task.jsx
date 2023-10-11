import React from "react";

const Task = (props)=>{
    return(
            <>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                {props.task.task}
            </div>
            <div style={{marginLeft:'auto'}}><input type='button'  value='delete' width={100} height={100} onClick={()=>{props.deleteTask(props.task.id,props.task.id)}}/></div>
            </div>
            </>
    )
}

export default Task;