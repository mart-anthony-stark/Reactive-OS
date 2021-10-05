import React,{useState} from 'react'
import './start.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaFileWord} from 'react-icons/fa'
import {FcCommandLine, FcTodoList,FcSearch} from 'react-icons/fc'
import {TiCodeOutline} from 'react-icons/ti'
import {GiDrum} from 'react-icons/gi'
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
              setTasks([...tasks, 'console'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><FcCommandLine/></div>
            </IconContext.Provider>
            <p className='app-name'>Sheen CLI</p>
          </div>

          <div className="application" onDoubleClick={()=> {
              setTasks([...tasks, 'codeeditor'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><TiCodeOutline/></div>
            </IconContext.Provider>
            <p className='app-name'>Codear</p>
          </div>

          <div className="application" onDoubleClick={()=> {
              setTasks([...tasks,'todo'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><FcTodoList/></div>
            </IconContext.Provider>
            <p className='app-name'>Todos</p>
          </div>


          <div className="application" onDoubleClick={()=> {
              setTasks([...tasks, 'drumpads'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><GiDrum/></div>
            </IconContext.Provider>
            <p className='app-name'>Drumpads</p>
          </div>
          
          
          <div className="application" onDoubleClick={()=> {
              setTasks([...tasks, 'editor'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><FaFileWord/></div>
            </IconContext.Provider>
            <p className='app-name'>Word Editor</p>
          </div>
          

          <div className="application" onDoubleClick={()=> {
              setTasks([...tasks, 'browser'])
              toggleStart(false)
            }}>
            <IconContext.Provider value={{className: "click-btn" }}>
              <div><FcSearch/></div>
            </IconContext.Provider>
            <p className='app-name'>Web Browser</p>
          </div>


        </div>
    </div>
  )
}