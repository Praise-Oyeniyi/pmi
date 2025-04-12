import React, { useState } from 'react'
import Footer from '../../components/global/Footer'
import TI from '../../assets/images/TrainingHero.png'
import Header from '../../components/global/Header';
import Hero from '../../components/global/Hero';
import Activity from '../../components/specialProgram/EventDetails/nonProfit/Activity';
import CSRForm from '../../components/contact/CSRForm';

const NonProfit = () => {
    const [btn, setBtn] = useState(0);


    const tabs = [
        {
          name:'Activity',
          tag:'#activity'
        },
        {
          name:'CSR Activity Collaboration',
          tag:'#csr'
        },

    ]


  return (
    <div className='w-full h-full font-aeonik overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero image={TI} title={'Non-Profits and NGOs'} 
              body={'Over the years, the Chapter has been contributing its mite to the Development Sector by collaborating with Not for profit organizations and getting involved in outreach activities with these Not for profit organizations. Below are some of the initiatives of the Chapter.'} 
              url={"<a href='/' className='hover:underline'>Home</a> / Non-Profits"}
            />
            <main className="about-main-header pt-10 w-full">
                <div className="main-inner hide-bar md:px-0 overflow-x-auto min-full text-purple-light font-normal text-sm md:text-3xl gap-x-7 flex md:gap-x-12 justify-center border-b border-b-[#DBD8D1] cursor-pointer">
                  {tabs.map((e, index)=>(
                    <a href={e.tag}>
                      <h4 
                        key={index}
                        className={`w-fit text-nowrap hover:opacity-60  transition-all ease-linear duration-200 border-b-3 md:py-4 py-2 font-semibold text-dark ${index === btn? "border-b-purple": 'border-b-transparent'} `}
                        onClick={()=>setBtn(index)}
                      >
                        {e.name}
                      </h4>
                    </a>
                  ))
                  }
                </div>

                <div className='space-y-14'>
                    <Activity/>
                    <div>
                        <CSRForm/>
                    </div>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default NonProfit