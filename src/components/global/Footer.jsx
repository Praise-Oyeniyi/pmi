import React from 'react'
import Logo from '../../assets/icons/logo.svg';


const Footer = () => {
  return (
    <footer className="footer-outer w-full pt-20">
        <div className='w-5/6 mx-auto'>
            <div className="footer-inner-inner flex justify-between items-start pb-5">
                <div className='w-[30%]'>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <p className='font-normal text-xl pt-5'>
                        The Bangalore Chapter of the Project Management Institute (PMI) was founded in 1998, as an autonomous, non-profit,
                        membership association dedicated to the science of project Management.
                    </p>
                </div>


                <div className='w-auto'>
                    <div className='footer-right-inner w-full flex justify-between items-start'>
                        <div className=''>
                            <h5 className='font-medium text-2xl pb-2'>Explore</h5>
                            <ul className="text-lg font-normal space-y-2">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Brand Of Directors</li>
                                <li>Mission & Vision</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-2xl pb-2'>Programs</h5>
                            <ul className="text-lg font-normal space-y-2">
                                <li>PMP Certification</li>
                                <li>PMP-ACP Training</li>
                                <li>PM Footprints</li>
                                <li>PM Enrich</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-2xl pb-2'>Membership</h5>
                            <ul className="text-lg font-normal space-y-2">
                                <li>Mebership Benefits</li>
                                <li>Volunteer With Us</li>
                                <li>Memeber Dashboard</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-medium text-2xl pb-2'>Resources</h5>
                            <ul className="text-lg font-normal space-y-2">
                                <li>PM Essence</li>
                                <li>Events Archive</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom w-full pt-10 pb-5">
                        <ul className='flex gap-x-7 font-normal text-base w-full justify-between'>
                            <li className=''>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Sitemap</li>
                            <li>©2025 PMI Bangalore Chapter. All Right Reserved.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
