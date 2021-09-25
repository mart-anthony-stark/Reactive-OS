import React from "react";
import Prompt from "./Prompt";
import UseOnEnter from "./UseOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";
import {AiFillCloseCircle} from 'react-icons/ai'
import './console.css'

const Console = ({setTasks}) => {
  const inputText = React.useRef();
  const [input, setInput] = React.useState('')
  const [consoleOutput, onEnter] = UseOnEnter();

  React.useEffect(() => {
    inputText.current.value = "";
    inputText.current.focus();

    function onDrag ({movementX, movementY}){
        const style = window.getComputedStyle(console)
        let left = parseInt(style.left)
        let top = parseInt(style.top)
        
        console.style.left = `${left + movementX}px`
        console.style.top = `${top + movementY}px`
    }
  
    const bar = document.querySelector('.toolbar')
    const console = document.querySelector('.console')

    bar.addEventListener('mousedown', ()=>{
      bar.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      bar.removeEventListener('mousemove',onDrag)
    })

    return ()=>{
      bar.removeEventListener('mousedown', ()=>{
        bar.addEventListener('mousemove', onDrag)
      })
      document.removeEventListener('mouseup', ()=>{
        bar.removeEventListener('mousemove',onDrag)
      })
    }
  }, []);

  return (
    <section className="console" onClick={(e)=> {
        document.querySelector('#cmd-input').focus()
      }}>
      <div className='toolbar'>
        Sheen CLI
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'console'))}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <MapConsoleOutput consoleOutput={consoleOutput} />
      <div className="input-prompt">
        <Prompt />
        <input
          id='cmd-input'
          type="text"
          ref={inputText}
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyPress={({ target: { value }, key }) => {
            onEnter(value, key)
            if(key==='Enter')setInput('')
          }}
        />
      </div>
    </section>
  );
};

export default Console;