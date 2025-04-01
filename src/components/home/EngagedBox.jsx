import React from 'react'
import { Link } from 'react-router'

const EngagedBox = ({image, head, title, body,style}) => {
  return (
    <div className={`${style} border-b-[#00000054] `}>
        <div className='flex items-start justify-between gap-x-16'>
            <div className='flex items-start gap-x-8 w-[60%] justify-start py-3'>
                <div className='min-w-[15rem] h-[10rem] rounded-[1rem] overflow-hidden'>
                    <img src={image} alt="" className='min-h-full min-w-full object-cover'/>
                </div>
                
                <div>
                    <h6 className='text-base font-normal'>{head}</h6>
                    <h4 className='text-3xl font-bold '>{title}</h4>
                </div>
            </div>

            <div className='text-xl pb-3 w-[40%]'>
                <p className='font-semibold text-lg'>{body}</p>
                <Link to={'/Home/Special Program/1'}>
                    <button className=' font-bold pt-2'>Learn More <span>next</span></button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default EngagedBox