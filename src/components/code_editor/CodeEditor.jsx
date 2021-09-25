import React from 'react'
import Editor from './Editor'
import './editor.css'

export default function CodeEditor(){
  const [html, setHtml] = React.useState('')
  const [css, setCss] = React.useState('')
  const [javascript, setJavascript] = React.useState('')
  return(
    <div className='code-editor'>
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