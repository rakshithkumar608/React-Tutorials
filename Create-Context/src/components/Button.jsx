import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Context'
import Component1 from './component1'

const Button = () => {
  const value = useContext(CounterContext)
  return (
    
    <div>
      <button 
      onClick={() =>value.setCount((count) => count + 1)}><span><Component1/></span>I am a Button</button>
    </div>
  )
}

export default Button