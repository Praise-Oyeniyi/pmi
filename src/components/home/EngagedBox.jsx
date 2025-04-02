import React from 'react'
import { Link } from 'react-router'
import { FaChevronRight } from "react-icons/fa6";


const EngagedBox = ({image, head, title, body,style}) => {
  return (
    <div className={`${style} border-b-[#00000054] py-2`}>
        <div className='flex items-start justify-between gap-x-14'>
            <div className='flex items-start gap-x-8 w-[60%] justify-start py-3'>
                <div className='min-w-[15rem] h-[10rem] rounded-[1rem] overflow-hidden'>
                    <img src={image} alt="" className='min-h-full min-w-full object-cover'/>
                </div>
                
                <div>
                    <h6 className='text-base font-normal'>{head}</h6>
                    <h4 className='text-3xl font-bold '>{title}</h4>
                </div>
            </div>

            <div className='text-xl w-[40%]'>
                <p className='font-semibold text-lg pt-1'>{body}</p>
                <Link to={'/Home/Special Program/1'}>
                    <button className=' font-bold pt-2 flex gap-x-1 items-center cursor-pointer'>Learn More <FaChevronRight size={14}/></button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default EngagedBox