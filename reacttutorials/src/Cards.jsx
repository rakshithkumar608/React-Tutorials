import React from 'react'

const cards = (card) => {
  
  return (
    <>
    <div className='bg-blue-500 border-4 w-60 h-50 m-10 rounded-2xl flex-2' >
      <h2 className='text-3xl font-mono m-9 flex-col ' >{card.title}</h2>
      <p className='text-2xl font-medium m-9'>{card.desc}</p>
    </div>
    </>
  )
}

export default cards