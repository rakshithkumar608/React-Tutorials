import React from 'react'
import AddMinus from './AddMinus'
// import { useRef } from 'react';
// import { useState } from 'react'

const App = () => {
//use Ref
  // let count3 = useRef(0);
  // const addCount3 = () =>{
  // count3.current = count3.current+1;
  //  console.log(count);
  //  const ele = document.getElementById("countNums")
  //  ele.innerText = count3.current;
  // }

  //use State
  // const [count, setCount] = useState(0);
  

  // const addCount = () =>{
  //   setCount(count+1);
  // }
  return (
    <>
      {/* <h1 className='m-10 text-center text-6xl'>{count}</h1>
      <div className='flex justify-center'>
      <button 
      onClick={addCount}
      className='text-2xl bg-green-500 border rounded p-1 flex justify-center'>ADD</button>
      </div> */}
      
   
       {/* <h1 
       id='countNums' 
       className='m-10 text-center text-6xl'>{count}</h1>
      <div className='flex justify-center'>
      <button 
      onClick={addCount3}
      className='text-2xl bg-green-500 border rounded p-1 flex justify-center'>ADD</button>
      </div> */}
 
 <AddMinus />
    </>
  )
}

export default App