import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+91');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

 
  const [productList, setProductList] = useState([]);
  const [showGeneratedBills, setShowGeneratedBills] = useState(false)

  const handleAddItem = () => {
    let obj1 = {
      productName: productName,
      quantity: quantity,
      total: (price * quantity).toFixed(2)
    }

    setProductList([...productList, obj1])
     setProductName("");
    setQuantity(0);
    setPrice(0);
  }

  const handleGenerateBills = () =>{
    if (!showGeneratedBills){
      setShowGeneratedBills(true);
    }
  }

  const resetBills = () =>{
    setProductList([]);
    setCustomerPhone("+91");
    setCustomerName("");
    setProductName("");
    setQuantity(0);
    setPrice(0);
  }


  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <div className='text-center px-4 py-6 md:py-10'>
        <h1 className='font-sans text-3xl md:text-5xl font-bold'>Bill Counter</h1>
        <h2 className='font-sans text-xl md:text-3xl mt-3 md:mt-5'>Welcome to the Bill Counter...</h2>
      </div>

      {/* Customer Details Section */}
      <div className='mx-4 md:mx-10 lg:mx-60'>
        <div className='bg-blue-200 border border-black rounded-lg p-4 md:p-5'>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 sm:space-x-3 items-start sm:items-center'>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center flex-1'>
              <label 
                className='font-semibold text-lg md:text-xl whitespace-nowrap'
                htmlFor='name'>Customer Name:</label>
              <input 
                onChange={(e) => setCustomerName(e.target.value)}
                type='text' 
                name='name' 
                id='name'
                value={customerName} 
                className='border border-black rounded-lg p-2 w-full sm:flex-1'
                placeholder='Enter customer name'
              />
            </div>
             
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center flex-1'>
              <label 
                className='font-semibold text-lg md:text-xl whitespace-nowrap'
                htmlFor='contact'>Customer Phone:</label>
              <input 
                onChange={(e) => setCustomerPhone(e.target.value)}
                type='tel' 
                name='contact' 
                id='contact'
                value={customerPhone} 
                className='border border-black rounded-lg p-2 w-full sm:flex-1'
                placeholder='+91 XXXXXXXXXX'
              />
            </div>
          </div>
        </div>
      </div>
    
    {
      productList.length>0 &&  <div className="mx-4 md:mx-10 lg:mx-60 mt-6 md:mt-12 items-center flex flex-col">
      <table className='w-70 border border-black text-center'>
        <tr className='bg-blue-200 border border-black'>
         <th className='border border-black'>SL</th>
         <th className='border border-black'>Name</th>
         <th className='border border-black'>QTY</th>
         <th className='border border-black'>Total</th>
        </tr>
       {
        productList.map((item, index) => (
          <tr key={index} className='border border-black'>
            <td className='border border-black'>{index + 1}</td>
            <td className='border border-black'>{item.productName}</td>
            <td className='border border-black'>{item.quantity}</td>
            <td className='border border-black'>₹{item.total}</td>
          </tr>
        ))
       }
      </table>
      <button 
      onClick={handleGenerateBills}
      className='font-bold mt-5 bg-blue-500 p-2 rounded-lg border-2 hover:bg-blue-400'>Generate Bill</button>
     </div>
    }

      {/* Product Details Section */}
      <div className='bg-green-500 mt-6 md:mt-12 rounded-lg p-4 md:p-6 mx-4 md:mx-10 lg:mx-60'>
        {/* Product Name Row */}
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center mb-4'>
          <label htmlFor='productname' className="font-semibold text-lg md:text-xl whitespace-nowrap">Product Name:</label>
          <input 
            type='text' 
            name='productname'
            id='productname'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border border-black rounded-lg p-2 w-full sm:flex-1"
            placeholder='Enter product name'
          />
        </div>

        {/* Quantity and Price Row */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center flex-1'>
            <label htmlFor='productqty' className="font-semibold text-lg md:text-xl whitespace-nowrap">QTY:</label>
            <input 
              type='number' 
              name='productqty'
              id='productqty'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-black rounded-lg p-2 w-full sm:flex-1"
              placeholder='0'
              min='1'
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center flex-1'>
            <label htmlFor='price' className="font-semibold text-lg md:text-xl whitespace-nowrap">Price:</label>
            <input 
              type='number' 
              name='price'
              id='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-black rounded-lg p-2 w-full sm:flex-1"
              placeholder='0.00'
              min='0'
              step='0.01'
            />
          </div>
        </div>

        {/* Total and Button Row */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between bg-white bg-opacity-20 rounded-lg p-4'>
          <p className='text-xl md:text-2xl font-bold text-center sm:text-left'>
            Total: ₹{quantity && price ? (quantity * price).toFixed(2) : '0.00'}
          </p>
          <button 
          onClick={handleAddItem}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed'
            
          >
            Add Item
          </button>
        </div>
      </div>


      {/* Generating bill */}

     {showGeneratedBills &&  <div className='text-center mt-8 md:mt-12 mb-4'>
        <div className='text-4xl font-bold text-gray-600'>
        <h1 className=''>Generated Bills</h1>
       <p className='text-lg text-gray-500 mt-2'>Your generated bills will appear here.</p>
        </div>

        <div className="text-center items-center mt-6 md:mt-12 ml-14 gap-80 font-semibold">
          <p className='text-center font-semibold items-center justify-center text-1xl'>Customer Name: {customerName}</p>
          <p className=''>Contact :{customerPhone}</p>
        </div>
       <div className="mx-4 md:mx-10 lg:mx-60 mt-6 md:mt-12 items-center flex flex-col">
      <table className='w-70 border border-black text-center'>
        <tr className='bg-blue-200 border border-black'>
         <th className='border border-black'>SL</th>
         <th className='border border-black'>Name</th>
         <th className='border border-black'>QTY</th>
         <th className='border border-black'>Total</th>
        </tr>
       {
        productList.map((item, index) => (
          <tr key={index} className='border border-black'>
            <td className='border border-black'>{index + 1}</td>
            <td className='border border-black'>{item.productName}</td>
            <td className='border border-black'>{item.quantity}</td>
            <td className='border border-black'>₹{item.total}</td>
          </tr>
        ))
       }
      </table>

      <button 
      onClick={resetBills}
      className='font-bold mt-5 bg-blue-500 p-2 rounded-lg border-2 hover:bg-blue-400 w-auto'>Reset</button>
     </div>


      </div>}
    </div>
  )
}

export default Counter