import React from 'react'
import {CgMic} from 'react-icons/cg'
import {IoMdSearch} from 'react-icons/io'


export default function SearchBox(){
  return(
    <div className='searchbox-top'>
      <input type='text' placeholder='Boogle Search'/>
      <div className='icons'>
        <CgMic/>
        <IoMdSearch/>
      </div>
    </div>
  )
}