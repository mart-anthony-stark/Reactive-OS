import React,{useState} from 'react'
import './start.css'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Start({start, toggleStart}){
  return(
    <div className={`start-menu ${start&&'open'}`}>
      <div className='close' onClick={()=>toggleStart(false)}><AiFillCloseCircle/></div>
      <h3 className='title'>Menu</h3>
    </div>
  )
}