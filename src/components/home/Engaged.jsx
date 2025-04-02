import React from 'react'
import E1 from '../../assets/images/Enagaged1.png'
import E2 from '../../assets/images/Enagaged2.png'
import EngagedBox from './EngagedBox'
import { FaChevronRight } from "react-icons/fa6";



const Engaged = () => {
    const stayEngaged = [
        {
          head:'E&C PM FOOTPRINTS | 12 APR 2025',
          title:'Best Practices in Forensic Schedule Analysis',
          body:'The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims.',
          image:E1
        },
        {
          head:'PM FOOTPRINTS | 12 APR 2025',
          title:'Enhancing business agility in pharmaceutical Industry', 
          body:'The pharmaceutical sector needs to be ready to react and adjust swiftly to addressing a variety of issues in the ever-evolving global and complex regulatory landscape presently.',
          image:E2
        },
      ]

  return (
    <div>
        <div className="engaged-inner mx-auto w-5/6 ">
            <div className="head mb-7">
                <h3 className='text-5xl font-bold pb-1 leading-snug'>Stay Engaged. Stay Ahead</h3>
                <p className='text-xl font-semibold'>
                    Be part of impactful events that connect you with industry experts and fellow professionals. From insightful webinars to in-person experiences, explore what's upcoming and revisit the highlights from our knowledge-rich archives.
                </p>
            </div>

            <div className="body">
                {stayEngaged.map((e, index)=>(
                <div key={index}>
                    <EngagedBox title={e.title} head={e.head} body={e.body} image={e.image} style={'border-b'}/>
                </div>
                ))}
            </div>
            <p className='text-right my-3 text-xl font-bold w-fit ml-auto cursor-pointer flex gap-x-1 items-center'>GO TO ARCHIVES <FaChevronRight size={14}/></p>
        </div>
    </div>
  )
}

export default Engaged