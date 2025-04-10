import React from 'react'
import innerImage from '../../assets/images/innerImage.png'

const Inner = () => {
  return (
    <div>
        <div className='w-full'>
            <div className='w-[90%] md:w-5/6 mx-auto border-b border-b-[#DBD8D1] pb-7' id='inner'>
                <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center pb-3 capitalize '>Inner Circle</h3>
                
                <div className='text-sm md:text-xl text-[#200F3B] space-y-7'>
                    <p>
                        Project Management Institute, Bangalore India Chapter is the largest chapter of India and one of the largest chapters in Asia Pacific. The Bangalore Chapter of the Project Management Institute (PMI) was founded in 1998, as an autonomous, non-profit, membership association dedicated to the science of project Management.
                        <br/>
                        <br/>
                        Chapter takes pride in its large membership base and is equally proud of its volunteers who actively run and manage different engagements of the chapter.
                        <br/>
                        <br/>
                        Volunteering and volunteers are the backbone of PMI and is the foundational core through which the project management profession is being advanced across the globe by PMI.
                        <br/>
                        <br/>
                        Cognizant of the fact, PMI Bangalore India Chapter is happy to introduce multiple initiatives for its volunteers based on 3E principles of making volunteering journey Enticing, Engaging & Enriching. One of these initiatives is Inner Circle.
                    </p>

                    <div className='bg-purple p-4'>
                        <p className='text-white'>
                            Inner Circle is an exclusive club of volunteers which entitles inner circle members exclusivity for specific tangible benefits to make them feel more privileged and exclusive.
                        </p>
                    </div>

                    <div className='space-y-3'>
                        <h5 className='text-purple font-semibold text-lg md:text-2xl'>Inner Circle Benefits</h5>
                        <ul className='space-y-2 list-disc pl-7'>
                            <li>Additional discount of 15% over and above the normal discount which chapter offers on its all paid programs.</li>
                            <li>(For e.g. normally chapter offers 10% discount; in case of inner circle members it will be worked out to 10% + 15% = 25%)</li>
                            <li>In case there is no discount offered by the chapter; still inner circle</li>
                            <li>Members will be eligible to get a 15% discount on the program price.</li>
                            <li>Similar benefits in terms of % will be applicable to specific & unique events of the chapter like Symposiums & PMPC which are paid events.</li>
                        </ul>
                    </div>
                </div>

                <div className='md:w-4/6 w-full mx-auto my-7'>
                    <div className='h-56 md:h-[33rem] relative flex justify-center items-center'>
                        <img src={innerImage} alt="" className='absolute h-full w-auto object-center object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inner