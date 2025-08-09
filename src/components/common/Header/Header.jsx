import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import img from "../../../assets/images/logo.png";
import EgyptFlag from "../../../assets/images/Egyptflag.jpg"
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";

export default function Header() {
    const [isopen, setopen] = useState(false);
    const [showlog, setlog] = useState(false)
    function ToggleMenu() {
        setopen((isopen) => !isopen);
    }
    function usertoggle() {
        setlog((showlog) => !showlog);
    }
    return (
        <header className='bg-[#1A7474] flex flex-col lg:flex-row  justify-between px-[20px] md:px-[50px] m-auto pb-[10px] '>
            <div className='flex items-center  max-lg:justify-between lg:gap-[20px]   w-full '>
                <Logo />
                <div>
                    <FaBars style={{ color: "white" }} className='text-[25px] cursor-pointer  lg:hidden' onClick={() => ToggleMenu()} />
                </div>
                <Nav />
            </div>

            <div className='flex items-center'>
                <Menu isopen={isopen} showlog={showlog} usertoggle={usertoggle} />
                <User />
            </div>
        </header>
    )
}

function Logo() {
    return (
        <>
            <div className='max-w-[60px]  '>
                <img src={img} alt='dubai logo' loading='lazy' />
            </div>
        </>
    )
}

function Nav() {
    
    return (
        <>
            <nav className='hidden lg:block'>
                <ul className='lg:flex  text-white gap-[30px] px-[10px] border-[1px] border-[#8F8F8FF0] rounded-[20px] py-[5px] font-syne '>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0',})}>الرئيسية</NavLink>
                     {/* here will add dropmenu */}
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >الخدمات </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >الباقات </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >العروض  </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >من نحن  </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >اتصل بنا</NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >المدونة </NavLink>
                </ul>
            </nav>
        </>
    )
}

function User() {
    const [open,setopen]=useState(false);
    const dropdownref=useRef(null);
    const nav=useNavigate();
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownref.current && !dropdownref.current.contains(event.target)) {
        setopen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
        <>
            <div className='hidden lg:flex  w-[500px] justify-end  relative '>
                <div className='flex max-w-[200px] items-center justify-end  gap-[20px]'>

                    <p className='flex gap-[5px] items-center text-white cursor-pointer'><img src={EgyptFlag} alt='Egypt falg' className='max-w-[30px] max-h-[30px] rounded-[50%]' />العربيه <span className='rounded-[50%]  '></span></p>
                    
                    <FaRegCircleUser className='text-[22px] cursor-pointer ' onClick={()=>setopen(!open)} style={{ color: "white" }} />
                    {
                        open&&<>
                        <ul className="absolute top-[150%] left-0 text p-[10px] z-30 bg-[#f36b35c5] rounded-[5px]  " ref={dropdownref}>
                        <li className=' hover:text-white cursor-pointer' onClick={()=>{setopen(!open);nav('/auth')}} >تسجيل دخول</li>
                        <li className='hover:text-white cursor-pointer ' onClick={()=>{setopen(!open); nav('/auth/login'); }}>انشاء حساب </li>
                    </ul>
                    <IoMdArrowDropup style={{color:'#f36b35c5'}} className='absolute top-[90%]  text-[20px] left-[0px]'/>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

function Menu({ isopen, showlog }) {
    return (
        <>
            <div className='relative lg:hidden'>

                {isopen && <div className='bg-[#1A7474] top-[40px] list-none text-[white] items-start  flex flex-col gap-[10px] pr-[50px] '>
                   <NavLink to={'/'} style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0',})}>الرئيسية</NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >الخدمات </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >الباقات </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >العروض  </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >من نحن  </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >اتصل بنا</NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >المدونة </NavLink>
                    <li><p className='flex gap-[5px] items-center text-white'><img src={EgyptFlag} alt='Egypt falg' className='max-w-[20px] max-h-[20px] rounded-[50%]' />العربيه <span className='rounded-[50%]  '></span></p></li>
                    {
                        showlog &&
                        <div>
                            <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >تسجيل دخول </NavLink>
                            <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >انشاء حساب</NavLink>
                        </div>
                    }
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} >تسجيل دخول </NavLink>
                    <NavLink style={({ isActive }) => ({color: isActive ? 'white' : '#D0D0D0'})} > انشاء حساب  </NavLink>
                </div>}
            </div>
        </>
    )
}
