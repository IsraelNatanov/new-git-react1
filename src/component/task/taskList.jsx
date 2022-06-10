import React from 'react'
import TaskItem from './taskItem'
export default function TaskList(props) {
  return (
    <div>
        <h2 className='text-center'>My tasks</h2>
        {
            props.task_ar.map(item =>{
                return(
                    <TaskItem removSingleTask = {props.removSingleTask} key={item.id} item={item}/>
                )
            })
        }
    </div>
  )
}
