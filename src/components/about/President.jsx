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
        <div className="mx-auto w-5/6 text-dark mb-14">
            <h3 className='font-bold text-5xl leading-snug text-center capitalize py-7'>Past Presidents</h3>

            <div className='w-full'>
                <div>
                    {PP.map((e, index) =>(
                        <div className={`border-b py-5 border-b-[#DBD8D1] w-full flex items-center gap-x-10 justify-between ${index === PP.length-1 && 'border-none'}`} key={index}>
                            <div className='flex justify-between items-start w-4/6 '>
                                <h4 className='text-3xl font-bold w-3/6 pr-10'>{e.name}</h4>
                                <div className="dir-info text-lg font-normal space-y-2 w-3/6">
                                    <h5 className=''>{e.role}</h5>
                                    <h6>{e.company} </h6>
                                    <div className='flex items-center gap-x-2'>
                                        <h6 className='border-r border-r-[#DBD8D1] pr-2'>{e.date}</h6>
                                        <button className='cursor-pointer bg-[#0077B5] text-white w-6 h-6 flex justify-center items-center rounded-full'>
                                            <FaLinkedinIn size={14}/>
                                        </button>
                                    </div>
                                    <button className='flex gap-x-2 items-center font-bold text-xl'>View Bio <FaChevronRight size={14}/></button>
                                </div>
                            </div>
                            
                            <div className='h-48'>
                                <img src={e.image} alt="pmi board of directors" className='h-full w-full object-cover'/>
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