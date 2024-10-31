import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {

    const [taskData,setTaskData] = useState({
        task: "",
        status: "todo",
        tags : []
    });

    const checkTag = (tag) =>{
        return taskData.tags.some((item) => item === tag)
    }
    const selectTag = (tag) =>{

        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter(item => item!== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }; // Corrected line
            });
            
            }else{
                setTaskData(prev =>{
                    return {...prev,tags : [...prev.tags,tag]}
                })
            }
        }
        console.log(taskData.tags)
    // some method will return true or false
    const handleChange =(e) =>{
    //    console.log(e.target);
    //    console.log(e.target.name);
        //   const name = e.target.name;
        //   const value = e.target.value;

        const {name,value} = e.target;
        //    console.log(name,value);

           setTaskData(prev => {
            return {...prev, [name] : value}
           })
    }


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(taskData);
    }
    
    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("todo");
    // console.log(task , status);

    // const handleTaskchange =(e)=>{
    //     setTask(e.target.value);
    // }

    // const handleStatusChange =(e)=>{
    //    setStatus(e.target.value);
    // }
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' name="task" className='task_input' placeholder='Enter Your task' onChange={handleChange}/>
            <div className='task_form_bottom_line'>
            <div>
               <Tag tagName='HTML' selectTag={selectTag} selected = {checkTag("HTML")}/>
               <Tag tagName='CSS' selectTag={selectTag} selected = {checkTag("CSS")}/>
               <Tag tagName='JavaScript' selectTag={selectTag} selected = {checkTag("JavaScript")}/>
               <Tag tagName='React' selectTag={selectTag} selected = {checkTag("React")}/>
                </div>
                <div>
                <select className='task-status' name="status" onChange={handleChange}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type='submit' className='task_submit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
