import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);
  
  useEffect( ()=>{  //
     const handleLoadData = async () =>{
    const response = await axios.get("https://dummyjson.com/products")

    setData([...response.data.products])
    console.log(response.data.products);
    
  }

  handleLoadData();

  },[status]);//will reload many times

  return (
    <>
    <button
    onClick={() =>setStatus(status?false:true)} 
    className='mx-5 mt-5 border-3 border-blue-500 p-2 rounded-lg bg-green-300'
    >Load</button>
    <div className="min-h-screen items-center justify-center grid lg:grid-cols-3 ">
     
     {
      data.map((element, index) =>(
       
 <div 
 key={index}
 className="flex flex-col items-center bg-white rounded-ld border-3 mt-10 md:px-10 py-8 w-85 ml-10">
       <div className="items-center justify-center size-45 border-2 rounded-lg flex flex-col">
        <img src={element.thumbnail} alt='card image'/>
       </div>

       <div className=" items-start justify-start mx-10 md:mx-12 ">
        <h4 className='text-3xl font-bold'>{element.title}</h4>
        <p className='text-2xl'><b>Rs{element.price}</b></p>
       </div>
      </div>
      ))
     }
    </div>
    </>
  )
}

export default App





