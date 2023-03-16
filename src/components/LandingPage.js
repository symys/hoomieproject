import React from 'react'
import Footer from './Footer'
import HomePage from './HomePage'
import Products from "./Products"
import Services from "./Services"
import About from "./About"

function LandingPage() {
  return (
    <div className='flex flex-row'>
        <div className='bg-light2 fixed mt-[20em]'>
            <Footer className="flex"/>
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