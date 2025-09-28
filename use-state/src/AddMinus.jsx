import React, { useState } from 'react'

const AddMinus = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>Simple ADD / MINUS Counter</h1>

    <div className='text-4xl font-semibold mb-6'>{count}</div>

    <div className='flex space-x-4'>
    <button 
    onClick={() => setCount(count+1)}
    className='bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600'
    >ADD +</button>

     <button 
    onClick={() => setCount(count-1)}
    className='bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-Red-600'
    >MINUS -</button>
    </div>
    </div>
  )
}

export default AddMinus