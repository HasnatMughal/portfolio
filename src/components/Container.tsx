import React from 'react'

function Container({children}:any) {
  return (
    <div className='max-w-5xl w-full mx-auto'>{children}</div>
  )
}

export default Container