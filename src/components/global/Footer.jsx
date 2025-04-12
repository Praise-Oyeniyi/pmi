import { useQueries } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import { createCertQueryOptions, createSpecialQueryOptions } from '../queryOptions/QueryOptions';


const Footer = () => {

    const [training, special] = useQueries({  
        queries:[
            createCertQueryOptions(),
            createSpecialQueryOptions(),
        ]
    })

  return (
    <footer className="footer-outer w-full pt-5 md:pt-20 bg-[#F5F5F5]">
        <div className='w-[90%] md:w-5/6 mx-auto'>
            <div className="footer-inner-inner flex flex-col md:flex-row justify-between items-start pb-5">
                
                <div className='md:w-[30%] w-full order-2 md:order-1 mt-7 md:mt-0'>
                    <div className="logo h-12  md:h-14">
                        <img src={Logo} alt="" className='h-full object-contain'/>
                    </div>
                    <p className='font-normal text-sm md:text-xl pt-3 md:pt-5'>
                        The Bangalore Chapter of the Project Management Institute (PMI) was founded in 1998, as an autonomous, non-profit,
                        membership association dedicated to the science of project Management.
                    </p>
                </div>


                <div className='w-auto order-1 md:order-2' >
                    <div className='footer-right-inner w-full flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-between items-start'>
                        <div className=''>
                            <h5 className='font-medium text-lg md:text-2xl pb-2'>Explore</h5>
                            <ul className="text-sm md:text-lg font-normal space-y-2">
                                <Link to={'/'}><li>Home</li></Link>
                                <Link to={'/About'}><li>About Us</li></Link>
                                <Link to={'/About#bod'}><li>Board Of Directors</li></Link>
                                <Link to={'/About#mission'}><li>Mission & Vision</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-lg md:text-2xl pb-2'>Programs</h5>
                            <ul className="text-sm md:text-lg font-normal space-y-2">
                                {training.isPending ?
                                    <li className='animate-pulse'>Loading Menus...</li>
                                    :
                                    Array.isArray(training.data?.data) && training.data.data.length > 0 ? (
                                        training.data.data.map((item, index) => (
                                            <Link to={`/Certifications/${item.cert_id}`} key={index}>
                                                <li key={index} className={`${index ===1 && 'hidden'}`}>{index ===2? item.shortform+' Certfication': item.shortform+' Training'}</li>
                                            </Link>
                                        ))
                                    )
                                    :
                                    <li>Please reload page</li>
                                }
                                <Link to={`/Special Program/${special?.data?.data && special?.data.data[3].id}`}><li>{special?.data?.data && special?.data.data[3].name}</li></Link>
                                <Link to={`/Special Program/${special?.data?.data && special?.data.data[2].id}`}><li>{special?.data?.data && special?.data.data[2].name}</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-lg md:text-2xl pb-2'>Membership</h5>
                            <ul className="text-sm md:text-lg font-normal space-y-2">
                                <Link to={'/membership#benefits'}><li>Membership Benefits</li></Link>
                                <Link to={'/Volunteer'}><li>Volunteer With Us</li></Link>
                                <Link to={'/Login'}><li>Member Dashboard</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-lg md:text-2xl pb-2'>Resources</h5>
                            <ul className="text-sm md:text-lg font-normal space-y-2">
                                <Link to={`/Special Program/${special && special?.data?.data[4].id}`}><li>{special && special?.data?.data[4].name}</li></Link>
                                <Link to={'/Special Program/56'}><li>Events Archive</li></Link>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom w-full pt-10 pb-5 hidden md:block">
                        <ul className='flex gap-x-7 font-normal text-base w-full justify-between'>
                            <li className=''>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Sitemap</li>
                            <li>©2025 PMI Bangalore Chapter. All Right Reserved.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-xs md:hidden font-normal text-center space-y-3 pb-7 pt-2'>
                <h6>©2025 PMI Bangalore Chapter. All Right Reserved.</h6>
                <ul className='flex gap-x-7   w-full justify-between'>
                    <li className=''>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Sitemap</li>
                </ul>
            </div>

        </div>
    </footer>
  )
}

export default Footer
