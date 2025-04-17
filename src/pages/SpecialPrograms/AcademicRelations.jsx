import React, { useState } from 'react'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import Hero from '../../components/global/Hero'
import TI from '../../assets/images/TrainingHero.png'
import Objectives from '../../components/specialProgram/EventDetails/academicRelations/Objectives'
import Services from '../../components/specialProgram/EventDetails/academicRelations/Services'
import Team from '../../components/specialProgram/EventDetails/academicRelations/Team'
import WhatWeDo from '../../components/specialProgram/EventDetails/academicRelations/WhatWeDo'


const AcademicRelations = () => {
    const [btn, setBtn] = useState(0);


    const tabs = [
        {
          name:'Objectives',
          tag:'#obj'
        },
        {
          name:'Services and Engagements',
          tag:'#services'
        },
        {
            name:'The Team',
            tag:'#team'
        },

    ]

  return (
    <div className='w-full h-full font-aeonik overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero image={TI} title={'Academic Relations'} 
              body={'PMI Bengaluru Chapter Academic relations portfolio aims to build relationships with academic institutions in Bangalore & Karnataka, partnering in the area of project management through certifications, awareness, events, research et al'} 
              url={"<a href='/' className='hover:underline'>Home</a> / Training / Corporate Training"}
            />
            <main className="about-main-header pt-10 w-full">
                <div className="main-inner hide-bar md:px-0 overflow-x-auto min-full text-purple-light font-normal text-sm md:text-2xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                  {tabs.map((e, index)=>(
                    <a href={e.tag} key={index}>
                      <h4
                        className={`w-fit text-nowrap hover:opacity-60  transition-all ease-linear duration-200 border-b-3 md:py-3 py-2 tracking-wide font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'} `}
                        onClick={()=>setBtn(index)}
                      >
                        {e.name}
                      </h4>
                    </a>
                  ))
                  }
                </div>

                <div className='space-y-10 md:space-y-14'>
                    <Objectives/>
                    <Services/>
                    <Team/>
                    <WhatWeDo/>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default AcademicRelations