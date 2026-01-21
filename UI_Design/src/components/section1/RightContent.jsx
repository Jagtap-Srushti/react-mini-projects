import React from 'react'
import RightCard from './RightCard' 
const RightContent = (props) => {
  return (
    <div id="right" className='h-full  flex gap-8 flex-nowrap w-2/3 p-4 overflow-x-auto'>
      {props.users.map(function(ele,idx){
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
