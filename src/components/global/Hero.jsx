import React from 'react'
import { Link } from 'react-router'

const Hero = ({image, title, body, url}) => {
  return (
    <div className='hero-outer bg-hero-bg'>
        <div className="hero-inner py-7 pb-10 ">
            <div className='w-[90%] md:w-5/6 mx-auto'>
                <h4 className='text-left hero-link font-semibold cursor-pointer text-sm md:text-lg tracking-wider text-[#131313] capitalize' 
                    dangerouslySetInnerHTML={{ __html: url }}
                />
            </div>

            <div className='w-full pt-7 md:flex space-y-7 sm:space-y-0 justify-between items-center gap-x-[4rem]'>
                <div className="hero-image-section w-5/6 md:min-h-[35rem]  md:w-[50rem]">
                    <img src={image} alt="pmi hero section media"  className='object-cover object-top h-[full] w-full'/>
                </div>

                <div className="hero-text w-[90%] mx-auto md:w-4/6">
                    <div className="hero-text-inner space-y-3 md:space-y-4 pr-10 md:pr-14">
                        <h2 className='text-3xl md:text-6xl font-semibold leading-[1.2]' >{title}</h2>
                        <p className='font-medium text-sm md:text-xl'>
                            {body}
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero