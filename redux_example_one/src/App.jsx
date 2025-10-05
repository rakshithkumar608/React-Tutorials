import React, { useState } from 'react'
import store from './store/CountStore'
import { useStore } from 'react-redux'
import { useDispatch } from 'react-redux'

const App = () => {
 const counterStore = useStore(store);
 const dispatch = useDispatch();
 const [count, setCount] = useState(counterStore.getState());
 const [number, setNumber] = useState(0);



counterStore.subscribe(() => {
  console.log(counterStore.getState());
  setCount(counterStore.getState())
})
 
  return (
    <>
   <div className='text-center text-6xl mt-10 font-bold text-rose-500'>{count}</div>
  
   <button 
   className='hover:bg-blue-400 m-15 p-2 bg-indigo-300 rounded-lg ml-75 font-bold '
   onClick={() =>dispatch({type:'ADD'})}>ADD</button>
     <button
     className='hover:bg-blue-400 p-2 bg-indigo-300 rounded-lg font-bold'
      onClick={() =>dispatch({type:'MINUS'})}>MINUS</button>
      
     <div className='items-center justify-center ml-65'>
      <input 
      className='bg-green-400 w-auto p-1 rounded-lg border border-bg-rose-400 shadow-md'
      type='number' 
      value={number} 
      onChange={(e) =>setNumber(e.target.value)}/>
      <button
      className='flex mt-3 text-center items-center ml-8 bg-rose-400 p-2 rounded-lg text-xl font-bold'
      onClick={() =>dispatch({type:'ADD_VALUE',payload:number})}>ADD VALUE</button>
      </div>
      </>
 
  )
}

export default App