import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between s'> 
            <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center font-bold text-1.5xl'>{props.id+1}</h2>
            <div>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi explicabo culpa dolore nisi assumenda?</p>
                <div className='flex justify-between py-1'>
                    <button className='bg-blue-600 font-semibold  text-white px-3 py-1 rounded-4xl  hover:bg-blue-700 active:scale-95 transition-all duration-200'>{props.tag}</button>
                    <button className='bg-blue-600 font-semibold  text-white px-3 py-1 rounded-full  hover:bg-blue-700 active:scale-95 transition-all duration-200'><ArrowRight size={16} strokeWidth={3} /></button>
    
                </div>
                
    
            </div>
          </div>
  )
}

export default RightCardContent
