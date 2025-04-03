import React from 'react'

const Introduction = () => {
  return (
    <div className='md:pt-10 pt-7'>
        <div className='w-[90%] md:w-5/6 mx-auto pb-14 border-b border-b-[#DBD8D1]'>
            <h3 className=' font-bold text-2xl md:text-5xl leading-snug text-center capitalize pb-3 md:pb-5'>Introduction</h3>

            <div className='space-y-5'>
                <div className='md:space-y-3 space-y-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-purple capitalize'>Value of project management</h4>
                    <p className='md:text-xl font-normal text-[#200F3B] text-sm'>Our Economic and Business landscape is changing fast. Those who follow change will be ousted. Choose to lead Change. Project Management helps not only Create, Sustain and Rejuvenate a Business Model but also helps Resurrect and Recreate value proposition which is either lost or damaged.</p>
                </div>
                
                <div className='md:space-y-3 space-y-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-purple capitalize'>Our target audiences</h4>
                    <p className='text-sm md:text-xl font-normal text-[#200F3B]'>To differentiate ourselves and for our organizations to best utilize our talents, we all need to understand what is it that makes us stand out: What are we good at? And taking this one step further, how can we get better in those areas?</p>

                    <div className='md:space-y-3 space-y-1'>
                        <p className='text-sm md:text-xl font-normal text-[#200F3B]'>We have to address needs of two distinctive audiences</p>
                        <ul className='text-sm md:text-xl font-normal text-[#200F3B] space-y-3'>
                            <li>#1: People/ Individuals within the corporate who view PM as a career</li>
                            <li>#2: People/ Individuals within the corporate who view PM as a skill</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction