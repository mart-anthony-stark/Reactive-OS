import React,{useState} from 'react'
import './start.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FcCommandLine} from 'react-icons/fc'

export default function Start({start, toggleStart, setTasks, tasks}){
  return(
    <div className={`start-menu ${start&&'open'}`}>
      <div className='close' onClick={()=>toggleStart(false)}><AiFillCloseCircle/></div>
        <h3 className='title'>Menu</h3>
        <div className='apps'>

          <div className="application" onDoubleClick={()=> {
              setTasks(['console',...tasks])
              toggleStart(false)
            }}>
            <FcCommandLine/>
          </div>


          
        </div>
    </div>
  )
}