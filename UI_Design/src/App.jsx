import React from 'react'
import Section1 from './components/section1/Section1'
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"


const App = () => {

  const users=[

    {
      img:image1,
      intro:'',
      tag:'Satisfied'
    },

    {
      img:image2,
      intro:'',
      tag:'Underserved'
    },

    {
      img:image3,
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>

    </div>
  )
}

export default App
