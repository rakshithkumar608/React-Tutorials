import React from 'react'
import Cards from './cards'

const Body = () => {
  let cardArray = [
    {
    title: "title 1",
    desc: "I am from react",
  },

   {
    title: "title 2",
    desc: "I am from react 2",
  },

   {
    title: "title 3",
    desc: "I am from react 3",
  },

   {
    title: "title 4",
    desc: "I am from react 4",
  },

  ]
  return (
    <div>
      <h1 className='text-4xl font-bold m-12 text-center'>Welcome To the Server</h1>
      {
        cardArray.map((element,index) =>(
          <Cards 
          key={index}
          title={element.title} desc={element.desc}/>
        ))
      }
    </div>
 
    
  )
}

export default Body