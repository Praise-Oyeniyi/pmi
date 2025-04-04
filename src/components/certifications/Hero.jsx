import React from 'react'

const Hero = ({image, title, duration, body}) => {
  return (
    <div className='w-full bg-[#330F6F] hero-cert relative h-auto text-white overflow-hidden py-7' >
        <div className="mx-auto w-[90%] md:w-5/6 ">
            <h4 className='text-sm md:text-xl text-nowrap w-5/6 truncate md:w-full font-semibold'>Home / Certifications / Project Management Professional®</h4>

            <div className='w-full md:flex gap-x-10 space-y-7 md:space-y-0'>
                <div className='w-full md:w-3/6 flex justify-center px-10 md:px-0'>
                    <img src={image} alt="" className=' py-10'/>
                </div>

                <div className='w-full md:w-3/6 space-y-3'>
                    <h5 className='text-sm md:text-lg font-semibold rounded-full px-4 h-8 flex justify-center items-center border border-white w-fit'>Certification</h5>
                    <h3 className='font-bold text-3xl w-5/6 md:w-full md:text-5xl'>{title}</h3>
                    <h4 className='text-base md:text-3xl font-semibold'>{duration}</h4>
                    <p className='text-sm md:text-lg font-normal text-[#ffffffc0]' dangerouslySetInnerHTML={{ __html: body }}/>
                    <button className='mt-5 bg-white rounded-full flex justify-center items-center text-sm md:text-lg font-semibold text-[#040301] px-7 py-3'>Click Here To Register</button>
                </div> 
            </div>
            
        </div>
    </div>
  )
}

export default Hero