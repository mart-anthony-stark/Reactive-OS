import React, {useState, useEffect, useRef} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import Image from '@editorjs/image'
import LinkTool from '@editorjs/link'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import Code from '@editorjs/code'
import SimpleImage from '@editorjs/simple-image'
import './editor.css'

export default function Editor({setTasks, tasks}){
  const [data, setData] = useState('as')
  const app = useRef()
  const header = useRef()
  useEffect(()=>{
    window.addEventListener('mouseup', ()=>{
      header.current.removeEventListener('mousemove', onDrag)
    })

    return ()=>{
      window.removeEventListener('mouseup', ()=>{
        header.current.removeEventListener('mousemove', onDrag)
      })
    }
  }, [tasks])
  function onDrag({movementX, movementY}){
    let styles = window.getComputedStyle(app.current)
    let left = parseInt(styles.left) + movementX
    let top  = parseInt(styles.top)  + movementY

    app.current.style.top = top+'px'
    app.current.style.left = left+'px'
  }
  return(
    <div className='word-editor' ref={app}>
      <div className='word-editor-header' ref={header} onMouseDown={()=>{ header.current.addEventListener('mousemove', onDrag) }}>
        <span>Word editor</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'editor'))}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <div className='tools'>
        <span>Home</span>
        <span>File</span>
        <span>Settings</span>
        <span>Help</span>
      </div>
      <EditorJs data={data} tools={{ 
        checkList: CheckList ,
        embed: Embed,
        table: Table,
        linkTool: LinkTool,
        image: Image,
        warning: Warning,
        quote: Quote,
        simpleImage: SimpleImage,
        delimiter: Delimiter,
        code: Code,
      }} holder='custom'>
        <div id='custom'></div>
      </EditorJs>
    </div>
  )
}