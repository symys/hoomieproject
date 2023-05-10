import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function ThankYouPage() {
    const location = useLocation();
    const propsData = location.state;

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div>{propsData}</div>
        <div>
        <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 py-2 lg:px-20 px-8 rounded lg:text-xl text-sm tracking-widest ">
          Back to Home
        </button>
        </Link>
        </div>
    </div>
  )
}

export default ThankYouPage