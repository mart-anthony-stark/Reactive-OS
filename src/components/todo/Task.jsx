import React from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {IconContext} from 'react-icons'

export default function Task({task,setTodos, key}){
  return(
    <div className='task'>
      <div className='top'>
        <h3>{task.task}</h3>
        <div onClick={()=> setTodos((prev)=> prev.filter(p => p != task))}>
          <IconContext.Provider value={{className: 'close-btn'}}><RiDeleteBin5Fill/></IconContext.Provider>
        </div>
      </div>
      <p>{task.date.split('GMT')[0]}</p>
    </div>
  )
}