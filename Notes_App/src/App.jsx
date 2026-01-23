import React, { useState } from 'react'
import image from "../src/assets/image.png";

const App = () => {

  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const[task, setTask]=useState([]);    //we store all task here

  const submitHandler=(e)=>{
    e.preventDefault()  //form has default behaviour as page loads every time when we click submit so it prevent that behaviour
    const copyTask=[...task]        //use so that all the old take also remain intact

    copyTask.push({title,details})    //push current task in copy task
    setTask(copyTask)                 //save the current task(copy) in task 

    setTitle("")                      //this make the text field empty after submitting the note
    setDetails("")
  }


  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
    {/* From Section */}

      <form  onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex flex-col gap-6 lg:w-1/2 p-10 bg-gray-900 border-r border-gray-700  shadow-2xl'>
        <h1 className='text-4xl font-bold text-white'>Add Notes</h1>
          <input type="text" 
          placeholder='Enter title' 
          className='py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />

          <textarea  
          placeholder='Enter text' 
          className='px-4 py-3 h-40 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none resize-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all active:scale-95'>Add Notes</button>
        
      </form>

      {/* Notes Section */}

      <div className="p-10 lg:w-1/2 bg-gray-800 border-gray-700 ">
      <h1 className='text-4xl font-bold mb-4'>Recent Notes</h1>
      {task.length === 0 && (
        <div className="text-center text-gray-400 mt-10 text-lg">
        📭 No notes yet — start writing ✍️
      </div>

      )}
      <div className='flex flex-wrap gap-6 mt-6 max-h-[80vh] overflow-y-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className=" flex flex-col justify-between items-start relative h-50 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4  hover:shadow-lg hover:scale-[1.02] transition-all duration-300  p-4"
          style={{ backgroundImage: `url(${image})` }}>
            <div>
              <h3 className=' font-bold text-gray-900 mb-2 '>{elem.title}</h3>
              <p className='text-gray-700 text-sm leading-snug break-words'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='bg-red-500 hover:bg-red-600 text-white text-xs mt-4 py-1.5 rounded w-full active:scale-95 transition-all'>Delete</button>
          </div>
        })}
      </div>
        

      </div>
    </div>
  )
}

export default App
