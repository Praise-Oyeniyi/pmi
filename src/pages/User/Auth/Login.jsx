import React from 'react'
import Footer from '../../../components/global/Footer'
import Header from '../../../components/global/Header'
import Logo from '../../../assets/images/logo.png'
import LI from '../../../assets/images/LoginImg.png'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/otp')
    }

  return (
    <div className='w-full h-auto bg-hero-bg font-aptos text-dark !overflow-x-hidden'>
        <Header/>
        <div className='main w-full md:border-t border-t-[#D9D9D9] bg-white pb-20'>
            <div className='flex justify-between items-center gap-x-28'> 
                <div className="w-[45%]">
                    <div className='left w-[80%] space-y-7 ml-auto'>
                        <div className='h-12 relative overflow-hidden'>
                            <img src={Logo} alt="" className='absolute h-full object-cover' />
                        </div>

                        <div className='space-y-2 text-[#200F3B]'>
                            <h3 className='text-4xl font-semibold'>Login</h3>
                            <p className='text-xl font-normal '>Welcome! please log in with your PMI account to continue</p>
                        </div>

                        <div className="form">
                            <form action='#' className='space-y-5' onSubmit={(e)=>handleSubmit(e)}>
                                <div className="email-input w-full space-y-1">
                                    <label htmlFor="email" className=' text-sm md:text-xl font-normal block capitalize mb-1 text-[#200F3B]'>Registered Email*</label>
                                    <input 
                                        required 
                                        placeholder='you@example.com' 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                                    />
                                </div>

                                <button type="submit" className='h-[3.625rem] cursor-pointer w-full justify-center items-center tracking-wider flex text-white text-lg font-semibold bg-[#7030A0] rounded-lg'>Request OTP</button>
                            </form>
                        </div>
                    </div>
                    
                </div>

                <div className="right w-[55%] relative">
                    <div className='w-full min-h-[40rem] max-h-[54rem] relative'>
                        <img src={LI} alt="" className='min-h-full object-cover w-full absolute'/>
                    </div>
                </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Login