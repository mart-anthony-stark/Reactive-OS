import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Results({setResultOpen}){
  return(
    <div className='search-results'>
      <div id='search-close' className="close-btn" onClick={()=> setResultOpen(false)}>
          <AiFillCloseCircle/>
      </div>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
      <h1>Results</h1>
    </div>
  )
}