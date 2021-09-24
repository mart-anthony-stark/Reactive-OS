import React, {useState, useEffect} from 'react';
import ContextMenu from './components/context/ContextMenu'
import Taskbar from './components/taskbar/Taskbar'
import Start from './components/start/Start'

function App() {
  const [start, toggleStart] = useState(false)

  return (
    <main>
      <div className='desktop'>
        <ContextMenu toggleStart={toggleStart}/>
        <Start start={start} toggleStart={toggleStart}/>
      </div>
      <Taskbar start={start} toggleStart={toggleStart}/>
    </main>
  );
}

export default App;