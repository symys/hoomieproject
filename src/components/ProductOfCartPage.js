import React from 'react'

function ProductOfCartPage({image, quantity, price}) {
  return (
    <div className='p-4 font-montserrat'>
        <div className='rounded-[1em] shadow-xl duration-200 hover:bg-light2 flex flex-row justify-between pr-6'>
            <img className='max-w-[10em] rounded-[1em] p-2' src={image} alt="black"/>
            <div className='flex lg:flex-row flex-col lg:gap-[10em] gap-[3em]'>
                 <div className='flex flex-row gap-1 items-center'>
                <div className=' text-2xl  hover:cursor-pointer '><ion-icon  name="remove-outline"></ion-icon></div>
                <div className='text-3xl'>{quantity}</div>
                <div className="text-2xl  hover:cursor-pointer "><ion-icon name="add-outline"></ion-icon></div>
            </div>
            <div className='text-3xl flex items-center'>{price}</div>
            <div className='text-4xl items-center flex  hover:cursor-pointer '><ion-icon name="trash-outline"></ion-icon></div>
            </div>
           
        </div>
    </div>
  )
}

export default ProductOfCartPage