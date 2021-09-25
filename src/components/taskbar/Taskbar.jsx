import React from 'react'
import './taskbar.css'
import Clock from '../clock/Clock'
import {CgMenuRound} from 'react-icons/cg'
import {IconContext} from 'react-icons'

export default function Taskbar({start,toggleStart}){
  return(
    <div className={start?'taskbar open':'taskbar'}>
      <div className='start-btn' onClick={()=>{
        toggleStart((prev)=> !prev)
      }}>
        <IconContext.Provider value={{className: "click-btn" }}>
          <div><CgMenuRound /></div>
        </IconContext.Provider>
      </div>

      <Clock />
    </div>
  )
}