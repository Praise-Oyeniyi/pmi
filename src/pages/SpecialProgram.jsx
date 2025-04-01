import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/specialProgram/Hero'
import PastEvents from '../components/specialProgram/PastEvents'
import Upcoming from '../components/specialProgram/Upcoming'

const SpecialProgram = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);

    const heroInfo = {
        title:'E&C PM Footprints',
        body:'A spotlight on engineering & Construction leader who’ve left their mark-pm footprints showcases inspiring project journeys, lessons learned, and innovations that shaped real-world infrastructure and empowered prefessionals',
        subParams: searchParams,
    }

  return (
    <div className='w-screen h-full font-aptos bg-hero-bg'>
        <Header/>
        <div className='w-full'>
            <Hero head={heroInfo.title} body={heroInfo.body} subParams={heroInfo.subParams}/>
            <Upcoming/>
            <PastEvents/>

        </div>
        <Footer/>
    </div>
  )
}

export default SpecialProgram