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
    <div className='w-screen h-full font-aptos bg-white text-dark'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero
                image={TI} 
                title={'Corporate Training'} 
                url={'Home / Training / Corporate Training'}
                body={'Training support extended by the Chapter for employee learning and engagement initiatives at Corporates with respect to Project Management'}
            />
            <main className="about-main-header pt-10 ">
                <div className="main-inner text-purple-light font-normal text-3xl flex gap-x-12 justify-center border-b border-b-[#DBD8D1]">
                    <h4 className='w-fit border-b-3 border-b-purple py-4 font-semibold text-dark'>Introduction</h4>
                    <h4 className='w-fit py-4 border-b-3 border-b-transparent'>Support Services</h4>
                    <h4 className='w-fit py-4 border-b-3 border-b-transparent'>Courses</h4>
                </div>
                <div className='space-y-16 pb-20'>
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