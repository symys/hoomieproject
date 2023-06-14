import React from 'react'
import Scroll from './Scroll'
import HomePage from './HomePage'
import Products from "./Products"
import Services from "./Services"
import About from "./About"

function LandingPage() {
  return (
    <div className='flex lg:flex-row flex-col'>
        <div className=' fixed mt-[20em]'>
            <Scroll className="flex"/>
        </div>
        <div className='flex flex-col'>
           <HomePage/>
           <Products/>
           <Services/>
           <About />
        </div>
        
    </div>
  )
}

export default LandingPage