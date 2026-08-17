import React from 'react'
type data={
    amount:string,
    text:string
}

function CardFeature({amount, text}:data) {
  return (
    
    <div className='min-h-64 min-w-64 w-full h-full  border border-gray-400 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold'>{amount}</h1>
        <p className='text-center'>{text}</p>
    </div>

  )
}

export default CardFeature