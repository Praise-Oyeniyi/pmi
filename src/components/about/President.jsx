import React from 'react'
import PP1 from '../../assets/images/PP1.png'
import PP2 from '../../assets/images/PP2.png'
import PP3 from '../../assets/images/PP3.png'
import { FaChevronRight, FaLinkedinIn } from "react-icons/fa6";

const President = () => {
    const PP =[
        {
            name:'Ike Nwankwo, MSc, MBA, PMP, DASSM',
            role:'PMI Board of Directors Chair',
            company:'Sachin Sood',
            date:'Jan 2022 - Dec 2023',
            image:PP1,
        },
        {
            name:'Diane Alsing, D.Eng, PMP, PMI-ACP',
            role:'PMI Board of Directors Chair',
            company:'Muktesh Murthy',
            date:'Apr 2020 - Dec 2021',
            image:PP2,
        },
        {
            name:'Pat Lucey, M.Eng, PMI-ACP, PMP, CDir',
            role:'PMI Board of Directors Chair',
            company:'Lt Col L Shri Harsha (Retd.)',
            date:'Apr 2019 - Mar 2020',
            image:PP3,
        },
    ]

  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 text-dark mb-14">
            <h3 className='font-bold text-2xl md:text-5xl md:leading-snug text-center capitalize md:py-7'>Past Presidents</h3>

            <div className='w-full'>
                <div>
                    {PP.map((e, index) =>(
                        <div className={`border-b py-5 border-b-[#DBD8D1] gap-y-4 md:gap-y-0 w-full flex md:flex-row flex-col items-center gap-x-10 justify-between ${index === PP.length-1 && 'border-none'}`} key={index}>
                            
                            <div className='md:flex justify-between items-start w-full md:w-4/6 order-2 md:order-1'>
                                <h4 className='text-lg md:text-3xl font-bold w-full md:w-3/6 tracking-tighter md:tracking-normal md:pr-10'>{e.name}</h4>
                                
                                <div className="dir-info text-sm md:text-lg font-normal space-y-2 md:w-3/6">
                                    <h5 className=''>{e.role}</h5>
                                    <h6>{e.company} </h6>
                                    <div className='flex items-center gap-x-1 md:gap-x-2'>
                                        <h6 className='border-r border-r-[#DBD8D1] pr-2'>{e.date}</h6>
                                        <button className='cursor-pointer bg-[#0077B5] text-white w-4 h-4 md:w-6 md:h-6 flex justify-center items-center rounded-full'>
                                            <FaLinkedinIn className='h-2 md:h-3.5'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className=' h-[10rem] w-full rounded-2xl overflow-hidden md:h-48 order-1 md:order-2'>
                                <img src={e.image} alt="pmi board of directors" className='h-full w-full object-fill object-top'/>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default President