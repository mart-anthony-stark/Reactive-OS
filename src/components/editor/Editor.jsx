import React, {useState, useEffect} from 'react'
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

export default function Editor(){
  const [data, setData] = useState('as')
  return(
    <div className='word-editor'>
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