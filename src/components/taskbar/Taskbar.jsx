import React from 'react'
import './taskbar.css'
import Clock from '../clock/Clock'
import {CgMenuRound} from 'react-icons/cg'
import {GiBattery100, GiDrum} from 'react-icons/gi'
import {FcCommandLine, FcTodoList} from 'react-icons/fc'
import {TiCodeOutline} from 'react-icons/ti'
import {FaFileWord} from 'react-icons/fa'
import {FcSearch} from 'react-icons/fc'
import {IconContext} from 'react-icons'

export default function Taskbar({start,toggleStart,weather, setTasks, tasks}){
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  return(
    <div className={start?'taskbar open':'taskbar'}>
      <div className='active-tasks'>

      {tasks.includes('console') && 
        <div className='task-grp'>
          <span>Command Line</span>
          <IconContext.Provider value={{className: "click-btn task", dataApp:'Command Line' }}>
              <div><FcCommandLine/></div>
          </IconContext.Provider>
        </div>
      }

      {tasks.includes('codeeditor') &&
        <div className='task-grp'>
          <span>Codear</span>
          <IconContext.Provider value={{className: "click-btn task" }}>
              <div data-app='Codear'><TiCodeOutline/></div>
          </IconContext.Provider>
        </div>
      }


      {tasks.includes('todo') && 
        <div className='task-grp'>
          <span>Todo App</span>
          <IconContext.Provider value={{className: "click-btn task" }}>
              <div data-app='Todo App'><FcTodoList/></div>
          </IconContext.Provider>
        </div>
      }

      {tasks.includes('drumpads') && 
        <div className='task-grp'>
          <span>Drumpads</span>
          <IconContext.Provider value={{className: "click-btn task" }}>
            <div data-app='Drumpads'><GiDrum/></div>
          </IconContext.Provider>
        </div>
      }


      {tasks.includes('editor') && 
        <div className='task-grp'>
          <span>Word Editor</span>
          <IconContext.Provider value={{className: "click-btn task" }}>
            <div data-app='Word Editor'><FaFileWord/></div>
          </IconContext.Provider>
        </div>
      }
      {tasks.includes('browser') && 
        <div className='task-grp'>
          <span>Web Browser</span>
          <IconContext.Provider value={{className: "click-btn task" }}>
            <div data-app='Web Browser'><FcSearch/></div>
          </IconContext.Provider>
        </div>
      }

      </div>

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