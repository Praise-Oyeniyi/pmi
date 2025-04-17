import React from 'react'
import V1 from "../../assets/images/V1.png"
import V2 from "../../assets/images/V2.png"
import V3 from "../../assets/images/V3.png"
import V4 from "../../assets/images/V4.png"

const Volunteer = () => {
    const volunteerInfo = [
        {
            title:'What is Volunteering?',
            offers:['An act to give of yourself in service to a cause', 
            'Freely giving your time to help an organization, your community or an individual',
            'Platform for giving back, contribute, gain knowledge and share best practices in the Project Management Community'
            ],
            para:'',
            image:V1,
        },
        {
            title:'Benefits of Volunteering',
            offers:['Opportunities in various portfolios - Enables to develop the skills, share and gain knowledge',
            'Enhance and build professional network - Reap the benefits of expanding connections, collaborate, innovate, produce top quality results and leverage career advancements opportunities',
            'Develop as a leader - Develop your personal leadership skills',
            'Earn PDUs - Can help you meet your continuing certification requirements'
            ],
            para:'',
            image:V2,
        },
        {
            title:'Scope of Volunteering',
            offers:['Volunteering',
            'Membership',
            'Professional development',
            'Corporate relations',
            'Marketing and Communications',
            'Academic Relations'
            ],
            para:'Various Portfolios in PMI Bangalore Chapter where one can become an Active Volunteer, such as:',
            image:V3,
        },
        {
            title:'How to become a Volunteer?',
            offers:['Get certified as Project Management Professional','Become a proud member of PMI Bangalore Chapter', 'Logon to VEP - Volunteer Engagement Platform - https://volunteer.pmi.org', 'Update your volunteer profile',
            'Find an opportunity that suits your volunteer profile', 'Apply for the suitable Volunteering Opportunity', 'Apply for the suitable Volunteering Opportunity', 'Discussion with the respective Portfolio Owners', 
            'If position offered, accept the position', 'Start Volunteering!!!' 
            ],
            para:'',
            image:V4,
        },
    ]


  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto' id='volunteer'>
            <div className='my-7 space-y-2'>
                <h3 className='font-bold text-2xl md:text-4xl leading-snug text-center capitalize md:tracking-normal tracking-tight'>Volunteering knows no age limit</h3>
                <p className='text-lg text-[#200F3B] text-center'>The purpose of life is not to be happy, but to matter- to be productive, to be useful, to have it make some difference that you have lived at all." - Leo Rosten</p>
            </div>
            
            <div className="course-body">
                <div>
                    {volunteerInfo.map((e, index)=>(
                        <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex justify-between gap-x-20 items-start ${index === volunteerInfo.length-1 && 'border-none'}`} key={index}>

                            <div className='w-auto text-lg font-normal md:flex justify-between gap-x-8 text-[#200F3B]'>
                                <h4 className='text-lg md:text-2xl font-bold text-dark w-full md:w-[45%]'>{e.title}</h4>
                                <div className='space-y-2 w-full text-sm md:text-lg   md:w-[55%]'>
                                    <p  dangerouslySetInnerHTML={{ __html: e.para }} className='text=[#200F3B]'/>
                                    <ul className='list-disc pl-7'>
                                        {e.offers.map((offer, index)=>(
                                            <li key={index}>{offer}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            
                            <div className='md:min-w-[20rem] w-full md:w-[20rem] h-[11rem] rounded-2xl overflow-hidden my-3'>
                                <img src={e.image} alt="" className='w-full h-full object-cover object-top'/>
                            </div>
                        </div>
                    ))}
                    <div className='w-auto text-lg font-normal text-[#200F3B] mt-5 space-y-7 border-b border-b-[#DBD8D1] pb-7'>
                        <p>
                            PMI Bangalore India Chapter is looking for passionate volunteers for the various volunteering opportunities. Make your mark on PMI and the profession.
                            <br/>
                            <br/>
                            As a member, you can volunteer to work on, and to lead activities that advance the profession and the Institute. We need you. Volunteers are the core and foundation of PMI.
                            <br/>
                            <br/>
                            Your participation enables us to serve, grow and advance the project management profession across the globe.
                            <br/>
                            <br/>
                            We request you to write to us at volunteering@pmibangalore.org for your feedback, suggestions and queries on volunteering and opportunities 
                            <span className='underline block cursor-pointer'>View current opportunities</span>

                        </p>


                        <button className='text-base py-3 px-7 rounded-full bg-purple text-white cursor-pointer hover:opacity-85 transition-all ease-in duration-200'>
                            View current opportunites
                        </button>

                        <h4 className='text-dark text-lg md:text-xl font-bold'>Happy Volunteering at PMIBC</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Volunteer