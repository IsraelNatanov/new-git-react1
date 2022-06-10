import React, { useEffect ,useState } from 'react'
import {sortBy} from "lodash"
import TaskInput from './taskInput'
import TaskList from './TaskList'

export default function Home() {
  let [task_ar, setTask_ar] = useState([]); 

  useEffect(()=>{
    if(localStorage["tasks"]){
      setTask_ar(JSON.parse(localStorage["tasks"]))
    }

  },[])

  const addTask = (_itemTask)=>{
    let sort_ar = [...task_ar, _itemTask];
    sort_ar = sortBy(sort_ar, "time")
    saveLocal(sort_ar)
  }

  const rimovAllStak =()=>{
    saveLocal([]);

  }


  const removSingleTask =(_idDel)=>{
    let temp_ar = task_ar.filter(item => item.id != _idDel)
    saveLocal(temp_ar)
  }

  const saveLocal = (_ar)=>{
    localStorage.setItem("tasks", JSON.stringify(_ar));
    setTask_ar(_ar)

  }

  return (
    <div className='container'>
      <h1 className='display-4 text-center'>רשימת תזכורות</h1>
      <div className='col-lg-6 p-3 mx-auto'>
      <TaskInput rimovAllStak={rimovAllStak} addTask={addTask}/> 
      <TaskList removSingleTask={removSingleTask} task_ar={task_ar} />
      </div>

      
    </div>
  )
}
