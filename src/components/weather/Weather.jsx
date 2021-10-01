import React from 'react'
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

  React.useEffect(()=>{
    getData()
  }, [])

  async function getData(){
    const ip = await fetch('https://ipinfo.io/json?token=9ef2e38a32ae2f')
    const ipData = await ip.json()

    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ipData.city}&units=metric&APPID=c3c4f72debc080219009dd186a5092cc`)
    const weatherData = await weather.json()

    setData(weatherData)
    console.log(weatherData)
  }
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return(
    <div className='weather-widget'>
      <input type='text' placeholder='Search...' />
      <img src={iconUrl} />
      {data.weather[0].description}
      <h3>{data.main.temp} °C</h3>
      <h2>{data.name} city, {data.sys.country}</h2>
      <p>Humidity: {data.main.humidity} g.kg-1</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  )
}