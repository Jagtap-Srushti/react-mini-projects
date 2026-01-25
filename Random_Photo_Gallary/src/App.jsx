import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {

  const [userData,setUserData]=useState([])

  const [index,setIndex]=useState(1)
  
  const [selectedImage, setSelectedImage] = useState(null);


  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [index]);


  let printUserData;

  if (userData.length === 0) {
    printUserData = Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="w-full h-40  rounded-lg bg-gray-800 animate-pulse"></div>
    ));
  } else {
    printUserData = userData.map((elem, idx) => (
      <div key={idx} className="animate-fadeIn">
        <Card elem={elem} onClick={() => setSelectedImage(elem)}/>
      </div>
    ));
  }


  return (
    <div className='bg-gradient-to-b from-black via-neutral-900 to-black
 min-h-screen p-4 text-white overflow-x-hidden'>

      <div className='max-w-6xl mx-auto cursor-pointer'>
        <h1 className="text-center text-3xl font-semibold tracking-tight mb-6">
        Random Photo Gallery
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          A collection of random high-quality images
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {printUserData}
        </div>


        <div className="backdrop-blur-lg bg-white/5 rounded-xl p-3 flex gap-4 items-center justify-center mt-6">
          <button
            disabled={index === 1}
            className="bg-amber-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded px-4 py-2 font-semibold text-black active:scale-95"
            onClick={() => setIndex(index - 1)}
          >
            Prev
          </button>

          <span className="text-gray-300 text-sm">Page {index}</span>

          <button
            className="bg-amber-500 rounded px-4 py-2 font-semibold text-black active:scale-95"
            onClick={() => setIndex(index + 1)}
          >
            Next
          </button>
        </div>

        <footer className="text-center text-xs text-gray-500 py-3">
          Images from Lorem Picsum
        </footer>

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          >
          <img
            src={selectedImage.download_url}
            alt={selectedImage.author}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
)}


    </div>

    

    
  )
}

export default App
