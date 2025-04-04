import React from 'react'
import HI from '../assets/images/AboutHero.png'
import CEnquiry from '../components/contact/CEnquiry'
import CSRForm from '../components/contact/CSRForm'
import GSForm from '../components/contact/GSForm'
import ITEnquiry from '../components/contact/ITEnquiry'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'

const Contact = () => {
  return (
    <div className='w-screen h-full font-aptos bg-white text-dark'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero image={HI} 
                title={'How can we help?'} 
                body={"We're here to help answer all of your questions about Project Management certification, training, membership, and more."} 
                url={'Home / contact us'}
            />
            <main className="about-main-header pt-10 ">
                <div className="main-inner overflow-x-auto min-full w-full">
                    <div className='w-5/6 mx-auto flex justify-between gap-x-7 overflow-x-auto md:overflow-x-hidden text-purple-light text-sm md:text-3xl md:gap-x-5  border-b border-b-[#DBD8D1]'>
                        <h4 className='w-fit text-nowrap tracking-tight md:py-4 py-2 border-b-3  border-b-purple'>General Support</h4>
                        <h4 className='w-fit text-nowrap tracking-tight md:py-4 py-2 border-b-3 border-b-transparent'>Corporate Enquiry</h4>
                        <h4 className='w-fit text-nowrap tracking-tight md:py-4 py-2 border-b-3 border-b-transparent'>Individual Training Enquiry</h4>
                        <h4 className='w-fit text-nowrap tracking-tight md:py-4 py-2 border-b-3 border-b-transparent'>CSR Activity Collaboration</h4>
                    </div>      
                </div>
                
                <div className='w-full py-7 pb-10'>
                    <div className='hidden'>     
                        <GSForm/>
                    </div>
                    <div className='hidden'>
                        <CEnquiry/>
                    </div>
                    <div className='hidden'>
                        <ITEnquiry/>
                    </div>
                    <div className='hidde'>
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