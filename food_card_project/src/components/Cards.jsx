import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>
        <div className='image'>
            <img src={props.image} alt="" />
        </div>
        <div className='content'>
            <h1>{props.name}</h1>
            <div className='price'>
                <h3>${props.price}</h3>
                <h4>${props.originalPrice}</h4>
            </div>
            
            <p>{props.description}</p>
            <button>BUY NOW</button>
        </div>
      
    </div>
  )
}

export default Cards
