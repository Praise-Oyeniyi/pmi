import React from 'react'
import C1 from '../../../../assets/images/cert1.png'
import C2 from '../../../../assets/images/cert2.png'

const Services = () => {
    const certifications = [
        {
            image:C1,
            session:'CAPM is 23 hours session on project management fundamentals Available both online and on-premises.',
        },
        {
            image:C2,
            session:'Coming soon - DASM (Disciplined Agile Scrum Master)',
        },
    ]

  return (
    <div>
        <div className='w-full'>
            <div className='w-[90%] md:w-5/6 mx-auto border-b border-b-[#DBD8D1] pb-7' id='services'>
                <h3 className='font-bold text-2xl md:text-4xl leading-snug text-center pb-3 capitalize '>Services And Engagements</h3>

                <div className='space-y-3'>
                    <h4 className='text-purple text-lg md:text-xl font-semibold tracking-wide'>Certification</h4>

                    <div className='space-y-5'>
                        {certifications.map((cert, index)=>(
                            <div className='flex gap-x-4 md:gap-x-8 items-center md:w-4/6 text-[#200F3B]' key={index}>
                                <div className='h-[9.25rem] min-w-[11rem] max-w-[11rem] border border-[#DBD8D1] relative'>
                                    <img src={cert.image} alt="" className='w-full absolute h-full object-cover'/>
                                </div>

                                <p className='md:text-xl text-sm '>{cert.session}</p>
                            </div>
                            
                        ))}
                    </div>
                </div>

                <div className="text-[#200F3B] mt-5 text-sm md:text-lg font-normal space-y-3">

                    <div className='space-y-2'>
                        <h4 className='text-purple text-lg md:text-xl font-semibold tracking-wide'>Awareness</h4>
                        <ul className='space-y-2'>
                            <li className='capitalize md:w-4/6'>anel Discussions & Sessions for Faculty/Management at Institutions Awareness sessions for Students - experience sharing by PM stalwarts.</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h4 className='text-purple text-lg md:text-xl font-semibold tracking-wide'>Generic sessions</h4>
                        <ul className='space-y-2 list-disc pl-7'>
                            <li>Overview and Relevance of Project Management</li>
                            <li>History of Project Management</li>
                            <li>Project Management - A glance into the future</li>
                            <li>Research & Internship</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h4 className='text-purple text-lg md:text-xl font-semibold tracking-wide'>Research Collaboration</h4>
                        <ul className='space-y-2 list-disc pl-7'>
                            <li>Identify common themes of collaboration (PM Related)</li>
                            <li>Define goal scope of research, identify resources etc.</li>
                            <li>Identify target media (online, publications etc.)</li>
                            <li>Publish research</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services