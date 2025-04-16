import React from 'react'
import NP1 from '../../../../assets/images/Rs 1 lakh contribution to Anudip Foundation.jpg'
import NP2 from '../../../../assets/images/Oxygen Concentrators to Hemkunt.jpg'
import NP3 from '../../../../assets/images/Collaborating with Robin Hood Army.jpg'
import NP4 from '../../../../assets/images/TABS distributed to students in rural areas.jpg'

const Activity = () => {
    const activityInfo = [
        {
            title:'Rs 1 lakh contribution to Anudip Foundation towards food distribution',
            offers:'',
            para:"PMI Bangalore Chapter made a financial contribution of Rs 1 lakh to Anudip Foundation to support their initiative of distributing food to very-low-income family groups whose primary bread-earners were affected due to COVID. Anudip's task force has delivered to their families at their homes as they were in the stage of isolation because of COVID infection and they were unable to go for work.",
            image:NP1,
        },
        {
            title:'Oxygen Concentrators to Hemkunt Foundations',
            offers:'',
            para:'Chapter donated INR 1.00 Lakhs to Hemkunt Foundations to support this NGO towards its COVID relief efforts for purchasing Oxygen concentrators during the second wave.',
            image:NP2,
        },
        {
            title:'Collaborating with Robin Hood Army for distribution of food',
            offers:'',
            para:'Chapter collaborated in a small way with the Robin Hood Army to distribute food for the needy. Robin Hood Army is a voluntary based Zero funds organization where food distributed to the needy is sourced from surplus or freshly cooked food on a goodwill basis.',
            image:NP3,
        },
        {
            title:'TABS distributed to students in rural areas.',
            offers:'',
            para:'Chapter funded TABS, loaded with content of 10th Standard Syllabus, for students of Jayamangali Rural High School wherein the village has the challenge of electricity and internet connectivity during Covid period in Sept 2020',
            image:NP4,
        },
    ]


  return (
    <div className="w-full">
        <div className="mx-auto md:w-5/6 w-[90%] border-b border-b-[#DBD8D1]" id='activity'>
            {activityInfo.map((e, index)=>(
                <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex justify-between gap-x-20 items-start ${index === activityInfo.length-1 && 'border-none pb-5'}`} key={index}>

                    <div className='w-auto text-lg font-normal md:flex justify-between gap-x-8 text-[#200F3B]'>
                        <h4 className='text-lg md:text-3xl font-bold text-dark w-full md:w-[45%]'>{e.title}</h4>
                        <div className='space-y-2 w-full text-sm md:text-xl   md:w-[55%]'>
                            <p  dangerouslySetInnerHTML={{ __html: e.para }} className='text=[#200F3B]'/>
                            {/* <ul className='list-disc pl-7'>
                                {e.offers.map((offer, index)=>(
                                    <li key={index}>{offer}</li>
                                ))}
                            </ul> */}
                        </div>

                    </div>
                    
                    <div className='md:min-w-[20rem] w-full md:w-[20rem] h-[11rem] rounded-2xl overflow-hidden my-3'>
                        <img src={e.image} alt="" className='w-full h-full object-cover object-top'/>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Activity