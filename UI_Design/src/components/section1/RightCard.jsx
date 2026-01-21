import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-60 rounded-3xl overflow-hidden relative shrink-0 transform transition hover:-translate-y-2 hover:shadow-xl duration-300 '>
      <img className='h-full w-full object-cover ' src={props.img} alt="image1" />

      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
