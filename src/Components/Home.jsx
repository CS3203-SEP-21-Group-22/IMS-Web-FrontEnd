import React from 'react'
import '../styles/css/Home.css'
import topImage from '../styles/images/page1.png'
import leftIcon from '../styles/images/leftticon.png'
import rightIcon from '../styles/images/righticon.png'
import middleIcon from '../styles/images/middleicon.png'
import page3 from '../styles/images/page3.png'
import signinpic from '../styles/images/siginpic.png'

export const Home = () => {
  return (
    <div className='Home'>
      <div className='page1'>
        <div className='left1'>
          <p className='page1-main-text'>THE PERFECT TOOL TO MANAGE YOUR LAB</p>
          <p className='page1-secondary-text'>Lab tracker is an inventory management system for computer laboratories.</p>
          <button className='get-started'>GET STARTED</button>
          <button className='create-account'>CREATE ACCOUNT</button>
        </div>
        <div className='right1'>
          <img src={topImage} alt='topImage' className='topImage'/>
        </div>
      </div>
      <div className='page2'>
        <div className='left2'>
          <img src={leftIcon} alt='lefticon' className='left-icon'/>
          <p className='mobileapp'>MOBILE APP</p>
          <p className='mobileapp-descript'>Use LabTracker anywhere,anytime with the use of our mobile app.</p>
        </div>
        <div className='middle2'>
          <img src={middleIcon} alt='middleicon' className='middle-icon'/>
          <p className='mobileapp'>SMART,SAFE & SECURE</p>
          <p className='mobileapp-descript'>Improved security features to ensure all your records are safe.</p>
        </div>
        <div className='right2'>
          <img src={rightIcon} alt='rightticon' className='right-icon'/>
          <p className='mobileapp'>NEVER MISS</p>
          <p className='mobileapp-descript'>Never miss a slot
          with our reliable notification system.</p>
        </div>
      </div>
      <div className='page3'>
        <p className='flexible'>FLEXIBLE AND DIVERSE</p>
        <p className='flexible-descript'> From Lab administrators to students , role based profiling makes sure the user gets a simple, easy to use experience.</p>
        <img src={page3} alt='page3pic' className='page3-pic'/>
        <img src={signinpic} alt='signinpic' className='signin-pic'/>
      </div>
    </div>
  )
}
