import React from 'react'
import T1 from '../../../../assets/images/team1.png'
import T2 from '../../../../assets/images/team2.png'
import T3 from '../../../../assets/images/team3.png'

const Team = () => {
    const teamMember = [
        {
            image:T1,
            about:'Srikanta Konnanur is a FMCG industry veteran with over 35 years of experience in FMCG and Healthcare Industry. His previous role was Vice President- Sales & BD at Amrutanjan Healthcare Pvt. Ltd. Has significant experience in leading and building sales and marketing capability. He is PMP certified and has been a member of the PMI Bengaluru Chapter since 2016.He has been active with volunteering opportunities and has been with the academic relations portfolio since 2020.',
        },
        {
            image:T2,
            about:'Bhaskar Jaganathan is a Seasoned Project Manager with more than 15 years of IT project management experience. He is currently working as Senior Delivery Manager in IBM. He also conducts Project Management & Agile delivery sessions in his organization. He is a certified PMP professional since 2006 and member of PMI Bengaluru Chapter since 2012.',
        },
        {
            image:T3,
            about:'Kartikeyan Ramamurthy has more than 20+ years experience in Project, Program, Portfolio management and PMOs. He is currently working in the role of Director-Strategy at Amadeus Labs. He is a certified PMP, PfMP, PMO-CP, DevOps Leader. He is currently a member of the board of directors at PMI Bengaluru Chapter. He has been a member of the Bengaluru chapter since 2011 (with a break 2015-16, returning in 2017)',
        },
    ]

  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto border-b border-b-[#DBD8D1] pb-7 space-y-5' id='team'>
            <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center md:pb-3 capitalize '>The team</h3>

            <div>
                <div className='space-y-7'>
                    {teamMember.map((teamWho, index)=>(
                        <div className='md:flex gap-x-7 items-start w-full text-[#200F3B]' key={index}>
                            <div className='h-[9.375rem] mb-3 md:mb-0 min-w-[9.375rem] max-w-[9.375rem] border border-[#DBD8D1] relative'>
                                <img src={teamWho.image} alt="" className='w-full absolute h-full object-cover'/>
                            </div>

                            <p className='md:text-xl text-sm'>{teamWho.about}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team