import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BiHomeCircle} from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {CgMoreO} from 'react-icons/cg'
import {RiNotification2Line, RiFileListLine} from 'react-icons/ri'
import {FiMail, FiBookmark, FiMoreHorizontal} from 'react-icons/fi'
import ProfileImg from './img/dp.jpg'
import './style.css'


export default function Left(){
  return(
    <div className='left'>
      <div className='nav'>
        <div className='logo'><FaTwitter/></div>
        <div className='link'><BiHomeCircle/> Home</div>
        <div className='link'><HiOutlineHashtag/> Explore</div>
        <div className='link'><RiNotification2Line/> Notifications</div>
        <div className='link'><FiMail/> Messages</div>
        <div className='link'><FiBookmark/> Bookmarks</div>
        <div className='link'><RiFileListLine/> List</div>
        <div className='link'><FaUserAlt/> Profile</div>
        <div className='link'><CgMoreO/> More</div>
        <button className='tweet click-btn'>Tweet</button>
      </div>
      <div className='profile'>
        <img src={ProfileImg} />
        <div className='details'>
          <h4>Mart Anthony</h4>
          <p>@anthony_stark21</p>
        </div>
        <FiMoreHorizontal />
      </div>
    </div>
  )
}