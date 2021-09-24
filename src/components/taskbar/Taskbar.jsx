import React from 'react'
import './taskbar.css'
import {CgMenuRound} from 'react-icons/cg'

export default function Taskbar(){
  return(
    <div className='taskbar'>
      <div className='start-btn'>
        <CgMenuRound />
      </div>
    </div>
  )
}