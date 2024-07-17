import React, { useState } from 'react'
import '../../styles/css/Studentselect.css'
import laptop from '../../styles/images/laptop.png'
import router from '../../styles/images/router.png'
import keyboard from '../../styles/images/keyboard.png'
import microcontroller from '../../styles/images/microcontroller.png'
import projector from '../../styles/images/projector.png'
import mouse from '../../styles/images/mouse.png'
import {Slot} from '../Slot.jsx';



export const StudentSelect = () => {

  const [box,setBox] = useState(null)
  const handleBoxClick = (boxType) => {
    if (box === boxType) {
      setBox(null); // Collapse if already opened
    } else {
      setBox(boxType); // Expand if not opened
    }
  };

  const renderContent =(boxType) => {
    const lists = {
      laptop: ['Laptop 1','Laptop 2','Laptop 3'],
      router: ['Router 1','Router 2','Router 3'],
      projector: ['Projector 1', 'Projector 2', 'Projector 3'],
      microcontroller: ['Microcontroller 1', 'Microcontroller 2', 'Microcontroller 3'],
      keyboard: ['Keyboard 1', 'Keyboard 2', 'Keyboard 3'],
      mouse: ['Mouse 1', 'Mouse 2', 'Mouse 3'],
    };

    if (box === boxType){
      return(
        <Slot
        lists = {lists}
        boxType = {boxType}/>
      );
    }
    else {
      let imageSrc,altText;
      switch (boxType){
        case 'laptop':
          imageSrc=laptop;
          altText = 'laptop';
          break;
        case 'router':
          imageSrc=router;
          altText = 'router';
          break;
        case 'projector':
          imageSrc=projector;
          altText = 'projector';
          break;
        case 'microcontroller':
          imageSrc=microcontroller;
          altText = 'microcontroller';
          break;
        case 'keyboard':
          imageSrc=keyboard;
          altText = 'keyboard';
          break;
        case 'mouse':
          imageSrc = mouse;
          altText = 'mouse';
          break;
        default:
          return null;
      }
      return <img src={imageSrc} alt={altText} className={boxType} />;
    }
  }

  

  return (
    <div className='h-[800px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex justify-center items-center relative'>
      <div className='box-container'>
        {
          ['laptop','router','projector','microcontroller','keyboard','mouse'].map((boxType)=>(
            <div
              key={boxType}
              className={`router-box ${box === boxType ? 'opened' : ''}`}
              onClick={()=>handleBoxClick(boxType)}>
             
            {renderContent(boxType)}
            {(box!==boxType) &&
            <div className='line'></div> &&
            <p className='box-text'>{boxType.toUpperCase()}</p>}
            </div>

          ))
        }
      </div>
      
    </div>
  ) 
}

{/* <div className={`router-box ${box ==='laptop' ? 'opened':''}`} onClick={()=>handleBoxClick('laptop')}>
          <div className='line'></div>
          <img src={laptop} alt='laptop' className='laptop'/>
          <p className='box-text'>LAPTOPS</p>
        </div>
        <div className={`router-box ${box ==='router' ? 'opened':''}`} onClick={()=>handleBoxClick('router')}>
          <div className='line'></div>
          <img src={router} alt='router' className='router'/>
          <p className='box-text'>ROUTER</p>
        </div>
        <div className={`router-box ${box ==='projector' ? 'opened':''}`} onClick={()=>handleBoxClick('projector')}>
          <div className='line'></div>
          <img src={projector} alt='projector' className='projector'/>
          <p className='box-text'>PROJECTOR</p>
        </div>
        <div className={`router-box ${box ==='microcontroller' ? 'opened':''}`} onClick={()=>handleBoxClick('microcontroller')}>
          <div className='line'></div>
          <img src={microcontroller} alt='microcontroller' className='microcontroller'/>
          <p className='box-text'>MICROCONTROLLER</p>
        </div>
        <div className={`router-box ${box ==='keyboard' ? 'opened':''}`} onClick={()=>handleBoxClick('keyboard')}>
          <div className='line'></div>
          <img src={keyboard} alt='keyboard' className='keyboard'/>
          <p className='box-text'>KEYBOARD</p>
        </div>
        <div className={`router-box ${box ==='mouse' ? 'opened':''}`} onClick={()=>handleBoxClick('mouse')}>
          <div className='line'></div>
          <img src={mouse} alt='mouse' className='mouse'/>
          <p className='box-text'>MOUSE</p>
        </div> */}