import React from 'react'
import ASI from '../../assets/images/ASI.png'


const AboutSection = () => {
  return (
    <div className='md:pt-10 pt-7 pb-7'>
        <div className='w-5/6 mx-auto pb-10 md:flex justify-between gap-x-10 border-b border-b-[#DBD8D1]'>
            <div className='h-fit md:h-96 md:w-3/6'>
                <img src={ASI} alt="pmi team portrait h-full w-full object-contian" />
            </div>

            
            <div className='md:w-3/6 space-y-5 mt-10'>
                <p className='text-normal text-[#200F3B] text-base md:text-2xl'>
                    The Bangalore Chapter of the Project Management Institute (PMI) was founded in 1998, as an autonomous, 
                    non-profit, membership association dedicated to the science of project Management.
                </p>
                <div className='space-y-3'>
                    <h4 className='text-2xl md:text-3xl font-bold md:pb-1 text-dark'>Objectives</h4>
                    <p className='text-sm md:text-xl font-normal text-[#200F3B]'>The objectives of the Chapter supplement the purposes of PMI as set forth in the PMI by-laws.</p>
                    <ul className='text-sm md:text-xl font-normal text-[#200F3B] list-disc pl-7'>
                        <li>The Chapter objectives are to encourage and facilitate education, certification and professionalism in 
                            Project Management and to provide a forum for discussion and examination of problems, solutions, applications, 
                            and ideas related to the management of projects and to foster communication between public and private sectors 
                            regarding project management, and to disseminate within the primary area of operation of the Chapter information 
                            regarding developments in project management
                        </li>
                        <li>
                            Chapter membership puts you in contact with a local “network of expertise” and ongoing opportunities for face-to-face 
                            contact with peers from a wide variety of organizations and industries. PMI’s support of members on a local level 
                            continues to expand.
                        </li>
                        <li>
                            Chapters advance the mission and objectives of PMI by promoting professional standards and practices. Ongoing professional 
                            development is a key benefit to membership and is supported at the chapter level through activities, meetings, and educational 
                            programs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection