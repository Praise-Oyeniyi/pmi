import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";



const RelatedEvents = ({image, date, title,}) => {
  return (
    <div className='w-full border bg-[#FBFBFB] rounded-xl md:rounded-3xl overflow-hidden p-3 md:p-4 border-[#E8E8E8]'>
        <div className="inner flex w-full gap-x-3 md:gap-x-4">
          <div className="image rounded-lg md:rounded-3xl overflow-hidden">
            <img src={image} alt="" className='md:h-[10.72rem] md:min-w-[14rem] object-cover'/>
          </div>

          <div className='flex flex-col justify-between w-4/6'>
            <div className='flex items-center justify-between w-full'>

              <div className='flex items-center justify-between px-2 md:px-3 py-2 rounded-full border border-[#F3EFEF]'>
                <FaCalendar className="text-[#040301] mr-1 md:mr-2 md:h-3.5 h-2.5"/>
                <h6 className='border-l border-l-[#F3EFEF] pl-1 md:pl-2 text-xs text-nowrap md:text-base font-normal'>{date}</h6>
              </div>


              <div className='bg-white border border-[#F3EFEF] rounded-full h-8 w-8 md:h-12 md:w-12 flex justify-center items-center'>
                <BsArrowUpRight className="md:h-3.5 h-2.5"/>
              </div>
            </div>

            <h4 className='text-base md:text-3xl font-bold capitalize pb-1'>{title}</h4>
          </div>
        </div>
    </div>
  )
}

export default RelatedEvents