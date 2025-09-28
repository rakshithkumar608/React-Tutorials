import React from 'react'

const Card = ({username,course,place}) => { //props destructure
  return (
    <>
      <h1>Course Completed</h1>
      <div className="m-10 border w-200 bg-blue-500 p-13" >
        <div className=''>
        <h3 className='text-2xl'>{username}</h3>
        </div>
      
      <div className='m-10 border w-200 bg-blue-300'>
     <ul>
      {
        course.map((element,index)=>(
          <li key={index}>{element}</li>
        ))
      }
     </ul>
     <p>{place}</p>
      </div>
      </div>
    </>
  )
}

export default Card