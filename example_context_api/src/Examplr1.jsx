import React, { useContext } from 'react'
import { ProjectContex } from './App'

const Examplr1 = () => {

  const {user} = useContext(ProjectContex)
  return (
    <div>{
      user.map((element, index) => (
        <p 
        key={index}>{element}</p>
      ))
    }</div>
  )
}

export default Examplr1