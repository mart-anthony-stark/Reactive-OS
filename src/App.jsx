import React from 'react';
import ContextMenu from './components/context/ContextMenu'
import Taskbar from './components/taskbar/Taskbar'

function App() {
  return (
    <main>
      <div className=''>
        <ContextMenu />
      </div>
      
      <Taskbar />
    </main>
  );
}

export default App;