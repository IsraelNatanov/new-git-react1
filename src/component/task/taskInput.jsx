import React, { useRef } from 'react'

export default function TaskInput(props) {

  let nameRef = useRef();
  let timeRef = useRef();

  const addNewTask = ()=>{
    let toDoItem = {
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()

    }
    console.log(toDoItem);
    props.addTask(toDoItem)
  }

  return (
    <div>
      <h3>Task Name</h3>
      <input ref={nameRef} type="text" className='form-control'/>
      <h3>Task Time</h3>
      <input ref={timeRef} type="time" defaultValue="09:00" className='form-control' />
      <div className='my-3 text-center'>
        <button onClick={addNewTask} className='btn btn-success me-2'>Add task</button>
        <button onClick={
        ()=>{props.rimovAllStak()}
      } className='btn btn-danger'>Reset task</button>
      </div>
    </div>
  )
}
