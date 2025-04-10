import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import Hero from '../../components/specialProgram/Hero'
import PastEvents from '../../components/specialProgram/PastEvents'
import Upcoming from '../../components/specialProgram/Upcoming'

const SpecialProgram = () => {

    const heroInfo = {
        title:'E&C PM Footprints',
        body:'A spotlight on engineering & Construction leader who’ve left their mark-pm footprints showcases inspiring project journeys, lessons learned, and innovations that shaped real-world infrastructure and empowered prefessionals',
    }

  return (
    <div className='w-full h-full font-aptos bg-hero-bg overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero head={heroInfo.title} body={heroInfo.body} />
            <Upcoming/>
            <PastEvents/>

        </div>
        <Footer/>
    </div>
  )
}

export default SpecialProgram