import React, { useState } from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import TI from '../assets/images/TrainingHero.png'
import Hero from '../components/global/Hero'
import Introduction from '../components/training/Introduction'
import Support from '../components/training/Support'
import Courses from '../components/training/Courses'

const Training = () => {
    const [btn, setBtn] = useState(0);

    const trainingNav = [
        {
          name:'Introduction',
          tag:'#intro'
        },
        {
          name:'Support Services',
          tag:'#support'
        },
        {
          name:'Courses',
          tag:'#courses'
        },
      ]


  return (
    <div className='w-full h-full font-aptos bg-white text-dark overflow-x-hidden'>
        <Header/>
        <div className='w-full bg-white'>
            <Hero
                image={TI} 
                title={'Corporate Training'} 
                url={'Home / Training / Corporate Training'}
                body={'Training support extended by the Chapter for employee learning and engagement initiatives at Corporates with respect to Project Management'}
            />
            <main className="about-main-header pt-10 ">
                <div className="main-inner hide-bar  overflow-x-auto min-full text-purple-light font-normal text-sm md:text-3xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                    {trainingNav.map((e, index)=>(
                        <a href={e.tag}>
                            <h4 
                                key={index}
                                className={`w-fit text-nowrap hover:opacity-60  transition-all ease-linear duration-200 border-b-3 md:py-4 py-2 font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'}`}
                                onClick={()=>setBtn(index)}
                            >
                                {e.name}
                            </h4>
                        </a>
                    ))
                  }
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