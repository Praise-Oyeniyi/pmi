import React, { useEffect } from 'react'
import CertNumber from '../components/home/CertNumber'
import Header from '../components/global/Header'
import Hero from '../components/home/Hero'
import CertSupport from '../components/home/CertSupport'
import Engaged from '../components/home/Engaged'
import FaqBanner from '../components/home/FaqBanner'
import Footer from '../components/global/Footer'

const Home = () => {


  return (
    <div className='w-full h-auto bg-hero-bg font-aeonik text-dark !overflow-x-hidden'>
        <Header/>
        <Hero/>
        <CertNumber/>
        <CertSupport/>
        <Engaged/>
        <FaqBanner/>
        <Footer/>
    </div>
  )
}

export default Home