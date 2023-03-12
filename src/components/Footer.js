import React from 'react'
import support from "../images/support.png"
import setting from "../images/setting.png"
import logout from "../images/logout.png"

function Footer() {
  return (
    <div className='gap-3 flex flex-col bg-light2 pl-6 pb-6 '>
        <div>
            <img src={support} alt="support" className='hover:h-10 h-8 duration-500'/>
        </div>
        <div>
            <img src={setting} alt="setting" className='hover:h-10 h-8 duration-500'/>
        </div>
        <div>
            <img src={logout} alt="logout" className='hover:h-10 h-8 duration-500'/>
        </div>
    </div>
  )
}

export default Footer