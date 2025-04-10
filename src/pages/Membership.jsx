import React, { useState } from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'
import TI from '../assets/images/TrainingHero.png'
import Members from '../components/Membership/Members'
import WGain from '../components/Membership/WGain'
import Benefits from '../components/Membership/Benefits'

const Membership = () => {
    const [btn, setBtn] = useState(0);


    const tabs = [
        {
          name:'membership',
          tag:'#membership'
        },
        {
          name:"What's in it for you",
          tag:'#what'
        },
        {
            name:'Benefits from your membership',
            tag:'#benefits'
        },
        {
            name:'PMI Membership',
            tag:'#pmi'
        },

    ]

    ''
  return (
    <div className='w-full h-full font-aptos overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero image={TI} 
              title={'Academic Relations'} 
              body={'PMI Bengaluru Chapter Academic relations portfolio aims to build relationships with academic institutions in Bangalore & Karnataka, partnering in the area of project management through certifications, awareness, events, research et al'} 
              url={"<a href='/' className='hover:underline'>Home</a> / <a to='volunteer'>Volunteering</a> / Membership"}
            />
            <main className="about-main-header pt-10 w-full">
                <div className="main-inner hide-bar pl-[14rem] pr-3 md:px-0 overflow-x-auto min-full text-purple-light font-normal text-sm md:text-3xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                  {tabs.map((e, index)=>(
                    <a href={e.tag} key={index}>
                      <h4 
                        className={`w-fit text-nowrap hover:opacity-60 capitalize  transition-all ease-linear duration-200 border-b-3 md:py-4 py-2 font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'} `}
                        onClick={()=>setBtn(index)}
                      >
                        {e.name}
                      </h4>
                    </a>
                  ))
                  }
                </div>

                <div className='space-y-10 md:space-y-14'>
                  <Members/>
                  <WGain/>
                  <Benefits/>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Membership