import React from 'react'
import './power.css'
import {GrPowerShutdown} from 'react-icons/gr'
import {RiRestartFill} from 'react-icons/ri'
import {GiNightSleep} from 'react-icons/gi'
import {IconContext} from 'react-icons'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function PowerOptions({setTasks, togglePowerOption}){
  return(
    <div className='power-options'>
      <div className='close' onClick={()=>togglePowerOption(false)}>
        <IconContext.Provider value={{className: "click-btn" }}><AiFillCloseCircle/></IconContext.Provider>
      </div>
      
      <h2>Power Options</h2>
      <div className='options'>
        <div className='single-option'>
          <IconContext.Provider value={{className:'option click-btn'}}>
            <GrPowerShutdown/>
          </IconContext.Provider>
          SHUTDOWN
        </div>

        <div className='single-option'>
          <IconContext.Provider value={{className:'option click-btn'}}>
            <RiRestartFill/>
          </IconContext.Provider>
          REBOOT
        </div>

        <div className='single-option'>
          <IconContext.Provider value={{className:'option click-btn'}}>
            <GiNightSleep />
          </IconContext.Provider>
          SLEEP
        </div>
      </div>
    </div>
  )
}