import React from 'react'
import Hero from '../components/certifications/Hero'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import HeroImage from '../assets/icons/CertHero1.svg'
import TrainingInfo from '../components/certifications/TrainingInfo'
import ReceiveCert from '../components/certifications/ReceiveCert'

const Certifications = () => {
    const HeroInfo = {
        image: HeroImage, 
        title:'PMP Certification Training',
        duration:'3-5 years of experience', 
        body:`PMI Bangalore Chapter proudly presents <b>PMP QUEST</b>, a comprehensive 35-hour mandatory training program designed for professionals aspiring to earn the globally recognized <b>Project Management Professional (PMP®)</b> certification. As an <b>Authorized Training Partner (ATP)</b> of PMI, we provide official PMI courseware and instruction that meets the <b>mandatory 35 contact hours</b> requirement for <b>PMP®</b> exam eligibility <br/><br/> Delivered by certified instructors, PMP QUEST helps you master the core concepts, tools, and frameworks required to lead successful projects in any industry.`,
    }

  return (
    <div className='w-screen h-full font-aptos bg-white text-dark'>
        <Header/>
        <div className='relative'>
            <Hero image={HeroInfo.image} title={HeroInfo.title} duration={HeroInfo.duration} body={HeroInfo.body}/>
            <TrainingInfo/>
            <ReceiveCert/>
        </div>

        <Footer/>
    </div>
  )
}

export default Certifications