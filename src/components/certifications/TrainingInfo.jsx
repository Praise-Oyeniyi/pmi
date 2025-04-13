import React from 'react'
import { Link } from 'react-router'


const TrainingInfo = ({schTitle, schDesc, whyTitle, feeM, feeNM,trainFeeTitle, whyDesc, whyImage, dates, link}) => {
  return (
    <div className='w-full text-dark'>
        {schTitle !== null && schDesc !== null && 
        <div className="mx-auto w-[90%] md:w-5/6 my-10 py-10 space-y-14">
            <div className="training-dates md:flex space-y-4 md:space-y-0 justify-between items-center gap-x-16">
                <h3 className='text-2xl md:text-4xl font-bold leading-snug w-full md:w-3/6'>{schTitle}</h3>
                
                <div className='font-semibold space-y-5 md:space-y-3 w-full md:w-3/6'>
                    <p className='text-sm md:text-2xl'>{schDesc}</p>
                    <Link to={`${link}`}><button className='text-sm md:text-lg py-3 px-7 rounded-full bg-purple text-white cursor-pointer hover:opacity-85 transition-all ease-in duration-200'>Click Here To Register</button></Link>
                </div>
            </div>

            <div className="overflow-x-hidden rounded-3xl border border-[#BFBFBF]">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple text-center">
                    <tr className='text-sm md:text-2xl font-semibold'>
                        <th 
                        scope="col" 
                        className="w-2/4 py-3 border-r border-r-[#fff] text-sm md:text-2xl font-semibold text-white"
                        >
                        Month
                        </th>
                        <th 
                        scope="col" 
                        className="w-2/4 py-3 text-sm md:text-2xl font-semibold text-white"
                        >
                        Training Dates
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-center">
                        {dates?.map((e, index)=>(
                            <tr className='text-sm md:text-2xl font-semibold' key={index}>
                            <td className=" py-4 border-r border-r-[#BFBFBF] whitespace-nowrap">
                            {e?.month}
                            </td>
                            <td className=" py-4 whitespace-nowrap">
                                {e?.dates.map((date, pos)=>(
                                    date + ', '
                                ))}
                            </td>
                        </tr>

                        ))}
                        
                    </tbody>
                </table>
            </div>

            <div className="fees md:flex space-y-5 md:space-y-0 justify-between items-center">
                <div className='w-full md:w-2/6 space-y-3 md:space-y-0'>
                    <h3 className='text-2xl md:text-5xl font-bold text-dark leading-snug'>{trainFeeTitle}</h3>
                    <p className='text-sm md:text-2xl font-semibold'>We offer special pricing for PMI Bangalore Chapter members:</p>
                </div>

                <div className='w-full md:w-[55%] '>
                    <div className="w-full md:flex items-center justify-between space-y-5 md:space-y-0">
                        <div className='md:w-4/6 w-full flex  gap-x-4'>
                            <div className='w-3/6 border-r border-r-[#DBD8D1]' >
                                <h6 className='text-[#3A2B51] text-sm md:text-lg font-normal'>PMI Bangalore Members</h6>
                                <h4 className='text-purple text-base md:text-2xl font-bold'>{feeM}</h4>
                            </div>

                            <div className='w-3/6'>
                                <h6 className='text-[#3A2B51] text-sm md:text-lg font-normal'>Non-Members</h6>
                                <h4 className='text-purple text-base md:text-2xl font-bold'>{feeNM}</h4>
                            </div>
                        </div>
                        
                        <div>
                            <Link to={`${link}`}>
                                <button 
                                    className='w-fit bg-purple text-white rounded-full py-2 px-7 font-semibold text-sm md:text-lg cursor-pointer hover:opacity-85 transition-all ease-in duration-200'>
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
            </div>


            <div className='why-pmp'>
                <div className="description w-full">
                    <div className='md:flex items-center gap-x-7 justify-between w-full'> 
                        <div className="image overflow-hidden w-full md:w-3/6">
                            <img src={whyImage?.url} alt={whyImage?.alt} className='h-full w-full object-cover'/>
                        </div>
                        <div className='w-full md:w-3/6 py-5 md:p-5 md:px-7'>
                            <h4 className='text-2xl md:text-5xl  font-bold pb-2 '>{whyTitle}</h4>
                            <p className='pl-2 text-sm md:text-xl  text-[#3A2B51] space-y-2 md:space-y-1 pt-1'>
                                {whyDesc}
                            </p>
                            {/* <ul className='list-disc pl-7 text-sm md:text-xl  text-[#3A2B51] space-y-2 md:space-y-1 pt-1'>
                                <li>Aligned with the latest PMI PMP® Examination Content Outline</li>
                                <li>Training that satisfies PMI’s 35 contact hour requirement</li>
                                <li>Delivered by PMI-certified instructors</li>
                                <li>Backed by PMI Bangalore’s reputation for quality and success</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

            </div>
            
        </div>}

    </div>
  )
}

export default TrainingInfo