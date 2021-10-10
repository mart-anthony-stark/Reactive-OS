import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {HiLink} from 'react-icons/hi'
import {AiFillCalendar} from 'react-icons/ai'
import {GiNewBorn} from 'react-icons/gi'
import BannerImg from './img/twitter-banner.jpg'
import ProfileImg from './img/dp.jpg'
import './style.css'

export default function Middle(){
  return(
    <div className='middle'>
      <div className='header'>
        <div className='back click-btn'><FiArrowLeft/></div>
        <div className='profile'>
          <h3>Mart Anthony</h3>
          <p>105 Tweets</p>
        </div>
      </div>
      <div className='banner'>
        <img src={BannerImg} />
      </div>
      <div className='profile-details'>
        <div className='edit'><img src={ProfileImg} /><button className='click-btn'>Edit Profile</button></div>
        <div className='profile'>
          <h3>Mart Anthony</h3>
          <p>105 Tweets</p>
        </div>
        <div className='bio'>
          <p>Web Developer💻 |</p>
          <p>BSIT Student |</p>
          <p>Future Backend Engineer</p>
          <section>
            <p><HiLink/><a href='https://twitter.com/anthony_stark21' target="_blank">martanthonysalazar.tech</a></p>
            <p><GiNewBorn/>Born September 21, 2001</p>
            <p><AiFillCalendar/>Joined April 2020</p>
          </section>
          <div className='followers'>
            <p><span>148</span> Following</p>
            <p><span>73</span> Followers</p>
          </div>
        </div>
        <div className='tabs'>
          <h3 className='active click-btn'>Tweets</h3>
          <h3 className='click-btn'>Tweets & Replies</h3>
          <h3 className='click-btn'>Media</h3>
          <h3 className='click-btn'>Likes</h3>
        </div>
      </div>
    </div>
  )
}