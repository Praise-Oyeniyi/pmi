import React from 'react'
import Logo from '../../assets/images/logo.png';
import mLogo from '../../assets/icons/mobile-logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCaretDown    } from "react-icons/fa";
import { Link } from 'react-router';
import { FaChevronRight } from 'react-icons/fa6';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";




const Header = () => {
    const [nav,setNav] = useState(false)


  return (
    <header className='w-full bg-white max-h-24 flex items-center cursor-pointer'>
        <div className="header-inner w-full justify-between items-center px-7 hidden md:flex">


            <div className="header-left w-3/6 flex items-center gap-x-10">
                <Link to={'/'}>
                    <div className="logo h-24 flex w-auto">
                        <img src={Logo} alt="pmi-logo" className='object-contain h-full  w-full'/>
                    </div>
                </Link>

                <nav className="menu w-fit">
                    <ul className='text-black flex items-center gap-x-1 text-xl font-semibold h-24 relative'>
                        <li className='min-w-fit h-full'>
                            <Link to={'/About'}>
                                <div className=' flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>About Us</div>
                            </Link>
                        </li>
                        <li className='min-w-fit h-full'>
                            <Link to={'/Training'}>
                                <div className=' flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Training</div>
                            </Link>
                        </li>
                        
                        <li className='min-w-fit h-full relative group'>
                            <Link to={'/Home/Special Program/'}>
                                <div className='relative flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Special Program</div>
                            </Link>
                            <ul className='font-normal absolute space-y-1 w-[16rem] group-hover:border-t-secondary group-hover:block text-[#676767] bg-white px-4 py-3 border-t-4 border-t-transparent hidden'>
                                <li className=''>E&C PM Footprints</li>
                                <li>PM Footprints</li>
                                <li>PM Enrich</li>
                                <li>Academic Relations</li>
                                <li>Non-Profits and NGOs</li>
                                <li>PM Open Space</li>
                            </ul>
                        </li>
                        <li className='min-w-fit h-full'>
                            <div className=' flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Volunteering</div>
                        </li>
                        <li className='min-w-fit h-full'>
                            <Link to={'/Contact'}>
                                <div className=' flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Contact</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header-right flex w-auto items-center gap-x-5">
                <div className="socials flex gap-x-3 text-[#131313]">
                    <FaFacebookF size={15}/>
                    <FaInstagram size={15}/>
                    <FaLinkedinIn size={15}/>
                </div>
                <button className='w-fit flex text-base font-normal justify-between items-center border border-[#F3EFEF] p-2 rounded-sm text-[#7C7C7C] gap-x-2'>Change Language <span><FaCaretDown /></span></button>
                <button className='text-base font-normal text-[#7C7C7C]'>Login</button>
            </div>
            
        </div>

        <div className="mobile-nav w-full relative md:hidden">
            <div className='w-full shadow-sm'>
                <div className='relative flex justify-between w-5/6 mx-auto h-16 items-center'>
                    <Link to={'/'}>
                        <div className="m-logo">
                            <img src={mLogo} alt="PMI logo" />
                        </div>
                    </Link>

                    <div onClick={()=>setNav(!nav)}>
                        {!nav?<div className='cursor-pointer space-y-1 '>
                            <div className='bg-dark w-4 h-[0.15rem] ml-auto'></div>
                            <div className='bg-dark w-5 h-[0.15rem]'></div>
                            <div className='bg-dark w-3 h-[0.15rem] ml-auto'></div>
                        </div>
                        :
                            <AiOutlineClose size={20} className="text-dark"/>
                        }
                    </div>
                </div>

                <div className={`mobile-head-links-outer w-full duration-300 transition-all ease-in-out relative ${nav?'left-0':'-left-[100rem]'}`}>
                    <div className="mobile-outer w-full h-screen bg-hero-bg absolute">
                        <nav className="menu w-full">
                            <ul className='text-dark w-full'>
                                <li className='w-full h-full '>
                                    <Link to={'/About'}>
                                        <div className='text-sm font-medium flex justify-between px-7 pr-9 py-3 border-b border-b-[#BFBFBF] items-center'>About Us <FaChevronRight size={10}/></div>
                                    </Link>
                                </li>
                                <li className='w-full h-full '>
                                    <Link to={'/Training'}>
                                        <div className='text-sm font-medium flex justify-between px-7 pr-9 py-3 border-b border-b-[#BFBFBF] items-center'>Training <FaChevronRight size={10}/></div>
                                    </Link>
                                </li>
                                
                                <li className='w-full h-full   relative'>
                                    <Link to={'/Home/Special Program/'}>
                                        <div className='text-sm font-medium px-7 pr-9 py-3 border-b border-b-[#BFBFBF] flex justify-between items-center'>Special Program <FaChevronRight size={10}/></div>
                                    </Link>
                                    <ul className='font-normal w-full space-y-2 hidden  text-[#676767] bg-white px-7 pr-9 py-3 border-t-4 border-t-transparent'>
                                        <li className=''>E&C PM Footprints</li>
                                        <li>PM Footprints</li>
                                        <li>PM Enrich</li>
                                        <li>Academic Relations</li>
                                        <li>Non-Profits and NGOs</li>
                                        <li>PM Open Space</li>
                                    </ul>
                                </li>
                                <li className='w-full h-full '>
                                    <div className='text-sm font-medium flex justify-between px-7 pr-9 py-3 border-b border-b-[#BFBFBF] items-center'>Volunteering <FaChevronRight size={10}/></div>
                                </li>
                                <li className='w-full h-full'>
                                    <Link to={'/Contact'}>
                                        <div className='text-sm font-medium flex justify-between px-7 pr-9 py-3 items-center'>Contact <FaChevronRight size={10}/></div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className='mt-5 cursor-pointer space-y-5'>
                            <button className='w-5/6 mx-auto flex text-sm font-normal justify-between items-center border border-[#F3EFEF] px-3 rounded-md text-[#7C7C7C] gap-x-2 bg-[#FDFDFD] h-[2.9rem]'>Change Language <span><FaCaretDown /></span></button>
                            <h5 className='text-base text-center font-normal text-[#7C7C7C] tracking-wide'>Log In</h5>
                        </div>
                    </div>

                </div>
            </div>
            
            

        </div>

    </header>
  )
}

export default Header