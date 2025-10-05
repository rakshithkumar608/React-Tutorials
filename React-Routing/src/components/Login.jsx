import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import userContext from './UserContext'

const Login = () => {
  const { isLogged, setIsLogged} = useContext(userContext);
  const navigation = useNavigate();
  
useEffect(() =>{
  if(!isLogged){
    navigation('/login')
  }  
},[])

  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

    const handleSubmit = () => {
 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     //Email validation
    if(!emailRegex.test(formData.email) ){
      alert("Please Enter valid email");
      return;

      
    } 
    // password validation
    if(passwordRegex.test(formData.password)) {
      alert("Enter Correct Password");
      return;
    } 
    //both are valid
      console.log('Login submitted:', formData)
      alert('Login successful!')
    navigation('/home')
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>setFormData({...formData,email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>setFormData({ ...formData,password : e.target.password})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Sign In
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{' '}
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login