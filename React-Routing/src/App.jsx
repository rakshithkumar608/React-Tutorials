import React, {  useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import userContext from './components/UserContext.jsx'

const App = () => {
  const [isLogged,setIsLogged] = useState(false)
  return (
    
    <Router >
    <Navbar />
   <userContext.Provider value={{isLogged,setIsLogged}}>
    <Routes>
       <Route path='/home' element={<Home />}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
     </Routes>
    </userContext.Provider>
    </Router>
  )
}

export default App