import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

export default function Middle(){
  return(
    <div className='middle'>
      <div className='header'>
        <div className='back click-btn'><FiArrowLeft/></div>
        <div className='profile'>
          <h3>Mart Anthony</h3>
          <p>105 Tweets</p>
        </div>
      </div>
    </div>
  )
}