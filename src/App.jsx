import React, {useState, useEffect} from 'react';
import ContextMenu from './components/context/ContextMenu'
import Taskbar from './components/taskbar/Taskbar'
import Start from './components/start/Start'
import Console from './components/console/Console'
import ClockWidget from './components/clock_widget/ClockWidget'
import CodeEditor from './components/code_editor/CodeEditor'
import Todo from './components/todo/Todo'
import Drumpads from './components/drumpads/Drumpads'
import Editor from './components/editor/Editor'

function App() {
  const [start, toggleStart] = useState(false)
  const [tasks, setTasks] = useState([])

  return (
    <main>
      <div className='desktop'>
        <ContextMenu toggleStart={toggleStart}/>
        <Start start={start} toggleStart={toggleStart} setTasks={setTasks} tasks={tasks} />

        {/** APPS */}
        {tasks.includes('console') && <Console setTasks={setTasks}/>}
        {tasks.includes('codeeditor') && <CodeEditor setTasks={setTasks}/>}
        {tasks.includes('todo') && <Todo setTasks={setTasks}/>}
        {tasks.includes('drumpads') && <Drumpads setTasks={setTasks}/>}
        <Editor />
        <ClockWidget />
      </div>
      <Taskbar start={start} toggleStart={toggleStart}/>
    </main>
  );
}

export default App;