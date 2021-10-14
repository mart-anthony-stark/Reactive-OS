import React from 'react'
import {CgMic} from 'react-icons/cg'
import {IoMdSearch} from 'react-icons/io'


export default function SearchBox({setCurrentSearch, currentSearch, handleEnter,setSearch}){
  return(
    <div className='searchbox-top'>
      <input type='text' placeholder='Boogle Search' value={currentSearch}
      onChange={e => {
        setCurrentSearch(e.target.value)
        setSearch(e.target.value)
      }} onKeyDown={handleEnter}/>
      <div className='icons'>
        <CgMic/>
        <IoMdSearch/>
      </div>
    </div>
  )
}