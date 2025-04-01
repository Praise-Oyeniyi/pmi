import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";



const RelatedEvents = ({image, date, title,}) => {
  return (
    <div className='w-full border bg-[#FBFBFB] rounded-3xl overflow-hidden p-4 border-[#E8E8E8]'>
        <div className="inner flex w-full gap-x-4">
          <div className="image rounded-3xl overflow-hidden">
            <img src={image} alt="" className='h-[10.72rem] min-w-[14rem] object-cover'/>
          </div>

          <div className='flex flex-col justify-between w-4/6'>
            <div className='flex items-center justify-between w-full'>

              <div className='flex items-center px-3 py-2 rounded-full border border-[#F3EFEF]'>
                <FaCalendar size={15} className="text-[#040301] mr-2"/>
                <h6 className='border-l border-l-[#F3EFEF] pl-2 text-base font-normal'>{date}</h6>
              </div>


              <div className='bg-white border border-[#F3EFEF] rounded-full h-12 w-12 flex justify-center items-center'>
                <BsArrowUpRight size={18}/>
              </div>
            </div>

            <h4 className='text-3xl font-bold capitalize pb-1'>{title}</h4>
          </div>
        </div>
    </div>
  )
}

export default RelatedEvents