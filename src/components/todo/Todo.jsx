import React, {useState, useEffect, useRef} from 'react'
import Task from './Task'
import {AiFillCloseCircle} from 'react-icons/ai'
import './todo.css'

export default function Todo({setTasks}){
  const [newTask, setNewTask] = useState('')
  const [todos, setTodos] = useState([{task:'', date:''}])


  useEffect(()=>{
    setTodos([])
    let app = document.querySelector('.todo-app')
    let header = document.querySelector('.todo-app .todo-header')

    function onDrag({movementX, movementY}){
      let style = window.getComputedStyle(app)
      let left = parseInt(style.left)
      let top = parseInt(style.top)
      app.style.top = `${top + movementY}px`
      app.style.left = `${left + movementX}px`
    }

    header.addEventListener('mousedown', ()=>{
      header.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      header.removeEventListener('mousemove', onDrag)
    })


    return ()=>{
      header.removeEventListener('mousedown', ()=>{
        header.addEventListener('mousemove', onDrag)
      })
      document.removeEventListener('mouseup', ()=>{
        header.addEventListener('mousemove', onDrag)
      })
    }
  }, [])

  function handleNewTask(){
    setTodos([{task: newTask, date: Date().toLocaleString()}, ...todos])
    setNewTask('')
  }
  

  return(
    <div className='todo-app'>
      <div className='todo-header'>
        <span>TodoList App</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'todo'))}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <div className='new-task'>
        <input placeholder='Task' onChange={(e)=> setNewTask(e.target.value)} value={newTask} />
        <button onClick={handleNewTask}>Add Todo</button>
      </div>
      <div className='list'>
        {todos.map((todo, i) => <Task task={todo} key={i} setTodos={setTodos}/>)}
      </div>
    </div>
  )
}