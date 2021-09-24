import React from 'react'
import './taskbar.css'
import {CgMenuRound} from 'react-icons/cg'

export default function Taskbar({start,toggleStart}){
  return(
    <div className={start?'taskbar open':'taskbar'}>
      <div className='start-btn' onClick={()=>{
        toggleStart((prev)=> !prev)
      }}>
        <CgMenuRound />
      </div>
    </div>
  )
}