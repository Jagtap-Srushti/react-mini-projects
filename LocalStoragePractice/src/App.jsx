import React from 'react'

const App = () => {

  // localStorage.setItem('User','XYZ');    User to store value in local storage in (key,value) format

  // const user=localStorage.getItem('User')     //use to get the data store in the local storage
  // console.log(user)

  // localStorage.removeItem('User')     //Use to remove item store in the local storage
  localStorage.clear(); //use to clear the local storage

  const user ={
    name:'ABC',
    Age:18,
    City:'Pune'
  }

  //local storage stores the data in the string format
  localStorage.setItem('user',JSON.stringify(user)); //using stringify we convert it into string and then store into the local storage
  const getUser=JSON.parse(localStorage.getItem('user')) //using parse we convert the object store in the form of string back to object 
  console.log(getUser)
  return (
    <div>
      
    </div>
  )
}

export default App
