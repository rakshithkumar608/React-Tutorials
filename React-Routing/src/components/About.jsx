import React, { useContext } from 'react'
import userContext from './UserContext'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigation = useNavigate();
  const [isLogged, setIsLogged] = useContext(userContext);
  useEffect(() => {
    if(!isLogged)
     navigation('/login')
  },[])
  return (
    <div>About</div>
  )
}

export default About