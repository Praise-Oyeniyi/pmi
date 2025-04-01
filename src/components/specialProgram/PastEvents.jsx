import React from 'react'
import E1 from '../../assets/images/Enagaged1.png'
import EngagedBox from '../home/EngagedBox'



const PastEvents = () => {
    const stayEngaged = [
        {
          head:'E&C PM FOOTPRINTS | 12 APR 2025',
          title:'Best Practices in Forensic Schedule Analysis',
          body:'The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims.',
          image:E1
        },
        {
            head:'E&C PM FOOTPRINTS | 12 APR 2025',
            title:'Best Practices in Forensic Schedule Analysis',
            body:'The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims.',
            image:E1
          },
       ]

  return (
    <div className='w-full my-20 '>
        <div className="inner w-5/6 mx-auto py-7 px-14">
            <div className='flex items-center gap-x-7 mb-4'>
                <h4 className='uppercase text-black font-semibold tracking-wider text-4xl'>past events</h4>
                <button className='bg-[#F2F2F2] rounded-[2px] text-base font-semibold  border border-[#DCDCDC] w-fit px-3 py-2'> 2025</button>
            </div>

            <div>
                {stayEngaged.map((e, index)=>(
                    <div key={index}>
                        <EngagedBox title={e.title} head={e.head} body={e.body} image={e.image} style={'border-b text-black'}/>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default PastEvents