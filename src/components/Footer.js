import React from 'react'
import support from "../images/support.png"
// import setting from "../images/setting.png"
// import logout from "../images/logout.png"
import cartIcon from "../images/shopping-cart.png";
import userIcon from "../images/user.png";

function Footer() {
  return (
    <div className='bg-light2 bottom-0 left-0 '>
      <div className='lg:w-20 w-12  flex flex-col gap-3 bg-dark3 bg-opacity-30 lg:pl-6 pl-3 pb-6 pt-4 rounded-tr-[2em] rounded-br-[2em]'>
        <div>
            <img src={support} alt="support" className='lg:hover:h-10 lg:h-8 h-6 duration-500 '/>
        </div>
        <div>
            <img src={cartIcon} alt="setting" className='lg:hover:h-10 lg:h-8 h-6 duration-500 '/>
        </div>
        <div>
            <img src={userIcon} alt="logout" className='lg:hover:h-10 lg:h-8 h-6 duration-500 '/>
        </div>
      </div>
        
    </div>
  )
}

export default Footer