import  { createContext, useState } from 'react'
import ShowUsers from './showUsers';


export const ProjectContex = createContext(null);

const App = () => {

  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const handleClick = () =>{
    setUser([...user,currentUser]);
    setCurrentUser("");
   }

  return (
    
    <>
   <ProjectContex.Provider value={{user,setUser}}>
   <div>
    <input 
    className='border-2 m-5 mx-12 rounded-md my-12'
    type='text'
     value={currentUser} 
     onChange={(e) =>setCurrentUser(e.target.value)}/>
     <button
     className='bg-gray-400 mr-27 p-2 py-2 px-3 rounded-xl' 
     onClick={handleClick}>ADD</button>
   </div>

<ShowUsers />
   
   </ProjectContex.Provider>
    </>
  )
}

export default App