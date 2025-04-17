import React from 'react'

const Support = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto pb-14 border-b border-b-[#DBD8D1]' id='support'>
            <h3 className='font-bold text-2xl md:text-4xl leading-snug text-center capitalize pb-2 md:pb-5 tracking-wide'>Support Services</h3>

            <div className='space-y-5'>
                <div className='md:space-y-3 space-y-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-purple capitalize'>In the form of providing SMEs from the industry</h4>
                    <p className='text-sm md:text-lg font-normal text-[#200F3B] w-5/6'>In the form of providing SMEs from the industry as external speaker for in house events 
                    of the Corporates for Either PM Knowledge sharing session or PM Advocacy session.</p>
                </div>
                
                <div className='md:space-y-3 space-y-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-purple capitalize'>In the form of training programs in project management and related topics.</h4>
                    <ul className='text-sm md:text-lg font-normal text-[#200F3B] space-y-3 list-disc pl-7 w-5/6'>
                        <li>In the form of training programs in project management and related topics. 35 contact hours of PM Education to meet the PMP Certification requirement.</li>
                        <li>Bespoke training programs on PM as per corporate's requirements.</li>
                        <li>One Day Agile Foundation Program.</li>
                        <li>Two Day Agile Advanced Program.</li>
                        <li>One Day Workshop on Business Analysis.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support