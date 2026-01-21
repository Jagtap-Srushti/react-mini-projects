import React from 'react'
import Arrow from './Arrow'
import MainText from './MainText'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <MainText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
