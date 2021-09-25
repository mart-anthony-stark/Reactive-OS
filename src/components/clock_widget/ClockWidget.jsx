import React,{useState, useEffect} from 'react'
import './clockWidget.css'

export default function ClockWidget(){
  const [time, setTime] = useState('00:00:00 am')
  const [date, setDate] = useState('')
  useEffect(()=>{
    setInterval(getTime,1000)
    
  },[])

  const getTime = () => {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = h >= 12 ? 'pm':'am'
    h = (h >= 12) ? h-12 : (h == 0 ? 12: h)

    h = h<10 ? "0"+h : h
    m = m<10 ? "0"+m : m
    s = s<10 ? "0"+s : s

    setTime(`${h}: ${m}: ${s} ${ampm}`)
    setDate(date.toString().split(' ').splice(0, 4).join(" "))
  }
  return(
    <div className='digital-clock'>
      <div className='inner'>
        {time}
        <span>{date}</span>
      </div>
    </div>
  )
}