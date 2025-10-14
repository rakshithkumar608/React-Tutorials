import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    
    <>
    <div className="py-6 px-8 items-center justify-center text-center mt-25 ">
       <h1 className='items-center justify-center text-center text-7xl font-bold text-blue-600'>{counter}</h1>
     
     <div  className='flex justify-center gap-4  mt-12'>
     

      <button
      onClick={() =>setCounter((prev) => prev + 1)} 
      className='text-3xl font-bold text-white bg-green-500 border border-gray-400 rounded-md  p-2 hover:bg-green-600 gap-12'>Increment + </button>
      
    
    <button
    onClick={() => setCounter((prev) => prev - 1)} 
    className='text-3xl font-bold text-white bg-rose-500 border border-gray-400 rounded-md p-2 hover:bg-rose-600'>Decrement - </button>
      </div>
      </div>

    </>
  )
}

export default App