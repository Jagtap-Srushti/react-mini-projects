import React from 'react'
import Cards from './components/Cards'

const foodItems = [
  {
    name: "Burger",
    price: 2.50,
    originalPrice: 4.50,
    description: "Juicy grilled burger with fresh lettuce and cheese.",
    image: './public/burger.png'
  },
  {
    name: "Pizza",
    price: 5.99,
    originalPrice: 8.99,
    description: "Cheesy pizza with fresh toppings and crispy crust.",
    image: "./public/pizza.png"
  },
  {
    name: "Sandwich",
    price: 3.20,
    originalPrice: 5.00,
    description: "Healthy sandwich with fresh veggies and sauce.",
    image: "./public/sandwich.png"
  },
  {
    name: "Pasta",
    price: 4.75,
    originalPrice: 6.50,
    description: "Creamy pasta tossed with rich Italian sauce.",
    image: "./public/pasta.png"
  },
  {
    name: "French Fries",
    price: 1.99,
    originalPrice: 3.00,
    description: "Crispy golden fries seasoned to perfection.",
    image: "./public/frenchfries.png"
  },
  
  {
    name: "Tacos",
    price: 3.99,
    originalPrice: 6.00,
    description: "Spicy tacos filled with veggies and cheese.",
    image: "./public/tacos.png"
  },
  {
    name: "Noodles",
    price: 3.60,
    originalPrice: 5.20,
    description: "Stir-fried noodles with vegetables and sauce.",
    image: "./public/noodles.png"
  },
  {
    name: "Ice Cream",
    price: 1.50,
    originalPrice: 2.50,
    description: "Creamy ice cream with rich chocolate flavor.",
    image: "./public/icecream.png"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {foodItems.map(function(ele,idx){
        return <div key={idx}>
          <Cards name={ele.name} price={ele.price} originalPrice={ele.originalPrice} description={ele.description} image={ele.image}/>
        </div> 
      })}
      
    </div>
  )
}

export default App
