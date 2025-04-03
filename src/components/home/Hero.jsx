import React from 'react'
import heroBg from '../../assets/images/hero-image.png';


const Hero = () => {
  return (
    <div className='hero-outer bg-hero-bg'>
        <div className="hero-inner py-7 space-y-7 sm:space-y-0 sm:py-10 block md:flex justify-between items-center gap-x-[4rem]">
            <div className="hero-image-section w-[17.2rem]  md:w-[50rem]">
                <img src={heroBg} alt="pmi hero section media"  className='object-cover h-full w-full'/>
            </div>

            <div className="hero-text w-full md:w-4/6">
                <div className="hero-text-inner space-y-4 pr-10 sm:w-full w-5/6 mx-auto">
                    <h2 className='text-3xl md:text-6xl font-bold' >Empowering Project Professionals, One Step at a Time</h2>
                    <p className='font-medium text-sm md:text-2xl'>
                        Join a vibrant community of certified project leaders, forward-thinking professionals, 
                        and changemakers. Access exclusive trainings, register for events, and unlock opportunities 
                        to grow, lead, and contribute with PMI Bangalore Chapter
                    </p>
                    <button className='bg-secondary md:mt-8 w-fit flex items-center justify-center text-sm sm:text-lg font-semibold text-white h-[2.5rem] md:h-[3.5rem] px-3 md:px-7 rounded-full'>
                        Explore Training Programs
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero