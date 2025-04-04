import React from 'react'

const Mission = () => {
  return (
    <div className='w-full text-dark md:my-8 my-5'>
        <div className='w-[90%] md:w-5/6 mx-auto pb-12 border-b border-b-[#DBD8D1]' id='mission'>
            <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center'>Our Mission</h3>
            <p className='text-sm md:text-xl font-normal py-3 text-[#200F3B]'>The objectives of the Chapter supplement the purposes of PMI as set forth in the PMI by-laws.</p>
            <ul className='text-sm md:text-xl font-normal list-disc space-y-2 pl-7 text-[#200F3B]'>
                <li>
                    The Chapter objectives are to encourage and facilitate education, certification and professionalism in Project
                    Management and to provide a forum for discussion and examination of problems, solutions, applications, 
                    and ideas related to the management of projects and to foster communication between public and private sectors 
                    regarding project management, and to disseminate within the primary area of operation of the Chapter information 
                    regarding developments in project management.
                </li>
                <li>Chapter membership puts you in contact with a local “network of expertise” and ongoing opportunities for 
                    face-to-face contact with peers from a wide variety of organizations and industries. PMI’s support of members 
                    on a local level continues to expand.
                </li>
                <li>Chapters advance the mission and objectives of PMI by promoting professional standards and practices. Ongoing 
                    professional development is a key benefit to 
                    membership and is supported at the chapter level through activities, meetings, and educational programs
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Mission