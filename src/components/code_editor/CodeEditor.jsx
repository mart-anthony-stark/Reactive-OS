import React from 'react'
import Editor from './Editor'
import './editor.css'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function CodeEditor({setTasks}){
  React.useEffect(()=>{
    const editor = document.querySelector('.code-editor')
    const header = document.querySelector('.code-editor-header')

    header.addEventListener('mousedown', ()=>{
      header.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      header.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      header.removeEventListener('mousedown', ()=>{
        header.addEventListener('mousemove', onDrag)
      })

      document.removeEventListener('mouseup', ()=>{
        header.removeEventListener('mousemove', onDrag)
      })
    }

  }, [])

  function onDrag({movementX, movementY}){
    const editor = document.querySelector('.code-editor')
    const style = window.getComputedStyle(editor)
    let top = parseInt(style.top)
    let left = parseInt(style.left)
    editor.style.top = `${top + movementY}px`
    editor.style.left = `${left + movementX}px`
  }

  const [html, setHtml] = React.useState('')
  const [css, setCss] = React.useState('')
  const [javascript, setJavascript] = React.useState('')
  return(
    <div className='code-editor'>
      <div className='code-editor-header'>
        <span>Codear</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'codeeditor'))}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <div className='pane top-pane'>
        <Editor displayName='HTML' language='xml' onChange={setHtml} value={html} />
        <Editor displayName='CSS' language='css' onChange={setCss} value={css} />
        <Editor displayName='JavaScript' language='javascript' onChange={setJavascript} value={javascript} />

      </div>
      <div className='pane'>
        <iframe title='output' sandbox='allow-scripts' frameBorder='0' width='100%' height='100%' />
      </div>
    </div>
  )
}