import React from 'react'

export default function TaskItem(props) {

  let {name, time, id} = props.item;
  return (
    <div className='shadow my-2 p-2'>
      <button onClick={()=>{
        props.removSingleTask(id)
      }} className='btn btn-danger float-end'>X</button>
      <h4>{name} - {time}</h4>

    </div>
  )
}
