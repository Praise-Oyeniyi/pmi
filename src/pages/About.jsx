import React from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'
import HI from '../assets/images/AboutHero.png'
import AboutSection from '../components/about/AboutSection'
import Mission from '../components/about/Mission'
import BOD from '../components/about/BOD'
import President from '../components/about/President'

const About = () => {
  return (
    <div className='w-screen h-full font-aptos bg-white text-dark'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero image={HI} title={'Working Together to advance the project profession'} body={''} url={'Home / What We Do / PMI Leadership & Board Of Directors'}/>
            <main className="about-main-header pt-10 ">
                <div className="main-inner text-purple-light font-normal text-3xl flex gap-x-12 justify-center border-b border-b-[#DBD8D1]">
                    <h4 className='w-fit border-b-3 border-b-purple py-4 font-semibold text-dark'>About Us</h4>
                    <h4 className='w-fit py-4 border-b-3 border-b-transparent'>Our Mission</h4>
                    <h4 className='w-fit py-4 border-b-3 border-b-transparent'>Board Of Directors</h4>
                    <h4 className='w-fit py-4 border-b-3 border-b-transparent'>Past Presidents</h4>
                </div>
                <AboutSection/>
                <Mission/>
                <BOD/>
                <President/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default About