import React, {useState, useEffect, useRef}  from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import ProfileImg from './dp.jpg'
import {CgMenuGridO} from 'react-icons/cg'
import './browser.css'

export default function Browser({setTasks, tasks}){

  useEffect(()=>{
    const app = document.querySelector('.browser')
    const header = document.querySelector('.browser-header')

    function onDrag({movementX, movementY}){
      let styles = window.getComputedStyle(app)
      let left = parseInt(styles.left)
      let top = parseInt(styles.top)

      app.style.top = `${top+movementY}px`
      app.style.left = `${left+movementX}px`
    }

    header.addEventListener('mousedown', ()=>{
      header.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      header.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      document.removeEventListener('mouseup', ()=>{
        header.removeEventListener('mousemove', onDrag)
      })
    }
  }, [tasks])

  return(
    <div className='browser' style={{ zIndex: tasks.indexOf('browser')+1 }}>
      <div className='browser-header app-header'>
        <span>Browser</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'browser'))}>
          <AiFillCloseCircle/>
        </div>
      </div>

      <div className='search-engine'>
        <div className='top-nav'>
          <h4>Gmail</h4>
          <h4>Images</h4>
          <CgMenuGridO/>
          <img id='profile-image' src={ProfileImg} />
        </div>

        <h2><span>B</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></h2>
        <input type='text' placeholder='Search' />
        <div className='buttons'>
          <button className='click-btn'>Boogle Search</button>
          <button className='click-btn'>I'm Feeling Lucky</button>
        </div>
        <p className='covid'>
          Have questions on COVID-19 vaccine side effects?
          <a href='#' target='_blank'> Find out more</a>
        </p>
        <p className='language'>
          Google offered in: <span>  </span>
          <a href='#'>Filipino</a> <a href='#'>Cebuano</a>
        </p>
      </div>
    </div>
  )
}