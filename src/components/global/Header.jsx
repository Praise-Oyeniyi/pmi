import React from 'react'
import Logo from '../../assets/images/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCaretDown    } from "react-icons/fa";
import { Link } from 'react-router';




const Header = () => {
  return (
    <header className='w-full bg-white h-24 flex items-center cursor-pointer'>
        <div className="header-inner w-full flex justify-between items-center px-7">


            <div className="header-left w-3/6 flex items-center gap-x-10">
                <Link to={'/'}>
                    <div className="logo h-24 flex w-auto">
                        <img src={Logo} alt="pmi-logo" className='object-contain h-full  w-full'/>
                    </div>
                </Link>

                <div className="menu w-fit">
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
                            <div className=' flex items-center px-3 h-full border-t-5 border-t-white hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Contact</div>
                        </li>
                    </ul>
                </div>
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

    </header>
  )
}

export default Header