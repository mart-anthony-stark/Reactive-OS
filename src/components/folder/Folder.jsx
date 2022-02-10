import React,{useEffect} from 'react'
import {AiFillCloseCircle, AiFillFolderOpen} from 'react-icons/ai'
import {FaRegHdd, FaImages} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function Folder(){
  const tasks = useSelector(state=>state.tasks.tasks)
  const dispatch = useDispatch()
  useEffect(()=>{
    const folderApp = document.querySelector('.folder')
    const folderHeader = document.querySelector('.folder-header')

    function onDrag({movementX,movementY}){
      const styles = window.getComputedStyle(folderApp)
      let left = parseInt(styles.left)
      let top = parseInt(styles.top)

      folderApp.style.left = `${left + movementX}px`
      folderApp.style.top = `${top + movementY}px`
    }
    folderHeader.addEventListener('mousedown', ()=>{
      folderHeader.addEventListener('mousemove', onDrag)
    })

    document.addEventListener('mouseup', ()=>{
      folderHeader.removeEventListener('mousemove', onDrag)
    })

    return ()=> {
      document.removeEventListener('mouseup', ()=>{
        folderHeader.removeEventListener('mousemove', onDrag)
      })
    }
  },[])
  
  return(
    <div className='folder' style={{zIndex: tasks.indexOf('files')+1}}>
      <div className='folder-header'>
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