import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Results({setResultOpen, result}){
  React.useEffect(()=>{console.log(result)},[])
  return(
    <div className='search-results'>
      { result.items.map((item, i) => (
        <div key={i} className='result-card'>
          <p>{item.formattedUrl}</p>
          <a href={item.link} target='_blank'>{item.title}</a>
          <p className='snippet'>{item.snippet}</p>
        </div>
      )) }
    </div>
  )
}