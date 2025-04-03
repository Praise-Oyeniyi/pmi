import React from 'react'
import DI from '../../../assets/images/descriptionImage.png'

const EventDescription = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto w-[90%] md:w-5/6 space-y-10'>
            <div className="description w-full">

                <div className='md:flex items-stretch gap-x-7 justify-between w-full'> 
                    
                    <div className="image  overflow-hidden md:min-w-[30rem] md:max-w-[30rem]">
                        <img src={DI} alt="" className='h-full w-full object-cover'/>
                    </div>

                    <div className='bg-white rounded-3xl mt-7 md:mt-0 p-3 md:p-5 md:px-7 border border-[#E8E8E8]'>
                        <h4 className='text-2xl md:text-3xl font-bold pb-2 border-b border-b-[#DADADA]'>Description</h4>
                        <p className='text-sm md:text-xl font-normal pt-3'>The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims. The session will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This will equip them with essential knowledge and practical skills in forensic schedule analysis and claims management</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='text-2xl md:text-3xl font-bold pb-2'>
                    What the audience will gain from this presentation:
                </h4>
                <p className='text-sm md:text-xl font-normal'>
                    The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims. The session will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This will equip them with essential knowledge and practical skills in forensic schedule analysis and claims management
                </p>
            </div>

            <div className="speaker">
                <h4 className='text-2xl md:text-3xl font-bold pb-2'>About the speaker</h4>
                <p className='text-sm md:text-xl font-normal'>The audience Will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They Will learn about construction Delays, various delay analysis techniques, and different types of claims. The session Will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This Will equip them with essential Knowledge and practical skills in forensic schedule analysis and claims management</p>


                <div className='bg-white rounded-xl md:rounded-3xl p-3 md:p-5 md:px-7 border border-[#E8E8E8] mt-7'>
                    <h4 className='text-lg md:text-2xl font-semibold md:pb-2 '>Key Experience:</h4>
                    <div className='pt-2'>
                        <ul className='md:flex justify-between list-disc text-[#3A2B51] text-sm md:text-xl font-normal'>
                            <div className='w-full md:w-3/6 space-y-2 border-b border-b-[#DADADA] pb-3 md:pb-0 md:border-r border-r-[#DADADA] md:pr-10 pl-5'>
                                <li>Proficiency in handling projects spanning both Greenfield and Brownfield environments.</li>
                                <li>Extensive global exposure in managing various intricate, multi-billion-dollar construction projects.</li>
                                <li>Capable of handling multi-discipline teams</li>
                            </div>
                            <div className='w-full md:w-3/6 md:pl-10 md:-mt-1 pt-3 md:pt-0'>
                                <h4 className='text-[#040301] text-lg md:text-2xl font-semibold md:w-full w-3/6 pb-3 md:pb-1 leading-tight'>Professional Certifications:</h4>
                                <div className='pl-5 space-y-2'>
                                    <li>AACEI-PSP : Planning & Scheduling Professional</li>
                                    <li>PMP Since 2014</li>
                                    <li>PMI-SP</li>
                                </div>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>

    </div>
  )
}

export default EventDescription