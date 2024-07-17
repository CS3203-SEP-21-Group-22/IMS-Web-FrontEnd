import React from 'react'

export const Slot = ({lists,boxType}) => {
  return (
    <div>
      <ul className='item-list'>
          {lists[boxType].map((item,index)=>(
        <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  )
}
