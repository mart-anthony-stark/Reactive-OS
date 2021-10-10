import React,{useEffect} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import LeftSidebar from './LeftSidebar'
import Middle from './Middle'
import './style.css'

export default function Twitter({tasks, setTasks}){
  useEffect(()=>{
    const app = document.querySelector('.twitter')
    const header = document.querySelector('.twitter-header')

    function onDrag({movementX, movementY}){
      let styles = window.getComputedStyle(app)
      let left = parseInt(styles.left)
      let top = parseInt(styles.top)

      app.style.left = `${left + movementX}px`
      app.style.top = `${top + movementY}px`
    }

    header.addEventListener('mousedown', ()=>{
      header.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      header.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      header.removeEventListener('mousedown', ()=>{
        header.addEventListener('mousemove', onDrag)
      })

      document.removeEventListener('mouseup', ()=>{
        header.removeEventListener('mousemove', onDrag)
      })
    }

  }, [])
  return(
    <div className='twitter' style={{zIndex: tasks.indexOf('twitter')+1}}>
      <div className='twitter-header app-header' >
        <span>Twitter</span>
        <div className="close-btn" onClick={()=> {
          setTasks((prev)=> prev.filter(p => p !== 'twitter'))
        }}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <div className='hero'>
        <LeftSidebar />
        <Middle />
      </div>
    </div>
  )
}