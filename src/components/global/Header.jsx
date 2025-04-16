import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.jpg';
import mLogo from '../../assets/icons/mobile-logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { AiOutlineClose } from "react-icons/ai";
import { createCertQueryOptions, createSpecialQueryOptions, createUserQueryOptions } from '../queryOptions/QueryOptions';
import { useQueries } from '@tanstack/react-query';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [menu, setMenu] = useState(null);
    const [special, training, user] = useQueries({  
        queries:[
            createSpecialQueryOptions(),
            createCertQueryOptions(),
            createUserQueryOptions(),
        ]
    })
    
    useEffect(() => {
    // Remove any existing Google Translate elements to avoid duplicates
    const existingElements = document.querySelectorAll('.google-translate-element, #google_translate_script');
    existingElements.forEach(el => el.remove());
    
    // Define the initialization function
    window.googleTranslateElementInit = () => {
        // Initialize only one element
        if (document.getElementById('google_translate_element')) {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ar,de,en,es,fr,zh-CN', 
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        }
    };
    
    // Create script element
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.id = 'google_translate_script';
    document.body.appendChild(script);
    
    // Function to move the translator between containers
    const moveTranslator = (isMobile) => {
        const sourceId = isMobile ? 'google_translate_element' : 'google_translate_element_mobile';
        const targetId = isMobile ? 'google_translate_element_mobile' : 'google_translate_element';
        
        const sourceElement = document.getElementById(sourceId);
        const targetElement = document.getElementById(targetId);
        
        if (sourceElement && targetElement && sourceElement.firstChild) {
            // Move all children from source to target
            while (sourceElement.firstChild) {
                targetElement.appendChild(sourceElement.firstChild);
            }
        }
    };
    
    // Set up a way to detect mobile vs desktop view
    // This is an example - adjust based on how you determine mobile vs desktop in your app
    const handleResize = () => {
        const isMobile = window.innerWidth < 768; // Example breakpoint
        moveTranslator(isMobile);
    };
    
    // Initial check and add resize listener
    window.addEventListener('resize', handleResize);
    
    // Run once after translator is likely loaded
    setTimeout(handleResize, 1000);
    
    // Cleanup on unmount
    return () => {
        window.removeEventListener('resize', handleResize);
        delete window.googleTranslateElementInit;
        if (document.getElementById('google_translate_script')) {
            document.getElementById('google_translate_script').remove();
        }
    };
}, []);
    

    return (
        <header className='w-full bg-white max-h-24 flex items-center cursor-pointer'>
            <div className="header-inner w-full justify-between items-center px-7 hidden md:flex">

                <div className="header-left w-3/6 flex items-center gap-x-8">
                    <Link to={'/'}>
                        <div className="logo w-[8rem] h-17 max-h-17 overflow-hidden flex">
                            <img src={Logo} alt="pmi-logo" className='object-contain w-full h-full z-[9999999]'/>
                        </div>
                    </Link>

                    <nav className="menu w-fit">
                        <ul className='text-black flex items-center gap-x-1 text-xl font-semibold h-18 relative'>
                            <li className='min-w-fit h-full'>
                                <Link to={'/About'}>
                                    <div className='flex items-center px-3 h-full hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>About Us</div>
                                </Link>
                            </li>
                            <li className='min-w-fit h-full group'>
                                <div className='flex items-center px-3 h-full group-hover:bg-secondary group-hover:text-white duration-300 transition-all ease-linear'>Training</div>
                                <ul className='font-normal absolute space-y-1 w-fit z-50 group-hover:border-t-secondary group-hover:block text-[#676767] bg-white border border-hero-bg px-4 py-3 border-t-4 border-t-transparent hidden'>
                                    {training.isPending ?
                                        <li className='animate-pulse'>Loading Menus...</li>
                                        :
                                        Array.isArray(training.data?.data) && training.data.data.length > 0 ? (
                                            training.data.data.map((item, index) => (
                                                <Link to={`/Certifications/${item.cert_id}`} key={index}>
                                                    <li key={index} className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200 capitalize'>{item?.shortform.toLowerCase().includes('pmp') ? item.shortform+' Certfication Training': item.shortform+' Training'}</li>
                                                </Link>
                                            ))
                                        )
                                        :
                                        <li>Please reload page</li>
                                    }
                                    <Link to={'/Training'}><li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>Corporate Training</li></Link>
                                </ul>
                            </li>
                            
                            <li className='min-w-fit h-full relative group'>
                                <div className='relative flex items-center px-3 h-full group-hover:bg-secondary group-hover:text-white duration-300 transition-all ease-linear'>Special Program</div>
                                <ul className='font-normal absolute space-y-1 w-64 z-50 group-hover:border-t-secondary group-hover:block text-[#676767] bg-white border border-hero-bg px-4 py-3 border-t-4 border-t-transparent hidden'>
                                    {special.isPending ?
                                        <li className='animate-pulse'>Loading Menus...</li>
                                        :
                                        Array.isArray(special.data?.data) && special.data.data.length > 0 ? (
                                            special.data.data.map((item, index) => (
                                                <Link to={`/Special Program/${item.id}`} key={index}>
                                                    <li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>{item.name}</li>
                                                </Link>
                                            ))
                                        )
                                        :
                                        <li>Please reload page</li>
                                    }
                                    <Link to={'/academic-relations'}>
                                        <li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>Academic Relations</li>
                                    </Link>
                                    <Link to={"/non-profit"}>
                                        <li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>Non-Profits and NGOs</li>
                                    </Link>
                                </ul>
                            </li>
                            <li className='min-w-fit h-full group'>
                                <div className='relative flex items-center px-3 h-full group-hover:bg-secondary group-hover:text-white duration-300 transition-all ease-linear'>Volunteering</div>
                                <ul className='font-normal absolute space-y-1 w-64 z-50 group-hover:border-t-secondary group-hover:block text-[#676767] bg-white border border-hero-bg px-4 py-3 border-t-4 border-t-transparent hidden'>
                                    <Link to={'/membership'}>
                                        <li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>Membership</li>
                                    </Link>
                                    <Link to={'/Volunteer'}>
                                        <li className='hover:border-b-[#200F3B] w-fit border-b border-b-transparent transition-all ease-in duration-200'>Volunteering</li>
                                    </Link>
                                </ul>
                            </li>
                            <li className='min-w-fit h-full'>
                                <Link to={'/Contact'}>
                                    <div className='flex items-center px-3 h-full hover:bg-secondary hover:text-white duration-300 transition-all ease-linear'>Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right flex w-auto items-center gap-x-5">
                    <div className="socials flex gap-x-3 text-[#131313]">
                        <Link to={'https://www.facebook.com/PMIBDChapter/'} target='_blank'>
                            <FaFacebookF size={15} className="hover:scale-105 transition-all ease-in duration-200"/>
                        </Link>
                        <Link to={'https://www.instagram.com/pmi_bangladesh?igsh=b3JiN29uNGo5aDAz'} target='_blank'>
                            <FaInstagram size={15} className="hover:scale-105 transition-all ease-in duration-200"/>
                        </Link>
                        <Link to={'https://www.linkedin.com/company/pmi-bangladesh-chapter/'} target='_blank'>
                            <FaLinkedinIn size={15} className="hover:scale-105 transition-all ease-in duration-200"/>
                        </Link>
                    </div>
                    
                    {/* Desktop Google Translate Element */}
                    <div className="relative">
                        <div 
                            className='flex overflow-hidden max-h-[2.9rem] bg-[#FDFDFD] text-base font-normal justify-center items-center border border-[#F3EFEF] rounded-sm text-[#7C7C7C] gap-x-2'
                        >
                            <div id="google_translate_element" className='min-w-[10rem] max-w-[10rem] min-h-[2.9rem] flex justify-center items-center'></div>
                        </div>
                    </div>
                    
                    <Link to={`${user.data.success? '/Profile' : '/Login'}`}>
                        <button className='text-base font-normal transition-all duration-300 ease-in hover:underline hover:text-[#200F3B] text-[#7C7C7C] cursor-pointer'>{user.data.success? 'Profile' : 'Login'}</button>
                    </Link>
                </div>
            </div>

            <div className="mobile-nav w-full relative md:hidden z-50">
                <div className={`w-full transition-all duration-100 ease-in ${nav ? 'fixed' : 'relative'}`}>
                    <div className={`w-full bg-hero-bg relative transition-all duration-200 ease-linear z-5 ${nav ? 'shadow-md' : 'shadow-sm'}`}>
                        <div className='relative flex justify-between w-[90%] mx-auto h-16 max-h-16 items-center'>
                            <Link to={'/'}>
                                <div className="m-logo">
                                    <img src={mLogo} alt="PMI logo" />
                                </div>
                            </Link>

                            <div onClick={() => setNav(!nav)}>
                                {!nav ? 
                                    <div className='cursor-pointer space-y-1'>
                                        <div className='bg-dark w-4 h-[0.15rem] ml-auto'></div>
                                        <div className='bg-dark w-5 h-[0.15rem]'></div>
                                        <div className='bg-dark w-3 h-[0.15rem] ml-auto'></div>
                                    </div>
                                    :
                                    <AiOutlineClose size={20} className="text-dark"/>
                                }
                            </div>
                        </div>
                    </div>

                    <div className={`mobile-head-links-outer w-full duration-200 transition-all ease-in-out relative ${nav ? 'left-0' : '-left-[100rem]'}`}>
                        <div className={`mobile-outer w-full h-screen bg-white absolute`}>
                            <nav className="menu w-full">
                                <ul className='text-dark w-full'>
                                    <li className='w-full h-full'>
                                        <Link to={'/About'}>
                                            <div className='text-sm font-medium flex justify-between px-5 pr-7 py-3 border-b border-b-[#BFBFBF] items-center'>About Us <FaChevronRight size={10}/></div>
                                        </Link>
                                    </li>
                                    <li className='w-full h-full' onClick={() => setMenu(3)}>
                                        <div className='text-sm font-medium flex justify-between px-5 pr-7 py-3 border-b border-b-[#BFBFBF] items-center'>Training <FaChevronRight size={10}/></div>
                                        
                                        <ul className={`font-normal w-full space-y-2 border-b border-b-[#BFBFBF] text-[#676767] bg-white px-5 pr-7 py-3 border-t-4 border-t-transparent transition-all ease-linear duration-300 ${menu === 3 ? 'block' : 'hidden'}`}>
                                            {training.isPending ?
                                                <li className='animate-pulse'>Loading Menus...</li>
                                                :
                                                    Array.isArray(training.data?.data) && training.data.data.length > 0 ? (
                                                    training.data?.data?.map((item, index) => (
                                                        <Link to={`/Certifications/${item.cert_id}`} key={index}>
                                                            <li>{item.shortform+' Training'}</li>
                                                        </Link>
                                                    )))
                                                :
                                                <li className='animate-pulse'>Please reload page</li>
                                            }
                                            <Link to={'/Training'}><li>Academic Relations</li></Link>
                                        </ul>
                                    </li>
                                    
                                    <li className='w-full h-full relative' onClick={() => setMenu(0)}>
                                        <div 
                                            className='text-sm font-medium px-5 pr-7 py-3 border-b border-b-[#BFBFBF] flex justify-between items-center'
                                        >
                                            Special Program 
                                            <span className="h-5 z-30 flex justify-end items-center">
                                                <FaChevronRight size={10}/>
                                            </span>
                                        </div>
                                        
                                        <ul className={`font-normal w-full space-y-2 border-b border-b-[#BFBFBF] text-[#676767] bg-white px-5 pr-7 py-3 border-t-4 border-t-transparent transition-all ease-linear duration-300 ${menu === 0 ? 'block' : 'hidden'}`}>
                                            {special.isPending ?
                                                <li className='animate-pulse'>Loading Menus...</li>
                                                :
                                                    Array.isArray(special.data?.data) && special.data.data.length > 0 ? (
                                                    special.data?.data?.map((item, index) => (
                                                        <Link to={`/Special Program/${item.id}`} key={index}>
                                                            <li>{item.name}</li>
                                                        </Link>
                                                    )))
                                                :
                                                <li className='animate-pulse'>Please reload page</li>
                                            }
                                            <Link to={'/academic-relations'}><li>Academic Relations</li></Link>
                                            <Link to={"/non-profit"}><li>Non-Profits and NGOs</li></Link>
                                        </ul>
                                    </li>
                                    <li className='w-full h-full' onClick={() => setMenu(1)}>
                                        <div 
                                            className='text-sm font-medium flex justify-between px-5 pr-7 py-3 border-b border-b-[#BFBFBF] items-center' 
                                        >
                                            Volunteering
                                            <span className="h-5 z-30 flex justify-end items-center">
                                                <FaChevronRight size={10} className="w-fit"/>
                                            </span> 
                                        </div>
                                        <ul className={`font-normal w-full space-y-2 border-b border-b-[#BFBFBF] text-[#676767] bg-white px-5 pr-7 py-3 border-t-4 border-t-transparent transition-all ease-linear duration-300 ${menu === 1 ? 'block' : 'hidden'}`}>
                                            <Link to={'/membership'}><li className=''>Membership</li></Link>
                                            <Link to={'/Volunteer'}><li>Volunteering</li></Link>
                                        </ul>
                                    </li>
                                    <li className='w-full h-full'>
                                        <Link to={'/Contact'}>
                                            <div className='text-sm font-medium flex justify-between px-5 pr-7 py-3 items-center'>Contact <FaChevronRight size={10}/></div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className='cursor-pointer space-y-3 mt-3'>
                                {/* Mobile Google Translate Element */}
                                <div className='w-full bg-[#F5F5F5] py-3 flex justify-center z-20'>
                                    <div className='w-5/6 bg-[#FDFDFD] h-12 flex items-center px-3 rounded-md'>
                                        <div id="google_translate_element_mobile"></div>
                                    </div>
                                </div>

                                <Link to={`${user.data.success? '/Profile' : '/Login'}`}>
                                    <h5 className='text-base text-center font-normal text-[#7C7C7C] tracking-wide'>{user.data.success? 'Profile' : 'Log In'}</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header