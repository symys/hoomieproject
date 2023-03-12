import React from 'react'
import searchIcon from '../images/search.png'
import cartIcon from '../images/shopping-cart.png'
import userIcon from '../images/user.png'


function Navbar() {
  return (
    <div className='flex lg:flex-row gap-[21em] font-bakbak tracking-wider text-dark1 bg-light2 pt-4 pb-4 items-center justify-center fixed ml-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
      <div className='text-4xl'>Hoomie</div>
      <div className='flex gap-12 text-xl font-montserrat font-bold'>
        <div className='hover:scale-110 duration-500 cursor-pointer'>Home</div>
        <div className='hover:scale-110 duration-500 cursor-pointer'>Products</div>
        <div className='hover:scale-110 duration-500 cursor-pointer'>Services</div>
        <div className='hover:scale-110 duration-500 cursor-pointer'>About Us</div>
      </div>
      <div className='flex h-10 gap-10'>
        <img src={searchIcon} alt="searchIcon" className='hover:scale-110 duration-500 cursor-pointer'/>
        <img src={cartIcon} alt="cartIcon" className='hover:scale-110 duration-500 cursor-pointer'/>
        <img src={userIcon} alt="userIcon" className='hover:scale-110 duration-500 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar