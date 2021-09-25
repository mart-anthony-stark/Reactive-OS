import React,{useState} from 'react'
import './start.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FcCommandLine} from 'react-icons/fc'
import {IconContext} from 'react-icons'

export default function Start({start, toggleStart, setTasks, tasks}){
  return(
    <div className={`start-menu ${start&&'open'}`}>
      <div className='close' onClick={()=>toggleStart(false)}>
        <IconContext.Provider value={{className: "click-btn" }}><AiFillCloseCircle/></IconContext.Provider>
      </div>
        <h3 className='title'>Applications</h3>
        <div className='apps'>

          <div className="application" onDoubleClick={()=> {
              setTasks(['console',...tasks])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><FcCommandLine/></div>
            </IconContext.Provider>
            <p className='app-name'>Sheen CLI</p>
          </div>


          
        </div>
    </div>
  )
}