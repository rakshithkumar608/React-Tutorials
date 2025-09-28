import React, { useState } from 'react'

const App = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');


  const  handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const validEmail = regex.test(username)
    if(!validEmail) {
      console.log("Please enter valid email");
       }
     else if (username && password) {
      alert("login successful")
    } else {
      alert("Please enter username and password")
    }
  }

  return (
    <>
     <h2 className='font-bold text-4xl  m-15 text-center '>Login Form</h2>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
       
        <form className='max-w-md mx-auto  p-6 bg-white rounded-lg shadow-md w-full mb-30 border  border-black'>
         <div className="">
          <label htmlFor='username'> Username:</label> 
          <input 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text" 
          placeholder='Enter user name or Enter your PhoneNumber' 
          className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
         </div>

        <div className=''>
          <label htmlFor='password'>Password:</label>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" 
          placeholder='Enter your password' className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>

        <div className="text-center font-semibold text-xl gap-2 space-x-2 flex justify-center">
          <button 
          onClick={handleSubmit}
          className='border rounded-lg bg-blue-500 hover:bg-blue-800 p-2 gap-2 '>Login</button>
        </div>
          
        </form>
      </div>
    </>
  )
}

export default App