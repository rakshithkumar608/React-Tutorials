import  { useContext } from 'react'
import { ProjectContex } from './App'
import Examplr1 from './Examplr1'

const ShowUsers = () => {

  const {user} = useContext(ProjectContex)
  return (
    <>
    {
      user.map((element, index) => (
        <h1 key={index}>{element}</h1>
      ))
    }
     <Examplr1 />
    </>

  )
}

export default ShowUsers