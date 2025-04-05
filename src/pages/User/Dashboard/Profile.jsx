import React from 'react'
import Footer from '../../../components/global/Footer'
import Header from '../../../components/global/Header'
import PP from '../../../assets/images/profile-img.png'

const Profile = () => {
  return (
    <div className='w-full h-auto bg-hero-bg font-aptos text-dark !overflow-x-hidden'>
        <Header/>
        <div className='main w-full md:border-t border-t-[#D9D9D9] bg-white pb-16'>
            <div className="p-head w-full h-14 bg-purple flex items-center">
                <div className='cursor-pointer h-full w-5/6 mx-auto text-white text-xl font-semibold flex items-center justify-between'>
                    <ul className='flex items-center pt-3.5 h-full gap-x-7'>
                        <li className='border-b-2 h-full border-b-white'>My Profile</li>
                        <li className='border-b-2 h-full border-b-transparent'>My Videos</li>
                    </ul>
                    
                    <button className='cursor-pointer'>Logout</button>
                </div>
            </div>


            <div className='py-12 w-5/6 mx-auto'>
                <div className='flex items-center gap-x-10'>
                    <div className='h-72 w-72 rounded-3xl relative overflow-hidden'>
                        <img src={PP} alt="" className='absolute h-full w-full object-cover '/>
                    </div>

                    <div className='flex flex-col justify-between gap-y-12 h-full '>
                        <div className='space-y-3'>
                            <h3 className='text-4xl font-bold'>Krishnesh nair</h3>
                            <h5 className='capitalize text-3xl font-medium'>membership number: <span className='font-semibold'>123456789</span> </h5>
                        </div>
                        

                        <div className='space-y-3'>
                            <h3 className='text-3xl font-semibold'>Contact</h3>
                            <div className='flex gap-x-5'>
                                <div className='bg-[#F6F6F6] rounded-xl flex items-center gap-x-3 p-3'>
                                    <h6 className='text-sm md:text-xl font-normal capitalize'>email address:</h6>
                                    <h5 className='text-sm md:text-xl font-semibold'>krishneshnair@gmail.com</h5>  
                                </div>

                                <div className='bg-[#F6F6F6] rounded-xl flex items-center gap-x-4 p-3'>
                                    <h6 className='text-sm md:text-xl font-normal capitalize'>Phone number::</h6>
                                    <h5 className='text-sm md:text-xl font-semibold'>+91 73565 29814</h5>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile