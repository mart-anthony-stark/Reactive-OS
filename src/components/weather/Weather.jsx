import React,{useEffect} from 'react'
import './weather.css'

let dataObj ={
    main:{humidity:'',pressure:'', temp:''},
    wind:{speed:''},
    weather:[{description: '',main:'',icon:''}],
    sys: {country:''}
  }

export default function Weather({weather}){
  const [data, setData] = React.useState(dataObj)
  const [search, setSearch] = React.useState('')
  
  React.useEffect(()=>{
    getData()
    const app = document.querySelector('.weather-widget')

    function onDrag({movementX, movementY}){
      let style = window.getComputedStyle(app)
      let left = parseInt(style.left)
      let top = parseInt(style.top)

      app.style.left = `${left+movementX}px`
      app.style.top = `${top+movementY}px`
    }
    
    app.addEventListener('mousedown', ()=>{
      app.addEventListener('mousemove', onDrag)
    })
    window.addEventListener('mouseup', ()=>{
      app.removeEventListener('mousemove', onDrag)
    })
    return ()=>{
      window.removeEventListener('mouseup', ()=>{
        app.removeEventListener('mousemove', onDrag)
      })
    }
  }, [])

  async function getData(){
    const ip = await fetch('https://ipinfo.io/json?token=9ef2e38a32ae2f')
    const ipData = await ip.json()

    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ipData.city}&units=metric&APPID=c3c4f72debc080219009dd186a5092cc`)
    const weatherData = await weather.json()

    setData(weatherData)
  }
  
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return(
    <div className='weather-widget'>
      <input type='text' placeholder='Search...' onKeyDown={async(e)=>{
        if(e.code == 'Enter' || e.code == 'enter'){
          const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&APPID=c3c4f72debc080219009dd186a5092cc`)
          const res = await weather.json()
          if(res.message !== 'city not found')
            setData(res)

          setSearch('')
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