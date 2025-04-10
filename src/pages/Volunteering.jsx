import React from 'react'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'
import HI from '../assets/images/AboutHero.png'
import { useState } from 'react'
import Volunteer from '../components/volunteering/Volunteer'
import Inner from '../components/volunteering/Inner'
import Chapter from '../components/volunteering/Chapter'
import Banner from '../components/volunteering/Banner'

const Volunteering = () => {
    const [btn, setBtn] = useState(0);


    const volunteerNav = [
        {
          name:'Volunteering',
          tag:'#volunteer'
        },
        {
          name:'Inner Circle',
          tag:'#inner'
        },
        {
          name:'Chapter Volunteers',
          tag:'#chapter'
        },
    ]
    

  return (
    <div className='w-full h-full font-aeonik overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero image={HI} title={'Volunteering'} body={'The purpose of life is not to be happy, but to matter- to be productive, to be useful, to have it make some difference that you have lived at all." - Leo Rosten'} 
              url={"<a href='/' className='hover:underline'>Home</a> / Volunteering"}
            />

            <main className="about-main-header pt-10 w-full">
                <div className="main-inner hide-bar md:px-0 overflow-x-auto min-full text-purple-light font-normal text-sm md:text-3xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                  {volunteerNav.map((e, index)=>(
                    <a href={e.tag} key={index}>
                      <h4
                        className={`w-fit text-nowrap hover:opacity-60  transition-all ease-linear duration-200 border-b-3 md:py-4 py-2 font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'} `}
                        onClick={()=>setBtn(index)}
                      >
                        {e.name}
                      </h4>
                    </a>
                  ))
                  }
                </div>


                <div className='space-y-16'>
                    <Volunteer/>
                    <Inner/>
                    <Chapter/>
                    <Banner/>
                </div>


            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Volunteering