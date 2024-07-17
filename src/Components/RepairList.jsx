import React from 'react'
import RepairRequest from './RepairRequest'
import router from '../styles/images/router.png'
import mouse from '../styles/images/mouse.png'

/* Rectangle 12 */



const RepairList = ({onClick,isVisible}) => {
  return (
    <div className={`h-[500px] w-[1100px] bg-[#3C4D71] rounded-[60px] flex flex-col items-center justify-center relative ${isVisible? 'animate-fade-in' :'animate-fade-out'}`} >
      <p className='font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] absolute left-8 top-12'>REPAIR REQUESTS</p>
      <button className='right-8 bg-[#D4E5F6] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg' onClick={onClick}>&lt;BACK</button>
      <div className='w-[839px] h-[29px] rounded-[10px] shadow absolute left-[132px] top-[125px]  bg-[#03ADE5] flex flex-row items-center justify-evenly'>
        <p className='font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]'>ITEM NAME</p>
        <p className='font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]'>SERIAL NO</p>
        <p className='font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]'>LAB</p>
        <p className='font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]'>DATE FOUND</p>
        <p className='font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]'>DESCRIPTION</p>
      </div>
      <RepairRequest
      reqimg={router}
      itmname='4-Port WiFi Router (Cisco SRP541W) '
      serial='FOC1234X56Y'
      lab='Network Lab'
      datereq='09/07/2024'
      description='One of the antennas are broken'
      />
      <RepairRequest
      reqimg={mouse}
      itmname='Acer Sports Gaming Mouse '
      serial='M1102AB'
      lab='Architecture Lab'
      datereq='09/06/2024'
      description='Scroll button is damaged'/>
    </div>
  )
}

export default RepairList

