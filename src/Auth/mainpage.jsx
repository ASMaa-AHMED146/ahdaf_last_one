import React from 'react'
import Logo from "../assets/images/logo.png"
import bacground from "../assets/images/Login.jpg"
export default function Mainpage({children}) {
  return (
    <div className='relative' style={{backgroundImage: `url("${bacground}")`,backgroundSize: "cover", backgroundPosition: "center",backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}> 
        <div className='bg-[#FFF7F4] h-[100vh] lg:w-[50%] md:w-[70%] absolute right-0 rounded-l-[20px]'>
            {
                children
            }
        </div>
    </div>
  )
}
