import React from 'react'
import './TaskColumn.css'
import Todo from '../assets/direct-hit.png'
import TaskCard from './TaskCard'
const TaskColumn = ({icon,title}) => {
  return (
    <section className='task-column'>
     <h2 className='task_column_heading'>
     <img className='task_column_icon' src={icon} alt=''/>{title}</h2>
     <TaskCard />
    </section>
  )
}

export default TaskColumn
