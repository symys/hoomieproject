import React from 'react'
import Footer from './Footer'
import HomePage from './HomePage'
import Products from "./Products"
import Services from "./Services"
import About from "./About"
// import Deneme from "./deneme"


function LandingPage() {
  return (
    <div className='flex lg:flex-row flex-col'>
        <div className='bg-light2 fixed mt-[20em]'>
            <Footer className="flex"/>
        </div>
        <div className='flex flex-col'>
           <HomePage/>
           <Products/>
           <Services/>
           <About />
           {/* <Deneme /> */}
        </div>
        
    </div>
  )
}

export default LandingPage