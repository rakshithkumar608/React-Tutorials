import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
   
      <div className="items-center justify-around p-4  flex bg-gray-400 border border-blue-200 shadow-md">
        <ul className='flex gap-9 justify-around px-12 py-3 font-bold text-2xl cursor-pointer mx-12 '>
          <li className='hover:text-green-300'>
            <Link to='/home'>Home</Link>
            </li>
          <li className='hover:text-green-300'>
            <Link to='/about'>About Us</Link>
            </li>

          <li className='hover:text-green-300'>
            <Link to='/login'>Login</Link>
            </li>
          <li className='hover:text-green-300'>
           <Link to='/contact'>Contact Us</Link> 
            </li>
        </ul>
      </div>
   
    </>
  )
}

export default Navbar