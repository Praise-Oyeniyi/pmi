import React from 'react'
import DI from '../../assets/images/whycert.png'


const TrainingInfo = () => {
  return (
    <div className='w-full text-dark'>
        <div className="mx-auto w-[90%] md:w-5/6 my-10 py-10 space-y-14">
            <div className="training-dates md:flex space-y-4 md:space-y-0 justify-between items-center gap-x-16">
                <h3 className='text-2xl md:text-4xl font-bold leading-snug w-full md:w-3/6'>Upcoming Batches(Virtual - 4 Days Over Two Weekends)</h3>
                
                <div className='font-semibold space-y-5 md:space-y-3 w-full md:w-3/6'>
                    <p className='text-sm md:text-2xl'>This is a 35-hour instructor-led virtual classroom training, spread across two weekends, from 9 AM to 6 PM each day:</p>
                    <button className='text-sm md:text-lg py-3 px-7 rounded-full bg-purple text-white'>Click Here To Register</button>
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
                    <tr className='text-sm md:text-2xl font-semibold'>
                        <td className=" py-4 border-r border-r-[#BFBFBF] whitespace-nowrap">
                        March
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                        22nd, 23rd, 29th & 30th
                        </td>
                    </tr>
                    <tr className='text-sm md:text-2xl font-semibold'>
                        <td className=" py-4 border-r border-r-[#BFBFBF] whitespace-nowrap">
                        April
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                        19th, 20th, 26th & 27th
                        </td>
                    </tr>
                    <tr className='text-sm md:text-2xl font-semibold'>
                        <td className=" py-4 border-r border-r-[#BFBFBF] whitespace-nowrap">
                        May
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                        17th, 18th, 24th & 25th
                        </td>
                    </tr>
                    <tr className='text-sm md:text-2xl font-semibold'>
                        <td className=" py-4 border-r border-r-[#BFBFBF] whitespace-nowrap">
                        June
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                        21st, 22nd, 28th & 29th
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="fees md:flex space-y-5 md:space-y-0 justify-between items-center">
                <div className='w-full md:w-2/6 space-y-3 md:space-y-0'>
                    <h3 className='text-2xl md:text-5xl font-bold text-dark leading-snug'>Training Fees</h3>
                    <p className='text-sm md:text-2xl font-semibold'>We offer special pricing for PMI Bangalore Chapter members:</p>
                </div>

                <div className='w-full md:w-[55%] '>
                    <div className="w-full md:flex justify-around space-y-5 md:space-y-0">
                        <div className='md:w-3/6 w-full flex gap-x-4'>
                            <div className='w-3/6 border-r border-r-[#DBD8D1]' >
                                <h6 className='text-[#3A2B51] text-sm md:text-lg font-normal'>PMI Bangalore Members</h6>
                                <h4 className='text-purple text-base md:text-2xl font-bold'>₹16,000 + Taxes</h4>
                            </div>

                            <div className='w-3/6'>
                                <h6 className='text-[#3A2B51] text-sm md:text-lg font-normal'>Non-Members</h6>
                                <h4 className='text-purple text-base md:text-2xl font-bold'>₹19,000 + Taxes</h4>
                            </div>
                        </div>
                        

                        <button className='w-fit bg-purple text-white rounded-full py-2 px-7 font-semibold text-sm md:text-lg'>Register Now</button>
                    </div>
                    
                </div>
                
            </div>


            <div className='why-pmp'>
                <div className="description w-full">
                    <div className='md:flex items-center gap-x-7 justify-between w-full'> 
                        <div className="image overflow-hidden w-full md:w-3/6">
                            <img src={DI} alt="" className='h-full w-full object-cover'/>
                        </div>
                        <div className='w-full md:w-3/6 py-5 md:p-5 md:px-7'>
                            <h4 className='text-2xl md:text-5xl  font-bold pb-2 '>Why PMP Quest</h4>
                            <ul className='list-disc pl-7 text-sm md:text-xl  text-[#3A2B51] space-y-2 md:space-y-1 pt-1'>
                                <li>Aligned with the latest PMI PMP® Examination Content Outline</li>
                                <li>Training that satisfies PMI’s 35 contact hour requirement</li>
                                <li>Delivered by PMI-certified instructors</li>
                                <li>Backed by PMI Bangalore’s reputation for quality and success</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default TrainingInfo