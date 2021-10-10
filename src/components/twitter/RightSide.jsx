import React from 'react'
import {FiSearch} from 'react-icons/fi'
import MediaImg from './img/media.png'

export default function Right(){
  return(
    <div className='right-sidebar'>
      <div className='search-bar'>
        <div className='search-icon'><FiSearch/></div>
        <input type='text' placeholder='Search Twitter'/>
      </div>
      <img src={MediaImg} className='featured'/>
    </div>
  )
}