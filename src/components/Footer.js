import React from 'react'
import support from "../images/support.png"
import setting from "../images/setting.png"
import logout from "../images/logout.png"

function Footer() {
  return (
    <div className='bg-light2 bottom-0 left-0'>
      <div className='w-20 flex flex-col gap-3 bg-dark3 w-20 pl-6 pb-6 pt-4 rounded-tr-[2em] rounded-br-[2em]'>
        <div>
            <img src={support} alt="support" className='hover:h-10 h-8 duration-500 '/>
        </div>
        <div>
            <img src={setting} alt="setting" className='hover:h-10 h-8 duration-500 '/>
        </div>
        <div>
            <img src={logout} alt="logout" className='hover:h-10 h-8 duration-500 '/>
        </div>
      </div>
        
    </div>
  )
}

export default Footer