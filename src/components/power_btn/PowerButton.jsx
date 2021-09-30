import React from 'react'
import {GrPowerShutdown} from 'react-icons/gr'
import {IconContext} from 'react-icons'
import './style.css'

export default function PowerButton({togglePowerOption}){
  return(
    <div className='power-btn' onClick={()=> {togglePowerOption(true)}}>
      <IconContext.Provider value={{className:'power click-btn'}}>
          <GrPowerShutdown/>
      </IconContext.Provider>
    </div>
  )
}