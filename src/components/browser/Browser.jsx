import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import './browser.css'

export default function Browser(){
  return(
    <div className='browser'>
      <div className='browser-header app-header'>
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