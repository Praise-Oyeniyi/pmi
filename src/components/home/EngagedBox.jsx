import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";


const EngagedBox = ({image, head, title, body,style, name, id}) => {
  return (
    <div className={`${style} border-b-[#00000054] py-2`}>
        <div className='md:flex items-center justify-between gap-x-14'>
            <div className='md:flex space-y-3 md:space-y-0 items-center gap-x-8 w-full md:w-[60%] justify-start py-3'>
                <div className='min-w-[18rem] w-full md:max-w-[18rem] relative h-[10rem] rounded-[1rem] overflow-hidden'>
                    <img src={image} alt="" className='min-h-full min-w-full absolute object-cover object-top'/>
                </div>
                
                <div className='space-y-1 md:space-y-0'>
                    <h6 className='text-sm md:text-base font-normal truncate'>{head}</h6>
                    <h4 className='text-lg md:text-3xl font-bold leading-tight'>{title}</h4>
                </div>
            </div>

            <div className='md:text-xl text-sm w-full md:w-[40%]'>
                <p className='font-medium md:text-xl md:pt-1'>{body}</p>
                <Link to={`/Special Program/${name}/${id}`} > 
                    <button 
                        className='w-fit font-bold pt-2 flex gap-x-1 items-center cursor-pointer transition-all ease-in duration-300 hover:underline  underline-offset-3'
                    >
                            Learn More 
                            <FaChevronRight className='md:h-3.5 h-2.5'/>
                    </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default EngagedBox