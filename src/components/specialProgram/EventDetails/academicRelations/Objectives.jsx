import React from 'react'
import objImage from '../../../../assets/images/objImage.png'

const Objectives = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto space-y-2 border-b border-b-[#DBD8D1] pb-10' id='obj'>
            <div className=' space-y-2 mt-7'>
                <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center capitalize'>Objectives</h3>
                <p className='md:text-xl text-lg text-[#200F3B]'>PMI Bengaluru Chapter Academic relations portfolio aims to build relationships with academic institutions in Bangalore & Karnataka, partnering in the area of project management through certifications, awareness, events, research et al</p>
            </div>

            <div className="obj-img-box w-[90%] md:w-5/6 mx-auto">
                <div className='md:h-[23rem] relative w-full flex justify-center items-center'>
                    <img src={objImage} alt="" className='h-full absolute object-cover'/>
                </div>
                
            </div>

            <div className="text-[#200F3B] text-sm md:text-xl font-normal space-y-3">
                <p className='text-[#200F3B] text-sm md:text-xl font-normal'>
                    Build partnerships with Academic institutions in Bangalore and Karnataka.Deliver Services on time and quality
                </p>

                <div className='space-y-2'>
                    <h4 className='text-purple text-lg md:text-2xl font-semibold'>Stakeholders/Customers</h4>
                    <ul className='space-y-2 list-disc pl-7'>
                        <li>Business Schools</li>
                        <li>Engineering Colleges</li>
                        <li>Schools</li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-purple text-lg md:text-2xl font-semibold'>Axes of Engagement</h4>
                    <ul className='space-y-2 list-disc pl-7'>
                        <li>Certifications</li>
                        <li>Awareness</li>
                        <li>Forums/Events - Relationship Building</li>
                        <li>Research & Internship</li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h4 className='text-purple text-lg md:text-2xl font-semibold'>Please contact:</h4>
                    <ul className='space-y-2'>
                        <li>Academic Relations Team (academicrelations@pmibangalore.org)</li>
                        <li>Kartikeyan Ramamurthy</li>
                        <li>Srikanta Konnanur</li>
                        <li>Bhaskar Jaganathan</li>
                    </ul>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Objectives