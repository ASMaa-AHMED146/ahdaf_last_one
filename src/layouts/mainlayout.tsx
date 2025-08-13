import React from 'react'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function mainlayout() {
  return (
    <div>
        <Header/>
        <div className=' bg-[#FFF7F4]'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
