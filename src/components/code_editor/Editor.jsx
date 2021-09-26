import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import {ImShrink2} from 'react-icons/im'
import {GiExpand} from 'react-icons/gi'
import {IconContext} from 'react-icons/'

export default function Editor({displayName, language, onChange, value}){
  const [open, setOpen] = React.useState(true)
  function handleChange(editor, data, value){
    onChange(value)
  }

  return(
    <div className={`editor-container ${!open && 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <div onClick={()=> setOpen(!open)}>
          <IconContext.Provider value={{className: 'click-btn expand'}}>
            {open ? <ImShrink2/> : <GiExpand/>}
          </IconContext.Provider>
        </div>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material-palenight'
        }}
      />
    </div>
  )
}