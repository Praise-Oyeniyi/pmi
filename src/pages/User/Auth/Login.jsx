import React, { useEffect, useState } from 'react'
import Footer from '../../../components/global/Footer'
import Header from '../../../components/global/Header'
import LI from '../../../assets/images/LoginImg.png'
import { useNavigate } from 'react-router-dom'
import { sendApi } from '../../../apis'
import { Toaster, toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query'
import { createUserQueryOptions } from '../../../components/queryOptions/QueryOptions'


const Login = () => {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    });
    
    const {data} = useQuery(createUserQueryOptions())


    useEffect(() => {
        if (data?.success) {
        navigate('/profile');
        }
    }, [data, navigate]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setSending(true)
        const dataEnpoint = '/custom/v1/send-otp';
        try {
            const result = await sendApi(formData, dataEnpoint)
            if (result.success){    
                toast.success('OTP sent. Please check your mail!')
                setSending(false)  
                navigate('/otp', { state: { email: formData.email } })
                setFormData({email: ''})

            } else {    
                setSending(false)
                toast.error(result.error)
                setFormData({email: ''})
            }
        } 
        catch (error) {
            toast.error('An unexpected error occurred');
            setSending(false);
            toast.error("email does not exist")
        }
    }

  return (
    <div className='w-full h-auto bg-hero-bg font-aeonik text-dark !overflow-x-hidden'>
        <Header/>
        <Toaster position="top-right" />
        <div className='main w-full md:border-t border-t-[#D9D9D9] bg-white'>
            <div className='flex justify-between items-center gap-x-28'> 
                <div className="w-full md:w-[45%]">
                    <div className='left w-[90%] md:w-[80%] space-y-7 md:ml-auto md:-mt-10 mx-auto py-10 md:py-0'>

                        <div className='space-y-2 text-[#200F3B]'>
                            <h3 className='text-2xl md:text-3xl font-semibold'>Login</h3>
                            <p className='text-lg md:text-xl font-normal '>Welcome! please log in with your PMI account to continue</p>
                        </div>

                        <div className="form">
                            <form action='#' className='space-y-5' onSubmit={handleSubmit}>
                                <div className="email-input w-full space-y-1">
                                    <label htmlFor="email" className=' text-sm md:text-base font-normal block capitalize mb-1 text-[#200F3B]'>Registered Email*</label>
                                    <input 
                                        required 
                                        placeholder='you@example.com' 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email} onChange={handleChange}
                                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                                    />
                                </div>

                            <button type="submit" className={`h-[3.625rem] hover:opacity-80 transition-all duration-200 ease-in-out cursor-pointer w-full justify-center items-center tracking-wider flex text-white text-sm md:text-base font-semibold bg-[#7030A0] rounded-lg ${sending && 'animate-pulse'}`}>{`${sending? 'Requesting': 'Request'}`} OTP</button>
                            </form>
                        </div>
                    </div>
                    
                </div>

                <div className="right w-[55%] relative hidden md:block">
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