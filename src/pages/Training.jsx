import React from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import TI from '../assets/images/TrainingHero.png'
import Hero from '../components/global/Hero'
import Introduction from '../components/training/Introduction'
import Support from '../components/training/Support'
import Courses from '../components/training/Courses'

const Training = () => {
  return (
    <div className='w-screen h-full font-aptos bg-white text-dark overflow-x-hidden'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero
                image={TI} 
                title={'Corporate Training'} 
                url={'Home / Training / Corporate Training'}
                body={'Training support extended by the Chapter for employee learning and engagement initiatives at Corporates with respect to Project Management'}
            />
            <main className="about-main-header pt-10 ">
                <div className="main-inner overflow-x-auto min-full text-purple-light font-normal text-sm md:text-3xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                    <h4 className='w-fit text-nowrap  border-b-3 border-b-purple md:py-4 py-2 font-semibold text-dark'>Introduction</h4>
                    <h4 className='w-fit text-nowrap md:py-4 py-2 border-b-3 border-b-transparent'>Support Services</h4>
                    <h4 className='w-fit text-nowrap md:py-4 py-2 border-b-3 border-b-transparent'>Courses</h4>
                </div>
                <div className='space-y-12 md:space-y-16 pb-20'>
                    <Introduction/>
                    <Support/>
                    <Courses/>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Training