import React from 'react'
import DI from '../../../assets/images/descriptionImage.png'

const EventDescription = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto w-5/6 space-y-10'>
            <div className="description w-full">
                <div className='flex items-stretch gap-x-7 justify-between w-full'> 
                    <div className="image  overflow-hidden min-w-[30rem] max-w-[30rem]">
                        <img src={DI} alt="" className='h-full w-full object-cover'/>
                    </div>
                    <div className='bg-white rounded-3xl p-5 px-7 border border-[#E8E8E8]'>
                        <h4 className='text-3xl font-bold pb-2 border-b border-b-[#DADADA]'>Description</h4>
                        <p className='text-xl font-normal pt-3'>The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims. The session will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This will equip them with essential knowledge and practical skills in forensic schedule analysis and claims management</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='text-3xl font-bold pb-2'>
                    What the audience will gain from this presentation:
                </h4>
                <p className='text-xl font-normal'>
                    The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims. The session will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This will equip them with essential knowledge and practical skills in forensic schedule analysis and claims management
                </p>
            </div>

            <div className="speaker">
                <h4 className='text-3xl font-bold pb-2'>About the speaker</h4>
                <p className='text-xl font-normal'>The audience Will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They Will learn about construction Delays, various delay analysis techniques, and different types of claims. The session Will cover writing effective claims presentations, key components of successful claims, and strategies for preparing and submitting extension of time and additional payment claims. This Will equip them with essential Knowledge and practical skills in forensic schedule analysis and claims management</p>


                <div className='bg-white rounded-3xl p-5 px-7 border border-[#E8E8E8] mt-7'>
                    <h4 className='text-2xl font-semibold pb-2 '>Key Experience:</h4>
                    <div className='pt-2'>
                        <ul className='flex justify-between list-disc text-[#3A2B51] text-xl font-normal'>
                            <div className='w-3/6 border-r border-r-[#DADADA] pr-10 pl-5'>
                                <li>Proficiency in handling projects spanning both Greenfield and Brownfield environments.</li>
                                <li>Extensive global exposure in managing various intricate, multi-billion-dollar construction projects.</li>
                                <li>Capable of handling multi-discipline teams</li>
                            </div>
                            <div className='w-3/6 pl-10 -mt-1'>
                                <h4 className='text-[#040301] text-2xl font-semibold'>Professional Certifications:</h4>
                                <div className='pl-5'>
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