import React from 'react'
import './taskbar.css'
import Clock from '../clock/Clock'
import {CgMenuRound} from 'react-icons/cg'
import {GiBattery100} from 'react-icons/gi'
import {IconContext} from 'react-icons'

export default function Taskbar({start,toggleStart,weather, setTasks, tasks}){
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  return(
    <div className={start?'taskbar open':'taskbar'}>
      <div className='start-btn' onClick={()=>{
        toggleStart((prev)=> !prev)
      }}>
        <IconContext.Provider value={{className: "click-btn" }}>
          <div><CgMenuRound /></div>
        </IconContext.Provider>
      </div>

      <div className='right'>
        <div className='weather' onClick={()=>{
          if(tasks.includes('weather')) setTasks((prev)=> prev.filter(p => p != 'weather'))
          if(!tasks.includes('weather')) setTasks([...tasks,'weather'])
        }}>
          <h3>{weather.main.temp} °C</h3>
          <img src={iconUrl} className='weather-icon'/>
        </div>
        <Clock />
        <IconContext.Provider value={{className: "click-btn battery" }}>
          <GiBattery100 />
        </IconContext.Provider>
      </div>
    </div>
  )
}