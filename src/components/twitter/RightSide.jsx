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
      <div className='recommendations'>
        <h3>You might like</h3>
        <div className='user'>
          <div className='user-photo'></div>
          <div className='user-detail'>
            <div></div>
            <div></div>
          </div>
          <button className='click-btn'>Follow</button>
        </div>
        <div className='user'>
          <div className='user-photo'></div>
          <div className='user-detail'>
            <div></div>
            <div></div>
          </div>
          <button className='click-btn'>Follow</button>
        </div>
        <div className='user'>
          <div className='user-photo'></div>
          <div className='user-detail'>
            <div></div>
            <div></div>
          </div>
          <button className='click-btn'>Follow</button>
        </div>
      </div>
    </div>
  )
}