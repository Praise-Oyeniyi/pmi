import React from 'react'
import heroBg from '../../assets/images/hero-image.png';


const Hero = () => {
  return (
    <div className='hero-outer bg-hero-bg'>
        <div className="hero-inner py-5 flex justify-between items-center gap-x-[4rem]">
            <div className="hero-image-section w-[45rem]">
                <img src={heroBg} alt="pmi hero section media"  className='object-cover w-full'/>
            </div>

            <div className="hero-text w-4/6">
                <div className="hero-text-inner space-y-4 pr-10">
                    <h2 className='text-6xl font-bold' >Empowering Project Professionlas, One Step at a Time</h2>
                    <p className='font-semibold text-2xl'>
                        Join a vibrant community of certified project leaders, forward-thinking professionals, 
                        and changemakers. Access exclusive trainings, register for events, and unlock opportunities 
                        to grow, lead, and contribute with PMI Bangalore Chapter
                    </p>
                    <button className='bg-secondary mt-8 w-fit flex items-center justify-center text-lg font-semibold text-white h-[3rem] px-6 rounded-full'>
                        Explore Training Programs
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero