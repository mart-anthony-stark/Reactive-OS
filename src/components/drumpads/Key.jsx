import React from 'react'

export default function Key({pad}){
  const [isActive, setActive] = React.useState(false)
  const {keyCode, keyTrigger, id, url} = pad

  function playSound(){
    const audio = document.querySelector(`#${keyTrigger}`)
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    audio.currentTime = 0
    audio.play()
    setActive(true)
    setTimeout(()=>{ setActive(false) }, 300)    
  }

  return(
    <div className={`single-key ${isActive && 'playing'}`} id={id} onClick={playSound}>
      <audio src={url} id={keyTrigger}/>
      <h3>{id}</h3>
    </div>
  )
}