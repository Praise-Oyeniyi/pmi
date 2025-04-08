import React from 'react'
import WWD1 from '../../../../assets/images/wwd1.png'
import WWD2 from '../../../../assets/images/wwd2.png'
import WWD3 from '../../../../assets/images/wwd3.png'
import WWD4 from '../../../../assets/images/wwd4.png'

const WhatWeDo = () => {
    const wwd = [
        {
            title:'Training',
            offers:['We support to you raise fund for charity causes that can be used to improve the quality of African children, who are living in the worst condition.'],
            image:WWD1,
        },
        {
            title:'Conferences',
            offers:['Charity organizes different event to raise money for children’s welfare. We have generated around 80% of the resource through different events.'],
            image:WWD2,
        },
        {
            title:'Webinars',
            offers:['Our sponsorships program has not only helped us achieve mission, but also helped sponsor boost their businesses.'],
            image:WWD3,
        },
        {
            title:'Outreach',
            offers:['Join us? Be a part of our family of investors, whose contribution have propelled us to reach to the envisioned goal without any problem.'],
            image:WWD4,
        },
    ]


  return (
    <div className="w-full">
        <div className="mx-auto md:w-5/6 w-[90%] pb-14" id='activity'>
            <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center capitalize'> What we do</h3>
            
            {wwd.map((e, index)=>(
                <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex justify-between gap-x-20 items-start ${index === wwd.length-1 && 'border-none pb-5'}`} key={index}>

                    <div className='w-auto text-lg font-normal md:flex justify-between gap-x-8 text-[#200F3B]'>
                        <h4 className='text-lg md:text-3xl font-bold text-dark w-full md:w-2/6'>{e.title}</h4>
                        <div className='space-y-2 w-full text-sm md:text-xl   md:w-4/6'>
                            {/* <p  dangerouslySetInnerHTML={{ __html: e.para }} className='text=[#200F3B]'/> */}
                            <ul className='list-disc pl-7'>
                                {e.offers.map((offer, index)=>(
                                    <li key={index}>{offer}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    
                    <div className='md:min-w-[20rem] w-full md:w-[20rem] h-[11rem] rounded-2xl overflow-hidden my-3'>
                        <img src={e.image} alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default WhatWeDo