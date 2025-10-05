import React from 'react'
import { SearchBtn } from './HtmlAssests'

const App = () => {
  return (
    <div>
      <p className='m-3 border-2 border-sky-600 p-3 w-auto text-center'>Hello world</p>
      <div className='border-5 border-red-500 flex flex-col justify-center items-center h-100'>
        <div className='border-2 w-25 h-25 m-2'>Box-1</div>
        <div className='border-2 w-25 h-25 m-2'>Box-2</div>
        <div className='border-2 w-25 h-25 m-2'>Box-3</div>
      </div>
      <SearchBtn />
    </div>
  )
}

export default App