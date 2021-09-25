import React, {useState, useEffect} from 'react'
import './clock.css'

export default function Clock(){
  const [time, setTime] = useState('00:00:00 am');

  useEffect(()=>{
    setInterval(getTime, 1000)
  },[]);

  function getTime(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = h>=12 ? 'pm' : 'am'

    if(h==0) h = 12
    if(h>12) h = h-12

    h = h<10 ? "0"+ h : h
    m = m<10 ? "0"+ m : m
    s = s<10 ? "0"+ s : s

    setTime(`${h}:${m} ${ampm}`)
  }
  return (
    <div className='clock'>
      {time}
    </div>
  )
}