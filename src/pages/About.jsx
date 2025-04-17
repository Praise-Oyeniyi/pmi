import React, { useState, useEffect } from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'
import HI from '../assets/images/AboutHero.png'
import AboutSection from '../components/about/AboutSection'
import Mission from '../components/about/Mission'
import BOD from '../components/about/BOD'
import President from '../components/about/President'


const About = () => {
  const [btn, setBtn] = useState(0);

  const aboutNav = [
    {
      name:'About Us',
      tag:'#about'
    },
    {
      name:'Our Mission',
      tag:'#mission'
    },
    {
      name:'Board Of Directors',
      tag:'#bod'
    },
    {
      name:'Past Presidents',
      tag:'#pp'
    },
  ]


  return (
    <div className='w-full h-full font-aeonik bg-white text-dark overflow-x-hidden scroll-smooth transition-all ease-linear duration-300'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero image={HI} title={'Working Together to advance the project profession'} body={''} url={"<a href='/' className='hover:underline'>Home</a> / What We Do"}/>
            <main className="about-main-header pt-10 w-full">
                <div className="main-inner hide-bar pl-28 pr-5 md:px-0 overflow-x-auto min-full text-purple-light font-normal text-sm md:text-2xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                  {aboutNav.map((e, index)=>(
                    <a href={e.tag} key={index}>
                      <h4 
                        className={`w-fit text-nowrap hover:opacity-60 transition-all ease-linear duration-200 border-b-3 md:py-3 py-2 font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'} `}
                        onClick={()=>setBtn(index)}
                      >
                        {e.name}
                      </h4>
                    </a>
                  ))
                  }
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