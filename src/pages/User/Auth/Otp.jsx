import React, { useEffect, useState } from 'react'
import Footer from '../../../components/global/Footer'
import Header from '../../../components/global/Header'
import LI from '../../../assets/images/LoginImg.png'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast';
import { sendApi } from '../../../apis'
import { useLocation } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { createUserQueryOptions } from '../../../components/queryOptions/QueryOptions'

const Otp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sending, setSending] = useState(false)
    const mail = location.state?.email;
    const [formData, setFormData] = useState({
        otp: '',
    });

    const {data} = useQuery(createUserQueryOptions())


    useEffect(() => {
        if (data?.success) {
            navigate('/profile');
        }else if(localStorage.getItem('authToken') && !mail || !localStorage.getItem('authToken') && !mail){
            navigate('/login')
        }
    }, [data, navigate]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            email:mail,
            [e.target.name]: e.target.value,
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        const dataEnpoint = '/custom/v1/verify-otp';
        
        try {
            const result = await sendApi(formData, dataEnpoint);
            
            if (result.success) {    
                toast.success('Login Successful!');
                localStorage.setItem('authToken', result.data.token);
                setFormData({otp: ''});
                setSending(false);
                navigate('/Profile');
            } else {    
                toast.error(result.error || 'An error occurred');
                setSending(false);
                setFormData({otp: ''});
            }
        } 
        catch (error) {
            toast.error('An unexpected error occurred');
            setSending(false);
            setFormData({otp: ''});
        }
    }


    const resendOTP = async () =>{
        setSending(true)
        const dataEnpoint = '/custom/v1/send-otp';
        try {
            const result = await sendApi({email: mail}, dataEnpoint)
            if (result.success){    
                toast.success('OTP sent. Please check your mail!')
                setSending(false)  
            } else {    
                setSending(false)
                toast.error(result.error)
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
                <div className=" w-full md:w-[45%]">
                    <div className='left w-[90%] md:w-[80%] space-y-7 md:ml-auto md:-mt-10 mx-auto pt-10 md:pt-0'>

                        <div className='space-y-2 text-[#200F3B]'>
                            <p className='text-lg md:text-xl font-normal  capitalize'>we’ve sent a one - Time passcode to your email. please enter the 6- digit code below to continue.</p>
                        </div>

                        <div className="form space-y-10">
                            <form action="#" className='space-y-5' onSubmit={(e)=>handleSubmit(e)}>
                                <div className="otp-input w-full space-y-1">
                                    <label htmlFor="otp" className=' text-sm md:text-base font-normal block capitalize mb-1 text-[#200F3B]'>Enter OTP*</label>
                                    <input 
                                        required
                                        placeholder='******'
                                        type="text"
                                        pattern='(?:0|[1-9]\d*)' 
                                        inputMode="decimal"
                                        name="otp" 
                                        value={formData.otp} onChange={handleChange}
                                        id="otp" 
                                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                                    />
                                </div>

                                <button disabled={sending && true} type="submit" className={`h-[3.625rem] hover:opacity-80 transition-all duration-200 ease-in-out cursor-pointer w-full justify-center items-center tracking-wider flex text-white text-sm md:text-lg font-semibold bg-[#7030A0] rounded-lg ${sending && 'animate-pulse'}`}>Log In</button>
                            </form>

                            <div className='space-y-2 md:space-y-3'>
                                <p className='text-[#404040] text-sm font-normal capitalize'>Didn’t receive it? check your spam folder or click on the button below.</p>
                                <button type="submit"
                                    onClick={() => resendOTP()} 
                                    disabled={sending && true}
                                    className={`h-[3rem] cursor-pointer border border-[#FF0000] text-[#FF0000] w-full justify-center items-center tracking-wider flex bg-transparent text-sm md:text-base font-semibold rounded-lg ${sending && 'animate-pulse'}`}>RESEND OTP</button>
                                
                            </div>
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

export default Otp