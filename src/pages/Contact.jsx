import React, { useState } from 'react'
import HI from '../assets/images/AboutHero.png'
import CEnquiry from '../components/contact/CEnquiry'
import CSRForm from '../components/contact/CSRForm'
import GSForm from '../components/contact/GSForm'
import ITEnquiry from '../components/contact/ITEnquiry'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'

const Contact = () => {
    const [btn, setBtn] = useState(0);

  return (
    <div className='w-screen h-full font-aptos bg-white text-dark'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero image={HI} 
                title={'How can we help?'} 
                body={"We're here to help answer all of your questions about Project Management certification, training, membership, and more."} 
                url={'Home / contact us'}
            />
            <main className="about-main-header pt-10">
                <div className="main-inner overflow-x-auto hide-bar min-full w-full  border-b border-b-[#DBD8D1]">
                    <div className='w-[90%] md:w-5/6 mx-auto flex justify-between gap-x-7 overflow-x-auto hide-bar md:overflow-x-hidden text-purple-light text-sm md:text-3xl md:gap-x-5 '>
                        {['General Support', 'Corporate Enquiry', 'Individual Training Enquiry', 'CSR Activity Collaboration'].map((nav, index)=>(
                            <h4 
                                key={index}
                                className={`w-fit text-nowrap tracking-tight transition-all ease-linear duration-200 md:py-4 py-2 border-b-3 ${index === btn? 'border-b-purple':'border-b-transparent'}`}  
                                onClick={()=>setBtn(index)}
                            >
                                {nav}
                            </h4>
                        ))}
                    </div>      
                </div>
                
                <div className='w-full py-7 pb-10 transition-all ease-in duration-300'>
                    <div className={`${btn === 0? 'block' : 'hidden'}`}>     
                        <GSForm/>
                    </div>
                    <div className={`${btn === 1? 'block' : 'hidden'}`}>
                        <CEnquiry/>
                    </div>
                    <div className={`${btn === 2? 'block' : 'hidden'}`}>
                        <ITEnquiry/>
                    </div>
                    <div className={`${btn === 3? 'block' : 'hidden'}`}>
                        <CSRForm/>
                    </div>
                </div>

            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact