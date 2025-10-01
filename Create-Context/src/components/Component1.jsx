import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Context'

const Component1 = () => {
  const value = useContext(CounterContext)
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1