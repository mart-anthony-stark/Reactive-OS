import React, {useState, useEffect} from 'react'
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import './editor.css'

export default function Editor(){
  const [data, setData] = useState('as')
  return(
    <div className='word-editor'>
      <EditorJs data={data} tools={{ checkList: CheckList }} holder='custom'>
        <div id='custom'></div>
      </EditorJs>
    </div>
  )
}