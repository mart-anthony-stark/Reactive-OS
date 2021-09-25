import React, {useState, useEffect} from 'react';
import ContextMenu from './components/context/ContextMenu'
import Taskbar from './components/taskbar/Taskbar'
import Start from './components/start/Start'
import Console from './components/console/Console'
import ClockWidget from './components/clock_widget/ClockWidget'
import CodeEditor from './components/code_editor/CodeEditor'

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
        <ClockWidget />
        <CodeEditor />
      </div>
      <Taskbar start={start} toggleStart={toggleStart}/>
    </main>
  );
}

export default App;