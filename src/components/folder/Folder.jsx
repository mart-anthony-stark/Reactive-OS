import React,{useEffect, useRef} from 'react'
import {AiFillCloseCircle, AiFillFolderOpen} from 'react-icons/ai'
import {FaRegHdd, FaImages} from 'react-icons/fa'
import './style.css'

export default function Folder(){
  useEffect(()=>{
    document.addEventListener('mouseup', ()=>{
      folderHeader.current.removeEventListener('mousemove', onDrag)
    })

    return (document.addEventListener('mouseup', ()=>{
      folderHeader.current.removeEventListener('mousemove', onDrag)
    }))
  },[])
  const folderApp = useRef()
  const folderHeader = useRef()
  function onDrag({movementX,movementY}){
    const styles = window.getComputedStyle(folderApp.current)
    let left = parseInt(styles.left)
    let top = parseInt(styles.top)

    folderApp.current.style.left = `${left + movementX}px`
    folderApp.current.style.top = `${top + movementY}px`
  }
  return(
    <div className='folder' ref={folderApp}>
      <div className='folder-header' ref={folderHeader}
      onMouseDown={()=>{
        folderHeader.current.addEventListener('mousemove', onDrag)
      }}>
        <span>File Explorer</span>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'files'))}>
          <AiFillCloseCircle/>
        </div>
      </div>
      <div className='path-bar'></div>
        <div className='main'>
            <div className='left'>
              <div>
                <AiFillFolderOpen/>
                Desktop
              </div>
              <div>
                <AiFillFolderOpen/>
                Downloads
              </div>
              <div>
                <AiFillFolderOpen/>
                Recent Folders
              </div>
              <div>
                <AiFillFolderOpen/>
                Network
              </div>
              <div>
                <AiFillFolderOpen/>
                Desktop
              </div>
            </div>
            <div className='right'>
              <div className='files'>
                <div className='file'>
                  <AiFillFolderOpen/>
                </div>
                <div className='file'>
                  <FaImages/>
                </div>
                <div className='file'>
                  <AiFillFolderOpen/>
                </div>
                <div className='file'>
                  <AiFillFolderOpen/>
                </div>
                <div className='file'>
                  <FaImages/>
                </div>
              </div>

              <div className='drives'>
                <div className='drive'>
                  <div className='drive-icon'>
                    <FaRegHdd/>
                    <div className='bar'><span></span></div>
                  </div>
                  Drive C:/
                </div>
                <div className='drive'>
                  <div className='drive-icon'>
                    <FaRegHdd/>
                    <div className='bar'><span></span></div>
                  </div>
                  Drive D:/
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}