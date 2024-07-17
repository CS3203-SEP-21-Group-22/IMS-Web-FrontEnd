import React, { Children } from 'react'

const Card = ({imgsrc,altname,Children,onClick}) => {
  return (
    <div className='w-[317px] h-[298px] bg-[#3C4D71] rounded-[60px] mx-6 flex flex-col justify-center items-center relative transition-all duration-500' onClick={onClick}>
        <img className=' absolute top-0' src={imgsrc} alt={altname}/>
        <div className='h-0 w-[278px] border-[1px] border-solid border-white absolute top-[220px]'></div>
        <p className='font-josefin-sans font-normal text-[20px] text-white leading-[20px] tracking-[0.06em] mb-8 absolute top-[235px]'>{Children}</p>
    </div>
  )
}

export default Card