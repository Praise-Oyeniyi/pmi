import React from 'react'
import  WTG1 from '../../assets/images/WG1.png'
import  WTG2 from '../../assets/images/WG2.png'
import  WTG3 from '../../assets/images/WG3.png'
import  WTG4 from '../../assets/images/WG4.png'
import  WTG5 from '../../assets/images/WG5.png'
import  WTG6 from '../../assets/images/WG6.png'
import  WTG7 from '../../assets/images/WG7.png'
import  WTG8 from '../../assets/images/WG8.png'
import  WTG9 from '../../assets/images/WG9.png'

const WGain = () => {
    const wtg = [
        {
            title:'Shape the future of project management',
            offers:['Join leaders who look to the future, watch trends and influence them in the project management field.'],
            image:WTG1,
        },
        {
            title:'Advance your career',
            offers:["Be seen where hiring managers are looking. Organizations around the world go to PMI to find talent. Want your next employer to know you're one of the best? Become a PMI member."],
            image:WTG2,
        },
        {
            title:'Exchange ideas with global thought leaders',
            offers:["Be seen where hiring managers are looking. Organizations around the world go to PMI to find talent. Want your next employer to know you're one of the best? Become a PMI member."],
            image:WTG3,
        },
        {
            title:' Join a collective voice',
            offers:["Raise your voice for change, innovation and the advancement of project management, as well as organization and government success. Together we can influence change!"],
            image:WTG4,
        },
        {
            title:' Get involved in the pmi educational foundation  (pmief)',
            offers:["PMIEF is the nonprofit, humanitarian arm of PMI. This public charity promotes project management for social good. PMI members and volunteers facilitate these activities by bringing PMIEF materials into classrooms, communities and organizations. To learn more go to: PMIEF.org."],
            image:WTG5,
        },
        {
            title:' Impact leading edge development and innovation',
            offers:["Join fellow members and influence the future of how businesses will ultimately succeed. Be part of the development, not just a passive recipient."],
            image:WTG6,
        },
        {
            title:' Talk with subject matter experts',
            offers:["Leverage the experience and expertise of over 500,000 PMI members worldwide. If you need information or insight, don't go it alone or reinvent the wheel; engage your fellow members. Problem solved!"],
            image:WTG7,
        },
        {
            title:' Access career development resources',
            offers:["Leverage the experience and expertise of over 500,000 PMI members worldwide. If you need information or insight, don't go it alone or reinvent the wheel; engage your fellow members. Problem solved!"],
            image:WTG8,
        },
        {
            title:' Maintain your project management certification',
            offers:["Let the organization that created your certification also help you keep it. As a member, you have access to substantial resources to help maintain your certification while you gain powerful knowledge to help you advance your career."],
            image:WTG9,
        },
    ]

  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto space-y-2 border-b border-b-[#DBD8D1] pb-10' id='what'>
            <div className=' mt-7'>
                <h3 className='font-bold text-2xl md:text-4xl leading-snug text-center capitalize'>What's in it for you?</h3>
            </div>

            <div className="">
                <div className='text-sm md:text-lg font-normal text-[#200F3B] space-y-3'>
                   <div className='space-y-3'>
                        <h4 className='text-purple font-semibold text-lg md:text-xl'>The Answer is Simple...</h4>
                        <p>
                            The resources, programs and services you need to obtain valuable knowledge, network with 
                            project professionals around the globe and advance your career.
                            <br/>
                            <br/>
                            When you join PMI, you become part of a community of over 500,000 project professionals in over 185 countries. Our members benefit from many valuable resources that help them learn, connect and advance.
                            <br/>
                            <br/>
                        </p>
                    </div>

                    <div>
                        {wtg.map((e, index)=>(
                            <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex justify-between gap-x-20 items-start ${index === wtg.length-1 && 'border-none pb-5'}`} key={index}>

                                <div className='w-auto text-lg font-normal md:flex justify-between gap-x-8 text-[#200F3B]'>
                                    <h4 className='text-lg md:text-2xl font-bold text-dark w-full md:w-[45%]'>{e.title}</h4>
                                    <div className='space-y-2 w-full text-sm md:text-lg   md:w-[55%]'>
                                        {/* <p  dangerouslySetInnerHTML={{ __html: e.para }} className='text=[#200F3B]'/> */}
                                        <ul className='list-disc pl-7'>
                                            {e.offers.map((offer, index)=>(
                                                <li key={index}>{offer}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                                
                                <div className='md:min-w-[20rem] w-full md:w-[20rem] h-[11rem] rounded-2xl overflow-hidden my-3'>
                                    <img src={e.image} alt="" className='w-full h-full object-cover object-top'/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WGain