import React from 'react'

const Hero = ({image, title, body, url}) => {
  return (
    <div className='hero-outer bg-hero-bg'>
        <div className="hero-inner py-7 pb-10 ">
            <div className='w-[90%] ml-auto'>
                <h4 className='text-left font-semibold text-xl text-[#131313]'>{url}</h4>
            </div>
            <div className='w-full pt-7 flex justify-between items-center gap-x-[4rem]'>
                <div className="hero-image-section w-[50rem]">
                    <img src={image} alt="pmi hero section media"  className='object-cover h-full w-full'/>
                </div>

                <div className="hero-text w-4/6">
                    <div className="hero-text-inner space-y-4 pr-10">
                        <h2 className='text-6xl font-bold' >{title}</h2>
                        <p className='font-semibold text-2xl'>
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