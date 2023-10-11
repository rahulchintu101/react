import logo from './logo.svg';
import './App.css';
import Tasks from './components/tasks';
import { useState } from 'react';
const App = () =>{
  const [task,setTask]= useState('')
  const [TasksList,setTasksList] = useState([{id:1,task:'this is a 1st task'},{id:2,task:'this is a 2st task'}])
  const deleteTask = (id)=>{
  
   const list = TasksList.filter((task)=>{
      return (task.id!==id)
    })
    setTasksList(list)
   }
   const makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for ( var i = 0; i < 12; i++ ) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  }
  return(
    <div>
      <div className='center bg1 m-5'>
          <h1>Tasks list</h1>
      </div>
      <div>
        <Tasks tasks={TasksList} fun={deleteTask}/>
      </div>
      <div className='form'>
          <div>
            <label>Task</label>
            <input type='text' onChange={(e)=>{
              setTask(e.target.value);
            }} value = {task ? task : ''}/>
            
            <input type='submit' onClick={()=>
            {
              setTasksList([...TasksList,{id:makeId(),task:task}])
              setTask('')
              }} 
              
            />
          </div>
      </div>
  </div>
  );
 
}

export default App;
