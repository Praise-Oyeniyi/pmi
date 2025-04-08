import React from 'react'
import B1 from '../../assets/icons/B1.svg'
import B2 from '../../assets/icons/B2.svg'
import B3 from '../../assets/icons/B3.svg'
import B4 from '../../assets/icons/B4.svg'
import B5 from '../../assets/icons/B5.svg'

const Benefits = () => {
    const benefits = [
        {
            offers:["Leverage the experience and expertise of over 500,000 PMI members worldwide. If you need information or insight, don't go it alone or reinvent the wheel; engage your fellow members. Problem solved!"],
            image:B1
        },
        {
            offers:["Events and webinars to keep you aligned with new trends as well as connect with fellow project managers from across the globe with discounted rates for live and virtual events as well as on-demand webinars?. Membership also includes access to two free premium virtual events each year."],
            image:B2,
        },
        {
            offers:["Ready-to-go project plans, deliverable templates, and checklists from among over one thousand peer-tested resources will save you time as you bring your projects to life. All of these and more are avBlable from our community of project management pros at ProjectManagement.com?."],
            image:B3,
        },
        {
            offers:["Free download of the PMBOK® Guide or other PMI Standards and Guides. Get this indispensable resource for learning and reference. Unlimited access to PMIstandards+™, a digital solution that provides instant searchable access to content from PMI's Standards and Guides PLUS original, how-to articles, videos, graphics, and templates that show standards application across industries and approaches."],
            image:B4,
        },
        {
            offers:["Your local chapter is at the heart of your membership. You can connect with others locally or virtually to achieve great strides in your career and in your industry. Share solutions and ideas while enjoying professional development and networking events."],
            image:B5,
        },
    ]

  return (
    <div className="w-full">
        <div className="mx-auto md:w-5/6 w-[90%] pb-10" id='benefits'>
            <div className=' mt-7 w-full'>
                <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center capitalize'>Benefits from your membership</h3>
            </div>
            <div>
                {benefits.map((e, index)=>(
                    <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex items-center ${index === benefits.length-1 && 'border-none pb-5'}`} key={index}>
                        <div className='h-[6rem] rounded-2xl overflow-hidden my-3  w-full  md:w-1/6'>
                            <img src={e.image} alt="" className='w-full h-full object-contain '/>
                        </div>

                        <div className='text-lg font-normal flex justify-between gap-x-8 text-[#200F3B] md:w-5/6'>
                            <div className='space-y-2 w-full text-sm md:text-xl'>
                                <ul className='list-disc pl-7'>
                                    {e.offers.map((offer, index)=>(
                                        <li key={index}>{offer}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Benefits