import React from 'react'

const Hero = ({image, title, duration, body}) => {
  return (
    <div className='w-full bg-[#330F6F] hero-cert relative h-auto text-white overflow-hidden py-7' >
        <div className="mx-auto w-5/6 ">
            <h4 className='text-xl font-semibold'>Home / Certifications / Project Management Professional®</h4>

            <div className='w-full flex gap-x-10'>
                <div className='w-3/6 flex justify-center'>
                    <img src={image} alt="" className=' py-10'/>
                </div>

                <div className='w-3/6 space-y-3'>
                    <h5 className='text-lg font-semibold rounded-full px-4 py-1 border border-white w-fit'>Certification</h5>
                    <h3 className='font-bold text-5xl'>{title}</h3>
                    <h4 className='text-3xl font-semibold'>{duration}</h4>
                    <p className='text-lg font-normal text-[#ffffffc0]' dangerouslySetInnerHTML={{ __html: body }}/>
                    <button className='mt-5 bg-white rounded-full flex justify-center items-center text-lg font-semibold text-[#040301] px-7 py-2'>Click Here To Register</button>
                </div> 
            </div>
            
        </div>
    </div>
  )
}

export default Hero