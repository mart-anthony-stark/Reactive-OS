import React, {useState, useEffect, useRef}  from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import './browser.css'

export default function Browser({setTasks, tasks}){
  const app = useRef()
  const header = useRef()
  useEffect(()=>{
    document.addEventListener('mouseup', ()=>{
      header.current.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      document.removeEventListener('mouseup', ()=>{
        header.current.removeEventListener('mousemove', onDrag)
      })
    }
  }, [tasks])

  function onDrag({movementX, movementY}){
    let styles = window.getComputedStyle(app.current)
    let left = parseInt(styles.left)
    let top = parseInt(styles.top)

    app.current.style.top = `${top+movementY}px`
    app.current.style.left = `${left+movementX}px`
  }

  return(
    <div className='browser' ref={app} style={{ zIndex: tasks.indexOf('browser')+1 }}>
      <div className='browser-header app-header' ref={header} onMouseDown={()=> { 
        header.current.addEventListener('mousemove', onDrag)
      }}>
        <span>Browser</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'browser'))}>
          <AiFillCloseCircle/>
        </div>
      </div>

      <div className='search-engine'>
        <h2><span>B</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></h2>
        <input type='text' placeholder='Search' />
      </div>
    </div>
  )
}