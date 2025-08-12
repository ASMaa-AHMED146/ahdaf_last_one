import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegCircleUser, FaBars } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';
import img from '../../../assets/images/logo.png';
import EgyptFlag from '../../../assets/images/Egyptflag.jpg';
import UKFlag from '../../../assets/images/UKFlag.png'; 

export default function Header() {
    const [isopen, setOpen] = useState(false);
    const [showlog, setLog] = useState(false);

    function toggleMenu() {
        setOpen((isopen) => !isopen);
    }

    function userToggle() {
        setLog((showlog) => !showlog);
    }

    return (
        <header className='bg-[#1A7474] flex flex-col lg:flex-row justify-between px-[20px] md:px-[50px] m-auto pb-[10px]'>
            <div className='flex items-center max-lg:justify-between lg:gap-[20px] w-full'>
                <Logo />
                <div>
                    <FaBars style={{ color: 'white' }} className='text-[25px] cursor-pointer lg:hidden' onClick={toggleMenu} />
                </div>
                <Nav />
            </div>

            <div className='flex items-center'>
                <Menu isopen={isopen} showlog={showlog} usertoggle={userToggle} toggleMenu={toggleMenu} />
                <User />
            </div>
        </header>
    );
}

function Logo() {
    return (
        <div className='max-w-[60px]'>
            <img src={img} alt='dubai logo' loading='lazy' />
        </div>
    );
}

function Nav() {
    return (
        <nav className='hidden lg:block'>
            <ul className='lg:flex text-white gap-[30px] px-[10px] border-[1px] border-[#8F8F8FF0] rounded-[20px] py-[5px] font-syne'>
                <NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>الرئيسية</NavLink>
                <NavLink to={'/services'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>الخدمات</NavLink>
                <NavLink to={'/packages'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>الباقات</NavLink>
                <NavLink to={'/offers'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>العروض</NavLink>
                <NavLink to={'/aboutus'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>من نحن</NavLink>
                <NavLink to={'/callus'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>اتصل بنا</NavLink>
                <NavLink to={'/blog'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })}>المدونة</NavLink>
            </ul>
        </nav>
    );
}

function User() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const userDropdownRef = useRef(null);
    const langDropdownRef = useRef(null);
    const nav = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setUserMenuOpen(false);
            }
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='hidden lg:flex w-[500px] justify-end relative'>
            <div className='flex max-w-[200px] items-center justify-end gap-[20px]'>
                {/* قائمة اللغات المنسدلة */}
                <div className='relative' ref={langDropdownRef}>
                    <p className='flex gap-[5px] items-center text-white cursor-pointer' onClick={() => setLangMenuOpen(!langMenuOpen)}>
                        <img src={EgyptFlag} alt='Egypt flag' className='max-w-[30px] max-h-[30px] rounded-[50%]' />
                        العربية
                    </p>
                    {langMenuOpen && (
                        <>
                            <ul className='absolute top-[150%] right-0 text p-[10px] z-30 bg-[#f36b35c5] rounded-[5px]'>
                                <li className=' hover:text-white cursor-pointer' onClick={() => setLangMenuOpen(false)}>العربية</li>
                                <li className='hover:text-white  cursor-pointer' onClick={() => setLangMenuOpen(false)}>English</li>
                            </ul>
                            <IoMdArrowDropup style={{ color: '#f36b35c5' }} className='absolute top-[90%] text-[20px] right-[0px]' />
                        </>
                    )}
                </div>

                {/* قائمة المستخدم المنسدلة */}
                <div className='relative' ref={userDropdownRef}>
                    <FaRegCircleUser className='text-[22px] cursor-pointer' onClick={() => setUserMenuOpen(!userMenuOpen)} style={{ color: 'white' }} />
                    {userMenuOpen && (
                        <>
                            <ul className='absolute top-[150%] left-0 text p-[10px] z-30 bg-[#f36b35c5] rounded-[5px] w-[120px]'>
                                <li className=' hover:text-white cursor-pointer' onClick={() => { setUserMenuOpen(false); nav('/auth'); }}>
                                    تسجيل دخول
                                </li>
                                <li className='hover:text-white cursor-pointer ' onClick={() => { setUserMenuOpen(false); nav('/auth/login'); }}>
                                    انشاء حساب
                                </li>
                            </ul>
                            <IoMdArrowDropup style={{ color: '#f36b35c5' }} className='absolute top-[90%] text-[20px] left-[0px]' />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function Menu({ isopen, toggleMenu }) {
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    function closeAllMenus() {
        setLangMenuOpen(false);
        toggleMenu();
    }
    
    return (
        <>
            <div className='relative lg:hidden'>
                {isopen && (
                    <div className='bg-[#1A7474] top-[40px] list-none text-[white] items-start flex flex-col gap-[10px] pr-[50px]'>
                        <NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>الرئيسية</NavLink>
                        <NavLink to={'/services'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>الخدمات</NavLink>
                        <NavLink to={'/packages'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>الباقات</NavLink>
                        <NavLink to={'/offers'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>العروض</NavLink>
                        <NavLink to={'/aboutus'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>من نحن</NavLink>
                        <NavLink to={'/callus'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>اتصل بنا</NavLink>
                        <NavLink to={'/blog'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>المدونة</NavLink>

                        {/* قائمة اللغات المنسدلة في الموبايل */}
                        <li className='relative'>
                            <p className='flex gap-[5px] items-center text-white cursor-pointer' onClick={() => setLangMenuOpen(!langMenuOpen)}>
                                <img src={EgyptFlag} alt='Egypt flag' className='max-w-[20px] max-h-[20px] rounded-[50%]' />
                                العربية
                            </p>
                            {langMenuOpen && (
                                <ul className='absolute right-[-60px] top-[10px] text p-[10px] z-30 bg-[#f36b35c5] rounded-[5px]'>
                                    <li className=' hover:text-white cursor-pointer text-[#1A7474]' onClick={() => { setLangMenuOpen(false); toggleMenu(); }}>العربية</li>
                                    <li className='hover:text-white cursor-pointer text-[#1A7474]' onClick={() => { setLangMenuOpen(false); toggleMenu(); }}>English</li>
                                </ul>
                            )}
                        </li>
                        
                        <NavLink to={'/auth'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>تسجيل دخول</NavLink>
                        <NavLink to={'/auth/login'} style={({ isActive }) => ({ color: isActive ? 'white' : '#D0D0D0' })} onClick={closeAllMenus}>انشاء حساب</NavLink>
                    </div>
                )}
            </div>
        </>
    );
}