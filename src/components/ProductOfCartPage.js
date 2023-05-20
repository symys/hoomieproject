import React from 'react'

function ProductOfCartPage({image, quantity, price}) {
  return (
    <div className='p-4'>
        <div className='rounded-[1em] shadow-xl duration-200 hover:bg-light2 hover:cursor-pointer'>
            <img className='max-w-[10em] rounded-[1em]' src={image} alt="black"/>
        </div>
    </div>
  )
}

export default ProductOfCartPage