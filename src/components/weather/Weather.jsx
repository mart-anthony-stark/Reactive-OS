import React,{useEffect, useRef} from 'react'
import './weather.css'

let dataObj ={
    main:{humidity:'',pressure:'', temp:''},
    wind:{speed:''},
    weather:[{description: '',main:'',icon:''}],
    sys: {country:''}
  }

export default function Weather(){
  const [data, setData] = React.useState(dataObj)
  const [search, setSearch] = React.useState('')
  const app = useRef()

  React.useEffect(()=>{
    getData()
    window.addEventListener('mouseup', ()=>{
      app.current.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      window.removeEventListener('mouseup', ()=>{
        app.current.removeEventListener('mousemove', onDrag)
      })
    }
  }, [data])

  async function getData(){
    const ip = await fetch('https://ipinfo.io/json?token=9ef2e38a32ae2f')
    const ipData = await ip.json()

    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ipData.city}&units=metric&APPID=c3c4f72debc080219009dd186a5092cc`)
    const weatherData = await weather.json()

    setData(weatherData)
  }
  function onDrag({movementX, movementY}){
    let style = window.getComputedStyle(app.current)
    let left = parseInt(style.left)
    let top = parseInt(style.top)

    app.current.style.left = `${left+movementX}px`
    app.current.style.top = `${top+movementY}px`
  }
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return(
    <div className='weather-widget' ref={app} onMouseDown={()=> app.current.addEventListener('mousemove', onDrag)}>
      <input type='text' placeholder='Search...' onKeyDown={(e)=>{
        if(e.code == 'Enter' || e.code == 'enter'){
          console.log(search)
        }
      }} value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <img src={iconUrl} />
      {data.weather[0].description}
      <h3>{data.main.temp} °C</h3>
      <h2>{data.name} city, {data.sys.country}</h2>
      <p>Humidity: {data.main.humidity} g.kg-1</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  )
}