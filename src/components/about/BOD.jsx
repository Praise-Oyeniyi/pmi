import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import BOD1 from '../../assets/images/BOD!.png'
import BOD2 from '../../assets/images/BOD2.png'
import BOD3 from '../../assets/images/BOD3.png'


const BOD = () => {
    const BODS = [
        {
            name:'Ike Nwankwo, MSc, MBA, PMP, DASSM',
            role:'PMI Board of Directors Chair',
            mail:'Ike.Nwankwo@bod.pmi.org',
            date:'2021-2026',
            image:BOD1,
        },
        {
            name:'Diane Alsing, D.Eng, PMP, PMI-ACP',
            role:'Compensation and Talent Committee Chair',
            mail:'Diane.Alsing@bod.pmi.org',
            date:'2023-2025',
            image:BOD2,
        },
        {
            name:'Pat Lucey, M.Eng, PMI-ACP, PMP, CDir',
            role:'Audit and Risk Committee Chair',
            mail:'Pat.Lucey@bod.pmi.org',
            date:'2024-2026',
            image:BOD3,
        },

    ]

    


  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 text-dark border-b border-b-[#DBD8D1] mb-10 pb-12">
            <h3 className='font-bold text-2xl md:text-5xl md:leading-snug text-center capitalize'>Board of Directors</h3>
            <p className='text-sm md:text-xl font-normal py-3 md:pb-7 text-center'>
                PMI is governed by a Board comprised of member-elected directors who serve three-year 
                terms. The Board Chair serves as an Elected Officer of the Board per the PMI Bylaws. The collective wisdom, 
                experience, diversity and passion of the Board ultimately sets and executes our core ideology, purpose and 
                values—the enduring principles that guide us—our essential reasons for being. The Board and its committees 
                drive our vitality and relevance.
            </p>

            <div className='w-full'>
                <div>
                    {BODS.map((e, index) =>(
                        <div className={`border-b py-5 border-b-[#DBD8D1] w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row  gap-x-10 justify-between items-center ${index === BODS.length-1 && 'border-none'}`} key={index}>
                           
                            <div className='flex flex-col md:flex-row  justify-between items-start w-full md:w-4/6 order-2 md:order-1'>
                                <h4 className='text-lg md:text-3xl font-bold md:w-3/6 pr-10 tracking-tighter md:tracking-normal'>{e.name}</h4>
                                <div className="dir-info text-sm md:text-lg pt-2 md:pt-0 font-normal space-y-2 md:w-3/6">
                                    <h5 className=''>{e.role}</h5>
                                    <h6>{e.mail}</h6>
                                    <h6>{e.date}</h6>
                                    <button className='flex gap-x-1 md:gap-x-2 items-center font-bold text-sm md:text-xl'>View Bio <FaChevronRight className='h-2.5 md:h-3.5'/></button>
                                </div>
                            </div>
                            
                            <div className='h-[9.6rem] md:w-[20rem] w-full rounded-2xl overflow-hidden md:h-48 order-1 md:order-2'>
                                <img src={e.image} alt="pmi board of directors" className='h-full w-full object-fill object-top'/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="other-bod md:flex justify-between items-center pt-3 md:pt-10 space-y-2 md:space-y-0">
                    <h4 className='text-base md:text-3xl font-normal'>Past Board Members</h4>
                    <div className='text-sm  md:text-xl space-y-2 capitalize'>
                        <p className='font-semibold'>Explore the PMI Board of directors from present day to inception.</p>
                        <button className='font-bold flex gap-x-1 md:gap-x-2 items-center'>View past PMI board members <FaChevronRight className='h-2.5 md:h-3.5'/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BOD