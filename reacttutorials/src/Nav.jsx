import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-col bg-indigo-500 border space-y-3'>
     <ul className='flex m-5  text-center text-3xl space-x-6 justify-center'>
      <li className='border p-2 rounded-2xl bg-amber-500'>Home</li>
      <li className='border p-2 rounded-2xl bg-green-500'>About Us</li>
      <li className='border p-2 rounded-2xl bg-red-400'>Login</li>
     </ul>
    </div>
  )
}

export default Nav