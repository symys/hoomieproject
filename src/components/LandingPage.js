import React from 'react'
import Footer from './Footer'
import HomePage from './HomePage'

function LandingPage() {
  return (
    <div className='flex flex-row'>
        <div className='bg-light2 fixed mt-[20em]'>
            <Footer className="flex"/>
        </div>
        <div className='flex flex-col'>
           <HomePage/>
        <HomePage/> 
        </div>
        
    </div>
  )
}

export default LandingPage